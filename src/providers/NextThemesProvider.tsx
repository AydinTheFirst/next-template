"use client";

import { ThemeProvider, ThemeProviderProps } from "next-themes";
import React from "react";

export default function NextThemesProvider({
  children,
}: React.PropsWithChildren) {
  const props = {
    attribute: "class",
    enableSystem: true,
  } satisfies ThemeProviderProps;

  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
