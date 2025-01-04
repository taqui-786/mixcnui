import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DocsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Documentation</h1>
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Welcome to our documentation. Learn how to integrate and use our
          components effectively in your projects.
        </p>

        <div className="grid gap-6 mt-8">
          <div className="border dark:border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Learn the basics and get up and running with our components
              library.
            </p>
            <Link
              href="/docs/installation"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              Get started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="border dark:border-gray-700 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Components</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Explore our collection of pre-built components and learn how to
              use them.
            </p>
            <Link
              href="/components"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
            >
              View components <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
