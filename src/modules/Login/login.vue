<template>
  <div class="login-container" style="background-color:#141a48;margin:0px;overflow:hidden;">
    <div id="canvascontainer" ref = 'can'></div>
    <el-form ref="loginForm" autocomplete="on" :model="loginForm" class="card-box login-form">
      <el-form-item prop="admins" :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
    ]">
        <el-input type="text" v-model="loginForm.admins" placeholder="Username" autocomplete="on">
          <el-icon type="ios-person-outline" slot="prepend"></el-icon>
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" placeholder="Password" @keyup.enter.native="handleLogin">
          <el-icon type="ios-locked-outline" slot="prepend"></el-icon>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin('loginForm')">登录</el-button>
          <el-icon type="ios-person-outline" slot="prepend"></el-icon>
        </Input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
//:rules="loginRules"
import {mapActions,mapGetters} from 'vuex'
export default {
    name:'login',
    data() {
      // const vaildateEmail = (tule,value,callback)=>{
      //   if(!isWscnEmail(value)){
      //     callback(new Error('请输入正确的合法邮箱'))
      //   }else{
      //     callback();
      //   }
      // };
      // const vaildatePass = (rule,value,callback)=>{
      //   if(value.length<6){
      //     callback(new Error('密码不能小于6位'))
      //   }else{
      //     callback();
      //   }
      // };
      return {
        loginForm:{
          admins:"",
          password:""
        },
        // loginRules:{
        //   admins:[
        //     {required:true,tigger:'blur',validator:vaildateEmail}
        //   ],
        //   password:[
        //     {required:true,trigger:'blur',vaildator:vaildatePass}
        //   ]
        // },
        loading:false,
        showDialog:false
      }
    },
    computed:{
      ...mapGetters(['adminData'])
    },
    methods:{
      
      ...mapActions(['login']),
      handleLogin(loginFrom){
         
        this.login({params: this.loginForm, callback:()=>{
          // this.loginForm = {}

          this.$message({
            message:"登陆成功",
            type:'success'
          })
        }})
      },
      resetForm(formName) {
        
        this.$refs[formName].resetFields();
      }

    }
  }
</script>
<style>
   .login-container{
     width:100%;
     background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1522640765824&di=197fa3052e3f5866f38adab146e2ad1d&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0128285574ed4b0000009fcb295417.jpg%401280w_1l_2o_100sh.jpg");
     background-size: 100% 100%;
   }
   .login-form{
     margin-top:200px;
   }
   .el-form{
     width:50%;
     margin:20% auto;
   }
</style>
