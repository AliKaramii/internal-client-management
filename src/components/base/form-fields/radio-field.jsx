import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { FieldConfig, useField } from "formik";
import {
  Box,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
// Todo rename the state name to better one
const FormRadioField = ({ ...props }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const {
    label,
    name,
    value,
    variant,
    typolabel,
    typoColor = "primary",
    onChange,
    onBlur,
    children,
  } = props;
  const [field, meta, helpers] = useField({ name, value, onChange, onBlur });

  return (
    <Box>
      {typolabel && <Typography color={typoColor}>{typolabel}</Typography>}
      <FormControl fullWidth sx={{ marginTop: 1 }}>
        <FormLabel id="demo-row-radio-buttons-group-label">{label}</FormLabel>
        <RadioGroup
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
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="مالک" />
          <FormControlLabel value="male" control={<Radio />} label="ساکن" />
          <FormControlLabel value="other" control={<Radio />} label="واحد" />
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

export default FormRadioField;
