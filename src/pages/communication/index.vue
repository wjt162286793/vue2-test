<template>
  <div class="box">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        :label="item.name"
        :name="item.value"
        v-for="item in tabList"
        :key="item.value"
      >
        <component :is="tabValue"></component>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import PropsTest from "./props/index.vue";
import EmitTest from "./emit/index.vue";
import EventBusTest from "./eventBus/index.vue";
import RefTest from "./ref/index.vue";
import VModel from "./v-model/index.vue";
import ProvideAndInject from "./provideAndInject/index.vue";
import SlotVal from "./slot/index.vue";
export default {
  name: "communication",
  components: {
    PropsTest,
    EmitTest,
    EventBusTest,
    RefTest,
    VModel,
    ProvideAndInject,
    SlotVal,
  },
  data() {
    return {
      activeName: "PropsTest",
      tabValue: "PropsTest",
      tabList: [
        {
          name: "props练习",
          value: "PropsTest",
        },
        {
          name: "emit练习",
          value: "EmitTest",
        },
        {
          name: "eventBus练习",
          value: "EventBusTest",
        },
        {
          name: "ref练习",
          value: "RefTest",
        },
        {
          name: "v-model练习",
          value: "VModel",
        },
        {
          name: "provide&&inject练习",
          value: "ProvideAndInject",
        },
        {
          name: "作用域插槽",
          value: "SlotVal",
        },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      this.tabValue = tab.name;
    },
  },
};
</script>
<style lang="less" scoped>
.box {
  padding: 16px;
}
</style>