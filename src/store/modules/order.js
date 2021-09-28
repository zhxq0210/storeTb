import {order,ordershop} from '@/services'

export default{
    state:{
        orderData:{}
    },
    getters:{
        orderData:state=>state.orderData.orderData,
        orderCount:state=>state.orderData.count
    },
    mutations:{
        ORDER_DATA(state,{orderData}){
           
            for(var i=0;i<orderData.orderData.length;i++){
                switch (orderData.orderData[i].state) {
                    case 1:
                     orderData.orderData[i].state="未支付"
                    
                        break;
                    case 2:
                    orderData.orderData[i].state="已支付"
                        break;
                    default:
                        break;
                }
            }
            state.orderData = orderData
            console.log(orderData)

        }
    },
    //获取数据
    actions:{
        getOrderData({commit},params={}){
            const {pageNum,pageSize} = params
            order.getOrderData( {pageNum,pageSize}).then(res=>{
                // console.log(res.data)
                commit("ORDER_DATA",{orderData:res.data})
           
            })
        }
    }
}