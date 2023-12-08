<template>
    <div>
       <p>继承的值:{{ extendVal }}</p>
       <p>继承姓名:{{ obj.name }}</p>
       <p>继承年龄:{{ obj.age }}</p>
       <p>组件值:{{ value }}</p>
       <el-button @click="add">大一岁</el-button>
       <el-button @click="changeVal">修改组件值</el-button>
    </div>
</template>
<script>
import exTendTest from '@/utils/extendTest.js'
export default {
    name: 'ExtendCom',
    extends: exTendTest,
    data(){
        return{
            value:10
        }
    },
}
</script>
<style scoped lang="less"></style>