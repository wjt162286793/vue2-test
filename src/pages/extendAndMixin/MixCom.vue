<template>
    <div>
        <p>组件本身的值:{{ comVal }}</p>
        <p>mixin字符串:{{ mixinvalue }}</p>
        <p>mixin数字:{{ numVal }}</p>
        <p>mixin名字:{{ objVal.name }}</p>
        <p>mixin年龄:{{ objVal.age }}</p>
        <p>覆盖mixin的值:{{ value }}</p>
        <el-button @click="changeValue">大一岁</el-button>
    </div>
</template>
<script>
import {mixinTest} from '@/utils/mixinTest.js'
export default{
 name:'MixCom',
 mixins:[mixinTest],
 data(){
    return{
        comVal:'mixinCom本身的值',
        value:'组件内的值'
    }
 },
 methods:{
 }
}
</script>
<style scoped lang="less">

</style>