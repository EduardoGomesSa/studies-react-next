/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist:[
    /^bg-/,
    /^from-/,
    /^to-/,
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
