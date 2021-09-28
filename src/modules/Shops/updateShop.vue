<template>
  <el-dialog title="修改店铺信息" :visible.sync="editShopInfoView">
        <el-form :model="editForm">
        <el-form-item label="店铺名称" :label-width="formLabelWidth">
            <el-input v-model="editForm.shop_name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="店铺地址" :label-width="formLabelWidth">
            <el-input v-model="editForm.shop_add" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="店铺介绍" :label-width="formLabelWidth">
            <el-input v-model="editForm.shop_detail" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="店铺电话" :label-width="formLabelWidth">
            <el-input v-model="editForm.shop_tel" auto-complete="off"></el-input>
        </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="editShopInfoView = false">取 消</el-button>
            <el-button type="primary" :plain="true" @click="editShopInfo(editForm)">确认修改</el-button>
        </div>
    </el-dialog>
</template>
<script>
    import {mapActions,mapGetters} from "vuex"
    export default {
    name: "addshop",
    data() {
        return {
            formLabelWidth: '120px',
            editShopInfoView: false,
            editForm: {
              shop_id:'',
              shop_name: '',
              shop_add: '',
              shop_detail: '',
              shop_tel: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            }
        };
    },
    methods:{
        ...mapActions(['editShopsData']),
        editShopData(row){
            this.editForm = row
            this.editShopInfoView=true
        },
        editShopInfo(){
            //提交商品， 隐藏弹窗
            this.editShopInfoView = false
            //需要提交给后端的所有商品数据
            this.editShopsData({...this.editForm,callback:()=>{
                this.$message({
                message: '修改商铺成功',
                type: 'success'
                });
            }}) //
        }
    }
}     
</script>