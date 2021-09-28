import Vuex from "vuex"
import Vue from  "vue"


import gain from "./modules/gain"
import order from "./modules/order"
import product from "./modules/product"
import user from "./modules/user"
import shop from "./modules/shop"
import admin from "./modules/admin"

Vue.use(Vuex)
const store = new Vuex.Store({
   modules:{
       order,
       product,
       user,
       shop,
       admin
   }
})

export default store