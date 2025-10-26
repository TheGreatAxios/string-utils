import { createPaidMcpHandler } from "x402-mcp";
import { FACILITATOR_URL, NETWORK, RECIPIENT } from "./config.js";
import { reverseStringTool } from "./tools/reverse-string.js";

export const mcpHandler = createPaidMcpHandler((server) =>  {
    reverseStringTool(server);
}, {
    serverInfo: {
        name: "x402 Enabled API & MCP Server",
        version: "0.1.0"
    },
}, {
    facilitator: {
        url: FACILITATOR_URL
    },
    recipient: RECIPIENT,
    network: NETWORK as any // override
});