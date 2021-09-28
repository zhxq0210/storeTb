// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUi from 'element-ui'
import VueECharts from 'vue-echarts/components/ECharts.vue'
require("echarts/lib/chart/line");
Vue.use(elementUi)
Vue.component('chart', VueECharts)
import fetchJsonp from 'fetch-jsonp'
import axios from 'axios'
import store from './store'
Vue.config.productionTip = false


Vue.prototype.fetchJsonp = fetchJsonp
Vue.prototype.axios = axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
