<template>
  <div id="waterPolo" class="chart"/>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-liquidfill'

export default {
  name: "waterPoloChart",
  props: {
    data: { // 数据（需要小数）
      type: Number,
      default: 0
    },

    waveNum: { // 波浪数
      type: Number,
      default: 3
    },

    radius: { // 圆形大小
      type: Number,
      default: 78
    },

    color: {
      type: Array,
      default: () => ['#ecf3fe', '#c8dcfe', '#5594fa']
    },

    borderColor: {
      type: String,
      default: '#448af9'
    },

    backgroundColor: {
      type: String,
      default: '#fff'
    },

    textColor: {
      type: String,
      default: '#5594fa'
    },

    textInsideColor: {
      type: String,
      default: '#12786f'
    },
  },

  data() {
    return {

    }
  },

  mounted() {
    this.init()
  },

  methods: {
    init() {
      const myChart = echarts.init(document.getElementById('waterPolo'));
      const arr = []
      for (let i = 0; i < this.waveNum; i += 1) {
        arr.push(this.data)
      }

      const option = {
        series: [
          {
            type: 'liquidFill',
            radius: `${this.radius}%`,
            center: ['50%', '50%'],
            color: this.color,
            data: arr, // data个数代表波浪数
            amplitude: 15,
            // 图形样式
            itemStyle: {
              opacity: 1, // 波浪的透明度
              shadowBlur: 0, // 波浪的阴影范围
            },
            backgroundStyle: {
              borderWidth: 2,
              borderColor: this.borderColor,
              color: this.backgroundColor,
            },
            label: {
              show: true,
              textStyle: {
                color: this.textColor,
                insideColor: this.textInsideColor,
                fontSize: 40,
              },
              formatter: (params) => {
                return `${(params.value * 100).toFixed(2)}%`;
              },
            },
            outline: {
              show: false,
            },
          },
        ],
      };

      myChart.setOption(option);
    }
  }
}
</script>

<style scoped>
.chart {
  width: 100%;
  height: 100%;
}
</style>
