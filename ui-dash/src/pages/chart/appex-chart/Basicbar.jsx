import React from "react";
import Chart from "react-apexcharts";
import useDarkMode from "@/hooks/useDarkMode";

const BasicBar = () => {
  const [isDark] = useDarkMode();
  const series = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      fontFamily: "iransans",
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "iransans",
        },
      },
    },
    grid: {
      show: true,
      borderColor: isDark ? "#334155" : "#e2e8f0",
      strokeDashArray: 10,
      position: "back",
    },
    xaxis: {
      categories: [
        "کره جنوبی",
        "کانادا",
        "انگلیس",
        "هلند",
        "ایتالیا",
        "فرانسه",
        "ژاپن",
        "امریکا",
        "چین",
        "آلمان",
      ],
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "iransans",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    colors: ["#4669FA"],
  };
  return (
    <div>
      <Chart options={options} series={series} type="bar" height="350" />
    </div>
  );
};

export default BasicBar;
