import { PaymentMcpServer } from "x402-mcp";
import { z } from "zod";
import countOccurences from "../utils/count-occurences.js";

export function countOccurencesTool(server: PaymentMcpServer) {
    server.paidTool(
        "count_occurences",
        "Count the number of occurrences of a substring in a string",
        { price: 0.001 },
        {
            str: z.string(),
            substring: z.string(),
            caseSensitive: z.boolean().optional().default(false)
        },
        {},
        async ({ str, substring, caseSensitive }) => {
            return {
                content: [{
                    type: "text",
                    text: countOccurences(str, substring, caseSensitive).toString()
                }]
            }
        }
    );
}
