//引入组件
import ByteSwitch from "./src/byteSwitch"

/* istanbul ignore next */
ByteSwitch.install = function(Vue) {
  Vue.component(ByteSwitch.name, ByteSwitch);
};

export default ByteSwitch
