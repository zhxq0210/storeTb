import axios from "axios"
import fetchJsonp from "fetch-jsonp"
export default {
    state:{
        userList:[],
        // shopList:[],
        count:0
    },
    getters:{
        userList:state=>state.userList,
        count:state=>state.count
        //shopList:state=>state.shopList,
        
    },
    mutations:{
        USER_LIST(state,{userList}){
            state.userList = userList
        },
        USER_COUNT(state,{count}){
            state.count = count
        }
        // SHOP_LIST(state,{shopList}){
        //     state.shopList = shopList
        // },
        // SHOP_COUNT(state,{count}){
        //     state.count = count
        // }
    },
    actions:{
        getUserList(context,pageNum){
            axios.get(`http://cangdu.org:8001/v1/users/list?offset=${pageNum}&limit=20`).then(res=>{
                console.log(res.data)
                context.commit("USER_LIST",{userList:res.data})
            })
        },
        getUserCount(context){
            axios.get("http://cangdu.org:8001/v1/users/count").then(res=>{
                console.log(res.data)
                context.commit("USER_COUNT",{count:res.data})
            })
        }
    }
}