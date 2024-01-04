import PageHeaderSection from "../../components/sections/page-header";
import FiltersModal from "../../components/sections/filters";
import AddProjectModal from "./add-modal";
import { Box, Typography } from "@mui/material";

const List = ({ children }) => {
  return (
    <>
      <PageHeaderSection search={true} print={true} backTo="/">
        <FiltersModal />
        <AddProjectModal />
      </PageHeaderSection>
      <Box>
        <Typography marginY={2} textAlign="center">
          لیست پروژه ها
        </Typography>
        {children}
      </Box>
    </>
  );
};

export default List;
