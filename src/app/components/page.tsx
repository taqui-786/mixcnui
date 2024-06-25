import { CarouselExample } from "@/components/extension/CarouselPreview";
import HackerButton from "@/components/mdx/HackerButton";
import TextRotator from "@/components/mdx/TextRotator";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className={"mx-auto w-full flex flex-col max-w-screen-xl  "}>
      <div className="w-full flex flex-col justify-start my-10 ">
        <h1 className="text-nowrap text-3xl font-bold text-primary">
          Browse Components
        </h1>
        <p>Navigate to all the components available in the documentation.</p>
      </div>
      <div className="flex w-full justify-center flex-wrap overflow-x-hidden gap-5">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className=" h-56 w-[500px] flex justify-center items-center bg-gray-50">
            <HackerButton label="Download Resume" />
          </div>
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Hacker Button
            </h3>
            <p className="mt-1 text-primary dark:text-neutral-400">
              Randomize text on click with vue with tailwindcss.
            </p>
            <Link href="/docs/custom/hackerbutton" className={cn(buttonVariants())}>
              Checkout
            </Link>
          </div>
        </div>
      
        
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className=" h-64 w-[500px] flex justify-center items-center bg-gray-50">
            <CarouselExample/>
          </div>
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
            Carousel 
            </h3>
            <p className="mt-1 text-primary dark:text-neutral-400">
            This is a carousel component support all embla carousel features.
            </p>
            <Link href="/docs/custom/carousel" className={cn(buttonVariants())}>
              Checkout
            </Link>
          </div>
      </div>
      <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
          <div className=" h-56 w-[500px] flex justify-center items-center bg-gray-50">
            <TextRotator/>
          </div>
          <div className="p-4 md:p-5">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white">
              Text Rotator
            </h3>
            <p className="mt-1 text-primary dark:text-neutral-400">
            Text Rotator with tailwindcss.
            </p>
            <Link href="/docs/custom/textrotator" className={cn(buttonVariants())}>
              Checkout
            </Link>
          </div>
      </div>
    
      </div>
    </div>
  );
}

export default page;
