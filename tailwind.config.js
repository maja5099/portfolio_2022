module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scale: {
        '115': '1.15',
      },
      height: {
        '5.5': '1.3rem',
      },
      width: {
        '5.5': '1.3rem',
      },
      transitionDuration: {
        '900': '900ms',
      },
      spacing: {
        '5px': '0.313rem',
        '10px': '0.625rem',
        '15px': '0.938rem',
        '20px': '1.25rem',
        '25px': '1.563rem',
      },
      letterSpacing: {
        spacingP: '.2em',
        spacingH3: '.2em',
        spacingH2: '.315em',
      },
      lineHeight: {
        'myHeight': '1.875rem',
      },
    },
    colors: {
      beige: "#DBD2C4",
      beigeHover: "hsl(44, 28%, 92%)",
      brown: "#D1C7B8",
      // brown: "#DFD5CB",
      grey: "#3A3A3A",
      greyHover: "hsl(0, 0%, 30%)",
      darkGrey: "hsl(0, 0%, 20%)",
      black: "#000000",
    },
    fontFamily: {
      'sheffield': "'mrsheffield-pro', sans-serif",
      'imbue': "'Imbue', serif",
      'mina': "'mina', serif",
      'roboto': "'Roboto', sans-serif",
      'slab': "'Roboto Slab', serif",
      'lato': "'Lato', sans-serif",
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
