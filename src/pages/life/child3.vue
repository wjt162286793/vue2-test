<template>

    <div>
        <h4>缓存组件</h4>
        <el-checkbox v-model="value" @change="changeCheckVal">切换缓存状态</el-checkbox>
    </div>
    
    </template>
    <script>
    
    export default{
        name:'Com3',
        data(){
        return{
             value:true
        }
    },
    activated(){
        console.log('缓存组件激活时调用')
        },
    deactivated(){
        console.log('缓存组件失活时调用')
    },
    methods:{
        changeCheckVal(){
            this.$emit('changeKeepHandler',this.value)
        }
    }
    }
    </script>