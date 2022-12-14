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
            1: "#818181",
            2: "#7A7478"
          },
          green: {
            1: "#51AA97"
          },
          blue: {
            1: "#3B61FF"
          }
        }
      },
      height: {
        110: "32rem",
        128: "40rem",
      },
    },
  },
  plugins: [],
}
