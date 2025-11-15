"use client";

import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Launch Your Autonomous Trading Agent Today.
        </h2>
        <Link
          href="/chat"
          className="inline-block px-8 py-4 bg-white text-black rounded-lg hover:bg-white/90 transition-colors font-semibold text-lg"
        >
          Launch OnlyPngs
        </Link>
      </div>
    </section>
  );
}

