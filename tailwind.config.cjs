/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gray: {
            1: "#818181"
          }
        }
      }
    },
  },
  plugins: [],
}
