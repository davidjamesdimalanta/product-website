/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'red-800': '#da100f',
        'red-900': '#7a0b0b',
      },
      fontFamily: {
        FuzzyBubbles : ["Fuzzy Bubbles", "cursive"],
        NotoSansLaoLooped : ["Noto Sans Lao Looped", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        Poppins : ["Poppins", "sans-serif"],
      },
      keyframes: {
        'fadeIn': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'fadeLate': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        }
      },
      animation: {
        'fadeIn': 'fadeIn 0.8s ease-in-out',
        'fadeLate': 'fadeLate 3s ease-in-out',
      }
    },
  },
  plugins: [
    require('tailwindcss-intersect')
  ],
}
