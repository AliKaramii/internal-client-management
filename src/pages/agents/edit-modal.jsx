import { useState } from "react";
import { Box, Grid, MenuItem, InputAdornment } from "@mui/material";
import FormModalSection from "../../components/sections/modal/form-modal";
import FormTextField from "../../components/base/form-fields/text-field";
import FormSelectField from "../../components/base/form-fields/select-field";
import CustomDatePicker from "../../components/base/custom-date-Time/date-picker";
import DateRangeIcon from "@mui/icons-material/DateRange";

const modalOptions = {
  title: "ویرایش اطلاعات کارگزار",
  // btnColor: theme.palette.primary.main,
  submitText: "تایید",
  btnType: "fromOutside",
};

const EditAgentModal = ({ handleClose, openFromOutside }) => {
  const [chosenDate, setChosenDate] = useState("");
  return (
    <FormModalSection
      options={modalOptions}
      openFromOutside={openFromOutside}
      closeFromOutside={handleClose}
    >
      <Grid item xs={12} md={6}>
        <FormTextField name="unit" placeholder="22" typolabel="واحد" />
        <FormTextField name="price" placeholder="60000" typolabel="مبلغ" />
        <FormSelectField name="type" typolabel="نوع بدهی">
          <MenuItem value={1}>شارژ ساختمان</MenuItem>
          <MenuItem value={2}>تعمیرات آسانسور</MenuItem>
          <MenuItem value={3}>نظافت</MenuItem>
        </FormSelectField>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormSelectField name="sep" typolabel="تفکیک">
          <MenuItem value={1}>واحد</MenuItem>
          <MenuItem value={2}>مالک</MenuItem>
          <MenuItem value={3}>ساکن</MenuItem>
        </FormSelectField>
        <Box>
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
        </Box>
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
    </FormModalSection>
  );
};
export default EditAgentModal;
