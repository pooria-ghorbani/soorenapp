import React from "react";
import Card from "@/components/ui/Card";
import Simple from "./Simple";
import SimpleTooltip from "./SimpleTooltip";
import MultiValidation from "./multiple-rules";
import ValidationTypes from "./validation-types";

const FormValidation = () => {
  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 gap-5">
      <Card title="اعتبار سنجی فرم ساده">
        <Simple />
      </Card>
      <Card title="اعتبار سنجی ساده فرم همراه با تولتیپ">
        <SimpleTooltip />
      </Card>
      <div className="xl:col-span-2 col-span-1">
        <Card title="اعتبار سنجی همراه با چند رولز">
          <MultiValidation />
        </Card>
      </div>{" "}
      <div className="xl:col-span-2 col-span-1">
        <Card title="مدل های اعتبار سنجی">
          <ValidationTypes />
        </Card>
      </div>
    </div>
  );
};

export default FormValidation;
