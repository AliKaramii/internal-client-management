import { Box, Divider, Stack, Typography } from "@mui/material";
import { theme } from "../../../assets/themes/theme";
import SvgIconLoader from "../../base/svg-icon-loader";

function FileDetailsBox({ data }) {
  const { title, desc, date } = data;
  return (
    <Box
      className="bordered-container"
      sx={{ bgcolor: theme.palette.back.color7 }}
    >
      <Stack direction="row" alignItems="center">
        <Box
          sx={{
            bgcolor: theme.palette.back.hover,

            width: "36px",
            height: "36px",
            marginRight: 1,
            marginBottom: 1,
            borderRadius: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SvgIconLoader
            color={theme.palette.primary.main}
            icon="circle-arrow-down"
          />
        </Box>
        <Typography>{title}</Typography>
      </Stack>
      <Divider />
      <Stack spacing={2} marginY={1}>
        <Typography>{desc}</Typography>
        <Typography textAlign="right">{date}</Typography>
      </Stack>
    </Box>
  );
}

export default FileDetailsBox;
