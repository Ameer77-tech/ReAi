"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary to-secondary text-white px-8 font-sans">
      <div className="max-w-[760px] text-center p-12 rounded-2xl border border-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] bg-gradient-to-b from-white/[0.03] to-white/[0.01]">
        {/* 404 */}
        <div className="text-[112px] font-extrabold leading-none text-accent drop-shadow-[0_12px_40px_var(--accent)]">
          404
        </div>

        {/* Title */}
        <h1 className="text-2xl mt-2 mb-2 font-semibold">Page not found</h1>

        {/* Description */}
        <p className="opacity-90 mt-2">
          We couldn&apos;t find the page you were looking for. It may have been
          moved or removed.
        </p>

        {/* CTA */}
        <div className="mt-7">
          <Link href="/" className="inline-block">
            <span className="inline-block rounded-xl px-6 py-3 font-bold text-white bg-gradient-to-r from-accent to-secondary shadow-lg transition-transform duration-150 hover:-translate-y-1">
              Return Home
            </span>
          </Link>
        </div>
      </div>
    </main>
  );
}
