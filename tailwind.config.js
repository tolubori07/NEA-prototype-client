/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      main: '#ff6b6b',
      mainAccent: '#ff3333', // not needed for shadcn components
      overlay: 'rgba(0,0,0,0.8)', // background color overlay for alert dialogs, modals, etc.

      // light mode
      bg: '#DFE5F2',
      text: '#2F2F2F',
      border: '#000',

      // dark mode
      darkBg: '#1D1F27',
      darkText: '#eeefe9',
      darkBorder: '#000',
      secondaryBlack: '#1b1b1b', // opposite of plain white, not used pitch black because borders and box-shadows are that color 
    },
    borderRadius: {
      base: '5px'
    },
    boxShadow: {
      light: '5px 5px 0px 0px #000',
      dark: '5px 5px 0px 0px #000',
    },
    translate: {
      boxShadowX: '4px',
      boxShadowY: '4px',
      reverseBoxShadowX: '-4px',
      reverseBoxShadowY: '-4px',
    },
    fontWeight: {
      base: '500',
      heading: '900',
    },
  },
    fontFamily: {
      'display': ['"Chunky Retro"'],
      'body': ['SF Compact Display'],
    }
},
  plugins: [],
}
