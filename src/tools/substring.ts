import { PaymentMcpServer } from "x402-mcp";
import { z } from "zod";
import substring from "../utils/substring.js";

export function substringTool(server: PaymentMcpServer) {
    server.paidTool(
        "substring",
        "Extract a substring from a string based on start and end indices",
        { price: 0.001 },
        {
            str: z.string(),
            startIndex: z.number(),
            endIndex: z.number().optional()
        },
        {},
        async ({ str, startIndex, endIndex }) => {
            return {
                content: [{
                    type: "text",
                    text: substring(str, startIndex, endIndex)
                }]
            }
        }
    );
}
