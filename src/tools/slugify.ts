import { PaymentMcpServer } from "x402-mcp";
import { z } from "zod";
import slugify from "../utils/slugify.js";

export function slugifyTool(server: PaymentMcpServer) {
    server.paidTool(
        "slugify",
        "Convert a string to a URL-friendly slug",
        { price: 0.001 },
        { str: z.string() },
        {},
        async ({ str }) => {
            return {
                content: [{
                    type: "text",
                    text: slugify(str)
                }]
            }
        }
    );
}
