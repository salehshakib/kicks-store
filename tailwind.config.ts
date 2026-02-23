import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["var(--font-rubik)"],
        sans: ["var(--font-nunito-sans)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        kicks: {
          blue: "#234FE0",
          accent: "#FFA52F",
          black: "#232321",
          white: "#FFFFFF",
          gray: {
            100: "#F6F6F6",
            200: "#E7E7E3",
            300: "#C4C4C4",
            500: "#70706E",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
