<template>
  <div id="app">
    <headers></headers>
    <router-view/>
    <footers></footers>
  </div>
</template>

<script>
  import headers from './components/header';
  import footers from './components/footer';
export default {
  name: 'app',
  components:{
    headers,footers
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }
  ul,li{
    text-decoration: none;
  }
  .pr{
    position: relative;
  }
  .el-carousel__container{
    height: 500px;
  }
  .el-carousel__indicators{
    padding-bottom: 25px;
  }
</style>
