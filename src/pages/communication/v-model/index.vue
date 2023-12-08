<template>
  <div>
    <el-input v-model="value"></el-input>
    <hr />
    <Child v-model="value" @changeValue="changeValue"></Child>
  </div>
</template>
<script>
import Child from "./child.vue";
export default {
  name: "vModel",
  components: {
    Child,
  },
  data() {
    return {
      value: "父组件默认的值",
    };
  },
  methods: {
    changeValue(data) {
      this.value = data;
    },
  },
};
</script>