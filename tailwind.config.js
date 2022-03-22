module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        infoCardBreakpoint: "1280px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
