import ByteDialog from './src/main';

/* istanbul ignore next */
ByteDialog.install = function(Vue) {
    Vue.component(ByteDialog.name, ByteDialog);
};

export default ByteDialog;