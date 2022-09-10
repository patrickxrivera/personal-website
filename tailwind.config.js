/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['SFProRounded', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'sidebar-subheading': 'rgba(55, 53, 47, 0.5)',
        light: 'rgb(251, 251, 250)',
        'black-custom': 'rgba(31, 34, 37, 0.9)',
        'gray-subheading': '#64748b',
      },
      width: {
        'desktop-container': '672px',
        'md-container': '600px',
      },
      animation: {
        'splash-screen': 'splash-screen 0.75s ease-in-out',
        'fade-in': 'fade-in 0.5s ease-in',
      },
      keyframes: {
        'splash-screen': {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
}
