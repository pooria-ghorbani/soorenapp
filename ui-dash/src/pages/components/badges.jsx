import React from "react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";

const badges = () => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
      <Card title="بج ساده">
        <div className="space-xy-5">
          <Badge label="اصلی" className="bg-primary-500 text-white" />
          <Badge label="ثانویه" className="bg-secondary-500 text-white" />
          <Badge label="خطر" className="bg-danger-500 text-white" />
          <Badge label="موفق" className="bg-success-500 text-white" />
          <Badge label="درباره" className="bg-info-500 text-white" />
          <Badge label="هشدار" className="bg-warning-500 text-white" />
          <Badge
            label="تیره"
            className="bg-slate-800 dark:bg-slate-900  text-white"
          />
        </div>
      </Card>
      <Card title="Pill بج">
        <div className="space-xy-5">
          <Badge label="اصلی" className="bg-primary-500 text-white pill" />
          <Badge label="ثانویه" className="bg-secondary-500 text-white pill" />
          <Badge label="خطر" className="bg-danger-500 text-white pill" />
          <Badge label="موفق" className="bg-success-500 text-white pill" />
          <Badge label="درباره" className="bg-info-500 text-white pill" />
          <Badge label="هشدار" className="bg-warning-500 text-white pill" />
          <Badge
            label="تیره"
            className="bg-slate-800 dark:bg-slate-900 text-white pill"
          />
        </div>
      </Card>
      <Card title="Soft بج">
        <div className="space-xy-5">
          <Badge
            label="اصلی"
            className="bg-primary-500 text-primary-500 bg-opacity-[0.12]"
          />
          <Badge
            label="ثانویه"
            className="bg-secondary-500 text-secondary-500 bg-opacity-[0.12]"
          />
          <Badge
            label="خطر"
            className="bg-danger-500 text-danger-500 bg-opacity-[0.12]"
          />
          <Badge
            label="موفق"
            className="bg-success-500 text-success-500 bg-opacity-[0.12]"
          />
          <Badge
            label="درباره"
            className="bg-info-500 text-info-500 bg-opacity-[0.12]"
          />
          <Badge
            label="هشدار"
            className="bg-warning-500 text-warning-500 bg-opacity-[0.12]"
          />
          <Badge
            label="تیره"
            className="bg-slate-800 dark:bg-slate-900 text-slate-800 dark:text-slate-400 bg-opacity-[0.12]"
          />
        </div>
      </Card>
      <Card title="Soft Pill بج">
        <div className="space-xy-5">
          <Badge
            label="اصلی"
            className="bg-primary-500 text-primary-500 bg-opacity-[0.12] pill"
          />
          <Badge
            label="ثانویه"
            className="bg-secondary-500 text-secondary-500 bg-opacity-[0.12] pill"
          />
          <Badge
            label="خطر"
            className="bg-danger-500 text-danger-500 bg-opacity-[0.12] pill"
          />
          <Badge
            label="موفق"
            className="bg-success-500 text-success-500 bg-opacity-[0.12] pill"
          />
          <Badge
            label="درباره"
            className="bg-info-500 text-info-500 bg-opacity-[0.12] pill"
          />
          <Badge
            label="هشدار"
            className="bg-warning-500 text-warning-500 bg-opacity-[0.12] pill"
          />
          <Badge
            label="تیره"
            className="bg-slate-800 dark:bg-slate-900 text-slate-800 dark:text-slate-400 bg-opacity-[0.12] pill"
          />
        </div>
      </Card>
      <Card title="بج همراه با آیکون">
        <div className="space-xy-5">
          <Badge
            label="اصلی"
            className="bg-primary-500 text-white "
            icon="heroicons-outline:star"
          />
          <Badge
            label="ثانویه"
            className="bg-secondary-500 text-white"
            icon="heroicons-outline:star"
          />
          <Badge
            label="خطر"
            className="bg-danger-500 text-white"
            icon="heroicons-outline:star"
          />
          <Badge
            label="موفق"
            className="bg-success-500 text-white"
            icon="heroicons-outline:star"
          />
          <Badge
            label="درباره"
            className="bg-info-500 text-white"
            icon="heroicons-outline:star"
          />
          <Badge
            label="هشدار"
            className="bg-warning-500 text-white"
            icon="heroicons-outline:star"
          />
          <Badge
            label="تیره"
            className="bg-slate-800 dark:bg-slate-900 text-white"
            icon="heroicons-outline:star"
          />
        </div>
      </Card>
      <Card title="بج همراه با دکمه">
        <div className="space-xy-5">
          <Button className="btn-dark">
            <div className="space-x-1 rtl:space-x-reverse">
              <span>اعلان ها</span>
              <Badge label="2" className="bg-white text-slate-900 " />
            </div>
          </Button>
          <Button className="btn-success">
            <div className="space-x-1 rtl:space-x-reverse">
              <span>پیام ها</span>
              <Badge label="4" className="bg-white text-slate-900 " />
            </div>
          </Button>
          <Button className="btn-info">
            <div className="space-x-1 rtl:space-x-reverse">
              <span>Draft</span>
              <Badge label="3" className="bg-white text-slate-900" />
            </div>
          </Button>
        </div>
      </Card>
      <div className="xl:col-span-2 col-span-1">
        <Card title="بج با موقعیت">
          <div className="space-xy-5 flex items-center">
            <Button className=" btn-primary ">
              ایمیل ها
              <Badge
                label="2"
                className="bg-danger-500  text-white absolute -top-3 ltr:-right-2 rtl:-left-2"
              />
            </Button>
            <Button className=" btn-secondary">
              اعلان ها
              <Badge
                label={null}
                className="bg-danger-500 rounded-circile h-4 w-4  text-white absolute -top-2 ltr:-right-2 rtl:-left-2"
              />
            </Button>
            <Button className=" btn-success ">
              <div className="text-2xl">
                <Icon icon="heroicons:envelope" />
              </div>
              <Badge
                label={null}
                className="bg-danger-500 rounded-circile h-4 w-4  text-white absolute -top-2 ltr:-right-2 rtl:-left-2"
              />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default badges;
