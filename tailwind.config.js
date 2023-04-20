/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{html,js}'],
   theme: {
      colors: {
         purple: 'hsl(259, 100%, 65%)',
         'light-red': 'hsl(0, 100%, 67%)',
         white: 'hsl(0, 0%, 100%)',
         'off-white': 'hsl(0, 0%, 94%)',
         'light-grey': 'hsl(0, 0%, 86%)',
         'smokey-grey': 'hsl(0, 1%, 44%)',
         'off-black': 'hsl(0, 0%, 8%)',
      },
      fontFamily: {
         sans: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
      },
      extend: {
         backgroundImage: {
            submitButton: "url('/assets/images/icon-arrow.svg')",
         },
      },
      screens: {
         mobile: '300px',
         desktop: '900px',
      },
   },
   plugins: [],
};
