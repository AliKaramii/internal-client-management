import UserPanelLayout from "../../components/sections/admin-panel";
import { Box } from "@mui/material";
import Details from "./detail";
import List from "./list";
import { useState } from "react";
import DataTable from "./DataTable";

const pageTitle = { icon: "projects", title: "پروژه ها" };

const ProjectsPage = () => {
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

export default ProjectsPage;
