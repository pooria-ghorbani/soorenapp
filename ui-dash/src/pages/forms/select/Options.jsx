import React, { useState } from "react";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";
import Icon from "@/components/ui/Icon";

const fruits = [
  { value: "chocolate", label: "شکلات" },
  { value: "strawberry", label: "توت فرنگی" },
  { value: "vanilla", label: "وانیل" },
  { value: "orange", label: "پرتقال" },
  { value: "apple", label: "سیب" },
];
const formatGroupLabel = (data) => (
  <div className="flex justify-between items-center">
    <strong>
      <span className=" text-2xl font-semibold capitalize">{data.label}</span>
    </strong>
    <span>{data.options.length}</span>
  </div>
);
const groupedOptions = [
  {
    label: "Ice Creams",
    options: [
      { value: "vanilla", label: "وانیل" },
      { value: "Dark Chocolate", label: "شکلات تلخ" },
      { value: "chocolate", label: "شکلات" },
      { value: "strawberry", label: "توت فرنگی" },
      { value: "salted-caramel", label: "کارامل نمکی" },
    ],
  },
  {
    label: "Snacks",
    options: [
      { value: "Pizza", label: "پیتزا" },
      { value: "Burger", label: "برگر" },
      { value: "Pasta", label: "پاستا" },
      { value: "Pretzel", label: "هاتداگ" },
      { value: "Popcorn", label: "پاپ کرن" },
    ],
  },
];
const animatedComponents = makeAnimated();

// Fixed Options Select

const styles = {
  multiValue: (base, state) => {
    return state.data.isFixed ? { ...base, opacity: "0.5" } : base;
  },
  multiValueLabel: (base, state) => {
    return state.data.isFixed
      ? { ...base, color: "#626262", paddingRight: 2 }
      : base;
  },
  multiValueRemove: (base, state) => {
    return state.data.isFixed ? { ...base, display: "none" } : base;
  },
  option: (provided, state) => ({
    ...provided,
    fontSize: "14px",
  }),
};
const orderOptions = (values) => {
  if (values.length > 0)
    return values
      .filter((v) => v.isFixed)
      .concat(values.filter((v) => !v.isFixed));
};

const iconOptions = [
  {
    label: "شبکه های اجتماعی",
    options: [
      {
        value: "facebook",
        label: "فیسبوک",
        icon: "fe:facebook",
      },
      {
        value: "twitter",
        label: "توییتر",
        icon: "fe:twitter",
      },
      {
        value: "linkedin",
        label: "لینکدین",
        icon: "fe:linkedin",
      },
      {
        value: "github",
        label: "گیت هاب",
        icon: "fe:github",
      },
      {
        value: "instagram",
        label: "اینستاگرام",
        icon: "fe:instagram",
      },
      {
        value: "dribbble",
        label: "دریبل",
        icon: "fe:dribbble",
      },
      {
        value: "gitlab",
        label: "گیت لب",
        icon: "fe:gitlab",
      },
    ],
  },
  {
    label: "File Types",
    options: [
      { value: "pdf", label: "پی دی اف", icon: "fe:file" },
      { value: "txt", label: "متن", icon: "fe:file-word" },
      { value: "image", label: "عکس", icon: "fe:file-image" },
    ],
  },
  {
    label: "Others",
    options: [
      { value: "figma", label: "فیگما", icon: "logos:figma" },
      { value: "chrome", label: "کروم", icon: "logos:chrome" },
      { value: "safari", label: "صفری", icon: "fe:globe" },
      { value: "slack", label: "اسلک", icon: "logos:slack-icon" },
      { value: "youtube", label: "یوتیوب", icon: "fe:youtube" },
    ],
  },
];
const OptionComponent = ({ data, ...props }) => {
  //const Icon = data.icon;

  return (
    <components.Option {...props}>
      <Icon icon={data.icon} />
      {data.label}
    </components.Option>
  );
};

// start component
const OptionsSelect = () => {
  const [fixedValue, setFixedValue] = useState(
    orderOptions([fruits[0], fruits[1]])
  );
  const fixedOnChange = (value, { action, removedValue }) => {
    switch (action) {
      case "remove-value":
      case "pop-value":
        if (removedValue.isFixed) {
          return;
        }
        break;
      case "clear":
        value = fruits.filter((v) => v.isFixed);
        break;
      default:
        break;
    }

    value = orderOptions(value);
    setFixedValue(value);
  };

  return (
    <div className=" grid lg:grid-cols-2 grid-cols-1 gap-5">
      <div>
        <label className="form-label" htmlFor="mul_1">
          چند انتخابه
        </label>
        <Select
          isClearable={false}
          defaultValue={[fruits[2], fruits[3]]}
          styles={styles}
          isMulti
          name="colors"
          options={fruits}
          className="react-select"
          classNamePrefix="select"
          id="mul_1"
        />
      </div>
      <div>
        <label className="form-label" htmlFor="mul_2">
          انتخاب گروهی
        </label>
        <Select
          isClearable={false}
          defaultValue={fruits[1]}
          options={groupedOptions}
          styles={styles}
          formatGroupLabel={formatGroupLabel}
          className="react-select"
          classNamePrefix="select"
          id="mul_2"
        />
      </div>
      <div>
        <label className="form-label" htmlFor="animated_1">
          انتخاب انیمیشنی
        </label>
        <Select
          isClearable={false}
          closeMenuOnSelect={false}
          components={animatedComponents}
          defaultValue={[fruits[4], fruits[5]]}
          isMulti
          options={fruits}
          styles={styles}
          className="react-select"
          classNamePrefix="select"
          id="animated_1"
        />
      </div>
      <div>
        <label className="form-label" htmlFor="dis_s">
          انتخاب ثابت
        </label>
        <Select
          isClearable={false}
          value={fixedValue}
          styles={styles}
          isMulti
          onChange={fixedOnChange}
          name="furits"
          className="react-select"
          classNamePrefix="select"
          options={fruits}
          id="dis_s"
        />
      </div>
      <div className="lg:col-span-2 col-span-1">
        <label className="form-label" htmlFor="icon_s">
          ایکون
        </label>
        <Select
          options={iconOptions}
          className="react-select"
          classNamePrefix="select"
          components={{
            Option: OptionComponent,
          }}
          styles={styles}
          id="icon_s"
        />
      </div>
    </div>
  );
};

export default OptionsSelect;
