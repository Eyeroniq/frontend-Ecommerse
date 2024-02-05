/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.ts',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      scale: ['hover'], // Enable scale variant for hover
    },
  },
  plugins: [],
}

