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
      colors: {
        primary: "#17457a",
        cover: "#e9ebea",
        gray: "#797d82"
      },
      fontSize: {
        xs: ["12px", "16px"],
        sm: ["14px", "20px"],
        md: ["14px", "16px"],
        base: ["16px", "30px"],
        lg: ["20px", "24px"],
        xl: ["24px", "32px"],
        "xl-2": ["28px", "32px"],
        "2xl": ["36px", "44px"],
        "3xl": ["48px", "56px"],
        "4xl": ["64px", "80px"],
      },
      screens: {
        sm: "320px",
        md: "768px",
        lg: "1280px",
        xl: "1440px",
        xxl: "1536px",
      },
    },
  },
  plugins: [],
};
export default config;
