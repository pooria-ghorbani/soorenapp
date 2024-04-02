import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Select from "@/components/ui/Select";
import ReactSelect from "./ReactSelect";
import OptionsSelect from "./Options";

const options = [
  {
    value: "option1",
    label: "گزینه یک",
  },
  {
    value: "option2",
    label: "گزینه دو",
  },
  {
    value: "option3",
    label: "گزینه سه",
  },
];
const SelectPage = () => {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleChange2 = (e) => {
    setValue2(e.target.value);
  };

  return (
    <div className=" space-y-5">
      <Card title="سلکت های ساده">
        <div className=" grid xl:grid-cols-2 grid-cols-1 gap-5">
          <div className="space-y-3">
            <Select
              label="سلکت ساده"
              options={options}
              onChange={handleChange}
              value={value}
            />
            <div className="text-base">
              <span className="text-slate-500 dark:text-slate-300 inline-block mr-3">
                گزینه انتخب شده:
              </span>
              <span className="text-slate-900 dark:text-slate-300 font-semibold">
                {value}
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <Select
              label="سایز سلکت"
              options={options}
              onChange={handleChange2}
              value={value2}
              size={5}
            />
            <div className="text-base">
              <span className="text-slate-500 dark:text-slate-300 inline-block mr-3">
                گزینه انتخب شده:
              </span>
              <span className="text-slate-900 dark:text-slate-300 font-semibold">
                {value2}
              </span>
            </div>
          </div>
        </div>
      </Card>
      <Card title="React سلکت">
        <ReactSelect />
      </Card>
      <Card title="React سلکت">
        <OptionsSelect />
      </Card>
    </div>
  );
};

export default SelectPage;
