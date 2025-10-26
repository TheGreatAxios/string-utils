import { PaymentMcpServer } from "x402-mcp";
import { z } from "zod";
import truncate from "../utils/truncate.js";

export function truncateTool(server: PaymentMcpServer) {
    server.paidTool(
        "truncate",
        "Truncate a string to a maximum length with optional suffix",
        { price: 0.001 },
        {
            str: z.string(),
            maxLength: z.number(),
            suffix: z.string().optional().default("...")
        },
        {},
        async ({ str, maxLength, suffix }) => {
            return {
                content: [{
                    type: "text",
                    text: truncate(str, maxLength, suffix)
                }]
            }
        }
    );
}
