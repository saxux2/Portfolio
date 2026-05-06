import { readFile } from "node:fs/promises";

const relixaImagePath = "C:\\Portfolio\\lending.png";

function fallbackSvg() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0c1222" />
          <stop offset="100%" stop-color="#0a0f1a" />
        </linearGradient>
        <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.85" />
          <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.7" />
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)" />
      <circle cx="600" cy="240" r="60" fill="url(#accent)" opacity="0.25" />
      <text x="50%" y="340" fill="#e5e7eb" font-family="Arial, Helvetica, sans-serif" font-size="52" font-weight="bold" text-anchor="middle">Relixa</text>
      <text x="50%" y="400" fill="#94a3b8" font-family="Arial, Helvetica, sans-serif" font-size="22" text-anchor="middle">Decentralized Relief Distribution Platform</text>
      <rect x="440" y="450" width="320" height="48" rx="24" fill="url(#accent)" opacity="0.18" />
      <text x="50%" y="482" fill="#38bdf8" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="600" text-anchor="middle">Stellar · Soroban · React</text>
    </svg>
  `;
}

export async function GET() {
  try {
    const image = await readFile(relixaImagePath);

    return new Response(image, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return new Response(fallbackSvg(), {
      headers: {
        "Content-Type": "image/svg+xml; charset=utf-8",
        "Cache-Control": "no-store",
      },
    });
  }
}
