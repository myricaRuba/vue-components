<template>
  <div class="card-container" :class="{'has-padding': mode === 'hasPadding'}">
    <div class="card-header" :class="{'padding-mode-head': mode === 'hasPadding'}" v-show="title">
      <div class="title">{{ title }}</div>
<!--      <div class="search-menu" v-show="searchOption && searchOption.length">-->
<!--        <div class="menu-item" v-for="(searchItem, index) in searchOption" :key="index">-->
<!--          <div v-if="searchItem.type === 'single'">-->

<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>
    <div class="card-body" :class="{'padding-mode-content': mode === 'hasPadding'}">
      <slot name="content"></slot>
    </div>
    <div class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "byteModule",
  props: {
    mode: {
      type: String,
    },

    title: {
      type: String,
    },

    // searchOption: {
    //   type: Array,
    // }
  }
}
</script>

<style scoped>
.card-container {
  width: 330px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.has-padding {
  padding: 12px;
}

.card-header {
  background-color: #fff;
  color: #333;
  padding: 10px 12px;
  font-size: 20px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;

  .search-menu {
    display: flex;
  }
}

.card-body {
  padding: 10px;
  display: flex;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.padding-mode-head {
  padding: 0 0 10px 0;
}

.padding-mode-content {
  padding: 10px 0;
}

</style>
