import React from "react";

export const lists = [
  {
    title: "تاریخ شروع پروژه",
    desc: "این پارسل توسط مشتری پرداخت شده است. لطفاً برای کسب اطلاعات بیشتر با مشتری تماس بگیرید.",
    date: "سپتامبر 20, 2021",
    time: "12:32 AM",
    status: "با موفقیت",
  },
  {
    title: "تاریخ شروع پروژه",
    date: "سپتامبر 20, 2021",
    desc: "این پارسل توسط مشتری پرداخت شده است. لطفاً برای کسب اطلاعات بیشتر با مشتری تماس بگیرید.",
    time: "12:32 AM",
    status: "با موفقیت",
  },
  {
    title: "تاریخ شروع پروژه",
    date: "سپتامبر 20, 2021",
    desc: "این پارسل توسط مشتری پرداخت شده است. لطفاً برای کسب اطلاعات بیشتر با مشتری تماس بگیرید.",
    time: "12:32 AM",
    status: "با موفقیت",
  },
  {
    title: "تاریخ شروع پروژه",
    date: "سپتامبر 20, 2021",
    desc: "این پارسل توسط مشتری پرداخت شده است. لطفاً برای کسب اطلاعات بیشتر با مشتری تماس بگیرید.",
    time: "12:32 AM",
  },
  {
    title: "تاریخ شروع پروژه",
    date: "سپتامبر 20, 2021",
    desc: "این پارسل توسط مشتری پرداخت شده است. لطفاً برای کسب اطلاعات بیشتر با مشتری تماس بگیرید.",
    time: "12:32 AM",
  },
];
const TrackingParcel = () => {
  return (
    <ul className="relative ltr:pl-2 rtl:pr-2">
      {lists.map((item, i) => (
        <li
          key={i}
          className={`
               ${
                 item.status === "ok"
                   ? "before:opacity-100"
                   : " before:opacity-50"
               }

                 ltr:border-l-2 rtl:border-r-2 border-slate-100 dark:border-slate-700 pb-4 
                 last:border-none ltr:pl-[22px] rtl:pr-[22px] relative before:absolute ltr:before:left-[-8px] 
                 rtl:before:-right-2 before:top-[0px] before:rounded-full before:w-4 before:h-4
                  before:bg-slate-900 dark:before:bg-slate-600 before:leading-[2px] 
                  before:content-[url('@/assets/images/all-img/ck.svg')] `}
        >
          <div className="p-[10px] relative top-[-20px]">
            <h2 className="text-sm font-medium dark:text-slate-400-900 mb-1 text-slate-600">
              {item.title}
            </h2>
            <p className="text-xs capitalize dark:text-slate-400">
              {item.date}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TrackingParcel;
