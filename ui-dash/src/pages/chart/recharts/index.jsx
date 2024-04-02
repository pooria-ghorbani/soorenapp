import React from "react";
import Card from "@/components/ui/Card";
import ReLineChart from "./ReLineChart";
import ReAreaChart from "./ReAreaChart";
import ReBarChart from "./ReBarChart";
import ReScatterChart from "./ScatterChart";
import ReRadarChart from "./ReRadarChart";
import RePieChart from "./RePieChart";

const ChartJs = () => {
  return (
    <div className=" space-y-5">
      <Card title="Line نمودار">
        <ReLineChart />
      </Card>
      <Card title="Area نمودار">
        <ReAreaChart />
      </Card>
      <Card title="Bar نمودار">
        <ReBarChart />
      </Card>
      <Card title="Scatter نمودار">
        <ReScatterChart />
      </Card>
      <Card title="Radar نمودار">
        <ReRadarChart />
      </Card>
      <Card title="Pie نمودار">
        <RePieChart />
      </Card>
    </div>
  );
};

export default ChartJs;
