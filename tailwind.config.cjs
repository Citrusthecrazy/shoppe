module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#707070",
        lightGray: "#EFEFEF",
        accent: "#A18A68",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
