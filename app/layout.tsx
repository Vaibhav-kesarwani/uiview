import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uiview | Modern UI Component Library",
  description:
    "Uiview is a modern UI component library offering reusable, scalable, and visually polished building blocks for fast, consistent interface development.",
  openGraph: {
    title: "Uiview | Modern UI Component Library",
    description:
      "Uiview is a modern UI component library offering reusable, scalable, and visually polished building blocks for fast, consistent interface development.",
    url: "https://uiview.vercel.app",
    siteName: "Uiview",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Uiview | Modern UI Component Library",
    description:
      "Uiview is a modern UI component library offering reusable, scalable, and visually polished building blocks for fast, consistent interface development.",
    images: ["https://uiview.vercel.app/og.png"],
    creator: "@Vaibhav_kesarwani",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
