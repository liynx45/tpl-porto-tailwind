/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'blok-main': "url('./img/drop-blok.png')",
      }
    },
  },
  plugins: [],
}

