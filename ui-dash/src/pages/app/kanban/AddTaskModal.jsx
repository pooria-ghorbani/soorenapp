import React, { useState } from "react";
import Select, { components } from "react-select";
import Modal from "@/components/ui/Modal";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskModal, addTask } from "./store";
import Textinput from "@/components/ui/Textinput";
import Textarea from "@/components/ui/Textarea";
import Flatpickr from "react-flatpickr";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { Persian } from "flatpickr/dist/l10n/fa";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali/index";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { faIR } from "@mui/x-date-pickers/locales";

import avatar1 from "@/assets/images/avatar/av-1.svg";
import avatar2 from "@/assets/images/avatar/av-2.svg";
import avatar3 from "@/assets/images/avatar/av-3.svg";
import avatar4 from "@/assets/images/avatar/av-4.svg";
import FormGroup from "@/components/ui/FormGroup";

const styles = {
  multiValue: (base, state) => {
    return state.data.isFixed ? { ...base, opacity: "0.5" } : base;
  },
  multiValueLabel: (base, state) => {
    return state.data.isFixed
      ? { ...base, color: "#626262", paddingRight: 6 }
      : base;
  },
  multiValueRemove: (base, state) => {
    return state.data.isFixed ? { ...base, display: "none" } : base;
  },
  option: (provided, state) => ({
    ...provided,
    fontSize: "14px",
  }),
};

const assigneeOptions = [
  { value: "صادق", label: "صادق قاسم نژاد", image: avatar1 },
  { value: "علی", label: "علی حبیبی", image: avatar2 },
  { value: "رضا", label: "رضا سلمانی", image: avatar3 },
  { value: "حسن", label: "حسن پورغلام", image: avatar4 },
];
const options = [
  {
    value: "team",
    label: "تیم",
  },
  {
    value: "low",
    label: "پایین",
  },
  {
    value: "medium",
    label: "متوسط",
  },
  {
    value: "high",
    label: "بالا",
  },
  {
    value: "update",
    label: "به‌روزرسانی",
  },
];

const OptionComponent = ({ data, ...props }) => {
  //const Icon = data.icon;

  return (
    <components.Option {...props}>
      <span className="flex items-center space-x-4">
        <div className="flex-none">
          <div className="h-7 w-7 rounded-full">
            <img
              src={data.image}
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
        <span className="flex-1">{data.label}</span>
      </span>
    </components.Option>
  );
};

const AddTaskModal = () => {
  const { taskModal } = useSelector((state) => state.kanban);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const FormValidationSchema = yup
    .object({
      title: yup.string().required("عنوان الزامی میباشد"),
      assign: yup.mixed().required("گیرنده الزامی میباشد"),
      tags: yup.mixed().required("تگ الزامی میباشد"),
      startDate: yup
        .date()
        .required("تاریخ شروع الزامی میباشد")
        .min(new Date(), "تاریخ شروع باید بعد از امروز باشد"),
      endDate: yup
        .date()
        .required("تاریخ پایان الزامی میباشد")
        .min(new Date(), "تاریخ پایان باید بعد از امروز باشد"),
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
    dispatch(
      addTask({
        id: uuidv4(),
        name: data.title,
        assignee: data.assign,
        // get only data value from startDate and endDate
        category: null,
        startDate: startDate.toISOString().split("T")[0],
        endDate: endDate.toISOString().split("T")[0],
        des: "این توضیحات میباشد",
        progress: Math.floor(Math.random() * (100 - 10 + 1) + 10),
      })
    );
    dispatch(
      toggleTaskModal({
        open: false,
      })
    );
    reset();
  };

  return (
    <div>
      <Modal
        title="ساخت پروژه"
        labelclassName="btn-outline-dark"
        activeModal={taskModal}
        onClose={() =>
          dispatch(
            toggleTaskModal({
              open: false,
            })
          )
        }
        onClick={() => setIsOpen(false)}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 "
          onClick={() => setIsOpen(false)}
        >
          <Textinput
            name="title"
            label="نام پروژه"
            placeholder="نام پروژه"
            register={register}
            error={errors.title}
          />
          <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
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
                        zIndex: 11,
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
                    />
                  </LocalizationProvider>
                )}
              />
            </FormGroup>
          </div>
          <div className={errors.assign ? "has-error" : ""}>
            <label className="form-label" htmlFor="icon_s">
              گیرنده
            </label>
            <Controller
              name="assign"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={assigneeOptions}
                  styles={styles}
                  className="react-select"
                  classNamePrefix="select"
                  isMulti
                  components={{
                    Option: OptionComponent,
                  }}
                  id="icon_s"
                />
              )}
            />
            {errors.assign && (
              <div className=" mt-2  text-danger-500 block text-sm">
                {errors.assign?.message || errors.assign?.label.message}
              </div>
            )}
          </div>

          <div className={errors.tags ? "has-error" : ""}>
            <label className="form-label" htmlFor="icon_s">
              تگ
            </label>
            <Controller
              name="tags"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={options}
                  styles={styles}
                  className="react-select"
                  classNamePrefix="select"
                  isMulti
                  id="icon_s"
                />
              )}
            />
            {errors.assign && (
              <div className=" mt-2  text-danger-500 block text-sm">
                {errors.tags?.message || errors.tags?.label.message}
              </div>
            )}
          </div>
          <Textarea label="توضیحات" placeholder="توضیحات" />

          <div className="ltr:text-right rtl:text-left">
            <button className="btn btn-dark  text-center">اضافه کردن</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddTaskModal;
