// app/layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { fontMono, fontSans } from "@/lib/font";
import { cn } from "@/lib/utils";

import "@/styles/globals.css";
import { GoldenGlow } from "@/components/ui/golden-glow";

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "relative flex min-h-screen w-full flex-col justify-center overflow-x-hidden scroll-smooth bg-background font-sans antialiased",
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
          <Header />

          <main className="flex-1">{children}</main>

          <div className="relative">
            <GoldenGlow />
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}