import { PaymentMcpServer } from "x402-mcp";
import { z } from "zod";
import startsWith from "../utils/starts-with.js";

export function startsWithTool(server: PaymentMcpServer) {
    server.paidTool(
        "starts_with",
        "Check if a string starts with a specific prefix",
        { price: 0.001 },
        {
            str: z.string(),
            prefix: z.string(),
            caseSensitive: z.boolean().optional().default(false)
        },
        {},
        async ({ str, prefix, caseSensitive }) => {
            return {
                content: [{
                    type: "text",
                    text: startsWith(str, prefix, caseSensitive).toString()
                }]
            }
        }
    );
}
