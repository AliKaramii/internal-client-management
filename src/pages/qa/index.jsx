import React, { useEffect, useState } from "react";
import UserPanelLayout from "../../components/sections/admin-panel";
import { Box } from "@mui/material";
import { theme } from "../../assets/themes/theme";
import CustomAccordion from "../../components/common/CustomAccordion/CustomAccordion";

const pageTitle = { icon: "qa", title: "سوالات متداول" };

const QaPage = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    // fetchData("/qa").then((fetchedData) => {
    //   return setData(fetchedData);
    // });
  }, []);

  return (
    <>
      <Box>
        <UserPanelLayout pageTitle={pageTitle}>
          <Box sx={{ bgcolor: theme.palette.back.light9, width: "100%" }}>
            {data && <CustomAccordion data={data} />}
          </Box>
        </UserPanelLayout>
      </Box>
    </>
  );
};

export default QaPage;
