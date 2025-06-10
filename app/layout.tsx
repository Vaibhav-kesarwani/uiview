import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { absoluteUrl, cn, constructMetadata } from "@/lib/utils";
import { fontMono, fontSans } from "@/lib/fonts";
import { Provider as JotaiProvider } from "jotai";
import { TooltipProvider } from "@/components/ui/tooltip";

import "../styles/globals.css";

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = constructMetadata({
  title: "Uiview | Modern UI Component Library",
  description:
    "Uiview is a modern UI component library offering reusable, scalable, and visually polished building blocks for fast, consistent interface development.",
  image: absoluteUrl("/og"),
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
    images: ["https://uiview.vercel.app/og"],
    creator: "@Vaibhav_kesarwani",
  },
  icons: {
    icon: "/icon.png",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "relative flex w-full flex-col justify-center overflow-x-hidden scroll-smooth bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable
        )}
      >
        <JotaiProvider>
          <ThemeProvider attribute={"class"} defaultTheme="dark">
            <TooltipProvider>{children}</TooltipProvider>
          </ThemeProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}
