"use client";

import { LucideMoon, LucideSun } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

import useIsMounted from "@/hooks/useIsMounted";

export default function ThemeToggler() {
  const { setTheme, theme } = useTheme();
  const isFirstMount = useIsMounted();

  const isDark = theme === "dark";

  const handleClick = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const Icon = isDark ? LucideMoon : LucideSun;

  if (!isFirstMount) {
    return;
  }

  return (
    <button onClick={handleClick}>
      <Icon />
    </button>
  );
}
