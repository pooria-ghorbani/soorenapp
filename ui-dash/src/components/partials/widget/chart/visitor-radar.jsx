import React from "react";
import Chart from "react-apexcharts";
import useDarkMode from "@/hooks/useDarkMode";
import { colors } from "@/constant/data";

const VisitorRadar = ({ height = 350 }) => {
  const [isDark] = useDarkMode();
  const series = [
    {
      name: "مرد",
      data: [41, 64, 81, 60, 42, 42, 33, 23],
    },
    {
      name: "زن",
      data: [65, 46, 42, 25, 58, 63, 76, 43],
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: false,
        blur: 8,
        left: 1,
        top: 1,
        opacity: 0.5,
      },
      fontFamily: "iransans",
    },
    legend: {
      show: true,
      fontSize: "14px",
      fontFamily: "iransans",
      labels: {
        colors: isDark ? "#CBD5E1" : "#475569",
      },
    },
    yaxis: {
      show: true,
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "iransans",
        },
      },
    },
    colors: [colors.warning, colors.primary],
    xaxis: {
      categories: [
        "2019",
        "2020",
        "2021",
        "2017",
        "2018",
        "2015",
        "2014",
        "2013",
      ],
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
        },
      },
    },
    fill: {
      opacity: [0.5, 0.5],
    },
    stroke: {
      width: 2,
    },
    markers: {
      size: 0,
    },
    grid: {
      show: false,
    },
  };

  return (
    <div className="legend-ring-default">
      <Chart series={series} options={options} type="radar" height={height} />
    </div>
  );
};

export default VisitorRadar;
