<template>
  <div id="histogram" class="chart"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "histogramEcharts",
  props: {
    // 柱状图数据
    data: {
      type: Array,
    },
    // x轴配置
    xAxis: {
      type: Object,
    },
    // y轴配置
    yAxis: {
      type: Object,
    },
    // 全局字体大小
    fontSize: {
      type: Number,
    },
    // 是否在柱子上方展示数量
    isShowLabel: {
      type: Boolean,
    },
    // label 颜色
    labelColor: {
      type: String,
    },
    // label 展示位置
    labelPosition: {
      type: String,
    },
    // legend icon 形状
    legendIconForm: {
      type: String,
    },
    // legend 字体大小
    legendSize: {
      type: Number,
    },
    // legend 字体颜色
    legendColor: {
      type: String,
    },
    // 全局字体颜色
    globalColor: {
      type: String,
    },
    // 是否显示 title
    isTitleShow: {
      type: Boolean,
    },
    // title
    optionTitle: {
      type: String,
    },
    // title 字体大小
    titleFontSize: {
      type: Number,
    },
    // title 内边距
    titlePadding: {
      type: [Number, Array],
    },
  },
  data() {
    return {};
  },
  computed: {
    series() {
      return this.data.map((item) => {
        const { name, data, colorStart, colorEnd, radius, barWidth } = item;
        let seriesItem = {
          type: "bar", // 图表类型
          name: name || undefined, // 每条柱状图的名字
          data, // 柱状图数据
          barWidth: barWidth || 20, //柱状图宽度
          // 图上的字体颜色，位置，字体大小
          label: {
            show: this.isShowLabel || false, // 是否展示
            position: this.labelPosition || "top", // 展示的位置
            fontSize: this.fontSize || 12, // 字体大小
            color: this.labelColor || "#333", // 字体颜色
          },
        };
        // 是否有渐变色
        if (colorStart && colorEnd) {
          seriesItem.itemStyle = {
            color: {
              type: "linear", // 线性渐变
              // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: colorStart, // 0%处的颜色为红色
                },
                {
                  offset: 1,
                  color: colorEnd, // 100%处的颜色为蓝
                },
              ],
            },
            barBorderRadius: radius, // 柱状图的圆角
          };
        }
        return seriesItem;
      });
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const myChart = echarts.init(document.getElementById("histogram"));
      let option = {
        // 标题
        title: {
          show: this.isTitleShow || false, // 是否展示
          text: this.optionTitle || "", // 标题内容
          // 内容样式
          textStyle: {
            color: this.titleColor || "#86909C", // 颜色
            fontSize: this.titleFontSize || 12, // 字体大小
          },
          padding: this.titlePadding || [20, 0, 0, 50], // 标题的内边距
        },
        // 内容样式
        textStyle: {
          fontSize: 12, // 字体大小
          color: this.globalColor || "#86909C", // 颜色
        },
        // 图例
        legend: {
          // 图例项的 icon ,可以通过 'image://url' 设置为图片，其中 URL 为图片的链接，或者 dataURI。
          icon: this.legendIconForm || "circle",
          textStyle: {
            fontSize: this.legendSize || 14, // legend标题字体大小
            color: this.legendColor || "#333", //legend标题字体颜色
          },
        },
        tooltip: {},
        xAxis: this.xAxis,
        yAxis: this.yAxis,
        series: this.series,
      };
      myChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
