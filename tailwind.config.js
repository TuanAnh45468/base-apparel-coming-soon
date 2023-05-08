/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      "desaturated-red": "hsl(0, 36%, 70%)",
      "soft-red": "hsl(0, 93%, 68%)",
      "dark-grayish-red": "hsl(0, 6%, 24%)",
    },
    screens: {
      mobile: "375px",
      laptop: "1440px",
    },
    extend: {
      fontFamily: {
        "josefin-sans": ["Josefin Sans", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        "semi-bold": 600,
      },
      backgroundImage: {
        "gradient-white-to-light-red":
          "linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%))",
        "gradient-light-red-to-red":
          "linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%))",
      },
    },
  },
  plugins: [],
};
