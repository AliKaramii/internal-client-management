import PageHeaderSection from "../../components/sections/page-header";
import FiltersModal from "../../components/sections/filters";
import { Box, Typography } from "@mui/material";

const List = ({ children }) => {
  return (
    <>
      <PageHeaderSection search={true} print={true} backTo="/">
        <FiltersModal />
      </PageHeaderSection>
      <Box>
        <Typography marginY={2} textAlign="center">
          مالی
        </Typography>
        {children}
      </Box>
    </>
  );
};

export default List;
