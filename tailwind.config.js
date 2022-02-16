module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
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
      colors:{
        'classic-blue': '#0F4C81'
      }
    },
    borderWidth: {
      DEFAULT: '0.5px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
    },
    fill: theme => ({
      'red': theme('colors.red.500'),
      'blue': theme('colors.blue.500'),
      'green': theme('colors.green.500'),
    })
  },
  variants: {
    extend: {
      translate: ['active', 'group-hover'],
      transitionDuration: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
