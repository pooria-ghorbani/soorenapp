import React, { useState } from "react";
import { toast } from "react-toastify";
import Textinput from "@/components/ui/Textinput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Checkbox from "@/components/ui/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { handleRegister } from "./store";

const schema = yup
  .object({
    name: yup.string().required("نام الزامی میباشد"),
    email: yup.string().email("ایمیل نا معتبر").required("ایمیل الزامی میباشد"),
    password: yup
      .string()
      .min(6, "رمز عبور باید حداقل 8 کاراکتر باشد")
      .max(20, "رمز عبور نباید بیشتر از 20 کاراکتر باشد")
      .required("لطفا رمز عبور را وارد کنید"),
    // تکرار رمز عبور
    confirmpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "رمز عبور باید یکسان باشد"),
  })
  .required();

const RegForm = () => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    dispatch(handleRegister(data));
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 ">
      <Textinput
        name="name"
        label="نام"
        type="text"
        placeholder="نام وارد کنید "
        register={register}
        error={errors.name}
        className="h-[48px]"
      />{" "}
      <Textinput
        name="email"
        label="ایمیل"
        type="email"
        placeholder=" ایمیل خود را وارد کنید"
        register={register}
        error={errors.email}
        className="h-[48px]"
      />
      <Textinput
        name="password"
        label="رمز عبور"
        type="password"
        placeholder="رمز عبور را وارد کنید"
        register={register}
        error={errors.password}
        className="h-[48px]"
      />
      <Checkbox
        label=" شما سیاست حفظ حریم خصوصی قبول دارید"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      <button className="btn btn-dark block w-full text-center">
        ساخت حساب کاربری
      </button>
    </form>
  );
};

export default RegForm;
