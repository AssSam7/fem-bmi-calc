/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      blue: "#345ff6",
      gunmetal: "#253347",
      "dark-electric-blue": "#5e6e85",
      "gradient-1-start": "#D6E6FE",
      "gradient-1-end": "#D6FCFE",
    },
    fontFamily: {
      sans: ["Inter", "system-ui"],
    },

    fontSize: {
      sm: ["20px", "28px"],
      md: ["24px", "40px"],
      lg: ["48px", "51px"],
      xl: ["62px", "70px"],
    },
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [],
};
