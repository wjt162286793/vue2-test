<template>
    <div>
      <p>父组件的值:{{ value }} <el-button @click="addNum">增加</el-button> </p>
      <hr>
      <Child ref="child"></Child>
    </div>
</template>
<script>
import Child from './child.vue'
  export default{
    name:'refTest',
    components:{
        Child
    },
    data(){
        return{
          value:0
        }
    },
    methods:{
      addNum(){
        this.value++
        this.$refs.child.getValue(this.value)
    }
    }

  }
</script>