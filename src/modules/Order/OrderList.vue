<template>
    <div>
        <el-table
            :data="orderData"
            style="width: 100%">
            <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand" >
                    <el-form-item label="用户名">
                        <span>{{ props.row.username}}</span>
                    </el-form-item>
                    <el-form-item label="收货地址">
                        <span>{{ props.row.detail}}</span>
                    </el-form-item>
                    <el-form-item label="店铺地址">
                        <span>{{ props.row.shop_add}}</span>
                    </el-form-item>
                    <el-form-item label="店铺名">
                        <span>{{ props.row.shop_name}}</span>
                    </el-form-item>
                    <el-form-item label="店铺ID">
                        <span>{{ props.row.shop_id}}</span>
                    </el-form-item>
                </el-form>
            </template>
            </el-table-column>
            <el-table-column
            label="订单号"
            prop="order_num">
            </el-table-column>
            <el-table-column
            label="总价格"
            prop="total_sum">
            </el-table-column>
            <el-table-column
            label="订单状态"
            prop="state">
            </el-table-column>
        </el-table>
        <div class="block">
            <span class="demonstration"></span>
            <el-pagination
                layout="prev, pager, next"
                :page-size="5"
                :total="orderCount"
                @current-change="changePage">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    import {mapActions,mapGetters} from 'vuex'
    export default {
        
        name:"orderPage",
        
        computed:{
            
           ...mapGetters(['orderData','orderCount']),
        },
        methods: {
            
            ...mapActions(['getOrderData']),
            changePage(currentPage){
                console.log(currentPage) //当前页码  =>通过当前页面获取数据
                this.getOrderData({pageNum:currentPage,pageSize:5})
            }
        },
        mounted(){
            this.getOrderData({pageNum:1,pageSize:5})
        }
    }
</script>
<style lang="">
</style >


/*{{ props.row.status_bar.title}}*/