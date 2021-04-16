const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');


  // most of them are not used, just for test

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightBlue: colors.lightBlue,
        cyan: colors.cyan,
        blueGray: colors.blueGray,
        trueGray: colors.trueGray,
        coolGray: colors.coolGray,
        warmGray: colors.warmGray,
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        violet: colors.violet,
        fuchsia: colors.fuchsia,
        rose: colors.rose,
        mysticGray: '#545454', // galaxy note20 colors
        mysticGreen: '#7e9c89',
        mysticBronze: '#9e756a',
      },
      transitionProperty: {
        height: 'height',
       },
      spacing: {
        '0.25': '1px',
        '18': '4.5rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
      },
      height: {
        '0.25': '1px',
        '1px': '1px',
        'xs': '20rem',
        'sm': '24rem',
        'md': '28rem',
        'lg': '32rem',
        'xl': '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '90-screen': '90vh',
        '85-screen': '85vh',
        '80-screen': '80vh',
        '75-screen': '75vh',
      },
      width: {
        'xs': '20rem',
        'sm': '24rem',
        'md': '28rem',
        'lg': '32rem',
        'xl': '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '7xl': '80rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
        '1/2-screen': '50vw',
        '1/3-screen': '33.3333333vw',
        '2/3-screen': '66.6666666vw',
        '1/4-screen': '25vw',
        '1/5-screen': '20vw',
        '2/5-screen': '40vw',
        '3/5-screen': '60vw',
        '4/5-screen': '80vw',
        '1/6-screen': '16.6666666vw',
        '85-screen': '85vw',
        '90-screen': '90vw',
        '95-screen': '95vw',
      },
      borderWidth: {
      },
      strokeWidth: {
        '1.5': '1.5', // used
      },
      // fontFamily: {
      //   quicksand: ['Quicksand', 'sans-serif']
      // },
      margin: {
        '-1/2': '-50%',
        '-120': '-30rem',
        '-116': '-29rem',
        '-112': '-28rem',
        '-108': '-27rem',
        '-104': '-26rem',
      },
      backgroundOpacity: {
        '15': '0.15',
      },
      inset: {
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
        '-84': '-21rem',
        '-88': '-22rem',
        '-92': '-23rem',
        'mid-45': '45%',
        'mid-42': '42%',
        'mid-40': '40%',
        '1/2-screen': '50vw',
        '1/3-screen': '33.3333333vw',
        '2/3-screen': '66.6666666vw',
        '1/4-screen': '25vw',
        '1/5-screen': '20vw',
        '2/5-screen': '40vw',
        '3/5-screen': '60vw',
        '4/5-screen': '80vw',
        '1/6-screen': '16.6666666vw',
      },
      animation: {
        'scale-line': 'scale-line 5s linear 0.5s',
        'scale-circle': 'scale-circle 5s linear 0.5s',
      },
      keyframes: {
        'scale-line': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'scale-circle': {
          '0%': { transform: 'scaleX(0.99)' }, // used in slider sm-screen
          '100%': { transform: 'scaleX(1)' },
        },
      },
      transitionDelay: {
        0: '0ms',
        200: '200ms',
        350: '350ms',
        400: '400ms',
        2000: '2000ms',
      },
      transitionDuration: {
        0: '0ms',
        400: '400ms',
        1500: '1500ms',
        2000: '2000ms',
        3000: '3000ms',
        5000: '5000ms',
      },
    },
  },
  variants: {
    extend: {
      ringWidth: ['hover'],
      ringColor: ['hover'],
      boxShadow: ['hover', 'focus'],
      scale: ['hover', 'focus', 'group-hover'],
      translate: ['responsive', 'hover', 'focus', 'group-hover'],
      fontWeight: ['responsive', 'hover', 'focus', 'group-hover'],
      strokeWidth: ['responsive', 'hover', 'focus', 'group-hover', 'focus-within'],
      width: ['responsive', 'hover', 'focus', 'group-hover', 'focus-within'],
      display: ['responsive', 'hover', 'focus', 'group-hover'],
      visibility: ['responsive', 'hover', 'focus', 'group-hover'],
      backgroundColor: ['odd', 'even'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/forms'),
    
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.animation-play-paused': {
          '-moz-animation-play-state': 'paused',
          '-o-animation-play-state': 'paused',
          '-webkit-animation-play-state': 'paused',
          'animation-play-state': 'paused',
        },
      };

      addUtilities(newUtilities, [
        'responsive',
        'hover',
        'focus',
        'group-hover',
        'focus-within',
      ]);
    }),


  ],
};
