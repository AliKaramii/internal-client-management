import { Close } from "@mui/icons-material";
import { IconButton, Stack, Typography } from "@mui/material";

function ModalHeaderSection({ handleClose, title }) {
  return (
    <Stack
      id="modal-tittle"
      className="modalTitle"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography>{title}</Typography>
      <IconButton onClick={handleClose} color="error">
        <Close />
      </IconButton>
    </Stack>
  );
}

export default ModalHeaderSection;
