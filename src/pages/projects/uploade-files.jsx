import React from "react";
import { Box, Button, Stack, TextField, Grid } from "@mui/material";
// import { useDispatch } from "react-redux";
import DropzoneAreaExample from "./mui-file-upload";
import { useForm } from "react-hook-form";
import FileInputTest from "./fileInputTest";
import { Close } from "@mui/icons-material";

const FileUploader = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box padding={2} sx={{ border: "1px solid lightgray", borderRadius: 1 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <p>عنوان</p>
            <TextField
              {...register("title", { required: true, minLength: 3 })}
              fullWidth
              id="title"
              name="title"
              placeholder="عنوانی برای فایل ارسالی"
            />
            {errors.title && <p>عنوان فایل را وارد کنید</p>}
          </Grid>
          <Grid item xs={12} sm={6}>
            <p>توضیحات</p>
            <TextField
              {...register("description", { required: true })}
              fullWidth
              id="description"
              name="description"
              placeholder="توضیحات کوتاه درباره فایل"
            />
            {errors.description && <p>توضیحات را وارد کنید</p>}
          </Grid>
        </Grid>
        <Box marginY={2}>
          <DropzoneAreaExample />
          {/* <FileInputTest
            clearIconButtonProps={{
              title: "Remove",
              children: <Close fontSize="small" />,
            }}
          /> */}
        </Box>
        <Stack direction="row-reverse" paddingBottom={2}>
          <Button variant="contained" type="submit">
            تایید
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default FileUploader;
