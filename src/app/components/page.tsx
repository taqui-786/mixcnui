'use client'


import { CarouselExample } from "@/components/customPreview/CarouselPreview";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HackerButton from "@/components/uiComponents/HackerButton";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

// Define the component type for better organization
type ComponentCard = {
  title: string;
  description: string;
  href: string;
  tags: string[];
  preview: React.ReactNode;
};

function ComponentsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  // Define all components in an array for easier management
  const components: ComponentCard[] = [
    {
      title: "Hacker Button",
      description: "Randomize text on click with vue with tailwindcss.",
      href: "/docs/components/hackerbutton",
      tags: ["button", "animation", "interactive"],
      preview: (
        <div className="w-fit max-w-full">
          <HackerButton text="Download Resume" />
        </div>
      ),
    },
    {
      title: "Carousel",
      description: "This is a carousel component support all embla carousel features.",
      href: "/docs/components/MultiCarousel",
      tags: ["carousel", "slider", "gallery"],
      preview: (
        <div className="w-[350px]">
          <CarouselExample />
        </div>
      ),
    },
  
  ];

  // Filter components based on search query
  const filteredComponents = components.filter(
    (component) =>
      component.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-xl">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-primary mb-3">
          Browse Components
        </h1>
        <p className="text-muted-foreground text-lg mb-6">
          Explore our collection of beautiful and reusable components
        </p>
        
        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search components..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Components Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredComponents.map((component, index) => (
          <div
            key={index}
            className="group flex flex-col bg-card border rounded-xl shadow-sm hover:shadow-md transition-all duration-200 justify-between items-start gap-y-8 w-full"
          >
            {/* Preview Section - Updated */}
            <div className="relative p-8 md:p-4 w-full bg-muted border-b h-full min-h-[10rem]">
              <div className="absolute inset-0 flex justify-center items-center p-6 overflow-hidden">
                <div className="transform-gpu transition-transform duration-300 group-hover:scale-105 w-full flex justify-center items-center">
                  <div className="max-w-full max-h-full overflow-auto flex justify-center items-center">
                    {/* Scale wrapper for components that need size constraints */}
                    <div className="transform scale-90">
                      {component.preview}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section - Updated */}
            <div className="p-5 flex flex-col flex-grow w-full">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {component.title}
              </h3>
              <p className="text-muted-foreground mb-4 flex-grow line-clamp-2">
                {component.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {component.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-primary/10 text-primary rounded-md text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={component.href}
                className={cn(
                  buttonVariants(),
                  "w-full group-hover:bg-primary/90 transition-colors"
                )}
              >
                View Details
              </Link>
            </div>
          </div>
        ))}

        {/* Coming Soon Box */}
        <div className="group flex flex-col bg-card/50 border-2 border-dashed rounded-xl overflow-hidden">
          <div className="min-h-[200px] md:min-h-[250px] w-full flex items-center justify-center p-6">
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-muted-foreground mb-2">
                More Components
              </h3>
              <p className="text-sm text-muted-foreground">
                New components are being crafted
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* No Results Message */}
      {filteredComponents.length === 0 && (
        <div className="text-center py-10">
          <p className="text-muted-foreground">
            No components found matching your search.
          </p>
        </div>
      )}
    </div>
  );
}

export default ComponentsPage;
