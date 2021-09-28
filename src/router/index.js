import Vue from 'vue'
import Router from 'vue-router'

import Ele from '@/components/Ele'

//import Ele from '@/modules/Login/login'

Vue.use(Router)



 const router =new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'login',
      component: resolve=>require(["@/modules/Login/login"],resolve),//require(["@/modules/Home"],resolve),
      meta:{auth:true},
      
    },
    {
     
      path:'/home',
      name:'home',
      component:Ele,
      
      children:[
        {
          path:"",
          component:resolve=>require(["@/modules/Home/context"],resolve)
        },
        {
          path:'/addshoppro',
          component:resolve=>require(["@/modules/addShopPro"],resolve),
          children:[
            {
              path:"",
              component:resolve=>require(["@/modules/addShopPro/addShopPro"],resolve)
            }
          ]
        },
        {
          path:'/userlist',
          component:resolve=>require(["@/modules/UserList"],resolve),
          children:[
            {
              path:"",
              component:resolve=>require(["@/modules/UserList/Usertable"],resolve)
            }
          ]
        },
        {
          path:'/administratorlist',
          component:resolve=>require(["@/modules/AdminList"],resolve),
          children:[
            {
              path:"",
              component:resolve=>require(["@/modules/AdminList/Admintable"],resolve)
            }
          ]
        },
        {
          path:'/merchantlist',
          component:resolve=>require(["@/modules/Shops"],resolve),
          children:[
            {
              path:"",
              component:resolve=>require(["@/modules/Shops/Shoptable"],resolve)
            }
          ]
        },
        {
          path:'/orderlist',
          component:resolve=>require(["@/modules/Order"],resolve),
          children:[
            {
              path:"",
              component:resolve=>require(["@/modules/Order/OrderList"],resolve)
            }
          ]
        },
        {
          path:'/goodslist',
          component:resolve=>require(["@/modules/Goods"],resolve),
          children:[
            {
              path:"",
              component:resolve=>require(["@/modules/Goods/GoodsList"],resolve)
            }
          ]
        }
      ]
    },
    
  ]
  
})
// router.beforeEach(({meta, path}, from, next) => {
//   var { auth = true } = meta
//   var isLogin = Boolean(store.state.user.id) //true用户已登录， false用户未登录

//   if (auth && !isLogin && path !== '/') {
//       return next({ path: '/' })
//   }
//   next()
// })

export default router;
