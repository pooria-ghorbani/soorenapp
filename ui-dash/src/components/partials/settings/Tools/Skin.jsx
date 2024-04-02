import React from "react";
import Radio from "@/components/ui/Radio";
import useSkin from "@/hooks/useSkin";

const Skin = () => {
  const [skin, setSkin] = useSkin();
  const handleChange = (e) => {
    setSkin(e.target.value);
  };
  return (
    <div>
      <h4 className="text-slate-600 text-base dark:text-slate-300 mb-2 font-normal">
        پوسته
      </h4>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
        <Radio
          label="پیش فرض"
          name="skin"
          value="default"
          checked={skin === "default"}
          onChange={handleChange}
          className="h-4 w-4"
        />
        <Radio
          label="خمیدگی"
          name="skin"
          value="bordered"
          checked={skin === "bordered"}
          onChange={handleChange}
          className="h-4 w-4"
        />
      </div>
    </div>
  );
};

export default Skin;
