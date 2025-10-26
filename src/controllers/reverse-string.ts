import { Context } from "hono";
import { z } from "zod";
import reverseString from "../utils/reverse-string.js";

const reverseStringSchema = z.object({
    str: z.string(),
});

export default async function reverseStringController(c: Context) {
    const body = await c.req.json();
    const { str } = reverseStringSchema.parse(body);

    return c.json({
        original: str,
        reversed: reverseString(str)
    });
}