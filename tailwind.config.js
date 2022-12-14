/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }
    },
    container:{
        center:true,
        padding:'1rem'
    },
  variants:{
    extend: {
      display:['group-hover'],
      visibility:['group-hover'],
    },

  }
   
  },
  plugins: [ require('@tailwindcss/forms')],
}