/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}", "./src/**/*.{html,js,css}"],
  theme: {
    extend: {
      backgroundImage:{
        'element-3d':"url(/src/img/image.png)",
      },
      colors : {
        'bg-main' : '#00006b',
        'white': '#ffffff',
        'white-grayish' : '#F4F4F4',
      },
  
    fontFamily : {
      'instrument-sans' : ['Instrument Sans']
    },
  },
},
  plugins: [],
}