import React from "react";
import Chart from "react-apexcharts";
import useDarkMode from "@/hooks/useDarkMode";
import { colors } from "@/constant/data";

const StackBarChart = ({ height = 410 }) => {
  const [isDark] = useDarkMode();
  const series = [
    {
      name: "معاملات فروش معتبر",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "نشست",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "در مذاکره",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ];
  const options = {
    chart: {
      stacked: true,
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
    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      fontSize: "12px",
      fontFamily: "iransans",
      offsetY: 0,
      markers: {
        width: 6,
        height: 6,
        offsetY: 0,
        offsetX: -5,
        radius: 12,
      },
      itemMargin: {
        horizontal: 18,
        vertical: 0,
      },
      labels: {
        colors: isDark ? "#CBD5E1" : "#475569",
      },
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },

    yaxis: {
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "iransans",
        },
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
        offsetY: -3,
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
    colors: [colors.primary, colors.info, colors.warning],
    grid: {
      show: true,
      borderColor: isDark ? "#334155" : "#E2E8F0",
      strokeDashArray: 10,
      position: "back",
    },
  };
  return (
    <>
      <Chart options={options} series={series} type="bar" height={height} />
    </>
  );
};

export default StackBarChart;
