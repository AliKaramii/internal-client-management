import { Divider, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const AlertDialog = ({ open, handleClose, handleOpen }) => {
  return (
    <div>
      <Dialog
        padding={2}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Typography padding={2} margin={2}>
          {" آیا از حذف این مورد اطمینان دارید؟"}
        </Typography>
        <Divider />
        {/* <DialogContent>
          <DialogContentText id="alert-dialog-description">
            آیا از حذف این مورد اطمینان دارید؟
          </DialogContentText>
        </DialogContent> */}
        <DialogActions>
          <Button onClick={handleClose}>لغو</Button>
          <Button color="error" onClick={handleClose} autoFocus>
            حذف
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
