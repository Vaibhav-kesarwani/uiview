import React from "react";
import { Instagram, Twitter, Github, Linkedin, Scale } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative z-10 bg-gradient-to-b from-[#080808] via-[#0D0D0D] to-[#101010] text-white pt-10 pb-50 font-sans">
      {/* Top Line */}
      <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-[#B88746] via-[#FDF5A6] to-[#B88746] opacity-50" />

      <div className="mx-auto max-w-7xl p-10 grid grid-cols-1 md:grid-cols-2 gap-12 rounded-2xl">
        {/* Left Side: Logo + Description + Socials */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold font-inter">Uiview</h2>
            <p className="text-sm mt-2 text-gray-400">
              Uiview | Modern UI Component Library
            </p>

            <div className="mt-4">
              <h3 className="text-base font-semibold mb-2 text-gray-300 flex items-center">
                <Scale className="mr-2 text-xl font-bold" /> MIT License
              </h3>
              <p className="text-xs text-gray-500 max-w-xs">
                All content (UI elements) on this site are published under the
                MIT License.
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 text-gray-400 hover:text-pink-400 transition-colors" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Twitter className="h-6 w-6 text-gray-400 hover:text-sky-400 transition-colors" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github (Discord Placeholder)"
            >
              <Github className="h-6 w-6 text-gray-400 hover:text-purple-500 transition-colors" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-blue-500 transition-colors" />
            </a>
          </div>
          {/* Copyright text moved to the left column */}
          <div className="mt-10 text-gray-500 text-sm flex gap-4">
            &copy; {currentYear} Uiview. All rights reserved.
          </div>
        </div>

        {/* Right Side: Resources, Information, Legal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Resources */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a
                  href="https://cssbuttons.io"
                  className="hover:text-white transition-colors"
                >
                  Cssbuttons.io
                </a>
              </li>
              <li>
                <a
                  href="https://neumorphism.io"
                  className="hover:text-white transition-colors"
                >
                  Neumorphism.io
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
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

          {/* Legal */}
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

export default Footer;
