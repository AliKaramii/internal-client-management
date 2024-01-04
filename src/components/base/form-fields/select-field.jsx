import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FieldConfig, useField } from "formik";
import { Box, Typography } from "@mui/material";
// Todo rename the state name to better one
const FormSelectField = ({ ...props }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const { label, typolabel, name, value, variant, onChange, onBlur, children } =
    props;
  const [field, meta, helpers] = useField({ name, value, onChange, onBlur });

  return (
    <>
      {typolabel && <Typography>{typolabel}</Typography>}
      <FormControl fullWidth sx={{ marginBottom: 4, marginTop: 1 }}>
        <InputLabel id={name}>{label}</InputLabel>
        <Select
          variant={variant || "outlined"}
          fullWidth
          label={label}
          {...field}
          {...props}
          error={meta.touched && Boolean(meta.error)}
          value={age}
          onChange={handleChange}
          SelectDisplayProps={{
            style: {
              height: "40px",
              padding: "4px",
            },
          }}
        >
          {children}
        </Select>
      </FormControl>
    </>
  );
};

export default FormSelectField;
