import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { Link } from "react-router-dom";

// import images
import cardImage1 from "@/assets/images/all-img/card-1.png";
import cardImage2 from "@/assets/images/all-img/card-2.png";
import cardImage3 from "@/assets/images/all-img/card-3.png";
import cardImage4 from "@/assets/images/all-img/card-4.png";
import cardImage5 from "@/assets/images/all-img/card-5.png";
import cardImage6 from "@/assets/images/all-img/card-6.png";
import cardImage7 from "@/assets/images/all-img/card-7.png";
import postImage from "@/assets/images/all-img/post-1.png";
import authorImage from "@/assets/images/all-img/t1.png";

const cardsColor1 = [
  {
    title: "کارت اصلی",
    bg: "bg-primary-500",
    color: "text-primary-500",
  },
  {
    title: "کارت ثانویه ",
    bg: "bg-secondary-500",
    color: "text-secondary-500",
  },
  {
    title: "کارت موفق",
    bg: "bg-success-500",
    color: "text-success-500",
  },
  {
    title: "کارت خطر",
    bg: "bg-danger-500",
    color: "text-danger-500",
  },
  {
    title: "کارت هشدار",
    bg: "bg-warning-500",
    color: "text-warning-500",
  },
  {
    title: "کارت اطلاعات",
    bg: "bg-info-500",
    color: "text-info-500",
  },
];
const cardsColor2 = [
  {
    title: "کارت اصلی",
    ring: "ring-primary-500",
  },
  {
    title: "کارت ثانویه ",
    ring: "ring-secondary-500",
  },
  {
    title: "کارت موفق",
    ring: "ring-success-500",
  },
  {
    title: "کارت خطر",
    ring: "ring-danger-500",
  },
  {
    title: "کارت هشدار",
    ring: "ring-warning-500",
  },
  {
    title: "کارت اطلاعات",
    ring: "ring-info-500",
  },
];
const cards = [
  {
    title: "کارت اصلی",
    border: "border-primary-500",
    color: "text-primary-500",
    icon: "heroicons-outline:support",
  },
  {
    title: "کارت ثانویه ",
    border: "border-secondary-500",
    color: "text-secondary-500",
    icon: "heroicons-outline:stop",
  },
  {
    title: "کارت موفق",
    border: "border-success-500",
    color: "text-success-500",
    icon: "heroicons-outline:badge-check",
  },
  {
    title: "کارت خطر",
    border: "border-danger-500",
    color: "text-danger-500",
    icon: "heroicons-outline:ban",
  },
  {
    title: "کارت هشدار",
    border: "border-warning-500",
    color: "text-warning-500",
    icon: "heroicons-outline:exclamation",
  },
  {
    title: "کارت اطلاعات",
    border: "border-info-500",
    color: "text-info-500",
    icon: "heroicons-outline:information-circle",
  },
];

const card = () => {
  return (
    <div className=" space-y-5">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 card-height-auto">
        <Card title="عنوان کارت" subtitle="زیر نویس کارت" noborder>
          <div className="h-[140px] w-full mb-6">
            <img
              src={cardImage1}
              alt=""
              className="block w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="text-sm">متن تستی</div>
          <div className="mt-4 space-x-4 rtl:space-x-reverse">
            <Link to="#" className="btn-link">
              بیشتر بدانید
            </Link>
            <Link to="#" className="btn-link">
              لینک دیگر
            </Link>
          </div>
        </Card>
        <Card bodyClass="p-0">
          <div className="h-[140px] w-full">
            <img
              src={cardImage2}
              alt=""
              className="block w-full h-full object-cover rounded-t-md"
            />
          </div>
          <div className="p-6">
            <header className="mb-8">
              <div className="card-title">عنوان کارت</div>
              <div className="card-subtitle">زیر نویس کارت</div>
            </header>
            <div className="text-sm">متن تستی</div>
            <div className="mt-6 space-x-4 rtl:space-x-reverse">
              <Link to="#" className="btn-link">
                بیشتر بدانید
              </Link>
              <Link to="#" className="btn-link">
                لینک دیگر
              </Link>
            </div>
          </div>
        </Card>
        <Card bodyClass="p-0  relative z-[1]  rounded-md" noborder>
          <div className="  absolute left-0 top-0 w-full h-full rounded-md z-[-1] ">
            <img
              src={cardImage3}
              alt=""
              className="block w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="p-6">
            <header className="mb-5">
              <div className="card-title text-white">عنوان کارت</div>
            </header>

            <div className="text-white mt-[70px]">
              <div className="text-white text-sm mb-2">این یک زیر نویس است</div>
              <div className="text-sm">متن تستی</div>
            </div>
            <div className="mt-[71px]">
              <Button
                text="بیشتر بدانید"
                link="#"
                className="btn bg-white text-slate-800"
              />
            </div>
          </div>
        </Card>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 card-height-auto">
        <Card noborder bodyClass="p-0">
          <div className="image-box">
            <img
              src={cardImage4}
              alt=""
              className="rounded-t-md w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <div className="card-title mb-5">اتوماسیون فروش</div>
            <div className="text-sm">متن تستی</div>
          </div>
        </Card>
        <Card noborder bodyClass="p-0">
          <div className="p-6 text-center">
            <div className="card-title mb-5">شخصی سازی شده</div>
            <div className="text-sm">متن تستی</div>
          </div>
          <div className="image-box">
            <img
              src={cardImage5}
              alt=""
              className="rounded-t-md w-full h-full object-cover"
            />
          </div>
        </Card>
        <Card noborder bodyClass="p-0">
          <div className="image-box">
            <img
              src={cardImage6}
              alt=""
              className="rounded-t-md w-full h-full object-cover"
            />
          </div>
          <div className="p-6 text-center">
            <div className="card-title mb-5">اتوماسیون مارکتینگ</div>
            <div className="text-sm">متن تستی</div>
          </div>
        </Card>
        <Card noborder bodyClass="p-0">
          <div className="p-6 text-center  bg-[#E5F9FF]">
            <div className="card-title mb-5">شخصی سازی شده</div>
            <div className="text-sm">متن تستی</div>
          </div>
          <div className="image-box">
            <img
              src={cardImage7}
              alt=""
              className="rounded-t-md w-full h-full object-cover"
            />
          </div>
        </Card>
        <Card title="اتوماسیون فروش" noborder>
          <div className="text-sm">متن تستی</div>
          <div className="mt-4 space-x-4  space-x-reverse">
            <Link to="#" className="btn-link">
              بیشتر بدانید
            </Link>
          </div>
        </Card>
        <Card
          title="اتوماسیون فروش"
          className="bg-slate-800"
          titleClass="text-black"
          noborder
        >
          <div className="text-black">
            <div className="txt-sm">متن تستی</div>
          </div>
          <div className="mt-4 space-x-4  space-x-reverse">
            <Link to="#" className="btn-link">
              بیشتر بدانید
            </Link>
          </div>
        </Card>
        <Card
          title="اتوماسیون فروش"
          className="bg-[#EDFFE5] dark:bg-slate-800"
          noborder
        >
          <div className="text-sm">متن تستی</div>
          <div className="mt-4 space-x-4 ">
            <Link to="#" className="btn-link">
              بیشتر بدانید
            </Link>
          </div>
        </Card>
        <Card
          title="اتوماسیون فروش"
          className="bg-[#E5F9FF] dark:bg-slate-800	"
          noborder
        >
          <div className="text-sm">متن تستی</div>
          <div className="mt-4 space-x-4 space-x-reverse">
            <Link to="#" className="btn-link">
              بیشتر بدانید
            </Link>
          </div>
        </Card>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <Card title="اتوماسیون فروش" noborder>
          <div className="text-sm">متن تستی</div>
          <div className="mt-9">
            <Button className="btn-dark" text="بیشتر بدانید" />
          </div>
        </Card>
        <Card className="text-center" noborder>
          <div className="card-title mb-6">اتوماسیون فروش</div>
          <div className="text-sm">متن تستی</div>
          <div className="mt-9">
            <Button className="btn-dark" text="بیشتر بدانید" />
          </div>
        </Card>
        <Card title="اتوماسیون فروش" className=" text-center" noborder>
          <div className="text-sm">متن تستی</div>
          <div className="mt-9">
            <Button className="btn-dark block-btn" text="بیشتر بدانید" />
          </div>
        </Card>
      </div>
      <div className="grid gap-4 grid-cols-12 mt-5">
        <div className="xl:col-span-8 col-span-12">
          <Card>
            <div className="post-image mb-6">
              <img
                src={postImage}
                alt=""
                className=" w-full h-full block object-cover"
              />
            </div>
            <div className="flex justify-between mb-4">
              <Link to="#">
                <span className="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal">
                  <Icon
                    icon="heroicons-outline:calendar"
                    className="text-secondary-500 ltr:mr-2 rtl:ml-2 text-lg"
                  />
                  1402/01/18
                </span>
              </Link>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <Link to="#">
                  <span className="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal">
                    <Icon
                      icon="heroicons-outline:chat"
                      className="text-secondary-500 ltr:mr-2 rtl:ml-2 text-lg"
                    />
                    3
                  </span>
                </Link>
                <Link to="#">
                  <span className="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal">
                    <Icon
                      icon="heroicons-outline:share"
                      className="text-secondary-500 ltr:mr-2 rtl:ml-2 text-lg"
                    />
                    4
                  </span>
                </Link>
              </div>
            </div>
            <h5 className="card-title text-slate-900 dark:text-white">
              در مراقبت‌های بهداشتی شما توسط افرادی با مراقبت و اهتمام درمان
              می‌شوید.
            </h5>
            <div className="card-text mt-4">
              <p>متن تستی</p>
              <Button className="btn-outline-dark mt-8" text="بیشتر بخوانید" />
            </div>
          </Card>
        </div>
        <div className="xl:col-span-4 col-span-12 space-y-4">
          <Card>
            <div className="mb-6">
              <img
                src={postImage}
                alt=""
                className=" w-full h-full block object-cover"
              />
            </div>
            <div className="flex justify-between mb-4">
              <div>
                <div className="text-xl text-slate-900 dark:text-white">
                  متن تستی
                </div>
              </div>
              <Link to="#">
                <span className="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal">
                  <Icon
                    icon="heroicons-outline:calendar"
                    className="text-secondary-500 ltr:mr-2 rtl:ml-2 text-lg"
                  />
                  1402/01/18
                </span>
              </Link>
            </div>

            <div className="card-text mt-4">
              <p>متن تستی</p>
              <div className="mt-4 space-x-4 rtl:space-x-reverse">
                <Link to="#" className="btn-link">
                  بیشتر بدانید
                </Link>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex justify-between mb-4">
              <div>
                <div className="text-xl text-slate-900 dark:text-white">
                  متن تستی
                </div>
              </div>
              <Link to="#">
                <span className="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal">
                  <Icon
                    icon="heroicons-outline:calendar"
                    className="text-secondary-500 ltr:mr-2 rtl:ml-2 text-lg"
                  />
                  1402/01/18
                </span>
              </Link>
            </div>

            <div className="card-text mt-4">
              <p>متن تستی</p>
              <div className="mt-6 flex justify-between">
                <Link to="#" className="btn-link">
                  بیشتر بدانید
                </Link>
                <div className="flex space-x-4 rtl:space-x-reverse">
                  <Link to="#">
                    <span className="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal">
                      <Icon
                        icon="heroicons-outline:chat"
                        className="text-secondary-500 ltr:mr-2 rtl:ml-2 text-lg"
                      />
                      3
                    </span>
                  </Link>
                  <Link to="#">
                    <span className="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal">
                      <Icon
                        icon="heroicons-outline:share"
                        className="text-secondary-500 ltr:mr-2 rtl:ml-2 text-lg"
                      />
                      4
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-5">
        <Card>
          <div className="flex gap-4">
            <div className="flex-0 mr-6">
              <div className="author-img w-[65px] h-[88px] rounded-[40px]">
                <img
                  src={authorImage}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 gap-4">
              <div className="mb-4 text-base">“متن تستی”</div>
              <div className="flex space-x-5 gap-2">
                <span className="inline-block font-medium text-base">
                  صادق قاسم نژاد
                </span>
                <span className="inline-block">مدیر فروش</span>
              </div>
            </div>
          </div>
        </Card>
        <Card className="text-center ha-auto">
          <div className="text-2xl text-slate-600 dark:text-slate-300">
            “دیالوگ تستی”
          </div>
        </Card>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {cardsColor1.map((item, i) => (
          <Card
            title={item.title}
            className={`${item.bg} dark:${item.bg}`}
            titleClass="text-black"
            key={i}
            noborder
          >
            <div className="text-black text-sm">متن تستی</div>
          </Card>
        ))}

        {cardsColor2.map((item, i) => (
          <Card
            title={item.title}
            className={`ring-1 ${item.ring}`}
            key={i}
            noborder
          >
            <div className="text-sm">متن تستی</div>
          </Card>
        ))}
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 ">
        {cards.map((item, i) => (
          <Card bodyClass="p-0" key={i} noborder>
            <header
              className={`border-b px-4 pt-4 pb-3 flex items-center  ${item.border}`}
            >
              <span
                className={`text-3xl inline-block ltr:mr-2 rtl:ml-2 ${item.color}`}
              >
                <Icon icon={item.icon} />
              </span>
              <h6 className={`card-title mb-0  ${item.color}`}>{item.title}</h6>
            </header>
            <div className="py-3 px-5">
              <div className="card-title2 mb-2">عنوان کارت</div>
              <div className="text-sm">متن تستی</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default card;
