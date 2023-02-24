/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require('flowbite/plugin')
  ],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'light-honeydew': '#f0fff0',
        'light-orange': '#ffdbc9',
        'light-pink': '#fff0f5',
        'light-snow': '#fffafa',
        'light-lotion': '#fffdfa',
        'light-cherry': '#feeeed',
        'light-yellow-pastel': '#FFFADA',
        'light-green': '#D0DEAB',
        'light-white-smoke': '#f5f5f5',
      }
    },
  },
  plugins: [],
}
