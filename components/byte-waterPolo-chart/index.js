//引入组件
import WaterPoloChart from "./src/waterPoloChart"

/* istanbul ignore next */
WaterPoloChart.install = function(Vue) {
  Vue.component(WaterPoloChart.name, WaterPoloChart);
};

export default WaterPoloChart
