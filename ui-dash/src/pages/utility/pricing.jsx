import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

// import images
import img1 from "@/assets/images/all-img/big-shap1.png";
import img2 from "@/assets/images/all-img/big-shap2.png";
import img3 from "@/assets/images/all-img/big-shap3.png";
import img4 from "@/assets/images/all-img/big-shap4.png";

const tables = [
  {
    title: "پیشرفته",
    price_Yearly: "تومان 96",
    price_Monthly: "تومان 26",
    button: "الان بخیر",
    bg: "bg-warning-500",
    img: img1,
  },
  {
    title: "بیزینس",
    price_Yearly: "تومان 196",
    price_Monthly: "$20",
    button: "الان بخیر",
    bg: "bg-info-500",
    ribon: "پرطرفدار ترین",
    img: img2,
  },
  {
    title: "ساده",
    price_Yearly: "تومان 26",
    price_Monthly: "$16",
    button: "رایگان امتحان کنید",
    bg: "bg-success-500",
    img: img3,
  },
  {
    title: "یک تیم بزرگ داری؟",
    price_Yearly: "تومان 126",
    price_Monthly: "$16",
    button: "درخواست مکالمه",
    bg: "bg-primary-500",
    img: img4,
  },
];
const tables2 = [
  {
    title: "پیشرفته",
    price_Yearly: "تومان 96",
    price_Monthly: "تومان 26",
    button: "الان بخیر",
    bg: "bg-white",
  },
  {
    title: "بیزینس",
    price_Yearly: "تومان 196",
    price_Monthly: "$20",
    button: "الان بخیر",
    bg: "bg-slate-900",
    ribon: "پرطرفدار ترین",
  },
  {
    title: "ساده",
    price_Yearly: "تومان 26",
    price_Monthly: "$16",
    button: "رایگان امتحان کنید",
    bg: "bg-white",
  },
  {
    title: "یک تیم بزرگ داری؟",
    price_Yearly: "تومان 126",
    price_Monthly: "$16",
    button: "درخواست مکالمه",
    bg: "bg-white",
  },
];
const PricingPage = () => {
  const [check, setCheck] = useState(true);
  const toggle = () => {
    setCheck(!check);
  };

  return (
    <div>
      <div className="space-y-5">
        <Card>
          <div className="flex justify-between mb-6">
            <h4 className="text-slate-900 text-xl font-medium">بسته ها</h4>
            <label className="inline-flex text-sm cursor-pointer">
              <input type="checkbox" onChange={toggle} hidden />
              <span
                className={` ${
                  check
                    ? "bg-slate-900 dark:bg-slate-900 text-white"
                    : "dark:text-slate-300"
                } 
                px-[18px] py-1 transition duration-100 rounded`}
              >
                سالیانه
              </span>
              <span
                className={`
              ${
                !check
                  ? "bg-slate-900 dark:bg-slate-900 text-white"
                  : " dark:text-slate-300"
              }
                px-[18px] py-1 transition duration-100 rounded
                `}
              >
                ماهیانه{" "}
              </span>
            </label>
          </div>
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            {tables.map((item, i) => (
              <div
                className={` ${item.bg}
          price-table bg-opacity-[0.16] dark:bg-opacity-[0.36] rounded-[6px] p-6 text-slate-900 dark:text-white relative overflow-hidden z-[1]
          `}
                key={i}
              >
                <div className="overlay absolute right-0 top-0 w-full h-full z-[-1]">
                  <img src={item.img} alt="" className="ml-auto block" />
                </div>
                {item.ribon && (
                  <div className="text-sm font-medium bg-slate-900 dark:bg-slate-900 text-white py-2 text-center absolute ltr:-right-[43px] rtl:-left-[43px] top-6 px-10 transform ltr:rotate-[45deg] rtl:-rotate-45">
                    {item.ribon}
                  </div>
                )}
                <header className="mb-6">
                  <h4 className="text-xl mb-5">{item.title}</h4>
                  <div className="space-x-4 relative flex items-center mb-5 rtl:space-x-reverse">
                    {check ? (
                      <span className="text-[32px] leading-10 font-medium">
                        {item.price_Yearly}{" "}
                      </span>
                    ) : (
                      <span className="text-[32px] leading-10 font-medium">
                        {item.price_Monthly}
                      </span>
                    )}

                    <span className="text-xs text-warning-500 font-medium px-3 py-1 rounded-full inline-block bg-white uppercase h-auto">
                      ذخیره کن 20%
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-300 text-sm">
                    به ازای کاربر/ماهیانه،سالیانه
                  </p>
                </header>
                <div className="price-body space-y-8">
                  <p className="text-sm leading-5 text-slate-600 dark:text-slate-300">
                    طراحی شده برای تیم‌هایی که نیاز به مدیریت جریان کارهای
                    پیچیده‌تر با اتوماسیون و ادغام بیشتر دارند.
                  </p>
                  <div>
                    <Button
                      text={item.button}
                      className="btn-outline-dark dark:border-slate-400 w-full"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
          {tables2.map((item, i) => (
            <div
              className={`${item.bg} 
            
            price-table rounded-[6px] shadow-base dark:bg-slate-800 p-6 text-slate-900 dark:text-white relative overflow-hidden z-[1]
            `}
              key={i}
            >
              <div className="overlay absolute right-0 top-0 w-full h-full z-[-1]">
                <img src={item.img} alt="" className="ml-auto block" />
              </div>
              {item.ribon && (
                <div className="text-sm font-medium bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-300 py-2 text-center absolute ltr:-right-[43px] rtl:-left-[43px] top-6 px-10 transform ltr:rotate-[45deg] rtl:-rotate-45">
                  {item.ribon}
                </div>
              )}
              <header className="mb-6">
                <h4
                  className={` 
             ${
               item.bg === "bg-slate-900"
                 ? "text-slate-100"
                 : "text-slate-900 dark:text-slate-300"
             }
             text-xl mb-5 `}
                >
                  {item.title}
                </h4>
                <div
                  className={`
             ${
               item.bg === "bg-slate-900"
                 ? "text-slate-100"
                 : "text-slate-900 dark:text-slate-300"
             }
                space-x-4 relative flex items-center mb-5 rtl:space-x-reverse`}
                >
                  {check ? (
                    <span className="text-[32px] leading-10 font-medium">
                      {item.price_Yearly}{" "}
                    </span>
                  ) : (
                    <span className="text-[32px] leading-10 font-medium">
                      {item.price_Monthly}
                    </span>
                  )}

                  <span className="text-xs bg-warning-50 text-warning-500 font-medium px-2 py-1 rounded-full inline-block dark:bg-slate-700 uppercase h-auto">
                    ذخیره کن 20%
                  </span>
                </div>
                <p
                  className={` text-sm
             ${
               item.bg === "bg-slate-900"
                 ? "text-slate-100"
                 : "text-slate-500 dark:text-slate-300"
             }
                `}
                >
                  به ازای کاربر/ماهیانه،سالیانه
                </p>
              </header>
              <div className="price-body space-y-8">
                <p
                  className={`
              ${
                item.bg === "bg-slate-900"
                  ? "text-slate-100"
                  : "text-slate-600 dark:text-slate-300"
              }
                text-sm leading-5
                `}
                >
                  طراحی شده برای تیم‌هایی که نیاز به مدیریت جریان کارهای پیچیده
                  با بیشترین سطح اتوماسیون و ادغام دارند.
                </p>
                <div>
                  <Button
                    text={item.button}
                    className={` w-full ${
                      item.bg === "bg-slate-900"
                        ? "text-slate-100 border-slate-300 border"
                        : "btn-outline-dark dark:border-slate-400"
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;