<template>
  <div>
    <el-dialog title="修改商品" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="商品名称" :label-width="formLabelWidth">
          <el-input v-model="form.p_name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="商品销量" :label-width="formLabelWidth">
          <el-input v-model="form.seller_number" auto-complete="off"></el-input>
        </el-form-item>
         <el-form-item label="商品库存" :label-width="formLabelWidth">
          <el-input v-model="form.total_number" auto-complete="off"></el-input>
        </el-form-item>
         <el-form-item label="单价" :label-width="formLabelWidth">
          <el-input v-model="form.price" auto-complete="off"></el-input>
        </el-form-item>
  
       <el-form-item label="分类" :label-width="formLabelWidth">
          <el-select v-model="form.declass_id" placeholder="请商品分类">
            <el-option label="电脑" value="1"></el-option>
            <el-option label="手机" value="2"></el-option>
            <el-option label="音响" value="3"></el-option>
            <el-option label="相机" value="4"></el-option>
            <el-option label="电视" value="5"></el-option>
             <el-option label="女装" value="6"></el-option>
            <el-option label="男装" value="7"></el-option>
            <el-option label="女鞋" value="8"></el-option>
            <el-option label="男鞋" value="9"></el-option>
            <el-option label="童装" value="10"></el-option>
             <el-option label="粉底液" value="11"></el-option>
            <el-option label="水乳" value="12"></el-option>
            <el-option label="口红" value="13"></el-option>
            <el-option label="眼影" value="14"></el-option>
            <el-option label="隔离" value="15"></el-option>
             <el-option label="桌椅" value="16"></el-option>
            <el-option label="碗筷" value="17"></el-option>
            <el-option label="冰箱" value="18"></el-option>
            <el-option label="旅行箱" value="19"></el-option>
            <el-option label="床单" value="20"></el-option>
          </el-select>
        </el-form-item>

        <!--图片上传 -->
        <el-upload
            class="upload-demo"
            action="http://localhost:3000/api/product/uploadImg"
            name="roompic"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="[{url:form.img_url}]"
            :on-success="uploadSuc"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
       
        <!--图片上传结束 -->

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
        p_name:"",
        price:"",
        total_number:"",
        declass_id:"",
        img_url:"",
        img_list:[]
      },
      
      formLabelWidth: '120px',
      dialogImageUrl: '',
      dialogVisible: false,
      dialogFormVisible:false
    }
  },
  computed:{
      ...mapGetters(['productData'])
  },
  methods: {
    ...mapActions(["getProductData",'updatedProduct']),
    //上传图片成功
    uploadSuc(response, file, fileList){
      console.log(response, file, fileList)
      //response 后端返回的数据
      var url = "http://localhost:3000/"+ response.imgSrc.substr(6) //拼接图片地址
      this.form.img_url =url
      // console.log(this.form.img_list)
      // this.form.img_list.push(url)
    },
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
      //提交商品， 隐藏弹窗
      this.dialogFormVisible = false
     //需要提交给后端的所有商品数据
      this.updatedProduct({...this.form,callback:()=>{
        this.$message({
          message: '修改商品成功',
          type: 'success'
        });
      }}) //
      
    }
  }
}
  
</script>
