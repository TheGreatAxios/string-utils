import { Context } from "hono";
import { z } from "zod";
import startsWith from "../utils/starts-with.js";

const startsWithSchema = z.object({
    str: z.string(),
    prefix: z.string(),
    caseSensitive: z.boolean().optional().default(false),
});

export default async function startsWithController(c: Context) {
    const body = await c.req.json();
    const { str, prefix, caseSensitive } = startsWithSchema.parse(body);

    return c.json({
        str,
        prefix,
        caseSensitive,
        result: startsWith(str, prefix, caseSensitive)
    });
}
