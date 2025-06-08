"use client";

import {
  SandpackCodeEditor,
  SandpackFileExplorer,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
} from "@codesandbox/sandpack-react";
import { amethyst } from "@codesandbox/sandpack-themes";

export default function CreatePage() {
  return (
    <main className="min-h-screen p-6 bg-[#0A0A0A] text-gray-100">
      <h1 className="text-3xl font-bold mb-4">Component Editor</h1>
      <SandpackProvider
        theme={amethyst}
        template="react-ts"
        customSetup={{
          entry: "/index.tsx",
          dependencies: {
            react: "18.2.0",
            "react-dom": "18.2.0",
          },
        }}
      >
        <SandpackLayout
          style={{
            height: "600px",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <SandpackFileExplorer style={{ height: "100%", fontSize: "15px" }} />
          <SandpackCodeEditor
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
          <SandpackPreview style={{ height: "100%" }} />
        </SandpackLayout>
      </SandpackProvider>
    </main>
  );
}
