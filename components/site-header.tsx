"use client";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Icons } from "./icons";
import { LuxeButton } from "./luxe-button";
import { MainNav } from "./main-nav";
import { MobileNav } from "./mobile-nav";
import { ModeToggle } from "./mode-toggle";
import { buttonVariants } from "./ui/button";
import { CommandMenu } from "./ui/command-menu";
import { motion } from "framer-motion";

export function SiteHeader() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "supports-backdrop-blur:bg-background/90 sticky top-0 z-40 w-full border-b border-border bg-background/40 backdrop-blur-lg"
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex h-20 items-center justify-between"
      >
        <div className="flex items-center">
          <MainNav />
          <MobileNav />
        </div>

        <div className="flex items-center gap-2">
          <div className="mr-10 hidden lg:flex">
            <LuxeButton />
          </div>

          <div className="min-w-[250px] max-w-[200px] md:max-w-[280px]">
            <CommandMenu />
          </div>

          <div className="items-center gap-1 hidden md:flex">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.github className="size-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.twitter className="size-5" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}
              >
                <Icons.linkedin className="size-5" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
          </div>
          <ModeToggle className="flex mr-2 md:mr-5" />
        </div>
      </motion.div>
    </motion.header>
  );
}
