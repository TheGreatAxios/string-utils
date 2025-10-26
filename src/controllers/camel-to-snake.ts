import { Context } from "hono";
import { z } from "zod";
import camelToSnake from "../utils/camel-to-snake.js";

const camelToSnakeSchema = z.object({
    str: z.string(),
});

export default async function camelToSnakeController(c: Context) {
    const body = await c.req.json();
    const { str } = camelToSnakeSchema.parse(body);

    return c.json({
        original: str,
        result: camelToSnake(str)
    });
}
