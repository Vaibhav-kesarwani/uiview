import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { fontMono, fontSans } from "@/lib/font";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";

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
    title: "Uiview | Modern UI Component Library",
    description:
      "Uiview is a modern UI component library offering reusable, scalable, and visually polished building blocks for fast, consistent interface development.",
    images: ["https://uiview.vercel.app/og.png"],
    creator: "@Vaibhav_kesarwani",
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
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "relative flex w-full flex-col justify-center overflow-x-hidden scroll-smooth bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
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
