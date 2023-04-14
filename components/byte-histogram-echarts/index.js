import ByteHistogramEcharts from './src/main';

/* istanbul ignore next */
ByteHistogramEcharts.install = function(Vue) {
    Vue.component(ByteHistogramEcharts.name, ByteHistogramEcharts);
};

export default ByteHistogramEcharts;