import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Uiview",
  description:
    "Uiview is a modern UI component library offering reusable, scalable, and visually polished building blocks for fast, consistent interface development.",
  openGraph: {
    title: "Uiview",
    description:
      "Uiview is a modern UI component library offering reusable, scalable, and visually polished building blocks for fast, consistent interface development.",
    url: "https://uiview.vercel.app",
    siteName: "Uiview",
    locale: "en_US",
    type: "website",
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
  twitter: {
    card: "summary_large_image",
    title: "Uiview",
    description:
      "Uiview is a modern UI component library offering reusable, scalable, and visually polished building blocks for fast, consistent interface development.",
    images: ["https://uiview.vercel.app/og.png"],
    creator: "@Vaibhav_kesarwani",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
