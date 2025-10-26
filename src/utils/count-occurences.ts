export default function countOccurences(str: string, substring: string, caseSensitive: boolean = false): number {
  let tempStr = caseSensitive ? str : str.toLowerCase();
  let tempSubstring = caseSensitive ? substring : substring.toLowerCase();
  let count = 0;
  let lastIndex = 0;

  while ((lastIndex = tempStr.indexOf(tempSubstring, lastIndex)) !== -1) {
    count++;
    lastIndex += tempSubstring.length;
  }
  return count;
}
