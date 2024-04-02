import React from "react";
import Card from "@/components/ui/Card";
import InputGroup from "@/components/ui/InputGroup";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";

const InputGroupPage = () => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
      <Card title="اینپوت ساده">
        <div className="space-y-3">
          <InputGroup
            type="text"
            prepend={<Icon icon="heroicons-outline:search" />}
          />
          <InputGroup
            type="text"
            append={<Icon icon="heroicons-outline:search" />}
          />
          <InputGroup
            type="text"
            append={<Icon icon="heroicons-outline:search" />}
            disabled
            placeholder="اینپوت غیر فعال"
          />
          <InputGroup
            type="text"
            prepend={<Icon icon="heroicons-outline:search" />}
            readonly
            placeholder="اینپوت فقط خواندنی"
          />
          <InputGroup
            type="text"
            label="رمز عبور"
            id="ps-1"
            placeholder="رمز عبور"
          />
          <InputGroup type="text" placeholder="نام کاربری" prepend="@" />
          <InputGroup
            type="text"
            placeholder="نام کاربری"
            append="@example.com"
          />
          <InputGroup
            type="text"
            prepend="https://example.com/users/"
            placeholder=""
          />
          <InputGroup type="text" prepend="$" placeholder="100" append="00." />
        </div>
      </Card>
      <div className="card-auto-height space-y-5">
        <Card title="اندازه">
          <div className="space-y-2">
            <InputGroup
              label="بزرگ"
              id="largesize"
              type="text"
              placeholder="اینپوت بزرگ"
              className="h-[52px]"
              prepend="@"
            />
            <InputGroup
              label="پیشفرض"
              id="defaultsize"
              type="text"
              placeholder="اینپوت پیشفرض"
              prepend="@"
            />
            <InputGroup
              label="کوچک"
              id="smallsize"
              type="text"
              placeholder="اینپوت کوچک"
              className="h-[32px] text-sm"
              prepend="@"
            />
          </div>
        </Card>
        <Card title="فرم افقی با لیبل سایز ">
          <div className="space-y-2">
            <InputGroup
              label="بزرگ"
              id="largesize"
              type="text"
              placeholder="اینپوت بزرگ"
              className="h-[52px]"
              prepend="@"
              horizontal
            />
            <InputGroup
              label="پیشفرض"
              id="defaultsize"
              type="text"
              placeholder="اینپوت پیشفرض"
              prepend="@"
              horizontal
            />
            <InputGroup
              label="کوچک"
              id="smallsize"
              type="text"
              placeholder="اینپوت کوچک"
              className="h-[32px] text-sm"
              prepend="@"
              horizontal
            />
          </div>
        </Card>
      </div>
      <div className="xl:col-span-2 col-span-1">
        <Card title="ادغام شده">
          <div className="space-y-3">
            <InputGroup
              type="text"
              prependIcon="heroicons-outline:search"
              merged
            />
            <InputGroup
              type="text"
              appendIcon="heroicons-outline:search"
              merged
            />
            <InputGroup
              type="text"
              label="رمز عبور"
              id="ps-1"
              placeholder="رمز عبور"
              merged
            />
            <InputGroup
              type="text"
              placeholder="نام کاربری"
              prepend="@"
              merged
            />
            <InputGroup
              type="text"
              placeholder="نام کاربری"
              append="@example.com"
              merged
            />
            <InputGroup
              type="text"
              prepend="https://example.com/users/"
              placeholder=""
              merged
            />
            <InputGroup
              type="text"
              prepend="$"
              placeholder="100"
              append="00."
              merged
            />
          </div>
        </Card>
      </div>
      <Card title="گروه های اینپوت همراه با دکمه">
        <div className=" space-y-5">
          <InputGroup
            type="text"
            placeholder="دکمه در راست"
            append={<Button text="برو" className="btn-outline-dark " />}
          />
          <InputGroup
            type="text"
            placeholder="دکمه در دو طرف"
            prepend={
              <Button
                icon="heroicons-outline:search"
                className="btn-outline-dark"
              />
            }
            append={<Button text="جستجو" className="btn-outline-dark" />}
          />
        </div>
      </Card>
      <Card title="گروه های اینپوتی همراه با دراپ دون">
        <div className=" space-y-5">
          <InputGroup
            type="text"
            placeholder="دکمه در راست"
            prepend={
              <Dropdown
                classMenuItems="left-0  w-[220px] top-[110%] "
                className="h-full"
                labelClass="h-full"
                label={
                  <Button
                    text="اصلی"
                    className="btn-dark"
                    icon="heroicons-outline:chevron-right"
                    iconPosition="right"
                    div
                    iconClass="text-lg"
                  />
                }
              />
            }
          />
          <InputGroup
            type="text"
            placeholder="دکمه در دو طرف"
            prepend={
              <Dropdown
                classMenuItems="left-0  w-[220px] top-[110%] "
                className="h-full"
                labelClass="h-full"
                label={
                  <button className="btn btn-outline-dark btn-sm">
                    <span className="flex justify-between items-center">
                      <span className="text-lg flex-1 mr-2">
                        <Icon icon="heroicons-outline:pencil" />
                      </span>
                      <span className="text-base inline-block flex-none">
                        <Icon icon="heroicons-outline:chevron-right" />
                      </span>
                    </span>
                  </button>
                }
              />
            }
            append={
              <Dropdown
                classMenuItems="right-0  w-[220px] top-[110%] "
                className="h-full"
                labelClass="h-full"
                label={
                  <Button
                    text="عملیات"
                    className="btn-outline-dark btn-sm"
                    icon="heroicons-outline:chevron-right"
                    iconPosition="right"
                    div
                    iconClass="text-lg"
                  />
                }
              />
            }
          />
        </div>
      </Card>
    </div>
  );
};

export default InputGroupPage;
