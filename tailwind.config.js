/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      }
    },
  },
  plugins: [],
}
