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
      brown: "#D1C7B8",
      grey: "#3A3A3A",
      greyHover: "#4d4d4d",
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
