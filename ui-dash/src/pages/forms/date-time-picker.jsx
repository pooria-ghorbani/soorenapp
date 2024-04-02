import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Flatpickr from "react-flatpickr";
import { Persian } from "flatpickr/dist/l10n/fa";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali/index";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { faIR } from "@mui/x-date-pickers/locales";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
const FlatpickerPage = () => {
  const [picker, setPicker] = useState(new Date());
  const [picker2, setPicker2] = useState(new Date());
  const [picker3, setPicker3] = useState(new Date());
  const [picker4, setPicker4] = useState(new Date());
  const [basic, setBasic] = useState(new Date());
  const [open, setOpen] = useState(true);
  return (
    <div>
      <Card title="انتخاب زمان و تاریخ" className="h-screen">
        <div className="grid xl:grid-cols-2  grid-cols-1 gap-5">
          <div>
            <label htmlFor="default-picker" className=" form-label">
              تابع ساده
            </label>

            <LocalizationProvider
              dateAdapter={AdapterDateFnsJalali}
              localeText={
                faIR.components.MuiLocalizationProvider.defaultProps.localeText
              }
            >
              <DatePicker
                className="form-control py-2"
                value={picker}
                onChange={(date) => setPicker(date)}
                id="default-picker"
              />
            </LocalizationProvider>
          </div>
          <div>
            <label className="form-label" for="date-time-picker">
              تاریخ و زمان
            </label>
            <LocalizationProvider
              dateAdapter={AdapterDateFnsJalali}
              localeText={
                faIR.components.MuiLocalizationProvider.defaultProps.localeText
              }
            >
              <DateTimePicker
                value={picker2}
                data-enable-time
                id="date-time-picker"
                className="form-control py-2"
                onChange={(date) => setPicker2(date)}
              />
            </LocalizationProvider>
          </div>
          <div>
            <label className="form-label" for="range-picker">
              بین دو تاریخ
            </label>
            <LocalizationProvider
              dateAdapter={AdapterDateFnsJalali}
              localeText={
                faIR.components.MuiLocalizationProvider.defaultProps.localeText
              }
            >
              <DateRangePicker
                id="range-picker"
                className="form-control py-2"
                onChange={(date) => setPicker3(date)}
                slots={{ field: SingleInputDateRangeField }}
              />
            </LocalizationProvider>
          </div>
          <div>
            <label className="form-label" for="disabled-picker">
              بینابین غیر فعلل
            </label>
            <LocalizationProvider
              dateAdapter={AdapterDateFnsJalali}
              localeText={
                faIR.components.MuiLocalizationProvider.defaultProps.localeText
              }
            >
              <DatePicker
                className="form-control py-2"
                value={picker}
                onChange={(date) => setPicker(date)}
                id="default-picker"
              />
            </LocalizationProvider>
          </div>
          <div>
            <label className="form-label" id="timepicker">
              24 ساعته ساده
            </label>
            <Flatpickr
              className="form-control py-2"
              value={basic}
              id="timepicker"
              options={{
                enableTime: true,
                noCalendar: true,
                dateFormat: "H:i",
                time_24hr: true,
                locale: Persian,
              }}
              onChange={(date) => setBasic(date)}
            />
          </div>

          <div>
            <label className="form-label" for="hf-picker">
              انسان دوستانه
            </label>
            <LocalizationProvider
              dateAdapter={AdapterDateFnsJalali}
              localeText={
                faIR.components.MuiLocalizationProvider.defaultProps.localeText
              }
            >
              <DatePicker
                value={picker}
                id="hf-picker"
                className="form-control py-2"
                onChange={(date) => setPicker(date)}
              />
            </LocalizationProvider>
          </div>
          <div>
            <label className="form-label" for="inline-picker">
              در یک خط
            </label>

            <LocalizationProvider
              dateAdapter={AdapterDateFnsJalali}
              localeText={
                faIR.components.MuiLocalizationProvider.defaultProps.localeText
              }
            >
              <DatePicker
                className="form-control py-2"
                value={picker}
                onChange={(date) => setPicker(date)}
                open={open}
                slotProps={{
                  popper: { placement: "bottom-start" },
                }}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                closeOnSelect={true}
              />
            </LocalizationProvider>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FlatpickerPage;
