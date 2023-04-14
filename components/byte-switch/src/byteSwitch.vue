<template>
  <el-switch
      v-model="switchValue"
      :active-color="activeColor"
      :inactive-color="inactiveColor"
      :active-value="activeValue"
      :inactive-value="inactiveValue"
      :active-text="activeText"
      :inactive-text="inactiveText"
      @change="(val) => change(val)"
  >
  </el-switch>
</template>

<script>
export default {
  name: "byteSwitch",
  props: {
    /**组件绑定的值**/
    value: {
      default: undefined
    },
    /**active时的值**/
    activeValue: {
      default: 0
    },
    /**inactive时的值**/
    inactiveValue: {
      default: 1
    },
    /**active时的颜色**/
    activeColor: {
      type:String,
      default: '#00A32F'
    },
    /**inactive时的颜色**/
    inactiveColor: {
      type:String,
      default: '#CCCCCC'
    },
    /**active时的文字**/
    activeText: {
      type:String,
      default: '禁用'
    },
    /**inactive时的文字**/
    inactiveText: {
      type:String,
      default: '启用'
    },

  },
  data () {
    return {
      switchValue: undefined,
    }
  },
  watch: {
    value (val) {
      this.switchValue = val
    }
  },
  methods: {
    /**改变值**/
    change (val) {
      this.$emit('change', val)
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .el-switch__core {
  width: 56px !important;
  height: 21px;
  border-radius: 100px !important;
  border: none;
}

::v-deep .el-switch__core::after {
  width: 16px;
  height: 16px;
  top: 2px;
  margin-left: 2px;
}

::v-deep .el-switch.is-checked .el-switch__core::after {
  margin-left: -19px;
}

/*关闭时文字位置设置*/
::v-deep .el-switch__label--right {
  position: absolute;
  z-index: 1;
  right: 9px;
  margin-left: 0;
  color: rgba(255, 255, 255, 0.9019607843137255);

  span {
    font-size: 12px;
  }
}

/* 激活时另一个文字消失 */
::v-deep .el-switch__label.is-active {
  display: none;
}

/*开启时文字位置设置*/
::v-deep .el-switch__label--left {
  position: absolute;
  z-index: 1;
  left: 9px;
  margin-right: 0px;
  color: rgba(255, 255, 255, 0.9019607843137255);

  span {
    font-size: 12px;
  }
}
</style>
