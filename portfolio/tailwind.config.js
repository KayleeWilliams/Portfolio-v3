/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `app.{js,ts,vue}`

  ],
  theme: {
    fontFamily: {
      'body': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],

    },
    
    extend: {
      colors: {
        // primary: '#3B2B43',
        // link: '#B776DB',
        // highlight: '#EA56C1'
        primary: '#2E1540',
        link: '#F968EA',
        btn: '#212121',
        purple: {
          900: 'hsla(267, 49%, 12%, 1)',
          700: 'hsla(267, 57%, 27%, 1)',
          200: 'hsla(275, 79%, 86%, 1)',
        },
        pink: {
          200: 'hsla(314, 92%, 26%, 1)',
          500: 'hsla(308, 92%, 70%, 1)',
          600: 'hsla(316, 92%, 70%, 1)',
          700: 'hsla(320, 92%, 70%, 1)',
          900: 'hsla(308, 92%, 80%, 1)',
        },
        highlight: '#AA64C6'
      },
    },
  },
  plugins: [],
}