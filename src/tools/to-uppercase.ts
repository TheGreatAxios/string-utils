import { PaymentMcpServer } from "x402-mcp";
import { z } from "zod";
import toUpperCase from "../utils/to-uppercase.js";

export function toUppercaseTool(server: PaymentMcpServer) {
    server.paidTool(
        "to_uppercase",
        "Convert string to uppercase",
        { price: 0.001 },
        { str: z.string() },
        {},
        async ({ str }) => {
            return {
                content: [{
                    type: "text",
                    text: toUpperCase(str)
                }]
            }
        }
    );
}
