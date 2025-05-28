import { type Registry } from "shadcn/registry";

export const examples: Registry["items"] = [
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
