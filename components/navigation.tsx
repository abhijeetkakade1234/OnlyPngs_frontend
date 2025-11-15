"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-caesar font-normal text-white">
              OnlyPngs
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/docs"
              className="text-white/80 hover:text-white transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/chat"
              className="px-4 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors font-semibold"
            >
              Launch Chat
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Link
              href="/chat"
              className="px-4 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors font-semibold text-sm"
            >
              Launch Chat
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

