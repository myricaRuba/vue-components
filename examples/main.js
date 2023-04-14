import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'

Vue.use(Element, {
  size: localStorage.getItem("size") || "medium", // set element-ui default size
});
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
