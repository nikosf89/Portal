/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-new-blue": "#0582ca",
        "color-inf":"#D7F1F5"
      } ,
     },
  },
  plugins: [],
}