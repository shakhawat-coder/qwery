// /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      maxWidth: {
        
      },
      colors:{
        navcolour:"#ffffff99",
        'bannerclr':"#FFC178",
        'smheder':"#FBD784",
      },
      fontFamily:{
        'opensans': "'Open Sans', sans-serif;",
      },
      backgroundImage: {
        'bannerbg': "url('./images/banner.jpg')",
         'startbg': "url('./images/cta.png')",
      },
    },
  },
  plugins: [],
}

