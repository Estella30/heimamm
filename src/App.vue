<template>
  <div class="app-container">
    app
    <input type="button" value="你点我啦">
    <router-link to="">测试</router-link>
    <router-link to="">深圳特色当当当</router-link>
    <el-button disabled>默认按钮</el-button>
  <el-button type="primary" disabled>主要按钮</el-button>
  <el-button type="success" disabled>成功按钮</el-button>
  <el-button type="info" disabled>信息按钮</el-button>
  <el-button type="warning" disabled>警告按钮</el-button>
  <el-button type="danger" disabled>危险按钮</el-button>
  </div>
</template>

<script>
export default {
  name:'app'
}
</script>

<style lang="less">
.app-container{
  input{
    background-color: hotpink;
  }
}
</style>