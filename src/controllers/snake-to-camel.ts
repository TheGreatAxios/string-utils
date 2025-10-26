import { Context } from "hono";
import { z } from "zod";
import snakeToCamel from "../utils/snake-to-camel.js";

const snakeToCamelSchema = z.object({
    str: z.string(),
});

export default async function snakeToCamelController(c: Context) {
    const body = await c.req.json();
    const { str } = snakeToCamelSchema.parse(body);

    return c.json({
        original: str,
        result: snakeToCamel(str)
    });
}
