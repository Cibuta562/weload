import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // WeLoad brand palette (derived from the logo)
        navy: {
          DEFAULT: "#16205b",
          50: "#eef0f7",
          100: "#d4d8ea",
          200: "#a9b1d5",
          300: "#7e8ac0",
          400: "#5363ab",
          500: "#2f3f8c",
          600: "#16205b",
          700: "#121a4a",
          800: "#0d1338",
          900: "#090d27",
        },
        orange: {
          DEFAULT: "#f15928",
          50: "#fef0eb",
          100: "#fcd7cb",
          200: "#f9af97",
          300: "#f58764",
          400: "#f37044",
          500: "#f15928",
          600: "#d4491c",
          700: "#a83817",
          800: "#7c2911",
          900: "#511b0b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: {
          "2xl": "1200px",
        },
      },
    },
  },
  plugins: [],
};

export default config;
