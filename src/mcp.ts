import { createPaidMcpHandler } from "x402-mcp";
import { FACILITATOR_URL, NETWORK, RECIPIENT } from "./config.js";
import { reverseStringTool } from "./tools/reverse-string.js";
import { snakeToCamelTool } from "./tools/snake-to-camel.js";
import { camelToSnakeTool } from "./tools/camel-to-snake.js";
import { toUppercaseTool } from "./tools/to-uppercase.js";
import { toLowercaseTool } from "./tools/to-lowercase.js";
import { capitalizeTool } from "./tools/capitalize.js";
import { capitalizeFirstLetterTool } from "./tools/capitalize-first-letter.js";
import { trimTool } from "./tools/trim.js";
import { containsTool } from "./tools/contains.js";
import { replaceAllTool } from "./tools/replace-all.js";
import { countOccurencesTool } from "./tools/count-occurences.js";
import { startsWithTool } from "./tools/starts-with.js";
import { endsWithTool } from "./tools/ends-with.js";
import { substringTool } from "./tools/substring.js";
import { removeNonAlphanumericTool } from "./tools/remove-non-alphanumeric.js";
import { normalizeWhitespaceTool } from "./tools/normalize-whitespace.js";
import { lengthTool } from "./tools/length.js";
import { truncateTool } from "./tools/truncate.js";
import { slugifyTool } from "./tools/slugify.js";
import { isPalindromeTool } from "./tools/is-palindrome.js";
import { repeatTool } from "./tools/repeat.js";

export const mcpHandler = createPaidMcpHandler((server) =>  {
    reverseStringTool(server);
    snakeToCamelTool(server);
    camelToSnakeTool(server);
    toUppercaseTool(server);
    toLowercaseTool(server);
    capitalizeTool(server);
    capitalizeFirstLetterTool(server);
    trimTool(server);
    containsTool(server);
    replaceAllTool(server);
    countOccurencesTool(server);
    startsWithTool(server);
    endsWithTool(server);
    substringTool(server);
    removeNonAlphanumericTool(server);
    normalizeWhitespaceTool(server);
    lengthTool(server);
    truncateTool(server);
    slugifyTool(server);
    isPalindromeTool(server);
    repeatTool(server);
}, {
    serverInfo: {
        name: "x402 Enabled API & MCP Server",
        version: "0.1.0"
    },
}, {
    facilitator: {
        url: FACILITATOR_URL
    },
    recipient: RECIPIENT,
    network: NETWORK as any // override
});