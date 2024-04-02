import React from "react";
import Card from "@/components/ui/Card";
import Icon from "@/components/ui/Icon";
import { Link } from "react-router-dom";

const settings = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        <Card>
          <div className="space-y-6">
            <div className="flex space-x-3 items-center rtl:space-x-reverse">
              <div className="flex-none h-8 w-8 rounded-full bg-slate-800 dark:bg-slate-700 text-slate-300 flex flex-col items-center justify-center text-lg">
                <Icon icon="heroicons:building-office-2" />
              </div>
              <div className="flex-1 text-base text-slate-900 dark:text-white font-medium">
                تنظیمات شرکت
              </div>
            </div>
            <div className="text-slate-600 dark:text-slate-300 text-sm">
              تنظیم پروفایل شرکت خود، افزودن لوگوی شرکت و سایر موارد راه‌اندازی
              کنید.
            </div>
            <Link
              to="#"
              className="inline-flex items-center space-x-3 rtl:space-x-reverse text-sm capitalize font-medium text-slate-600 dark:text-slate-300"
            >
              <span>اعمال تغییرات</span>{" "}
              <Icon icon="heroicons:arrow-right" className="rotate-180" />
            </Link>
          </div>
        </Card>
        <Card>
          <div className="space-y-6">
            <div className="flex space-x-3 items-center rtl:space-x-reverse">
              <div className="flex-none h-8 w-8 rounded-full bg-primary-500 text-slate-300 flex flex-col items-center justify-center text-lg">
                <Icon icon="heroicons:credit-card" />
              </div>
              <div className="flex-1 text-base text-slate-900 dark:text-white font-medium">
                تنظیمات مالی
              </div>
            </div>
            <div className="text-slate-600 dark:text-slate-300 text-sm">
              حساب بانکی خود را به پروفایل شرکت خود متصل کنید و سایر موارد را
              انجام دهید.
            </div>
            <Link
              to="#"
              className="inline-flex items-center space-x-3 rtl:space-x-reverse text-sm capitalize font-medium text-slate-600 dark:text-slate-300"
            >
              <span>اعمال تغییرات</span>{" "}
              <Icon icon="heroicons:arrow-right" className="rotate-180" />
            </Link>
          </div>
        </Card>
        <Card>
          <div className="space-y-6">
            <div className="flex space-x-3 rtl:space-x-reverse items-center">
              <div className="flex-none h-8 w-8 rounded-full bg-success-500 text-white flex flex-col items-center justify-center text-lg">
                <Icon icon="heroicons:users" />
              </div>
              <div className="flex-1 text-base text-slate-900 dark:text-white font-medium">
                تنظیمات پروفایل
              </div>
            </div>
            <div className="text-slate-600 dark:text-slate-300 text-sm">
              پروفایل خود را تنظیم کنید، عکس پروفایل خود را اضافه کنید و سایر
              موارد را انجام دهید.
            </div>
            <Link
              to="#"
              className="inline-flex items-center space-x-3 rtl:space-x-reverse text-sm capitalize font-medium text-slate-600 dark:text-slate-300"
            >
              <span>اعمال تغییرات</span>{" "}
              <Icon icon="heroicons:arrow-right" className="rotate-180" />
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default settings;
