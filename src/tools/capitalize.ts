import { PaymentMcpServer } from "x402-mcp";
import { z } from "zod";
import capitalize from "../utils/capitalize.js";

export function capitalizeTool(server: PaymentMcpServer) {
    server.paidTool(
        "capitalize",
        "Capitalize the first letter of each word",
        { price: 0.001 },
        { str: z.string() },
        {},
        async ({ str }) => {
            return {
                content: [{
                    type: "text",
                    text: capitalize(str)
                }]
            }
        }
    );
}
