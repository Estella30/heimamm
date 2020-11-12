import Vue from 'vue'
import App from './App.vue'
//1.导包，导入路由
import VueRouter from 'vue-router'
//2.'use'一下(用包)
Vue.use(VueRouter)
//3.注册路由信息
const routes = []
//4.实例化路由对象
const router = new VueRouter({
  //es6简化写法
  routes
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //5.挂载到Vue实例上
  router
}).$mount('#app')
