import { Context } from "hono";
import { z } from "zod";
import replaceAll from "../utils/replace-all.js";

const replaceAllSchema = z.object({
    str: z.string(),
    searchValue: z.string(),
    replaceValue: z.string(),
});

export default async function replaceAllController(c: Context) {
    const body = await c.req.json();
    const { str, searchValue, replaceValue } = replaceAllSchema.parse(body);

    return c.json({
        original: str,
        searchValue,
        replaceValue,
        result: replaceAll(str, searchValue, replaceValue)
    });
}
