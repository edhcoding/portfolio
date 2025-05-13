import { FontWeightValues } from "@/types/styles";
import { createTheme } from "@mui/material/styles";

export const MOBILE_WIDTH = 700;
export const TABLET_WIDTH = 960;

export const mobileMaxWidthMediaQuery = `@media (max-width:${MOBILE_WIDTH}px)`;
export const tabletMaxWidthMediaQuery = `@media (max-width:${TABLET_WIDTH}px)`;

export default function getTheme(isMobile: boolean = false) {
  return createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: MOBILE_WIDTH,
        md: TABLET_WIDTH,
        lg: 1200,
        xl: 1600,
      },
    },
    palette: {
      primary: {
        main: "#5CC792",
        light: "#E7EFF6",
        dark: "#1e1e1e",
        contrastText: "#F9F9F9",
      },
      secondary: {
        main: "#44698C",
        light: "#CBD5E1",
      },
      success: {
        main: "#1C1C28",
        light: "#28293D",
        dark: "555770",
        contrastText: "#8F90A6",
      },
      text: {
        primary: "#334155",
        secondary: "#44698C",
        disabled: "#D7DEE5",
      },
      info: {
        main: "#334155",
      },
      warning: {
        main: "#334155",
      },
    },
    typography: {
      fontFamily: [
        "Pretendard",
        "Noto Sans KR",
        "AppleSDGothicNeo",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),

      h1: {
        fontSize: isMobile ? 32 : 50,
        fontWeight: FontWeightValues.BOLD,
        letterSpacing: "0.02em",
        lineHeight: 1.3,
      },
      h2: {
        fontSize: isMobile ? 30 : 44,
        fontWeight: FontWeightValues.BOLD,
        letterSpacing: "0.02em",
        lineHeight: 1.5,
        wordBreak: "keep-all",
      },
      h3: {
        fontSize: isMobile ? 24 : 30,
        fontWeight: FontWeightValues.BOLD,
        lineHeight: 1.5,
        wordBreak: "keep-all",
      },
      h4: {
        fontSize: isMobile ? 20 : 24,
        fontWeight: FontWeightValues.BOLD,
        lineHeight: 1.3,
        wordBreak: "keep-all",
      },
      body1: {
        fontSize: 16,
        fontWeight: FontWeightValues.MEDIUM,
        wordBreak: "keep-all",
      },
      body2: {
        fontSize: 15,
        fontWeight: FontWeightValues.MEDIUM,
      },
    },

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "5px",
            boxShadow: "none",
            textTransform: "none",
            "&:hover": {
              boxShadow: "none",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: "none",
            border: "solid 1px #E5E8EB",
            borderRadius: "5px",
          },
        },
      },
    },
  });
}
