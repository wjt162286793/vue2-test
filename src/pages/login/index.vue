<template>
  <div class="loginCom">
    <div class="loginForm">
    <el-button @click="login('admin')" type="primary">管理人员登录</el-button>
    <el-button @click="login('common')" type="primary">普通用户登录</el-button>
    <el-button @click="login('temporary')" type="primary">临时用户登录</el-button>
    </div>

  </div> 
</template>
<script>
 export default {
    name:'login',
    data(){
        return{

        }
    },
    methods:{
      login(userType){
        this.$axios.get(`/server1/login?user=${userType}`).then(res=>{
          //存储用户信息
          this.$store.dispatch('changeUserInfo',res)
          localStorage.setItem('vue2_userInfo',JSON.stringify(res))
          localStorage.setItem('vue2_token',res.token)
          this.$router.push('/dashboard')

        })
      }
    },
    created(){
    }
 }
</script>
<style lang="less" scoped>
.loginCom{
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
</style>