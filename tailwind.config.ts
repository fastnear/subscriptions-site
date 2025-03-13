import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-hover": "var(--primary-hover)",
        secondary: "var(--secondary)",
        muted: "var(--muted)",
        accent: "var(--accent)",
      },
      keyframes: {
        textGlowLight: {
          '0%, 100%': { opacity: '1', filter: 'brightness(110%)' },
          '50%': { opacity: '0.9', filter: 'brightness(130%)' },
        },
        textGlowDark: {
          '0%, 100%': { opacity: '1', filter: 'brightness(200%)' },
          '50%': { opacity: '0.8', filter: 'brightness(300%)' },
        },
        squish: {
          '0%, 100%': { transform: 'scaleX(1)' },
          '0%': { transform: 'scaleX(0.6)' },
          '91%': { transform: 'scaleX(0.5) scaleY(1.3)' },
          '100%': { transform: 'scaleX(1)' }
        },
        fadeInOut: {
          '0%': { opacity: '0' },
          '10%, 90%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        colorCycle: {
          '0%': { backgroundColor: '#ff0077' },
          '50%': { backgroundColor: '#9b5de5' },
          '100%': { backgroundColor: '#ff0077' },
        },
        moveRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(16px) rotate(0deg)' },
        },
        glow: {
          '0%': { boxShadow: '1px 6px 3px rgba(255, 255, 255, 0.3)' },
          '50%': { boxShadow: '0 6px 3px rgba(255, 255, 137, 0.2)' },
          '100%': { boxShadow: '1px 6px 3px rgba(255, 255, 137, 0.3)' },
        },
        shimmerLight: {
          '0%': { textShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' },
          '50%': { textShadow: '1px 2px 3px rgba(0, 0, 0, 0.2)' },
          '100%': { textShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' },
        },
        shimmerDark: {
          '0%': { textShadow: '0px 1px 3px rgba(255, 255, 255, 0.3)' },
          '50%': { textShadow: '1px 2px 3px rgba(255, 255, 255, 0.4)' },
          '100%': { textShadow: '0px 1px 3px rgba(255, 255, 255, 0.3)' },
        }
      },
      animation: {
        'text-glow-light': 'textGlowLight 3s ease-in-out infinite',
        'text-glow-dark': 'textGlowDark 3s ease-in-out infinite',
        'fast-squish': 'squish 0.3s ease-in 1',
        'move-right-delay': 'moveRight 0.3s ease-out 0.3s forwards',
        'fade-in-out': 'fadeInOut 3s ease-in-out infinite',
        'color-cycle': 'colorCycle 5s linear infinite',
        'glow-pulse': 'glow 6.66s ease-in-out infinite',
        'shimmer-light': 'shimmerLight 3s ease-in-out infinite',
        'shimmer-dark': 'shimmerDark 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
