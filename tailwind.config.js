import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import fluid, { extract, screens, fontSize } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    extract,
  },
  corePlugins: {
    container: false,
  },
  theme: {
    /** @type {import('fluid-tailwind').FluidThemeConfig} */
    fluid: ({ theme }) => ({
      defaultScreens: [theme("screens.sm"), theme("screens.xl")],
    }),
    screens, // Tailwind's default screens, in `rem`
    fontSize, // Tailwind's default font sizes, in `rem` (including line heights)
    extend: {
      colors: {
        brand: {
          primary: {
            50: "#ecf2ff",
            100: "#dde8ff",
            200: "#c2d4ff",
            300: "#9cb6ff",
            400: "#758dff",
            500: "#5162ff",
            600: "#363af5",
            700: "#2a2ad8",
            800: "#2527ae",
            900: "#262b89",
            950: "#161650",
          },
        },
      },
    },
  },
  plugins: [fluid],
};
