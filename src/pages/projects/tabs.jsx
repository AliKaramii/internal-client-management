import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import DataTable from "./DataTable";
import ProjectProcess from "../../components/common/project-proccess";
import FileDetailsBox from "../../components/common/file-details-box";
import ProjectFullDetail from "./project-full-detail";
import FileInputTest from "./fileInputTest";
import DropzoneAreaExample from "./mui-file-upload";
import FileUploader from "./uploade-files";
import ProjectStatus from "./project-status";

export default function ScrollableTabsButtonForce({ children }) {
  const [value, setValue] = React.useState(0);

  //
  const samplefiles = [
    {
      title: "فاکتور محصولات اکتیو",
      desc: "فاکتور محصولات اکتیو فاز 1 پروژه",
      date: "1402/11/01",
    },
    {
      title: "دیاگرام رایزر",
      desc: "طبقات -1 تا 11 شامل اداری و تجاری",
      date: "1402/05/01",
    },
    {
      title: "لیست متره متریال پسیو",
      desc: "تجهیزات مورد نیاز پسیو برای فاز 1 پروژه",
      date: "1402/04/01",
    },
    {
      title: "پیش فاکتور سرویس ها",
      desc: "پیش فاکتور سرویس های IPTV و نرم افزار مدیریت ساختمان",
      date: "1402/06/01",
    },
  ];
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }
  // TabPanel.propTypes = {
  //   children: PropTypes.node,
  //   index: PropTypes.number.isRequired,
  //   value: PropTypes.number.isRequired,
  // };
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }
  //

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }} paddingY={1}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        {children}
      </Tabs>

      <TabPanel value={value} index={0} dir="rtl">
        <Container>
          <ProjectFullDetail />
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1} dir="rtl">
        <Container>
          <Grid container spacing={2}>
            <Grid xs={12} marginY={2}>
              {/* <FileInputTest /> */}
              <FileUploader />
            </Grid>
            <Grid container spacing={2}>
              {samplefiles.map((file, index) => {
                return (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <FileDetailsBox data={file} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={2} dir="rtl">
        <Container>
          <ProjectStatus />
        </Container>
      </TabPanel>
    </Box>
  );
}
