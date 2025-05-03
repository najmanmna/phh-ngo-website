export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#224d2f",
        secondary: "#64c76a",
        dark: "#1E1E1E",
        light: "#F7F7F7",
      },
      scrollBehavior: ["responsive"],
    },
  },
  plugins: [],
};
