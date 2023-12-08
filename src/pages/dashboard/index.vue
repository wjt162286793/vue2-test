<template>
  <div class="layout">
    <header class="header">
        <div class="logo">
          <h1>Vue2练习</h1>
        </div> 
        <div class="headerContent">
           <p>当前用户:{{ userName }}</p>
           <el-button @click="outLogin">退出登录</el-button>
        </div>
    </header>
    <content class="content">
        <div class="leftMenu">
           <el-menu
      :default-active="leftMenu[0].name"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item :index="item.name" v-for="(item,index) in leftMenu" :key="index" @click="changeMenuItem(item)">
        <i :class="item.meta.icon"></i>
        <span slot="title">{{ item.meta.name }}</span>
      </el-menu-item>
    </el-menu>
        </div>
        <div class="rightbox">
          <router-view></router-view>
        </div>
    </content>
  </div>
</template>
<script>
 export default {
    name:'dashboard',
    data(){
        return{
      leftMenu:[],
      userName:''
        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      changeMenuItem(item){
        this.$router.push(item.path)
      },
      outLogin(){
        this.$store.dispatch('changeUserInfo',{
          name:'wjt'
        })
        this.$store.dispatch('changeUserRole',[])
        this.$store.dispatch('changeAsyncRouteList',[])
        localStorage.removeItem('vue2_userInfo')
        localStorage.removeItem('vue2_token')
        this.$router.push('/login')
      }
    },
    created(){
      console.log(this.$store.state)
      this.leftMenu = this.$store.state.user.asyncRouteList
      this.userName = this.$store.state.user.userInfo.userName || JSON.parse(localStorage.getItem('vue2_userInfo')).userName
      if(this.$route.name === 'dashboard'){
        this.changeMenuItem(this.leftMenu[0])
      }
      
    }
 }
</script>
<style lang="less" scoped>
::v-deep(.el-menu){
  border:none;
}
.layout{
    // height:100vh;
    // width:100vw;
    .header{
        display: flex;
        height:100px;
        width:100%;
        background-color:#535b65;
        .logo{
          background-color:#fff;
          height:100%;
          width:200px;
          color:#000;
          display:flex;
          h1{
            margin:auto;
            font-size:20px;
            font-weight:600;
          }
        }
        .headerContent{
          display: flex;
          flex: 1;
          justify-content: flex-end;
          align-items: center;
          padding-right: 18px;
          color: #fff;
          p{
            margin: 0 18px;
          }
        }
    }
    .content{
        flex:1;
        display:flex;
        height:calc(~"100vh - 100px");
        background-color:#fff;
        .leftMenu{
            width:200px;
            height:100%;
            background-color:#535b65;
        }
        .rightbox{
          flex:1;
          height:100%;
        }
    }
}

</style>