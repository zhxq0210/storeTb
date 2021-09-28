import {product,deletPro,updatedPro,addPro} from '@/services'

export default{
    state:{
        productData:{},
        deClassData:{}
    },
    getters:{
        productData:state=>state.productData.productData,
        productCount:state=>state.productData.count,
        deClassData:state=>state.deClassData.deClassData
    },
    mutations:{
        PRODUCT_DATA(state,{productData,pageNum}){
            state.productData = productData
        },
         CLASS_DATA(state,{deClassData,pageNum}){
            state.deClassData = deClassData
            console.log(deClassData)
        }
       
    },
    //获取数据
    actions:{
        getProductData({commit},params={}){
            const {pageNum,pageSize} = params
            product.getProductData( {pageNum,pageSize}).then(res=>{
                // console.log(res.data)
                commit("PRODUCT_DATA",{productData:res.data})
            })
        },
        getdeClassData({commit},params={}){
            const {pageNum,pageSize} = params
            product.getdeClassData( {pageNum,pageSize}).then(res=>{
                console.log(res.data)
                commit("CLASS_DATA",{deClassData:res.data})
            })
        },
        removeProduct({commit},params={}){
            const {pid} = params
            deletPro.removeProduct({pid}).then(res=>{
            })
        },
        updatedProduct(context,{callback,...params}){
            updatedPro.updatedProduct(params).then(res=>{
                callback()
                const {dispatch,state} = context
               dispatch("getProductData",{pageSize:5,pageNum:1})
            })
        },
        addPro(context,{callback,...params}){
            addPro.addProduct(params).then(res=>{
                console.log(res.data)
                callback()
                const {dispatch,state} = context
                dispatch("getProductData",{pageSize:5,pageNum:1})
            })
        }
    }
}