/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
      screens: {
        "mix": '320px',
        'xs': '576px', // Ekstra kichik o'lcham
        'sm': '576px', // Kichik ekranlar (mobil)
        'md': '768px', // O'rta ekranlar (tablet)
        'lg': '992px', // Katta ekranlar (laptop)
        'xl': '1200px', // Juda katta ekranlar (desktop)
        '2xl': '1600px', // Katta desktoplar
      }
    },
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  }
  