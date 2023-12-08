<template>
  <div>
    <p>子组件</p>
    <el-input v-model="childValue" @input="changeVal"></el-input>
  </div>
</template>

<script>
export default {
  name: "child",
  props: ["value"],
  data() {
    return {
      childValue: "子组件默认的值",
    };
  },
  methods: {
    changeVal() {
      this.$emit("changeVal", this.childValue);
    },
  },
  watch: {
    value: function (newVal) {
      this.childValue = newVal;
    },
  },
};
</script>

<style lang="less" scoped>
</style>
