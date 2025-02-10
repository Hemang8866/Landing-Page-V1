/** @type {import('tailwindcss').Config} */
import { tokens } from "./src/styles/tokens";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: tokens.neutral,
        tan: tokens.tan,
        brown: tokens.brown,
      },
      spacing: tokens.spacing,
      fontSize: {
        largeH: tokens.heading.large.fontSize,
        large: tokens.body.large.fontSize,
        mediumH: tokens.heading.medium.fontSize,
        medium: tokens.body.medium.fontSize,
        defaultH: tokens.heading.default.fontSize,
        default: tokens.body.default.fontSize,
        smallH: tokens.heading.small.fontSize,
        small: tokens.body.small.fontSize,
        caption: tokens.body.caption.fontSize,
        accent: tokens.accent.fontSize,
      },
      fontFamily: {
        default: [tokens.body.default.fontFamily],
        alternate: [tokens.accent.fontFamily],
      },
      fontWeight: {
        regular: tokens.body.default.fontWeight,
        semibold: tokens.heading.default.fontWeight,
      },
      lineHeight: {
        heading: tokens.lineheights["tight"],
        large: tokens.body.large.lineHeight,
        default: tokens.body.default.lineHeight,
        medium: tokens.body.medium.lineHeight,
        small: tokens.body.small.lineHeight,
        caption: tokens.body.caption.lineHeight,
        accent: tokens.accent.lineHeight,
      },
      screens: {
        xs: tokens.xs,
        sm: tokens.sm,
        md: tokens.md,
        lg: tokens.lg,
        xl: tokens.xl,
      },
    },
  },
  plugins: [],
};
