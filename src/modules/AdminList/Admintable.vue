<template>
 <div>
    <el-table
      :data="adminData"
      style="width: 100%">
      <el-table-column
        prop="admin_id"
        label="管理员ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="admins"
        label="管理员账号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="state"
        label="管理员权限">
      </el-table-column>
      
      
    </el-table>
    
    <div class="block">
    <span class="demonstration"></span>
      <el-pagination
          layout="prev, pager, next"
          :page-size="5"
          :total="adminCount"
          @current-change="changePage">
      </el-pagination>
  </div>
</div>
  </template>
  <script>
      import {mapActions,mapGetters} from 'vuex'
      export default {
        name:"Admintable",
        computed:{
           ...mapGetters(['adminData','adminCount'])
        },
        methods: {
            ...mapActions(['getAdminList']),
             changePage(currentPage){
                console.log(currentPage) //当前页码  =>通过当前页面获取数据
                this.getAdminList({pageNum:currentPage,pageSize:5})
            },
        },
        mounted(){
            this.getAdminList({pageNum:1,pageSize:5})
        }
      }
  </script>