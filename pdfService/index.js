import express from "express";
import puppeteer from "puppeteer";
import { pdfCss } from "./pdf.js";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(
  cors({
    origin: "*",
  })
);

app.post("/api/generate-pdf", async (req, res) => {
  try {
    const { html } = req.body;

    if (!html || html.length === 0) {
      return res.status(400).json({ status: "error", reply: "Invalid HTML" });
    }

    const finalHtml = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            ${pdfCss}
            * {
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            @page {
              size: A4 portrait;
              margin-top: 10mm;
              margin-bottom: 10mm;
              margin-left: 8mm;
              margin-right: 8mm;
            }
            body {
              margin: 0;
              background: white !important;
              color: #18181b !important;
              -webkit-font-smoothing: antialiased !important;
              -moz-osx-font-smoothing: grayscale !important;
              text-rendering: optimizeLegibility !important;
            }
            /* Map semi-transparent black colors to solid opaque hex values for crisp vector PDF rendering */
            .text-black\\/40, .text-black\\/60 { color: #52525b !important; }
            .text-black\\/70, .text-black\\/75 { color: #3f3f46 !important; }
            .text-black\\/80, .text-black\\/85 { color: #27272a !important; }

            /* Slightly increase font sizes for clear PDF readability */
            .text-xs { font-size: 0.8125rem !important; line-height: 1.35 !important; } /* 13px */
            .text-\\[11px\\] { font-size: 0.75rem !important; line-height: 1.35 !important; } /* 12px */
            .text-sm { font-size: 0.9375rem !important; line-height: 1.35 !important; } /* 15px */
            .text-base { font-size: 1.0625rem !important; line-height: 1.35 !important; } /* 17px */
          </style>
        </head>
        <body class="bg-white">
          ${html}
        </body>
      </html>
    `;

    const browser = await puppeteer.launch({
      executablePath: undefined,
      headless: "shell",
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--font-render-hinting=medium",
        "--enable-font-antialiasing",
      ],
    });

    const page = await browser.newPage();
    await page.setContent(finalHtml, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "10mm", bottom: "10mm", left: "8mm", right: "8mm" },
    });

    await browser.close();

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=preview.pdf",
      "Content-Length": pdfBuffer.length,
      "Cache-Control": "no-store",
    });

    res.status(200).send(pdfBuffer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err, message: "Something Went Wrong" });
  }
});

app.get("/debug/fs", (req, res) => {
  res.json({
    pwd: process.cwd(),
    rootFiles: fs.readdirSync(process.cwd()),
    puppeteerCache: fs.existsSync("/opt/render/.cache/puppeteer")
      ? fs.readdirSync("/opt/render/.cache/puppeteer")
      : "not found",
  });
});

const PORT = 9000;
app.listen(PORT, () => console.log(`PDF service running on port ${PORT}`));
