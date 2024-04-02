import React from "react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const button = () => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
      <Card title="ساده">
        <div className="space-xy-5">
          <Button text="اصلی" className="btn-primary" />
          <Button text="ثانویه" className="btn-secondary" />
          <Button text="موفقیت" className="btn-success" />
          <Button text="اطلاعات" className="btn-info" />
          <Button text="هشدار" className="btn-warning" />
          <Button text="خطر" className="btn-danger" />
          <Button text="تاریک" className="btn-dark" />
          <Button text="روشن" className="btn-light" />
          <Button text="سفید" className="bg-white text-slate-900" />
        </div>
      </Card>
      <Card title="بردر دار">
        <div className="space-xy-5">
          <Button text="اصلی" className="btn-outline-primary" />
          <Button text="ثانویه" className="btn-outline-secondary" />
          <Button text="موفقیت" className="btn-outline-success" />
          <Button text="اطلاعات" className="btn-outline-info" />
          <Button text="هشدار" className="btn-outline-warning" />
          <Button text="خطر" className="btn-outline-danger" />
          <Button text="تاریک" className="btn-outline-dark" />
          <Button text="روشن" className="btn-outline-light" />
        </div>
      </Card>
      <Card title="رنگ روشن">
        <div className="space-xy-5">
          <Button text="اصلی" className="btn-primary light" />
          <Button text="ثانویه" className="btn-secondary light" />
          <Button text="موفقیت" className="btn-success light" />
          <Button text="اطلاعات" className="btn-info light" />
          <Button text="هشدار" className="btn-warning light" />
          <Button text="خطر" className="btn-danger light" />
          <Button text="تاریک" className="btn-dark light" />
          <Button text="روشن" className="btn-light light" />
        </div>
      </Card>
      <Card title="برجسته">
        <div className="space-xy-5">
          <Button text="اصلی" className="btn-primary shadow-base2" />
          <Button text="ثانویه" className="btn-secondary shadow-base2" />
          <Button text="موفقیت" className="btn-success shadow-base2" />
          <Button text="اطلاعات" className="btn-info shadow-base2" />
          <Button text="هشدار" className="btn-warning shadow-base2" />
          <Button text="خطر" className="btn-danger shadow-base2" />
          <Button text="تاریک" className="btn-dark shadow-base2" />
          <Button text="روشن" className="btn-light shadow-base2" />
          <Button
            text="سفید"
            className="bg-white text-slate-900 shadow-base2"
          />
        </div>
      </Card>
      <Card title="گردی بردر">
        <div className="space-xy-5">
          <Button text="اصلی" className="btn-primary rounded-[999px]" />
          <Button text="ثانویه" className="btn-secondary rounded-[999px]" />
          <Button text="موفقیت" className="btn-success rounded-[999px]" />
          <Button text="اطلاعات" className="btn-info rounded-[999px]" />
          <Button text="هشدار" className="btn-warning rounded-[999px]" />
          <Button text="خطر" className="btn-danger rounded-[999px]" />
          <Button text="تاریک" className="btn-dark rounded-[999px]" />
          <Button text="روشن" className="btn-light rounded-[999px]" />
          <Button
            text="سفید"
            className="bg-white text-slate-900 rounded-[999px]"
          />
        </div>
      </Card>
      <Card title="گرد Outline">
        <div className="space-xy-5">
          <Button text="اصلی" className="btn-outline-primary rounded-[999px]" />
          <Button
            text="ثانویه"
            className="btn-outline-secondary rounded-[999px]"
          />
          <Button
            text="موفقیت"
            className="btn-outline-success rounded-[999px]"
          />
          <Button text="اطلاعات" className="btn-outline-info rounded-[999px]" />
          <Button
            text="هشدار"
            className="btn-outline-warning rounded-[999px]"
          />
          <Button text="خطر" className="btn-outline-danger rounded-[999px]" />
          <Button text="تاریک" className="btn-outline-dark rounded-[999px]" />
          <Button text="روشن" className="btn-outline-light rounded-[999px]" />
        </div>
      </Card>
      <Card title="آیکون">
        <div className="space-xy-5">
          <Button
            icon="heroicons-outline:newspaper"
            text="آیکون چپ"
            className="btn-primary "
          />
          <Button
            icon="heroicons-outline:newspaper"
            text="آیکون چپ"
            className="btn-outline-primary "
          />
          <Button
            icon="heroicons-outline:newspaper"
            text="آیکون راست"
            className="btn-primary "
            iconPosition="right"
          />
          <Button
            icon="heroicons-outline:newspaper"
            text="آیکون راست"
            className="btn-outline-primary "
            iconPosition="right"
          />
          <Button
            icon="heroicons-outline:newspaper"
            className="btn-outline-primary"
          />
          <Button icon="heroicons-outline:newspaper" className="btn-primary" />
        </div>
      </Card>
      <Card title="آیکون دار و خمیدگی بردر">
        <div className="space-xy-5">
          <Button
            icon="heroicons-outline:newspaper"
            text="آیکون چپ"
            className="btn-primary rounded-[999px]"
          />
          <Button
            icon="heroicons-outline:newspaper"
            text="آیکون چپ"
            className="btn-outline-primary rounded-[999px]"
          />
          <Button
            icon="heroicons-outline:newspaper"
            text="آیکون راست"
            className="btn-primary rounded-[999px]"
            iconPosition="right"
          />
          <Button
            icon="heroicons-outline:newspaper"
            text="آیکون راست"
            className="btn-outline-primary rounded-[999px]"
            iconPosition="right"
          />
          <Button
            icon="heroicons-outline:newspaper"
            className="btn-outline-primary rounded-[999px]"
          />
          <Button
            icon="heroicons-outline:newspaper"
            className="btn-primary rounded-[999px]"
          />
          <Button
            icon="heroicons-outline:newspaper"
            className="btn-primary p-0 h-12 w-12 flex items-center justify-center rounded-full"
          />
        </div>
      </Card>
      <Card title="سایز">
        <div className="space-xy-5">
          <Button text="دکمه بزرگ" className="btn-primary btn-xl" />
          <Button text="پیش‌فرض" className="btn-primary" />
          <Button text="کوچک" className="btn-primary btn-sm" />
        </div>
      </Card>
      <Card title="غیرفعال">
        <div className="space-xy-5">
          <Button text="اصلی" className="btn-primary " disabled />
          <Button text="ثانویه" className=" btn-secondary" disabled />
          <Button text="موفقیت" className=" btn-success" disabled />
          <Button text="اطلاعات" className=" btn-info" disabled />
          <Button text="هشدار" className=" btn-warning" disabled />
          <Button text="خطر" className=" btn-danger" disabled />
          <Button text="تاریک" className=" btn-dark" disabled />
          <Button text="روشن" className=" btn-light" disabled />
          <Button text="سفید" className=" bg-white text-slate-900" disabled />
        </div>
      </Card>
      <Card title="لودینگ">
        <div className="space-xy-5">
          <Button text="اصلی" className="btn-primary " isLoading />
          <Button text="ثانویه" className=" btn-secondary" isLoading />
          <Button text="موفقیت" className=" btn-success" isLoading />
          <Button text="اطلاعات" className=" btn-info" isLoading />
          <Button text="هشدار" className=" btn-warning" isLoading />
          <Button text="خطر" className=" btn-danger" isLoading />
          <Button text="تیره" className=" btn-dark" isLoading />
          <Button text="روشن" className=" btn-light" isLoading />
          <Button text="سفید" className=" bg-white text-slate-900" isLoading />
        </div>
      </Card>

      <Card title="بلاک">
        <div className="grid grid-cols-1 gap-4">
          <Button text="اصلی" className="btn-primary block-btn" type="submit" />
          <Button
            icon="heroicons-outline:newspaper"
            text="آیکون چپ"
            className="btn-secondary block-btn"
          />
          <Button
            icon="heroicons-outline:newspaper"
            text="آیکون راست"
            className="btn-success block-btn"
            iconPosition="right"
          />
        </div>
      </Card>
      <Card title="لینک">
        <div className="space-xy-5">
          <Button text="اصلی" className="btn-primary" link="/dashboard" />
          <Button text="ثانویه" className="btn-secondary" link="/dashboard" />
          <Button text="موفقیت" className="btn-success" link="/dashboard" />
          <Button text="اطلاعات" className="btn-info" link="/dashboard" />
          <Button text="هشدار" className="btn-warning" link="/dashboard" />
          <Button text="خطر" className="btn-danger" link="/dashboard" />
          <Button text="تیره" className="btn-dark" link="/dashboard" />
          <Button text="روشن" className="btn-light" link="/dashboard" />
          <Button
            text="سفید"
            className="bg-white text-slate-900"
            link="/dashboard"
          />
        </div>
      </Card>
    </div>
  );
};

export default button;
