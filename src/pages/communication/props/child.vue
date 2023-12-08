<template>
  <div>
    <p>子组件数值:{{ numValue1 }}</p>
    <el-input v-model="value" @input="numValue2" class="inputBox"></el-input>
  </div>
</template>
<script>
export default {
  name: 'propsChild',
  props: {
    numValue1: {
      type: Number,
      require: true,
      default: 0
    },
    numValue2:{
      type:Function,
      default:()=>{}
    }
  },
  data(){
    return{
      value:'子组件本身的值'
    }
  }

}
</script>
<style lang="less">
.inputBox{
  width:300px;
  margin-top:16px;
}
</style>