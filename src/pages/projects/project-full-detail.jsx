import { Button, Grid, MenuItem, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Formik } from "formik";
import FormTextField from "../../components/base/form-fields/text-field";
import FormSelectField from "../../components/base/form-fields/select-field";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import LockOpenIcon from "@mui/icons-material/LockOpen";

const validationSchema = yup.object({
  userName: yup.string().required("نام کاربری را وارد کنید"),
  password: yup.string().required("رمزعبور را وارد کنید"),
});

function ProjectFullDetail() {
  return (
    <Formik
      initialValues={{
        userName: "",
        password: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={validationSchema}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <Stack padding={3} justifyContent="center">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <FormTextField
                  name="projectDame"
                  placeholder="نام پروژه"
                  typolabel="نام پروژه"
                />
                <FormSelectField name="state" typolabel="استان">
                  <MenuItem value={1}>تهران</MenuItem>
                  <MenuItem value={2}>البرز</MenuItem>
                  <MenuItem value={3}>فارس</MenuItem>
                </FormSelectField>
                <FormSelectField name="city" typolabel="شهر">
                  <MenuItem value={1}>تهران</MenuItem>
                  <MenuItem value={2}>البرز</MenuItem>
                  <MenuItem value={3}>فارس</MenuItem>
                </FormSelectField>
                <FormTextField
                  name="projectDame"
                  placeholder="نام پروژه"
                  typolabel="نام پروژه"
                />
                <FormTextField
                  name="projectDame"
                  placeholder="کدکارگزار"
                  typolabel="کدکارگزار"
                />
                <FormTextField
                  name="projectDame"
                  placeholder="تعداد طبقات"
                  typolabel="تعداد طبقات"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <FormTextField
                  name="projectDame"
                  placeholder="تاریخ"
                  typolabel="تاریخ"
                />
                <FormTextField
                  name="projectDame"
                  placeholder="نام کارگزار"
                  typolabel="نام کارگزار"
                />
                <FormSelectField name="status" typolabel="وضعیت کارگزار">
                  <MenuItem value={1}>فعال</MenuItem>
                  <MenuItem value={2}>غیر فعال</MenuItem>
                </FormSelectField>
                <FormTextField name="city" placeholder="شهر" typolabel="شهر" />
                <FormTextField name="tel" placeholder="شهر" typolabel="تلفن" />
                <FormTextField
                  name="projectDame"
                  placeholder="نام مالک پروژه"
                  typolabel="نام مالک پروژه"
                />
              </Grid>
              <Grid item xs={12}>
                <FormTextField
                  name="desc"
                  multiline
                  typolabel="توضیحات"
                  rows={2}
                  placeholder="اطلاعات بیشتر"
                />
              </Grid>
            </Grid>
            <Stack alignItems="flex-end">
              <Button variant="contained" type="submit" sx={{ width: "100px" }}>
                تایید
              </Button>
            </Stack>
          </Stack>
        </form>
      )}
    </Formik>
  );
}

export default ProjectFullDetail;
