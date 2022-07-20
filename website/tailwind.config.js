/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
    colors: {
      primary: '#ea4c89',
      light: '#f082ac'
    },
    fill: {
      current: '#ea4c89',
    },
  },
  plugins: [],
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
}
