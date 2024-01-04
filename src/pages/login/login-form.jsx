import { Button, Stack } from "@mui/material";
import * as yup from "yup";
import { Formik } from "formik";
import FormTextField from "../../components/base/form-fields/text-field";
import { useLogin } from "../../features/login/useLogin";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { theme } from "../../assets/themes/theme";
import pathes from "../../router/pathes";
// import { useNavigate } from "react-router-dom";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import LockOpenIcon from "@mui/icons-material/LockOpen";

const validationSchema = yup.object({
  userName: yup.string().required("نام کاربری را وارد کنید"),
  password: yup.string().required("رمزعبور را وارد کنید"),
});

function LoginForm() {
  const { login, isFetching } = useLogin();
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.setQueryData(["role"], "guest");
    localStorage.setItem("role", "guest");
  }, []);

  return (
    <Formik
      initialValues={{
        userName: "FaterAdmin",
        password: "fater123456",
      }}
      onSubmit={(values) => {
        const { userName, password } = values;
        login({ userName, password });
      }}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <Stack padding={3} justifyContent="center">
            <FormTextField
              disabled={isFetching}
              fieldmarbottom={1}
              name="userName"
              placeholder="نام کاربری"
              // InputProps={{
              //   startAdornment: <PersonOutlineIcon sx={{ color: "#8e8e8e" }} />,
              // }}
            />
            <FormTextField
              disabled={isFetching}
              fieldmarbottom={6}
              name="password"
              placeholder="رمزعبور"
              // InputProps={{
              //   startAdornment: <LockOpenIcon sx={{ color: "#8e8e8e" }} />,
              // }}
            />
            <Button
              disabled={isFetching}
              variant="contained"
              fullWidth
              type="submit"
            >
              ورود
            </Button>
            <Button fullWidth sx={{ marginTop: 2 }}>
              <Link
                to={pathes.SIGNUP}
                className="normal-link"
                disabled={isFetching}
                variant="outlined"
                color={theme.palette.primary.main}
              >
                درخواست عضویت
              </Link>
            </Button>
          </Stack>
        </form>
      )}
    </Formik>
  );
}

export default LoginForm;
