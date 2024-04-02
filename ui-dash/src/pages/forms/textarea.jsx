import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Textarea from "@/components/ui/Textarea";

const Textareapage = () => {
  const errorMessage = {
    message: "این یک وضعیت نا معتبر است",
  };
  const [value, setValue] = useState("");

  const handleFormatter = (e) => {
    const value = e.target.value;
    setValue(value);
  };
  return (
    <div className="grid xl:grid-cols-2 gap-5 ">
      <Card title="تکست آریا ساده">
        <Textarea label="تکست اریا" id="pn4" placeholder="تکست اریا" />
      </Card>
      <Card title="انتخاب ردیف ها">
        <Textarea label="تکست اریا" id="pn4" placeholder="تکست اریا" row="5" />
      </Card>
      <Card title="فرم افقی با لیبل سایز ">
        <div className=" space-y-3">
          <Textarea
            label="بزرگ"
            id="largesize2"
            type="text"
            placeholder="اینپوت بزرگ"
            rows="4"
            horizontal
          />
          <Textarea
            label="پیشفرض"
            type="text"
            id="df"
            placeholder="اینپوت پیشفرض"
            horizontal
          />
          <Textarea
            label="کوچک"
            id="smallsize2"
            type="text"
            placeholder="اینپوت کوچک"
            rows="2"
            horizontal
          />
        </div>
      </Card>
      <Card title="وضعیت ها">
        <div className=" space-y-3">
          <Textarea
            label="وضعیت معتبر"
            id="ValidState"
            placeholder="معتبر"
            validate="این یک وضعیت معتبر است"
          />
          <Textarea
            label="وضعیت نامعتبر"
            id="InvalidState"
            placeholder="نامعتبر"
            error={errorMessage}
          />
        </div>
      </Card>
      <Card title="اعتبار سنجی وردی همراه با استیت و تولتیپ">
        <div className=" space-y-3">
          <Textarea
            label="وضعیت معتبر"
            id="ValidState"
            placeholder="معتبر"
            validate="این یک وضعیت معتبر است"
            msgTooltip
          />
          <Textarea
            label="وضعیت نامعتبر"
            id="InvalidState"
            placeholder="نامعتبر"
            error={errorMessage}
            msgTooltip
          />
        </div>
      </Card>
      <Card title="پشتیبان کننده فرمت">
        <Textarea
          label="ورودی متن همراه با فرمتر"
          id="formatter-pn"
          type="text"
          placeholder="نام را وارد کنید"
          description="ما مقدار وارد شده را به حرف کوچک تبدیل میکنیم"
          onChange={handleFormatter}
        />
        {value.toLowerCase()}
      </Card>
    </div>
  );
};

export default Textareapage;
