<template>
 <el-dialog title="添加店铺" :visible.sync="addShopInfoView">
          <el-form :model="form">
            <el-form-item label="店铺名称" :label-width="formLabelWidth">
              <el-input v-model="form.shop_name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="店铺地址" :label-width="formLabelWidth">
              <el-input v-model="form.shop_add" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="店铺介绍" :label-width="formLabelWidth">
              <el-input v-model="form.shop_detail" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="店铺电话" :label-width="formLabelWidth">
              <el-input v-model="form.shop_tel" auto-complete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="addShopInfoView = false" >取 消</el-button>
            <el-button type="primary" :plain="true" @click="submitData">添加</el-button>
          </div>
        </el-dialog>
</template>

<script>
import {mapActions,mapGetters} from "vuex"
export default {
  name: "addshop",
  data() {
    return {
      form:{
        p_name:"",
        price:"",
        total_number:"",
        class_id:"",
        img_url:"",
        img_list:[]
      },
      
      formLabelWidth: '120px',
      dialogImageUrl: '',
      dialogVisible: false,
      dialogFormVisible:false,
      editShopInfoView: false,
      addShopInfoView: false,
      addProView:false,
    }
  },
  computed:{
      ...mapGetters(['productData'])
  },
  methods: {
    ...mapActions(["addShopData","getShopList"]),
    addShop(){
      this.addShopInfoView = true
    },
     submitData() {
          
      this.addShopInfoView = false
      //console.log(this.form)
      this.addShopData({...this.form,callback:()=>{
        this.form = {}
        this.$message({
          message: '恭喜你，添加成功',
          type: 'success'
        });
        
      }})
      this.getShopList({pageSize:5,pageNum:1})
    },
  }
}
  
</script>

