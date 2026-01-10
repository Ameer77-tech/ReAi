import express from "express";
import puppeteer from "puppeteer";
import { pdfCss } from "./pdf.js";
import cors from "cors";

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(cors());

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
            body { margin: 0; background: white; }
          </style>
        </head>
        <body>
          ${html}
        </body>
      </html>
    `;

    const browser = await puppeteer.launch({
      headless: "shell",
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.setContent(finalHtml, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: { top: "15mm", bottom: "20mm" },
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

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`PDF service running on port ${PORT}`));
