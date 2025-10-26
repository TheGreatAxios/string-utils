import { PaymentMcpServer } from "x402-mcp";
import { z } from "zod";
import contains from "../utils/contains.js";

export function containsTool(server: PaymentMcpServer) {
    server.paidTool(
        "contains",
        "Check if a string contains a specific substring",
        { price: 0.001 },
        {
            str: z.string(),
            substring: z.string(),
            caseSensitive: z.boolean().optional().default(false)
        },
        {},
        async ({ str, substring, caseSensitive }) => {
            return {
                content: [{
                    type: "text",
                    text: contains(str, substring, caseSensitive).toString()
                }]
            }
        }
    );
}
