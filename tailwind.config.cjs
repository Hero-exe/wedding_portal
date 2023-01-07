/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-yellow': '#ffffcc',
        'light-orange': '#ffdbc9',
        'light-pink': '#fff0f5',
        'light-snow': '#fffafa',
      }
    },
  },
  plugins: [],
}
