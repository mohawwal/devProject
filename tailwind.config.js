/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        sauce: ['"Open Sauce"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
