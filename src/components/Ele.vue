<template>
  <div class="ele-page">
    <el-container class="common-height">
      <el-aside width="200px">
         <el-menu default-active="2"
            class="el-menu-vertical-demo"
            background-color="#444"
            text-color="#bfbfbf"
            active-text-color="#ccc"
            :router="true">
            <el-menu-item index="/home"><i class="el-icon-menu"></i><span slot="title">首页</span></el-menu-item>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-menu"></i>数据管理</template>
              <el-menu-item index="userlist">用户列表</el-menu-item>
              <el-menu-item index="merchantlist">商家列表</el-menu-item>
              <el-menu-item index="goodslist">商品列表</el-menu-item>
              <el-menu-item index="orderlist">订单列表</el-menu-item>
              <el-menu-item index="administratorlist">管理员列表</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title"><i class="el-icon-setting"></i>添加数据</template>
              <el-menu-item index="addshoppro">添加商品</el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title"><i class="el-icon-setting"></i>图表</template>
              <el-menu-item index="4-1">用户分布</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title"><i class="el-icon-setting"></i>编辑</template>
              <el-menu-item index="5-1">文本编辑</el-menu-item>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title"><i class="el-icon-setting"></i>设置</template>
              <el-menu-item index="6-1">管理员设置</el-menu-item>
            </el-submenu>
              <el-menu-item index="/" @click="deleteItem"><i class="el-icon-menu"></i><span slot="title">注销</span></el-menu-item>
            
          </el-menu>
      </el-aside>
          <router-view></router-view>
    </el-container>
    
  </div>

</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name: 'Ele',
  computed:{
      ...mapGetters(['adminData'])
  },
  methods:{
    ...mapActions(['login']),
    deleteItem(){
      localStorage.removeItem("adData");
     
    }
  }
}
</script>

<style>
  .common-height,.el-aside,.el-menu{
    height:100% 
  }
  .el-header,.el-breadcrumb{
    height:50px;
    line-height:50px;
    font-size:14px;
    background:#f5f5f5;
  }

</style>
