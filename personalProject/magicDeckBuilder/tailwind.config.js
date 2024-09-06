/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        'primary': '#E6EFEC',
        'primary-dark': '#08080C',
        'gray': '#596475',
        "gold": '#ECA400',
        "gold-dark": '#CC8F00',
        'blue': '#1AC4EF',
        'blue-dark': '#0B6C99',
      }},
  },
  plugins: [],
}