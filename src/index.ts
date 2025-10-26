import { Hono } from 'hono'
import { createMiddleware } from "@faremeter/middleware/hono";
import setupMiddleware from './middleware.js';
import { mcpHandler } from './mcp.js';
import reverseStringController from './controllers/reverse-string.js';
import snakeToCamelController from './controllers/snake-to-camel.js';
import camelToSnakeController from './controllers/camel-to-snake.js';
import toUppercaseController from './controllers/to-uppercase.js';
import toLowercaseController from './controllers/to-lowercase.js';
import capitalizeController from './controllers/capitalize.js';
import capitalizeFirstLetterController from './controllers/capitalize-first-letter.js';
import trimController from './controllers/trim.js';
import containsController from './controllers/contains.js';
import replaceAllController from './controllers/replace-all.js';
import countOccurencesController from './controllers/count-occurences.js';
import startsWithController from './controllers/starts-with.js';
import endsWithController from './controllers/ends-with.js';
import substringController from './controllers/substring.js';
import removeNonAlphanumericController from './controllers/remove-non-alphanumeric.js';
import normalizeWhitespaceController from './controllers/normalize-whitespace.js';
import lengthController from './controllers/length.js';
import truncateController from './controllers/truncate.js';
import slugifyController from './controllers/slugify.js';
import isPalindromeController from './controllers/is-palindrome.js';
import repeatController from './controllers/repeat.js';
import infoController from './controllers/info.js';
import { paymentMiddleware } from 'x402-hono';

const app = new Hono()

// Setup Middleware
setupMiddleware(app);


app.all("/mcp/*", async(c) => {
  return await mcpHandler(c.req.raw);
});

app.use("/tools/paid/*", paymentMiddleware(
  "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
  {
    "/tools/paid/*": {
      price: "$0.001",
      network: "base"
    }
  }, {
    url: "https://facilitator.payai.network"
  }
),
);

app.post("/tools/paid/reverse-string", reverseStringController);
app.post("/tools/paid/snake-to-camel", snakeToCamelController);
app.post("/tools/paid/camel-to-snake", camelToSnakeController);
app.post("/tools/paid/to-uppercase", toUppercaseController);
app.post("/tools/paid/to-lowercase", toLowercaseController);
app.post("/tools/paid/capitalize", capitalizeController);
app.post("/tools/paid/capitalize-first-letter", capitalizeFirstLetterController);
app.post("/tools/paid/trim", trimController);
app.post("/tools/paid/contains", containsController);
app.post("/tools/paid/replace-all", replaceAllController);
app.post("/tools/paid/count-occurences", countOccurencesController);
app.post("/tools/paid/starts-with", startsWithController);
app.post("/tools/paid/ends-with", endsWithController);
app.post("/tools/paid/substring", substringController);
app.post("/tools/paid/remove-non-alphanumeric", removeNonAlphanumericController);
app.post("/tools/paid/normalize-whitespace", normalizeWhitespaceController);
app.post("/tools/paid/length", lengthController);
app.post("/tools/paid/truncate", truncateController);
app.post("/tools/paid/slugify", slugifyController);
app.post("/tools/paid/is-palindrome", isPalindromeController);
app.post("/tools/paid/repeat", repeatController);

app.use("/tools/testnet/*", await createMiddleware({
  facilitatorURL: "https://facilitator.dirtroad.dev",
  accepts: [
    {
      scheme: "exact",
      network: "eip155:2140350733",
      maxAmountRequired: "10000",
      maxTimeoutSeconds: 5000,
      payTo: "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
      asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
      description: "",
      mimeType: "application/json"
    }
  ],
}));

app.post("/tools/testnet/reverse-string", reverseStringController);
app.post("/tools/testnet/snake-to-camel", snakeToCamelController);
app.post("/tools/testnet/camel-to-snake", camelToSnakeController);
app.post("/tools/testnet/to-uppercase", toUppercaseController);
app.post("/tools/testnet/to-lowercase", toLowercaseController);
app.post("/tools/testnet/capitalize", capitalizeController);
app.post("/tools/testnet/capitalize-first-letter", capitalizeFirstLetterController);
app.post("/tools/testnet/trim", trimController);
app.post("/tools/testnet/contains", containsController);
app.post("/tools/testnet/replace-all", replaceAllController);
app.post("/tools/testnet/count-occurences", countOccurencesController);
app.post("/tools/testnet/starts-with", startsWithController);
app.post("/tools/testnet/ends-with", endsWithController);
app.post("/tools/testnet/substring", substringController);
app.post("/tools/testnet/remove-non-alphanumeric", removeNonAlphanumericController);
app.post("/tools/testnet/normalize-whitespace", normalizeWhitespaceController);
app.post("/tools/testnet/length", lengthController);
app.post("/tools/testnet/truncate", truncateController);
app.post("/tools/testnet/slugify", slugifyController);
app.post("/tools/testnet/is-palindrome", isPalindromeController);
app.post("/tools/testnet/repeat", repeatController);

app.get('/', infoController);

export default app
