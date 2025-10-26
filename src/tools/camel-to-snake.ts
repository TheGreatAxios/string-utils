import { PaymentMcpServer } from "x402-mcp";
import { z } from "zod";
import camelToSnake from "../utils/camel-to-snake.js";

export function camelToSnakeTool(server: PaymentMcpServer) {
    server.paidTool(
        "camel_to_snake",
        "Convert camelCase string to snake_case",
        { price: 0.001 },
        { str: z.string() },
        {},
        async ({ str }) => {
            return {
                content: [{
                    type: "text",
                    text: camelToSnake(str)
                }]
            }
        }
    );
}
