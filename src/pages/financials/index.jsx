import UserPanelLayout from "../../components/sections/admin-panel";
import { Box } from "@mui/material";
import { useState } from "react";
import List from "./list";
import DataTable from "./DataTable";
const pageTitle = { icon: "incom", title: "مالی" };

const FinancialPage = () => {
  const [viewDetail, setviewDetail] = useState(false);

  const handleView = (val) => {
    setviewDetail(val);
  };

  return (
    <Box>
      <UserPanelLayout pageTitle={pageTitle}>
        <List>
          <DataTable />
        </List>
      </UserPanelLayout>
    </Box>
  );
};

export default FinancialPage;
