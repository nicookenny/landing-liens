/** @type {import('tailwindcss').Config} */

// add this: ['#3B1E11', '#C27646', '#C26327', '#42191D', '#1C130E'];
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3B1E11',
        secondary: '#C27646',
        tertiary: '#C26327',
        quaternary: '#42191D',
        quinary: '#1C130E',
      },
    },
  },
  plugins: [],
};
