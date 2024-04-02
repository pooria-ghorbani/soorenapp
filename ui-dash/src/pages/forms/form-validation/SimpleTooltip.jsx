import React from "react";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FormValadtionSchema = yup
  .object({
    password: yup.string().required("رمز عبور الزامی میباشد"),
    email: yup.string().email("ایمیل نا معتبر").required("ایمیل الزامی میباشد"),
  })
  .required();

const SimpleTooltip = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(FormValadtionSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
        <Textinput
          name="email"
          label="ایمیل"
          type="email"
          register={register}
          error={errors.email}
          msgTooltip
        />
        <Textinput
          name="password"
          label="رمز عبور"
          type="password"
          register={register}
          error={errors.password}
          msgTooltip
        />

        <div className="ltr:text-right rtl:text-left">
          <button className="btn btn-dark  text-center">تایید</button>
        </div>
      </form>
    </div>
  );
};

export default SimpleTooltip;
