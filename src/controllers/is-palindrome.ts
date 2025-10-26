import { Context } from "hono";
import { z } from "zod";
import isPalindrome from "../utils/is-palindrome.js";

const isPalindromeSchema = z.object({
    str: z.string(),
    strict: z.boolean().optional().default(false),
});

export default async function isPalindromeController(c: Context) {
    const body = await c.req.json();
    const { str, strict } = isPalindromeSchema.parse(body);

    return c.json({
        str,
        strict,
        result: isPalindrome(str, strict)
    });
}
