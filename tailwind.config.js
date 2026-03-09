/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0e6ff",
          100: "#d1b3ff",
          200: "#b380ff",
          300: "#944dff",
          400: "#7a26ff",
          500: "#6b1fff",
          600: "#5a1adb",
          700: "#4a14b7",
          800: "#3a0f93",
          900: "#2a0a6f",
        },
        surface: {
          dark: "#0f0a2e",
          card: "#1a1245",
          elevated: "#241b5e",
        },
        accent: {
          gold: "#f5c842",
          amber: "#ffb020",
        },
      },
    },
  },
  plugins: [],
};
