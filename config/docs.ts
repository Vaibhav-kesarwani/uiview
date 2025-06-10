import { MainNavItem } from "@/types";

interface DocsConfig {
  mainNav: MainNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Components",
      href: "/components",
    },
    {
      title: "Templates",
      href: "/templates",
    },
    {
      title: "Showcase",
      href: "/showcase",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ],
};
