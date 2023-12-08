<template>
  <div>
    父组件
    <el-input v-model="value"></el-input>
    <hr>
    <EmitChild @getChildValue="getChildValue"></EmitChild>
  </div>
</template>
<script>
import EmitChild from './child.vue'
  export default{
    name:'emitTest',
    data(){
      return{
        value:'父组件默认的值'
      }
    },
    components:{
        EmitChild
    },
    methods:{
      getChildValue(childValue){
         this.value = childValue
      }
    }
  }
</script>
<style lang="less">

</style>