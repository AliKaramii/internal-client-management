import React from "react";
import { Box, Button, Divider, Stack } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import PageHeaderSection from "../../components/sections/page-header";
import FiltersModal from "../../components/sections/filters";
import ScrollableTabsButtonForce from "./tabs";
import Tab from "@mui/material/Tab";
import UserPanelLayout from "../../components/sections/admin-panel";
import { Link } from "react-router-dom";
import pathes from "../../router/pathes";

const options = ["پروژه", "مالی"];

const Details = ({ handleDetailsView }) => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button variant="outlined" onClick={() => handleDetailsView(false)}>
          <ArrowForward /> بازگشت
        </Button>
        <Box>
          <PageHeaderSection search={false} printer={true} divider={false}>
            <FiltersModal />
          </PageHeaderSection>
        </Box>
      </Stack>
      <Divider />
      <ScrollableTabsButtonForce>
        <Tab label="مالی" />
        <Tab label="پروژه" />
      </ScrollableTabsButtonForce>
    </>
  );
};

export default Details;
