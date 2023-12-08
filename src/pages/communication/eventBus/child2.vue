<template>
    <div>
        子组件2
        <p>来自子组件1的值:{{ value1 }}</p>
        <p>子组件2的值:{{ value2 }} <el-button @click="deleteNum">减少</el-button> </p>
    </div>
</template>    
<script>
 export default{
    name:'child2',
    data(){
        return{
            value1:0,
            value2:100
        }
    },
    created(){
        this.$eventBus.$on('bus_addNum',this.changeValue1)
    },
    methods:{
        changeValue1(value){
           this.value1 = value
        },
        deleteNum(){
            this.value2--
            this.$eventBus.$emit('bus_deleteNum',this.value2)
        }
    },
    destroyed(){
        this.$eventBus.$off('bus_addNum')
    }
 }
</script>