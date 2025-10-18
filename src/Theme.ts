// theme.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// Tailwind-style breakpoints
const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// 🎨 Tailwind-inspired palettes
const colors = {
  // 🌸 Soft warm background tones (from Tailwind rose + stone)
  rose: {
    50: "#fcebecff",
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af",
    400: "#fb7185",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
  },
  stone: {
    50: "#fafaf9",
    100: "#f5f5f4",
    200: "#e7e5e4",
    300: "#d6d3d1",
    400: "#a8a29e",
    500: "#78716c",
    600: "#57534e",
    700: "#44403c",
    800: "#292524",
    900: "#1c1917",
  },
  // optional Tailwind zinc palette for neutral grays
  zinc: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b",
  },
};

// 🪞 Global styles — light mode uses soft blush base, dark mode unchanged
const styles = {
  global: (props: any) => ({
    body: {
      bg: props.colorMode === "light" ? "rose.50" : "gray.900",
      color: props.colorMode === "light" ? "stone.800" : "gray.100",
      transition: "background-color 0.3s ease, color 0.3s ease",
    },
    "*": {
      borderColor: props.colorMode === "light" ? "rose.100" : "gray.700",
    },
  }),
};

const theme = extendTheme({
  config,
  colors,
  breakpoints,
  styles,
});

export default theme;

