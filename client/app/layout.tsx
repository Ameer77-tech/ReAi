import NProgressProvider from "@/components/progressLoad";
import { Suspense } from "react";
import "./globals.css";
import { mulish, manrope } from "@/fonts/Fonts";
import { metadata } from "@/lib/MetaData";

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${mulish.className} ${manrope.className} font-extrabold antialiased bg-`}
      >
        <Suspense fallback={null}>
          <NProgressProvider />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
