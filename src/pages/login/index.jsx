import Grid from "@mui/material/Grid";
// import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import LoginForm from "./login-form";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import style from "./style.module.scss";

const Login = () => {
  // const { formStep } = useSelector((state) => state.login);

  // useEffect(() => {
  //   renderForm();
  // }, []);

  return (
    <Box className={style.loginContainer}>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Box
          sx={{
            width: { xs: "90%", sm: "60%", md: "32%", lg: "25%" },
          }}
          paddingY={6}
        >
          <Box
            sx={{
              borderRadius: 3,
              backgroundColor: "#ffffffc9",
            }}
          >
            <Box paddingY={2}>
              <Typography
                marginY={1}
                textAlign="center"
                variant="strong"
                component="h3"
              >
                ورود به پنل
              </Typography>
              <Typography component="p" variant="strong" textAlign="center">
                اتوماسیون پروژه های فاطر
              </Typography>
            </Box>
            <LoginForm />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Login;
