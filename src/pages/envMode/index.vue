<template>
  <div>
    <el-button @click="checkEnvInfo">查看环境信息</el-button>
    <p>当前环境名称:{{ envName }}</p>
    <p>父组件的值{{ value }}</p>
    <Child :propsValue1="value" @changeValue="changeValue"></Child>
  </div>
</template>
<script>
import Child from "./child.vue";
export default {
  name: "envMode",
  data() {
    return {
      value: 1,
      envName: null,
    };
  },
  components: {
    Child,
  },
  created() {
    this.envName = process.env.NODE_ENV;
  },
  methods: {
    checkEnvInfo() {
      console.log(process.env);
    },
    changeValue(value) {
      this.value = value;
    },
  },
};
</script>