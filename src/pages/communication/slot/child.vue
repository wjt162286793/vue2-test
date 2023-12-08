<template>
    <div>
      <slot :data="num"></slot>
      <el-button @click="add">子组件中点击增加</el-button>
    </div>
   </template>
   <script>
    export default{
       name:'Child',
       data(){
        return{
            num:0
        }
       },
       methods:{
        add(){
            this.num ++
        }
       }
    }
   </script>
   