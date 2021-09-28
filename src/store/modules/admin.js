import {admin} from '@/services'

export default{
    state:{
        adminData:{}
    },
    getters:{
        adminData:state=>state.adminData.adminData,
        adminCount:state=>state.adminData.count
    },
    mutations:{
        ADMIN_DATA(state,{adminData}){
             for(var i=0;i<adminData.adminData.length;i++){
                switch (adminData.adminData[i].state) {
                    case 1:
                     adminData.adminData[i].state="超级管理员"
                    
                        break;
                    case 0:
                    adminData.adminData[i].state="管理员"
                        break;
                    default:
                        break;
                }
            }
            state.adminData = adminData
      }
    },
    //获取数据
    actions:{
        login(context,{params, callback}){
            console.log(params)
            admin.login(params).then(res=>{
                console.log(context)
                var data = res.data.adminData
                if(data.admins == params.admins && data.password == params.password){
                   window.location.href="http://localhost:8080/home"
                }
                 callback()
                const {dispatch,state} = context
                dispatch("login",{admins:data.admins,password:data.password})
                localStorage.setItem("adData",JSON.stringify(data))
              
            })
        },
        getAdminList({commit},params={}){
            const {pageNum,pageSize} = params
            admin.getAdminList( {pageNum,pageSize}).then(res=>{
                console.log(res.data)
                commit("ADMIN_DATA",{adminData:res.data})
            })
        },
    }
}