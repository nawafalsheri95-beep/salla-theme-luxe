/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/views/**/*.twig',
    './src/assets/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['var(--font-main)', 'DINNextLTArabic-Regular', 'Dubai', 'sans-serif'],
      },
      colors: {
        primary: 'var(--color-primary)',
        'primary-dark': 'var(--color-primary-dark)',
        'primary-light': 'var(--color-primary-light)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}