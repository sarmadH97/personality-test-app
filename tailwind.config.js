/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: '#031333',
      secondary: '#67F8AE',
      dimWhite: '#C8C8C8',
      dimBlue: '#11203F'
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

