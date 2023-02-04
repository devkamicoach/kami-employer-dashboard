/* Helper for iOS < 12 compatibility */
function makeTWColor(name, { rel = '' } = {}) {
  return `rgba(var(--tw-color-${name}-main${rel && `-${rel}`}), <alpha-value>)`;
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  important: '#__next',
  theme: {
    extend: {
      colors: {
        'kami-green': '#66C5BF',
        'kami-white': '#FAF8F5',
        'kami-blue': '#284F73',
        'kami-gray': '#666665',
        'kami-text': '#403F3F',
        gray: {
          DEFAULT: '#5B5B66',
          dark: '#494847',
          light: '#999691',
        },
        brand: {
          1: {
            DEFAULT: makeTWColor('brand-1'),
            c: makeTWColor('brand-1', { rel: 'c' }),
          },
          2: {
            DEFAULT: makeTWColor('brand-2'),
            c: makeTWColor('brand-2', { rel: 'c' }),
          },
        },
      },
      fontFamily: {
        heading: 'Moret, serif',
        body: 'SofiaPro, sans-serif',
      },
    },
  },
};
