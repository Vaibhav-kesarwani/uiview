"use client";

import MobileNavbar from "./mobile-navbar";
import { Navbar } from "./navbar";

export function Header() {
  return (
    <header className="mt-4 mb-8 w-full mx-auto px-4 md:px-8 lg:px-12 z-9999">
      <div className="flex flex-wrap items-center justify-between mb-4 gap-4">
        {/* Desktop Navbar (hidden on small screens) */}
        <Navbar />
        {/* Mobile Navbar toggle (visible on small screens) */}
        <MobileNavbar />
      </div>
    </header>
  );
}
