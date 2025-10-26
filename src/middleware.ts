import { Hono } from "hono";
import { compress } from "hono/compress";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";
import { requestId } from "hono/request-id";

export default function setupMiddleware(app: Hono) {
    app.use(logger());
    app.use(cors({
        origin: "*"
    }));
    app.use(prettyJSON());
    app.use(compress());
    app.use(requestId());
}