import { ref, reactive, onMounted, onUnmounted, watch } from "vue";

interface xRxProps {
  orchestrator_host: string;
  orchestrator_port: string;
  orchestrator_path: string;
  greeting_filename: string;
  orchestrator_ssl: boolean;
  tts_sample_rate: number;
  stt_sample_rate: number;
}

type ChatMessage = {
  sender: string;
  message: string;
  widget?: any;
  timestamp: Date;
  type?: string;
};

const useXRxClient = ({
  orchestrator_host = "localhost",
  orchestrator_port = "8090",
  orchestrator_path = "/api/v1/ws",
  greeting_filename = "greeting.mp3",
  orchestrator_ssl = false,
  tts_sample_rate = 16000,
  stt_sample_rate = 16000,
}: xRxProps) => {
  const recordingContext = ref<AudioContext | null>(null);
  const playbackContext = ref<AudioContext | null>(null);
  const isAudioContextStarted = ref(false);
  const incomingAudioBuffer = ref<ArrayBuffer[]>([]);
  const isPlayingAudio = ref(false);

  const isRecording = ref(false);
  const isVoiceMode = ref(true);
  const isUserSpeaking = ref(false);
  const isUserSpeakingRef = ref(false);

  const mediaRecorder = ref<ScriptProcessorNode | null>(null);
  const mediaStream = ref<MediaStream | null>(null);
  const chatHistory = ref<ChatMessage[]>([]);
  const socket = ref<WebSocket | null>(null);
  const isAgentSpeaking = ref(false);
  const isAgentThinking = ref(false);
  const isAudioPlaying = ref(false);
  const currentBufferSource = ref<AudioBufferSourceNode | null>(null);

  const showStartButton = ref(true);
  const isAudioGenerationDone = ref(false);

  const widgetQueue = ref<ChatMessage[]>([]);

  const iconAnimationTimeout = ref<number | null>(null);

  const scrollToBottom = () => {
    // Implement scrolling logic here
    // This could be done using a ref to the chat container and scrolling to its bottom
  };

  watch(chatHistory, () => {
    scrollToBottom();
  });

  const playReceivedAudio = (arrayBuffer: ArrayBuffer | null) => {
    if (playbackContext.value) {
      if (arrayBuffer !== null && !isUserSpeakingRef.value) {
        incomingAudioBuffer.value.push(arrayBuffer);
      }
      if (
        incomingAudioBuffer.value.length > 0 &&
        !isPlayingAudio.value &&
        !isUserSpeakingRef.value
      ) {
        const audioData = incomingAudioBuffer.value.shift() as ArrayBuffer;
        const int16Array = new Int16Array(audioData);

        if (!isAgentSpeaking.value) {
          isAgentSpeaking.value = true;
          console.log("starting icon animation");
        }
        const durationSec = int16Array.length / tts_sample_rate;
        console.log("received audio of duration : " + durationSec);
        if (iconAnimationTimeout.value) {
          clearTimeout(iconAnimationTimeout.value);
        }
        iconAnimationTimeout.value = setTimeout(() => {
          console.log("stopping icon animation");
          isAgentSpeaking.value = false;
        }, durationSec * 1000) as unknown as number;

        const float32Array = new Float32Array(int16Array.length);
        for (let i = 0; i < int16Array.length; i++) {
          float32Array[i] = int16Array[i] / 0x8000;
        }

        const channels = 1;
        const buffer = playbackContext.value.createBuffer(
          channels,
          float32Array.length,
          tts_sample_rate
        );
        buffer.getChannelData(0).set(float32Array);

        const source = playbackContext.value.createBufferSource();
        source.buffer = buffer;
        source.connect(playbackContext.value.destination);
        source.start();
        currentBufferSource.value = source;
        console.log("start playing audio");
        isPlayingAudio.value = true;
        isAudioPlaying.value = true;
        source.onended = () => {
          source.disconnect();
          isPlayingAudio.value = false;
          console.log("end playing audio");
          isAudioPlaying.value = false;
          playReceivedAudio(null);
          processWidgetQueue();
        };
      }
    }
  };

  const processWidgetQueue = () => {
    console.log(
      `processing the widget queue with length: ${widgetQueue.value.length}`
    );
    while (widgetQueue.value.length > 0 && !isPlayingAudio.value) {
      const widgetMessage = widgetQueue.value.shift();
      if (widgetMessage) {
        chatHistory.value.push(widgetMessage);
      }
    }
  };

  const sendAction = async (tool: string, parameters: any) => {
    try {
      if (socket.value) {
        const payload = {
          type: "action",
          content: {
            tool: tool,
            parameters: JSON.stringify(parameters),
          },
          modality: isVoiceMode.value ? "audio" : "text",
        };
        socket.value.send(JSON.stringify(payload));
        console.log("Action sent successfully:", payload);
      }
    } catch (error) {
      console.error("Error sending action to backend:", error);
    }
  };

  const sendMessage = (message: string) => {
    if (socket.value) {
      socket.value.send(message);
      chatHistory.value.push({
        sender: "user",
        message: message,
        timestamp: new Date(),
      });
    }
  };

  const startAudioCapture = async () => {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error("MediaDevices are not supported by this browser.");
      return;
    }

    if (!recordingContext.value) {
      recordingContext.value = new (window.AudioContext ||
        (window as any).webkitAudioContext)({
        sampleRate: stt_sample_rate,
      });
      console.log(`AudioContext CREATED ${recordingContext.value}`);
    } else {
      await recordingContext.value.resume();
      console.log(`AudioContext RESUMED ${recordingContext.value}`);
    }

    isAudioContextStarted.value = true;

    const stream = await navigator.mediaDevices.getUserMedia({
      audio: {
        noiseSuppression: true,
        autoGainControl: true,
        echoCancellation: true,
      },
    });
    mediaStream.value = stream;

    const mediaStreamSource =
      recordingContext.value.createMediaStreamSource(stream);
    const scriptProcessor = recordingContext.value.createScriptProcessor(
      4096,
      1,
      1
    );
    mediaRecorder.value = scriptProcessor;

    mediaStreamSource.connect(scriptProcessor);
    scriptProcessor.connect(recordingContext.value.destination);

    scriptProcessor.onaudioprocess = (audioProcessingEvent) => {
      const inputBuffer = audioProcessingEvent.inputBuffer;
      for (let channel = 0; channel < inputBuffer.numberOfChannels; channel++) {
        const inputData = inputBuffer.getChannelData(channel);
        const pcmData = new Int16Array(inputData.length);
        for (let sample = 0; sample < inputData.length; sample++) {
          const normalizedSample = Math.max(-1, Math.min(1, inputData[sample]));
          pcmData[sample] =
            normalizedSample < 0
              ? normalizedSample * 0x8000
              : normalizedSample * 0x7fff;
        }
        sendPCMData(pcmData);
      }
    };
  };

  const stopAudioCapture = () => {
    if (recordingContext.value) {
      if (mediaRecorder.value) {
        mediaRecorder.value.disconnect();
        mediaRecorder.value.onaudioprocess = null;
        mediaRecorder.value = null;
      }
      recordingContext.value.suspend().then(() => {
        console.log("AudioContext suspended");
      });
    }
    isRecording.value = false;
  };

  const startAgent = () => {
    const audio = new Audio(`/${greeting_filename}`);
    audio.play();
    isAgentSpeaking.value = true;
    audio.onended = () => {
      isAgentSpeaking.value = false;
      isRecording.value = true;
    };
    showStartButton.value = false;
  };

  const toggleVoiceMode = () => {
    if (isVoiceMode.value === true) {
      isVoiceMode.value = false;
      isRecording.value = false;
      showStartButton.value = false;
    } else {
      isVoiceMode.value = true;
    }
  };

  const toggleIsRecording = () => {
    isRecording.value = !isRecording.value;
  };

  const sendPCMData = (pcmData: Int16Array) => {
    if (socket.value && socket.value.readyState === WebSocket.OPEN) {
      socket.value.send(pcmData.buffer);
    }
  };

  watch(isRecording, (newValue) => {
    if (!newValue) {
      stopAudioCapture();
    } else {
      isAudioContextStarted.value = false;
      startAudioCapture();
    }
  });

  onMounted(() => {
    const protocol = orchestrator_ssl ? "wss" : "ws";
    const wsUrl = `${protocol}://${orchestrator_host}:${orchestrator_port}${orchestrator_path}`;
    socket.value = new WebSocket(wsUrl);
    socket.value.binaryType = "arraybuffer";

    socket.value.onopen = () => {
      console.log("WebSocket connection established");
    };

    socket.value.onmessage = (event) => {
      console.log("Message received from server :", event);
      if (typeof event.data === "string") {
        const message = JSON.parse(event.data);
        if (message.type === "widget") {
          if (isPlayingAudio.value) {
            widgetQueue.value.push({
              sender: message.user,
              type: message.type,
              message: message.content,
              timestamp: new Date(),
            });
          } else {
            chatHistory.value.push({
              sender: message.user,
              type: message.type,
              message: message.content,
              timestamp: new Date(),
            });
          }
        } else if (message.type === "action") {
          if (message.content === "agent_started_thinking") {
            isAgentThinking.value = true;
          } else if (message.content === "agent_ended_thinking") {
            setTimeout(() => {
              isAgentThinking.value = false;
            }, 800);
          } else if (message.content === "audio_generation_done") {
            isAudioGenerationDone.value = true;
          } else if (message.content === "clear_audio_buffer") {
            incomingAudioBuffer.value = [];
            isAudioPlaying.value = false;
          }
        } else {
          chatHistory.value.push({
            sender: message.user,
            type: message.type,
            message: message.content,
            timestamp: new Date(),
          });
        }
      } else if (event.data instanceof ArrayBuffer) {
        console.log("Binary message received, starting audio playback");
        playReceivedAudio(event.data);
      }
    };

    socket.value.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    socket.value.onclose = () => {
      console.log("WebSocket connection closed");
    };

    if (!playbackContext.value) {
      playbackContext.value = new (window.AudioContext ||
        (window as any).webkitAudioContext)({
        sampleRate: tts_sample_rate,
      });
    }
  });

  onUnmounted(() => {
    if (socket.value) {
      socket.value.close();
    }
    if (recordingContext.value) {
      recordingContext.value.close();
    }
    if (playbackContext.value) {
      playbackContext.value.close();
    }
  });

  return {
    isRecording,
    isVoiceMode,
    isUserSpeaking,
    chatHistory,
    isAgentSpeaking,
    isAgentThinking,
    isAudioPlaying,
    showStartButton,
    isAudioGenerationDone,
    startAgent,
    toggleIsRecording,
    toggleVoiceMode,
    sendMessage,
    sendAction,
  };
};

export default useXRxClient;
export type { ChatMessage };
