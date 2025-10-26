export default function isPalindrome(str: string, strict: boolean = false): boolean {
  if (!str) return true;

  let processedStr = str;
  if (!strict) {
    processedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  const reversed = processedStr.split('').reverse().join('');
  return processedStr === reversed;
}
