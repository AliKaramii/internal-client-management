import { Box, Button, Typography } from "@mui/material";
import SvgIconLoader from "../../base/svg-icon-loader";
import { theme } from "../../../assets/themes/theme";

function AddBuildingBtn({ handleOpen }) {
  return (
    <Button
      onClick={handleOpen}
      sx={{
        minHeight: "314px",
        width: "100%",
        border: "1px dashed gray",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SvgIconLoader icon="add" color={theme.palette.primary.main} size={32} />
      <Typography marginTop={2}>ایجاد ساختمان</Typography>
    </Button>
  );
}

export default AddBuildingBtn;
