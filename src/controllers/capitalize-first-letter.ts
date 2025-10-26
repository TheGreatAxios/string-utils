import { Context } from "hono";
import { z } from "zod";
import capitalizeFirstLetter from "../utils/capitalize-first-letter.js";

const capitalizeFirstLetterSchema = z.object({
    str: z.string(),
});

export default async function capitalizeFirstLetterController(c: Context) {
    const body = await c.req.json();
    const { str } = capitalizeFirstLetterSchema.parse(body);

    return c.json({
        original: str,
        result: capitalizeFirstLetter(str)
    });
}
