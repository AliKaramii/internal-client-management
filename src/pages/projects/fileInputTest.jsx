import React from "react";
import { MuiFileInput } from "mui-file-input";
import { useState } from "react";

const FileInputTest = () => {
  const [value, setValue] = useState(null);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return <MuiFileInput value={value} onChange={handleChange} />;
};

export default FileInputTest;
