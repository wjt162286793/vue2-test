<template>
    <div>
        <el-button @click="checkThisHandler">查看this</el-button>
    </div>
</template>
<script>
export default {
    name: 'envMode',
    props:['propsValue1'],
    data(){
        return{
          numValue:'数值1',
          stringValue:'字符串值1',
          obj:{
            name:'对象'
          },
          list:[1,2,3]
        }
    },
    created(){
    },
    methods:{
        checkThisHandler(){
            console.log(this,'this的值')
        }
    }
}
</script>