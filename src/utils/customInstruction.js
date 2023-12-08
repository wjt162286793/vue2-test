import Vue from 'vue'
import _ from 'lodash'
Vue.directive('setColor',{
   inserted:function(el,val,vnode){
     el.style.color = val.value || '#000'
   },
   update:function(el,val,vnode){
     el.style.color = val.value || '#000'
   },
})

Vue.directive('draggable',{
    inserted: function (el) {
        el.onmousedown = function (e) {
            var disx = e.pageX - el.offsetLeft;
            var disy = e.pageY - el.offsetTop;
            document.onmousemove = function (e) {
                el.style.left = e.pageX - disx + 'px';
                el.style.top = e.pageY - disy + 'px';
            }
            document.onmouseup = function () {
                document.onmousemove = document.onmouseup = null;
            }
        }
    },
})