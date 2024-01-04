import React from "react";
import { FormControl, RadioGroup } from "@mui/material";
import { FieldConfig, useField } from "formik";

const RadioGroupField = ({ children, ...props }) => {
  const { label, name, value, onChange, onBlur } = props;
  const [field, meta, helpers] = useField({ name, value, onChange, onBlur });

  return (
    <FormControl>
      <RadioGroup
        sx={{ marginBottom: 4 }}
        label={label}
        {...field}
        {...props}
        error={meta.touched && Boolean(meta.error) ? "true" : "false"}
      >
        {children}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioGroupField;
