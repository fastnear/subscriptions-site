"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { THEME_CONFIG } from "../theme-config";

type ThemeProviderProps = React.PropsWithChildren<Parameters<typeof NextThemesProvider>[0]>;

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={THEME_CONFIG.defaultTheme}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
} 