/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // colors: {
      //   // Configure your color palette here
      //   transparent: 'transparent',
      //   current: 'currentColor',
      //   'white': '#ffffff',
      //   'black': '#000000',

      //   'blue': {
      //     900: '#1e3a8a',
      //   },

      //   'gray': {
      //     200: '#e5e7eb',
      //     300: '#d1d5db',
      //   },

      // },
    },
  },
  plugins: [],
}