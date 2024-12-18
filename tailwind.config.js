/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      clipPath: {
        polygon:
          "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)", // Custom polygon shape
      },
      animation: {
        fadeouttopright: "fade-out-top-right 1s ease-in-out 0.25s 1",
      },
      fontFamily: {
        lilita: ["Lilita One", "sans-serif"],
      },
      fontSize: {
        "extra-small": "0.8rem",
        small: "1.1rem",
        medium: "1.3rem",
        large: "1.6rem",
        "extra-large": "2rem",
      },
      colors: {
        bg_black: "#1D1B20",
        bg_gray: "#2c2c2c",
        bg_gray_light: "#3c3c3c",
        text_activate_dark: "#1E1E1E",
        text_deactivate: "#49454F",
        text_deactivate_light: "#757575",
        text_activate: "#E7E0EC",
        text_normal: "#A09E9E",
        text_dark: "#929292",

        color_gray_white: "#CECECE",
        color_green_dark: "#167900",
        color_green: "#2DF400",
        color_red: "#FF2727",
        color_yellow_dark: "#BA7F00",
        color_yellow_light: "#F1A500",
        color_pink: "#6B20A8",
      },
    },
  },
  plugins: [],
};
