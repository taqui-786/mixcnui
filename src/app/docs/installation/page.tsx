import React from "react";
import { CodeBlock } from "../docsComponents/CodeBlock";

function Page() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex items-center gap-2 text-sm dark:text-gray-300 text-gray-600 mb-4">
        <span>Getting Started</span>
        <span>›</span>
        <span>Installation</span>
      </div>

      <h1 className="text-4xl font-bold mb-8">Welcome to Mix</h1>

      <p className="mb-6">
        Hello my name is Md Taqui Imam, I am a fullstack developer and currently
        a freelancer. Mixui is a collection of animated or re-usable component
        for currently for Nextjs, Which you can install with{" "}
        <code className="bg-gray-100 px-2 py-1 rounded dark:bg-gray-500">
          CLI
        </code>{" "}
        command in you Nextjs App like a{" "}
        <code className="bg-gray-100 dark:bg-gray-500 px-2 py-1 rounded">
          Shadcn UI
        </code>
        . Actually I am learning and Building this CLI tool.
      </p>

      <h2 className="text-2xl font-bold mb-6">Installation</h2>

      <div className="bg-gray-50 dark:bg-transparent p-4 rounded-lg mb-6">
        <CodeBlock
          code="npx mixui init"
          language="jsx"
          filename="CLI Installation"
        />
      </div>

      <p className="text-gray-600 dark:text-gray-300">
        If you find any type of bugs and error in CLI then please create a{" "}
        <code className="bg-gray-100 dark:text-white px-2 py-1 dark:bg-gray-500 rounded">
          issue
        </code>{" "}
        in Github.
      </p>

      <p className="text-sm text-gray-500 mt-8">Last updated on Jan 01, 2025</p>
    </div>
  );
}

export default Page;
