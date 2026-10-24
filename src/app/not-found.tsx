import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Gowtham S",
  description: "The page you're looking for doesn't exist. Head back to the portfolio.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-white px-6"
      aria-labelledby="not-found-heading"
    >
      <div className="text-center max-w-md">
        {/* Big error number */}
        <div
          className="text-8xl font-extrabold text-[#f97316] leading-none mb-4"
          aria-hidden="true"
        >
          404
        </div>

        <h1
          id="not-found-heading"
          className="text-2xl font-bold text-[#171717] mb-3"
        >
          Page not found
        </h1>

        <p className="text-[#737373] text-sm leading-relaxed mb-8">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Let&apos;s get you back to the portfolio.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn btn-primary text-sm">
            Go to Homepage
          </Link>
          <Link href="/#contact" className="btn btn-outline text-sm">
            Contact Me
          </Link>
        </div>

        {/* Subtle code decoration */}
        <div className="mt-10 font-mono text-xs text-[#d4d4d4] select-none" aria-hidden="true">
          {`// Error: Page ${typeof window !== "undefined" ? window.location.pathname : ""} not found`}
        </div>
      </div>
    </main>
  );
}
