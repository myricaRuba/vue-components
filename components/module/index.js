//引入组件
import ByteModule from "./src/module"

/* istanbul ignore next */
ByteModule.install = function(Vue) {
  Vue.component(ByteModule.name, ByteModule);
};

export default ByteModule
