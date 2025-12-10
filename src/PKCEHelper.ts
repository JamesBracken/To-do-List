export function generateCodeVerifier(): string {
    const arr = new Uint32Array(56);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, dec => ("0" + dec.toString(16)).substr(-2)).join('');
}

export async function generateCodeChallenge(codeVerifier: string): string {
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);

    const digest = await window.crypto.subtle.digest("SHA-256", data)
    
    return btoa(String.fromCharCode(...new Uint8Array(digest)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function generatePKCECredentials() {
  const codeVerifier = generateCodeVerifier();
  const codeChallenge = await generateCodeChallenge(codeVerifier);
  sessionStorage.setItem("codeChallenge", codeChallenge)
  return codeChallenge;
}