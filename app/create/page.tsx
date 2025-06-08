"use client";

import { Sandpack } from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";

export default function CreatePage() {
  return (
    <main className="min-h-screen p-6 bg-gray-900 text-gray-100">
      <h1 className="text-3xl font-bold mb-4">Component Editor</h1>
      <Sandpack
        theme={amethyst}
        template="react-ts"
        customSetup={{
          entry: "/index.tsx",
          dependencies: {
            react: "18.2.0",
            "react-dom": "18.2.0",
          },
        }}
        files={{
          "/Component.tsx": {
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
            code: `import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Component from "./Component";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Live Preview</h2>
      <Component />
    </div>
  </React.StrictMode>
);`,
          },
          "/index.css": {
            code: `@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #root {
  background-color: #1a202c; /* Tailwind gray-900 */
  color: #f7fafc; /* Tailwind gray-100 */
  min-height: 100vh;
}
`,
          },
          "/index.html": {
            code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Sandpack</title>
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
  <body class="bg-gray-900 text-gray-100">
    <div id="root"></div>
  </body>
</html>`,
          },
        }}
        options={{
          showLineNumbers: true,
          showTabs: true,
          wrapContent: true,
          editorHeight: 500,
        }}
      />
    </main>
  );
}
