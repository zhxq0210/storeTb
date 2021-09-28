import {user} from '@/services'

export default{
    state:{
        userData:{}
    },
    getters:{
        userData:state=>state.userData.listData,
        userCount:state=>state.userData.count
    },
    mutations:{
        USER_DATA(state,{userData}){
              state.userData = userData
        }
    },
    //获取数据
    actions:{
        getUserList({commit},params={}){
            const {pageNum,pageSize} = params
            user.getUserList( {pageNum,pageSize}).then(res=>{
                console.log(res.data)
                var msg = localStorage.getItem("adData")
                var json = (new Function('return ' + msg))();
                console.log(json)
                commit("USER_DATA",{userData:res.data})
            })
        },
        removeUser({commit},params={}){
            const {uid} = params
            user.removeUser({uid}).then(res=>{
            })
        },
        updatedUser(context,{callback,...params}){
            user.updatedUser(params).then(res=>{
                callback()
                const {dispatch,state} = context
               dispatch("getUserList",{pageSize:5,pageNum:1})
            })
        },
    }
}