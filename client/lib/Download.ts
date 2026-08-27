"use client";
import { renderToString } from "react-dom/server";
import { Slide, toast } from "react-toastify";

const download = async (
  comp: React.ReactNode,
  setPending: (v: boolean) => void
): Promise<void> => {
  const rendered = renderToString(comp);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
    * {
      box-sizing: border-box;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      background: white;
      font-family: 'Manrope', sans-serif;
    }
    @page {
      size: A4 portrait;
      margin: 0;
    }
  </style>
</head>
<body class="bg-white">
  <div style="width: 100%; max-width: 800px; margin: 0 auto;">
    ${rendered}
  </div>
</body>
</html>`;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_CLIENT}/api/generate`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ html: html }),
    });

    if (!res.ok) {
      alert("PDF Generation Failed");
      setPending(false);
      return;
    }

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(url);

    setPending(false);
    toast.success("Download Success", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });
  } catch (err) {
    console.log(err);
    setPending(false);
  }
};

export default download;