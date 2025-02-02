import React from "react";
import { Link } from "react-router-dom";
import ForgotPass from "./common/forgot-pass";
import useDarkMode from "@/hooks/useDarkMode";

import LogoWhite from "@/assets/images/logo/logo-white.svg";
import Logo from "@/assets/images/logo/logo.svg";
import Illustration from "@/assets/images/auth/ils1.svg";
const forgotPass = () => {
  const [isDark] = useDarkMode();
  return (
    <div className="loginwrapper">
      <div className="lg-inner-column">
        <div className="left-column relative z-[1]">
          <div className="max-w-[520px] pt-20 ltr:pl-20 rtl:pr-20">
            <Link to="/">
              <img src={isDark ? LogoWhite : Logo} alt="" className="mb-10" />
            </Link>

            <h4>بهبود عملکرد پروژه‌ی شما</h4>
          </div>
          <div className="absolute left-0 bottom-[-130px] h-full w-full z-[-1]">
            <img
              src={Illustration}
              alt=""
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        <div className="right-column relative">
          <div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
            <div className="auth-box2 flex flex-col justify-center h-full">
              <div className="mobile-logo text-center mb-6 lg:hidden block">
                <Link to="/">
                  <img
                    src={isDark ? LogoWhite : Logo}
                    alt=""
                    className="mx-auto"
                  />
                </Link>
              </div>
              <div className="text-center 2xl:mb-10 mb-5">
                <h4 className="font-medium mb-4">
                  رمز عبور خود را فراموش کرده اید؟
                </h4>
                <div className="text-slate-500 dark:text-slate-400 text-base">
                  رمز عبور خود را توسط دش کد بازگردانی کنید.
                </div>
              </div>
              <div className="font-normal text-base text-slate-500 dark:text-slate-400 text-center px-2 bg-slate-100 dark:bg-slate-600 rounded py-3 mb-4 mt-10">
                ایمیل خود را وارد کنید و دستورالعمل‌ها برای شما ارسال خواهند شد!
              </div>

              <ForgotPass />
              <div className="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-8 uppercase text-sm">
                فراموش کردید,
                <Link
                  to="/"
                  className="text-slate-900 dark:text-white font-medium hover:underline"
                >
                  منو برگردان
                </Link>
                به صحفه ورود
              </div>
            </div>
            <div className="auth-footer text-center">
              کپی رایت &copy; 2022 دشکد، تمامی حقوق محفوظ است.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forgotPass;
