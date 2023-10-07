/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        pitchBlack: '#000000', 
      },
      fontFamily: {
        bloodcrow : ['blood-crow', 'sans-serif'],  // after you font, add some fonts separated by commas to handle fallback.
      }
    },
  },
  plugins: [],
}

