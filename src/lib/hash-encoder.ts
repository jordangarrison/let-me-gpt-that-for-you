/**
 * Deterministic query encoding/decoding without database storage
 * Uses base64url encoding - same query always produces same result
 */

/**
 * Encodes a query to a shorter, URL-safe format using base64url
 * @param query The original query text
 * @returns A shorter encoded string
 */
export function encodeQuery(query: string): string {
  // Normalize whitespace
  const normalized = query.trim().replace(/\s+/g, ' ');
  
  // Convert to base64url (URL-safe base64)
  const encoded = btoa(unescape(encodeURIComponent(normalized)))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');
  
  return encoded;
}

/**
 * Decodes an encoded query back to the original text
 * @param encoded The encoded query string
 * @returns The original query or null if invalid
 */
export function decodeQuery(encoded: string): string | null {
  try {
    // Convert back from base64url to regular base64
    let base64 = encoded
      .replace(/-/g, '+')
      .replace(/_/g, '/');
    
    // Add padding if needed
    while (base64.length % 4) {
      base64 += '=';
    }
    
    // Decode from base64
    const decoded = atob(base64);
    return decodeURIComponent(escape(decoded));
  } catch (error) {
    console.error('Error decoding query:', error);
    return null;
  }
}
