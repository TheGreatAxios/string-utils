import { Context } from "hono";
import { z } from "zod";
import countOccurences from "../utils/count-occurences.js";

const countOccurencesSchema = z.object({
    str: z.string(),
    substring: z.string(),
    caseSensitive: z.boolean().optional().default(false),
});

export default async function countOccurencesController(c: Context) {
    const body = await c.req.json();
    const { str, substring, caseSensitive } = countOccurencesSchema.parse(body);

    return c.json({
        str,
        substring,
        caseSensitive,
        result: countOccurences(str, substring, caseSensitive)
    });
}
