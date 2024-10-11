# Vue xRx Client

## Introduction

The Vue xRx Client is a library designed to integrate the xRx system with Vue.js applications. It provides composables and components that simplify the process of building reactive and reasoning-enabled user interfaces.

## Features

- Vue composables for xRx integration
- Custom components for managing xRx state and actions
- Utilities for handling xRx events and responses
- Easy-to-use abstractions for xRx-powered UI elements

## Installation

The Vue xRx Client is part of the xRx-core submodule. Installation is automatic when you install the xRx-core submodule.

## Usage

```vue
<script setup>
    import { useXRxClient } from 'vue-xrx-client';
    const {
        isRecording,
        isVoiceMode,
        chatHistory,
        startAgent,
        toggleIsRecording,
        toggleVoiceMode
    } = useXRxClient({
        orchestrator_host: 'localhost',
        orchestrator_port: '8090',
        orchestrator_path: '/api/v1/ws',
        greeting_filename: 'greeting.mp3'
    });
</script>

<template>
    <div>
        <!-- Use the xRx state and methods in your component -->
    </div>
</template>
```


## Contributing

We welcome contributions to the Vue xRx Client. If you have any suggestions or improvements, please follow these steps:

1. Open a new issue on GitHub describing the proposed change or improvement
2. Fork the repository
3. Create a new branch for your feature
4. Commit your changes
5. Push to your branch
6. Create a pull request, referencing the issue you created

> **Note:** Pull requests not backed by published issues will not be considered. This process ensures that all contributions are discussed and aligned with the project's goals before implementation.