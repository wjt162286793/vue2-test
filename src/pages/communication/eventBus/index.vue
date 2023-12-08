<template>
    <div>
      <Child1></Child1>
      <hr>
      <Child2></Child2>
    </div>
  </template>
  <script>
  import Child1 from './child1.vue'
  import Child2 from './child2.vue'
    export default{
      name:'propsTest',
      components:{
        Child1,
        Child2
      }
    }
  </script>
  <style lang="less">
  
  </style>