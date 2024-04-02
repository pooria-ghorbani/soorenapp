import React from "react";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import Icon from "@/components/ui/Icon";
import Tooltip from "@/components/ui/Tooltip";
import { toggleSingleModal } from "./store";
import { useDispatch, useSelector } from "react-redux";

// import images

import InboxImage1 from "@/assets/images/all-img/inbox-1.png";
import InboxImage2 from "@/assets/images/all-img/inbox-2.png";
import InboxImage3 from "@/assets/images/all-img/inbox-3.png";

const EmailDetails = () => {
  const dispatch = useDispatch();
  const { singleEmail } = useSelector((state) => state.email);
  return (
    <div className="absolute left-0 top-0 w-full h-full bg-white dark:bg-slate-800 z-[55] rounded-md p-6 overflow-y-auto">
      <div className="flex items-center border-b border-slate-100 dark:border-slate-700 -mx-6 pb-6 mb-6 px-6">
        <div className="flex-1">
          <Tooltip content="Back" placement="top" arrow>
            <button
              className="email-icon"
              type="button"
              onClick={() => {
                dispatch(toggleSingleModal());
              }}
            >
              <Icon icon="heroicons-outline:arrow-left" />
            </button>
          </Tooltip>
        </div>
        <div className="flex-none flex items-center space-x-4 rtl:space-x-reverse">
          <Tooltip placement="top" arrow content="فوروارد">
            <button className="email-icon" type="button">
              <Icon icon="heroicons-outline:logout" />
            </button>
          </Tooltip>
          <Tooltip placement="top" arrow content="علاقه مندی">
            <button className="email-icon">
              <Icon icon="heroicons-outline:star" />
            </button>
          </Tooltip>
          <Tooltip placement="top" arrow content="آرشیو">
            <button className="email-icon">
              <Icon icon="heroicons-outline:archive" />
            </button>
          </Tooltip>
          <Tooltip placement="top" arrow content="پرینت">
            <button className="email-icon">
              <Icon icon="heroicons-outline:printer" />
            </button>
          </Tooltip>
          <Tooltip placement="top" arrow content="حذف">
            <button className="email-icon">
              <Icon icon="heroicons-outline:trash" />
            </button>
          </Tooltip>
          <Tooltip placement="top" arrow content="عملیات">
            <button className="email-icon">
              <Icon icon="heroicons-outline:dots-horizontal" />
            </button>
          </Tooltip>
        </div>
      </div>

      <div>
        <div className="text-lg font-medium text-slate-600 dark:text-slate-300">
          پرداخت قبوض و دریافت تا 600 دلار پس‌گرفتی!
        </div>
        <div className="flex space-x-3 pt-4 pb-6 items-start rtl:space-x-reverse">
          <div className="flex-none">
            <div className="h-8 w-8 rounded-full text-white">
              <img
                src={singleEmail.image}
                alt=""
                className="block w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <span className="text-sm text-slate-600 dark:text-slate-300 font-medium leading-4">
              استر هووارد
            </span>
          </div>
        </div>
        <div className="text-sm text-slate-600 dark:text-slate-300 font-normal">
          سلام جین کوپر،
          <br />
          <br />
          روزنامه‌نگاران این بخش مقدمه‌ای کلیدی را "لید" می‌نامند و وقتی به
          درستی اجرا شود، آن بخشی است که خواننده را از عنوان جذاب و توجه‌برانگیز
          به بدنه مطلب وبلاگتان هدایت می‌کند، اگر می‌خواهید آن را درست انجام
          دهید، یکی از این 10 روش باهوش را برای آغاز بهتر وبلاگ بعدی خود امتحان
          کنید.
          <br />
          <br />
          با احترام، باید با آقای زینسر مخالفت کنم. ما همه می‌دانیم که بخش بسیار
          مهم هر مقاله عنوان آن است. بدون عنوان جذاب، خواننده حتی به جمله اول
          نمی‌رسد. اما پس از عنوان، چند جمله اول مقاله شما قطعاً بخش مهم‌تری
          است.
          <br />
          <br />
          با آرزوی بهترین ها،
          <br />
          استر هووارد
        </div>
        <div className="border-t border-b py-4 my-6 border-slate-100 dark:border-slate-700 flex flex-wrap space-x-5 rtl:space-x-reverse">
          <div className="text-center">
            <div className="h-[95px] w-[150px] rounded">
              <img
                src={InboxImage1}
                alt=""
                className="block w-full h-full object-cover"
              />
            </div>
            <button className="text-sm text-primary-500 mt-2" type="button">
              دانلود
            </button>
          </div>

          <div className="text-center">
            <div className="h-[95px] w-[150px] rounded">
              <img
                src={InboxImage2}
                alt=""
                className="block w-full h-full object-cover"
              />
            </div>
            <button className="text-sm text-primary-500 mt-2" type="button">
              دانلود
            </button>
          </div>

          <div className="text-center">
            <div className="h-[95px] w-[150px] rounded">
              <img
                src={InboxImage3}
                alt=""
                className="block w-full h-full object-cover"
              />
            </div>
            <button className="text-sm text-primary-500 mt-2" type="button">
              دانلود
            </button>
          </div>
        </div>

        <div>
          <Button
            icon="heroicons-outline:chat-alt-2"
            text="پاسخ"
            className="bg-slate-100 text-slate-900 dark:text-slate-300 hover:bg-slate-300 dark:bg-slate-900 btn-sm "
          />
        </div>
      </div>
    </div>
  );
};

export default EmailDetails;
