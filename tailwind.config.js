/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [{
      kurdspex: {
        ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
        primary: '#2666CF',
        secondary: '#E42F45',
        accent: '#EEEEEE',
        neutral: '#01324B',
        'base-100': '#232323',
        warning: '#FDBD43',
        error: '#E42F45',
      }
    }, "dark"],
  },
  plugins: [require("daisyui")],
}
