<template>
    <div>
        <p>子组件1</p>
        <p>子组件1的值:{{ value1 }} <el-button @click="addNum">增加</el-button></p>
        <p>来自子组件2的值:{{ value2 }}</p>
    </div>
</template>    
<script>
 export default{
    name:'child1',
    data(){
        return{
          value1:0,
          value2:100
        }
    },
    created(){
        this.$eventBus.$on('bus_deleteNum',this.changeValue2)
    },
    methods:{
        addNum(){
            this.value1++
            this.$eventBus.$emit('bus_addNum',this.value1)
        },
        changeValue2(val){
            this.value2 = val
        }
    },
    destroyed(){
        this.$eventBus.$off('bus_deleteNum')
    }
 }
</script>