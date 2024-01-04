import { createTheme } from "@mui/material/styles";

const colors = {
  // primary: "#6a14d1",
  primary: "#7E59EE",
  primColor2: "#440083",
  hover: "#e8d4ff",
  secColor: "#c82090",
  secColor2: "#fe9192",
  secColor3: "#77cfdb",
  secColor4: "#26ab6d",
  secColor5: "#ed5254",
  secColor7: "#f5cd00",
  color1: "#343633",
  color2: "#444444",
  color3: "#707070",
  color4: "#8e8e8e",
  color5: "#b6b6b680",
  color6: "#ffffff",
  color7: "#f5f5f5",
  color8: "#f0f0f0",
  color9: "#fafafa",
  color10: "#e5e5e5",
  color11: "#B7B7B7",
  color12: "#FFEEEE",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.primColor2,
    },
    text: {
      light: colors.color9,
      dark: colors.color2,
    },
    menu: {
      back: colors.color8,
      tables: colors.color9,
    },
    back: {
      color6: colors.color6,
      light8: colors.color8,
      light9: colors.color9,
      color10: colors.color10,
      selected: colors.primary,
      success: colors.secColor4,
      danger: colors.secColor5,
      hover: colors.hover,
      color7: colors.color7,
      secondary: colors.secColor7,
    },
    border: {
      dark1: colors.color5,
      secColor: colors.secColor,
      color12: colors.color12,
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "mainIconTitle",
          },
          style: {
            color: colors.primary,
            fontSize: "1.2rem",
            fontWeight: "600",
            paddingLeft: "4px",
            borderTop: "6px solid transparent",
            borderBottom: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderLeft: `8px solid ${colors.primary}`,
            borderRadius: "5px",
            textAlign: "left",
          },
        },
        {
          props: {
            variant: "mainTitle",
          },
          style: {
            color: colors.primary,
            fontSize: "1.2rem",
            fontWeight: "600",
          },
        },
        {
          props: {
            variant: "mainTitle2",
          },
          style: {
            color: colors.primary,
            fontSize: "1rem",
            fontWeight: "600",
          },
        },
        {
          props: {
            variant: "normalBody",
          },
          style: {
            fontSize: "16px",
          },
        },
        {
          props: { variant: "smallBody" },
          style: { fontSize: "14px" },
        },
        {
          props: { variant: "dangerText" },
          style: { color: "red" },
        },
        {
          props: { variant: "successText" },
          style: { color: "green" },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: {
            variant: "outlined",
          },
          style: {
            // border: "2px solid",
            // borderImage: "linear-gradient(to bottom, #6A14D1, #c82090) 8",
            borderRadius: "8px",
          },
        },
      ],
    },
  },
});
