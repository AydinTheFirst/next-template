"use client";

import { useTheme } from "next-themes";
import React from "react";
import { Toaster, ToasterProps } from "sonner";

export default function ToastProvider() {
  const { theme } = useTheme();

  const props = {
    theme: theme as ToasterProps["theme"],
  } satisfies ToasterProps;

  return <Toaster {...props} richColors />;
}
