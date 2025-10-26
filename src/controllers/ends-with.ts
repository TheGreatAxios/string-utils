import { Context } from "hono";
import { z } from "zod";
import endsWith from "../utils/ends-with.js";

const endsWithSchema = z.object({
    str: z.string(),
    suffix: z.string(),
    caseSensitive: z.boolean().optional().default(false),
});

export default async function endsWithController(c: Context) {
    const body = await c.req.json();
    const { str, suffix, caseSensitive } = endsWithSchema.parse(body);

    return c.json({
        str,
        suffix,
        caseSensitive,
        result: endsWith(str, suffix, caseSensitive)
    });
}
