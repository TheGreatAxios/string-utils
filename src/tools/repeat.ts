import { PaymentMcpServer } from "x402-mcp";
import { z } from "zod";
import repeat from "../utils/repeat.js";

export function repeatTool(server: PaymentMcpServer) {
    server.paidTool(
        "repeat",
        "Repeat a string a specified number of times",
        { price: 0.001 },
        {
            str: z.string(),
            times: z.number()
        },
        {},
        async ({ str, times }) => {
            return {
                content: [{
                    type: "text",
                    text: repeat(str, times)
                }]
            }
        }
    );
}
