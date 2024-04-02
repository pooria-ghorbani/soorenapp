import React, { useState } from "react";
import Select, { components } from "react-select";
import Modal from "@/components/ui/Modal";
import { useSelector, useDispatch } from "react-redux";
import { toggleEmailModal, sendMail } from "./store";
import Textinput from "@/components/ui/Textinput";
import Textarea from "@/components/ui/Textarea";
import Flatpickr from "react-flatpickr";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import avatar1 from "@/assets/images/avatar/av-1.svg";
import avatar2 from "@/assets/images/avatar/av-2.svg";
import avatar3 from "@/assets/images/avatar/av-3.svg";
import avatar4 from "@/assets/images/avatar/av-4.svg";

const FormValidationSchema = yup
  .object({
    title: yup.string().required("عنوان الزامی میباشد"),
    assign: yup.mixed().required("گیرنده الزامی میباشد"),
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
  { value: "آرمین", label: "آرمین زارعی", image: avatar1 },
  { value: "مهرداد", label: "مهراد فلاحی", image: avatar2 },
  { value: "مهدی", label: "مهدی زندی", image: avatar3 },
  { value: "امیرحسین", label: "امیرحسین کریمی", image: avatar4 },
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

const ComposeEmail = () => {
  const { emailModal } = useSelector((state) => state.email);
  const dispatch = useDispatch();

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(FormValidationSchema),
    mode: "all",
  });

  const onSubmit = (data) => {
    dispatch(
      sendMail({
        id: uuidv4(),
        title: data.title,
        image: data.assign[0].image,
        desc: "سلام دنیا!",
        isfav: false,
        sent: false,
        draft: true,
        spam: false,
        trash: false,
        personal: false,
        social: true,
        promotions: true,
        lastime: "12:20 pm",
        business: true,
        is_checked: false,
        isread: false,
        isspam: true,
        isdelate: false,
      })
    );
    data.title = "";
    data.assign = "";
    // close email modal
    dispatch(toggleEmailModal(false));
  };
  return (
    <div>
      <Modal
        title="ارسال ایمیل"
        activeModal={emailModal}
        onClose={() => dispatch(toggleEmailModal(false))}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
          <div className={errors.assign ? "has-error" : ""}>
            <label className="form-label" htmlFor="icon_s">
              به
            </label>
            <Controller
              name="assign"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={assigneeOptions}
                  styles={styles}
                  isMulti
                  className="react-select"
                  classNamePrefix="select"
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
          <Textinput
            name="title"
            label="عنوان"
            type="text"
            placeholder="عنوان را وارد کنید"
            register={register}
            error={errors.title}
          />

          <ReactQuill theme="snow" value={"سلام دنیا !"} />

          <div className="ltr:text-right rtl:text-left">
            <button className="btn btn-dark  text-center">تایید</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ComposeEmail;
