"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { THEME_CONFIG } from "../theme-config";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      {...THEME_CONFIG}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
} 