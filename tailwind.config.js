/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryblue: "#004DB3",
        primarygray: "#E7E7E7",
        primaryblack: "#000F24",
        lightblue: "#AAC4E6",
        coregray: "#A1A1A1",
        coreblack: "#2A2A2B"
      },
      fontFamily: {
        "font-satoshi": ["Satoshi", "sans-serif"],
        "font-prclash": ["Clash Display", "sans-serif"],
      }
    },
  },
  plugins: [],
}
