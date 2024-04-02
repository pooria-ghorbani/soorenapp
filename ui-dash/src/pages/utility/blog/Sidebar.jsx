import React from "react";
import { Link } from "react-router-dom";
import InputGroup from "@/components/ui/InputGroup";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

// import images
import t1Img from "@/assets/images/post/t-1.png";
import t2Img from "@/assets/images/post/t-2.png";
import t3Img from "@/assets/images/post/t-3.png";

const category = [
  {
    cta: "طراح گرافیک (214) ",
  },
  {
    cta: "شغل‌های مهندسی (514) ",
  },
  {
    cta: "شغل‌های مین‌فریم (554)",
  },
  {
    cta: "شغل‌های حقوقی (457)",
  },
  {
    cta: "شغل‌های فناوری اطلاعات (1254) ",
  },
  {
    cta: "شغل‌های تحقیق و توسعه (554) ",
  },
  {
    cta: "شغل‌های دولتی (350) ",
  },
  {
    cta: "شغل‌های PSL (221)",
  },
];
const posts = [
  {
    img: t1Img,
  },
  {
    img: t2Img,
  },
  {
    img: t3Img,
  },
];
const tags = [
  {
    title: "بیزینس",
    link: "#",
  },
  {
    title: "مشاوره",
    link: "#",
  },
  {
    title: "عکاسی",
    link: "#",
  },
  {
    title: "سرمایه گذاری",
    link: "#",
  },
  {
    title: "دوربین",
    link: "#",
  },
  {
    title: "ضمانت",
    link: "#",
  },
  {
    title: "امنیت",
    link: "#",
  },
];
const Sidebar = () => {
  return (
    <div className="space-y-5 divide-y divide-slate-100 dark:divide-slate-700 -mx-6">
      <div className="px-6">
        <InputGroup
          type="text"
          placeholder="جستجو...."
          append={
            <Button
              icon="heroicons-outline:search"
              className="btn-dark dark:bg-slate-600"
            />
          }
        />
      </div>
      <div className="pt-4 px-6">
        <h4 className="text-slate-600 dark:text-slate-300 text-xl font-medium mb-4">
          آخرین پست های بلاگ
        </h4>
        <ul className="list-item space-y-4">
          {posts.map((item, i) => (
            <li key={i}>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <div className="flex-none">
                  <div className="h-20 w-20">
                    <img
                      src={item.img}
                      alt=""
                      className="block w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <h4 className="text-sm text-slate-600 font-regular leading-5 mb-4">
                    <Link to="#">توضیحات بلاگ</Link>.
                  </h4>
                  <span className="text-xs text-slate-400">
                    <Link to="#">فروردین 09, 1402</Link>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-4 px-6">
        <h4 className="text-slate-600 dark:text-slate-300 text-xl font-medium mb-4">
          دسته بندی
        </h4>
        <ul className="list-item space-y-6">
          {category.map((item, i) => (
            <li key={i}>
              <Link
                to="#"
                className="flex space-x-1 items-start leading-[1] text-sm text-slate-500 dark:text-slate-300 hover:text-slate-900 transition duration-150 rtl:space-x-reverse"
              >
                <span className="text-sm">
                  <Icon
                    icon="heroicons:chevron-right-solid"
                    className="rotate-180"
                  />
                </span>
                <span>{item.cta}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-4 px-6">
        <h4 className="text-slate-600 dark:text-slate-300 text-xl font-medium mb-4">
          تگ های پرطرفدار
        </h4>
        <ul className="flex flex-wrap">
          {tags.map((item, i) => (
            <li key={i} className="mr-2 mb-2">
              <Link
                to={item.link}
                className="text-xs font-normal text-slate-600 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 py-1 px-3 rounded-full hover:bg-slate-900 hover:text-white transition duration-150"
              >
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="mx-6 bg-slate-900 dark:bg-slate-900 text-white rounded-xl p-6 space-y-4">
        <h4 className="text-xl font-medium text-white">عضو بلاگ ما بشید</h4>
        <div className="text-sm">متن تستی رندوم</div>
        <form action="#" className="space-y-4">
          <input
            type="text"
            placeholder="ایمیل خود را وارد کنید"
            className="form-control py-2 bg-transparent border-secondary-500 text-white placeholder:text-slate-400"
          />
          <button type="button" className="btn btn-light btn-sm w-full">
            عضو شدن
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
