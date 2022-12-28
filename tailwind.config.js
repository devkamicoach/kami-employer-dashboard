/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'kami-green': '#66C5BF',
        'kami-white': '#FAF8F6',
        'kami-blue': '#284F73',
        'kami-gray': '#666665',
      },
      fontFamily: {
        heading: 'Moret, serif',
        body: 'Graphik, sans-serif',
      },
    },
  },
  plugins: [],
};
