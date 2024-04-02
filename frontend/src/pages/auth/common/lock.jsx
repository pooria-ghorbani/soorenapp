import React, { useState } from "react";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().email("ایمیل نا معتبر").required("ایمیل الزامی میباشد"),
    password: yup.string().required("رمز عبور الزامی میباشد"),
  })
  .required();
const Lock = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
      <Textinput
        name="email"
        label="ایمیل"
        type="password"
        register={register}
        error={errors.password}
        className="h-[48px]"
      />

      <button className="btn btn-dark block w-full text-center">
        باز کردن
      </button>
    </form>
  );
};

export default Lock;
