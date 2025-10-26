import { PaymentMcpServer } from "x402-mcp";
import { z } from "zod";
import isPalindrome from "../utils/is-palindrome.js";

export function isPalindromeTool(server: PaymentMcpServer) {
    server.paidTool(
        "is_palindrome",
        "Check if a string is a palindrome",
        { price: 0.001 },
        {
            str: z.string(),
            strict: z.boolean().optional().default(false)
        },
        {},
        async ({ str, strict }) => {
            return {
                content: [{
                    type: "text",
                    text: isPalindrome(str, strict).toString()
                }]
            }
        }
    );
}
