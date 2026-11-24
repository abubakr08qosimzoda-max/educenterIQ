import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#10172A",
          light: "#19223B",
          dark: "#090E1B",
        },
        electric: {
          DEFAULT: "#526BFF",
          light: "#6F84FF",
          dark: "#3B54E6",
        },
        orange: {
          DEFAULT: "#FF7547",
          light: "#FF8F69",
          dark: "#E55A2B",
        },
        cream: {
          DEFAULT: "#F8F5EF",
          dark: "#EFEAE0",
        },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "var(--font-manrope)", "sans-serif"],
        display: ["var(--font-manrope)", "var(--font-jakarta)", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
