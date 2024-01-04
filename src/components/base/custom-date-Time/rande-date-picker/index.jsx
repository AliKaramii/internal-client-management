//persian calendar & locale
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import { useState } from "react";
import DatePicker, { Calendar, DateObject } from "react-multi-date-picker";
import { Box } from "@mui/material";

const CustomRangeDatePicker = ({
  onSetSelectedDays,
  title = "تعیین روزهای مورد نظر ",
  width = null,
}) => {
  // const [values, setValues] = useState([new DateObject()]);

  const onChangeHandler = (data) => {
    const formatedDate = `${data[0].year}/${data[0].month.number}/${data[0].day}_${data[1]?.year}/${data[1]?.month.number}/${data[1]?.day}`;
    onSetSelectedDays(formatedDate);
  };

  return (
    <div>
      <div>
        <Box sx={{ width: width }}>
          <DatePicker
            range
            placeholder={title}
            dateSeparator={`${"  "}تا ${"  "}`}
            calendar={persian}
            locale={persian_fa}
            onChange={(data) => onChangeHandler(data)}
          />
        </Box>
      </div>
    </div>
  );
};

export default CustomRangeDatePicker;
