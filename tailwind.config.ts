import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        blanc: "#f2ede9",
        lifesomme: {
          DEFAULT: "#22ba3a",
          100: "#038f2d",
          200: "#08853d",
          300: "#6b803f",
          400: "#bb6d3a",
          500: "#c18c64",
          600: "#ba7987",
          700: "#b262a7",
          800: "#a353b0",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
