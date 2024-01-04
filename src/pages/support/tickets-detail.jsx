import React from "react";
import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import SingleMessage from "./single-message";
import MessageInput from "./message-input";
import PageHeaderSection from "../../components/sections/page-header";
const TicketDetails = ({ handleViewAdd }) => {
  return (
    <>
      <PageHeaderSection
        search={false}
        print={false}
        handleOnLink={handleViewAdd}
        backTo={true}
        ValueOnBackBtn="list"
      >
        <Button color="error">پایان گفتگو</Button>
      </PageHeaderSection>
      <Box className="flexRowBetween" marginY={2}>
        <Typography>موضوع رزرو استخر</Typography>
        <Typography>عنوان: مشکل در رزرو استخر</Typography>
        <Typography>13:30 1402/11/05</Typography>
      </Box>
      <Paper sx={{ padding: 2 }}>
        <SingleMessage sender="admin" />
        <SingleMessage />
        <SingleMessage sender="admin" />
        <MessageInput />
      </Paper>
    </>
  );
};

export default TicketDetails;
