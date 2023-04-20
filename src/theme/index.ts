import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const textSize = {
  xs: {
    fontSize: "12px",
    lineHeight: "18px",
  },
  sm: {
    fontSize: "16px",
    lineHeight: "24px",
  },
  md: {
    fontSize: "20px",
    lineHeight: "30px",
  },
  lg: {
    fontSize: "24px",
    lineHeight: "36px",
  },
  xl: {
    fontSize: "32px",
    lineHeight: "48px",
  },
  "2xl": {
    fontSize: "42px",
    lineHeight: "63px",
  },
};

const theme = extendTheme({
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
  },
  components: {
    Heading: {
      sizes: textSize,
    },
    Text: {
      sizes: textSize,
    },
  },
  colors: {
    black: "#041E44",
    white: "#FFFFFF",
    personalDark: {
      100: "#1E4D85",
      200: "#072852",
      300: "#041E44",
    },
    personalLight: {
      100: "#FFFFFF",
      200: "#3E6296",
      300: "#A5CAFF",
    },
  },
  config,
  styles: {
    global: ({ colorMode }: StyleFunctionProps) => ({
      body: {
        bg: colorMode === "light" ? "white" : "black",
        color: colorMode === "light" ? "black" : "white",
      },
    }),
  },
});

export default theme;
