import React, { useState } from "react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Textarea from "@/components/ui/Textarea";
import Repeater from "./Repeater";
import Flatpickr from "react-flatpickr";
import { Persian } from "flatpickr/dist/l10n/fa";

const InvoiceEditPage = () => {
  const [picker, setPicker] = useState(new Date());
  return (
    <div>
      <Card title="ویرایش فاکتور">
        <h4 className="text-slate-900 dark:text-white text-xl mb-4">
          #89572935Kh
        </h4>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="lg:col-span-2 col-span-1 text-slate-900 dark:text-slate-300 text-base font-medium">
              درباره رسید-500
            </div>
            <div>
              <label htmlFor="default-picker" className=" form-label">
                تاریخ صدور
              </label>

              <Flatpickr
                className="form-control py-2"
                value={picker}
                onChange={(date) => setPicker(date)}
                id="default-picker"
                options={{ locale: Persian }}
              />
            </div>

            <Textinput
              label="نام"
              type="text"
              placeholder="نام خود را اضافه کنید"
            />
            <Textinput
              label="شماره موبایل"
              type="text"
              placeholder="شماره موبایل خود را اضافه کنید"
            />
            <Textinput
              label="ایمیل"
              type="email"
              placeholder="ایمیل خود را اصافه کنید"
            />
            <div className="lg:col-span-2 col-span-1">
              <Textarea label="آدرس" type="email" placeholder="آدرس" rows="2" />
            </div>
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="lg:col-span-2 col-span-1 text-slate-900 text-base dark:text-slate-300 font-medium">
              اطلاعات صاحب-500
            </div>

            <Textinput
              label="نام"
              type="text"
              placeholder="نام خود را اضافه کنید"
            />
            <Textinput
              label="شماره موبایل"
              type="text"
              placeholder="شماره موبایل خود را اضافه کنید"
            />
            <div className="lg:col-span-2 col-span-1">
              <Textinput
                label="ایمیل"
                type="email"
                placeholder="ایمیل خود را اصافه کنید"
              />
            </div>

            <div className="lg:col-span-2 col-span-1">
              <Textarea label="آدرس" type="email" placeholder="آدرس" rows="2" />
            </div>
          </div>
        </div>
        <div className="my-6">
          <Repeater />
        </div>
        <Textarea
          label="اطلاعات اضافه"
          type="text"
          rows="2"
          placeholder="یادداشت"
          className="lg:w-1/2"
        />
        <div className="ltr:text-right rtl:text-left space-x-3 rtl:space-x-reverse">
          <Button text="ذخیره" className="btn-dark" />
        </div>
      </Card>
    </div>
  );
};

export default InvoiceEditPage;
