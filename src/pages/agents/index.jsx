import UserPanelLayout from "../../components/sections/admin-panel";
import { Box } from "@mui/material";
import { useState } from "react";
import Details from "./details";
import List from "./list";
import DataTable from "./DataTable";

const pageTitle = { icon: "agents", title: "کارگزار ها" };

const AgentsPage = () => {
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

export default AgentsPage;
