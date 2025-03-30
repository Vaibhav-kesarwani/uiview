import {GithubIcon, MagicIcon, XIcon} from "@/components/icons";
import {siteConfig} from "@/config/site";

export const TWITTER_USER_NAME = "Vaibhav_k__";
export const SITE_URL = "https://vectorui.vercel.app";

export const communityAccounts = [
  {
    title: "X",
    description: "For announcements, tips and general information.",
    icon: <XIcon className="text-[#333] dark:text-[#E7E7E7]" size={28} />,
    href: siteConfig.links.twitter,
    isExternal: true,
  },
  {
    title: "Potfolio",
    description: "To showcase my future projects and get inspired by others.",
    icon: <MagicIcon className="text-[#333] dark:text-[#E7E7E7]" size={28} />,
    href: siteConfig.links.portfolio,
    isExternal: true,
  },
  {
    title: "Github",
    description: "To report bugs, request features and contribute to the project.",
    icon: <GithubIcon className="text-[#333] dark:text-[#E7E7E7]" size={32} />,
    href: siteConfig.links.github,
    isExternal: true,
  },
];
