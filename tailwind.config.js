/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        custom_bg: "#7a919d", // ← custom color name and hex
      },
      keyframes: {
        "pulse-once": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "pulse-once": "pulse-once 0.4s ease-in-out",
      },
    },
  },
  plugins: [],
};
