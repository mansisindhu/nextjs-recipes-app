/* eslint-disable @typescript-eslint/no-unused-vars */

export default function generateSearchQueryString(
  searchParams: Record<string, string>
): string | null {
  if (!searchParams) {
    return "";
  }
  
  const entries = Object.entries(searchParams)

  if (entries.length === 0) {
    return null;
  }

  return entries
    .map(
      (array) =>
        `${encodeURIComponent(array[0])}=${encodeURIComponent(array[1])}`
    )
    .join("&");
}
