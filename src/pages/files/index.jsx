import FileDetailsBox from "../../components/common/file-details-box";
import UserPanelLayout from "../../components/sections/admin-panel";
import { Box, Grid } from "@mui/material";

const pageTitle = { icon: "files", title: "فایل ها" };
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
const FilesPage = () => {
  return (
    <Box>
      <UserPanelLayout pageTitle={pageTitle}>
        <Grid container spacing={2}>
          {samplefiles.map((file, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <FileDetailsBox data={file} />
              </Grid>
            );
          })}
        </Grid>
      </UserPanelLayout>
    </Box>
  );
};

export default FilesPage;
