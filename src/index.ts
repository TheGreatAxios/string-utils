import { Hono } from 'hono'
import { createPaidMcpHandler } from 'x402-mcp';
import { facilitator } from '@coinbase/x402';
import { z } from 'zod';

const app = new Hono()

const handler = createPaidMcpHandler((server) => {
  server.paidTool(
    "reverse_string",
    "Reverse a string",
    { price: 0.001 },
    { str: z.string() },
    {},
    async ({ str }) => {
      return {
        content: [{
          type: "text",
          text: str.split('').reverse().join('')
        }]
      }
    }
  )
}, {
  serverInfo: {
    name: "String Utils MCP Server",
    version: "0.1.0"
  },
}, {
  facilitator,
  recipient: "0x5b50bcb552825e8753bcb5401528de497ac64e0c",
  network: "base-sepolia"
});

app.all("/mcp/*", async(c) => {
  return await handler(c.req.raw);
})

app.get('/', (c) => {
  return c.json({
    message: "String Utils MCP Server by https://dirtroad.dev",
    endpoints: {
      mcp: "/mcp",
      description: "MCP Server with key string utilites",
    },
    tools: ["reverse_string"]
  })
})

export default app
