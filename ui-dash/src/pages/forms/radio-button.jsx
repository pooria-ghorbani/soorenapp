import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Radio from "@/components/ui/Radio";
const RadioPage = () => {
  const [value, setValue] = useState("A");
  const [value2, setValue2] = useState("C");
  const [selectColor, setSelectColor] = useState("primary-500");
  const [selectOption, setSelectOption] = useState("Orange");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleChange2 = (e) => {
    setValue2(e.target.value);
  };

  const handleColor = (e) => {
    setSelectColor(e.target.value);
  };
  const handleOption = (e) => {
    setSelectOption(e.target.value);
  };
  const options = [
    {
      value: "Orange",
      label: "پرتقال",
    },
    {
      value: "Apple",
      label: "سیب",
    },
    {
      value: "Banana",
      label: "موز",
    },
  ];

  const colors = [
    {
      value: "primary-500",
      label: "اصلی",
      activeClass: "ring-primary-500 border-primary-500",
    },
    {
      value: "secondary-500",
      label: "ثانویه",
      activeClass: "ring-secondary-500 border-secondary-500",
    },
    {
      value: "success-500",
      label: "موفق",
      activeClass: "ring-success-500 border-success-500",
    },
    {
      value: "danger-500",
      label: "خطر",
      activeClass: "ring-danger-500 border-danger-500",
    },
    {
      value: "warning-500",
      label: "هشدار",
      activeClass: "ring-warning-500 border-warning-500",
    },
    {
      value: "info-500",
      label: "درباره",
      activeClass: "ring-info-500 border-info-500",
    },
  ];
  return (
    <div className="space-y-5">
      <Card title="دکمه های رادیویی ساده">
        <div className="flex flex-wrap space-xy-5">
          <Radio
            label="انتخاب"
            name="x"
            value="A"
            checked={value === "A"}
            onChange={handleChange}
          />
          <Radio
            label="عدم انتخاب"
            name="x"
            value="B"
            checked={value === "B"}
            onChange={handleChange}
          />
          <Radio
            label="انتخاب شده غیر فعال"
            disabled
            name="x2"
            value="C"
            checked={value2 === "C"}
            onChange={handleChange2}
          />
          <Radio
            label="انتخاب نشده غیر فعال"
            name="x2"
            disabled
            value="D"
            checked={value2 === "D"}
            onChange={handleChange2}
          />
        </div>
      </Card>
      <Card title="رنگی">
        <div className="flex flex-wrap space-xy-5">
          {colors.map((color) => (
            <Radio
              label={color.label}
              name="color"
              value={color.value}
              checked={selectColor === color.value}
              onChange={handleColor}
              activeClass={color.activeClass}
            />
          ))}
        </div>
      </Card>

      <Card title="دکمه های رادیویی آرایه ای">
        <div className="flex flex-wrap space-xy-5">
          {options.map((option) => (
            <Radio
              label={option.label}
              name="option"
              value={option.value}
              checked={selectOption === option.value}
              onChange={handleOption}
            />
          ))}
        </div>
        {selectOption && (
          <div className="mt-3">
            <span className="text-sm text-gray-500">گزینه انتخاب شده: </span>
            <span className="text-sm text-gray-700">
              {options.find((o) => o.value === selectOption)?.label}
            </span>
          </div>
        )}
      </Card>
    </div>
  );
};

export default RadioPage;
