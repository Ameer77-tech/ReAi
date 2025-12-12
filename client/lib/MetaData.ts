import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Resume Builder | Generate Professional Resumes Instantly",
  description:
    "Create a polished, professional resume in seconds using AI. No login required. Simple, fast, and ATS-friendly resume generation.",
  keywords: [
    "AI Resume",
    "Resume Builder",
    "AI Resume Generator",
    "ATS Resume",
    "Free Resume Builder",
    "Professional Resume",
    "CV Maker",
  ],
  authors: [{ name: "Ameer Shaik" }],
  creator: "AI Resume Builder",
  metadataBase: new URL("https://yourdomain.com"),
  openGraph: {
    title: "AI Resume Builder – Create Your Resume in Seconds",
    description:
      "Generate a modern, professional resume instantly using AI. Perfect formatting, ATS-friendly, no signup required.",
    type: "website",
    url: "https://yourdomain.com",
    siteName: "AI Resume Builder",
    images: [
      {
        url: "/logo.png", 
        width: 1200,
        height: 630,
        alt: "AI Resume Builder Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Resume Builder",
    description:
      "Generate your resume with AI in seconds. Clean, professional, ATS-friendly.",
    images: ["/logo.png"],
    creator: "@your_handle",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  themeColor: "#ffffff",
};
