import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";

const date = new Date();
const prevDay = new Date().getDate() - 1;
const nextDay = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

// prettier-ignore
const nextMonth = date.getMonth() === 11 ? new Date(date.getFullYear() + 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() + 1, 1)
// prettier-ignore
const prevMonth = date.getMonth() === 11 ? new Date(date.getFullYear() - 1, 0, 1) : new Date(date.getFullYear(), date.getMonth() - 1, 1)

export const appCalenderSlice = createSlice({
  name: "appcalender",
  initialState: {
    categories: [
      {
        label: "بیزینس",
        value: "business",
        activeClass: "ring-primary-500 bg-primary-500",
      },

      {
        label: "شخصی",
        value: "personal",
        activeClass: "ring-success-500 bg-success-500",
      },

      {
        label: "تعطیلات",
        value: "holiday",
        activeClass: "ring-danger-500 bg-danger-500",
      },
      {
        label: "خانواده",
        value: "family",
        activeClass: "ring-info-500 bg-info-500",
      },
      {
        label: "جلسه",
        value: "meeting",
        activeClass: "ring-warning-500 bg-warning-500",
      },
      {
        label: "غیره",
        value: "etc",
        activeClass: "ring-info-500 bg-info-500",
      },
    ],
    calendarEvents: [
      {
        id: uuidv4(),
        title: "رویداد های همه روز",
        start: date,
        end: nextDay,
        allDay: false,
        //className: "warning",
        extendedProps: {
          calendar: "business",
        },
      },
      {
        id: uuidv4(),
        title: "جلسه با مشتری",
        start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
        end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
        allDay: true,
        //className: "success",
        extendedProps: {
          calendar: "personal",
        },
      },
      {
        id: uuidv4(),
        title: "لانچ",
        allDay: true,
        start: new Date(date.getFullYear(), date.getMonth() + 1, -9),
        end: new Date(date.getFullYear(), date.getMonth() + 1, -7),
        // className: "info",
        extendedProps: {
          calendar: "family",
        },
      },
      {
        id: uuidv4(),
        title: "جشن تولد",
        start: new Date(date.getFullYear(), date.getMonth() + 1, -11),
        end: new Date(date.getFullYear(), date.getMonth() + 1, -10),
        allDay: true,
        //className: "primary",
        extendedProps: {
          calendar: "meeting",
        },
      },
      {
        id: uuidv4(),
        title: "جشن تولد",

        start: new Date(date.getFullYear(), date.getMonth() + 1, -13),
        end: new Date(date.getFullYear(), date.getMonth() + 1, -12),
        allDay: true,
        // className: "danger",
        extendedProps: {
          calendar: "holiday",
        },
      },
      {
        id: uuidv4(),
        title: "جلسه ماهانه",
        start: nextMonth,
        end: nextMonth,
        allDay: true,
        //className: "primary",
        extendedProps: {
          calendar: "business",
        },
      },
    ],
  },
  reducers: {
    dateClick: (state, action) => {
      const { data, selectedEvent, startDate, endDate } = action.payload;
      const { title, cata } = data;

      state.calendarEvents.push({
        id: uuidv4(),
        title: title,
        start: startDate,
        end: endDate,
        extendedProps: {
          calendar: cata,
        },
      });
    },
    updateEvent: (state, action) => {
      const { data, editItem, startDate, endDate } = action.payload;
      const { title, cata } = data;

      const eventId = editItem.event.id;
      const index = state.calendarEvents.findIndex(
        (item) => item.id === eventId
      );

      state.calendarEvents[index] = {
        id: editItem.event.id,
        title: title,
        start: startDate,
        end: endDate,
        //className: cata,
        allDay: true,
        extendedProps: {
          calendar: cata,
        },
      };
    },

    removeEvent: (state, action) => {
      const { editItem } = action.payload;

      const eventId = editItem.event.id;
      const index = state.calendarEvents.findIndex(
        (item) => item.id === eventId
      );
      state.calendarEvents.splice(index, 1);
    },
  },
});

export const { dateClick, updateEvent, removeEvent } = appCalenderSlice.actions;
export default appCalenderSlice.reducer;
