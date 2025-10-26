import { PaymentMcpServer } from "x402-mcp";
import { z } from "zod";
import replaceAll from "../utils/replace-all.js";

export function replaceAllTool(server: PaymentMcpServer) {
    server.paidTool(
        "replace_all",
        "Replace all occurrences of a substring with another string",
        { price: 0.001 },
        {
            str: z.string(),
            searchValue: z.string(),
            replaceValue: z.string()
        },
        {},
        async ({ str, searchValue, replaceValue }) => {
            return {
                content: [{
                    type: "text",
                    text: replaceAll(str, searchValue, replaceValue)
                }]
            }
        }
    );
}
