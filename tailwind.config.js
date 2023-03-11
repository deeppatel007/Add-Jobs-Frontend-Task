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
        80: '320px'
      },
      width: {
        124: '124px',
        145: '577px',
        60.5: '244.5px',
        208: '830px',
        30: '118px',
        37: '147px',
        1873: '1873px',
        77: "77px",
        45: "45px",
        110: "110px",
        76: "76px",
        72: '72px',
        123: "123px",
        65: "65px",
        60: "60px",
        90: "90px",
        68: "68px"

      },
      borderRadius: {
        10: '10px',
        5: '5px'
      },
      margin: {
        85: '85px',
        30: '30px',
        49: '49px'
      },
      fontSize: {
        14: '14px'
      }
    },
  },
  plugins: [],
}
