export const THEME = {
  DARK: 'dark',
  LIGHT: 'light',
  SYSTEM: 'system',
} as const;

export type Theme = typeof THEME[keyof typeof THEME];

export const THEME_CONFIG = {
  defaultTheme: THEME.LIGHT,
  attribute: 'class',
  enableSystem: true,
} as const;

// Asset paths based on theme
export const THEME_ASSETS = {
  logo: {
    [THEME.DARK]: '/fastnear_logo_white.png',
    [THEME.LIGHT]: '/fastnear_logo_black.png',
  },
  github: {
    [THEME.DARK]: '/github-mark-white.svg',
    [THEME.LIGHT]: '/github-mark.svg',
  },
} as const; 