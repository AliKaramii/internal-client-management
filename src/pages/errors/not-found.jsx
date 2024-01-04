import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <Typography
        component="h1"
        sx={{
          paddingTop: "10%",
          textAlign: "center",
          fontSize: "50px",
          width: "100%",
        }}
      >
        404 <br />
        صفحه پیدا نشد
      </Typography>
      <Box sx={{ color: "#fff", margin: "40px auto", textAlign: "center" }}>
        <Button variant="contained">
          <Link to="/" className="normal-link">
            بر می گردم
          </Link>
        </Button>
      </Box>
    </>
  );
};

export default NotFoundPage;
