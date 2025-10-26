export default function contains(str: string, substring: string, caseSensitive: boolean = false): boolean {
  if (caseSensitive) {
    return str.includes(substring);
  }
  return str.toLowerCase().includes(substring.toLowerCase());
}
