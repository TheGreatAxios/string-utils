export default function startsWith(str: string, prefix: string, caseSensitive: boolean = false): boolean {
  if (caseSensitive) {
    return str.startsWith(prefix);
  }
  return str.toLowerCase().startsWith(prefix.toLowerCase());
}
