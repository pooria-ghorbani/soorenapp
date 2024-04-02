import React from "react";
import Card from "@/components/ui/Card";
import Textinput from "@/components/ui/Textinput";
import InputGroup from "@/components/ui/InputGroup";

const InputMask = () => {
  return (
    <div>
      <Card title="ورودی ماسک">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <Textinput
            label="شماره کارت"
            isMask
            options={{ creditCard: true }}
            placeholder="0000 0000 0000 0000"
          />
          <InputGroup
            label="شماره همراه"
            prepend="IR (+98)"
            placeholder="شماره همراه"
            id="phoneNumber"
            options={{ phone: true, phoneRegionCode: "IR" }}
            isMask
          />

          <Textinput
            label="تاریخ"
            id="date"
            options={{ date: true, datePattern: ["Y", "m", "d"] }}
            placeholder="YYYY-MM-DD"
            isMask
          />
          <Textinput
            label="زمان"
            id="time"
            options={{ time: true, timePattern: ["h", "m", "s"] }}
            placeholder="HH:MM:SS"
            isMask
          />
          <Textinput
            label="عدد صحیح"
            id="nu"
            options={{ numeral: true }}
            placeholder="10,000"
            isMask
          />
          <Textinput
            label="بلاک"
            id="block"
            options={{ blocks: [4, 3, 3], uppercase: true }}
            placeholder="Block[1,4,7]"
            isMask
          />
          <Textinput
            label="جداکننده"
            id="delimiters"
            options={{ delimiter: "·", blocks: [3, 3, 3], uppercase: true }}
            placeholder="جدا کننده: '.'"
            isMask
          />
          <Textinput
            label="جداکننده شخصی سازی شده"
            id="customDelimiter"
            options={{
              delimiters: [".", ".", "-"],
              blocks: [3, 3, 3, 2],
              uppercase: true,
            }}
            placeholder="جداکننده: ['.', '.', '-']"
            isMask
          />
          <Textinput
            label="پیشوند"
            id="prefix"
            options={{
              prefix: "+88",
              blocks: [3, 3, 3, 4],
              uppercase: true,
            }}
            placeholder="+98"
            isMask
          />
        </div>
      </Card>
    </div>
  );
};

export default InputMask;
