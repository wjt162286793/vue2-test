<template>
    <div>
      子组件
      <el-input v-model="value" @input="changeValue"></el-input>
    </div>
  </template>
  <script>
    export default{
      name:'emitChild',
      data(){
        return{
          value:'子组件默认的值'
        }
      },
      methods:{
        changeValue(){
          this.$emit('getChildValue',this.value)
        }
      }
    }
  </script>
  <style lang="less">
  
  </style>