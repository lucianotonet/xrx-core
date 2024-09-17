"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8858],{1018:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(4848),o=n(8453);const i={sidebar_position:1},s="System Architecture",a={id:"how-it-works/system_architecture",title:"System Architecture",description:"Modular Components",source:"@site/content/how-it-works/system_architecture.md",sourceDirName:"how-it-works",slug:"/how-it-works/system_architecture",permalink:"/xrx-core/docs/how-it-works/system_architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/8090-inc/xrx-core/blob/HEAD/docs/content/how-it-works/system_architecture.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"How it works",permalink:"/xrx-core/docs/category/how-it-works"},next:{title:"API Design",permalink:"/xrx-core/docs/how-it-works/api_design"}},c={},l=[{value:"Modular Components",id:"modular-components",level:2},{value:"Information Flow",id:"information-flow",level:2},{value:"Deployment Specifics",id:"deployment-specifics",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",li:"li",mermaid:"mermaid",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"system-architecture",children:"System Architecture"}),"\n",(0,r.jsx)(t.h2,{id:"modular-components",children:"Modular Components"}),"\n",(0,r.jsx)(t.p,{children:"The xRx system architecture consists of several components that interact with each other to provide build a reasoning based application. Below is a high-level overview of the system:"}),"\n",(0,r.jsx)(t.mermaid,{value:"flowchart TD\n    A[Client] <--\x3e|audio/text| B[Orchestrator]\n    B --\x3e|Send audio| C[STT]\n    C --\x3e|Return text| B\n    B <--\x3e|text| G[Guardrail Proxy]\n    G <--\x3e|text| D[Agent]\n    D[Agent] <--\x3e|text / API requests| F[External Services]\n    B --\x3e|Send text| E[TTS]\n    E --\x3e|Return audio| B\n\nstyle A fill:#FFCDD2,stroke:#B71C1C,stroke-width:2px,color:#000000\nstyle B fill:#BBDEFB,stroke:#0D47A1,stroke-width:2px,color:#000000\nstyle C fill:#C8E6C9,stroke:#1B5E20,stroke-width:2px,color:#000000\nstyle D fill:#FFF9C4,stroke:#F57F17,stroke-width:2px,color:#000000\nstyle E fill:#D1C4E9,stroke:#4A148C,stroke-width:2px,color:#000000\nstyle F fill:#FFECB3,stroke:#FF6F00,stroke-width:2px,color:#000000\nstyle G fill:#E1BEE7,stroke:#4A148C,stroke-width:2px,color:#000000"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Client"}),": Front end app experience which renders the UI and handles websocket communication with the Orchestrator. ",(0,r.jsx)(t.a,{href:"https://github.com/8090-inc/xrx/blob/main/nextjs-client",children:"See directory here"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Orchestrator"}),": Manages the flow of data between various AI and traditional software components. ",(0,r.jsx)(t.a,{href:"https://github.com/8090-inc/xrx/blob/main/orchestrator",children:"See directory here"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"STT (Speech-to-Text)"}),": Converts audio input to text. ",(0,r.jsx)(t.a,{href:"https://github.com/8090-inc/xrx/blob/main/stt",children:"See directory here"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"TTS (Text-to-Speech)"}),": Converts text responses back to audio. ",(0,r.jsx)(t.a,{href:"https://github.com/8090-inc/xrx/blob/main/tts",children:"See directory here"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Agent"}),': Responsible for the "reasoning" system of xRx. ',(0,r.jsx)(t.a,{href:"https://github.com/8090-inc/xrx/blob/main/reasoning/shopify-agent",children:"See directory here"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Guardrails Proxy"}),": A safety layer for the reasoning system. ",(0,r.jsx)(t.a,{href:"https://github.com/8090-inc/xrx/blob/main/guardrails-proxy",children:"See directory here"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"information-flow",children:"Information Flow"}),"\n",(0,r.jsx)(t.p,{children:"These components then communicate via the following sequence diagram"}),"\n",(0,r.jsx)(t.mermaid,{value:"\nsequenceDiagram\n    participant Client\n    participant Orchestrator\n    participant STT\n    participant Agent\n    participant TTS\n\n    Client->> Orchestrator: Send audio on websockets port 8000\n    Orchestrator->>STT: Send audio on websockets port 8001\n    STT ->>Orchestrator: Return text\n    Orchestrator->>Agent: Send text on port 8003\n    Agent->>Orchestrator: Return text\n    Orchestrator->>TTS: Send text on port 8002\n    TTS ->>Orchestrator: Return audio\n    Orchestrator->>Client: Return audio, text, and application widgets"}),"\n",(0,r.jsx)(t.h2,{id:"deployment-specifics",children:"Deployment Specifics"}),"\n",(0,r.jsx)(t.p,{children:"xRx's deployment is designed to be modular in nature. This means that you can swap out any component of the system with your own custom implementation. The entire system is defined as a single docker-compose file with a single connected network. This allows for easy swapping of components and deployment to a variety of different environments."}),"\n",(0,r.jsx)(t.p,{children:"A key design choice in xRx is the separation of the core framework from specific applications. The xRx core, which remains consistent across different applications, is imported as a submodule in each app. This core contains modules that are plug-and-play for custom applications, providing a foundation of reusable components."}),"\n",(0,r.jsx)(t.p,{children:"This separation method allows for greater flexibility in application development.\nThe xRx core includes containerized modules and reusable libraries:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Reusable libraries:"})," These include the agent framework and UI library, which can be imported into each specific app."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Containerized modules:"})," The xRx system includes components such as TTS, STT, Guardrails, and the Orchestrator, which are defined as separate Docker containers. The docker-compose file located in the application folder starts each of these containerized components and connects them to the same network."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"This modular structure, combined with the separation of core libraries and containerized components from the application-specific logic, enables developers to easily customize and extend xRx for their specific needs while benefiting from a solid, tested foundation. It also allows for easy swapping or upgrading of individual components without affecting the entire system."})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);