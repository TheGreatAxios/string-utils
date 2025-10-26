import { Context } from "hono";
import { z } from "zod";
import toLowerCase from "../utils/to-lowercase.js";

const toLowercaseSchema = z.object({
    str: z.string(),
});

export default async function toLowercaseController(c: Context) {
    const body = await c.req.json();
    const { str } = toLowercaseSchema.parse(body);

    return c.json({
        original: str,
        result: toLowerCase(str)
    });
}
