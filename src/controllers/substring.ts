import { Context } from "hono";
import { z } from "zod";
import substring from "../utils/substring.js";

const substringSchema = z.object({
    str: z.string(),
    startIndex: z.number(),
    endIndex: z.number().optional(),
});

export default async function substringController(c: Context) {
    const body = await c.req.json();
    const { str, startIndex, endIndex } = substringSchema.parse(body);

    return c.json({
        original: str,
        startIndex,
        endIndex,
        result: substring(str, startIndex, endIndex)
    });
}
