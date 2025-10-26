import { Context } from "hono";

export default function infoController(c: Context) {
    return c.json({
        message: "String Utils MCP Server by https://dirtroad.dev",
        endpoints: [
          {
            route: "/mcp",
            tools: ["reverse_string"],
            description: "MCP Server with key string utilites",
          },
          {
           route: "/tools/reverse-string",
           description: "API Route to Reverse String" 
          }
        ],
        tools: ["reverse_string"]
      })
}