<template>
  <div>
    子组件
    <el-input v-model="inputvalue" @input="changeValue"></el-input>
  </div>
</template>
<script>
export default {
  name: "child",
  props: ["value"],
  model: {
    prop: "value",
    event: "changeValue",
  },
  data() {
    return {
      inputvalue: "子组件默认的值",
    };
  },
  create() {
    //子组件初始化同步,注释掉则为默认值
    // this.inputvalue = this.value;
  },
  methods: {
    changeValue(val) {
      this.$emit("changeValue", val);
    },
  },
  watch: {
    value: function (newVal) {
      this.inputvalue = newVal;
    },
  },
};
</script>