import { Container } from "@mui/material";
import { theme } from "../../../assets/themes/theme";

function ModalBodySection({ children }) {
  return (
    <Container
      className="formSection"
      sx={{
        border: `1px solid ${theme.palette.border.dark1}`,
        borderRadius: "4px  4px 0 0",
        paddingY: 4,
      }}
    >
      {children}
    </Container>
  );
}

export default ModalBodySection;
