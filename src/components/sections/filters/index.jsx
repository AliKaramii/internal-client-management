import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import MenuItem from "@mui/material/MenuItem";
import { Box } from "@mui/system";
import {
  Button,
  Container,
  Grid,
  InputAdornment,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import DateRangeIcon from "@mui/icons-material/DateRange";
import FormTextField from "../../../components/base/form-fields/text-field";
import FormSelectField from "../../../components/base/form-fields/select-field";
import CustomDatePicker from "../../../components/base/custom-date-Time/date-picker";
import BtnIcon from "../../../components/base/btn-icon";
import SvgIconLoader from "../../../components/base/svg-icon-loader";
import { theme } from "../../../assets/themes/theme";

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, "کوتاه تر از حداقل کاراکتر مجاز")
    .max(300, "طولانی تر از حداکثر کاراکتر مجاز ")
    .required("نام ساختمان را وارد کنید"),
});

const FiltersModal = () => {
  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState("");
  const [chosenDate, setChosenDate] = useState("");

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Stack direction="row" justifyContent="flex-end">
        <BtnIcon onClick={handleOpen} size={48} borderRadius={1}>
          <SvgIconLoader size={32} icon="filter" />
        </BtnIcon>
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-tittle"
        aria-describedby="modal-body"
      >
        <Box className="modal">
          <Box id="modal-tittle" className="modalTitle">
            <Typography variant="p" component="h3">
              فیلترها
            </Typography>
          </Box>
          <Container className="formSection">
            <Box marginTop={3}>
              <Formik
                initialValues={{
                  buildingName: "",
                }}
                onSubmit={(values) => {
                  const { name } = values;
                  console.log(name);
                  //   dispatch(
                  //     setReserveData({
                  //       name: name,
                  //       phone: phone,
                  //       unitId: unitId,
                  //       payment: payment,
                  //     })
                  //   );

                  //   setGoToNextStep(true);
                }}
                validationSchema={validationSchema}
              >
                {(formik) => (
                  <form onSubmit={formik.handleSubmit}>
                    {/* <Container>
                      <Grid container spacing={2} minHeight="54vh">
                        <Grid item xs={12} md={6}>
                          <Typography color="primary">واحد</Typography>
                          <FormTextField name="unit" placeholder="22" />

                          <Typography color="primary">مبلغ</Typography>
                          <FormTextField name="price" placeholder="60000" />

                          <Typography color="primary">نوع بدهی</Typography>
                          <FormSelectField name="type">
                            <MenuItem value={1}>شارژ ساختمان</MenuItem>
                            <MenuItem value={2}>تعمیرات آسانسور</MenuItem>
                            <MenuItem value={3}>نظافت</MenuItem>
                          </FormSelectField>
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <Typography color="primary">تفکیک</Typography>
                          <FormSelectField name="sep">
                            <MenuItem value={1}>واحد</MenuItem>
                            <MenuItem value={2}>مالک</MenuItem>
                            <MenuItem value={3}>ساکن</MenuItem>
                          </FormSelectField>
                          <Typography marginTop={4} color="primary">
                            تاریخ
                          </Typography>
                          <FormTextField
                            id="date"
                            name="date"
                            className="dateTime-input"
                            InputProps={{
                              endAdornment: (
                                <>
                                  <CustomDatePicker
                                    setChosenDate={setChosenDate}
                                  />
                                  <InputAdornment position="end">
                                    <DateRangeIcon />
                                  </InputAdornment>
                                </>
                              ),
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Typography color="primary">توضیحات</Typography>
                          <FormTextField
                            name="desc"
                            multiline
                            rows={2}
                            placeholder="اطلاعات بیشتر"
                          />
                        </Grid>
                      </Grid>
                    </Container> */}
                    <Box className="flexRowEnd" marginY={2}>
                      <Button onClick={handleClose}>لغو</Button>
                      <Button type="submit" color="success">
                        تایید
                      </Button>
                    </Box>
                  </form>
                )}
              </Formik>
              {/* </form> */}
            </Box>
          </Container>
        </Box>
      </Modal>
    </>
  );
};
export default FiltersModal;
