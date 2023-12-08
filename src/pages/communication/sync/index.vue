<template>
  <div>
    <div>sync模块</div>
    <el-input v-model="value"></el-input>
    <hr />
    <Child :value.sync="value" @changeVal="changeVal"></Child>
  </div>
</template>

<script>
import Child from "./child.vue";
export default {
  name: "sync",
  components: {
    Child,
  },
  data() {
    return {
      value: "父组件默认的值",
    };
  },
  methods: {
    changeVal(val) {
      this.value = val;
    },
  },
};
</script>

<style lang="less" scoped>
</style>
