/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./**/*.{html,js}",
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
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: [],
} 