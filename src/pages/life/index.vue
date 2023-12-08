<template>
  <div class="box">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="(item, index) in tabList" :label="item.label" :name="item.name" :key="index">
      </el-tab-pane>
    </el-tabs>
    <div>
      <keep-alive :include="keepList">
          <component :is="activeName" @changeKeepHandler="changeKeepHandler"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import Com1 from './child1.vue'
import Com2 from './child2.vue'
import Com3 from './child3.vue'
export default {
  name: 'life',
  components: {
    Com1,
    Com2,
    Com3,
  },
  data() {
    return {
      activeName: 'Com1',
      tabList: [
        {
          label: '组件1(失活)',
          keepAlive: false,
          name: 'Com1'
        },
        {
          label: '组件2(失活)',
          keepAlive: false,
          name: 'Com2'
        },
        {
          label: '组件3(缓存)',
          keepAlive: true,
          name: 'Com3'
        }
      ],
      keepList:['Com3']
    };
  },
  methods: {
    handleClick(tab, event) {
    },
    changeKeepHandler(value) {
      console.log(value,'???')
      if(value){
        this.keepList = ['Com3']
      }else{
        this.keepList = []
      }
    },
    isKeep() {
      return this.tabList.find(item => item.name === this.activeName)['keepAlive']
    },
  }
};
</script>
<style lang="less" scoped>
.box {
  padding: 10px;
}
</style>