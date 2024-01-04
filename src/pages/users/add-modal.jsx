import { Box, Button, Grid, InputAdornment, MenuItem } from "@mui/material";
import { theme } from "../../assets/themes/theme";
import FormModalSection from "../../components/sections/modal/form-modal";
import FormTextField from "../../components/base/form-fields/text-field";
import FormSelectField from "../../components/base/form-fields/select-field";
import CustomDatePicker from "../../components/base/custom-date-Time/date-picker";
import { useState } from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import * as yup from "yup";
import { registerUser } from "../../services/api-test";

const validationSchema = yup.object({
  unit: yup
    .string()
    .min(3, "کوتاه تر از حداقل کاراکتر مجاز")
    .max(8, "طولانی تر از حداکثر کاراکتر مجاز ")
    .required("واحد ساختمان را وارد کنید"),
  price: yup
    .string()
    .min(3, "کوتاه تر از حداقل کاراکتر مجاز")
    .required("مبلغ را وارد کنید"),
});

const modalOptions = {
  title: "ایجاد کاربر جدید",
  btnIcon: "add",
  btnColor: theme.palette.primary.main,
  submitText: "تایید",
  validationSchema,
};

const AddAgentModal = () => {
  const [chosenDate, setChosenDate] = useState("");

  return (
    <>
      <FormModalSection options={modalOptions}>
        <Grid item xs={12} md={6}>
          <FormTextField name="name" placeholder="نام" typolabel="نام" />
          <FormSelectField name="status" typolabel="وضعیت">
            <MenuItem value={1}>فعال</MenuItem>
            <MenuItem value={2}>غیر فعال</MenuItem>
          </FormSelectField>
          <FormSelectField name="state" typolabel="استان">
            <MenuItem value={1}>تهران</MenuItem>
            <MenuItem value={2}>البرز</MenuItem>
            <MenuItem value={3}>فارس</MenuItem>
          </FormSelectField>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormTextField name="city" placeholder="شهر" typolabel="شهر" />
          <FormTextField name="tel" placeholder="شهر" typolabel="تلفن" />
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
        <Button variant="contained" onClick={registerUser}>
          registerUser
        </Button>
      </FormModalSection>
    </>
  );
};
export default AddAgentModal;
