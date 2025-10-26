import { Context } from "hono";
import { z } from "zod";
import repeat from "../utils/repeat.js";

const repeatSchema = z.object({
    str: z.string(),
    times: z.number(),
});

export default async function repeatController(c: Context) {
    const body = await c.req.json();
    const { str, times } = repeatSchema.parse(body);

    return c.json({
        str,
        times,
        result: repeat(str, times)
    });
}
