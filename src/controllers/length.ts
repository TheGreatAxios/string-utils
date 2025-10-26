import { Context } from "hono";
import { z } from "zod";
import getLength from "../utils/length.js";

const lengthSchema = z.object({
    str: z.string(),
});

export default async function lengthController(c: Context) {
    const body = await c.req.json();
    const { str } = lengthSchema.parse(body);

    return c.json({
        str,
        result: getLength(str)
    });
}
