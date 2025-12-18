/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#008037',
          light: '#15a553',
          dark: '#00695c',
        },
      },
    },
  },
  plugins: [],
}

