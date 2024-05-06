const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: 'selector',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transblue: "#5BCEFA",
        transpink: "#F5A9B8",
      },
      backgroundImage: {
        sitebackground: "url('/assets/bg.png')",
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        nunito: ['Nunito', 'Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
