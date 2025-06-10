import React from "react";
import { Instagram, Twitter, Github, Linkedin, Scale } from "lucide-react";
import Logo from "./logo";
import Link from "next/link";

export function SiteFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative z-10 bg-gradient-to-b from-[#080808] via-[#0D0D0D] to-[#101010] text-white pt-10 pb-16 lg:pb-56 font-sans">
      <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-[#B88746] via-[#FDF5A6] to-[#B88746] opacity-50" />
      <div className="mx-auto max-w-7xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-12 rounded-2xl">
        <div className="flex flex-col justify-between">
          <div>
            <Logo />
            <p className="text-sm mt-2 text-gray-400">
              Uiview | Modern UI Component Library
            </p>

            <div className="mt-5">
              <h3 className="text-base font-semibold mb-2 text-gray-300 flex items-center">
                <Link
                  href={
                    "https://github.com/Vaibhav-kesarwani/uiview/blob/main/LICENSE"
                  }
                >
                  <Scale className="mr-2 text-xl font-bold" /> MIT License
                </Link>
              </h3>
              <p className="text-sm text-gray-500 max-w-xs">
                All content (UI elements) on this site are published under the
                {"  "}
                <Link
                  href={
                    "https://github.com/Vaibhav-kesarwani/uiview/blob/main/LICENSE"
                  }
                >
                  <span className="underline underline-offset-2">
                    MIT License
                  </span>
                </Link>
                {"."}
              </p>
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <a
              href="[https://instagram.com](https://instagram.com)"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 text-gray-400 hover:text-pink-400 transition-colors" />
            </a>
            <a
              href="[https://twitter.com](https://twitter.com)"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6 text-gray-400 hover:text-sky-400 transition-colors" />
            </a>
            <a
              href="[https://github.com](https://github.com)"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github (Discord Placeholder)"
            >
              <Github className="h-6 w-6 text-gray-400 hover:text-purple-500 transition-colors" />
            </a>
            <a
              href="[https://linkedin.com](https://linkedin.com)"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-blue-500 transition-colors" />
            </a>
          </div>
          <div className="mt-10 text-gray-500 text-sm flex gap-4">
            &copy; {currentYear} Uiview. All rights reserved.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a
                  href="[https://cssbuttons.io](https://cssbuttons.io)"
                  className="hover:text-white transition-colors"
                >
                  Cssbuttons.io
                </a>
              </li>
              <li>
                <a
                  href="[https://neumorphism.io](https://neumorphism.io)"
                  className="hover:text-white transition-colors"
                >
                  Neumorphism.io
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Information</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Post Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Give feedback
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Report bug
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
