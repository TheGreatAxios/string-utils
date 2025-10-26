import { Context } from "hono";
import { z } from "zod";
import normalizeWhitespace from "../utils/normalize-whitespace.js";

const normalizeWhitespaceSchema = z.object({
    str: z.string(),
});

export default async function normalizeWhitespaceController(c: Context) {
    const body = await c.req.json();
    const { str } = normalizeWhitespaceSchema.parse(body);

    return c.json({
        original: str,
        result: normalizeWhitespace(str)
    });
}
