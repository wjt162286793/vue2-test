<template>
  <div class="flowBox">
    <div class="leftMenu">
      <h4 @click="checkInfo">左侧菜单</h4>
      <draggable @start="start" @end="end" :sort="false">
        <div
          v-for="(item, index) in leftMenuList"
          :key="item.id"
          @mousedown="(el) => downNode(el, item)"
          class="leftNode"
        >
          {{ item.name }}
        </div>
        <h4>操作提示</h4>
        <hr />
        <p>左侧拖拽至右侧画布</p>
        <p>右键节点是删除节点,左键线条是删除线条</p>
      </draggable>
    </div>
    <div class="plumbBox" id="plumbBox">
      <div
        v-for="(item, index) in dataInfo"
        :key="item.id"
        :id="item.id"
        :style="nodeStyle(item)"
        @click.right="deleteNode($event, item)"
      >
        {{ item.name }}
        <div class="pointNode"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { jsPlumb } from "jsplumb";
import { readyConfig, sourceConfig, targetConfig } from "./config";
import { leftMenuList } from "./data";
import { cloneDeep } from "lodash";
import draggable from "vuedraggable";
export default {
  name: "flowChart",
  components: { draggable },
  data() {
    return {
      //节点列表
      leftMenuList: leftMenuList,
      dataInfo: [],
      //plumb实例
      PlumbInit: null,
      //关系列表
      renderList: [],
      //画布信息(大小和位置)
      canvasInfo: null,
      //鼠标位置精准判定
      nodePositionDiff: null,
      //选中的左侧列表节点
      ativeNodeItem: null,
      //线条的信息
      deleteLineInfo: null,
    };
  },
  mounted() {
    this.jsPlumbInit();
    this.readyPlumbDataFun("once");
  },
  methods: {
    //初始化
    jsPlumbInit() {
      this.PlumbInit = jsPlumb.getInstance();
      this.PlumbInit.importDefaults(readyConfig);
    },
    //组织渲染用的数据
    readyPlumbDataFun(flag) {
      this.renderList = [];
      this.PlumbInit.deleteEveryConnection();
      this.PlumbInit.deleteEveryEndpoint();
      this.$nextTick(() => {
        this.dataInfo = cloneDeep(this.dataInfo);
        //根据数据创建关联信息(连线关系)
        this.dataInfo.forEach((item) => {
          if (item.to && item.to.length > 0) {
            item.to.forEach((item1) => {
              let nodeConfig = Object.assign(
                {
                  source: item.id,
                  target: item1,
                },
                readyConfig
              );
              this.renderList.push(nodeConfig);
            });
          }
          this.makeNodeConfig(item);
        });
        this.readyPlumbNodeFun(flag);
      });
    },
    //配置节点的具体信息
    makeNodeConfig(item) {
      this.PlumbInit.setSourceEnabled(item.id, true);
      this.PlumbInit.setTargetEnabled(item.id, true);
      this.PlumbInit.makeSource(item.id, sourceConfig);
      this.PlumbInit.makeTarget(item.id, targetConfig);
      this.PlumbInit.setDraggable(item.id, true);
      this.PlumbInit.draggable(item.id, {
        containment: "parent",
        stop: function (el) {
          item.left = el.pos[0];
          item.top = el.pos[1];
        },
      });
    },
    //渲染页面关系
    readyPlumbNodeFun(flag) {
      this.PlumbInit.ready(() => {
        this.renderList.forEach((item) => {
          this.PlumbInit.connect(item);
        });
        if (flag !== "once") {
          return;
        }
        this.PlumbInit.bind("connection", (info) => {
          const sourceNode = this.dataInfo.find(
            (item) => item.id === info.sourceId
          );
          if (sourceNode.to.includes(info.targetId)) {
            return false;
          }
          console.log("调用了几次");
          sourceNode.to.push(info.targetId);
          // this.$nextTick(() => {
          //   this.readyPlumbDataFun()
          // })
          return true;
        });
        this.PlumbInit.bind("click", (con) => {
          this.deleteLineInfo = {
            source: con.sourceId,
            target: con.targetId,
          };
          this.deleteLine(this.deleteLineInfo);
        });
      });
    },
    //plumbNode的样式
    nodeStyle(item) {
      return {
        position: "absolute",
        left: item.left + "px",
        top: item.top + "px",
        width: "200px",
        height: "40px",
        lineHeight: "40px",
        textAlign: "center",
        borderLeft: "2px solid blue",
        borderRadius: "4%",
        cursor: "pointer",
        boxShadow: "#eee 3px 3px 3px 3px",
      };
    },
    //拖动开始
    start() {},
    //拖动结束
    end(e) {
      this.refreshCanvas();
      // 判断位置
      this.judgePosition(
        this.ativeNodeItem,
        this.canvasInfo,
        e.originalEvent.x,
        e.originalEvent.y
      );
    },
    //添加节点
    addNode(positionInfo, nodeInfo) {
      if (this.dataInfo.find((item) => item.id === nodeInfo.id)) {
        this.$message.error("该节点已经存在");
        return;
      }
      this.dataInfo.push({
        name: nodeInfo.name,
        id: nodeInfo.id,
        left: positionInfo.left,
        top: positionInfo.top,
        to: [],
      });
      this.$nextTick(() => {
        this.readyPlumbDataFun();
      });
    },
    //删除节点
    deleteNode($event, nodeInfo) {
      $event.returnValue = false;
      let index = this.dataInfo.findIndex((item) => item.id === nodeInfo.id);
      this.dataInfo.splice(index, 1);
      this.readyPlumbDataFun();
    },
    //删除线
    deleteLine(deleteLineInfo) {
      let dataInfo = cloneDeep(this.dataInfo);
      let node = dataInfo.find((val) => val.id === deleteLineInfo.source);
      let index = node.to.findIndex((val) => val === deleteLineInfo.target);
      node.to.splice(index, 1);
      this.dataInfo = null;
      this.dataInfo = dataInfo;
      this.readyPlumbDataFun();
    },
    checkInfo() {
      console.log(this.dataInfo, "dataInfo");
      console.log(this.renderList, "渲染关系");
    },
    //获取画布信息
    refreshCanvas() {
      this.canvasInfo = document
        .querySelector("#plumbBox")
        .getBoundingClientRect();
    },
    //判断节点拖拽位置
    judgePosition(dragNodeInfo, plumbBoxPositionInfo, x, y) {
      if (
        x - this.nodePositionDiff.leftDiff < plumbBoxPositionInfo.left ||
        x + 200 - this.nodePositionDiff.leftDiff > plumbBoxPositionInfo.right ||
        y - this.nodePositionDiff.topDiff < plumbBoxPositionInfo.top ||
        y + 40 - this.nodePositionDiff.topDiff > plumbBoxPositionInfo.bottom
      ) {
        this.$message.error("节点不能拖拽至画布之外");
      } else {
        const positionInfo = {
          top: y - plumbBoxPositionInfo.top - this.nodePositionDiff.topDiff,
          left: x - plumbBoxPositionInfo.left - this.nodePositionDiff.leftDiff,
        };
        this.addNode(positionInfo, dragNodeInfo);
      }
    },
    //鼠标抬起时,距离判定
    downNode(el, nodeItem) {
      this.ativeNodeItem = nodeItem;
      const mousedownPositionInfo = { x: el.clientX, y: el.clientY };
      // 被拖拽节点初始的位置信息
      const moveBoxBeforePosition = {
        x: el.target.getBoundingClientRect().x,
        y: el.target.getBoundingClientRect().y,
      };
      this.nodePositionDiff = {
        leftDiff: mousedownPositionInfo.x - moveBoxBeforePosition.x,
        topDiff: mousedownPositionInfo.y - moveBoxBeforePosition.y,
      };
      console.log(this.nodePositionDiff, "位置判定");
    },
  },
};
</script>
<style scoped>
.flowBox {
  display: flex;
  height: 100%;
}

.leftMenu {
  width: 300px;
  /* height: 100%; */
  border: 1px solid #1a1919;
}

h4 {
  margin-top: 10px;
  margin-left: 110px;
}

.leftNode {
  width: 200px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  margin: 30px;
  border: dashed 1px #362c2c;
  cursor: move;
}

.plumbBox {
  flex: 1;
  /* height: 100%; */
  position: relative;
}
.pointNode {
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background: royalblue;
  position: absolute;
  bottom: -5px;
  left: 95px;
}
</style>