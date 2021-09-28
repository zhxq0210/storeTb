<template>
  <div>
      <el-table
    :data="productData"
    style="width: 100%">
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品名称">
            <span>{{ props.row.p_name }}</span>
          </el-form-item>
          <el-form-item label="所属店铺">
            <span>{{ props.row.shop_name }}</span>
          </el-form-item>
          <el-form-item label="商品 ID">
            <span>{{ props.row.pid }}</span>
          </el-form-item>
          <el-form-item label="店铺 ID">
            <span>{{ props.row.shop_id }}</span>
          </el-form-item>
          <el-form-item label="商品分类">
            <span>{{ props.row.class_name }}</span>
          </el-form-item>
          <el-form-item label="店铺地址">
            <span>{{ props.row.shop_add }}</span>
          </el-form-item>
          <el-form-item label="商品描述">
            <span>{{ props.row.describe }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="商品名称"
      prop="p_name">
    </el-table-column>
     <el-table-column
      label="商品图片">
      <template slot-scope="scope">
        <span style="margin-left: 10px">
          <img width="50" height="50" :src="scope.row.img_url" alt="">
        </span>
      </template>
    </el-table-column>
    <el-table-column
      label="商品价格"
      prop="price">
    </el-table-column>
    <el-table-column
      label="商品销量"
      prop="seller_number">
    </el-table-column>
     <el-table-column
      label="商品库存"
      prop="total_number">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <span style="margin-left: 10px">
          <el-button type="text" @click=" open2({pid:scope.row.pid}) ">删除</el-button>
          <el-button type="text" @click="getUpdateData(scope.row)">修改</el-button>
        </span>
      </template>
    </el-table-column>
  </el-table>
  <update ref="update"></update>
    <div class="block" ref="ww">
      <el-pagination 
          layout="prev, pager, next"
          :page-size="5"
          :total="productCount"
          @current-change="changePage">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import update from "./Update.vue"
  import {mapActions,mapGetters} from 'vuex'
  export default {
    data() {
      return {
        centerDialogVisible: false,
         input10: '',
         select: '',
         dialogImageUrl: '',
        dialogVisible: false
      };
    },
    name:"goodsPage",
    computed:{
      ...mapGetters(['productData','productCount'])
    },
    methods: {
      ...mapActions(['getProductData','removeProduct']),
      changePage(currentPage){
          console.log(currentPage) //当前页码  =>通过当前页面获取数据
          this.getProductData({pageNum:currentPage,pageSize:5})
      },
      open2({pid}) {
        console.log({pid})
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
        }).then(() => {
          this.removeProduct({pid})
          this.getProductData({pageNum:1,pageSize:5});
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      getUpdateData(row){
        console.log(this.$refs["update"])
        this.$refs["update"].updateData(row)
      }
    },
    mounted(){
        this.getProductData({pageNum:1,pageSize:5})
    },
     components:{
      update
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
  .el-table_1_column_3 .cell span img{
    margin-left:44px
  }
</style>