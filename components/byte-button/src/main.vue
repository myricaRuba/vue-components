<template>
  <div>
    <el-button :type="type">{{ name }}</el-button>
  </div>
</template>

<script>
export default {
  name: "ByteButton",
  props: {
    name: {
      type: String,
    },
    type: {
      Text: String,
    },
  },
  mounted() {
    console.log(this.type);
  },
};
</script>
