const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.neutral,
          1000: "rgb(15,15,15)",
        },
        cyan: colors.cyan,
        "light-blue": colors.sky,
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      maxWidth: {
        "8xl": "96rem",
        "9xl": "110rem",
        "10xl": "128rem",
      },
    },
    screens: {
      ...defaultTheme.screens,
      "2xl": "1600px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
