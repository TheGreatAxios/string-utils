import { Context } from "hono";

export default function infoController(c: Context) {
    return c.json({
        message: "String Utils MCP Server by https://dirtroad.dev",
        chains: [
            {
                id: "eip155:2140350733",
                name: "SKALE Base Sepolia Testnet",
                rpcUrls: ["https://base-sepolia-testnet.skalenodes.com/v1/basic-defiant-hadar"],
                blockExplorer: "https://base-sepolia-testnet-explorer.skalenodes.com:10011",
                nativeCurrency: {
                    name: "Credits",
                    symbol: "CRED",
                    decimals: 18
                },
                tokens: [
                    {
                        address: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
                        contractName: "Axios USD",
                        forwarder: "0x61a26022927096f444994dA1e53F0FD9487EAfcf",
                        forwarderName: "Axios USD",
                        forwarderVersion: "1"
                    }
                ]
            }
        ],
        endpoints: [
          {
            route: "/mcp",
            tools: [
              "reverse_string",
              "snake_to_camel",
              "camel_to_snake",
              "to_uppercase",
              "to_lowercase",
              "capitalize",
              "capitalize_first_letter",
              "trim",
              "contains",
              "replace_all",
              "count_occurences",
              "starts_with",
              "ends_with",
              "substring",
              "remove_non_alphanumeric",
              "normalize_whitespace",
              "length",
              "truncate",
              "slugify",
              "is_palindrome",
              "repeat"
            ],
            description: "MCP Server with comprehensive string utilities",
          },
          {
            route: "/tools/paid/*",
            description: "Paid string utilities (Base network)",
            facilitator: "https://facilitator.payai.network"
          },
          {
            route: "/tools/testnet/*",
            description: "Testnet string utilities (SKALE Base Sepolia Testnet)",
            facilitator: "https://facilitator.dirtroad.dev",
            network: "eip155:2140350733"
          },
          {
           route: "/tools/paid/reverse-string",
           description: "reverse string (paid)"
          },
          {
           route: "/tools/testnet/reverse-string",
           description: "reverse string (testnet)"
          },
          {
           route: "/tools/paid/snake-to-camel",
           description: "convert snake_case to camelcase (paid)"
          },
          {
           route: "/tools/testnet/snake-to-camel",
           description: "convert snake_case to camelcase (testnet)"
          },
          {
           route: "/tools/paid/camel-to-snake",
           description: "convert camelcase to snake_case (paid)"
          },
          {
           route: "/tools/testnet/camel-to-snake",
           description: "convert camelcase to snake_case (testnet)"
          },
          {
           route: "/tools/paid/to-uppercase",
           description: "convert string to uppercase (paid)"
          },
          {
           route: "/tools/testnet/to-uppercase",
           description: "convert string to uppercase (testnet)"
          },
          {
           route: "/tools/paid/to-lowercase",
           description: "convert string to lowercase (paid)"
          },
          {
           route: "/tools/testnet/to-lowercase",
           description: "convert string to lowercase (testnet)"
          },
          {
           route: "/tools/paid/capitalize",
           description: "capitalize each word in string (paid)"
          },
          {
           route: "/tools/testnet/capitalize",
           description: "capitalize each word in string (testnet)"
          },
          {
           route: "/tools/paid/capitalize-first-letter",
           description: "capitalize first letter of string (paid)"
          },
          {
           route: "/tools/testnet/capitalize-first-letter",
           description: "capitalize first letter of string (testnet)"
          },
          {
           route: "/tools/paid/trim",
           description: "trim whitespace from string (paid)"
          },
          {
           route: "/tools/testnet/trim",
           description: "trim whitespace from string (testnet)"
          },
          {
           route: "/tools/paid/contains",
           description: "check if string contains substring (paid)"
          },
          {
           route: "/tools/testnet/contains",
           description: "check if string contains substring (testnet)"
          },
          {
           route: "/tools/paid/replace-all",
           description: "replace all occurrences in string (paid)"
          },
          {
           route: "/tools/testnet/replace-all",
           description: "replace all occurrences in string (testnet)"
          },
          {
           route: "/tools/paid/count-occurences",
           description: "count occurrences of substring (paid)"
          },
          {
           route: "/tools/testnet/count-occurences",
           description: "count occurrences of substring (testnet)"
          },
          {
           route: "/tools/paid/starts-with",
           description: "check if string starts with prefix (paid)"
          },
          {
           route: "/tools/testnet/starts-with",
           description: "check if string starts with prefix (testnet)"
          },
          {
           route: "/tools/paid/ends-with",
           description: "check if string ends with suffix (paid)"
          },
          {
           route: "/tools/testnet/ends-with",
           description: "check if string ends with suffix (testnet)"
          },
          {
           route: "/tools/paid/substring",
           description: "extract substring from string (paid)"
          },
          {
           route: "/tools/testnet/substring",
           description: "extract substring from string (testnet)"
          },
          {
           route: "/tools/paid/remove-non-alphanumeric",
           description: "remove non-alphanumeric characters (paid)"
          },
          {
           route: "/tools/testnet/remove-non-alphanumeric",
           description: "remove non-alphanumeric characters (testnet)"
          },
          {
           route: "/tools/paid/normalize-whitespace",
           description: "normalize whitespace in string (paid)"
          },
          {
           route: "/tools/testnet/normalize-whitespace",
           description: "normalize whitespace in string (testnet)"
          },
          {
           route: "/tools/paid/length",
           description: "get string length (paid)"
          },
          {
           route: "/tools/testnet/length",
           description: "get string length (testnet)"
          },
          {
           route: "/tools/paid/truncate",
           description: "truncate string to maximum length (paid)"
          },
          {
           route: "/tools/testnet/truncate",
           description: "truncate string to maximum length (testnet)"
          },
          {
           route: "/tools/paid/slugify",
           description: "convert string to url-friendly slug (paid)"
          },
          {
           route: "/tools/testnet/slugify",
           description: "convert string to url-friendly slug (testnet)"
          },
          {
           route: "/tools/paid/is-palindrome",
           description: "check if string is a palindrome (paid)"
          },
          {
           route: "/tools/testnet/is-palindrome",
           description: "check if string is a palindrome (testnet)"
          },
          {
           route: "/tools/paid/repeat",
           description: "repeat string n times (paid)"
          },
          {
           route: "/tools/testnet/repeat",
           description: "repeat string n times (testnet)"
          }
        ],
        tools: [
          "reverse_string",
          "snake_to_camel",
          "camel_to_snake",
          "to_uppercase",
          "to_lowercase",
          "capitalize",
          "capitalize_first_letter",
          "trim",
          "contains",
          "replace_all",
          "count_occurences",
          "starts_with",
          "ends_with",
          "substring",
          "remove_non_alphanumeric",
          "normalize_whitespace",
          "length",
          "truncate",
          "slugify",
          "is_palindrome",
          "repeat"
        ]
      })
}