<template>
  <div>
    <p>子组件</p>
    <p>title的值:{{ $attrs.title }}</p>
    <p>数值1:{{ $attrs.value1 }}</p>
    <p>数值2:{{ $attrs.value2.value }}</p>
    <el-button @click="changeNum">修改值</el-button>
  </div>
</template>

<script>
export default {
  name: "child",
  created() {},
  methods: {
    changeNum() {
      console.log(this.$listeners, "this.$listeners的值子组件");
      //   this.$emit("changeNum");
      this.$listeners.changeNum();
    },
  },
};
</script>

<style lang="less" scoped>
</style>
