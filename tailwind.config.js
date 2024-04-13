/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'sans': ["DM Sans", ...defaultTheme.fontFamily.sans],
      'mono': ["DM Mono", ...defaultTheme.fontFamily.mono]
    },
    extend: {},
  },
  plugins: [require("tailwindcss-radix-colors")],
}