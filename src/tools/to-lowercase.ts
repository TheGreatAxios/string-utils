import { PaymentMcpServer } from "x402-mcp";
import { z } from "zod";
import toLowerCase from "../utils/to-lowercase.js";

export function toLowercaseTool(server: PaymentMcpServer) {
    server.paidTool(
        "to_lowercase",
        "Convert string to lowercase",
        { price: 0.001 },
        { str: z.string() },
        {},
        async ({ str }) => {
            return {
                content: [{
                    type: "text",
                    text: toLowerCase(str)
                }]
            }
        }
    );
}
