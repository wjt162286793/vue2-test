<template>
  <div>
    <p>父组件数字值1:{{ numValue1 }} <el-button @click="addNum">增加</el-button></p>
    <p>获取子组件的值:{{ numValue2 }}</el-button></p>
    <hr />
    <PropsChild :numValue1="numValue1" :numValue2="getChildValue"></PropsChild>
  </div>
</template>
<script>
import PropsChild from './child.vue'
export default {
  name: 'propsTest',
  components: {
    PropsChild
  },
  data() {
    return {
      numValue1: 0,
      numValue2: '父组件默认的值'
    }
  },
  methods: {
    addNum() {
      this.numValue1++
    },
    getChildValue(childValue) {
      console.log(childValue, '???子组件的数值')
      this.numValue2 = childValue

    },
    getChildValueFun() {

    }
  }
}
</script>
<style lang="less"></style>