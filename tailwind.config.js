module.exports = {
  content: ["./app/**/*.{html,ejs,js}"],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 2px 6px #00000029',
      },
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT:'12px',
        }
      },
      colors: {
        'maroon': {
          DEFAULT: '#AA0601',
          'light': '#FBF2F2',
          'dark': '#650300'
        },
        'black-custom': '#212529'
      },
      fontSize: {
        sm: ['14px', '1.5'],
        base: ['16px', '1.5'],
        lg: ['20px', '1.5'],
        md: ['18px', '1.5'],
        xl: ['24px', '1.5'],
        '3xl': ['1.875rem', '1.5'],
        '4xl': ['2.25rem', '1.5'],
        '5xl': ['3rem', '1.5']
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    // function ({ addComponents }) {
    //   addComponents({
    //     '.container': {
    //       maxWidth: '100%',
    //       '@screen sm': {
    //         maxWidth: '640px',
    //       },
    //       '@screen md': {
    //         maxWidth: '720px',
    //       },
    //       '@screen lg': {
    //         maxWidth: '992px',
    //       },
    //       '@screen xl': {
    //         maxWidth: '1280px',
    //       },
    //       '@screen 2xl': {
    //         maxWidth: '1536px',
    //       },
    //     }
    //   })
    // }
  ],
}