import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Typography,
  Container,
  Divider,
  Grid,
} from "@mui/material";
import pathes from "../../../router/pathes";
import CircularProgressWithLabel from "../../../components/base/charts/circle-progress";

const BoxSample = ({ progress, title }) => {
  return (
    <Container
      sx={{
        border: "1px solid lightgray",
        borderRadius: "0.5rem",
        height: "304px",
        padding: "1rem",
      }}
    >
      <Box className="flexRowBetween">
        <Box className="flexRowBetween">
          <img src="" />
          <Typography>{title}</Typography>
        </Box>
      </Box>
      <Divider />
      <Grid container spacing={2} marginY={2}>
        <Grid item xs={12} md={8}></Grid>
        <Grid item xs={12} md={4} display="flex" justifyContent="center">
          <CircularProgressWithLabel value={progress} size={150} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default BoxSample;
