/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#005ae2',
        'primary-light': '#E6F0FF',
        'primary-dark': '#004bc9',
        'logo-blue': '#005ae2'
      }
    }
  },
  plugins: [],
} 