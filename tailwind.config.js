const colors = require('tailwindcss/colors');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
  extend: {
      fontFamily: {
        'open-sans': '"Open Sans", Helvetica, Arial, sans-serif',
      },
      colors: {
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink,
        rose: colors.rose,
        primary:'#00bcd4',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
