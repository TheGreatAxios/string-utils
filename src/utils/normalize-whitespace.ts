export default function normalizeWhitespace(str: string): string {
  return str.replace(/\s+/g, ' ').trim();
}
