// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Paleta
        primary: "#000000",
        whiteish: "#F9F9F9",
        gray: "#646464",
        grayLight: "#A7A7A7",
        grayDark: "#333333",
        brand: "#E85002",

        // Gradiente (HEX)
        g1: "#000000",
        g2: "#C10801",
        g3: "#F16001",
        g4: "#D9C3AB",
      },
      boxShadow: {
        soft: "0 0 0 1px rgba(249,249,249,0.06)",
      },
    },
  },
  plugins: [],
} satisfies Config;
