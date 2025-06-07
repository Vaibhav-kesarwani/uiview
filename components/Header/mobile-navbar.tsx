"use client";

import React from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white focus:outline-none"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 z-50 bg-gray-900 px-6 py-4 shadow-md flex flex-col gap-4 text-white">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/components" onClick={() => setIsOpen(false)}>Components</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/login" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      )}
    </div>
  );
}
