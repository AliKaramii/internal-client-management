import { Typography } from "@mui/material";
import DataTable from "./DataTable";
import PageHeaderSection from "../../components/sections/page-header";
import SvgIconLoader from "../../components/base/svg-icon-loader";
import { theme } from "../../assets/themes/theme";
import BtnIcon from "../../components/base/btn-icon";

const TicketList = ({ handleViewAdd }) => {
  const handleView = () => {
    handleViewAdd("add");
  };

  return (
    <>
      <PageHeaderSection search={false} print={false} backTo="/">
        <BtnIcon
          onClick={handleView}
          size={48}
          borderRadius={1}
          hoverBg="#e8d4ff"
        >
          <SvgIconLoader
            icon="add"
            size={32}
            color={theme.palette.primary.main}
          />
        </BtnIcon>
      </PageHeaderSection>
      <Typography marginY={2} textAlign="center">
        لیست پیام ها
      </Typography>
      <DataTable onRowClick={handleViewAdd} />
    </>
  );
};

export default TicketList;
