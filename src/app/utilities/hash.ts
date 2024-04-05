export async function sha256Hash(message: string) {
  const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(message));
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}
