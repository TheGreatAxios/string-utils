import { Context } from "hono";
import { z } from "zod";
import capitalize from "../utils/capitalize.js";

const capitalizeSchema = z.object({
    str: z.string(),
});

export default async function capitalizeController(c: Context) {
    const body = await c.req.json();
    const { str } = capitalizeSchema.parse(body);

    return c.json({
        original: str,
        result: capitalize(str)
    });
}
