import React from "react";
import Chart from "react-apexcharts";
import useDarkMode from "@/hooks/useDarkMode";
import useWidth from "@/hooks/useWidth";

const RadialsChart = () => {
  const [isDark] = useDarkMode();
  const { width, breakpoints } = useWidth();
  const series = [44, 55, 67, 83];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      fontFamily: "iransans",
    },
    plotOptions: {
      radialBar: {
        startAngle: -180,
        endAngle: 180,
        dataLabels: {
          name: {
            fontSize: "22px",
            color: isDark ? "#CBD5E1" : "#475569",
          },
          value: {
            fontSize: "16px",
            color: isDark ? "#CBD5E1" : "#475569",
          },
          total: {
            show: true,
            label: "همه",
            color: isDark ? "#CBD5E1" : "#475569",
            formatter: function () {
              return 300;
            },
          },
        },
        track: {
          background: "#E2E8F0",
          strokeWidth: "97%",
        },
      },
    },
    labels: ["مورد یک", "مورد دو", "مورد سه", "مورد چهار"],
    colors: ["#4669FA", "#FA916B", "#50C793", "#0CE7FA"],
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        shadeIntensity: 0.4,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 50, 53, 91],
      },
    },
  };

  return (
    <div style={{ direction: "rtl" }}>
      <Chart
        options={options}
        series={series}
        type="radialBar"
        height={width > breakpoints.md ? 360 : 250}
      />
    </div>
  );
};

export default RadialsChart;
