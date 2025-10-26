import { PaymentMcpServer } from "x402-mcp";
import { z } from "zod";
import capitalizeFirstLetter from "../utils/capitalize-first-letter.js";

export function capitalizeFirstLetterTool(server: PaymentMcpServer) {
    server.paidTool(
        "capitalize_first_letter",
        "Capitalize only the first letter of the string",
        { price: 0.001 },
        { str: z.string() },
        {},
        async ({ str }) => {
            return {
                content: [{
                    type: "text",
                    text: capitalizeFirstLetter(str)
                }]
            }
        }
    );
}
