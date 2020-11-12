//导入Vue(便于后面Vue.ues)
import Vue from 'vue'
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

//暴露出去default
export default router