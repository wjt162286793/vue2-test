<template>
  <div>
    <p>$attrs与$listeners</p>
    <p>title的值:<el-input class="inputBox" v-model="title"></el-input></p>
    <p>数值1:<el-input class="inputBox" v-model="value1"></el-input></p>
    <p>数值2:<el-input class="inputBox" v-model="value2.value"></el-input></p>
    <p>数字值:{{ num }}</p>
    <hr />
    <Child
      :title="title"
      :value1="value1"
      :value2="value2"
      v-on="$listeners"
      @changeNum="changeNum"
    ></Child>
  </div>
</template>

<script>
import Child from "./child.vue";
export default {
  name: "AttrListen",
  components: {
    Child,
  },
  data() {
    return {
      title: "标题",
      value1: "数值1",
      value2: {
        value: "对象字段2",
      },
      num: 0,
    };
  },
  mounted() {},
  methods: {
    changeNum() {
      this.num++;
    },
  },
};
</script>

<style lang="less" scoped>
.inputBox {
  width: 300px;
}
</style>
