import { Box, Typography, Stack, Divider, Paper } from "@mui/material";
import GeneralModalSection from "../../components/sections/modal/general-modal";
import { theme } from "../../assets/themes/theme";
import SvgIconLoader from "../../components/base/svg-icon-loader";
import ButtonGroupField from "../../components/base/form-fields/btn-group";

const options = ["مالک", "ساکن", "واحد"];
const options2 = ["همه", "بستانکاران", "بدهکاران"];

const modalOptions = {
  title: "ارسال صورت حساب برای واحد ها",
  btnIcon: "send",
  // btnColor: theme.palette.primary.main,
  submitText: "ارسال",
  btnType: "add",
};

const SendBalanceModal = ({ handleClose, openFromOutside }) => {
  return (
    <GeneralModalSection
      options={modalOptions}
      openFromOutside={openFromOutside}
      closeFromOutside={handleClose}
    >
      <Stack spacing={2} paddingY={4}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={1}
          flexWrap="wrap"
        >
          <ButtonGroupField options={options} />
          <ButtonGroupField options={options2} />
        </Stack>
        <Stack
          sx={{ bgcolor: theme.palette.back.color7 }}
          padding={2}
          marginY={2}
          borderRadius={2}
        >
          <Typography>
            برای ارسال صورت حساب به واحد ها از طریق پیامک سامانه نیراسافت ،
            افراد مورد نظر را از لیست انتخاب کنید
          </Typography>
          <Box marginY={2}>
            <Divider />
          </Box>
          <Paper sx={{ overflow: "auto" }}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              margin={2}
            >
              <Stack direction="row" alignItems="center" spacing={1}>
                <Typography>ارسال به همه</Typography>
              </Stack>
            </Stack>
            <Divider />
            <Stack
              direction="row"
              justifyContent="flex-start"
              margin={2}
              spacing={8}
            >
              <Typography>واحد 11</Typography>
              <Stack direction="row" spacing={1}>
                <SvgIconLoader icon="user-square" />
                <Typography>ساکن</Typography>
              </Stack>
              <Typography>0912000000</Typography>
              <Typography>233,4554,000</Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-start"
              margin={2}
              spacing={8}
            >
              <Typography>واحد 06</Typography>
              <Stack direction="row" spacing={1}>
                <SvgIconLoader icon="user-square" />
                <Typography>ساکن</Typography>
              </Stack>
              <Typography>09121111111</Typography>
              <Typography>299,000,000</Typography>
            </Stack>
          </Paper>
        </Stack>
      </Stack>
    </GeneralModalSection>
  );
};
export default SendBalanceModal;
