const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/templates/**/*.html"],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "6rem",
        md: "8rem",
        lg: "11.375rem",
        xl: "18.75rem",
        "2xl": "24.75rem",
      },
      maxWidth: {
        DEFAULT: "100%",
        sm: "448px",
        md: "512px",
        lg: "660px",
        xl: "680px",
        "2xl": "744px",
      },
    },
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "2rem",
      "4xl": "3rem",
      "5xl": "3.5rem",
    },
    extend: {
      aspectRatio: {
        "5/4": "5 / 4",
        "4/3": "4 / 3",
      },
      colors: {
        gray: {
          100: "#f8f8f8",
          200: "#f3f3f4",
          300: "#e7e8e9",
          400: "#cfd1d4",
          500: "#9fa3a9",
          600: "#6f757e",
          700: "#3f4753",
          800: "#27303e",
          900: "#0f1928",
        },
        primary2: "#F4DED1",
        primary3: "#617E7A",
      },
      fontFamily: {
        sans: ["Azo Sans", ...defaultTheme.fontFamily.sans],
      },
      skew: {
        14: "14deg",
      },
      spacing: {
        128: "32rem",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/line-clamp'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#E4B19C",
          secondary: "#6F757E",
          success: "#198754",
          error: "#F04848",
          warning: "#FAD200",
          info: "#4D69FF",
          neutral: "#0f1928",
        },
        btn: {
          fontWeight: 500,
        },
      },
    ],
  },
};
