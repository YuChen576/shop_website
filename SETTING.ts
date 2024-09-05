import { Home } from "@mui/icons-material";
import { colors } from "@mui/material";

let navBackground = "white";
const mainColor = colors.orange[500];
const secondColor = colors.blue[500];

export const setting = {
  mainColor: mainColor,
  secondColor: secondColor,
  nav: {
    background: navBackground,
    logoColor: secondColor,
    menuColor: "black",
    menuHoverColor: "red",
    menuActiveColor: mainColor,
    menuHover: {
      "&:hover": {
        color: secondColor,
        background: navBackground,
        borderBottom: `2px solid ${secondColor}`,
      },
    },
    Home: {
      background: mainColor,
    },
    products: {
      height: 700,
    },
  },
};
