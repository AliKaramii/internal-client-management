import { Box, Stack, Typography } from "@mui/material";
import { theme } from "../../../assets/themes/theme";

function ProcessItem({ data }) {
  const { step, stepTitle, desc, date } = data;
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        bgcolor: theme.palette.back.color7,
        paddingX: 3,
        paddingY: 2,
        marginY: 1,
        borderRadius: 1,
      }}
      flexWrap="wrap"
    >
      <Stack direction="row" spacing={1}>
        <Box
          sx={{
            bgcolor: theme.palette.back.hover,

            paddingX: 1,
            width: "24px",
            height: "24px",
            margin: 1,
            borderRadius: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography color="primary">{step}</Typography>
        </Box>
        <Typography>{stepTitle}</Typography>
      </Stack>
      <Box>
        <Typography>{desc}</Typography>
      </Box>
      <Box>
        <Typography>{date}</Typography>
      </Box>
    </Stack>
  );
}

export default ProcessItem;
