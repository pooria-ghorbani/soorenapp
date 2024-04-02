import React, { useState } from "react";

import Modal from "@/components/ui/Modal";
import { useSelector, useDispatch } from "react-redux";
import Textinput from "@/components/ui/Textinput";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toggleColumnModal, addColumnBoard } from "./store";

const FormValidationSchema = yup
  .object({
    title: yup.string().required("عنوان الزامی میباشد"),
  })
  .required();

const AddColumn = () => {
  const { columModal } = useSelector((state) => state.kanban);
  const dispatch = useDispatch();
  const [color, setColor] = useState("#4669fa");
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
    dispatch(addColumnBoard({ ...data, color }));
    dispatch(toggleColumnModal(false));
    reset();
  };

  return (
    <div>
      <Modal
        title="ساخت ستون جدید"
        labelclassName="btn-outline-dark"
        activeModal={columModal}
        onClose={() => dispatch(toggleColumnModal(false))}
      >
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
          <Textinput
            name="title"
            label="نام ستون"
            placeholder="نام ستون"
            register={register}
            error={errors.title}
          />
          <div className="formGroup">
            <label className="form-label">انتخاب رنگ</label>
            <input
              type="color"
              className="form-control"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>

          <div className="ltr:text-right rtl:text-left">
            <button className="btn btn-dark  text-center">اضافه کردن</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddColumn;
