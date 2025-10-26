import { PaymentMcpServer } from "x402-mcp";
import { z } from "zod";
import getLength from "../utils/length.js";

export function lengthTool(server: PaymentMcpServer) {
    server.paidTool(
        "length",
        "Get the length of a string",
        { price: 0.001 },
        { str: z.string() },
        {},
        async ({ str }) => {
            return {
                content: [{
                    type: "text",
                    text: getLength(str).toString()
                }]
            }
        }
    );
}
