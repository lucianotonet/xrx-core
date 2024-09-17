"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4679],{584:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var r=s(4848),i=s(8453);const t={sidebar_position:1},o="Orchestrator",c={id:"references/orchestrator",title:"Orchestrator",description:"Overview",source:"@site/content/references/orchestrator.md",sourceDirName:"references",slug:"/references/orchestrator",permalink:"/xrx-core/docs/references/orchestrator",draft:!1,unlisted:!1,editUrl:"https://github.com/8090-inc/xrx-core/blob/HEAD/docs/content/references/orchestrator.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API References",permalink:"/xrx-core/docs/references/"},next:{title:"Speech-To-Text (STT)",permalink:"/xrx-core/docs/references/stt"}},l={},d=[{value:"Overview",id:"overview",level:3},{value:"Endpoint",id:"endpoint",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Connection",id:"connection",level:3},{value:"Messages",id:"messages",level:3},{value:"Text Messages",id:"text-messages",level:4},{value:"Binary Messages",id:"binary-messages",level:4},{value:"Events",id:"events",level:3},{value:"<code>message</code>",id:"message",level:4},{value:"<code>close</code>",id:"close",level:4},{value:"Server Responses",id:"server-responses",level:3},{value:"Text Responses",id:"text-responses",level:4},{value:"Binary Responses",id:"binary-responses",level:4},{value:"Error Handling",id:"error-handling",level:3},{value:"Environment Variables",id:"environment-variables",level:3},{value:"Example Usage",id:"example-usage",level:3}];function a(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"orchestrator",children:"Orchestrator"}),"\n",(0,r.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"The xRx WebSocket API allows clients to connect to a server for real-time communication. The server handles both text and binary messages, providing functionalities such as speech-to-text (STT), text-to-speech (TTS), and interaction with an agent."}),"\n",(0,r.jsx)(n.h3,{id:"endpoint",children:"Endpoint"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"URL:"})," ",(0,r.jsx)(n.code,{children:"/api/v1/ws"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Method:"})," ",(0,r.jsx)(n.code,{children:"GET"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Protocol:"})," WebSocket"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"authentication",children:"Authentication"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Header:"})," ",(0,r.jsx)(n.a,{href:"https://github.com/8090-inc/xrx/blob/main/orchestrator/src/Index.ts#37%2C29-37%2C29",children:"x-api-key"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Value:"})," ",(0,r.jsx)(n.a,{href:"https://github.com/8090-inc/xrx/blob/main/orchestrator/src/Index.ts#12%2C7-12%2C7",children:"API_KEY"})," from environment variables (default: ",(0,r.jsx)(n.a,{href:"https://github.com/8090-inc/xrx/blob/main/orchestrator/src/Index.ts#12%2C44-12%2C44",children:"123456"}),")"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"connection",children:"Connection"}),"\n",(0,r.jsx)(n.p,{children:"Upon connecting to the WebSocket endpoint, the server will log the connection and store the session."}),"\n",(0,r.jsx)(n.h3,{id:"messages",children:"Messages"}),"\n",(0,r.jsx)(n.p,{children:"The server handles two types of messages: text and binary."}),"\n",(0,r.jsx)(n.h4,{id:"text-messages",children:"Text Messages"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Format:"})," JSON"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Fields:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/8090-inc/xrx/blob/main/orchestrator/src/Session.ts#1%2C53-1%2C53",children:"type"}),": ",(0,r.jsx)(n.code,{children:'"text"'})," or ",(0,r.jsx)(n.code,{children:'"action"'})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://github.com/8090-inc/xrx/blob/main/orchestrator/src/Session.ts#58%2C5-58%2C5",children:"content"}),": The text content or action details"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "type": "text",\n  "content": "Hello, how can I help you?"\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"binary-messages",children:"Binary Messages"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Format:"})," Binary data (e.g., audio data)"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,r.jsx)(n.h4,{id:"message",children:(0,r.jsx)(n.code,{children:"message"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Triggered when a message is received from the client."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"message"}),": The message data (text or binary)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"isBinary"}),": Boolean indicating if the message is binary"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Handling Text Messages:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.code,{children:"type"})," is ",(0,r.jsx)(n.code,{children:'"text"'}),", the server will append the text to the session's chat history and send it to the agent."]}),"\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.code,{children:"type"})," is ",(0,r.jsx)(n.code,{children:'"action"'}),", the server will send the action to the agent."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Handling Binary Messages:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"The server will append the binary data (audio) to the session's speech buffer and process it using VAD (Voice Activity Detection)."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"close",children:(0,r.jsx)(n.code,{children:"close"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Description:"})," Triggered when the client closes the connection."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Parameters:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"code"}),": The close code"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"reason"}),": The reason for closing"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"server-responses",children:"Server Responses"}),"\n",(0,r.jsx)(n.h4,{id:"text-responses",children:"Text Responses"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Format:"})," JSON"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Fields:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"user"}),": The user who sent the message"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"content"}),": The message content"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"type"}),": The type of message (",(0,r.jsx)(n.code,{children:'"text"'}),", ",(0,r.jsx)(n.code,{children:'"audio"'}),", ",(0,r.jsx)(n.code,{children:'"widget"'}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "user": "agent",\n  "content": "One moment please...",\n  "type": "text"\n}\n'})}),"\n",(0,r.jsx)(n.h4,{id:"binary-responses",children:"Binary Responses"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Format:"})," Binary data (e.g., audio data)"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"error-handling",children:"Error Handling"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If the session is not found, the server logs an error and does not process the message."}),"\n",(0,r.jsx)(n.li,{children:"If the STT or TTS WebSocket is not open, the server attempts to reopen the connection and logs any errors."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"API_KEY"}),": API key for authentication"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AGENT_HOST"}),", ",(0,r.jsx)(n.code,{children:"AGENT_PORT"}),": Configuration for the agent"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"GUARDRAILS_AGENT_HOST"}),", ",(0,r.jsx)(n.code,{children:"GUARDRAILS_AGENT_PORT"}),": Configuration for the guardrails agent"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"AGENT_WAIT_MS"}),", ",(0,r.jsx)(n.code,{children:"SAMPLE_RATE"}),", ",(0,r.jsx)(n.code,{children:"STT_WAIT_MS"}),": Timing and sample rate configurations for the STT"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"STT_HOST"}),", ",(0,r.jsx)(n.code,{children:"STT_PORT"}),", ",(0,r.jsx)(n.code,{children:"STT_PATH"}),": Configuration for the STT WebSocket"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"TTS_HOST"}),", ",(0,r.jsx)(n.code,{children:"TTS_PORT"}),", ",(0,r.jsx)(n.code,{children:"TTS_PATH"}),": Configuration for the TTS WebSocket"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"INITIAL_RESPONSE"}),": Initial response message"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"STT_PROVIDER"}),": STT provider (e.g., ",(0,r.jsx)(n.code,{children:"deepgram"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"REDIS_HOST"}),": Configuration for Redis"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"example-usage",children:"Example Usage"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Connecting to the WebSocket:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const socket = new WebSocket('ws://localhost:8000/api/v1/ws');\n\nsocket.onopen = () => {\n  console.log('Connection opened');\n};\n\nsocket.onmessage = (event) => {\n  if (typeof event.data === 'string') {\n    const message = JSON.parse(event.data);\n    console.log('Received message:', message);\n  } else {\n    console.log('Received binary data');\n  }\n};\n\nsocket.onclose = (event) => {\n  console.log(`Connection closed: ${event.code} ${event.reason}`);\n};\n\nsocket.onerror = (error) => {\n  console.error('WebSocket error:', error);\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Sending a Text Message:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const message = {\n  type: 'text',\n  content: 'Hello, how can I help you?'\n};\nsocket.send(JSON.stringify(message));\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Sending a Binary Message:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const audioData = new Uint8Array([/* audio data */]);\nsocket.send(audioData);\n"})}),"\n",(0,r.jsx)(n.p,{children:"This documentation provides an overview of the WebSocket API, including connection details, message formats, events, and example usage."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var r=s(6540);const i={},t=r.createContext(i);function o(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);