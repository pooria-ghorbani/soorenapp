import React, { useState, useEffect } from "react";
import Textinput from "@/components/ui/Textinput";
import InputGroup from "@/components/ui/InputGroup";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const steps = [
  {
    id: 1,
    title: "اطلاعات اکانت",
  },
  {
    id: 2,
    title: "اطلاعات شخصی-500",
  },
  {
    id: 3,
    title: "آدرس",
  },
  {
    id: 4,
    title: "لینک های فضای مجازی",
  },
];

let stepSchema = yup.object().shape({
  username: yup.string().required("نام کاربری الزامی میباشد"),
  fullname: yup.string().required("نام کامل الزامی است"),
  email: yup
    .string()
    .email("ایمیل نامعتبر میباشد")
    .required("ایمیل الزامی میباشد"),
  phone: yup
    .string()
    .required("شماره موبایل الزامی میباشد")
    .matches(/^[0-9]{12}$/, "شماره موبایل معتبر نمیباشد"),
  password: yup
    .string()
    .required("رمز عبور الزامی میباشد")
    .min(8, "رمز عبور باید حداقل 8 کاراکتر باشد"),
  confirmpass: yup
    .string()
    .required("تکرار رمز عبور الزامی میباشد")
    .oneOf([yup.ref("password"), null], "رمز عبور باید یکسان باشد"),
});

let personalSchema = yup.object().shape({
  fname: yup.string().required(" اسم الزامی میباشد"),
  lname: yup.string().required(" فامیل الزامی میباشد"),
});
let addressSchema = yup.object().shape({
  address: yup.string().required(" آدرس الزامی میباشد"),
});
const url =
  /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm;

let socialSchema = yup.object().shape({
  fburl: yup
    .string()
    .required("Facebook url الزامی میباشد")
    .matches(url, "Facebook url معتبر نمیباشد"),
});
const FormWizard = () => {
  const [stepNumber, setStepNumber] = useState(0);

  // find current step schema
  let currentStepSchema;
  switch (stepNumber) {
    case 0:
      currentStepSchema = stepSchema;
      break;
    case 1:
      currentStepSchema = personalSchema;
      break;
    case 2:
      currentStepSchema = addressSchema;
      break;
    case 3:
      currentStepSchema = socialSchema;
      break;
    default:
      currentStepSchema = stepSchema;
  }
  useEffect(() => {
    //console.log("step number changed");
  }, [stepNumber]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm({
    resolver: yupResolver(currentStepSchema),
    // keep watch on all fields
    mode: "all",
  });

  const onSubmit = (data) => {
    // next step until last step . if last step then submit form
    let totalSteps = steps.length;
    const isLastStep = stepNumber === totalSteps - 1;
    if (isLastStep) {
      console.log(data);
    } else {
      setStepNumber(stepNumber + 1);
    }
  };

  const handlePrev = () => {
    setStepNumber(stepNumber - 1);
  };

  return (
    <div>
      <Card title="افقی">
        <div>
          <div className="flex z-[5] items-center relative justify-center md:mx-8">
            {steps.map((item, i) => (
              <div
                className="relative z-[1] items-center item flex flex-start flex-1 last:flex-none group"
                key={i}
              >
                <div
                  className={`${
                    stepNumber >= i
                      ? "bg-slate-900 text-white ring-slate-900 ring-offset-2 dark:ring-offset-slate-500 dark:bg-slate-900 dark:ring-slate-900"
                      : "bg-white ring-slate-900 ring-opacity-70  text-slate-900 dark:text-slate-300 dark:bg-slate-600 dark:ring-slate-600 text-opacity-70"
                  }  transition duration-150 icon-box md:h-12 md:w-12 h-7 w-7 rounded-full flex flex-col items-center justify-center relative z-[66] ring-1 md:text-lg text-base font-medium`}
                >
                  {stepNumber <= i ? (
                    <span> {i + 1}</span>
                  ) : (
                    <span className="text-3xl">
                      <Icon icon="bx:check-double" />
                    </span>
                  )}
                </div>

                <div
                  className={`${
                    stepNumber >= i
                      ? "bg-slate-900 dark:bg-slate-900"
                      : "bg-[#E0EAFF] dark:bg-slate-700"
                  } absolute top-1/2 h-[2px] w-full`}
                ></div>
                <div
                  className={` ${
                    stepNumber >= i
                      ? " text-slate-900 dark:text-slate-300"
                      : "text-slate-500 dark:text-slate-300 dark:text-opacity-40"
                  } absolute top-full text-base md:leading-6 mt-3 transition duration-150 md:opacity-100 opacity-0 group-hover:opacity-100`}
                >
                  <span className="w-max">{item.title}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="محتویات جعبه ای ">
            <form onSubmit={handleSubmit(onSubmit)}>
              {stepNumber === 0 && (
                <div>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pt-10">
                    <div className="lg:col-span-3 md:col-span-2 col-span-1">
                      <h4 className="text-base text-slate-800 dark:text-slate-300 my-6">
                        اطلاعات اکانت خود را وارد کنید
                      </h4>
                    </div>
                    <Textinput
                      label="نام کاربری"
                      type="text"
                      placeholder="نام خود را وارد کنید"
                      name="username"
                      error={errors.username}
                      register={register}
                    />
                    <Textinput
                      label="نام کامل"
                      type="text"
                      placeholder="نام کامل"
                      name="fullname"
                      error={errors.fullname}
                      register={register}
                    />
                    <Textinput
                      label="ایمیل"
                      type="email"
                      placeholder="ایمیل خود را وارد کنید"
                      name="email"
                      error={errors.email}
                      register={register}
                    />
                    <InputGroup
                      label="شماره همراه"
                      type="text"
                      prepend="IR (+98)"
                      placeholder="شماره همراه"
                      name="phone"
                      error={errors.phone}
                      register={register}
                    />
                    <Textinput
                      label="رمز عبور"
                      type="password"
                      placeholder="8 کاراکتر و خداقل یک حرف بزرگ"
                      name="password"
                      error={errors.password}
                      hasicon
                      register={register}
                    />
                    <Textinput
                      label="تکرار رمز عبور"
                      type="password"
                      placeholder="Password"
                      name="confirmpass"
                      error={errors.confirmpass}
                      register={register}
                      hasicon
                    />
                  </div>
                </div>
              )}

              {stepNumber === 1 && (
                <div>
                  <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
                    <div className="md:col-span-2 col-span-1">
                      <h4 className="text-base text-slate-800 dark:text-slate-300 mb-6">
                        وارد کنید اطلاعات شخصی-500
                      </h4>
                    </div>
                    <Textinput
                      label="اسم"
                      type="text"
                      placeholder="اسم"
                      name="fname"
                      error={errors.fname}
                      register={register}
                    />
                    <Textinput
                      label="فامیل"
                      type="text"
                      placeholder="فامیل"
                      name="lname"
                      error={errors.lname}
                      register={register}
                    />
                  </div>
                </div>
              )}
              {stepNumber === 2 && (
                <div>
                  <div className="grid grid-cols-1 gap-5">
                    <div className="">
                      <h4 className="text-base text-slate-800 dark:text-slate-300 mb-6">
                        آئرس وارد کنید
                      </h4>
                    </div>
                    <Textarea
                      label="آدرس"
                      type="text"
                      placeholder="آدرس را بنویسید"
                      name="address"
                      error={errors.address}
                      register={register}
                    />
                  </div>
                </div>
              )}
              {stepNumber === 3 && (
                <div>
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    <div className="lg:col-span-3 md:col-span-2 col-span-1">
                      <h4 className="text-base text-slate-800 dark:text-slate-300 mb-6">
                        آدرس را وارد کنید
                      </h4>
                    </div>
                    <Textinput
                      label="Facebook"
                      type="text"
                      placeholder="https://www.facebook.com/profile"
                      name="fburl"
                      error={errors.fburl}
                      register={register}
                    />
                  </div>
                </div>
              )}

              <div
                className={`${
                  stepNumber > 0 ? "flex justify-between" : "text-left"
                } mt-10`}
              >
                {stepNumber !== 0 && (
                  <Button
                    text="قبلی"
                    className="btn-dark"
                    onClick={handlePrev}
                  />
                )}
                <Button
                  text={stepNumber !== steps.length - 1 ? "بعدی" : "تایید"}
                  className="btn-dark"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FormWizard;
