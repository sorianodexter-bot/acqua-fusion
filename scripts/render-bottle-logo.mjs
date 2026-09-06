import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

mkdirSync("/workspace/artifacts", { recursive: true });

const html = `<!doctype html>
<html>
<head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&display=swap" rel="stylesheet" />
  <style>
    html, body { margin: 0; background: transparent; }
    .mark {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 280px;
      padding: 4px 6px 8px;
      font-family: "Plus Jakarta Sans", system-ui, sans-serif;
    }
    .acqua {
      margin-top: 6px;
      color: #0B5A9A;
      font-size: 44px;
      font-weight: 800;
      letter-spacing: -0.045em;
      line-height: 0.88;
    }
    .fusion {
      margin-top: 6px;
      color: #1FB8D6;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 0.36em;
      line-height: 1;
      padding-left: 0.36em;
    }
  </style>
</head>
<body>
  <div class="mark" id="logo">
    <svg viewBox="0 0 72 90" width="168" height="210" overflow="visible">
      <defs>
        <linearGradient id="g" x1="22%" y1="0%" x2="78%" y2="100%">
          <stop offset="0%" stop-color="#1FB8D6" />
          <stop offset="48%" stop-color="#0B5A9A" />
          <stop offset="100%" stop-color="#062844" />
        </linearGradient>
        <clipPath id="c">
          <path d="M36 4.5C36 4.5 8 39.5 8 58.2c0 15.6 12.4 28.3 28 28.3s28-12.7 28-28.3C64 39.5 36 4.5 36 4.5Z" />
        </clipPath>
      </defs>
      <path fill="url(#g)" d="M36 4.5C36 4.5 8 39.5 8 58.2c0 15.6 12.4 28.3 28 28.3s28-12.7 28-28.3C64 39.5 36 4.5 36 4.5Z" />
      <g clip-path="url(#c)">
        <path fill="#7EE8F5" fill-opacity="0.55" d="M4 58c10-11 18-11 32 0s22 11 36 0v14c-14 11-22 11-36 0s-22-11-32 0V58Z" />
      </g>
      <path fill="#F4FBFE" fill-opacity="0.88" d="M26 30c7.2-11 14.2-11.4 20.2-1.2-6 4.2-13 4.8-20.2 1.2Z" />
    </svg>
    <div class="acqua">ACQUA</div>
    <div class="fusion">FUSION</div>
  </div>
</body>
</html>`;

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 320, height: 520 },
  deviceScaleFactor: 3,
});
await page.setContent(html, { waitUntil: "networkidle" });
await page.locator("#logo").screenshot({
  path: "/workspace/artifacts/bottle-logo.png",
  omitBackground: true,
});
await browser.close();
console.log("wrote /workspace/artifacts/bottle-logo.png");
