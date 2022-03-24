module.exports = {

  theme: {
    colors: {
      'gray-light': '#E5E5E5'
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'rotate(-2deg)'
          },
          '50%': {
            transform: 'rotate(2deg)'
          },
        }
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out infinite'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}