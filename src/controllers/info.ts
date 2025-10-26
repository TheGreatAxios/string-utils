import { Context } from "hono";

export default function infoController(c: Context) {
    return c.json({
        message: "String Utils MCP Server by https://dirtroad.dev",
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
           route: "/tools/reverse-string",
           description: "reverse string"
          },
          {
           route: "/tools/snake-to-camel",
           description: "convert snake_case to camelcase"
          },
          {
           route: "/tools/camel-to-snake",
           description: "convert camelcase to snake_case"
          },
          {
           route: "/tools/to-uppercase",
           description: "convert string to uppercase"
          },
          {
           route: "/tools/to-lowercase",
           description: "convert string to lowercase"
          },
          {
           route: "/tools/capitalize",
           description: "capitalize each word in string"
          },
          {
           route: "/tools/capitalize-first-letter",
           description: "capitalize first letter of string"
          },
          {
           route: "/tools/trim",
           description: "trim whitespace from string"
          },
          {
           route: "/tools/contains",
           description: "check if string contains substring"
          },
          {
           route: "/tools/replace-all",
           description: "replace all occurrences in string"
          },
          {
           route: "/tools/count-occurences",
           description: "count occurrences of substring"
          },
          {
           route: "/tools/starts-with",
           description: "check if string starts with prefix"
          },
          {
           route: "/tools/ends-with",
           description: "check if string ends with suffix"
          },
          {
           route: "/tools/substring",
           description: "extract substring from string"
          },
          {
           route: "/tools/remove-non-alphanumeric",
           description: "remove non-alphanumeric characters"
          },
          {
           route: "/tools/normalize-whitespace",
           description: "normalize whitespace in string"
          },
          {
           route: "/tools/length",
           description: "get string length"
          },
          {
           route: "/tools/truncate",
           description: "truncate string to maximum length"
          },
          {
           route: "/tools/slugify",
           description: "convert string to url-friendly slug"
          },
          {
           route: "/tools/is-palindrome",
           description: "check if string is a palindrome"
          },
          {
           route: "/tools/repeat",
           description: "repeat string n times"
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