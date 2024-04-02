import React, { useState } from "react";
import Card from "@/components/ui/Card";
import Switch from "@/components/ui/Switch";

const SwitchPage = () => {
  const [checked, setChecked] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(true);
  const [checked5, setChecked5] = useState(true);
  const [checked6, setChecked6] = useState(true);
  const [checked7, setChecked7] = useState(true);
  const [checked8, setChecked8] = useState(true);
  const [checked9, setChecked9] = useState(true);
  const [checked10, setChecked10] = useState(true);

  return (
    <div className=" space-y-5">
      <Card title="سوییچ ها">
        <div className="flex flex-wrap space-xy-5">
          <Switch
            label="سوییچ روشن"
            value={checked}
            onChange={() => setChecked(!checked)}
          />
          <Switch
            label="سوییچ خاموش"
            value={checked2}
            onChange={() => setChecked2(!checked2)}
          />
          <Switch
            label="سوییچ روشن غیر فعال"
            disabled
            value={checked3}
            onChange={() => setChecked3(!checked3)}
          />
          <Switch
            label="سوییچ خاموش غیر فعال"
            disabled
            value={checked4}
            onChange={() => setChecked4(!checked4)}
          />
        </div>
      </Card>
      <Card title="رنگی">
        <div className="flex flex-wrap space-xy-5">
          <Switch
            label="اصلی"
            activeClass="bg-primary-500"
            value={checked5}
            onChange={() => setChecked5(!checked5)}
          />
          <Switch
            label="ثانویه"
            activeClass="bg-secondary-500"
            value={checked6}
            onChange={() => setChecked6(!checked6)}
          />
          <Switch
            label="موفق"
            activeClass="bg-success-500"
            value={checked7}
            onChange={() => setChecked7(!checked7)}
          />
          <Switch
            label="خطر"
            activeClass="bg-danger-500"
            value={checked8}
            onChange={() => setChecked8(!checked8)}
          />
          <Switch
            label="هشدار"
            activeClass="bg-warning-500"
            value={checked9}
            onChange={() => setChecked9(!checked9)}
          />
          <Switch
            label="درباره"
            activeClass="bg-info-500"
            value={checked10}
            onChange={() => setChecked10(!checked10)}
          />
        </div>
      </Card>
      <Card title="سوییچ همراه با بج">
        <div className="flex flex-wrap space-xy-5">
          <Switch
            label="اصلی"
            activeClass="bg-primary-500"
            value={checked5}
            onChange={() => setChecked5(!checked5)}
            badge
          />
          <Switch
            label="ثانویه"
            activeClass="bg-secondary-500"
            value={checked6}
            onChange={() => setChecked6(!checked6)}
            badge
          />
          <Switch
            label="موفق"
            activeClass="bg-success-500"
            value={checked7}
            onChange={() => setChecked7(!checked7)}
            badge
          />
          <Switch
            label="خطر"
            activeClass="bg-danger-500"
            value={checked8}
            onChange={() => setChecked8(!checked8)}
            badge
          />
          <Switch
            label="هشدار"
            activeClass="bg-warning-500"
            value={checked9}
            onChange={() => setChecked9(!checked9)}
            badge
          />
          <Switch
            label="درباره"
            activeClass="bg-info-500"
            value={checked10}
            onChange={() => setChecked10(!checked10)}
            badge
          />
        </div>
      </Card>
      <Card title="سوییچ همراه با آیکون">
        <div className="flex flex-wrap space-xy-5">
          <Switch
            label="اصلی"
            activeClass="bg-primary-500"
            value={checked5}
            onChange={() => setChecked5(!checked5)}
            badge
            prevIcon="heroicons-outline:volume-up"
            nextIcon="heroicons-outline:volume-off"
          />
          <Switch
            label="ثانویه"
            activeClass="bg-secondary-500"
            value={checked6}
            onChange={() => setChecked6(!checked6)}
            badge
            prevIcon="heroicons-outline:check"
            nextIcon="heroicons-outline:x"
          />
          <Switch
            label="موفق"
            activeClass="bg-success-500"
            value={checked7}
            onChange={() => setChecked7(!checked7)}
            badge
            prevIcon="heroicons-outline:sun"
            nextIcon="heroicons-outline:moon"
          />
          <Switch
            label="خطر"
            activeClass="bg-danger-500"
            value={checked8}
            onChange={() => setChecked8(!checked8)}
            badge
            prevIcon="heroicons-outline:lock-closed"
            nextIcon="heroicons-outline:lock-open"
          />
          <Switch
            label="هشدار"
            activeClass="bg-warning-500"
            value={checked9}
            onChange={() => setChecked9(!checked9)}
            badge
            prevIcon="heroicons-outline:check"
            nextIcon="heroicons-outline:ban"
          />
          <Switch
            label="درباره"
            activeClass="bg-info-500"
            value={checked10}
            onChange={() => setChecked10(!checked10)}
            badge
            prevIcon="heroicons-outline:phone-incoming"
            nextIcon="heroicons-outline:phone-missed-call"
          />
        </div>
      </Card>
    </div>
  );
};

export default SwitchPage;
