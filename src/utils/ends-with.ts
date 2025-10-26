export default function endsWith(str: string, suffix: string, caseSensitive: boolean = false): boolean {
  if (caseSensitive) {
    return str.endsWith(suffix);
  }
  return str.toLowerCase().endsWith(suffix.toLowerCase());
}
