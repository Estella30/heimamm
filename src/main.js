import Vue from 'vue'
import App from './App.vue'
//导入抽取的路由,如果导入的是index,直接可以省略
// import router from './router/index'
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //5.挂载到Vue实例上
  router
}).$mount('#app')
