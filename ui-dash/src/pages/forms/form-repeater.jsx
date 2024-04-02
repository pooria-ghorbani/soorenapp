import React from "react";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import { useForm, useFieldArray } from "react-hook-form";
const FormRepeater = () => {
  const { register, control, handleSubmit, reset, trigger, setError } = useForm(
    {
      defaultValues: {
        test: [{ firstName: "صادق", lastName: "قاسم نژاد", phone: "123456" }],
      },
    }
  );
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test",
  });
  const index = 1;
  return (
    <div>
      <Card
        title="فرم های تکرار شونده"
        headerslot={
          <Button
            text="اضافه کردن"
            icon="heroicons-outline:plus"
            className="btn-dark"
            onClick={() => append()}
          />
        }
      >
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          {fields.map((item, index) => (
            <div
              className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-5 mb-5 last:mb-0"
              key={index}
            >
              <Textinput
                label="اسم"
                type="text"
                id={`name${index}`}
                placeholder="اسم"
                register={register}
                name={`test[${index}].firstName`}
              />

              <Textinput
                label="فامیل"
                type="text"
                id={`name2${index}`}
                placeholder="فامیل"
                register={register}
                name={`test[${index}].lastName`}
              />

              <div className="flex justify-between items-end space-x-5">
                <div className="flex-1">
                  <Textinput
                    label="شماره موبایل"
                    type="text"
                    id={`name3${index}`}
                    placeholder="Phone"
                    register={register}
                    name={`test[${index}].phone`}
                  />
                </div>
                <div className="flex-none relative">
                  <button
                    onClick={() => remove(index)}
                    type="button"
                    className="inline-flex items-center justify-center h-10 w-10 bg-danger-500 text-lg border rounded border-danger-500 text-white"
                  >
                    <Icon icon="heroicons-outline:trash" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="ltr:text-right rtl:text-left">
            <Button text="تایید" className="btn-dark" />
          </div>
        </form>
      </Card>
    </div>
  );
};

export default FormRepeater;
