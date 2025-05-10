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
        darkblue: "#032564",
        light: "#F7F7F7",
      },
      scrollBehavior: ["responsive"],
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    function ({ addUtilities }) {
      addUtilities({
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
      });
    },
  ],
};
