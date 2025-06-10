"use client";

import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import posthog from "posthog-js";
import Logo from "./logo";

interface NavItem {
  title: string;
  href?: string;
  external?: boolean;
  event?: string;
  label?: string;
}

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="ml-10 hidden lg:flex items-center space-x-3">
      <Logo />

      <nav className="flex items-center space-x-2 mt-1">
        {docsConfig.mainNav.map((item: NavItem) => (
          <Link
            key={item.href}
            href={item.href!}
            aria-label={item.title}
            onClick={() => item.event && posthog.capture(item.event)}
            target={item.external ? "_blank" : undefined}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
              "hover:bg-muted hover:text-foreground",
              "dark:text-[#FCF5E5] dark:hover:bg-muted",
              pathname?.startsWith(item.href!)
                ? "bg-muted text-foreground"
                : "text-foreground/60"
            )}
          >
            <span className="shrink-0">{item.title}</span>
            {item.label && (
              <span className="ml-2 rounded-md bg-[#FFBD7A] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
            {item.external && <ExternalLinkIcon className="ml-2 size-4" />}
          </Link>
        ))}
      </nav>
    </div>
  );
}
