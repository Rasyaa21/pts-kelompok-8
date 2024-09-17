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
        'sea-blue' : '#1494EF',
        'secondary' : '#1393ee'
      },
  
    fontFamily : {
      'instrument-sans' : ['Instrument Sans']
    },

    keyframes: {
      'slide-down': {
        '0%': { transform: 'translateY(-100%)', opacity: '0' },
        '100%': { transform: 'translateY(0)', opacity: '1' },
      },
  },

  animation: {
    'slide-down': 'slide-down 0.5s ease-out forwards',
  },
},
  plugins: [],
}}