import { PaymentMcpServer } from "x402-mcp";
import { z } from "zod";
import trimString from "../utils/trim.js";

export function trimTool(server: PaymentMcpServer) {
    server.paidTool(
        "trim",
        "Trim whitespace from both ends of a string",
        { price: 0.001 },
        { str: z.string() },
        {},
        async ({ str }) => {
            return {
                content: [{
                    type: "text",
                    text: trimString(str)
                }]
            }
        }
    );
}
