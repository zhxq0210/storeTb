<template>
  <el-container>
      <el-header>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>数据管理</el-breadcrumb-item>
          <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
  </el-container>



  
</template>
<script>

    export default{
        name:'userList',
       
    }
</script>
<style lang="">
 
</style>