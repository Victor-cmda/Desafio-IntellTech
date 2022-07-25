import ReactEChart from "echarts-for-react";

let data: any = [];

for (let i = 0; i < 6; i++) {
  data.push(
    Math.floor
      (Math.random() *
        (1000 - 100)
      ));
}

export default function Graphic() {
  const Option = {
    title: {
      text: "Grafico",
    },
    xAxis: {
      type: "category",
      data: ["Jan", "Feb", "March", "April", "May"],
    },
    yAxis: {
      type: "value",
    },
    tooltip: {},
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },

    series: {
      data: data,
      type: "line",
    },
  };
  return (
    <ReactEChart
      style={{
        height: "100%",
        margin: "0",
        padding: "0",
        border: "1px solid #5470C6"
      }}
      option={Option}
    />
  );
}
