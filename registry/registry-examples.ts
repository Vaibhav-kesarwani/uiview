import { type Registry } from "shadcn/registry";

export const examples: Registry["items"] = [
  {
    name: "tweet-card-demo",
    type: "registry:example",
    title: "Tweet Card Demo",
    description: "Example showing a tweet card with author info.",
    registryDependencies: ["https://vectorui.vercel.app/r/tweet-card"],
    files: [
      {
        path: "registry/example/tweet-card-demo.tsx",
        type: "registry:example",
        target: "components/tweet-card-demo.tsx",
      },
    ],
  },
  {
    name: "tweet-card-images",
    type: "registry:example",
    title: "Tweet Card Images",
    description: "Example showing a tweet card with images.",
    registryDependencies: ["https://vectorui.vercel.app/r/tweet-card"],
    files: [
      {
        path: "registry/example/tweet-card-images.tsx",
        type: "registry:example",
        target: "components/tweet-card-images.tsx",
      },
    ],
  },
  {
    name: "tweet-card-meta-preview",
    type: "registry:example",
    title: "Tweet Card Meta Preview",
    description: "Example showing a tweet card with meta preview.",
    registryDependencies: ["https://vectorui.vercel.app/r/tweet-card"],
    files: [
      {
        path: "registry/example/tweet-card-meta-preview.tsx",
        type: "registry:example",
        target: "components/tweet-card-meta-preview.tsx",
      },
    ],
  },
  {
    name: "marquee-demo",
    type: "registry:example",
    title: "Marquee Preview",
    description: "Example showing a tweet card with meta preview.",
    registryDependencies: ["https://vectorui.vercel.app/r/marquee"],
    files: [
      {
        path: "registry/example/marquee-demo.tsx",
        type: "registry:example",
        target: "components/marquee-demo.tsx",
      },
    ],
  },
];
