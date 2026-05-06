import { readFile } from "node:fs/promises";

const profileImagePath =
  "C:\\Users\\LENOVO\\OneDrive\\Attachments\\Desktop\\WhatsApp Image 2026-04-27 at 5.43.14 PM.jpeg";

function fallbackSvg() {
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 1100">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0f172a" />
          <stop offset="100%" stop-color="#111827" />
        </linearGradient>
        <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0.8" />
        </linearGradient>
      </defs>
      <rect width="900" height="1100" fill="url(#bg)" />
      <circle cx="450" cy="340" r="120" fill="url(#accent)" />
      <path d="M250 840c40-160 140-240 300-240s260 80 300 240" fill="none" stroke="url(#accent)" stroke-width="64" stroke-linecap="round" />
      <text x="50%" y="930" fill="#e5e7eb" font-family="Arial, Helvetica, sans-serif" font-size="48" text-anchor="middle">Akash Biswas</text>
    </svg>
  `;
}

export async function GET() {
  try {
    const image = await readFile(profileImagePath);

    return new Response(image, {
      headers: {
        "Content-Type": "image/jpeg",
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
