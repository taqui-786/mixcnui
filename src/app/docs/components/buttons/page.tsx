'use client';
import React from 'react';
import { CodeBlock } from '../../docsComponents/CodeBlock';


export default function ButtonsDoc() {
  const buttonExample = `
<button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
  Click me
</button>
  `;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Buttons</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">
          Our button components are designed to provide a consistent and accessible
          experience across your application.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
          <div className="p-4 border dark:border-gray-700 rounded-lg mb-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Click me
            </button>
          </div>
          <CodeBlock code={buttonExample} language="jsx" filename="Button.tsx"  />
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b dark:border-gray-700">
                  <th className="text-left py-2">Prop</th>
                  <th className="text-left py-2">Type</th>
                  <th className="text-left py-2">Default</th>
                  <th className="text-left py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-700">
                  <td className="py-2">variant</td>
                  <td className="py-2">string</td>
                  <td className="py-2">&apos;default&apos;</td>
                  <td className="py-2">The style variant of the button</td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <td className="py-2">size</td>
                  <td className="py-2">string</td>
                  <td className="py-2">&apos;md&apos;</td>
                  <td className="py-2">The size of the button</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
} 