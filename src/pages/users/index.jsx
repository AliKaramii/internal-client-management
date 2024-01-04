import { useState } from "react";
import UserPanelLayout from "../../components/sections/admin-panel";
import { Box } from "@mui/material";
import Details from "./details";
import List from "./list";
import DataTable from "./DataTable";

const pageTitle = { icon: "users-management", title: "مدیریت کاربران" };

const UsersPage = () => {
  const [viewDetail, setviewDetail] = useState(false);
  const handleDetailsView = (val) => {
    setviewDetail(val);
  };

  return (
    <Box>
      <UserPanelLayout pageTitle={pageTitle}>
        {viewDetail ? (
          <Details handleDetailsView={handleDetailsView} />
        ) : (
          <>
            <List>
              <DataTable handleDetailsView={handleDetailsView} />
            </List>
          </>
        )}
      </UserPanelLayout>
    </Box>
  );
};

export default UsersPage;
