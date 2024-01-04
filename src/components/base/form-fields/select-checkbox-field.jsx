import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FieldConfig, useField } from "formik";

import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { Box, Typography } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// Todo rename the state name to better one
const FormSelectCheckboxField = ({ ...props }) => {
  const [age, setAge] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setAge(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const {
    label,
    name,
    value,
    variant,
    onChange,
    onBlur,
    list,
    typolabel,
    margintop,
  } = props;
  const [field, meta, helpers] = useField({ name, value, onChange, onBlur });

  return (
    <>
      {typolabel && (
        <Typography color="primary" marginTop={margintop || 0}>
          {typolabel}
        </Typography>
      )}
      <FormControl fullWidth sx={{ marginBottom: 4 }}>
        <InputLabel id={name}>{label}</InputLabel>
        <Select
          labelId="form-select-field-label"
          id="form-select-field"
          multiple
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
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
          {list.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={age.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default FormSelectCheckboxField;
