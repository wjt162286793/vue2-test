<template>
    <div>
        <h4>继承extend模块1</h4>
        <ExtendCom></ExtendCom>
        <h4>继承extend模块2</h4>
        <ExtendCom></ExtendCom>
        <hr>
        <h4>mixin混入模块1</h4>
        <MixCom></MixCom>
        <hr>
        <h4>mixin混入模块2</h4>
        <MixCom></MixCom>
    </div>
</template>
<script>
import ExtendCom from './extendCom.vue';
import MixCom from './MixCom.vue';
export default {
    name: 'extendAndMixin',
    components: {
        ExtendCom,
        MixCom
    }
}
</script>
<style scoped lang="less"></style>