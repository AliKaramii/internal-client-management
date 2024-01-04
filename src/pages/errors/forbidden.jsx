import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import pathes from "../../router/pathes";

const ForbiddenAccess = () => {
  return (
    <>
      <Typography
        component="h1"
        sx={{
          paddingTop: "10%",
          textAlign: "center",
          fontSize: "26px",
          width: "100%",
        }}
      >
        <Typography fontSize={50} fontWeight={800}>
          401
        </Typography>{" "}
        <br />
        اجازه دسترسی به این بخش را ندارید
      </Typography>
      <Box sx={{ color: "#fff", margin: "40px auto", textAlign: "center" }}>
        <Button variant="contained">
          <Link to={pathes.LOGIN} className="normal-link">
            ورود به حساب کاربری
          </Link>
        </Button>
      </Box>
    </>
  );
};

export default ForbiddenAccess;
