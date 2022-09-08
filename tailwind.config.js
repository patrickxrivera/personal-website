/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sidebar-subheading': 'rgba(55, 53, 47, 0.5)',
        light: 'rgb(251, 251, 250)',
        'black-custom': 'rgba(31, 34, 37, 0.9)',
        'gray-subheading': '#64748b',
      },
      width: {
        'desktop-container': '672px',
      },
    },
  },
  plugins: [],
}
