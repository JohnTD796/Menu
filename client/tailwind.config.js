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
      onyx: '#333333',
      eerieBlack: '#1D2020',
      darkGrey: '#1F1F1F',
      black: '#000000'
    },
    extend: {},
  },
  plugins: [],
}

