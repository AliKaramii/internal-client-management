import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const SingleMessage = ({ sender }) => {
  let senderColor;
  let boxDirection;
  if (sender === "admin") {
    senderColor = "#DBC7F4";
    boxDirection = "row";
  } else {
    senderColor = "#FFED93";
    boxDirection = "row-reverse";
  }

  return (
    <Grid container direction={boxDirection}>
      <Grid item xs={12} sm={6}>
        <Box
          sx={{
            borderRadius: "16px",
            marginTop: "16px",
            padding: "16px",
            border: `1px solid ${senderColor}`,
          }}
        >
          <Typography>
            لورم ایپسون یک متن آزمایشی است لورم و یک متن پیش فرض آزمایشی است
          </Typography>
          <Typography textAlign="right" marginY={1}>
            ۹:۳۰
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
export default SingleMessage;
