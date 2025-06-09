// Files for the react compiler
const files = {
  "/public/index.html": {
    code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`,
    hidden: true,
  },

  "/component.tsx": {
    code: `export default function Component() {
  return (
    <div className="bg-blue-600 text-white text-lg p-4 rounded shadow">
      Hello from Tailwind Component!
    </div>
  );
}`,
    active: true,
  },

  "/index.tsx": {
    code: `import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Component from "./component.tsx";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Component />
  </StrictMode>
);`,
    hidden: true,
  },

  "/package.json": {
    code: `{
  "dependencies": {
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-scripts": "^4.0.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "^4.0.0"
  },
  "main": "/index.tsx"
}`,
    hidden: true,
  },

  "/styles.css": {
    code: `@tailwind base;
@tailwind components;
@tailwind utilities;
      
body {
  font-family: sans-serif;
  -webkit-font-smoothing: auto;
  -moz-font-smoothing: auto;
  -moz-osx-font-smoothing: grayscale;
  font-smoothing: auto;
  text-rendering: optimizeLegibility;
  font-smooth: always;
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
}

html, body, #root {
  background-color: #1a202c; /* Tailwind gray-900 */
  color: #f7fafc; /* Tailwind gray-100 */
  min-height: 100vh;
}

h1 {
  font-size: 1.5rem;
}`,
    hidden: true,
  },

  "/tailwind.config.js": {
    code: `module.exports = {
  content: ["./**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}`,
    hidden: true,
  },

  "/postcss.config.js": {
    code: `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`,
    hidden: true,
  },

  "/tsconfig.json": {
    code: `{
  "include": [
    "./**/*"
  ],
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "lib": [ "dom", "es2015" ],
    "jsx": "react-jsx"
  }
}`,
    hidden: true,
  },
};

// Nav section for the navbar under elements
const navSections = [
  [
    {
      href: "/",
      title: "All",
      icon: "book",
    },
    {
      href: "/",
      title: "Checkboxes",
      icon: "",
    },
    {
      href: "/",
      title: "Cards",
      icon: "",
    },
    {
      href: "/",
      title: "Inputs",
      icon: "",
    },
    {
      href: "/",
      title: "Forms",
      icon: "",
    },
    {
      href: "/",
      title: "Tooltips",
      icon: "",
    },
  ],
  [
    {
      href: "/",
      title: "Buttons",
      icon: "",
    },
    {
      href: "/",
      title: "Toggle switches",
      icon: "",
    },
    {
      href: "/",
      title: "Loaders",
      icon: "",
    },
    {
      href: "/",
      title: "Radio buttons",
      icon: "",
    },
    {
      href: "/",
      title: "Patterns",
      icon: "",
    },
    {
      href: "/",
      title: "My favorites",
      icon: "",
    },
  ],
];

export { files, navSections };
