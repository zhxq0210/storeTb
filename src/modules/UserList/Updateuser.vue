<template>
    <div>
        <el-dialog title="修改用户" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="用户账号" :label-width="formLabelWidth">
                <el-input v-model="form.username" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户姓名" :label-width="formLabelWidth">
                <el-input v-model="form.ads_name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="收货地址" :label-width="formLabelWidth">
                <el-input v-model="form.detail" auto-complete="off"></el-input>
                </el-form-item>
                
            </el-form>
             <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitPro">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>


<script>
//el-upload 
import {mapActions,mapGetters} from "vuex"
//1、设置 action http://localhost:3000/api/product/uploadImg
//2、设置 name 服务器端需要的上传图片input的字段名   （跟后端需要保持一致roompic）
export default {
  name: "update",
  data() {
    return {
      form:{
        username:"",
        ads_name:"",
        detail:""
      },
      
      formLabelWidth: '120px',
     
      dialogVisible: false,
      dialogFormVisible:false
    }
  },
  computed:{
      ...mapGetters(['userData'])
  },
  methods: {
    ...mapActions(["getUserList",'updatedUser']),
    //上传图片成功
    
    updateData(row){
       this.form = row
       this.dialogFormVisible=true
    },
    handleRemove(file, fileList) {
        console.log(file, fileList);
        console.log(this.fileList2)
      //  this.fileList2=[]
    },
    handlePreview(file) {
        console.log("preview: ",file);
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
    },
    handleSuccess(response, file, fileList){
        console.log("ok: ",response, file, fileList)
    },
    submitPro(){
      //提交用户， 隐藏弹窗
      this.dialogFormVisible = false
     //需要提交给后端的所有商品数据
      this.updatedUser({...this.form,callback:()=>{
        this.$message({
          message: '修改用户成功',
          type: 'success'
        });
      }})
      
    }
  }
}
  
</script>