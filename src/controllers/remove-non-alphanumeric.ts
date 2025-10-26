import { Context } from "hono";
import { z } from "zod";
import removeNonAlphanumeric from "../utils/remove-non-alphanumeric.js";

const removeNonAlphanumericSchema = z.object({
    str: z.string(),
});

export default async function removeNonAlphanumericController(c: Context) {
    const body = await c.req.json();
    const { str } = removeNonAlphanumericSchema.parse(body);

    return c.json({
        original: str,
        result: removeNonAlphanumeric(str)
    });
}
