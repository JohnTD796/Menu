/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/**/*.jsx",
    "./src/**/*.jsx",
    "./src/*.jsx",
    "*"],
  // './src/**/*.{js,jsx,ts,tsx}', './public/index.html'
  // './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'
  // "./index.html",
  //   "./src/**/**/*.jsx",
  //   "./src/**/*.jsx",
  //   "./src/*.jsx",
  //   "*"
  darkMode: 'class',
  theme: {
    colors: {
      white: '#FBFCFF',
      onyx: '#353B3B',
      eerieBlack: '#1D2020',
    },
    extend: {},
  },
  plugins: [],
}

