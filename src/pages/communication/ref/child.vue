<template>
    <div>
       子组件的值{{ value }}
    </div>
</template>
<script>
  export default{
    name:'refTest',
    data(){
        return{
           value:'子组件初始化的值'
        }
    },
    methods:{
        getValue(val){
            this.value = val
        }
    }
  }
</script>