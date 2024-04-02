import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Checkbox from "@/components/ui/Checkbox";

const CheckboxPage = () => {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(true);
  const [checked5, setChecked5] = useState(true);
  const [checked6, setChecked6] = useState(true);
  const [checked7, setChecked7] = useState(true);
  const [checked8, setChecked8] = useState(true);
  const [checked9, setChecked9] = useState(true);
  const [checked10, setChecked10] = useState(true);

  const [selected, setSelected] = useState([]);
  const options = [
    {
      value: "orange",
      label: "پرتقال",
    },
    {
      value: "apple",
      label: "سیب",
    },
    {
      value: "banana",
      label: "موز",
    },
  ];
  return (
    <div className=" space-y-5">
      <Card title="چک باکس ها">
        <div className="flex flex-wrap space-xy-6">
          <Checkbox
            label="انتخاب"
            value={checked}
            onChange={() => setChecked(!checked)}
          />
          <Checkbox
            label="عدم انتخاب"
            value={checked2}
            onChange={() => setChecked2(!checked2)}
          />
          <Checkbox
            label="انتخاب شده غیر فعال"
            disabled
            value={checked3}
            onChange={() => setChecked3(!checked3)}
          />
          <Checkbox
            label="انتخاب نشده غیر فعال"
            disabled
            value={checked4}
            onChange={() => setChecked4(!checked4)}
          />
        </div>
      </Card>
      <Card title="رنگی">
        <div className="flex flex-wrap space-xy-6">
          <Checkbox
            label="اصلی"
            value={checked5}
            activeClass="ring-primary-500 bg-primary-500"
            onChange={() => setChecked5(!checked5)}
          />
          <Checkbox
            label="ثانویه"
            value={checked6}
            activeClass="ring-secondary-500 bg-secondary-500"
            onChange={() => setChecked6(!checked6)}
          />
          <Checkbox
            label="موفق"
            value={checked7}
            activeClass="ring-success-500 bg-success-500"
            onChange={() => setChecked7(!checked7)}
          />
          <Checkbox
            label="خطر"
            value={checked8}
            activeClass="ring-danger-500 bg-danger-500"
            onChange={() => setChecked8(!checked8)}
          />
          <Checkbox
            label="هشدار"
            value={checked9}
            activeClass="ring-warning-500 bg-warning-500"
            onChange={() => setChecked9(!checked9)}
          />
          <Checkbox
            label="درباره"
            value={checked10}
            activeClass="ring-info-500 bg-info-500"
            onChange={() => setChecked10(!checked10)}
          />
        </div>
      </Card>
      <Card title="انتخاب گزینه ای آرایه ای">
        <div className=" space-y-4">
          {options.map((option, i) => (
            <Checkbox
              key={i}
              name="jorina"
              label={option.label}
              value={selected.includes(option.value)}
              onChange={() => {
                if (selected.includes(option.value)) {
                  setSelected(selected.filter((item) => item !== option.value));
                } else {
                  setSelected([...selected, option.value]);
                }
              }}
            />
          ))}
          {selected.length > 0 && (
            <div className="text-slate-900 dark:text-white ">
              Selected: [{selected.join(", ")}]
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default CheckboxPage;
