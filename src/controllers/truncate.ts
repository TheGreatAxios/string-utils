import { Context } from "hono";
import { z } from "zod";
import truncate from "../utils/truncate.js";

const truncateSchema = z.object({
    str: z.string(),
    maxLength: z.number(),
    suffix: z.string().optional().default("..."),
});

export default async function truncateController(c: Context) {
    const body = await c.req.json();
    const { str, maxLength, suffix } = truncateSchema.parse(body);

    return c.json({
        original: str,
        maxLength,
        suffix,
        result: truncate(str, maxLength, suffix)
    });
}
