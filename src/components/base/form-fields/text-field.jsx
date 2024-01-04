import React from "react";
import { Box, TextField, Typography } from "@mui/material";
import { FieldConfig, useField } from "formik";

const FormTextField = ({ ...props }) => {
  const {
    label,
    typolabel,
    name,
    value,
    variant,
    onChange,
    onBlur,
    margintop,
    fieldmarbottom,
  } = props;
  const [field, meta, helpers] = useField({ name, value, onChange, onBlur });

  return (
    <Box>
      {typolabel && (
        <Typography marginTop={margintop || 0}>{typolabel}</Typography>
      )}
      <TextField
        sx={{ marginBottom: fieldmarbottom || 4, marginTop: 1 }}
        variant={variant || "outlined"}
        fullWidth
        inputProps={{
          style: {
            height: "40px",
            padding: "4px",
          },
        }}
        label={label}
        {...field}
        {...props}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      />
    </Box>
  );
};

export default FormTextField;
