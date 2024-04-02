import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";

const InputPage = () => {
  const errorMessage = {
    message: "این فیلد نامعتبر میباشد",
  };
  const [value, setValue] = useState("");

  const handleFormatter = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <div className="grid xl:grid-cols-2 gap-5">
      <Card title="اینپوت ساده">
        <div className="space-y-3">
          <Textinput
            label="نام پروژه*"
            id="pn"
            type="text"
            placeholder="مدیریت داشبورد"
          />
          <Textinput
            label="ورودی غیر قابل تغییر"
            id="pn2"
            readonly
            type="text"
            placeholder="تو نمیتونی منو تغییر بدی :P"
          />
          <Textinput
            label="ورودی غیر فعال"
            id="pn3"
            placeholder="ورودی غیر فعال"
            disabled
            type="text"
          />
          <Textarea label="توضیحات پروژه" id="pn4" placeholder="اینجا بنویس" />
          <Select
            options={["آپشن 1", "آپشن 2", "آپشن 3"]}
            label="انتخاب آپشن"
          />
        </div>
      </Card>
      <div className=" space-y-5">
        <Card title="سایز آپشن">
          <div className="space-y-2">
            <Textinput
              label="بزرگ"
              id="largesize"
              type="text"
              placeholder="ورودی بزرگ"
              className="h-[52px]"
            />
            <Textinput
              label="معمولی"
              id="defaultsize"
              type="text"
              placeholder="ورودی معمولی"
            />
            <Textinput
              label="کوچک"
              id="smallsize"
              type="text"
              placeholder="ورودی کوچک"
              className="h-[32px] text-sm"
            />
          </div>
        </Card>
        <Card title="آپشن سایز">
          <div className="space-y-2">
            <Textinput
              label="بزرگ"
              id="largesize2"
              type="text"
              placeholder="ورودی بزرگ"
              className="h-[52px]"
              horizontal
            />
            <Textinput
              label="معمولی"
              id="defaultsize2"
              type="text"
              placeholder="ورودی معمولی"
              horizontal
            />
            <Textinput
              label="کوچک"
              id="smallsize2"
              type="text"
              placeholder="ورودی کوچک"
              className="h-[32px] text-sm"
              horizontal
            />
          </div>
        </Card>
      </div>
      <Card title="وضعیت ها">
        <div className="space-y-3">
          <Textinput
            label="وضعیت معتبر"
            id="ValidState"
            type="text"
            placeholder="معتبر"
            validate="این فیلد معتبر میباشد"
          />
          <Textinput
            label="وضعیت نا معتبر"
            id="InvalidState"
            type="text"
            placeholder="نا معتبر"
            error={errorMessage}
          />
        </div>
      </Card>
      <Card title="ورودی ها به همراه اعتابر سنجی از طریق tooltip">
        <div className="space-y-3">
          <Textinput
            label="وضعیت معتبر"
            id="ValidState"
            type="text"
            placeholder="معتبر"
            validate="این فیلد معتبر است"
            msgTooltip
          />
          <Textinput
            label="وضعیت نامعتبر"
            id="InvalidState"
            type="text"
            placeholder="نا معتبر"
            error={errorMessage}
            msgTooltip
          />
        </div>
      </Card>
      <div className="xl:col-span-2 col-span-1">
        <Card title="پشتیبانی از فرمتر">
          <Textinput
            label="این ورودی همراه با فرمتر میباشد"
            id="formatter-pn"
            type="text"
            placeholder="نام خود را وارد کنید"
            description="ما نام شما رو کوچک میکنیم (SADEGH->sadegh)"
            onChange={handleFormatter}
          />
          {value.toLowerCase()}
        </Card>
      </div>
    </div>
  );
};

export default InputPage;
