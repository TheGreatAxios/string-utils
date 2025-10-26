import { Context } from "hono";
import { z } from "zod";
import slugify from "../utils/slugify.js";

const slugifySchema = z.object({
    str: z.string(),
});

export default async function slugifyController(c: Context) {
    const body = await c.req.json();
    const { str } = slugifySchema.parse(body);

    return c.json({
        original: str,
        result: slugify(str)
    });
}
