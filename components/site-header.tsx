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
            {[
              {
                href: siteConfig.links.github,
                Icon: Icons.github,
                label: "GitHub",
              },
              {
                href: siteConfig.links.twitter,
                Icon: Icons.twitter,
                label: "Twitter",
              },
              {
                href: siteConfig.links.linkedin,
                Icon: Icons.linkedin,
                label: "LinkedIn",
              },
            ].map(({ href, Icon, label }) => (
              <Link href={href} key={label} target="_blank" rel="noreferrer">
                <div
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "hover:shadow-[0_0_8px_#F6E8CD66] hover:bg-[#F6E8CD0D] w-9 h-9 p-0 flex items-center justify-center rounded-full border border-[#F6E8CD]/20 hover:border-[#F6E8CD]/40 transition-colors duration-300 group"
                  )}
                >
                  <Icon className="size-5 text-[#F6E8CD] group-hover:text-[#FFD700] transition duration-300" />
                  <span className="sr-only">{label}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="hover:shadow-[0_0_8px_#F6E8CD66] hover:bg-[rgba(246,232,205,0.05)] w-9 h-9 p-0 flex items-center justify-center rounded-full border border-[#F6E8CD]/20 hover:border-[#F6E8CD]/40 transition-colors duration-300 group mr-2 md:mr-5">
            <ModeToggle className="pointer-events-none text-[#F6E8CD] group-hover:text-[#FFD700] rounded-full transition duration-300" />
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
