/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Helvetica: "",
      },
      backgroundImage: {
        landingImg: "url('/public/assets/Landing page image.svg')",
        cake: "url('/public/assets/Birthday cake.png')",
      },
    },
  },
  plugins: [],
};
