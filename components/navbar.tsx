"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { navSections } from "@/content/config";
import { iconLibrary } from "@/icons/icon";
import Link from "next/link";
import { useState } from "react";
import CreateButton from "./create-button";
import Logo from "./logo";
import NavCard from "./nav-card";
import SearchBar from "./search-bar";
import AuthModal from "./ui/auth-modal";

export function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="items-center justify-between gap-10 hidden lg:flex">
      {/* logo */}
      <Logo />

      {/* Centered Navigation */}
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent className="felx dark:bg-[#171717] rounded-xl p-3 shadow-lg">
              <ul className="grid grid-cols-[1.5fr_1.5fr_1fr] gap-3 lg:w-[800px]">
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
                <NavCard />
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
      <div className=" flex items-center justify-between gap-5">
        <SearchBar />
        <Link href="" onClick={() => setIsModalOpen(true)}>
          <CreateButton />
        </Link>
      </div>

      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
