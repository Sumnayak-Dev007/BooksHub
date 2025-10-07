import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const Confi: ThemeConfig ={
    initialColorMode: 'dark',
    useSystemColorMode: false,
};

const breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "992px",
  xl: "1280px",
  "2xl": "1536px",
};


const theme = extendTheme({Confi},breakpoints,)

export default  theme