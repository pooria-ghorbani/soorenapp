import React, { useState, useEffect } from "react";
import Select, { components } from "react-select";
import Modal from "@/components/ui/Modal";
import { useSelector, useDispatch } from "react-redux";
import { editTodo, closeEditModal } from "./store";
import Icon from "@/components/ui/Icon";
import Textarea from "@/components/ui/Textarea";
import Flatpickr from "react-flatpickr";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { Persian } from "flatpickr/dist/l10n/fa";

import avatar1 from "@/assets/images/avatar/av-1.svg";
import avatar2 from "@/assets/images/avatar/av-2.svg";
import avatar3 from "@/assets/images/avatar/av-3.svg";
import avatar4 from "@/assets/images/avatar/av-4.svg";

const FormValidationSchema = yup
  .object({
    title: yup.string().required("عنوان الزامی میباشد"),
    assign: yup.mixed().required("گیرنده الزامی میباشد"),
    tags: yup.mixed().required("تگ الزامی میباشد"),
  })
  .required();

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

const EditTodoModal = () => {
  const { editModal, editItem } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

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
      editTodo({
        id: editItem.id,
        title: data.title,
        image: data.assign,
        category: data.tags,
      })
    );
    dispatch(closeEditModal(false));
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
      title="ویرایش وظیفه"
      activeModal={editModal}
      onClose={() => dispatch(closeEditModal(false))}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
        <div className={`fromGroup  ${errors.title ? "has-error" : ""}`}>
          <div className=" relative">
            <input
              type="text"
              defaultValue={editItem.title}
              {...register("title")}
              className="form-control py-2"
            />
            {errors.title && (
              <div className="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2  space-x-1 rtl:space-x-reverse">
                <span className="text-danger-500">
                  <Icon icon="heroicons-outline:information-circle" />
                </span>
              </div>
            )}
          </div>
          {errors.title && (
            <div className="mt-2 text-danger-500 block text-sm">
              {errors.title?.message}
            </div>
          )}
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
                isSearchable={false}
                defaultValue={editItem.image}
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
        <div>
          <label htmlFor="default-picker" className=" form-label">
            تاریخ ایجاد
          </label>
          <Flatpickr
            className="form-control py-2"
            id="default-picker"
            options={{ locale: Persian }}
          />
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
                defaultValue={editItem.category}
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

export default EditTodoModal;
