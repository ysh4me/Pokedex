/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    screens: {
      '2xs': '370px',
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px',
    },
    colors: {
      primary: {
        50: "#D9D3D7",
        100: "#FF916F",
        200: "#FF5948",
        300: "#333333",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

