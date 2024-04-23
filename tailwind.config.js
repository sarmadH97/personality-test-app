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
      animation: {
        blob: "blob 4s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

