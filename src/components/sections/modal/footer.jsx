import { Box, Stack } from "@mui/material";
import { theme } from "../../../assets/themes/theme";

function ModalFooterSection({ children }) {
  return (
    <Stack
      direction="row-reverse"
      spacing={1}
      sx={{
        backgroundColor: theme.palette.back.light9,
        border: `1px solid ${theme.palette.border.dark1}`,
        borderRadius: "0 0 4px 4px",
        padding: 1,
        borderTop: "none",
      }}
    >
      {children}
    </Stack>
  );
}

export default ModalFooterSection;
