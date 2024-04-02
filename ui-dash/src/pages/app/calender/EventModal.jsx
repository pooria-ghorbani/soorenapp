import React, { useEffect, useState } from "react";
import Modal from "@/components/ui/Modal";
import Textinput from "@/components/ui/Textinput";
import { useForm, Controller } from "react-hook-form";
import Select from "@/components/ui/Select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { dateClick } from "./store";
import FormGroup from "@/components/ui/FormGroup";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali/index";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { faIR } from "@mui/x-date-pickers/locales";

const EventModal = ({ activeModal, onClose, selectedEvent }) => {
  const { categories } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (selectedEvent) {
      setStartDate(selectedEvent.date);
      setEndDate(selectedEvent.date);
    }
  }, [selectedEvent]);

  const FormValidationSchema = yup
    .object({
      title: yup.string().required("نام رویداد الزامی میباشد"),
      cata: yup
        .string()
        .when("title", {
          is: (title) => title.length > 0,
          then: yup.string().required("دسته بندی الزامی میباشد"),

          otherwise: yup.string().notRequired(),
        })
        .required("دسته بندی الزامی میباشد"),
    })
    .required();

  const {
    register,
    control,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(FormValidationSchema),
    mode: "all",
  });

  const onSubmit = (data) => {
    dispatch(dateClick({ data, selectedEvent, startDate, endDate }));

    onClose();
    reset();
  };
  return (
    <div>
      <Modal
        title="رویداد"
        labelclassName="btn-outline-dark"
        activeModal={activeModal}
        onClose={onClose}
        onClick={() => setIsOpen(false)}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 "
          onClick={() => setIsOpen(false)}
        >
          <Textinput
            name="title"
            label="نام رویداد"
            type="text"
            placeholder="نام رویداد را وارد کنید"
            register={register}
            error={errors.title}
          />
          <FormGroup
            label="تاریخ شروع"
            id="default-picker"
            error={errors.startDate}
          >
            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <LocalizationProvider
                  dateAdapter={AdapterDateFnsJalali}
                  localeText={
                    faIR.components.MuiLocalizationProvider.defaultProps
                      .localeText
                  }
                  sx={{ fontFamily: "iransans" }}
                  id="default-picker"
                >
                  <DatePicker
                    className="form-control py-2"
                    value={startDate}
                    onChange={(date) => setStartDate(date[0])}
                    id="default-picker"
                    placeholder="yyyy, dd M"
                    sx={{
                      zIndex: 1000000,
                    }}
                    open={isOpen}
                    onOpen={() => {
                      setIsOpen(true);
                    }}
                  />
                </LocalizationProvider>
              )}
            />
          </FormGroup>
          <FormGroup
            label="تاریخ پایان"
            id="default-picker2"
            error={errors.endDate}
          >
            <Controller
              name="endDate"
              control={control}
              render={({ field }) => (
                <LocalizationProvider
                  dateAdapter={AdapterDateFnsJalali}
                  localeText={
                    faIR.components.MuiLocalizationProvider.defaultProps
                      .localeText
                  }
                  sx={{ fontFamily: "iransans" }}
                  id="default-picker"
                >
                  <DatePicker
                    className="form-control py-2"
                    id="default-picker2"
                    placeholder="yyyy, dd M"
                    value={endDate}
                    onChange={(date) => setEndDate(date[0])}
                    sx={{
                      zIndex: 1000000,
                    }}
                    onOpen={() => {
                      setIsOpen(true);
                    }}
                  />
                </LocalizationProvider>
              )}
            />
          </FormGroup>

          <Select
            label="سلکت ساده"
            options={categories}
            register={register}
            error={errors.cata}
            name="cata"
          />
          <div className="ltr:text-right rtl:text-left">
            <button className="btn btn-dark  text-center">تایید</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EventModal;
