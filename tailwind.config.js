/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
     },
     height: {
      141: '564px',
      80: '324px'
    },
    width:{
      145:'577px',
      60.5:'244.5px',
      208: '830px',
      30:'118px',
      37: '147px',
      1873: '1873px'

    },
    borderRadius:{
      10: '10px',
      5: '5px'
    },
    margin:{
      85: '85px',
      30: '30px',
      49: '49px'
    }
    },
  },
  plugins: [],
}
