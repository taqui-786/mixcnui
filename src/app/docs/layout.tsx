import React from 'react';
import Sidebar from './docsComponents/Sidebar';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[calc(100vh-64px)]">
      <Sidebar />
      <main className="flex-1 p-8 bg-gray-50 dark:bg-gray-900 overflow-y-auto">
        {children}
      </main>
    </div>
  );
} 