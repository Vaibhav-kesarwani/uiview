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
import AuthModal from "./ui/auth-modal";
import { useState } from "react";
import { navSections } from "@/content/config";
import { iconLibrary } from "@/icons/icon";

export function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="items-center justify-between gap-110 hidden lg:flex">
      {/* Centered Navigation */}
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent className="dark:bg-[#171717] rounded-xl p-5 shadow-lg">
              <ul className="grid gap-2 md:w-[600px] lg:w-[700px] lg:grid-cols-[1fr_1fr_.95fr]">
                {navSections.map((section, index) => (
                  <ul key={index} className="grid grid-cols-1 gap-2">
                    {section.map((item, idx) => {
                      const Icon = iconLibrary[item.icon];

                      return (
                        <ListItem key={idx} href={item.href}>
                          <span className="flex items-center gap-3 text-white">
                            {Icon && <Icon className="w-4 h-4 text-white" />}
                            <span>{item.title}</span>
                          </span>
                        </ListItem>
                      );
                    })}
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
        <Link href="" onClick={() => setIsModalOpen(true)}>
          <CreateButton />
        </Link>
      </div>

      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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
