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

const app = new Hono()

// Setup Middleware
setupMiddleware(app);


app.all("/mcp/*", async(c) => {
  return await mcpHandler(c.req.raw);
});

app.use("/tools/*", await createMiddleware({
  facilitatorURL: "https://facilitator.dirtroad.dev",
  accepts: [
    {
      scheme: "exact",
      network: "eip155:2140350733",
      maxAmountRequired: "10000",
      maxTimeoutSeconds: 5000,
      payTo: "0x5b50bcb552825e8753bcb5401528de497ac64e0c",
      asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
      description: "Reverse a string",
      mimeType: "application/json"
    },
    {
      scheme: "exact",
      network: "eip155:2140350733",
      maxAmountRequired: "10000",
      maxTimeoutSeconds: 5000,
      payTo: "0x5b50bcb552825e8753bcb5401528de497ac64e0c",
      asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
      description: "Convert snake_case to camelCase",
      mimeType: "application/json"
    },
    {
      scheme: "exact",
      network: "eip155:2140350733",
      maxAmountRequired: "10000",
      maxTimeoutSeconds: 5000,
      payTo: "0x5b50bcb552825e8753bcb5401528de497ac64e0c",
      asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
      description: "Convert camelCase to snake_case",
      mimeType: "application/json"
    },
    {
      scheme: "exact",
      network: "eip155:2140350733",
      maxAmountRequired: "10000",
      maxTimeoutSeconds: 5000,
      payTo: "0x5b50bcb552825e8753bcb5401528de497ac64e0c",
      asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
      description: "Convert string to uppercase",
      mimeType: "application/json"
    },
    {
      scheme: "exact",
      network: "eip155:2140350733",
      maxAmountRequired: "10000",
      maxTimeoutSeconds: 5000,
      payTo: "0x5b50bcb552825e8753bcb5401528de497ac64e0c",
      asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
      description: "Convert string to lowercase",
      mimeType: "application/json"
    },
    {
      scheme: "exact",
      network: "eip155:2140350733",
      maxAmountRequired: "10000",
      maxTimeoutSeconds: 5000,
      payTo: "0x5b50bcb552825e8753bcb5401528de497ac64e0c",
      asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
      description: "Capitalize each word in a string",
      mimeType: "application/json"
    },
    {
      scheme: "exact",
      network: "eip155:2140350733",
      maxAmountRequired: "10000",
      maxTimeoutSeconds: 5000,
      payTo: "0x5b50bcb552825e8753bcb5401528de497ac64e0c",
      asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
      description: "Capitalize first letter of string",
      mimeType: "application/json"
    },
    {
      scheme: "exact",
      network: "eip155:2140350733",
      maxAmountRequired: "10000",
      maxTimeoutSeconds: 5000,
      payTo: "0x5b50bcb552825e8753bcb5401528de497ac64e0c",
      asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
      description: "Trim whitespace from string",
      mimeType: "application/json"
    },
    {
      scheme: "exact",
      network: "eip155:2140350733",
      maxAmountRequired: "10000",
      maxTimeoutSeconds: 5000,
      payTo: "0x5b50bcb552825e8753bcb5401528de497ac64e0c",
      asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
      description: "Check if string contains substring",
      mimeType: "application/json"
    },
    {
      scheme: "exact",
      network: "eip155:2140350733",
      maxAmountRequired: "10000",
      maxTimeoutSeconds: 5000,
      payTo: "0x5b50bcb552825e8753bcb5401528de497ac64e0c",
      asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
      description: "Replace all occurrences in string",
      mimeType: "application/json"
    },
    {
      scheme: "exact",
      network: "eip155:2140350733",
      maxAmountRequired: "10000",
      maxTimeoutSeconds: 5000,
      payTo: "0x5b50bcb552825e8753bcb5401528de497ac64e0c",
      asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
      description: "Count occurrences of substring",
      mimeType: "application/json"
    },
    {
      scheme: "exact",
      network: "eip155:2140350733",
      maxAmountRequired: "10000",
      maxTimeoutSeconds: 5000,
      payTo: "0x5b50bcb552825e8753bcb5401528de497ac64e0c",
      asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
      description: "Check if string starts with prefix",
      mimeType: "application/json"
    },
    {
      scheme: "exact",
      network: "eip155:2140350733",
      maxAmountRequired: "10000",
      maxTimeoutSeconds: 5000,
      payTo: "0x5b50bcb552825e8753bcb5401528de497ac64e0c",
      asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
      description: "Check if string ends with suffix",
      mimeType: "application/json"
    },
    {
      scheme: "exact",
      network: "eip155:2140350733",
      maxAmountRequired: "10000",
      maxTimeoutSeconds: 5000,
      payTo: "0x5b50bcb552825e8753bcb5401528de497ac64e0c",
      asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
      description: "Extract substring from string",
      mimeType: "application/json"
    },
    {
      scheme: "exact",
      network: "eip155:2140350733",
      maxAmountRequired: "10000",
      maxTimeoutSeconds: 5000,
      payTo: "0x5b50bcb552825e8753bcb5401528de497ac64e0c",
      asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
      description: "Remove non-alphanumeric characters",
      mimeType: "application/json"
    },
    {
      scheme: "exact",
      network: "eip155:2140350733",
      maxAmountRequired: "10000",
      maxTimeoutSeconds: 5000,
      payTo: "0x5b50bcb552825e8753bcb5401528de497ac64e0c",
      asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
      description: "Normalize whitespace in string",
      mimeType: "application/json"
    },
    {
      scheme: "exact",
      network: "eip155:2140350733",
      maxAmountRequired: "10000",
      maxTimeoutSeconds: 5000,
      payTo: "0x5b50bcb552825e8753bcb5401528de497ac64e0c",
      asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
      description: "Get string length",
      mimeType: "application/json"
    },
    {
      scheme: "exact",
      network: "eip155:2140350733",
      maxAmountRequired: "10000",
      maxTimeoutSeconds: 5000,
      payTo: "0x5b50bcb552825e8753bcb5401528de497ac64e0c",
      asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
      description: "Truncate string to maximum length",
      mimeType: "application/json"
    },
    {
      scheme: "exact",
      network: "eip155:2140350733",
      maxAmountRequired: "10000",
      maxTimeoutSeconds: 5000,
      payTo: "0x5b50bcb552825e8753bcb5401528de497ac64e0c",
      asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
      description: "Convert string to URL-friendly slug",
      mimeType: "application/json"
    },
    {
      scheme: "exact",
      network: "eip155:2140350733",
      maxAmountRequired: "10000",
      maxTimeoutSeconds: 5000,
      payTo: "0x5b50bcb552825e8753bcb5401528de497ac64e0c",
      asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
      description: "Check if string is a palindrome",
      mimeType: "application/json"
    },
    {
      scheme: "exact",
      network: "eip155:2140350733",
      maxAmountRequired: "10000",
      maxTimeoutSeconds: 5000,
      payTo: "0x5b50bcb552825e8753bcb5401528de497ac64e0c",
      asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
      description: "Repeat string N times",
      mimeType: "application/json"
    }

  ],
}));

app.post("/tools/reverse-string", reverseStringController);
app.post("/tools/snake-to-camel", snakeToCamelController);
app.post("/tools/camel-to-snake", camelToSnakeController);
app.post("/tools/to-uppercase", toUppercaseController);
app.post("/tools/to-lowercase", toLowercaseController);
app.post("/tools/capitalize", capitalizeController);
app.post("/tools/capitalize-first-letter", capitalizeFirstLetterController);
app.post("/tools/trim", trimController);
app.post("/tools/contains", containsController);
app.post("/tools/replace-all", replaceAllController);
app.post("/tools/count-occurences", countOccurencesController);
app.post("/tools/starts-with", startsWithController);
app.post("/tools/ends-with", endsWithController);
app.post("/tools/substring", substringController);
app.post("/tools/remove-non-alphanumeric", removeNonAlphanumericController);
app.post("/tools/normalize-whitespace", normalizeWhitespaceController);
app.post("/tools/length", lengthController);
app.post("/tools/truncate", truncateController);
app.post("/tools/slugify", slugifyController);
app.post("/tools/is-palindrome", isPalindromeController);
app.post("/tools/repeat", repeatController);

app.get('/', infoController);

export default app
