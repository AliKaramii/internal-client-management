import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker"; // just digital
// import TimePicker from "react-multi-date-picker/plugins/analog_time_picker"; // digital analog
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const CustomTimePicker = ({ setChosenTime, title = "انتخاب ساعت" }) => {
  const onChangeHandler = (data) => {
    const formatedTime = `${data.hour}:${data.minute}`;
    setChosenTime(formatedTime);
  };

  return (
    <DatePicker
      onChange={(data) => onChangeHandler(data)}
      placeholder={title}
      disableDayPicker
      format="HH:mm"
      plugins={[<TimePicker hideSeconds />]}
      calendar={persian}
      locale={persian_fa}
      calendarPosition="bottom-right"
    />
  );
};

export default CustomTimePicker;
