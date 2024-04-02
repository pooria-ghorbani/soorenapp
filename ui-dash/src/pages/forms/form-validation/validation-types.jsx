import React from "react";
import Textinput from "@/components/ui/Textinput";
import Textarea from "@/components/ui/Textarea";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const FormValidationSchema = yup
  .object({
    username: yup.string().required(),
    number: yup.number().required().positive(),
    betweenNumber: yup
      .number()
      .required("عدد باید بین مقدار های تعیین شده باشد")
      .positive()
      .min(1)
      .max(10),

    alphabetic: yup
      .string()
      .required()
      .matches(/^[a-zA-Z]+$/, "فقط باید شامل حروف باشد"),
    length: yup
      .string()
      .required("حداقل باید به تعداد کاراکتر تعیین شده باشد")
      .min(3),

    password: yup.string().required().min(8),
    url: yup.string().required("فیلد url الزامی میباشد").url(),
    message: yup.string().required("فیلد پیام الزامی میباشد"),
  })
  .required();

const ValidationTypes = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(FormValidationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:grid-cols-2 grid gap-5 grid-cols-1 "
      >
        <Textinput
          label="الزامی"
          type="text"
          placeholder="نام خود را وارد کنید"
          name="username"
          register={register}
          error={errors.username}
        />
        <Textinput
          label="فقط شامل عدد باشد"
          type="text"
          placeholder="فقط عدد وارد کنید"
          name="number"
          register={register}
          error={errors.number}
        />
        <Textinput
          label="بین دو مقدار"
          type="text"
          placeholder="عدد باید بین 1 و 10 باشد"
          name="betweenNumber"
          register={register}
          error={errors.betweenNumber}
        />

        <Textinput
          label="فقط شامل حروف باید باششد"
          type="text"
          placeholder="فقط حروف وارد کنید"
          name="alphabetic"
          register={register}
          error={errors.alphabetic}
        />

        <Textinput
          label="نباید کمتر از 3 کاراکتر باشد"
          type="text"
          placeholder="حداقل باید 3 کاراکتر باشد"
          name="length"
          register={register}
          error={errors.length}
        />
        <Textinput
          label="رمز عبور"
          type="password"
          placeholder="حداقل 8 کاراکتر و یک حرف بزرگ"
          name="re_password"
          register={register}
          error={errors.password}
        />
        <Textinput
          label="url صحیح"
          type="url"
          placeholder="url صحیح وارد کنید"
          name="re_url"
          register={register}
          error={errors.url}
        />
        <Textarea
          label="پیام"
          placeholder="پیام خود را وارد کنید"
          name="re_msg"
          register={register}
          error={errors.message}
        />

        <div className="lg:col-span-2 col-span-1">
          <div className="ltr:text-right rtl:text-left">
            <button className="btn btn-dark  text-center">تایید</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ValidationTypes;
