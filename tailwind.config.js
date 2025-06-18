// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        interTight: ['"Inter Tight"', 'sans-serif'],
      },
      colors: {
        bgprimary: "#1E1E1E",
        textprimary: '#E1E1E',
      },
      screens: {
        '2xl': { 'max': '1535px' },
        // => @media (max-width: 1535px) { ... }
        'xl': { 'max': '1279px' },
        // => @media (max-width: 1279px) { ... }
        'lg': { 'max': '1024px' },
        // => @media (max-width: 1024px) { ... }
        'md': { 'max': '767px' },
        // => @media (max-width: 767px) { ... }
        'sm': { 'max': '640px' },
        // => @media (max-width: 639px) { ... }
        'xs': { 'max': '412px' },
        // => @media (max-width: 410px) { ... }
      },
    },
  },
  plugins: [],
}
