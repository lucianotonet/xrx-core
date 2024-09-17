"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8705],{791:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=t(4848),i=t(8453);const r={sidebar_position:4},s="Build Your Own Reasoning Application",a={id:"tutorials/bring_your_own_reasoning_agent",title:"Build Your Own Reasoning Application",description:"In this tutorial, we will explore how to create an application with a custom reasoning agent using the xRx framework. The beauty of xRx is that it can accommodate any reasoning agent built in Python, offering flexibility and power for your AI applications.",source:"@site/content/tutorials/bring_your_own_reasoning_agent.md",sourceDirName:"tutorials",slug:"/tutorials/bring_your_own_reasoning_agent",permalink:"/xrx-core/docs/tutorials/bring_your_own_reasoning_agent",draft:!1,unlisted:!1,editUrl:"https://github.com/8090-inc/xrx-core/blob/HEAD/docs/content/tutorials/bring_your_own_reasoning_agent.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Run the Patient Intake Application",permalink:"/xrx-core/docs/tutorials/run_patient_intake_application"},next:{title:"Enabling LLM Guardrails",permalink:"/xrx-core/docs/tutorials/enabling_llm_guardrails"}},l={},c=[{value:"Clone the repository",id:"clone-the-repository",level:2},{value:"Rename the simple app directory",id:"rename-the-simple-app-directory",level:2},{value:"Implement your reasoning agent",id:"implement-your-reasoning-agent",level:2},{value:"Creating a Custom Tool",id:"creating-a-custom-tool",level:2},{value:"Test your reasoning agent",id:"test-your-reasoning-agent",level:2},{value:"Build a custom UI",id:"build-a-custom-ui",level:2},{value:"Create your .env file",id:"create-your-env-file",level:2},{value:"Deploy the xRx system",id:"deploy-the-xrx-system",level:2},{value:"Project Structure",id:"project-structure",level:2},{value:"API Usage",id:"api-usage",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"build-your-own-reasoning-application",children:"Build Your Own Reasoning Application"}),"\n",(0,o.jsx)(n.p,{children:"In this tutorial, we will explore how to create an application with a custom reasoning agent using the xRx framework. The beauty of xRx is that it can accommodate any reasoning agent built in Python, offering flexibility and power for your AI applications."}),"\n",(0,o.jsx)(n.p,{children:"We'll use xRx's simple reasoning app as our starting point. This app serves as an excellent foundation, showcasing basic functionalities that you can build upon to create your own sophisticated reasoning agent."}),"\n",(0,o.jsx)(n.p,{children:"Let's dive into the process of adapting and expanding this simple app to suit your specific needs."}),"\n",(0,o.jsx)(n.h2,{id:"clone-the-repository",children:"Clone the repository"}),"\n",(0,o.jsx)(n.p,{children:"First, let's get the code onto your local machine:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git clone --recursive https://github.com/8090-inc/xrx-sample-apps.git\ncd xrx-sample-apps/\n"})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," The --recursive flag is crucial here. It ensures that you also clone the xrx-core submodule, which contains the fundamental building blocks of the xRx framework. Without this, your project won't have access to the core functionalities it needs."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"If you need to update the submodule later (for instance, if there have been updates to the core framework), you can use:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"git submodule update --init --recursive\n"})}),"\n",(0,o.jsx)(n.h2,{id:"rename-the-simple-app-directory",children:"Rename the simple app directory"}),"\n",(0,o.jsx)(n.p,{children:"The simple app code resides in the simple-app directory. However, as you're building your own agent, it's a good idea to give it a more descriptive name. This helps in organizing your projects, especially if you plan to create multiple agents."}),"\n",(0,o.jsx)(n.p,{children:"For example, if you're building a customer support agent:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"mv simple-app customer-support-agent\n"})}),"\n",(0,o.jsx)(n.h2,{id:"implement-your-reasoning-agent",children:"Implement your reasoning agent"}),"\n",(0,o.jsxs)(n.p,{children:["The heart of your agent lives in the file ",(0,o.jsx)(n.code,{children:"customer-support-agent/app/agent/executor.py"}),". This is where you'll implement the core logic of your reasoning agent."]}),"\n",(0,o.jsxs)(n.p,{children:["The key function here is ",(0,o.jsx)(n.code,{children:"single_turn_agent"}),". It's called each time a request is sent to your reasoning agent, forming the backbone of your agent's interaction loop."]}),"\n",(0,o.jsx)(n.p,{children:"Here's a simplified version of what this function might look like:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from agent.utils.llm import initialize_llm_client\n\nllm_client = initialize_llm_client()\n\ndef single_turn_agent(messages: List[dict]) -> str:\n    resp = llm_client.chat.completions.create(\n        model=os.environ[\'LLM_MODEL_ID\'],\n        messages=messages,\n        temperature=0.0,\n    )\n    message = {\n        "role": "assistant",\n        "content": resp.choices[0].message.content\n    }\n    out = {\n        "messages": [message],\n        "node": "CustomerResponse",\n        "output": message[\'content\'],\n    }\n    return out\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This function takes in a list of message dictionaries, sends them to a language model, and returns the model's response. The ",(0,o.jsx)(n.code,{children:"out"}),' dictionary is crucial - it contains the response message, specifies the node type (in this case, "CustomerResponse"), and provides the output content.']}),"\n",(0,o.jsx)(n.h2,{id:"creating-a-custom-tool",children:"Creating a Custom Tool"}),"\n",(0,o.jsx)(n.p,{children:"xRx allows you to create custom tools that extend your agent's capabilities. These tools enable your agent to perform specific tasks or access particular information sources, greatly enhancing its functionality. This feature is one of the most powerful aspects of the xRx framework."}),"\n",(0,o.jsx)(n.p,{children:"Let's walk through the process of creating a custom tool, using a simple calculator as an example. This tool will allow your agent to perform basic arithmetic operations."}),"\n",(0,o.jsx)(n.p,{children:"First, we'll create the tool function:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from agent_framework import observability_decorator\n\n@observability_decorator(name="calculator")\ndef calculator(operation: str, x: float, y: float) -> str:\n    """\n    Perform a basic arithmetic operation.\n    \n    Args:\n    operation (str): The operation to perform (add, subtract, multiply, divide)\n    x (float): The first number\n    y (float): The second number\n    \n    Returns:\n    str: A string containing the result of the operation\n    """\n    if operation == "add":\n        result = x + y\n    elif operation == "subtract":\n        result = x - y\n    elif operation == "multiply":\n        result = x * y\n    elif operation == "divide":\n        if y != 0:\n            result = x / y\n        else:\n            return "Error: Division by zero"\n    else:\n        return "Error: Invalid operation"\n    \n    return f"The result of {x} {operation} {y} is {result}"\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This function takes an operation and two numbers as input, performs the specified operation, and returns the result as a string. The ",(0,o.jsx)(n.code,{children:"@observability_decorator"})," is a special feature of xRx that allows for monitoring and logging of tool usage."]}),"\n",(0,o.jsxs)(n.p,{children:["Now, to make this tool available to your agent, you need to add it to the ",(0,o.jsx)(n.code,{children:"tools_dict"})," in the ",(0,o.jsx)(n.code,{children:"single_turn_agent"})," function:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'tools_dict = {\n    "get_current_weather": get_current_weather,\n    "get_current_time": get_current_time,\n    "get_stock_price": get_stock_price,\n    "calculator": calculator, # Add your new tool here\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"By adding the calculator to this dictionary, you're telling your agent that it has access to this new capability. The language model can now use this tool when it determines that a calculation is necessary to answer a query."}),"\n",(0,o.jsx)(n.p,{children:"This is just a simple example, but it illustrates the power and flexibility of the tool system in xRx. You could create tools to access databases, call external APIs, process images, or perform any other task that Python can handle. The key is to think about what specific capabilities would enhance your agent's ability to assist users in your particular domain."}),"\n",(0,o.jsx)(n.p,{children:"Remember, when creating tools, it's important to:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"Clearly define the tool's purpose and inputs"}),"\n",(0,o.jsx)(n.li,{children:"Handle potential errors gracefully"}),"\n",(0,o.jsx)(n.li,{children:"Return results in a format that's easy for the agent to interpret and use"}),"\n",(0,o.jsxs)(n.li,{children:["Use the ",(0,o.jsx)(n.code,{children:"@observability_decorator"})," for monitoring and debugging"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"As you develop your agent, you'll likely find yourself creating a variety of custom tools to handle different tasks. This modular approach allows you to continually expand and refine your agent's capabilities over time."}),"\n",(0,o.jsx)(n.h2,{id:"test-your-reasoning-agent",children:"Test your reasoning agent"}),"\n",(0,o.jsx)(n.p,{children:"Once you've implemented your agent and added any custom tools, it's time to test it. You can do this by building and running a Docker container:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"cd customer-support-agent\ndocker build -t customer-support-agent:latest .\ndocker run -p 8003:8003 --env-file .env customer-support-agent:latest\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Your agent will now be accessible at ",(0,o.jsx)(n.a,{href:"http://localhost:8003",children:"http://localhost:8003"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"build-a-custom-ui",children:"Build a custom UI"}),"\n",(0,o.jsx)(n.p,{children:"While the agent works fine via API calls, you might want to create a custom user interface. For information on how to build custom widgets for your UI, refer to the tutorial Create your own Widgets."}),"\n",(0,o.jsx)(n.h2,{id:"create-your-env-file",children:"Create your .env file"}),"\n",(0,o.jsxs)(n.p,{children:["Your agent will need certain environment variables to function correctly. Create a ",(0,o.jsx)(n.code,{children:".env"})," file in your project directory based on the provided ",(0,o.jsx)(n.code,{children:".env.example"}),". Here's a minimal example:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'LLM_API_KEY="<your Api Key>"\nLLM_BASE_URL="https://api.groq.com/openai/v1"\nLLM_MODEL_ID="llama3-70b-8192"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Make sure to replace the placeholder values with your actual API keys and preferred model ID."}),"\n",(0,o.jsx)(n.h2,{id:"deploy-the-xrx-system",children:"Deploy the xRx system"}),"\n",(0,o.jsx)(n.p,{children:"With your agent implemented and environment variables set, you're ready to deploy the full xRx system. From your project directory, run:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"docker-compose up --build\n"})}),"\n",(0,o.jsx)(n.p,{children:"This command builds and starts all the necessary containers for your xRx application."}),"\n",(0,o.jsx)(n.h2,{id:"project-structure",children:"Project Structure"}),"\n",(0,o.jsx)(n.p,{children:"Here's a quick overview of the key components in your project:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"app/"}),": Contains the main application code","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"agent/"}),": Agent logic","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"executor.py"}),": Main agent execution logic"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"tools/"}),": Folder containing agent tools"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"main.py"}),": FastAPI application setup and endpoint definition"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"test/"}),": Contains test files"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"xrx-core/"}),": Core xRx framework (submodule)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Dockerfile"}),": Docker configuration for containerization"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"requirements.txt"}),": Python dependencies"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"docker-compose.yaml"}),": Docker Compose configuration file"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"api-usage",children:"API Usage"}),"\n",(0,o.jsx)(n.p,{children:"Your agent exposes a single endpoint via FastAPI:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"POST /run-reasoning-agent"}),": Submit a query to the reasoning agent and receive streaming responses."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Here's an example of how to use this endpoint with curl:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'curl -X POST http://localhost:8003/run-reasoning-agent \\\n-H "Content-Type: application/json" \\\n-H "Accept: text/event-stream" \\\n-d \'{\n"session": {\n"id": "1234567890"\n},\n"messages": [\n{"role": "user", "content": "What is the weather like in Paris?"}\n]\n}\'\n'})}),"\n",(0,o.jsx)(n.p,{children:"This setup provides a solid foundation for building and customizing your own reasoning agent within the xRx framework. As you continue to develop your agent, remember that the key to creating a powerful and effective AI assistant lies in thoughtfully designing its capabilities, carefully implementing its logic, and thoroughly testing its performance across a wide range of scenarios."}),"\n",(0,o.jsx)(n.p,{children:"Happy building!"})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var o=t(6540);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);