/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `components/**/*.{vue,js}`,
    `app.{js,ts,vue}`

  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B2B43'
      },
    },
  },
  plugins: [],
}
