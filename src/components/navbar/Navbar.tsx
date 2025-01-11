"use client";
import { Github, Moon, Sun } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "@/lib/hooks/useTheme";

function Navbar() {
  const pathname = usePathname();
  const isDocsPage = pathname?.includes("docs");

  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-[#020817] w-full border-b">
      <div className="mx-auto flex h-16  items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link className="flex text-primary items-center gap-2" href="/">
          {/* <Image src={logo} alt='mylogo'  priority loading='eager' className='h-10 w-auto' /> */}
          <span className="text-3xl dark:text-white font-bold font-mono">
            Mixcn-Ui
          </span>
          {isDocsPage && (
            <>
              <span className="text-gray-300 mx-2">|</span>
              <span className="text-2xl font-medium text-gray-600">Docs</span>
            </>
          )}
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav
            aria-label="Global"
            className=" md:flex hidden flex-1 items-center justify-center"
          >
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  className="text-primary transition hover:text-gray-500/75"
                  href="/components"
                >
                  {" "}
                  Components{" "}
                </Link>
              </li>

              <li>
                <Link
                  className="text-primary transition hover:text-gray-500/75"
                  href="/components/#templates"
                >
                  {" "}
                  Templates{" "}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 sm:gap-4">
              {theme === "light" ? (
                <Sun
                  onClick={toggleTheme}
                  className="w-6 h-6 cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-12 hover:text-amber-500"
                />
              ) : (
                <Moon
                  onClick={toggleTheme}
                  className="w-6 h-6 cursor-pointer transition-all duration-300 hover:scale-110 hover:-rotate-12 hover:text-blue-400"
                />
              )}
              <Link
                href="https://github.com/taqui-786/mixui"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg
                  transition-all duration-200 ease-in-out
                  dark:hover:bg-gray-500
                  hover:bg-gray-100 hover:scale-[1.02]
                  text-gray-700 hover:text-black
                  border border-gray-200 dark:border-gray-300"
              >
                <Github className="h-5 w-5 dark:text-white" />
                <span className="font-medium dark:text-white">
                  Star on GitHub
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
