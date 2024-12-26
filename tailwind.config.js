import { warn } from "console";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  dark: "class",
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
        sans: ["TT Firs Neue", "sans-serif"],
      },
      fontSize: {
        "extra-small": "0.8rem",
        small: "1.1rem",
        medium: "1.3rem",
        large: "1.6rem",
        "extra-large": "2rem",

        // new
        xxs: "9px",
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        lg_2: "20px",
        xl: "24px",
        "xl-2": "32px",
        "2xl": "36px",
        "3xl": "40px",
        "3xl-2": "48px",
        "4xl": "56px",
        "4xl-2": "72px",
      },
      colors: {
        bg_black: "#0A0A1B",
        bg_gray: "#161618",
        bg_gray_light: "#2c2c30",
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

        // new
        primary_dark_900: "#100F74",
        primary_dark_800: "#1A198C",
        primary_dark_700: "#2A28AE",
        primary_dark_600: "#3C3AD0",
        primary_dark_500: "#5350F2",

        primary_light_400: "#7D7BF7",
        primary_light_300: "#9896FB",
        primary_light_200: "#BBB9FD",
        primary_light_100: "#DDDCFE",
        primary_white: "#FFFFFF",

        success_dark_900: "#345302",
        success_dark_800: "#055467",
        success_dark_700: "#097380",
        success_dark_600: "#0D9699",
        success_default: "#12D3A8",
        success_base: "#22C55E",

        success_light_400: "#44D1BB",
        success_light_300: "#6AE8C9",
        success_light_200: "#9EF7D9",
        success_light: "#CEFBE7",

        error_dark_900: "#5F103B",
        error_dark_800: "#721A43",
        error_dark_700: "#8E2A4E",
        error_dark_600: "#AA3D5A",
        error_default: "#C65468",
        error_base: "#FF4747",

        error_light_400: "#DC7D85",
        error_light_300: "#ED9C9B",
        error_light_200: "#F9C6BF",
        error_light_100: "#FCE4DF",

        warning_dark_900: "#71eF09",
        warning_dark_800: "#88520F",
        warning_dark_700: "#A96E18",
        warning_dark_600: "#CA8B23",
        warning_default: "#ECAC31",

        warning_light_400: "#F3C762",
        warning_light_300: "#F9D982",
        warning_light_200: "#FDEAAC",
        warning_light_100: "#FEF5D5",

        information_dark_900: "#0E216E",
        information_dark_800: "#183285",
        information_dark_700: "#2A60B7",
        information_dark_600: "#3863C6",
        information_default: "#4D81E7",

        information_light_400: "#78A5F0",
        information_light_300: "#94BDF7",
        information_light_200: "#B9D6FC",
        information_light_100: "#DBECFD",

        secondary_dark_900: "#04070E",
        secondary_dark_800: "#080B11",
        secondary_dark_700: "#0D1015",
        secondary_dark_600: "#2C2C30",
        secondary_dark_500: "#1A1C1E",
        secondary_default: "#44444A",

        secondary_light_400: "#6C7278",
        secondary_light_300: "#ACB5BB",
        secondary_light_200: "#DCE4E8",
        secondary_light_100: "#EDF1F3 ",
      },
    },
  },
  plugins: [],
};
