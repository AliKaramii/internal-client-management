import React from "react";
import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import SvgIconLoader from "../svg-icon-loader";

const TextIconBoxed = ({
  title,
  btnText,
  text,
  color,
  align = "center",
  icon,
  dir = "col",
  size,
  height,
  marginY = "1rem",
}) => {
  if (dir === "row")
    return (
      <>
        <Grid
          container
          // direction={dir}
          className="bordered-container"
          spacing={1}
          justifyContent="space-between"
          alignContent="center"
          marginY={marginY}
          height={height}
        >
          <Grid item xs={11}>
            <Typography component="strong">{title}</Typography>
            <Typography>{text}</Typography>
            <Divider />
            <Box marginY={1}>
              <Button>{btnText}</Button>
            </Box>
          </Grid>
          <Grid
            xs={1}
            item
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box className="bordered-container">
              <SvgIconLoader icon={icon} size={size} />
            </Box>
          </Grid>
        </Grid>
      </>
    );
  else
    return (
      <Stack
        className="bordered-container"
        spacing={1}
        justifyContent="center"
        marginY={marginY}
        height={height}
      >
        {icon ? (
          <Box display="flex" justifyContent="center">
            <SvgIconLoader icon={icon} size={size} />
          </Box>
        ) : (
          <Typography
            marginRight={2}
            component="span"
            color={color}
            textAlign={align}
          >
            {title}
          </Typography>
        )}

        <Divider />
        <Typography
          marginRight={2}
          component="span"
          textAlign={align}
          color={color}
        >
          {text}
        </Typography>
      </Stack>
    );
};

export default TextIconBoxed;
