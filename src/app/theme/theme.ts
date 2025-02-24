import {createTheme} from "@mui/material";
import {palette} from "./palette";

const {CARD_COLOR, CARD_BG} = palette;

const darkTheme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "initial",
          color: CARD_COLOR,
          background: CARD_BG,
          borderRadius: "initial",
        }
      }
    },
    MuiTypography: {
      defaultProps:{
        variantMapping: {
          astro: "span"
        },
      }
    }
  },
  typography: {
    astro: {
      color: "#bbffdd",
      fontFamily: "EBGaramond",
    }
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#343446",
    },
  }
});
export {darkTheme};
