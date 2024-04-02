import React, { useEffect, useState } from "react";
import Modal from "@/components/ui/Modal";
import Textinput from "@/components/ui/Textinput";
import { useForm, Controller } from "react-hook-form";
import Select from "@/components/ui/Select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Persian } from "flatpickr/dist/l10n/fa";
import { useSelector, useDispatch } from "react-redux";
import { updateEvent, removeEvent } from "./store";
import Flatpickr from "react-flatpickr";
import FormGroup from "@/components/ui/FormGroup";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali/index";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { faIR } from "@mui/x-date-pickers/locales";

const FormValidationSchema = yup
  .object({
    title: yup.string().required("نام رویداد الزامی میباشد"),
    cata: yup
      .string()
      // .when("title", {
      //   is: (title) => title.length > 0,
      //   then: yup.string().required("Category الزامی میباشد"),

      //   otherwise: yup.string().notRequired(),
      // })
      .required("دسته بندی الزامی میباشد"),
  })
  .required();
const EditEventModal = ({ editModal, onCloseEditModal, editItem }) => {
  const { categories } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (editItem) {
      setStartDate(editItem.event.start);
      setEndDate(editItem.event.end);
    }
    reset(editItem);
  }, [editModal]);

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
    dispatch(updateEvent({ data, editItem, startDate, endDate }));
    // close modal
    onCloseEditModal();
    reset();
  };
  return (
    <div>
      <Modal
        title="ویرایش رویداد"
        labelclassName="btn-outline-dark"
        activeModal={editModal}
        onClose={onCloseEditModal}
        onClick={() => setIsOpen(false)}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 "
          onClick={() => setIsOpen(false)}
        >
          <FormGroup error={errors.title}>
            <input
              label="نام رویداد"
              type="text"
              placeholder="Enter Event Name"
              defaultValue={editItem?.event?.title}
              className="form-control py-2"
              {...register("title")}
            />
          </FormGroup>
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
                    onOpen={() => setIsOpen(true)}
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
                    open={isOpen}
                    onOpen={() => setIsOpen(true)}
                  />
                </LocalizationProvider>
              )}
            />
          </FormGroup>

          <Select
            label="سلکت ساده"
            options={categories}
            register={register}
            defaultValue={editItem?.event?.classNames[0]}
            error={errors.cata}
            name="cata"
          />
          <div className=" flex justify-between">
            <button
              className="btn btn-danger  text-center"
              onClick={() => {
                dispatch(
                  removeEvent({
                    editItem,
                  })
                );
                onCloseEditModal();
              }}
            >
              حذف
            </button>
            <button className="btn btn-dark  text-center">تایید</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditEventModal;
