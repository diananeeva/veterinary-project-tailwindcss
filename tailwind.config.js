/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'header-yellow': '#d9ab00',  
        'custom-yellow': '#fbc301', 
        'main-yellow': '#fcc302',
        'custom-blue': '#00bdc9',
        'text-blue': '#313243', 
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [],
}

