/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        'custom-green': 'rgb(213, 239, 229)',
        'green-lite' : 'rgb(229,245,239)',
        'custom-box-color': 'rgb(229,199,137)'
      },
      
    },
  },
  plugins: [],
}