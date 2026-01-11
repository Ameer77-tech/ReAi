import NProgressProvider from "@/components/progressLoad";
import { Suspense } from "react";
import "./globals.css";
import { mulish, manrope } from "@/fonts/Fonts";
import { metadata } from "@/lib/MetaData";
import { Slide, ToastContainer } from "react-toastify";

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
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Slide}
        />
          <Suspense fallback={null}>
            <NProgressProvider />
          </Suspense>
          {children}
      </body>
    </html>
  );
}
