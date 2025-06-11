"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { type DialogProps } from "@radix-ui/react-dialog";
import {
  CircleIcon,
  FileIcon,
  LaptopIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { docsConfig } from "@/config/docs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

export function CommandMenu({ ...props }: DialogProps) {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-11 w-full justify-start rounded-[0.5rem] text-sm font-normal shadow-none sm:pr-12 md:w-64",
          "border-[#B88746] hover:border-[#FDF5A6] bg-[#080808]/50 text-[#848B98]" 
        )}
        onClick={() => setOpen(true)}
        {...props}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          viewBox="0 0 24 24"
          strokeWidth={2}
          height={18}
          fill="none"
          className="mr-2"
        >
          <circle stroke="url(#goldGradientCircle)" r={8} cy={11} cx={11} />
          <line
            stroke="url(#goldGradientLine)"
            y2="16.65"
            y1={22}
            x2="16.65"
            x1={22}
          />
          <defs>
            <linearGradient
              id="goldGradientCircle"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="10%" stopColor="#B88746" />
              <stop offset="100%" stopColor="#FDF5A6" />
            </linearGradient>
            <linearGradient
              id="goldGradientLine"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="10%" stopColor="#B88746" />
              <stop offset="100%" stopColor="#FDF5A6" />
            </linearGradient>
          </defs>
        </svg>
        <span className="inline-flex">Search documentation...</span>
        <kbd
          className={cn(
            "mt-1.5 mr-1 pointer-events-none absolute right-[0.3rem] top-[0.3rem] h-5 select-none items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex",
            "border-[#B88746] bg-[#080808]/50"
          )}
        >
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            {docsConfig.mainNav
              .filter((navitem) => !navitem.external)
              .map((navItem) => (
                <CommandItem
                  key={navItem.href}
                  value={navItem.title}
                  onSelect={() => {
                    runCommand(() => router.push(navItem.href as string));
                  }}
                >
                  <FileIcon className="mr-2 size-4" />
                  {navItem.title}
                </CommandItem>
              ))}
          </CommandGroup>
          {docsConfig.sidebarNav.map((group) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items?.map((navItem) => (
                <CommandItem
                  key={navItem.href}
                  value={navItem.title}
                  onSelect={() => {
                    runCommand(() => router.push(navItem.href as string));
                  }}
                >
                  <div className="mr-2 flex size-4 items-center justify-center">
                    <CircleIcon className="size-3" />
                  </div>
                  {navItem.title}
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <SunIcon className="mr-2 size-4" />
              Light
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <MoonIcon className="mr-2 size-4" />
              Dark
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <LaptopIcon className="mr-2 size-4" />
              System
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
