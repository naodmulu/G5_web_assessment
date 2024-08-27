/** @type {import('tailwindcss').Config} */
const nextConfig = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'im-fell': ['IM Fell French Canon', 'serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};

module.exports = nextConfig;
