'use client';

import React, { useState, useEffect } from 'react';
import { components } from '../../registry/components';
import { CodeBlock } from '../../docsComponents/CodeBlock';
import { notFound, useParams } from 'next/navigation';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

export default function ComponentPage() {
  const params = useParams();
  const component = components[params.slug as keyof typeof components];
  const [showUsageCode, setShowUsageCode] = useState(false);
  const [sourceCode, setSourceCode] = useState<string>('Loading...');

  useEffect(() => {
    if (component.rawCode) {
      // Since rawCode is now async, we need to handle the Promise
      Promise.resolve(component.rawCode)
        .then(code => setSourceCode(code))
        .catch(error => {
          console.error('Error loading source:', error);
          setSourceCode('// Error loading component source');
        });
    }
  }, [component]);

  if (!component) {
    notFound();
  }

  const { name, description, code, props, examples, installName, component: Component } = component;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Component Header */}
      <div>
        <h1 className="text-3xl font-bold mb-4">{name}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>
      </div>

      {/* Usage Preview/Code */}
      <section className="border rounded-lg overflow-hidden">
        <Tabs defaultValue="preview" className="w-full">
          <div className="border-b px-4 py-2">
            <TabsList className="grid w-full grid-cols-2 max-w-[200px]">
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="preview" className="p-6 bg-white dark:bg-gray-800">
            <Component />
          </TabsContent>
          <TabsContent value="code">
            <CodeBlock 
              language="tsx" 
              code={code}
              filename="Example.tsx"
            />
          </TabsContent>
        </Tabs>
      </section>

      {/* Installation */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <Tabs defaultValue="cli" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-[200px] mb-4">
            <TabsTrigger value="cli">CLI</TabsTrigger>
            <TabsTrigger value="manual">Manual</TabsTrigger>
          </TabsList>
          <TabsContent value="cli">
            <div className="space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Install using our CLI tool (recommended):
              </p>
              <CodeBlock 
                language="bash" 
                code={`npx mixcn-ui add ${installName}`} 
                filename="Terminal"
              />
            </div>
          </TabsContent>
          <TabsContent value="manual">
            <div className="space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Create a new file <code className="px-1 py-0.5 bg-gray-100 dark:bg-gray-800 rounded">{name}.tsx</code> in your components directory and paste the following code:
              </p>
              <CodeBlock 
                language="typescript" 
                code={sourceCode}
                filename={`${name}.tsx`}
              />
              <div className="bg-yellow-50 dark:bg-yellow-900/30 border-l-4 border-yellow-400 p-4 mt-4">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  Note: Make sure you have the required dependencies installed in your project:
                </p>
                <ul className="list-disc list-inside mt-2 text-sm text-yellow-700 dark:text-yellow-300">
                  <li>react</li>
                  <li>react-dom</li>
                  <li>tailwindcss (for styling)</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Import */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Import</h2>
        <CodeBlock 
          language="typescript" 
          code={`import { ${name} } from "@components/customComponents/${name}";`}
          filename="Component.tsx"
        />
      </section>

      {/* Props */}
      {props && props.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Props</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-700">
                  <th className="border p-2 text-left">Name</th>
                  <th className="border p-2 text-left">Type</th>
                  <th className="border p-2 text-left">Default</th>
                  <th className="border p-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {props.map((prop) => (
                  <tr key={prop.name}>
                    <td className="border p-2">
                      {prop.name}
                      {prop.required && <span className="text-red-500">*</span>}
                    </td>
                    <td className="border p-2 font-mono text-sm">{prop.type}</td>
                    <td className="border p-2 font-mono text-sm">{prop.default || '-'}</td>
                    <td className="border p-2">{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Examples */}
      {examples && examples.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Examples</h2>
          <div className="space-y-6">
            {examples.map((example, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div className="p-4 border-b bg-gray-50 dark:bg-gray-700">
                  <h3 className="font-medium">{example.name}</h3>
                </div>
                <div className="p-6 bg-white dark:bg-gray-800">
                  {example.component}
                </div>
                <CodeBlock 
                  language="tsx" 
                  code={example.code}
                  filename={`${example.name}.tsx`}
                  
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
} 