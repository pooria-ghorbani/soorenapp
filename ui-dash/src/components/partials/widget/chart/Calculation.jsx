import React from "react";
import { colors } from "@/constant/data";
import Chart from "react-apexcharts";
import useDarkMode from "@/hooks/useDarkMode";

const Calculation = ({ height = 335 }) => {
  const [isDark] = useDarkMode();
  const series = [44, 55, 30];

  const options = {
    chart: {
      fontFamily: "iransans",
    },
    labels: ["70% ارسال", "18% باز", "12% رد شده"],
    dataLabels: {
      enabled: true,
    },

    colors: [colors.success, colors.warning, "#A3A1FB"],
    legend: {
      position: "bottom",
      fontSize: "12px",
      fontFamily: "iransans",
      fontWeight: 400,
      labels: {
        colors: isDark ? "#CBD5E1" : "#475569",
      },
      markers: {
        width: 6,
        height: 6,
        offsetY: -1,
        offsetX: -5,
        radius: 12,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 0,
      },
    },

    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <>
      <Chart options={options} series={series} type="pie" height={height} />
    </>
  );
};

export default Calculation;
