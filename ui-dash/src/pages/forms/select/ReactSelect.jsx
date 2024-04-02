import React from "react";
import Select from "react-select";

const furits = [
  { value: "chocolate", label: "شکلات" },
  { value: "strawberry", label: "توت فرنگی" },
  { value: "vanilla", label: "وانیل" },
];

const styles = {
  option: (provided, state) => ({
    ...provided,
    fontSize: "14px",
  }),
};
const ReactSelect = () => {
  return (
    <div className=" grid grid-cols-2 gap-5">
      <div>
        <label htmlFor=" hh" className="form-label ">
          ساده
        </label>
        <Select
          className="react-select"
          classNamePrefix="select"
          defaultValue={furits[0]}
          options={furits}
          styles={styles}
          id="hh"
        />
      </div>
      <div>
        <label htmlFor=" hh2" className="form-label ">
          قابل پاک شدن
        </label>
        <Select
          className="react-select"
          classNamePrefix="select"
          defaultValue={furits[1]}
          styles={styles}
          name="clear"
          options={furits}
          isClearable
          id="hh2"
        />
      </div>
      <div>
        <label htmlFor=" hh23" className="form-label">
          لودینگ
        </label>
        <Select
          className="react-select"
          classNamePrefix="select"
          defaultValue={furits[2]}
          name="loading"
          options={furits}
          isLoading={true}
          isClearable={false}
          id="hh23"
          styles={styles}
        />
      </div>
      <div>
        <label htmlFor="dis" className="form-label">
          غیر فعال
        </label>
        <Select
          className="react-select"
          classNamePrefix="select"
          defaultValue={furits[3]}
          name="disabled"
          options={furits}
          isDisabled={true}
          isClearable={false}
          id={"dis"}
          styles={styles}
        />
      </div>
    </div>
  );
};

export default ReactSelect;
