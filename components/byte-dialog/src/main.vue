<template>
  <div>
    <el-dialog
      :visible.sync="visible"
      :width="width"
      :top="top"
      :modal="modal"
      :close-on-click-modal="closeOnClickModal"
      :show-close="showClose"
      :before-close="handleClose"
      v-dialogDrag
    >
      <div
        slot="title"
        class="dialog-title"
        :style="`${border ? 'border-bottom:1px solid #eaeaea' : ''}`"
      >
        <span :style="`color: ${titleColor};font-size:${titleSize}px;`">{{
          title
        }}</span>
      </div>
      <slot></slot>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import "../util";
export default {
  name: "byteDialog",
  props: {
    // 弹窗标题
    title: {
      type: String,
    },
    // Dialog CSS 中的 margin-top 值
    top: {
      type: String,
    },
    // 弹窗是否需要遮罩层
    modal: {
      type: Boolean,
    },
    // 弹窗是否可以通过点击modal来关闭
    closeOnClickModal: {
      type: Boolean,
    },
    // 标题下是否拥有border
    border: {
      type: Boolean,
    },
    // 弹窗关闭按钮是否显示
    showClose: {
      type: Boolean,
    },
    // 弹窗宽度
    width: {
      type: String,
    },
    // 弹窗是否显示
    visible: {
      type: Boolean,
    },
    // 标题颜色
    titleColor: {
      type: String,
    },
    // 标题颜色
    titleSize: {
      type: Number,
    },
  },
  data() {
    return {
      id: undefined,
    };
  },
  methods: {
    handleClose() {
      this.$emit("close", false);
    },
  },
};
</script>

<style scoped>
.dialog-title {
  font-family: "SourceHanSansCN-Medium";
  color: #4167fc;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 1px;
  padding-bottom: 10px;
  user-select: none;
}
.footer {
  padding-top: 20px;
}
</style>

<!--饿了么组件穿透样式-->
<style scoped>
::v-deep .el-dialog {
  padding: 20px;
  border-radius: 12px;
}
::v-deep .el-dialog__header {
  text-align: left;
  padding: 0;
}
::v-deep .el-dialog__body {
  padding-bottom: 0;
}
::v-deep .el-dialog__footer {
  padding: 0;
}
</style>
