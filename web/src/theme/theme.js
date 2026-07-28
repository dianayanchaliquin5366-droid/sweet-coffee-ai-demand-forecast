import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6B3E26",
    },

    secondary: {
      main: "#D4A373",
    },

    background: {
      default: "#F5F5F5",
      paper: "#FFFFFF",
    },
  },

  typography: {
    fontFamily: "Roboto, sans-serif",
  },

  shape: {
    borderRadius: 12,
  },
});

export default theme;