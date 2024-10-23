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
          '0%, 100%': { opacity: 1, filter: 'brightness(200%)' },
          '50%': { opacity: 0.8, filter: 'brightness(300%)' },
        },
        squish: {
          '0%, 100%': { transform: 'scaleX(1)' },
          '0%': { transform: 'scaleX(0.6)' },
          // '10%, 90%': { transform: 'scaleX(0.4) scaleY(1.2)' },
          '91%': { transform: 'scaleX(0.5) scaleY(1.3)' },
          '100%': { transform: 'scaleX(1)' }
        },
        moveRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(1.3rem) rotate(0deg)' },
        },
      },
      animation: {
        'text-glow': 'textGlow 2s ease-in-out infinite',
        'fast-squish': 'squish 1.5s ease-in-out 1',
        'move-right-delay': 'moveRight 0.3s ease-in-out 1.4s forwards',
      },
    },
  },
  plugins: [],
};
export default config;
