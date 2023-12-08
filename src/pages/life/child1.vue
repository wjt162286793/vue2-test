<template>
  <div>
    <el-input v-model="value" ref="inputRef"></el-input>
  </div>
</template>
<script>
export default {
  name: 'Com1',
  data() {
    return {
      value: '默认值',
    }
  },
  beforeCreate() {
    console.log(this.value, 'beforeCreate钩子内的value')
    console.log(this.$refs.inputRef, 'beforeCreate钩子内的ref节点')
  },
  created() {
    console.log(this.value, 'created钩子内的value')
    console.log(this.$refs.inputRef, 'created钩子内的ref节点value')
  },
  beforeMount() {
    console.log(this.value, 'beforeMount钩子内的value')
    console.log(this.$refs.inputRef, 'beforeMount钩子内的ref节点')
  },
  mounted() {
    console.log(this.value, 'mounted钩子内的value')
    console.log(this.$refs.inputRef, 'mounted钩子内的ref节点value')
  },
  beforeUpdate() {
    console.log(this.value, 'beforeUpdate钩子内的value')
    console.log(this.$refs.inputRef, 'beforeUpdate钩子内的ref节点')
  },
  updated() {
    console.log(this.value, 'updated钩子内的value')
    console.log(this.$refs.inputRef, 'updated钩子内的ref节点')
  },
  beforeDestroy() {
    console.log(this.value, 'beforeDestroy钩子内的value')
    console.log(this.$refs.inputRef, 'beforeDestroy钩子内的ref节点')
  },
  destroyed() {
    console.log(this.value, 'destroyed钩子内的value')
    console.log(this.$refs.inputRef, 'destroyed钩子内的ref节点')
  },
  methods: {
    handler() {

    },
  }


}
</script>