"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "./Button";
import { LuSun, LuMoon } from "react-icons/lu";
import { cn } from "@/libs/utils";

interface ThemeToggleProps {
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, theme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className={cn(className)}
    >
      <LuSun className="absolute rotate-0 h-7 w-7 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <LuMoon className="absolute rotate-90 h-7 w-7 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
