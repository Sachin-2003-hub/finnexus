"use client";

import { useEffect, useState } from "react";
import { Sun, Moon, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = stored ? stored === "dark" : prefersDark;
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle("dark", shouldUseDark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const setDefault = () => {
    // remove stored preference so site follows system preference
    try {
      localStorage.removeItem("theme");
    } catch (e) {
      /* ignore */
    }
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="default"
          aria-label="Toggle theme"
          className="border-input bg-background dark:bg-input/30 dark:border-input text-foreground flex items-center gap-2"
        >
          {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          <span className="hidden sm:inline">Change theme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-44">
        <div className="flex flex-col gap-2">
          <Button variant="ghost" onClick={toggle} className="justify-start">
            {isDark ? (
              <span className="flex items-center gap-2"><Moon className="h-4 w-4" /> Set light theme</span>
            ) : (
              <span className="flex items-center gap-2"><Sun className="h-4 w-4" /> Set dark theme</span>
            )}
          </Button>

          <Button variant="ghost" onClick={setDefault} className="justify-start">
            <span className="flex items-center gap-2"><RefreshCw className="h-4 w-4" /> Set to default theme</span>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}


