 <template>
 <div>
    <el-table
      :data="userData"
      style="width: 100%">
      <el-table-column
        prop="uid"
        label="用户ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户账号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="ads_name"
        label="用户姓名">
      </el-table-column>
      <el-table-column
        prop="detail"
        label="收货地址">
      </el-table-column>
      <el-table-column
      label="操作">
      <template slot-scope="scope">
        <span style="margin-left: 10px">
          <el-button type="text" @click=" open2({uid:scope.row.uid}) ">删除</el-button>
          <el-button type="text" @click="getUserLists(scope.row)">修改</el-button>
        </span>
      </template>
    </el-table-column>
    </el-table>
    <update ref="update"></update>
    <div class="block">
    <span class="demonstration"></span>
      <el-pagination
          layout="prev, pager, next"
          :page-size="5"
          :total="userCount"
          @current-change="changePage">
      </el-pagination>
  </div>
</div>
  </template>

  <script>
    import update from "./Updateuser.vue"
    import {mapActions,mapGetters} from 'vuex'
    export default {
        name:"Usertable",
        computed:{
           ...mapGetters(['userData','userCount','adminData'])
        },
        methods: {
            ...mapActions(['getUserList','removeUser','login']),
              open2({uid}) {
                var msg = localStorage.getItem("adData")
                var json = (new Function('return ' + msg))();
                console.log(json)
               // console.log({uid})
                if(json.state == 1){
                   this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                      confirmButtonText: '确定',
                      cancelButtonText: '取消',
                      type: 'warning',
                    }).then(() => {
                      this.removeUser({uid})
                      this.getUserList({pageNum:1,pageSize:5});
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
                }else{
                  alert("该用户没有操作权限")
                }
            },
            changePage(currentPage){
                console.log(currentPage) //当前页码  =>通过当前页面获取数据
                this.getUserList({pageNum:currentPage,pageSize:5})
            },
            getUserLists(row){
              var msg = localStorage.getItem("adData")
              var json = (new Function('return ' + msg))();
              if(json.state === 1){
                 this.$refs["update"].updateData(row)
              }else{
                alert("该用户没有操作权限")
              }
            }
        },
        mounted(){
            this.getUserList({pageNum:1,pageSize:5})
        },
        components:{
          update
        }
    }
  </script>