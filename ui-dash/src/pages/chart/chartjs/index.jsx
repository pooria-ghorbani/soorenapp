import React from "react";
import Card from "@/components/ui/Card";
import BarChart from "./Bar";
import HorizontalBar from "./HorizontalBar";
import BarStacked from "./BarStacked";
import LineChart from "./LineChart";
import RadarChart from "./RadarChart";
import PollerAreaChart from "./PollerAreaChart";

const ChartJs = () => {
  return (
    <div className=" space-y-5">
      <Card title="Bar نمودار">
        <BarChart />
      </Card>
      <Card title="افقی Bar">
        <HorizontalBar />
      </Card>
      <Card title="Bar Stacked">
        <BarStacked />
      </Card>
      <Card title="خطی Chart">
        <LineChart />
      </Card>
      <Card title="رادار Chart">
        <RadarChart />
      </Card>
      <Card title="Poller Area نمودار">
        <PollerAreaChart />
      </Card>
    </div>
  );
};

export default ChartJs;
