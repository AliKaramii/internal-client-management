import UserPanelLayout from "../../../components/sections/admin-panel";
import { Box, Container, Grid } from "@mui/material";
import TextIconBoxed from "../../../components/base/text-icon-boxed";
import BoxSample from "./box-sample";
import TextIconRowBoxed from "../../../components/base/text-icon-boxed/TextIconRowBoxed";

const pageTitle = { icon: "dashboard", title: "داشبورد" };
const sampleData = [
  {
    title: "هزینه کل پرداختی ها",
    text: "124.124.000 ریال",
  },
  {
    title: "هزینه بدهی",
    text: "124.124.000 ریال",
  },
  {
    title: "وضعیت بستانکار",
    text: "124.124.000 ریال",
  },
];

const SuperAdminDashboardPage = () => {
  return (
    <>
      <Box>
        <UserPanelLayout pageTitle={pageTitle}>
          <Container>
            <Grid container spacing={2}>
              {sampleData.map((item) => {
                return (
                  <Grid item xs={12} md={4} key={item.title}>
                    <TextIconBoxed
                      title={item.title}
                      text={item.text}
                      align={"center"}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Container>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <BoxSample progress={55} title="کارگزار جدید" />
              </Grid>
              <Grid item xs={12} md={6}>
                <BoxSample progress={80} title="پروژه جدید" />
              </Grid>
              <Grid item xs={12} md={6}>
                <BoxSample progress={90} title="فروش کالا" />
              </Grid>
              <Grid item xs={12} md={6}>
                <BoxSample progress={35} title="فروش خدمات" />
              </Grid>
            </Grid>
          </Container>
        </UserPanelLayout>
      </Box>
    </>
  );
};

export default SuperAdminDashboardPage;
