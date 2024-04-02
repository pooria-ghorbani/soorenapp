import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Checkbox from "@/components/ui/Checkbox";
import Button from "@/components/ui/Button";
import InputGroup from "@/components/ui/InputGroup";
import Icon from "@/components/ui/Icon";

const InputlayoutPage = () => {
  const [checked, setChecked] = useState(true);

  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
      <Card title="فرم افقی">
        <div className="space-y-4">
          <Textinput
            label="نام کامل"
            id="h_Fullname"
            type="text"
            placeholder="نام کامل"
            horizontal
          />
          <Textinput
            label="ایمیل"
            id="h_email"
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            horizontal
          />
          <Textinput
            label="شماره موبایل"
            id="h_phone"
            type="phone"
            placeholder="ایمیل خود را وارد کنید"
            horizontal
          />
          <Textinput
            label="رمز عبور"
            id="h_password"
            type="Password"
            placeholder="8 کاراکتر و خداقل یک حرف بزرگ"
            horizontal
          />
          <div className="ml-[124px] space-y-4">
            <Checkbox
              label="مرا بخاطر بسپار"
              value={checked}
              onChange={() => setChecked(!checked)}
            />
            <Button text="تایید" className="btn-dark" />
          </div>
        </div>
      </Card>
      <Card title="فرم افقی همراه با آیکن">
        <div className="space-y-4">
          <InputGroup
            label="نام کامل"
            id="hi_Fullname"
            type="text"
            placeholder="نام کامل"
            horizontal
            prepend={<Icon icon="heroicons-outline:user" />}
            merged
          />
          <InputGroup
            label="ایمیل"
            id="hi_email"
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            prepend={<Icon icon="heroicons-outline:mail" />}
            horizontal
            merged
          />
          <InputGroup
            label="شماره موبایل"
            id="hi_phone"
            type="phone"
            placeholder="ایمیل خود را وارد کنید"
            prepend={<Icon icon="heroicons-outline:phone" />}
            horizontal
            merged
          />
          <InputGroup
            label="رمز عبور"
            id="hi_password"
            type="Password"
            placeholder="8 کاراکتر و خداقل یک حرف بزرگ"
            prepend={<Icon icon="heroicons-outline:lock-closed" />}
            horizontal
            merged
          />
          <div className="ml-[124px] space-y-4">
            <Checkbox
              label="مرا بخاطر بسپار"
              value={checked}
              onChange={() => setChecked(!checked)}
            />
            <Button text="تایید" className="btn-dark" />
          </div>
        </div>
      </Card>
      <Card title="فرم عمودی">
        <div className="space-y-4">
          <Textinput
            label="نام کامل"
            id="h_Fullname2"
            type="text"
            placeholder="نام کامل"
          />
          <Textinput
            label="ایمیل"
            id="h_email2"
            type="email"
            placeholder="ایمیل خود را وارد کنید"
          />
          <Textinput
            label="شماره موبایل"
            id="h_phone2"
            type="phone"
            placeholder="ایمیل خود را وارد کنید"
          />
          <Textinput
            label="رمز عبور"
            id="h_password2"
            type="Password"
            placeholder="8 کاراکتر و خداقل یک حرف بزرگ"
          />
          <div className=" space-y-4">
            <Checkbox
              label="مرا بخاطر بسپار"
              value={checked}
              onChange={() => setChecked(!checked)}
            />
            <Button text="تایید" className="btn-dark" />
          </div>
        </div>
      </Card>
      <Card title="فرم عمودی همراه با آیکن">
        <div className="space-y-4">
          <InputGroup
            label="نام کامل"
            id="hi_Fullname1"
            type="text"
            placeholder="نام کامل"
            prepend={<Icon icon="heroicons-outline:user" />}
            merged
          />
          <InputGroup
            label="ایمیل"
            id="hi_email1"
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            prepend={<Icon icon="heroicons-outline:mail" />}
            merged
          />
          <InputGroup
            label="شماره موبایل"
            id="hi_phone1"
            type="phone"
            placeholder="ایمیل خود را وارد کنید"
            prepend={<Icon icon="heroicons-outline:phone" />}
            merged
          />
          <InputGroup
            label="رمز عبور"
            id="hi_password1"
            type="Password"
            placeholder="8 کاراکتر و خداقل یک حرف بزرگ"
            prepend={<Icon icon="heroicons-outline:lock-closed" />}
            merged
          />
          <div className=" space-y-4">
            <Checkbox
              label="مرا بخاطر بسپار"
              value={checked}
              onChange={() => setChecked(!checked)}
            />
            <Button text="تایید" className="btn-dark" />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InputlayoutPage;
