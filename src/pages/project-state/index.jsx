import UserPanelLayout from "../../components/sections/admin-panel";
import { Box, Typography } from "@mui/material";
import ProjectProcess from "../../components/common/project-proccess";

const pageTitle = { icon: "project-state", title: "وضعیت پروژه" };

const ProjectStatePage = () => {
  return (
    <Box>
      <UserPanelLayout pageTitle={pageTitle}>
        <Typography>تاریخچه روند پروژه</Typography>
        <ProjectProcess />
      </UserPanelLayout>
    </Box>
  );
};

export default ProjectStatePage;
