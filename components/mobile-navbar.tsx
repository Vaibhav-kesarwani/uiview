"use client";

import React, { useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "./logo";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] px-4 py-3 lg:hidden shadow-md">
      {/* Topbar */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Menu Bar */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Fullscreen Dropdown */}
      {isOpen && (
        <div className="fixed top-[60px] left-0 right-0 bottom-0 z-40 bg-gray-900 px-6 py-8 flex flex-col gap-6 text-white">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-xl">
            Home
          </Link>
          <Link
            href="/components"
            onClick={() => setIsOpen(false)}
            className="text-xl"
          >
            Components
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="text-xl"
          >
            About
          </Link>
          <Link
            href="/login"
            onClick={() => setIsOpen(false)}
            className="text-xl"
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
}
