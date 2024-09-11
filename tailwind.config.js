/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}", "./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      colors : {
        'bg-main' : '#00006b',
        'white': '#ffffff',
      },
  
    fontFamily : {
      'instrument-sans' : ['Instrument Sans']
    },
  },
},
  plugins: [],
}