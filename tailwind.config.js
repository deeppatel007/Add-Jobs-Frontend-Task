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
    },
    width:{
      145:'577px',
      60.5:'244.5px',
    },
    borderRadius:{
      10: '10px',
      5: '5px'
    }
    },
  },
  plugins: [],
}
