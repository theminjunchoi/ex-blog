module.exports = {
  content: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-3deg)'
          },
          '50%': {
            transform: 'rotate(3deg)'
          },
        }
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite'
      },
      
    },
    
  },
  // variants: {
  //   extend: {
  //     translate: ['active', 'group-hover'],
  //     transitionDuration: ['hover', 'focus'],
  //   },
  // },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}


