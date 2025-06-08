"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pb-62 pt-20">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 p-10 rounded-2xl">
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold">uiview</h2>
          <p className="text-sm mt-2 text-gray-400">
            Simplifying UPI payments with smart design & secure APIs.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/features" className="hover:text-white">
                Features
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-white">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="hover:text-blue-500 transition-colors" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="hover:text-sky-400 transition-colors" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="hover:text-pink-400 transition-colors" />
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <Linkedin className="hover:text-blue-300 transition-colors" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} uiview. All rights reserved.
      </div>
    </footer>
  );
}
