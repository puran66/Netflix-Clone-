/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'sml': {'max': '639px' }, // 'min' is not needed for max-width
      },
    },
  },
  plugins: [],
};
