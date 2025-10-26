import { PaymentMcpServer } from "x402-mcp";
import { z } from "zod";
import reverseString from "../utils/reverse-string.js";

export function reverseStringTool(server: PaymentMcpServer) {
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
                    text: reverseString(str)
                }]
            }
        }
    );
}