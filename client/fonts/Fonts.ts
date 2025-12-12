import { Manrope, Mulish, Quicksand } from "next/font/google";

export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
});

export const mulish = Mulish({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-mulish",
});

export const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-quicksand",
});

