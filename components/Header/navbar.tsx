"use client";

import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import SearchBar from "./search-bar";
import CreateButton from "./create-button";

const navSections = [
  [
    {
      href: "/docs",
      title: "Introduction",
      description:
        "Re-usable components built using Radix UI and Tailwind CSS.",
    },
    {
      href: "/docs/installation",
      title: "Installation",
      description: "How to install dependencies and structure your app.",
    },
    {
      href: "/docs/installation",
      title: "Installation",
      description: "How to install dependencies and structure your app.",
    },
  ],
  [
    {
      href: "/docs",
      title: "Introduction",
      description:
        "Re-usable components built using Radix UI and Tailwind CSS.",
    },
    {
      href: "/docs/installation",
      title: "Installation",
      description: "How to install dependencies and structure your app.",
    },
    {
      href: "/docs/installation",
      title: "Installation",
      description: "How to install dependencies and structure your app.",
    },
  ],
];

export function Navbar() {
  return (
    <div className="items-center justify-between gap-120 hidden md:flex">
      {/* Centered Navigation */}
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
            <NavigationMenuContent className="dark:bg-[#171717] rounded-xl p-5 shadow-lg">
              <ul className="grid gap-2 md:w-[600px] lg:w-[700px] lg:grid-cols-[1fr_1fr_.95fr]">
                {navSections.map((section, index) => (
                  <ul key={index} className="grid grid-cols-1 gap-2">
                    {section.map((item, idx) => (
                      <ListItem key={idx} href={item.href} title={item.title}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                ))}
                <li className="row-span-1">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    >
                      <div className="mt-4 mb-2 text-lg font-medium">
                        shadcn/ui
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Beautifully designed components built with Tailwind CSS.
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {["Challenges", "Spotlight", "Blog"].map((label) => (
            <NavigationMenuItem key={label}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/docs">{label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Search & Create - aligned to the right */}
      <div className="flex items-center justify-between gap-5">
        <SearchBar />
        <Link href="/login">
          <CreateButton />
        </Link>
      </div>
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="dark:bg-[#232323] dark:hover:bg-[#2c2c2c] rounded-md p-4 flex flex-col gap-1"
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
