import { Context } from "hono";
import { z } from "zod";
import contains from "../utils/contains.js";

const containsSchema = z.object({
    str: z.string(),
    substring: z.string(),
    caseSensitive: z.boolean().optional().default(false),
});

export default async function containsController(c: Context) {
    const body = await c.req.json();
    const { str, substring, caseSensitive } = containsSchema.parse(body);

    return c.json({
        str,
        substring,
        caseSensitive,
        result: contains(str, substring, caseSensitive)
    });
}
