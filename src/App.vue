<template>
  <div id="app">
    <router-view class="box"/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height:100%
}
.box{height:100%}
img{border:0;display:block}
  .el-menu-item-group__title{
    color:#ccc
  }
  .el-table th{
    text-align:center !important
  }
</style>
