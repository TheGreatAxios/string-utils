import { Context } from "hono";
import { z } from "zod";
import toUpperCase from "../utils/to-uppercase.js";

const toUppercaseSchema = z.object({
    str: z.string(),
});

export default async function toUppercaseController(c: Context) {
    const body = await c.req.json();
    const { str } = toUppercaseSchema.parse(body);

    return c.json({
        original: str,
        result: toUpperCase(str)
    });
}
