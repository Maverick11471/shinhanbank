// components/Header.tsx
"use client";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/50 dark:bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center">
        <Link href="/">
          <img src="/images/logo.svg" alt="Logo" className="h-8" />
        </Link>
      </div>
    </header>
  );
}
