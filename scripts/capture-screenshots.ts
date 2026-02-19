import { chromium } from "playwright";
import sharp from "sharp";
import fs from "fs";
import path from "path";

// Папки
const SCREENSHOTS_DIR = path.resolve("public", "screenshots");
if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

// Сайты для скриншотов
const sites = [
  { url: "https://portfolio.wstudio.tech", name: "portfolio" },
  { url: "https://calypso.calypso-hotel.ru", name: "calypso" },
  { url: "https://drupalsite.wstudio.tech", name: "drupal" },
  { url: "https://pagelist.ru", name: "pagelist" },
];

// Настройки
const VIEWPORT = { width: 1200, height: 800 };
const DELAY_AFTER_LOAD = 3000; // ms (ждём анимации, JS)

async function captureScreenshots() {
  console.log("🚀 Запуск браузера...");
  const browser = await chromium.launch({
    headless: true, // false — если хотите видеть процесс
  });

  const context = await browser.newContext({
    viewport: VIEWPORT,
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
  });

  const page = await context.newPage();

 for (const site of sites) {
  try {
    console.log(`📷 Захват: ${site.url}`);
    await page.goto(site.url, { waitUntil: 'networkidle' });

    // Просто ждём 3 секунды после полной загрузки
    await new Promise(r => setTimeout(r, 3000));

    const pngPath = path.join(SCREENSHOTS_DIR, `${site.name}.png`);
    await page.screenshot({
      path: pngPath,
      type: 'png',
    });

    console.log(`✅ PNG сохранён: ${pngPath}`);

    const webpPath = path.join(SCREENSHOTS_DIR, `${site.name}.webp`);
    await sharp(pngPath).webp({ quality: 85 }).toFile(webpPath);
    console.log(`✅ WebP сохранён: ${webpPath}`);

  } catch (error) {
    console.error(`❌ Ошибка при скриншоте ${site.url}:`, error);
  }
}

  await browser.close();
  console.log("🎉 Все скриншоты готовы!");
}

captureScreenshots();
