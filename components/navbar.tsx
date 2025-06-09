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
            <NavigationMenuContent className="dark:bg-[#171717] rounded-xl p-3 shadow-lg">
              <ul className="grid grid-cols-3 gap-3 md:w-[600px] lg:w-[700px]">
                {/* Nav items container spanning first 2 columns */}
                <li className="col-span-2">
                  <ul className="grid grid-cols-2 gap-3">
                    {navSections.flat().map((item, idx) => {
                      const Icon = iconLibrary[item.icon];

                      return (
                        <li key={idx}>
                          <Link
                            href={item.href}
                            className="flex h-14 items-center gap-3 rounded-lg bg-zinc-800 p-4 text-white transition-colors hover:bg-zinc-700"
                          >
                            {Icon && (
                              <Icon
                                className="w-5 h-5 text-white"
                                strokeWidth={2.5}
                              />
                            )}
                            <span className="text-base font-medium">
                              {item.title}
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>

                {/* Highlight box spanning full height in 3rd column */}
                <li className="row-span-full rounded-lg bg-gradient-to-b from-muted/50 to-muted text-white hover:shadow-lg transition-shadow">
                  <NavigationMenuLink asChild>
                    <Link
                      href="/"
                      className="flex h-full w-full flex-col justify-end no-underline select-none focus:shadow-md"
                    >
                      <div className="mt-4 mb-2 text-lg font-semibold">
                        shadcn/ui
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
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
