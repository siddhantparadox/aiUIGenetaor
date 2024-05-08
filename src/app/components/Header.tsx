"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 py-4 sm:py-3">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex justify-center items-center">
          <Link
            className="text-3xl text-white font-mono font-semibold"
            href="/"
            aria-label="Brand"
          >
            React/Next.js and TailwindCSS UI Component Generator
          </Link>
        </div>
      </nav>
    </header>
  );
}
