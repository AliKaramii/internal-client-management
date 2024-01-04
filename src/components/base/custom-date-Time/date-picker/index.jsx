//persian calendar & locale
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { Box } from "@mui/material";

const CustomDatePicker = ({
  setChosenDate,
  title = "انتخاب تاریخ",
  width = null,
}) => {
  const [state, setState] = useState({ format: "MM/DD/YYYY" });

  //   const convert = (date, format = state.format) => {
  //     let object = { date, format };

  //     setState({
  //       persian: new DateObject(object).format(),

  //       jsDate: date.toDate(),
  //       ...object,
  //     });
  //   };

  const onChangeHandler = (data) => {
    const formatedDate = `${data.year}/${data.month.number}/${data.day}`;
    setChosenDate(formatedDate);
  };

  return (
    <div>
      <div>
        <Box sx={{ width: width }}>
          <DatePicker
            // value={state.date}
            onChange={(data) => onChangeHandler(data)}
            calendar={persian}
            locale={persian_fa}
            placeholder={title}
            calendarPosition="bottom-right"
          />
        </Box>

        {/* <div>
          <Span>هجری شمسی: </Span>
          <span>{state.persian}</span>
        </div> */}

        {/* <div>
          <Span>تاریخ جاوااسکریپت: </Span>
          <span>{state.jsDate?.toString?.()}</span>
        </div> */}
      </div>
    </div>
  );
};

export default CustomDatePicker;
