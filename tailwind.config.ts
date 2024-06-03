import type { Config } from "tailwindcss";
import { addDynamicIconSelectors } from "@iconify/tailwind";

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
      gridTemplateColumns: {
        signup: "1fr 3fr 1fr",
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.3",
          },
        },
        gradient: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "100%": {
            backgroundPosition: "100% 50%",
          },
        },
      },
      animation: {
        gradient: "gradient 6s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), addDynamicIconSelectors()],
};
export default config;
