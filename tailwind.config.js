/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      colors: {
        gold: '#FFD700',
        dark2: '#121212',
      },
    },
  },
  plugins: [],
};
