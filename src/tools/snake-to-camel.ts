import { PaymentMcpServer } from "x402-mcp";
import { z } from "zod";
import snakeToCamel from "../utils/snake-to-camel.js";

export function snakeToCamelTool(server: PaymentMcpServer) {
    server.paidTool(
        "snake_to_camel",
        "Convert snake_case string to camelCase",
        { price: 0.001 },
        { str: z.string() },
        {},
        async ({ str }) => {
            return {
                content: [{
                    type: "text",
                    text: snakeToCamel(str)
                }]
            }
        }
    );
}
