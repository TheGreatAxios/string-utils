import { PaymentMcpServer } from "x402-mcp";
import { z } from "zod";
import removeNonAlphanumeric from "../utils/remove-non-alphanumeric.js";

export function removeNonAlphanumericTool(server: PaymentMcpServer) {
    server.paidTool(
        "remove_non_alphanumeric",
        "Remove all non-alphanumeric characters from a string",
        { price: 0.001 },
        { str: z.string() },
        {},
        async ({ str }) => {
            return {
                content: [{
                    type: "text",
                    text: removeNonAlphanumeric(str)
                }]
            }
        }
    );
}
