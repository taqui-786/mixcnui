'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, Menu, X, Book, Layers, Rocket } from 'lucide-react';
import { components } from '../registry/components';

const navigationItems = [
  {
    title: 'Getting Started',
    icon: <Rocket className="w-4 h-4" />,
    items: [
      { title: 'Introduction', href: '/docs', description: 'Quick overview of the library' },
      { title: 'Installation', href: '/docs/installation', description: 'Step-by-step installation guide' },
    ],
  },
  {
    title: 'Components',
    icon: <Layers className="w-4 h-4" />,
    items: Object.entries(components).map(([slug, component]) => ({
      title: component.name,
      href: `/docs/components/${slug}`,
      description: component.description,
    })),
  },
  // TODO: LATER I WILL THINKG ABOUT THIS ---
  // {
  //   title: 'Guides',
  //   icon: <Book className="w-4 h-4" />,
  //   items: [
  //     { title: 'Best Practices', href: '/testdocs/guides/best-practices', description: 'Recommended patterns' },
  //     { title: 'Theming', href: '/testdocs/guides/theming', description: 'Customize the look and feel' },
  //   ],
  // },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(['Getting Started', 'Components', 'Guides']);

  const toggleSection = (title: string) => {
    setExpandedSections(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  const isCurrentPath = (href: string) => pathname === href;
  const isSectionExpanded = (title: string) => expandedSections.includes(title);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white dark:bg-gray-800 shadow-md lg:hidden"
      >
        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar Container */}
      <div
        className={`
          fixed top-0 left-0 z-40 h-full w-64 transform transition-transform duration-200 ease-in-out
          lg:relative lg:translate-x-0
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700
        `}
      >
    

        {/* Navigation */}
        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100vh-125px)]">
          {navigationItems.map((section, index) => (
            <div key={index} className="space-y-1">
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between p-2 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                <div className="flex items-center gap-2 font-semibold text-primary">
                  {section.icon}
                  <span>{section.title}</span>
                </div>
                {isSectionExpanded(section.title) ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>

              {isSectionExpanded(section.title) && (
                <div className="ml-4 space-y-1">
                  {section.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className={`
                        block p-2 text-sm rounded-md transition-colors
                        ${isCurrentPath(item.href)
                          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }
                      `}
                    >
                      <div className="font-medium">{item.title}</div>
                      {item.description && (
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                          {item.description}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
} 