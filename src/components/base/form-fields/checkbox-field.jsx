import React, { useState } from "react";
import { Checkbox, FormControlLabel } from "@mui/material";
import { FieldConfig, useField } from "formik";

const CheckboxField = ({ handleStateOnParent, ...props }) => {
  const { label, name, value, onChange, onBlur } = props;
  const [field, meta, helpers] = useField({ name, value, onChange, onBlur });
  const [childState, setChildState] = useState(false);

  const handleChildStateChange = (newState) => {
    console.log(newState);
    handleStateOnParent(newState);
    setChildState(newState);
  };

  return (
    <>
      <FormControlLabel
        onClick={(e) => handleChildStateChange(!childState)}
        label={label}
        sx={{ margin: "0" }}
        control={
          <Checkbox
            variant="standard"
            {...field}
            {...props}
            error={meta.touched && Boolean(meta.error) ? "true" : "false"}
          />
        }
      ></FormControlLabel>
    </>
  );
};

export default CheckboxField;
