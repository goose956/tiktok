/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#green-50',
          500: '#green-500',
          600: '#green-600',
          700: '#green-700',
          900: '#green-900',
        }
      }
    },
  },
  plugins: [],
}