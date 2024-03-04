import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        rounds: ["var(--font-rounds)"],
        avenir: ["var(--font-avenir-next)"],
      },
      borderRadius: {
        DEFAULT: "25px",
      },
      boxShadow: {
        DEFAULT:
          "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      },
      backgroundColor: {
        primary: "var(--colour-primary-bg)",
        secondary: "var(--colour-secondary-bg)",
        highlight: "var(--colour-highlight-bg)",
      },
      colors: {
        primary: "var(--colour-primary-text)",
        secondary: "var(--colour-secondary-text)",
        highlight: "var(--colour-highlight-text)",
        primaryBrand: "var(--colour-primary-brand)",
        secondaryBrand: "var(--colour-secondary-brand)",
      },
      spacing: {
        nav: "var(--nav-height)",
      },
    },
  },
  plugins: [],
};
export default config;
