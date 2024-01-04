import React from "react";
import { Box, Button, Divider, Grid, MenuItem, Stack } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import FormTextField from "../../components/base/form-fields/text-field";
import FormSelectField from "../../components/base/form-fields/select-field";
import * as yup from "yup";
import { Formik } from "formik";
import PageHeaderSection from "../../components/sections/page-header";

const validationSchema = yup.object({
  subject: yup
    .string()
    .min(3, "کوتاه تر از حداقل کاراکتر مجاز")
    .max(8, "طولانی تر از حداکثر کاراکتر مجاز ")
    .required("موضوع را وارد کنید"),
  desc: yup
    .string()
    .min(3, "کوتاه تر از حداقل کاراکتر مجاز")
    .required("توضیح  را وارد کنید"),
});

const AddTicket = ({ handleViewAdd }) => {
  // const goToList = () => {
  //   handleViewAdd("list");
  // };

  return (
    <>
      <PageHeaderSection
        search={false}
        print={false}
        handleOnLink={handleViewAdd}
        backTo={true}
        ValueOnBackBtn="list"
      />
      {/* <Box className="flexRowBetween" marginBottom={2}>
        <Button onClick={goToList}>
          <ArrowForward /> بازگشت
        </Button>
        <Divider />
      </Box> */}

      <Formik
        initialValues={{
          buildingName: "",
        }}
        onSubmit={(values) => {
          const { subject, desc } = values;
          console.log(subject, desc);
          //   dispatch(
          //     setReserveData({
          //       subject: subject,
          //       desc: desc,
          //     })
          //   );

          //   setGoToNextStep(true);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6}>
                <FormTextField
                  name="subject"
                  placeholder="موضوع پیام خود را وارد منید"
                  typolabel="موضوع"
                />
              </Grid>
              <Grid item xs={12}>
                <FormTextField
                  name="desc"
                  multiline
                  typolabel="توضیحات"
                  rows={4}
                  placeholder="اطلاعات بیشتر"
                />
              </Grid>
            </Grid>
            <Stack direction="row-reverse" marginY={1}>
              <Button variant="contained" type="submit" sx={{ width: "100px" }}>
                ارسال
              </Button>
            </Stack>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AddTicket;
