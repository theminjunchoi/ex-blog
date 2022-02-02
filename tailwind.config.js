module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: { (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: '#0F4C81'
            },
            h2: {
              color: '#0F4C81'
            },
            h3: 
            {color: '#0F4C81'
          },
            h4: {
              color: '#0F4C81'
            },
          }
        }
      })
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
