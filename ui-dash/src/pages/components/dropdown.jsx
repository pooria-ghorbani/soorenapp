import React from "react";
import Card from "@/components/ui/Card";
import Dropdown from "@/components/ui/Dropdown";
import Button from "@/components/ui/Button";
import SplitDropdown from "@/components/ui/Split-dropdown";

const dropdown = () => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-6">
      <Card title="دراپدون ساده">
        <div className="space-xy-5">
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="اصلی"
                className="btn-primary"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="ثانویه"
                className="btn-secondary"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="موفق"
                className="btn-success"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="درباره"
                className="btn-info"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="هشدار"
                className="btn-warning"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="خطر"
                className="btn-danger"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="تیره"
                className="btn-dark"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="روشن"
                className="btn-light"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
        </div>
      </Card>
      <Card title="Outline دراپ دون">
        <div className="space-xy-5">
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="اصلی"
                className="btn-outline-primary"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="ثانویه"
                className="btn-outline-secondary"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="موفق"
                className="btn-outline-success"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="درباره"
                className="btn-outline-info"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="هشدار"
                className="btn-outline-warning"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="خطر"
                className="btn-outline-danger"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="تیره"
                className="btn-outline-dark"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="روشن"
                className="btn-outline-light"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
        </div>
      </Card>
      <Card title="دراپ دون صاف">
        <div className="space-xy-5">
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="اصلی"
                className="text-primary-500 hover:bg-primary-500 hover:bg-opacity-20"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="ثانویه"
                className="text-secondary-500 hover:bg-secondary-500 hover:bg-opacity-20"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="موفق"
                className="text-success-500 hover:bg-success-500 hover:bg-opacity-20"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="درباره"
                className="text-info-500 hover:bg-info-500 hover:bg-opacity-20"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="هشدار"
                className="text-warning-500 hover:bg-warning-500 hover:bg-opacity-20"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="خطر"
                className=" text-danger-500 hover:bg-danger-500 hover:bg-opacity-20"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="تیره"
                className="text-slate-800 hover:bg-slate-800 hover:bg-opacity-20"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="روشن"
                className="text-slate-600 hover:bg-light hover:bg-opacity-10"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          ></Dropdown>
        </div>
      </Card>
      <Card title="سایز های دراپ دون">
        <div className="space-xy-5">
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="بزرگ"
                className="btn-primary btn-xl"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-2xl"
              />
            }
          />
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="پیشفرض"
                className="btn-dark"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          />

          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%] "
            label={
              <Button
                text="کوچک"
                className=" btn-success btn-sm"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-sm"
              />
            }
          />
        </div>
      </Card>
      <Card title="دراپ دون جدا شده">
        <div className="space-xy-5">
          <SplitDropdown
            classMenuItems="left-0  w-[220px] top-[110%]"
            label="اصلی"
            labelClass="btn-primary"
          />
          <SplitDropdown
            classMenuItems="left-0  w-[220px] top-[110%]"
            label="ثانویه"
            labelClass="btn-secondary"
          />
          <SplitDropdown
            classMenuItems="left-0  w-[220px] top-[110%]"
            label="موفق"
            labelClass="btn-success"
          />
          <SplitDropdown
            classMenuItems="left-0  w-[220px] top-[110%]"
            label="درباره"
            labelClass="btn-info"
          />
          <SplitDropdown
            classMenuItems="left-0  w-[220px] top-[110%]"
            label="هشدار"
            labelClass="btn-warning"
          />
          <SplitDropdown
            classMenuItems="left-0  w-[220px] top-[110%]"
            label="خطر"
            labelClass="btn-danger"
          />
          <SplitDropdown
            classMenuItems="left-0  w-[220px] top-[110%]"
            label="روشن"
            labelClass="btn-light"
          />
        </div>
      </Card>
      <Card title=" جدا شده Outline دراپ دون">
        <div className="space-xy-5">
          <SplitDropdown
            classMenuItems="left-0  w-[220px] top-[110%]"
            label="اصلی"
            labelClass="btn-outline-primary"
          />
          <SplitDropdown
            classMenuItems="left-0  w-[220px] top-[110%]"
            label="ثانویه"
            labelClass="btn-outline-secondary"
          />
          <SplitDropdown
            classMenuItems="left-0  w-[220px] top-[110%]"
            label="موفق"
            labelClass="btn-outline-success"
          />
          <SplitDropdown
            classMenuItems="left-0  w-[220px] top-[110%]"
            label="درباره"
            labelClass="btn-outline-info"
          />
          <SplitDropdown
            classMenuItems="left-0  w-[220px] top-[110%]"
            label="هشدار"
            labelClass="btn-outline-warning"
          />
          <SplitDropdown
            classMenuItems="left-0  w-[220px] top-[110%]"
            label="خطر"
            labelClass="btn-outline-danger"
          />
          <SplitDropdown
            classMenuItems="left-0  w-[220px] top-[110%]"
            label="روشن"
            labelClass="btn-outline-light"
          />
        </div>
      </Card>
      <Card title="دراپ دون جهت دار">
        <div className="space-xy-5">
          <Dropdown
            classMenuItems="left-0  w-[220px] top-[110%]"
            label={
              <Button
                text="از چپ"
                className="btn-primary"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          />
          <Dropdown
            classMenuItems="w-[220px] top-[110%]"
            label={
              <Button
                text="از راست"
                className="btn-primary"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          />
          <Dropdown
            classMenuItems="right-unset left-full w-[200px] top-0 ml-3"
            label={
              <Button
                text="راست به بالا"
                className="btn-primary"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          />
          <Dropdown
            classMenuItems="right-full  w-[200px] top-0 ml-3"
            label={
              <Button
                text="چپ به بالا"
                className="btn-primary"
                icon="heroicons-outline:chevron-left"
                div
                iconClass="text-lg"
                iconPosition="right"
              />
            }
          />
        </div>
      </Card>
      <Card title="دراپ دون جهت دار">
        <div className="space-xy-5">
          <Dropdown
            classMenuItems="left-0  w-full top-[110%]"
            wrapperClass="block"
            label={
              <Button
                text="اصلی"
                className="btn-primary block-btn"
                icon="heroicons-outline:chevron-left"
                iconPosition="right"
                div
                iconClass="text-lg"
              />
            }
          />
          <SplitDropdown
            classMenuItems="left-0  w-full top-[110%]"
            label="اصلی"
            labelClass="btn-primary"
            wrapperClass="block"
          />
          <SplitDropdown
            classMenuItems="left-0 w-full top-[110%]"
            label="اصلی"
            labelClass="btn-outline-primary"
            wrapperClass="block"
          />
        </div>
      </Card>
    </div>
  );
};

export default dropdown;
