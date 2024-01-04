import { useEffect } from "react";
import { Button, Container, Grid, MenuItem } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import { useLogin } from "../../features/login/useLogin";
import { useQueryClient } from "@tanstack/react-query";
import FormTextField from "../../components/base/form-fields/text-field";
import FormSelectField from "../../components/base/form-fields/select-field";
import { userSignUpApiCall } from "../../services/api-signup-";

// import { useNavigate } from "react-router-dom";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import LockOpenIcon from "@mui/icons-material/LockOpen";

const validationSchema = yup.object({
  userName: yup.string().required("نام کاربری را وارد کنید"),
  firstName: yup.string().required("نام را وارد کنید"),
  lastName: yup.string().required("نام‌خانوادگی را وارد کنید"),
  phoneNumber: yup.string().required("تلفن را وارد کنید"),
  password: yup.string().required("رمزعبور را وارد کنید"),
  passwordRepeat: yup.string().required("تکرار رمزعبور را وارد کنید"),
});

function SignupForm() {
  const { login, isFetching } = useLogin();
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.setQueryData(["role"], "guest");
    localStorage.setItem("role", "guest");
  }, []);

  return (
    <Formik
      initialValues={
        {
          //   userName: "user",
          //   firstName: "usery",
          //   lastName: "user147",
          //   password: "147",
          // phoneNumber:'0900111',
          //   passwordRepeat: "147",
        }
      }
      onSubmit={(values) => {
        const {
          userName,
          phoneNumber,
          firstName,
          lastName,
          password,
          passwordRepeat,
        } = values;
        userSignUpApiCall({
          userName,
          firstName,
          phoneNumber,
          lastName,
          password,
          passwordRepeat,
        });
      }}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit} disabled={isFetching}>
          <Grid container spacing={2} padding={3}>
            <Grid item xs={12} md={6}>
              <FormTextField name="phoneNumber" placeholder="شماره‌تماس" />
              <FormTextField name="userName" placeholder="نام‌کاربری" />
              <FormTextField name="password" placeholder="رمز‌عبور" />
              <FormTextField
                name="passwordRepeat"
                placeholder="تکرار رمز‌عبور"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormTextField name="firstName" placeholder="نام" />
              <FormTextField name="lastName" placeholder="نام‌خانوادگی" />

              <FormSelectField name="state">
                <MenuItem value={1}>تهران</MenuItem>
                <MenuItem value={2}>البرز</MenuItem>
                <MenuItem value={3}>فارس</MenuItem>
              </FormSelectField>
              <FormSelectField name="city" placeholder="شهر">
                <MenuItem value={1}>تهران</MenuItem>
                <MenuItem value={2}>شهرری</MenuItem>
                <MenuItem value={3}>پردیس</MenuItem>
              </FormSelectField>
            </Grid>
            <Grid item xs={12}>
              <FormTextField
                name="address"
                placeholder="آدرس"
                multiline
                rows={2}
              />
            </Grid>
          </Grid>
          <Container>
            <Button
              fullWidth
              disabled={isFetching}
              variant="contained"
              type="submit"
            >
              ثبت
            </Button>
          </Container>
        </form>
      )}
    </Formik>
  );
}

export default SignupForm;
