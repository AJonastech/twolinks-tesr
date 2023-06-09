/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkTheme: "#12253f",
        blue : "#2e7be5",
        cardgray: "#dbdfea",
        cardgray1: "#c0cbde",
        navDark: "#142d4e",
        lightBlue: "#6f99cd",
        button: "#132a46",
        login : "#333333"
      },
      fontFamily : {
        poppins: ['Poppins','sans-serif'],
      }
    },
  },
  plugins: [],
}
