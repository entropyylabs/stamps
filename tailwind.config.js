/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        goldenrod: "#ffc022",
        black: "#000",
        gray: {
          100: "#262626",
          200: "rgba(0, 0, 0, 0.85)",
          300: "rgba(0, 0, 0, 0.54)",
          400: "rgba(0, 0, 0, 0.58)",
        },
        orangered: "#f24e1e",
        white: "#fff",
        mediumblue: "#3a00e5",
      },
      fontFamily: { "work-sans": "'Work Sans'" },
    },
    fontSize: {
      base: "12px",
      lg: "14px",
      xl: "16px",
      "2xl": "20px",
      "3xl": "24px",
      "4xl": "32px",
    },
  },
  plugins: [],
}
