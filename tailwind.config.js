/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/*.{html,js}"],
  theme: {
    extend: {
      colors:
      {
        english_violet:"#5F4B66",
        wheat: '#EEE2DC',
        gray: '#BAB2B5',
        blue: '#BADFE7',
        blue2: '#697184',
        pink: '#D8CFD0',
        bg: '#B1A6A4',
        bgDark: '#413F3D',
      },
    },
  },
  plugins: [],
}

