import ByteButton from './src/main';

/* istanbul ignore next */
ByteButton.install = function(Vue) {
  Vue.component(ByteButton.name, ByteButton);
};

export default ByteButton;
