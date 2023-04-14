<template>
  <div id="app">
    <div style="width: 800px; height: 500px">
      <ByteHistogramEcharts
        :data="data"
        :xAxis="xAxis"
        :yAxis="yAxis"
        :fontSize="12"
        is-title-show
        option-title="单位：条"
      ></ByteHistogramEcharts>
    </div>
  </div>
</template>

<script>
import ByteHistogramEcharts from "../components/byte-histogram-echarts";
export default {
  name: "App",
  components: {
    ByteHistogramEcharts,
  },
  data() {
    return {
      data: [
        {
          id: 1,
          name: "byte",
          colorStart: "rgba(7, 191, 185, 1)",
          colorEnd: "rgba(154, 255, 248, 0.8)",
          barWidth: 10,
          radius: [7, 7, 0, 0],
          data: [120, 200, 150, 80, 70, 110, 130],
        },
        {
          id: 2,
          name: "chengdu",
          radius: [7, 7, 0, 0],
          barWidth: 10,
          colorStart: "rgba(242, 193, 94, 1)",
          colorEnd: "rgba(245, 218, 113, 0.41)",
          data: [160, 180, 40, 50, 30, 80, 100],
        },
      ],
      xAxis: {
        type: "category",
        axisLine: {
          lineStyle: { color: "#E5E6EB" },
        },
        axisTick: { inside: true, lineStyle: { color: "#E5E6EB" } },
        data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
      },
      yAxis: {
        type: "value",
        splitLine: { show: true, lineStyle: { type: "dashed" } },
      },
    };
  },
  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
