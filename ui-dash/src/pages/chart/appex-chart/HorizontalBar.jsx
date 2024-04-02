import React from "react";
import Chart from "react-apexcharts";
import useDarkMode from "@/hooks/useDarkMode";

const ColumnChart = () => {
  const [isDark] = useDarkMode();
  const series = [
    {
      name: "سود خالص",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "درآمد",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "جریان نقدی آزاد",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
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
        horizontal: false,
        endingShape: "rounded",
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 10,
      colors: ["transparent"],
    },
    legend: {
      labels: {
        colors: isDark ? "#CBD5E1" : "#475569",
      },
    },

    xaxis: {
      categories: [
        "فروردین",
        "اردیبهشت",
        "خرداد",
        "تیر",
        "مرداد",
        "شهریور",
        "مهر",
        "آبان",
        "آذر",
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
    yaxis: {
      title: {
        text: "$ (هزار)",
      },
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "iransans",
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      followCursor: true,
      y: {
        formatter: function (val) {
          return "تومان " + val + " هزار";
        },
      },
    },

    grid: {
      show: true,
      borderColor: isDark ? "#334155" : "#e2e8f0",
      position: "back",
    },
    colors: ["#4669FA", "#0CE7FA", "#FA916B"],
  };
  return (
    <div>
      <Chart options={options} series={series} type="bar" height="350" />
    </div>
  );
};

export default ColumnChart;
