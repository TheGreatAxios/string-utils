import { Hono } from 'hono'
import { createMiddleware } from "@faremeter/middleware/hono";
import setupMiddleware from './middleware.js';
import { mcpHandler } from './mcp.js';
import reverseStringController from './controllers/reverse-string.js';
import infoController from './controllers/info.js';

const app = new Hono()

// Setup Middleware
setupMiddleware(app);


app.all("/mcp/*", async(c) => {
  return await mcpHandler(c.req.raw);
});

app.use("/tools/*", await createMiddleware({
  facilitatorURL: "https://facilitator.dirtroad.dev",
  accepts: [
    {
      scheme: "exact",
      network: "eip155:2140350733",
      maxAmountRequired: "10000",
      maxTimeoutSeconds: 5000,
      payTo: "0x5b50bcb552825e8753bcb5401528de497ac64e0c",
      asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
      description: "Reverse a string",
      mimeType: "application/json"
    }
    
  ],
}));

app.post("/tools/reverse-string", reverseStringController);

app.get('/', infoController);

export default app
