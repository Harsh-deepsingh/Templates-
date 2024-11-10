import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary_dark: "#212121",
        primary_light: " #94a3b8",
        //Theme_blue: "#00AEFF",
        "theme-secondary": "#9e2e3b",
        //make a condition render that if the theme-secondary is darker shared then make the text light
      },
    },
  },
  plugins: [],
};
export default config;
