<template>
  <div id="app">
    <headers></headers>
    <router-view/>
    <footers></footers>
    <suspend v-if="$route.path !=='/reg'"></suspend>
  </div>
</template>

<script>
  import headers from './components/header';
  import footers from './components/footer';
  import suspend from './components/suspend';
export default {
  name: 'app',
  components:{
    headers,footers,suspend
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
  .index-bg .el-carousel__container{
    height: 500px!important;
  }
  .el-carousel__indicators{
    padding-bottom: 25px;
  }
</style>
