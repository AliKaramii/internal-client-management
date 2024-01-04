import { Box, Typography } from "@mui/material";
import React from "react";
import { theme } from "../../../assets/themes/theme";
import SvgIconLoader from "../svg-icon-loader";

const UserPanelPageTitle = ({ children, pageIcon }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
      display="flex"
      marginBottom={2}
    >
      <SvgIconLoader icon={pageIcon} color={theme.palette.primary.main} />
      <Typography marginLeft={1} color={theme.palette.primary.main}>
        {children}
      </Typography>
    </Box>
  );
};

export default UserPanelPageTitle;
