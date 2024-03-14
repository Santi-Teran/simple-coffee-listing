/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'blackk': '#111315',
        'dark-gray': '#1B1D1F',
        'gray': '#6F757C',
        'white': '#FEF7EE',
        'green': '#BEE3CC',
        'red': '#ED735D',
        'yellow': '#F6C768'
      },
      fontFamily: {
        'dm-sans': 'dm-sans'
      }
    },
  },
  plugins: [],
};
