"use client";

import {
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import { autocompletion } from "@codemirror/autocomplete";
import { amethyst } from "@codesandbox/sandpack-themes";
import files from "@/content/create_data";

export default function CreatePage() {
  return (
    <main className="min-h-screen p-6 bg-[#0A0A0A] text-gray-100">
      <h1 className="text-3xl font-bold mb-4">Component Editor</h1>
      <SandpackProvider
        theme={amethyst}
        customSetup={{
          entry: "/index.tsx",
          dependencies: {
            react: "18.2.0",
            "react-dom": "18.2.0",
          },
        }}
        files={files}
        options={{
          externalResources: ["https://cdn.tailwindcss.com"],
        }}
      >
        <SandpackLayout
          style={{
            height: "600px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <SandpackFileExplorer
            about="key"
            initialCollapsedFolder={["/public/"]}
            style={{ height: "100%", fontSize: "15px" }}
          />
          <SandpackCodeEditor
            extensions={[autocompletion()]}
            style={{
              fontSize: "15px",
              height: "100%",
            }}
            showInlineErrors
            wrapContent
            closableTabs
            showTabs
            showLineNumbers
          />
          <SandpackPreview suppressHydrationWarning showNavigator style={{ height: "100%" }} />
        </SandpackLayout>
      </SandpackProvider>
    </main>
  );
}
