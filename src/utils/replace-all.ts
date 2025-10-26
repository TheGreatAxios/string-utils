export default function replaceAll(str: string, searchValue: string, replaceValue: string): string {
  return str.split(searchValue).join(replaceValue);
}
