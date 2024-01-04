import { Divider, Grid, MenuItem, Typography } from "@mui/material";
import { theme } from "../../assets/themes/theme";
import FormModalSection from "../../components/sections/modal/form-modal";
import FormTextField from "../../components/base/form-fields/text-field";
import FormSelectField from "../../components/base/form-fields/select-field";
import * as yup from "yup";

const validationSchema = yup.object({
  projectName: yup
    .string()
    .min(3, "کوتاه تر از حداقل کاراکتر مجاز")
    .max(8, "طولانی تر از حداکثر کاراکتر مجاز ")
    .required("واحد ساختمان را وارد کنید"),
  flors: yup
    .string()
    .min(3, "کوتاه تر از حداقل کاراکتر مجاز")
    .required("مبلغ را وارد کنید"),
});

const modalOptions = {
  title: "افزودن پروژه جدید",
  btnIcon: "add",
  btnColor: theme.palette.primary.main,
  submitText: "تایید",
  validationSchema,
};

const AddProjectModal = () => {
  return (
    <FormModalSection options={modalOptions}>
      <Grid container spacing={2} marginBottom={4}>
        <Grid item xs={12}>
          <Typography color="primary">مشخصات پروژه</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormTextField
            name="projectName"
            placeholder="برج ایرانیان"
            typolabel="نام پروژه"
          />
          <FormTextField
            name="city"
            placeholder="11"
            typolabel="سرویس های مورد نیاز"
          />
          <FormTextField name="flors" placeholder="11" typolabel="طبقات" />
          <FormSelectField name="sep" typolabel="کاربری">
            <MenuItem value={1}>اداری</MenuItem>
            <MenuItem value={2}>تجاری</MenuItem>
            <MenuItem value={3}>مسکونی</MenuItem>
          </FormSelectField>
          <FormTextField
            name="city"
            placeholder="11"
            typolabel="فاصله هر واحد تا رایزر"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormTextField name="city" placeholder="تهران" typolabel="شهر" />
          <FormTextField name="city" placeholder="11" typolabel="استان" />
          <FormTextField name="city" placeholder="11" typolabel="شماره تماس" />
          <FormTextField
            name="city"
            placeholder="11"
            typolabel="فضای داخل هر واحد"
          />
          <FormTextField
            name="city"
            placeholder="11"
            typolabel="تعداد واحد در هر طبقه"
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
      <Grid container spacing={2} marginBottom={4}>
        <Grid item xs={12}>
          <Typography color="primary">مشخصات مالک</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormTextField name="city" placeholder="11" typolabel="نام مالک" />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormTextField
            name="city"
            placeholder="11"
            typolabel="شماره تماس مالک"
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} marginBottom={4}>
        <Grid item xs={12}>
          <Typography color="primary">مشخصات کارگزار</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormTextField name="city" placeholder="11" typolabel="نام کارگزار" />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormTextField name="city" placeholder="11" typolabel="کد کارگزار" />
        </Grid>
      </Grid>

      {/* <Box>
          <FormTextField
          id="date"
          name="date"
          typolabel="تاریخ"
          className="dateTime-input"
          InputProps={{
            endAdornment: (
              <>
                  <CustomDatePicker setChosenDate={setChosenDate} />
                  <InputAdornment position="end">
                  <DateRangeIcon />
                  </InputAdornment>
                </>
              ),
            }}
            />
          </Box> */}
    </FormModalSection>
  );
};
export default AddProjectModal;
