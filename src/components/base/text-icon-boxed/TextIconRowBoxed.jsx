import React from "react";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import SvgIconLoader from "../svg-icon-loader";

const TextIconRowBoxed = ({
  title,
  btnText,
  text,
  color,
  align = "center",
  icon,
  size,
  height,
  marginY = "1rem",
}) => {
  return (
    <Grid
      container
      className="bordered-container"
      spacing={1}
      justifyContent="space-between"
      alignContent="center"
      marginY={marginY}
      height={height}
      direction={{ xs: "column-reverse", sm: "row" }}
    >
      <Grid item xs={12} sm={10}>
        <Typography component="strong">{title}</Typography>
        <Typography>{text}</Typography>
        <Divider />
        <Box marginY={1}>
          <Button color="success">{btnText}</Button>
        </Box>
      </Grid>
      <Grid
        className="bordered-container"
        xs={1}
        item
        display="flex"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        <Box>
          <SvgIconLoader icon={icon} size={size} />
        </Box>
      </Grid>
    </Grid>
  );
};

export default TextIconRowBoxed;
