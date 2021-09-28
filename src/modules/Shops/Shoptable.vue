<template>
<div>
  <el-table
    :data="shopData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props" >
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="店铺名称">
            <span>{{ props.row.shop_name }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.shop_add }}</span>
          </el-form-item>
          <el-form-item label="店铺介绍">
            <span>{{ props.row.shop_detail }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.shop_id }}</span>
          </el-form-item>
          <el-form-item label="联系电话">
            <span>{{ props.row.shop_tel }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="店辅名称"
      prop="shop_name">
    </el-table-column>
    <el-table-column
      label="店铺地址"
      prop="shop_add">
    </el-table-column>
    <el-table-column
      label="店铺介绍"
      prop="shop_detail">
    </el-table-column>
    <el-table-column
      label="操作"
      prop="desc">
      <template slot-scope="props" >
        <el-button-group>
          <el-button type="primary" icon="el-icon-edit" @click="editShop(props.row)"></el-button>
          <el-button type="primary" icon="el-icon-delete" @click="dropShop({shop_id:props.row.shop_id})"></el-button>
        </el-button-group>

      </template>
      
    </el-table-column>
      

  </el-table>
  <addshop ref="addshop"></addshop>
  <editshop ref="editshop"></editshop>
  <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :page-size="5"
        :total="shopCount"
        @current-change="changePage">
      </el-pagination>
  </div>
  <el-button type="primary" icon="el-icon-plus" @click="addShop">添加商铺</el-button>
</div>
</template>
<script>
import addshop from "./addShop.vue"
import editshop from "./updateShop.vue"

 import {mapActions,mapGetters} from 'vuex'
    export default {
        name:"Shoptable",
        computed:{
           ...mapGetters(['shopData','shopCount'])
        },
        methods: {
            ...mapActions(['getShopList','removeShop']),
            changePage(currentPage){
                console.log(currentPage) //当前页码  =>通过当前页面获取数据
                this.getShopList({pageNum:currentPage,pageSize:5})
            },
             dropShop({shop_id}){
               console.log({shop_id})
              this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                console.log({shop_id})
                this.removeShop({shop_id})
               this.getShopList({pageNum:1,pageSize:5})
                this.$message({
                  type: 'success',
                  message: '删除成功!'
                }); 
              }).catch((err) => {
                console.log(err,shop_id)
                this.$message({
                  type: 'info',
                  message: '已取消删除'
                });          
              });
            },
            addShop(){
              console.log(this.$refs["addshop"].addShop())
               this.$refs["addshop"].addShop
            },
            editShop(row){
              this.$refs["editshop"].editShopData(row)
            }
        },
        mounted(){
            this.getShopList({pageNum:1,pageSize:5})
        },
        components:{
          addshop,
          editshop
        },
    }
</script>
<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>