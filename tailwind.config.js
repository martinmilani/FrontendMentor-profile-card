module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkCyan: "#19a2ae",
        darkblue: "#2d3248",
        grayishBlue: "#6a6f81",
        darkGrey: "#969696",
      },
      fontFamily: {
        body: ["Kumbh Sans"],
      },
      minWidth: {
        0: "0",
        min: "375px",
        max: "1440",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
