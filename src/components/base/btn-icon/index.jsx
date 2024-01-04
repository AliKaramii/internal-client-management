import { Button } from "@mui/material";
import SvgIconLoader from "../svg-icon-loader";
import { theme } from "../../../assets/themes/theme";

function BtnIcon({
  background,
  children,
  variant = "outlined",
  size = 44,
  color = theme.palette.primary.main,
  icon,
  onClick,
  // hoverBg = "#e8d4ff",
  hoverBg = "#f5cd004d",
  borderRadius = 4,
}) {
  return (
    <Button
      variant={variant}
      sx={{
        background: background,
        width: 48,
        height: 48,
        minWidth: size,
        border: "none",
        borderRadius: borderRadius,
        padding: 0,
        "&:hover": { border: "none", backgroundColor: hoverBg },
      }}
      onClick={onClick}
    >
      {children ? (
        children
      ) : (
        <SvgIconLoader icon={icon} size={size} color={color} />
      )}
    </Button>
  );
}

export default BtnIcon;
