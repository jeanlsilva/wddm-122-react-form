/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '1/10': '10%'
      },
      maxWidth: {
        '1/2': '50%',
        '2/3': '66.6%',
        '3/4': '75%',
        '4/5': '80%',
        '9/10': '90%'
      }
    },
  },
  plugins: [],
}
