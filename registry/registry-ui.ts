import { type Registry } from "shadcn/registry";

export const ui: Registry["items"] = [
  {
    name: "marquee",
    type: "registry:ui",
    title: "Marquee",
    description:
      "A card that displays a tweet with the author's name, handle, and profile picture.",
    dependencies: ["react-tweet"],
    files: [
      {
        path: "registry/vectorui/marquee.tsx",
        type: "registry:ui",
        target: "components/vectorui/marquee.tsx",
      },
    ],
  },
];
