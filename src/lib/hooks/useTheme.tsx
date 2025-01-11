"use client";

import { useCallback, useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("light"); // Default to 'light'

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      let newTheme = prevTheme === "light" ? "dark" : "light";
      document.documentElement.classList.remove(theme);
      document.documentElement.classList.add(newTheme);
      localStorage.setItem("theme", newTheme);

      return newTheme;
    });
  }, [theme]);

  // use theme from localStorage on first load
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  //disable animation whenever the theme changes, see:
  // https://github.com/pacocoursey/next-themes/blob/main/next-themes/src/index.tsx#L225
  useEffect(() => {
    const css = document.createElement("style");
    css.appendChild(
      document.createTextNode(
        `*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
      )
    );

    document.head.appendChild(css);

    return () => {
      (() => window.getComputedStyle(document.body))();

      setTimeout(() => {
        document.head.removeChild(css);
      }, 1);
    };
  }, [theme]);

  return { theme, toggleTheme };
}
