import { Context } from "hono";
import { z } from "zod";
import trimString from "../utils/trim.js";

const trimSchema = z.object({
    str: z.string(),
});

export default async function trimController(c: Context) {
    const body = await c.req.json();
    const { str } = trimSchema.parse(body);

    return c.json({
        original: str,
        result: trimString(str)
    });
}
