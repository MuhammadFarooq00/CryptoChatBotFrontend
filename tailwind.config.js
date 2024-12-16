/* eslint-disable no-undef */
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [],
};

