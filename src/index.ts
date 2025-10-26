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

app.post("/tools/paid/reverse-string",
  paymentMiddleware(
    "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
    {
      "/tools/paid/reverse-string": {
        price: "$0.001",
        network: "base",
        config: {
          discoverable: true,
          description: "reverse string (paid)",
        }
      }
    }, {
      url: "https://facilitator.payai.network",
    }, {
      appLogo: "https://dirtroad.dev/logo.svg",
      appName: "Dirt Road Dev"
    }
  ),
  reverseStringController
);
app.post("/tools/paid/snake-to-camel",
  paymentMiddleware(
    "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
    {
      "/tools/paid/snake-to-camel": {
        price: "$0.001",
        network: "base",
        config: {
          discoverable: true,
          description: "convert snake_case to camelcase (paid)",
        }
      }
    }, {
      url: "https://facilitator.payai.network",
    }, {
      appLogo: "https://dirtroad.dev/logo.svg",
      appName: "Dirt Road Dev"
    }
  ),
  snakeToCamelController
);
app.post("/tools/paid/camel-to-snake",
  paymentMiddleware(
    "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
    {
      "/tools/paid/camel-to-snake": {
        price: "$0.001",
        network: "base",
        config: {
          discoverable: true,
          description: "convert camelcase to snake_case (paid)",
        }
      }
    }, {
      url: "https://facilitator.payai.network",
    }, {
      appLogo: "https://dirtroad.dev/logo.svg",
      appName: "Dirt Road Dev"
    }
  ),
  camelToSnakeController
);
app.post("/tools/paid/to-uppercase",
  paymentMiddleware(
    "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
    {
      "/tools/paid/to-uppercase": {
        price: "$0.001",
        network: "base",
        config: {
          discoverable: true,
          description: "convert string to uppercase (paid)",
        }
      }
    }, {
      url: "https://facilitator.payai.network",
    }, {
      appLogo: "https://dirtroad.dev/logo.svg",
      appName: "Dirt Road Dev"
    }
  ),
  toUppercaseController
);
app.post("/tools/paid/to-lowercase",
  paymentMiddleware(
    "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
    {
      "/tools/paid/to-lowercase": {
        price: "$0.001",
        network: "base",
        config: {
          discoverable: true,
          description: "convert string to lowercase (paid)",
        }
      }
    }, {
      url: "https://facilitator.payai.network",
    }, {
      appLogo: "https://dirtroad.dev/logo.svg",
      appName: "Dirt Road Dev"
    }
  ),
  toLowercaseController
);
app.post("/tools/paid/capitalize",
  paymentMiddleware(
    "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
    {
      "/tools/paid/capitalize": {
        price: "$0.001",
        network: "base",
        config: {
          discoverable: true,
          description: "capitalize each word in string (paid)",
        }
      }
    }, {
      url: "https://facilitator.payai.network",
    }, {
      appLogo: "https://dirtroad.dev/logo.svg",
      appName: "Dirt Road Dev"
    }
  ),
  capitalizeController
);
app.post("/tools/paid/capitalize-first-letter",
  paymentMiddleware(
    "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
    {
      "/tools/paid/capitalize-first-letter": {
        price: "$0.001",
        network: "base",
        config: {
          discoverable: true,
          description: "capitalize first letter of string (paid)",
        }
      }
    }, {
      url: "https://facilitator.payai.network",
    }, {
      appLogo: "https://dirtroad.dev/logo.svg",
      appName: "Dirt Road Dev"
    }
  ),
  capitalizeFirstLetterController
);
app.post("/tools/paid/trim",
  paymentMiddleware(
    "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
    {
      "/tools/paid/trim": {
        price: "$0.001",
        network: "base",
        config: {
          discoverable: true,
          description: "trim whitespace from string (paid)",
        }
      }
    }, {
      url: "https://facilitator.payai.network",
    }, {
      appLogo: "https://dirtroad.dev/logo.svg",
      appName: "Dirt Road Dev"
    }
  ),
  trimController
);
app.post("/tools/paid/contains",
  paymentMiddleware(
    "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
    {
      "/tools/paid/contains": {
        price: "$0.001",
        network: "base",
        config: {
          discoverable: true,
          description: "check if string contains substring (paid)",
        }
      }
    }, {
      url: "https://facilitator.payai.network",
    }, {
      appLogo: "https://dirtroad.dev/logo.svg",
      appName: "Dirt Road Dev"
    }
  ),
  containsController
);
app.post("/tools/paid/replace-all",
  paymentMiddleware(
    "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
    {
      "/tools/paid/replace-all": {
        price: "$0.001",
        network: "base",
        config: {
          discoverable: true,
          description: "replace all occurrences in string (paid)",
        }
      }
    }, {
      url: "https://facilitator.payai.network",
    }, {
      appLogo: "https://dirtroad.dev/logo.svg",
      appName: "Dirt Road Dev"
    }
  ),
  replaceAllController
);
app.post("/tools/paid/count-occurences",
  paymentMiddleware(
    "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
    {
      "/tools/paid/count-occurences": {
        price: "$0.001",
        network: "base",
        config: {
          discoverable: true,
          description: "count occurrences of substring (paid)",
        }
      }
    }, {
      url: "https://facilitator.payai.network",
    }, {
      appLogo: "https://dirtroad.dev/logo.svg",
      appName: "Dirt Road Dev"
    }
  ),
  countOccurencesController
);
app.post("/tools/paid/starts-with",
  paymentMiddleware(
    "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
    {
      "/tools/paid/starts-with": {
        price: "$0.001",
        network: "base",
        config: {
          discoverable: true,
          description: "check if string starts with prefix (paid)",
        }
      }
    }, {
      url: "https://facilitator.payai.network",
    }, {
      appLogo: "https://dirtroad.dev/logo.svg",
      appName: "Dirt Road Dev"
    }
  ),
  startsWithController
);
app.post("/tools/paid/ends-with",
  paymentMiddleware(
    "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
    {
      "/tools/paid/ends-with": {
        price: "$0.001",
        network: "base",
        config: {
          discoverable: true,
          description: "check if string ends with suffix (paid)",
        }
      }
    }, {
      url: "https://facilitator.payai.network",
    }, {
      appLogo: "https://dirtroad.dev/logo.svg",
      appName: "Dirt Road Dev"
    }
  ),
  endsWithController
);
app.post("/tools/paid/substring",
  paymentMiddleware(
    "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
    {
      "/tools/paid/substring": {
        price: "$0.001",
        network: "base",
        config: {
          discoverable: true,
          description: "extract substring from string (paid)",
        }
      }
    }, {
      url: "https://facilitator.payai.network",
    }, {
      appLogo: "https://dirtroad.dev/logo.svg",
      appName: "Dirt Road Dev"
    }
  ),
  substringController
);
app.post("/tools/paid/remove-non-alphanumeric",
  paymentMiddleware(
    "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
    {
      "/tools/paid/remove-non-alphanumeric": {
        price: "$0.001",
        network: "base",
        config: {
          discoverable: true,
          description: "remove non-alphanumeric characters (paid)",
        }
      }
    }, {
      url: "https://facilitator.payai.network",
    }, {
      appLogo: "https://dirtroad.dev/logo.svg",
      appName: "Dirt Road Dev"
    }
  ),
  removeNonAlphanumericController
);
app.post("/tools/paid/normalize-whitespace",
  paymentMiddleware(
    "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
    {
      "/tools/paid/normalize-whitespace": {
        price: "$0.001",
        network: "base",
        config: {
          discoverable: true,
          description: "normalize whitespace in string (paid)",
        }
      }
    }, {
      url: "https://facilitator.payai.network",
    }, {
      appLogo: "https://dirtroad.dev/logo.svg",
      appName: "Dirt Road Dev"
    }
  ),
  normalizeWhitespaceController
);
app.post("/tools/paid/length",
  paymentMiddleware(
    "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
    {
      "/tools/paid/length": {
        price: "$0.001",
        network: "base",
        config: {
          discoverable: true,
          description: "get string length (paid)",
        }
      }
    }, {
      url: "https://facilitator.payai.network",
    }, {
      appLogo: "https://dirtroad.dev/logo.svg",
      appName: "Dirt Road Dev"
    }
  ),
  lengthController
);
app.post("/tools/paid/truncate",
  paymentMiddleware(
    "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
    {
      "/tools/paid/truncate": {
        price: "$0.001",
        network: "base",
        config: {
          discoverable: true,
          description: "truncate string to maximum length (paid)",
        }
      }
    }, {
      url: "https://facilitator.payai.network",
    }, {
      appLogo: "https://dirtroad.dev/logo.svg",
      appName: "Dirt Road Dev"
    }
  ),
  truncateController
);
app.post("/tools/paid/slugify",
  paymentMiddleware(
    "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
    {
      "/tools/paid/slugify": {
        price: "$0.001",
        network: "base",
        config: {
          discoverable: true,
          description: "convert string to url-friendly slug (paid)",
        }
      }
    }, {
      url: "https://facilitator.payai.network",
    }, {
      appLogo: "https://dirtroad.dev/logo.svg",
      appName: "Dirt Road Dev"
    }
  ),
  slugifyController
);
app.post("/tools/paid/is-palindrome",
  paymentMiddleware(
    "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
    {
      "/tools/paid/is-palindrome": {
        price: "$0.001",
        network: "base",
        config: {
          discoverable: true,
          description: "check if string is a palindrome (paid)",
        }
      }
    }, {
      url: "https://facilitator.payai.network",
    }, {
      appLogo: "https://dirtroad.dev/logo.svg",
      appName: "Dirt Road Dev"
    }
  ),
  isPalindromeController
);
app.post("/tools/paid/repeat",
  paymentMiddleware(
    "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
    {
      "/tools/paid/repeat": {
        price: "$0.001",
        network: "base",
        config: {
          discoverable: true,
          description: "repeat string n times (paid)",
        }
      }
    }, {
      url: "https://facilitator.payai.network",
    }, {
      appLogo: "https://dirtroad.dev/logo.svg",
      appName: "Dirt Road Dev"
    }
  ),
  repeatController
);

app.post("/tools/testnet/reverse-string",
  await createMiddleware({
    facilitatorURL: "https://facilitator.dirtroad.dev",
    accepts: [
      {
        scheme: "exact",
        network: "eip155:2140350733",
        maxAmountRequired: "10000",
        maxTimeoutSeconds: 5000,
        payTo: "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
        asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
        description: "reverse string (testnet)",
        mimeType: "application/json"
      }
    ],
  }),
  reverseStringController
);
app.post("/tools/testnet/snake-to-camel",
  await createMiddleware({
    facilitatorURL: "https://facilitator.dirtroad.dev",
    accepts: [
      {
        scheme: "exact",
        network: "eip155:2140350733",
        maxAmountRequired: "10000",
        maxTimeoutSeconds: 5000,
        payTo: "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
        asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
        description: "convert snake_case to camelcase (testnet)",
        mimeType: "application/json"
      }
    ],
  }),
  snakeToCamelController
);
app.post("/tools/testnet/camel-to-snake",
  await createMiddleware({
    facilitatorURL: "https://facilitator.dirtroad.dev",
    accepts: [
      {
        scheme: "exact",
        network: "eip155:2140350733",
        maxAmountRequired: "10000",
        maxTimeoutSeconds: 5000,
        payTo: "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
        asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
        description: "convert camelcase to snake_case (testnet)",
        mimeType: "application/json"
      }
    ],
  }),
  camelToSnakeController
);
app.post("/tools/testnet/to-uppercase",
  await createMiddleware({
    facilitatorURL: "https://facilitator.dirtroad.dev",
    accepts: [
      {
        scheme: "exact",
        network: "eip155:2140350733",
        maxAmountRequired: "10000",
        maxTimeoutSeconds: 5000,
        payTo: "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
        asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
        description: "convert string to uppercase (testnet)",
        mimeType: "application/json"
      }
    ],
  }),
  toUppercaseController
);
app.post("/tools/testnet/to-lowercase",
  await createMiddleware({
    facilitatorURL: "https://facilitator.dirtroad.dev",
    accepts: [
      {
        scheme: "exact",
        network: "eip155:2140350733",
        maxAmountRequired: "10000",
        maxTimeoutSeconds: 5000,
        payTo: "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
        asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
        description: "convert string to lowercase (testnet)",
        mimeType: "application/json"
      }
    ],
  }),
  toLowercaseController
);
app.post("/tools/testnet/capitalize",
  await createMiddleware({
    facilitatorURL: "https://facilitator.dirtroad.dev",
    accepts: [
      {
        scheme: "exact",
        network: "eip155:2140350733",
        maxAmountRequired: "10000",
        maxTimeoutSeconds: 5000,
        payTo: "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
        asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
        description: "capitalize each word in string (testnet)",
        mimeType: "application/json"
      }
    ],
  }),
  capitalizeController
);
app.post("/tools/testnet/capitalize-first-letter",
  await createMiddleware({
    facilitatorURL: "https://facilitator.dirtroad.dev",
    accepts: [
      {
        scheme: "exact",
        network: "eip155:2140350733",
        maxAmountRequired: "10000",
        maxTimeoutSeconds: 5000,
        payTo: "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
        asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
        description: "capitalize first letter of string (testnet)",
        mimeType: "application/json"
      }
    ],
  }),
  capitalizeFirstLetterController
);
app.post("/tools/testnet/trim",
  await createMiddleware({
    facilitatorURL: "https://facilitator.dirtroad.dev",
    accepts: [
      {
        scheme: "exact",
        network: "eip155:2140350733",
        maxAmountRequired: "10000",
        maxTimeoutSeconds: 5000,
        payTo: "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
        asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
        description: "trim whitespace from string (testnet)",
        mimeType: "application/json"
      }
    ],
  }),
  trimController
);
app.post("/tools/testnet/contains",
  await createMiddleware({
    facilitatorURL: "https://facilitator.dirtroad.dev",
    accepts: [
      {
        scheme: "exact",
        network: "eip155:2140350733",
        maxAmountRequired: "10000",
        maxTimeoutSeconds: 5000,
        payTo: "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
        asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
        description: "check if string contains substring (testnet)",
        mimeType: "application/json"
      }
    ],
  }),
  containsController
);
app.post("/tools/testnet/replace-all",
  await createMiddleware({
    facilitatorURL: "https://facilitator.dirtroad.dev",
    accepts: [
      {
        scheme: "exact",
        network: "eip155:2140350733",
        maxAmountRequired: "10000",
        maxTimeoutSeconds: 5000,
        payTo: "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
        asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
        description: "replace all occurrences in string (testnet)",
        mimeType: "application/json"
      }
    ],
  }),
  replaceAllController
);
app.post("/tools/testnet/count-occurences",
  await createMiddleware({
    facilitatorURL: "https://facilitator.dirtroad.dev",
    accepts: [
      {
        scheme: "exact",
        network: "eip155:2140350733",
        maxAmountRequired: "10000",
        maxTimeoutSeconds: 5000,
        payTo: "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
        asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
        description: "count occurrences of substring (testnet)",
        mimeType: "application/json"
      }
    ],
  }),
  countOccurencesController
);
app.post("/tools/testnet/starts-with",
  await createMiddleware({
    facilitatorURL: "https://facilitator.dirtroad.dev",
    accepts: [
      {
        scheme: "exact",
        network: "eip155:2140350733",
        maxAmountRequired: "10000",
        maxTimeoutSeconds: 5000,
        payTo: "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
        asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
        description: "check if string starts with prefix (testnet)",
        mimeType: "application/json"
      }
    ],
  }),
  startsWithController
);
app.post("/tools/testnet/ends-with",
  await createMiddleware({
    facilitatorURL: "https://facilitator.dirtroad.dev",
    accepts: [
      {
        scheme: "exact",
        network: "eip155:2140350733",
        maxAmountRequired: "10000",
        maxTimeoutSeconds: 5000,
        payTo: "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
        asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
        description: "check if string ends with suffix (testnet)",
        mimeType: "application/json"
      }
    ],
  }),
  endsWithController
);
app.post("/tools/testnet/substring",
  await createMiddleware({
    facilitatorURL: "https://facilitator.dirtroad.dev",
    accepts: [
      {
        scheme: "exact",
        network: "eip155:2140350733",
        maxAmountRequired: "10000",
        maxTimeoutSeconds: 5000,
        payTo: "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
        asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
        description: "extract substring from string (testnet)",
        mimeType: "application/json"
      }
    ],
  }),
  substringController
);
app.post("/tools/testnet/remove-non-alphanumeric",
  await createMiddleware({
    facilitatorURL: "https://facilitator.dirtroad.dev",
    accepts: [
      {
        scheme: "exact",
        network: "eip155:2140350733",
        maxAmountRequired: "10000",
        maxTimeoutSeconds: 5000,
        payTo: "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
        asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
        description: "remove non-alphanumeric characters (testnet)",
        mimeType: "application/json"
      }
    ],
  }),
  removeNonAlphanumericController
);
app.post("/tools/testnet/normalize-whitespace",
  await createMiddleware({
    facilitatorURL: "https://facilitator.dirtroad.dev",
    accepts: [
      {
        scheme: "exact",
        network: "eip155:2140350733",
        maxAmountRequired: "10000",
        maxTimeoutSeconds: 5000,
        payTo: "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
        asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
        description: "normalize whitespace in string (testnet)",
        mimeType: "application/json"
      }
    ],
  }),
  normalizeWhitespaceController
);
app.post("/tools/testnet/length",
  await createMiddleware({
    facilitatorURL: "https://facilitator.dirtroad.dev",
    accepts: [
      {
        scheme: "exact",
        network: "eip155:2140350733",
        maxAmountRequired: "10000",
        maxTimeoutSeconds: 5000,
        payTo: "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
        asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
        description: "get string length (testnet)",
        mimeType: "application/json"
      }
    ],
  }),
  lengthController
);
app.post("/tools/testnet/truncate",
  await createMiddleware({
    facilitatorURL: "https://facilitator.dirtroad.dev",
    accepts: [
      {
        scheme: "exact",
        network: "eip155:2140350733",
        maxAmountRequired: "10000",
        maxTimeoutSeconds: 5000,
        payTo: "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
        asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
        description: "truncate string to maximum length (testnet)",
        mimeType: "application/json"
      }
    ],
  }),
  truncateController
);
app.post("/tools/testnet/slugify",
  await createMiddleware({
    facilitatorURL: "https://facilitator.dirtroad.dev",
    accepts: [
      {
        scheme: "exact",
        network: "eip155:2140350733",
        maxAmountRequired: "10000",
        maxTimeoutSeconds: 5000,
        payTo: "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
        asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
        description: "convert string to url-friendly slug (testnet)",
        mimeType: "application/json"
      }
    ],
  }),
  slugifyController
);
app.post("/tools/testnet/is-palindrome",
  await createMiddleware({
    facilitatorURL: "https://facilitator.dirtroad.dev",
    accepts: [
      {
        scheme: "exact",
        network: "eip155:2140350733",
        maxAmountRequired: "10000",
        maxTimeoutSeconds: 5000,
        payTo: "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
        asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
        description: "check if string is a palindrome (testnet)",
        mimeType: "application/json"
      }
    ],
  }),
  isPalindromeController
);
app.post("/tools/testnet/repeat",
  await createMiddleware({
    facilitatorURL: "https://facilitator.dirtroad.dev",
    accepts: [
      {
        scheme: "exact",
        network: "eip155:2140350733",
        maxAmountRequired: "10000",
        maxTimeoutSeconds: 5000,
        payTo: "0x71dc0bc68e7f0e2c5aace661b0f3fb995a80aaf4",
        asset: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
        description: "repeat string n times (testnet)",
        mimeType: "application/json"
      }
    ],
  }),
  repeatController
);

app.get('/', infoController);

export default app
