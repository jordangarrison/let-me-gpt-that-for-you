/**
 * URL encoding utilities that use + for spaces instead of %20
 * This follows the application/x-www-form-urlencoded format
 */

/**
 * Encodes a string for use in URLs, using + for spaces instead of %20
 * @param str The string to encode
 * @returns The URL-encoded string with + for spaces
 */
export function encodeQuery(str: string): string {
  return encodeURIComponent(str).replace(/%20/g, '+');
}

/**
 * Decodes a URL-encoded string, handling both + and %20 for spaces
 * @param str The encoded string to decode
 * @returns The decoded string
 */
export function decodeQuery(str: string): string {
  // First replace + with %20, then decode
  return decodeURIComponent(str.replace(/\+/g, '%20'));
}
