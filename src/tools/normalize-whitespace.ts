import { PaymentMcpServer } from "x402-mcp";
import { z } from "zod";
import normalizeWhitespace from "../utils/normalize-whitespace.js";

export function normalizeWhitespaceTool(server: PaymentMcpServer) {
    server.paidTool(
        "normalize_whitespace",
        "Remove extra whitespace, replacing multiple spaces with a single space and trimming",
        { price: 0.001 },
        { str: z.string() },
        {},
        async ({ str }) => {
            return {
                content: [{
                    type: "text",
                    text: normalizeWhitespace(str)
                }]
            }
        }
    );
}
