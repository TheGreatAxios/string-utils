import { PaymentMcpServer } from "x402-mcp";
import { z } from "zod";
import endsWith from "../utils/ends-with.js";

export function endsWithTool(server: PaymentMcpServer) {
    server.paidTool(
        "ends_with",
        "Check if a string ends with a specific suffix",
        { price: 0.001 },
        {
            str: z.string(),
            suffix: z.string(),
            caseSensitive: z.boolean().optional().default(false)
        },
        {},
        async ({ str, suffix, caseSensitive }) => {
            return {
                content: [{
                    type: "text",
                    text: endsWith(str, suffix, caseSensitive).toString()
                }]
            }
        }
    );
}
