import React, { useState } from "react";
import UserPanelLayout from "../../components/sections/admin-panel";
import { Box } from "@mui/material";
import TicketList from "./tickets-list";
import TicketDetails from "./tickets-detail";
import AddTicket from "./add-ticket";

const pageTitle = { icon: "support", title: "پشتیبانی" };

const SupportPage = () => {
  const [viewDetail, setviewDetail] = useState("list");

  const handleViewAdd = (val, id) => {
    setviewDetail(val);
  };

  return (
    <>
      <Box>
        <UserPanelLayout pageTitle={pageTitle}>
          {viewDetail === "details" && (
            <TicketDetails handleViewAdd={handleViewAdd} />
          )}
          {viewDetail === "list" && (
            <TicketList handleViewAdd={handleViewAdd} />
          )}
          {viewDetail === "add" && <AddTicket handleViewAdd={handleViewAdd} />}
        </UserPanelLayout>
      </Box>
    </>
  );
};

export default SupportPage;
