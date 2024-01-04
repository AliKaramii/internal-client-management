import { Box, Button, Container, Stack, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
import style from "./style.module.scss";
import SignupForm from "./signup-form";
import pathes from "../../router/pathes";
import { theme } from "../../assets/themes/theme";
import { Link } from "react-router-dom";

const Signup = () => {
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
            width: { xs: "90%", sm: "60%", md: "42%", lg: "45%" },
          }}
          paddingY={6}
        >
          <Box
            paddingBottom={3}
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
                درخواست عضویت
              </Typography>
              <SignupForm />
              <Container>
                <Button fullWidth sx={{ marginTop: 2 }}>
                  <Link
                    to={pathes.LOGIN}
                    className="normal-link"
                    // disabled={isFetching}
                    variant="outlined"
                    color={theme.palette.primary.main}
                  >
                    ورود با حساب کاربری
                  </Link>
                </Button>
              </Container>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Signup;
