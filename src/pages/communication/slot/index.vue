<template>
    <div>
        父组件
        <hr>
        <Child>
            <template slot-scope="num">
                <span>父组件中使用:{{ num.data }}</span>
            </template>
        </Child>

    </div>
</template>
<script>
import Child from './child.vue'
export default {
    name: 'slotVal',
    components: {
        Child
    },
}
</script>
