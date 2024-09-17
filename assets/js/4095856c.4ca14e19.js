"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7353],{2373:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var t=s(4848),i=s(8453);const o={sidebar_position:4},a="Graph Agents: Shopify app",r={id:"how-it-works/graph_agents_shopify_app",title:"Graph Agents: Shopify app",description:"The significantly more advanced reasoning application in the xRx system is an agent that interacts with a Shopify store with dummy data. The agent is in charge of helping a customer go through a simple online order workflow. Basic concepts like carts, products, and orders are used through Shopify to facilitate this interaction.",source:"@site/content/how-it-works/graph_agents_shopify_app.md",sourceDirName:"how-it-works",slug:"/how-it-works/graph_agents_shopify_app",permalink:"/xrx-core/docs/how-it-works/graph_agents_shopify_app",draft:!1,unlisted:!1,editUrl:"https://github.com/8090-inc/xrx-core/blob/HEAD/docs/content/how-it-works/graph_agents_shopify_app.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Guardrails",permalink:"/xrx-core/docs/how-it-works/guardrails"},next:{title:"Tutorials",permalink:"/xrx-core/docs/tutorials/"}},h={},l=[{value:"Designing Human Interactions",id:"designing-human-interactions",level:2},{value:"Technical Implementation",id:"technical-implementation",level:2},{value:"Graph Execution",id:"graph-execution",level:3},{value:"Graph definition",id:"graph-definition",level:4},{value:"Nodes",id:"nodes",level:4},{value:"Tools",id:"tools",level:3},{value:"Passing Messages to the Frontend",id:"passing-messages-to-the-frontend",level:3},{value:"Conversation Context",id:"conversation-context",level:3},{value:"Context Handling",id:"context-handling",level:3},{value:"Canceling an Ongoing Task",id:"canceling-an-ongoing-task",level:3},{value:"Task Execution and Cancellation Flow",id:"task-execution-and-cancellation-flow",level:4},{value:"Redis Integration",id:"redis-integration",level:4},{value:"API Usage Example",id:"api-usage-example",level:4},{value:"Implementation Details",id:"implementation-details",level:4}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"graph-agents-shopify-app",children:"Graph Agents: Shopify app"}),"\n",(0,t.jsx)(n.p,{children:"The significantly more advanced reasoning application in the xRx system is an agent that interacts with a Shopify store with dummy data. The agent is in charge of helping a customer go through a simple online order workflow. Basic concepts like carts, products, and orders are used through Shopify to facilitate this interaction."}),"\n",(0,t.jsx)(n.h2,{id:"designing-human-interactions",children:"Designing Human Interactions"}),"\n",(0,t.jsx)(n.p,{children:'When designing and developing this agent, other than table stakes software principles (modularity, cost, etc.) the core design principle we strive for with xRx is providing "human-like interaction".'}),"\n",(0,t.jsx)(n.p,{children:'The Shopify application is designed to be highly interactive to the end user in the xRx system. Chatting with LLMs text does not cut it for passing the bar of "human-like" outside of trivial interfaces. By including voice in the experience, an AI system can sound like a human, but the interactions tend to miss common nuances about how people like us have a normal conversation in a customer support setting.'}),"\n",(0,t.jsx)(n.p,{children:"Here are a few ways we addressed this design principle..."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Groq for Inference"})}),"\n",(0,t.jsx)(n.p,{children:'A common complaint with agent systems in applications is that they are "too slow" for real time user interaction. This tends to happen for a few reasons. First is inference speed for LLMs capable of reasoning through problems. We try and reduce this bottleneck as much as possible by using Groq for extremely fast inference.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Acknowledgement of Actions"})}),"\n",(0,t.jsx)(n.p,{children:"Let's take an example to explain this: Ordering food at a restaurant. When you are ordering, there are many queues that humans pick up on that the waiter is performing actions to help you. For instance, you might see the waiter write down your order; the waiter might nod when you ask for an alteration; the waiter might run to the back to ask the kitchen a question. You innately understand these actions without the need for the waiter to explain them to you each time."}),"\n",(0,t.jsxs)(n.p,{children:["The core problem boils down to a simple question: ",(0,t.jsx)(n.em,{children:"How do you embed these human queues into a software powered by an LLM?"})]}),"\n",(0,t.jsx)(n.p,{children:"Our Shopify agent tackles this challenge through visual and audio queues. First, when requests are going to be using tools, the agent has a node in the graph which runs in parallel to the tool calling and analysis which is only responsible for telling the user what is going on through an audio modality. The need for this node arises from the need for immediate responses to the end user when multiple turns on an LLM are going to need to be executed in order to respond to what the user said. Even with using Groq for inference, these requests can take many seconds to run."}),"\n",(0,t.jsx)(n.p,{children:'Second, when specific tools are called by the agent, the xRx system will display visual widgets to the user in the front end which are relevant to whatever the user said. For example, if a customer asks "what kind of wing sauces do you have", it is a much better experience to simply display a list with prices compared to listing them off via audio.'}),"\n",(0,t.jsx)(n.p,{children:"The overall flow of information might display as follows..."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"User via Audio:"})," What kind of wing sauces do you have?"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Assistant via Audio:"})," One sec I'll check our options today"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Assistant via App Visual:"})," [widget appears on screen with options]"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Assistant via Audio:"})," Any of these look good to you?"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"User via Audio:"})," Yeah I'll get 6 lemon garlic and 12 hot buffalo"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Assistant via Audio:"})," Let me add those to your order quick"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Assistant via App Visual:"})," [widget appears on screen with current order including items and price]"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Assistant via Audio:"})," Anything else today?"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Multiple User Interaction Paradigms"})}),"\n",(0,t.jsx)(n.p,{children:'When thinking about how common ways users interact with applications, the vast majority of interactions are simply "clicks". Our Shopify agent strives to take advantage of this easy way to interact with a language model by allowing users not only to speak to the reasoning system, but also have the reasoning system interpret the actions which the user takes in the application. A simple way users can interact with the Shopify agent is by clicking on menu items to add them to their order when the agent provides menu items. For example, the flow above might change to...'}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"User via Audio:"})," What kind of wing sauces do you have?"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Assistant via Audio:"})," One sec I'll check our options today"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Assistant via App Visual:"})," [widget appears on screen with options]"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Assistant via Audio:"})," Any of these look good to you?"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"User via Click:"})," [clicks 6 lemon garlic wings]"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Assistant via App Visual:"})," [widget appears on screen with current order including items and price]"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.em,{children:"Assistant via Audio:"})," Anything else today?"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"technical-implementation",children:"Technical Implementation"}),"\n",(0,t.jsx)(n.p,{children:"Now lets dive into how this all works on the backend. The Shopify reasoning agent is a tool calling agent which has been well documented in the LLM agent space. The execution paradigm is an asynchronous graph where each node determines which subsequent node(s) to traverse to based on its outcome. These nodes might be a single call to an LLM, multiple calls to an LLM, or simple python code which calls no LLMs."}),"\n",(0,t.jsx)(n.mermaid,{value:"%%{init: {'theme': 'base', 'themeVariables': { 'background': '#ffffff' }}}%%\ngraph TD\n    A[main.py] --\x3e B[executor.py]\n    subgraph config[\"config.py\"]\n        D[Context Manager]\n        F[Tools]\n        C[Graph]\n        B[executor.py]\n        E[Utils]\n        B --\x3e D\n        B <--\x3e C\n        B --\x3e E\n        F --\x3e C\n        subgraph F[Tools]\n            F1[shopify.py]\n            subgraph F1[shopify.py]\n                F11[get_products]\n                F12[get_product_details]\n                F13[add_item_to_cart]\n                F14[delete_item_from_cart]\n                F15[get_cart_summary]\n                F16[submit_cart_for_order]\n                F17[get_order_status]\n            end\n        end\n        subgraph C[Graph]\n            C1[Routing] --\x3e C2[CustomerResponse]\n            C1 --\x3e C4[ChooseTool]\n            C3 --\x3e C1\n            C4 --\x3e C5[IdentifyToolParams]\n            C5 --\x3e C6[ExecuteTool]\n            C6 --\x3e C7[Widget]\n            C6 --\x3e C8[ConvertNaturalLanguage]\n            C7 --\x3e C8\n            C8 --\x3e C1\n            C1 --\x3e C3[TaskDescriptionResponse]\n        end\n        subgraph E[Utils]\n            E1[llm.py]\n            E2[shopify.py]\n            subgraph E1[llm.py]\n                E11[message format conversion]\n                E12[make tools description]\n                E13[initialize llm]\n            end\n            subgraph E2[shopify.py]\n                E21[init_shopify]\n                E22[get_product_image]\n                E23[populate_images]\n                E24[get_cart_summary_from_object]\n                E25[get_variant_id_from_sku]\n                E26[make_new_blank_cart]\n            end\n        end\n    end\n    classDef configClass fill:transparent,stroke:#ADD8E6,stroke-width:3px;\n    class config configClass;\n    classDef subgraphClass fill:transparent,stroke:#ADD8E6,stroke-width:2px;\n    class F,C,E,F1,E1,E2 subgraphClass;\n    %% Set the background to white and border to light blue\n    style config fill:#ffffff,stroke:#ADD8E6,stroke-width:3px;\n    linkStyle default stroke-width:2px;"}),"\n",(0,t.jsx)(n.p,{children:"Let's dive into the specifics of how these components are constructed..."}),"\n",(0,t.jsx)(n.h3,{id:"graph-execution",children:"Graph Execution"}),"\n",(0,t.jsx)(n.p,{children:'The graph structure follows the flow which is shown in the diagram below. Each node is a different process. The red notes like "Routing" call an LLM. The grey nodes like "Widget" are simple python functions which do not call an LLM.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Example Trace",src:s(5328).A+"",width:"3776",height:"2528"})}),"\n",(0,t.jsx)(n.h4,{id:"graph-definition",children:"Graph definition"}),"\n",(0,t.jsxs)(n.p,{children:["We have used the ",(0,t.jsx)(n.code,{children:"networkx"})," Python library for our graph implementation. It provides a low level graph abstraction where we do not have to rewrite how to perform graph operations in Python. However, it provides enough flexibility to pass information between nodes without any inhibitions."]}),"\n",(0,t.jsxs)(n.p,{children:["The base implementation of the graph classes can be viewed ",(0,t.jsx)(n.a,{href:"https://github.com/8090-inc/xrx/blob/main/reasoning/shopify-agent/app/agent/graph/base.py",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"nodes",children:"Nodes"}),"\n",(0,t.jsx)(n.p,{children:"Each node in the agent graph is defined with two required functions."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"process"})," function is the function which executes when the node is triggers. This is where any calls to an LLM are located. The output of the ",(0,t.jsx)(n.code,{children:"process"}),' function will then yield an output dictionary with will contain an "output" which will determine the next node to traverse to.']}),"\n",(0,t.jsxs)(n.p,{children:["After the ",(0,t.jsx)(n.code,{children:"process"})," function is called a ",(0,t.jsx)(n.code,{children:"get_successors"})," node is called in order to determine what the next actions are. The ",(0,t.jsx)(n.code,{children:"get_successors"})," function will return a list of node names which should be triggered and any inputs which should be sent to those nodes."]}),"\n",(0,t.jsxs)(n.p,{children:["The nodes which are used in the reasoning system are available ",(0,t.jsx)(n.a,{href:"https://github.com/8090-inc/xrx/blob/main/reasoning/shopify-agent/app/agent/graph/nodes/",children:"here"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Here is the list of nodes which are available in the graph today."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Routing"}),": Determines the next action based on the current state and conversation context."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"TaskDescriptionResponse"}),": Generates a brief, personalized waiting message for the customer."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ChooseTool"}),": Selects the appropriate tool to use based on the current task."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"IdentifyToolParams"}),": Identifies and prepares the parameters needed for the selected tool."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ExecuteTool"}),": Executes the selected tool with the prepared parameters."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Widget"}),": Displays relevant visual widgets to the user in the front end."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ConvertNaturalLanguage"}),": Converts tool outputs into natural language descriptions."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"tools",children:"Tools"}),"\n",(0,t.jsxs)(n.p,{children:["All the tools available to the agent are defined as simple python functions which reach out to Shopify via the Python SDK. These tools can be seen ",(0,t.jsx)(n.a,{href:"https://github.com/8090-inc/xrx/blob/main/reasoning/shopify-agent/app/agent/tools",children:"here"}),". They follow the general code format shown below."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'@observability_decorator(name=\'my_tool\')\ndef my_tool(arg1: str):\n    """\n    Doc string with description, when to use, arguments, and outputs\n    """\n    your_code = \'\'\n    return your_code\n'})}),"\n",(0,t.jsxs)(n.p,{children:["It is very important to note that these doc strings are used in the prompt for the agent. ",(0,t.jsx)(n.strong,{children:"This means that any change to the doc string will impact the performance of the reasoning agent."})]}),"\n",(0,t.jsxs)(n.p,{children:["Please read the ",(0,t.jsx)(n.a,{href:"/docs/tutorials/setting_up_llm_observability",children:"observability tutorial"})," for more information regarding the observability decorator above."]}),"\n",(0,t.jsx)(n.h3,{id:"passing-messages-to-the-frontend",children:"Passing Messages to the Frontend"}),"\n",(0,t.jsxs)(n.p,{children:["The three nodes which are used to pass messages to the frontend are ",(0,t.jsx)(n.code,{children:"Widget"}),", ",(0,t.jsx)(n.code,{children:"CustomerResponse"}),", and ",(0,t.jsx)(n.code,{children:"TaskDescriptionResponse"}),". These node names recognized by the orchestrator to determine which information the agent creates which needs to be passed to the frontend. As the graph is executed, the FastAPI streaming response will yield a dictionary which contains two specific fields."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"node"}),": The name of the node which generated the output below."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"output"}),": The output of the node which was executed. In the case of ",(0,t.jsx)(n.code,{children:"Widget"}),", this is a JSON object which is then mapped to a rendering in the front end. In the case of the other nodes, this is a simple string which is passed to the frontend to be played as audio."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"conversation-context",children:"Conversation Context"}),"\n",(0,t.jsxs)(n.p,{children:["For all of the nodes, when they are executed, their output is streamed to the orchestrator container. The orchestrator container is in charge of maintaining conversational context as it happens in real time. Any information which should be persisted in the conversation history will be passed out in the ",(0,t.jsx)(n.code,{children:"messages"})," field which is streamed out of the reasoning container."]}),"\n",(0,t.jsx)(n.p,{children:"There is some heavy string manipulation which happens in the reasoning system to maintain a record of this conversation history because of the various modalities which are used to interact with the user. Specifically, all the tool calls which need to be kept track of are stored in a list which is then joined into a single string and passed into the system prompt."}),"\n",(0,t.jsx)(n.h3,{id:"context-handling",children:"Context Handling"}),"\n",(0,t.jsx)(n.p,{children:"Because the Shopify system has a session associated with the application and the user, it is important to maintain a record of the session ID and the cart ID (if there is one) in order to ensure that the user's order is being tracked correctly. This is done by the orchestrator passing the session ID and cart ID into the FastAPI endpoint which serves the reasoning agent. All inputs to the reasoning agent will have the following json structure..."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "session": {\n        "session_id": "session_id",\n        "cart_id": "cart_id"\n    },\n    "messages": [\n        {\n            "role": "user",\n            "content": "..."\n        },\n        {\n            "role": "assistant",\n            "content": "..."\n        },\n        {\n            "role": "user",\n            "content": "..."\n        }\n    ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Once the orchestrator passes in the session and messages, the reasoning agent will use the ",(0,t.jsx)(n.code,{children:"messages"})," field to determine the conversation history and the ",(0,t.jsx)(n.code,{children:"session"})," field to determine the session ID and cart ID. The session variable is then stored per execution ",(0,t.jsx)(n.a,{href:"https://github.com/8090-inc/xrx/blob/main/reasoning/shopify-agent/app/agent/graph/nodes/",children:"here"})," via the ",(0,t.jsx)(n.code,{children:"context_manager"})," module."]}),"\n",(0,t.jsx)(n.p,{children:"It is important to note that we could pass the session into each tool call. However, because each tool definition is passed into the prompt for some of the nodes in the graph, it is better to handle the session in the context manager as to not introduce more inputs to the tool call function which need to be understood by the LLM."}),"\n",(0,t.jsxs)(n.p,{children:["Here is an example of how the session data is set and retrieved within a given context. Notice how ",(0,t.jsx)(n.code,{children:"my_function"})," can be called and retrieve the ",(0,t.jsx)(n.code,{children:"session_data"})," without needing an explicit input argument."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'from context_manager import set_session, session_var\n\ndef my_session_function():\n    session_data = session_var.get()\n    print(session_data[\'session_id\'])\n    session_data["cart_id"] = 5678\n    session_var.set(session_data)\n    return None\n\nsession_data = {\n    "session_id": 1234\n}\n\nwith set_session(session_data):\n    _ = my_function()\n    print(session_var.get())\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-output",children:"1234\n{'session_id': 1234, 'cart_id': 5678}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["For a more detailed look at this being used in action, check out the tools which are available ",(0,t.jsx)(n.a,{href:"https://github.com/8090-inc/xrx/blob/main/reasoning/shopify-agent/app/agent/tools",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"canceling-an-ongoing-task",children:"Canceling an Ongoing Task"}),"\n",(0,t.jsx)(n.p,{children:"The Shopify reasoning agent supports canceling an ongoing task, which is crucial for providing a responsive user experience and managing system resources efficiently. This functionality is implemented using Redis to track the status of each task."}),"\n",(0,t.jsx)(n.h4,{id:"task-execution-and-cancellation-flow",children:"Task Execution and Cancellation Flow"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"When a new task is initiated:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A unique ",(0,t.jsx)(n.code,{children:"task_id"})," is generated using UUID."]}),"\n",(0,t.jsx)(n.li,{children:"The task status is set to 'running' in Redis."}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"task_id"})," is included in the response headers as 'X-Task-ID'."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"To cancel a task:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A POST request is sent to the ",(0,t.jsx)(n.code,{children:"/cancel-reasoning-agent/{task_id}"})," endpoint."]}),"\n",(0,t.jsx)(n.li,{children:"The task status in Redis is updated to 'cancelled'."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"During execution:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The agent periodically checks the task status in Redis."}),"\n",(0,t.jsx)(n.li,{children:"If the status is 'cancelled', the agent will stop processing and gracefully terminate the task."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"redis-integration",children:"Redis Integration"}),"\n",(0,t.jsx)(n.p,{children:"The system uses a Redis container (xrx-redis) to store and manage task statuses. This allows for efficient, real-time status updates and checks across the distributed system."}),"\n",(0,t.jsx)(n.p,{children:"If you are using the docker-compose setup, the Redis container will be automatically started and the reasoning agent will be able to use it as long as the environment variable is correctly set as shown below."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'REDIS_HOST="xrx-redis"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If you are running the agent locally outside of docker compose, the reasoning agent will look for a Redis container on the default host (",(0,t.jsx)(n.code,{children:"localhost"}),") and port (",(0,t.jsx)(n.code,{children:"6379"}),"). In order to start that server, you can use the following command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"docker run -d --name redis-server -p 6379:6379 redis\n"})}),"\n",(0,t.jsx)(n.h4,{id:"api-usage-example",children:"API Usage Example"}),"\n",(0,t.jsx)(n.p,{children:"To cancel a task, send a POST request to the cancellation endpoint:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"POST /cancel-reasoning-agent/{task_id}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Example response:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "detail": "Task {task_id} cancelled"\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"If successful, this will return a 200 status code. In case of an error, it will return a 500 status code with an error message."}),"\n",(0,t.jsx)(n.h4,{id:"implementation-details",children:"Implementation Details"}),"\n",(0,t.jsx)(n.p,{children:"The cancellation mechanism is implemented in the FastAPI application:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:'@app.post("/cancel-reasoning-agent/{task_id}")\nasync def cancel_agent(task_id: str):\n    try:\n        await redis_client.set(task_id, \'cancelled\')\n        logger.info(f"Task {task_id} set to cancelled")\n        return JSONResponse(content={"detail": f"Task {task_id} cancelled"}, status_code=200)\n    except Exception as e:\n        logger.error(f"An error occurred while cancelling the task: {str(e)}")\n        return JSONResponse(content={"detail": f"An error occurred: {str(e)}"}, status_code=500)\n'})}),"\n",(0,t.jsx)(n.p,{children:"This cancellation feature enhances the robustness of the Shopify reasoning agent, allowing for better control over task execution and improved user experience. It's particularly useful for long-running tasks or when the user decides to change their request mid-process."})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},5328:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/graph-agent-91e82205d5b8a73841834323f86a8f52.png"},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>r});var t=s(6540);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);