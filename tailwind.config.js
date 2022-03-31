module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      beige: "#ECE8DD",
      beigeHover: "hsl(44, 28%, 92%)",
      brown: "#DFD5CB",
      grey: "#3A3A3A",
      greyHover: "hsl(0, 0%, 30%)",
      darkGrey: "hsl(0, 0%, 20%)",
      black: "#000000",
    },
    fontFamily: {
      'imbue': "'Imbue', serif",
      'mina': "'mina', serif",
      'roboto': "'Roboto', sans-serif",
      'slab': "'Roboto Slab', serif",
    },
    backgroundImage: {
      'heroBg': "url('/img/bg.jpg')",
      'heroBg2': "url('/img/bg2.jpg')",
      'heroBg3': "url('/img/bg3.jpg')",
      'heroBg4': "url('/img/bg4.jpg')",
      'heroBg5': "url('/img/bg5.jpg')",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
