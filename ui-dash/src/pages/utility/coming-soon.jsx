import React from "react";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { Link } from "react-router-dom";
import useDarkMode from "@/hooks/useDarkMode";

import LogoWhite from "@/assets/images/logo/logo-white.svg";
import Logo from "@/assets/images/logo/logo.svg";
import SvgImage from "@/assets/images/svg/img-1.svg";

const ComingSoonPage = () => {
  const [isDark] = useDarkMode();
  return (
    <div className="min-h-screen">
      <div className="xl:absolute left-0 top-0 w-full">
        <div className="flex flex-wrap justify-between items-center py-6 container">
          <div>
            <Link to="/">
              <img src={isDark ? LogoWhite : Logo} alt="" />
            </Link>
          </div>
          <div>
            <Button text="تماس با ما" className=" btn-outline-dark btn-sm" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="flex justify-between flex-wrap items-center min-h-screen">
          <div className="max-w-[500px] space-y-4">
            <div className="relative flex space-x-3 items-center text-2xl text-slate-900 dark:text-white">
              <span className="inline-block w-[25px] bg-secondary-500 h-[1px]"></span>
              <span>به زودی</span>
            </div>
            <div className="xl:text-[70px] xl:leading-[70px] text-4xl font-semibold text-slate-900 dark:text-white">
              هنگام راه‌اندازی، به شما اطلاع داده خواهد شد.
            </div>
            <p className="font-normal text-slate-600 dark:text-slate-300 max-w-[400px]">
              متن تستی
            </p>
            <div className="bg-white flex items-center px-3 rounded">
              <input
                type="text"
                placeholder="ایمیل خود را وارد کنید"
                className="flex-1 bg-transparent h-full block w-full py-6 placeholder:text-secondary-500 text-base focus:outline-none focus:ring-0"
              />
              <div className="flex-none">
                <button type="button" className="btn btn-dark btn-sm px-6">
                  بهم خبر بده
                </button>
              </div>
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400">
              *از نگرانی خود مبرا باشید، ما شما را با اسپم نخواهیم مزاحمت کرد. :
            </div>
          </div>
          <div>
            <img src={SvgImage} alt="" />
          </div>
        </div>
      </div>
      <div className="xl:fixed bottom-0 w-full">
        <div className="container">
          <div className="md:flex justify-between items-center flex-wrap space-y-4 py-6">
            <div>
              <ul className="flex md:justify-start justify-center space-x-3">
                <li>
                  <a href="#" className="social-link">
                    <Icon icon="icomoon-free:facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <Icon icon="icomoon-free:twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <Icon icon="icomoon-free:linkedin2" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <Icon icon="icomoon-free:google" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="flex md:justify-start justify-center space-x-3">
                <li>
                  <a
                    href="#"
                    className="text-slate-500 dark:text-slate-400 text-sm transition duration-150 hover:text-slate-900"
                  >
                    سیاست حفظ حریم خصوصی
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 dark:text-slate-400 text-sm transition duration-150 hover:text-slate-900"
                  >
                    سوالات متداول
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-500 dark:text-slate-400 text-sm transition duration-150 hover:text-slate-900"
                  >
                    ایمیل ما
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
