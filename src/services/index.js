
import fetchData from './fetch-data'


var product = {
  getProductData(params){
   return fetchData.get("/product/getProductData",params)
 },
 getdeClassData(params){
   return fetchData.get('/product/getdeClassData',params)
 }
}

var order = {
  getOrderData(params){
   return fetchData.get("/order/getOrderData",params)
 }
}

var deletPro = {
  removeProduct(params){
    return fetchData.get("/product/removeProduct",params)
  }
}
var updatedPro = {
  updatedProduct(params){
    return fetchData.post("/product/updateProduct",params)
  }
}

var addPro = {
  addProduct(params){
    return fetchData.get("/product/addProduct",params)
  }
}
var admin = {
  login(params){
  return fetchData.post("/admin/login",params)
  },
  getAdminList(params){
    return fetchData.get("/admin/getAdminList",params)
  }
}

var user = {
  getUserList(params){
    return fetchData.get("/user/getUserList",params)
  },
  removeUser(params){
    return fetchData.get("/user/removeUser",params)
  },
  updatedUser(params){
    return fetchData.post("/user/updatedUser",params)
  }
}

var shop = {
  getShopList(params){
    return fetchData.get("/shop/getShopList",params)
  },
  removeShop(params){
    return fetchData.get("/shop/removeShop",params)
  },
  addShopData(params){
    return fetchData.get("/shop/addShopData",params)
  },
  editShopData(params){
    return fetchData.get("/shop/editShopData",params)
  }
}
//提供各种各样数据交换的接口
export {product,order,deletPro,updatedPro,addPro,user,shop,admin}


























// import fetchData from "./fetch-data"


// const product = {
//   getListData:(params)=>fetchData.get("/product/getListData",params)
// }


// export {product}