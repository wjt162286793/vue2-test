<template>
    <div class="box">
        <el-tabs v-model="activeName">
            <el-tab-pane label="简单指令(不需要修饰符)" name="first">
                <div class="content1">
                    <h6>v-text使用</h6>
                    <p>使用v-text----<span v-text="textValue"></span></p>
                    <p>使用模板语法----<span>{{ textValue }}</span></p>
                </div>
                <div class="content1">
                    <h6>v-html使用</h6>
                    <div v-html="htmlTemplate"></div>
                </div>
                <div class="content1">
                    <h6>v-show使用</h6>
                    <el-checkbox v-model="checkedValue">开关</el-checkbox>
                    <p v-show="checkedValue">开启</p>
                    <p v-show="!checkedValue">关闭</p>
                </div>
                <div class="content1">
                    <h6>v-if && else-if && else的使用</h6>
                    <p>数字:{{ numValue }}</p>
                    <el-button @click="addNum">增加</el-button>
                    <el-button @click="deleteNum">减少</el-button>
                    <p v-if="numValue > 0">大于0</p>
                    <p v-else-if="numValue === 0">等于0</p>
                    <p v-else>小于0</p>
                </div>
                <div class="content1">
                    <h6>v-for使用</h6>
                    <ul>
                        <li v-for="(item, index) in listValue" :key="item.value">{{ item.label }}</li>
                    </ul>
                </div>
                <div class="content1">
                    <h6>v-pre使用</h6>
                    <p v-pre>我是不需要编译的<span>{{ textValue }}</span></p>
                </div>
                <div class="content1">
                    <h6>v-cloak使用</h6>
                    <p v-cloak>
                        {{ textValue }}
                    </p>

                </div>
                <div class="content1">
                    <h6>v-once使用</h6>
                    <el-button @click="changeNumberVal">修改值</el-button>
                    <p v-once>不变的:{{ numberVal }}</p>
                    <p>变化的的:{{ numberVal }}</p>
                </div>
            </el-tab-pane>
            <el-tab-pane label="复杂指令" name="second">
                <div class="content2">
                    <h6>v-on使用(简写为@)</h6>
                    <el-button v-on:click="clickFun">常规点击</el-button>
                    <el-button @click="clickFun">简写常规点击</el-button>
                    <el-button v-on:[eventName]="clickFun">动态事件</el-button>
                    <el-button @[eventName]="clickFun">动态事件简写</el-button>
                    <el-button @click.once="clickFun">只生效一次</el-button>
                    <br>
                    <a href="http://www.baidu.com" @click="clickFun"><el-button>无限制跳转</el-button></a>
                    <a href="http://www.baidu.com" @click.prevent="clickFun"><el-button>阻止默认事件</el-button></a>
                    <br>
                    <p @click="clickPFun">
                        <span @click="clickSpanFun"><el-button @click="clickFun">节点嵌套事件冒泡</el-button></span>
                        <span @click="clickSpanFun"><el-button @click.stop="clickFun">阻止事件冒泡</el-button></span>
                    </p>
                    <br>
                    <input v-model="inputValue" @keyup.enter="inputEventFun" type="text">
                    <el-input v-model="inputValue" @keyup.native.enter="inputEventFun"></el-input>
                    <Child @click.native="componentClick"></Child>
                    <br>
                    <button v-on="{ mousedown: mousedownFun, mouseup: mouseUpFun }">对象语法</button>
                </div>
                <div class="content2">
                    <h6>v-bind使用</h6>
                    <p v-bind:class="className">动态class</p>
                    <p :style="styleName">动态样式加简写</p>
                    <el-button :name1="name1" :name2="name2" name3="属性3" ref="btn1"
                        @click="checkBtn1">查看element按钮组件的自定义属性</el-button>
                    <button :name1="name1" :name2="name2" name3="属性3" ref="btn2" @click="checkBtn2">查看原生dom的自定义属性</button>
                </div>
                <div class="content2">
                    <h6>v-model使用</h6>
                    <p>常规v-model<el-input v-model="InputVal"></el-input></p>
                    <p>lazy修饰符<input v-model.lazy="InputLazyVal" @input="inputLazyFun" /></p>
                    <p>number修饰符<el-input v-model.number="InputNumberVal"></el-input></p>
                    <p>trim修饰符<el-input v-model.trim="InputTrimVal"></el-input></p>
                </div>
                <div class="content2">
                    <h6>v-slot使用</h6>
                    具体参考插槽吧,这里不做演示了
                </div>
            </el-tab-pane>
            <el-tab-pane label="自定义指令" name="third">
                <h6>固定颜色指令</h6>
                <p v-color>固定红色的指令效果</p>
                <hr>
                <h6>自定义颜色</h6>
                选择一个颜色吧:<el-color-picker v-model="colorValue"></el-color-picker>
                <p v-setColor="colorValue">我是一段可选择颜色的字段</p>
                <hr>
                <h6>可拖拽指令</h6>
                <div class="dragBox">
                    <div class="dragContent" v-draggable></div>
                </div>
            </el-tab-pane>
        </el-tabs>

    </div>
</template>
<script>
import Child from './child.vue'
export default {
    name: 'instructions',
    data() {
        return {
            activeName: 'first',
            textValue: '这是一段常规文字',
            htmlTemplate: `<div><input/><button>按钮</button></div>`,
            checkedValue: true,
            numValue: 0,
            numberVal: 100,
            inputValue: '输入框的值',
            listValue: [
                {
                    label: '文字1',
                    value: 'one'
                },
                {
                    label: '文字2',
                    value: 'two'
                },
                {
                    label: '文字3',
                    value: 'three'
                }
            ],
            eventName: 'click',
            className: 'classP',
            styleName: {
                color: 'green'
            },
            name1: '属性1',
            name2: JSON.stringify({
                value: '属性3'
            }),
            InputVal: '常规输入框的值',
            InputLazyVal: 'lazy输入框的值',
            InputNumberVal: 1,
            InputTrimVal: '去空输入框的值',
            colorValue: '#000',
        }
    },
    directives: {
        color: {
            // 指令的定义
            inserted: function (el) {
                el.style.color = 'red'
            }
        }
    },
    components: {
        Child
    },
    methods: {
        addNum() {
            this.numValue++
        },
        deleteNum() {
            this.numValue--
        },
        changeNumberVal() {
            this.numberVal++
        },
        clickFun() {
            console.log('常规点击')
        },
        clickPFun() {
            console.log('点击p标签')
        },
        clickSpanFun() {
            console.log('点击span标签')
        },
        inputEventFun() {
            console.log(this.inputValue, '输入框的值')
        },
        componentClick(e) {
            console.log(e, '点击了组件')
        },
        mousedownFun() {
            console.log('鼠标按下')
        },
        mouseUpFun() {
            console.log('鼠标抬起')
        },
        checkBtn1() {
            let btn1 = this.$refs.btn1
            console.log(btn1, 'element组件按钮')
            console.log(btn1.$attrs['name1'], JSON.parse(btn1.$attrs['name2']), btn1.$attrs['name3'], '按钮的属性')
        },
        checkBtn2() {
            let btn2 = this.$refs.btn2
            console.log(btn2, 'btn的节点')
            console.log(btn2.getAttribute('name1'), JSON.parse(btn2.getAttribute('name2')), btn2.getAttribute('name3'), '按钮的属性')
        },
        inputLazyFun() {
            console.log(this.InputLazyVal, 'lazy值')
        },
    },
}
</script>
<style lang="less" scoped>
.box {
    padding: 14px;

    .content1 {
        float: left;
        width: 30%;
        height: 200px;
        margin: 10px;
        padding: 8px;
        box-shadow: 1px 1px 1px 1px #837e7e;

        h6 {
            font-size: 14px;
            font-weight: 600;
        }
    }

    .content2 {
        float: left;
        width: 40%;
        height: 350px;
        margin: 10px;
        padding: 8px;
        box-shadow: 1px 1px 1px 1px #837e7e;

        h6 {
            font-size: 14px;
            font-weight: 600;
        }
    }

}

[v-cloak] {
    display: none;
}

.classP {
    color: red;
}

.dragBox {
    position: relative;
    width: 800px;
    height: 200px;
    border: 1px solid #000;

    .dragContent {
        position: absolute;
        width: 50px;
        height: 50px;
        background: red;
        cursor: move;
        left: 10px;
        top: 10px;
    }
}
</style>