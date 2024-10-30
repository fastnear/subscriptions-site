import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/_components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      keyframes: {
        textGlow: {
          '0%, 100%': { opacity: '1', filter: 'brightness(200%)' },
          '50%': { opacity: '0.8', filter: 'brightness(300%)' },
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
      },
      animation: {
        'text-glow': 'textGlow 3s ease-in-out infinite',
        'fade-in-out': 'fadeInOut 3s ease-in-out infinite',
        'color-cycle': 'colorCycle 5s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
