### Zod

#### 简介

​	Zod，通过函数式调用快速构造出符合模型调用时入参参数规范的JSON Scheme。提供类型校验和优秀的且便于LLM理解并修正的校验错误信息返回。

如：

```js
// 对象
const personSchema = z.object({
  name: z.string(),
  age: z.number(),
  // 可选类型
  isStudent: z.boolean().optional(),
  // 默认值
  home: z.string().default("no home")
});


```

另一简单且完整例子：

定义scheme类型

```js
const getCurrentWeatherSchema = z.object({
  location: z.string().describe("The city and state, e.g. San Francisco, CA"),
  unit: z.enum(["celsius", "fahrenheit"]).describe("The unit of temperature"),
});

```

转换工具：

```js
import { zodToJsonSchema } from "zod-to-json-schema";

const paramSchema = zodToJsonSchema(getCurrentWeatherSchema)
```

转换结果：

```js
{
  type: "object",
  properties: {
    location: {
      type: "string",
      description: "The city and state, e.g. San Francisco, CA"
    },
    unit: {
      type: "string",
      enum: [ "celsius", "fahrenheit" ],
      description: "The unit of temperature"
    }
  },
  required: [ "location", "unit" ],
  additionalProperties: false,
  "$schema": "http://json-schema.org/draft-07/schema#"
}
```

模型中使用（chatGpt api）

```js
const model = new ChatOpenAI({
    temperature: 0 
})

const modelWithTools = model.bind({
    tools: [
        {
            type: "function",
            function: {
                name: "getCurrentWeather",
                description: "Get the current weather in a given location",
                parameters: zodToJsonSchema(getCurrentWeatherSchema),
            }
        }
    ]
})

await modelWithTools.invoke("北京的天气怎么样");
```



AI返回信息：

```js
AIMessage {
  lc_serializable: true,
  lc_kwargs: {
    content: "",
    additional_kwargs: {
      function_call: undefined,
      tool_calls: [
        {
          function: [Object],
          id: "call_IMLAkWEhmOyh6T9vYMv65uEP",
          type: "function"
        }
      ]
    },
    response_metadata: {}
  },
  lc_namespace: [ "langchain_core", "messages" ],
  content: "",
  name: undefined,
  additional_kwargs: {
    function_call: undefined,
    tool_calls: [
      {
        function: {
          arguments: '{\n  "location": "北京",\n  "unit": "celsius"\n}',
          name: "getCurrentWeather"
        },
        id: "call_IMLAkWEhmOyh6T9vYMv65uEP",
        type: "function"
      }
    ]
  },
  response_metadata: {
    tokenUsage: { completionTokens: 23, promptTokens: 88, totalTokens: 111 },
    finish_reason: "tool_calls"
  }
}
```

