import React, { useState, useEffect } from "react";
import Select, { components } from "react-select";
import Modal from "@/components/ui/Modal";
import { useSelector, useDispatch } from "react-redux";
import { updateProject, toggleEditModal } from "./store";
import Icon from "@/components/ui/Icon";
import Textarea from "@/components/ui/Textarea";
import Flatpickr from "react-flatpickr";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import FormGroup from "@/components/ui/FormGroup";
import avatar1 from "@/assets/images/avatar/av-1.svg";
import avatar2 from "@/assets/images/avatar/av-2.svg";
import avatar3 from "@/assets/images/avatar/av-3.svg";
import avatar4 from "@/assets/images/avatar/av-4.svg";
import { Persian } from "flatpickr/dist/l10n/fa";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali/index";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { faIR } from "@mui/x-date-pickers/locales";

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
  { value: "مهدی", label: "مهدی حلوایی", image: avatar2 },
  { value: "رضا", label: "رضا حسنی", image: avatar3 },
  { value: "حسن", label: "حسن حسنی", image: avatar4 },
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
    label: "بروز رسانی",
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

const EditProject = () => {
  const { editModal, editItem } = useSelector((state) => state.project);
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const FormValidationSchema = yup
    .object({
      name: yup.string().required("Name الزامی میباشد"),
      assign: yup.mixed().required("گیرنده الزامی میباشد"),
      startDate: yup
        .date()
        .required("تاریخ شروع الزامی میباشد")
        .min(new Date(), "تاریخ شروع باید از امروز گذشته شده باشد"),
      endDate: yup
        .date()
        .required("تاریخ پایان الزامی میباشد")
        .min(new Date(), "تاریخ پایان باید از امروز گذشته شده باشد"),
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

  useEffect(() => {
    reset(editItem);
  }, [editItem]);

  const onSubmit = (data) => {
    dispatch(
      updateProject({
        id: editItem.id,
        name: data.name,
        des: "متن تستی",
        assignee: data.assign,
        category: null,
        startDate: startDate.toISOString().split("T")[0],
        endDate: endDate.toISOString().split("T")[0],
        progress: Math.floor(Math.random() * (100 - 10 + 1) + 10),
      })
    );
    dispatch(toggleEditModal(false));
    toast.info("با موفقیت ویرایش شد", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      rtl: true,
      className: "font-iransans",
    });
  };

  return (
    <Modal
      title="Edit Project"
      activeModal={editModal}
      onClose={() => dispatch(toggleEditModal(false))}
      onClick={() => setIsOpen(false)}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 "
        onClick={() => setIsOpen(false)}
      >
        <FormGroup error={errors.name}>
          <input
            type="text"
            defaultValue={editItem.name}
            className="form-control py-2"
            {...register("name")}
          />
        </FormGroup>
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
            Assignee
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
                isSearchable={false}
                defaultValue={editItem.assignee}
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
            Tag
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
          <button className="btn btn-dark  text-center">بروز رسانی</button>
        </div>
      </form>
    </Modal>
  );
};

export default EditProject;
