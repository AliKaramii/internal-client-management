import React from "react";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import PageHeaderSection from "../../components/sections/page-header";
import BtnIcon from "../../components/base/btn-icon";
import SvgIconLoader from "../../components/base/svg-icon-loader";
import FiltersModal from "../../components/sections/filters";
import { theme } from "../../assets/themes/theme";

const options = ["مالک", "ساکن", "واحد"];

const Details = ({ handleView }) => {
  const goToList = () => {
    handleView(false);
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Button onClick={goToList}>
          <ArrowForward /> بازگشت
        </Button>

        <Box>
          <PageHeaderSection search={false} divider={false}>
            <BtnIcon size={48} borderRadius={1}>
              <SvgIconLoader size={32} icon="printer" />
            </BtnIcon>
            <FiltersModal />
          </PageHeaderSection>
        </Box>
      </Stack>
      <Divider />
      <Box>
        <Box marginY={4}>
          <Typography textAlign="center">صورت وضعیت واحد 44</Typography>
          <Divider color={theme.palette.primary.main} />
        </Box>
        <SampleDetailsRow />
        <SampleDetailsRow />
        <SampleDetailsRow />
        <SampleDetailsRow />
      </Box>
    </>
  );
};

const SampleDetailsRow = () => {
  return (
    <Box paddingY={1}>
      <Stack direction="row" justifyContent="space-between">
        <Stack spacing={2}>
          <Typography textAlign="center">شارژ واحد</Typography>
          <Typography textAlign="center">1402/11/02</Typography>
        </Stack>
        <Stack alignItems="center">
          <Typography textAlign="center">212,222,000</Typography>
        </Stack>
      </Stack>
      <Divider />
    </Box>
  );
};
export default Details;
