import { Analytics } from "@/components/analytics";
import { PHProvider } from "@/components/posthog-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { fontMono, fontSans } from "@/lib/fonts";
import { absoluteUrl, cn, constructMetadata } from "@/lib/utils";
import { Provider as JotaiProvider } from "jotai";

import "@/styles/globals.css";

import type { Viewport } from "next";
import { Metadata } from "next";

export const metadata: Metadata = constructMetadata({
  title: "Vector UI",
  description:
    "Discover a collection of beautifully crafted UI components and modern templates designed to transform your landing page into a visually stunning and highly engaging experience—perfect for capturing attention and driving conversions.",
  image: absoluteUrl("/og"),
});

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "relative flex w-full flex-col justify-center overflow-x-hidden scroll-smooth bg-background font-sans antialiased",
          fontSans.variable,
          fontMono.variable,
        )}
      >
        <JotaiProvider>
          <PHProvider>
            <ThemeProvider attribute="class" defaultTheme="light">
              <TooltipProvider>
                {children}
                <Toaster />
                <Analytics />
              </TooltipProvider>
            </ThemeProvider>
          </PHProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}
