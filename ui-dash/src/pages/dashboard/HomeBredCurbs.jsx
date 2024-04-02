import React, { useEffect, useState } from "react";
import Icon from "@/components/ui/Icon";
import Datepicker from "react-tailwindcss-datepicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali/index";
import { DateRangeCalendar } from "@mui/x-date-pickers-pro/DateRangeCalendar";
import { faIR } from "@mui/x-date-pickers/locales";

const HomeBredCurbs = ({ title }) => {
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date().setMonth(11),
  });
  const [isActiveWeekly, setIsActiveWeekly] = useState(false);
  const [isActiveDate, setIsActiveDate] = useState(false);

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    document
      .querySelectorAll(
        ".css-rhmlg1-MuiTypography-root-MuiDayCalendar-weekDayLabel"
      )
      .forEach((calander) => {
        calander.textContent = calander.ariaLabel;
        calander.classList.add("font-iransans");
        calander.classList.add("mx-0.5");
      });
  });
  return (
    <div className="flex justify-between flex-wrap items-center mb-6">
      <h4 className="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4">
        {title}
      </h4>
      <div className="flex sm:space-x-4 space-x-2 sm:justify-end items-center rtl:space-x-reverse gap-8">
        <div>
          <div
            className="flex gap-2 cursor-pointer"
            onClick={() => {
              setIsActiveWeekly((prev) => !prev);
              setIsActiveDate(false);
            }}
          >
            <p>هفته ای</p>
            <img src="https://api.iconify.design/heroicons/calendar.svg?width=18&height=18" />
          </div>
          {isActiveWeekly && (
            <div className="absolute z-10 bg-black-50 top-36 left-10">
              <LocalizationProvider
                dateAdapter={AdapterDateFnsJalali}
                localeText={
                  faIR.components.MuiLocalizationProvider.defaultProps
                    .localeText
                }
                sx={{ fontFamily: "iransans" }}
              >
                <DemoContainer
                  components={["DateRangeCalendar"]}
                  sx={{ fontFamily: "iransans" }}
                >
                  <DateRangeCalendar sx={{ fontFamily: "iransans" }} />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          )}
        </div>

        <div className="date-range-custom2 relative">
          <div
            className="flex gap-2 cursor-pointer"
            onClick={() => {
              setIsActiveDate((prev) => !prev);
              setIsActiveWeekly(false);
            }}
          >
            <p>انتخاب تاریخ</p>
            <img src="https://api.iconify.design/heroicons-outline/filter.svg?width=18&height=18" />
          </div>
          {isActiveDate && (
            <div className="absolute z-10 bg-black-50 top-10 left-10">
              <LocalizationProvider
                dateAdapter={AdapterDateFnsJalali}
                localeText={
                  faIR.components.MuiLocalizationProvider.defaultProps
                    .localeText
                }
                sx={{ fontFamily: "iransans" }}
              >
                <DemoContainer
                  components={["DateRangeCalendar"]}
                  sx={{ fontFamily: "iransans" }}
                >
                  <DateRangeCalendar sx={{ fontFamily: "iransans" }} />
                </DemoContainer>
              </LocalizationProvider>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeBredCurbs;
