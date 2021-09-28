import {shop} from '@/services'

export default{
    state:{
        shopData:{}
    },
    getters:{
        shopData:state=>state.shopData.shopData,
        shopCount:state=>state.shopData.shopCount
    },
    mutations:{
        SHOP_DATA(state,{shopData}){
         
            state.shopData = shopData
        }
    },
    //获取数据
    actions:{
        getShopList({commit},params={}){
            const {pageNum,pageSize} = params
            shop.getShopList( {pageNum,pageSize}).then(res=>{
                console.log(res.data)
                commit("SHOP_DATA",{shopData:res.data})
            })
        },
        removeShop({commit},params={}){
            const {shop_id} = params
            shop.removeShop({shop_id}).then(res=>{
            })
        },
        addShopData(context,{callback,...params}){
            shop.addShopData(params).then(res=>{
                callback()
                const {dispatch,state} = context
               dispatch("getShopList",{pageSize:5,pageNum:1})
            })
        },
        editShopsData(context,{callback,...params}){
            shop.editShopData(params).then(res=>{
                callback()
                const {dispatch,state} = context
                dispatch("getShopList",{pageSize:5,pageNum:1})
            })
        }
    }
}