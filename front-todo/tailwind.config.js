// Crie este arquivo na raiz do projeto
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'todo': {
          50: '#31568b',
          100: '#F0E7FF',
          200: '#D9C6FF',
          300: '#B794F4',
          400: '#9F7AEA',
          500: '#805AD5',
          600: '#6B46C1',
          700: '#553C9A',
          800: '#44337A',
          900: '#322659',
        },
      },
    },
  },
  plugins: [],
}