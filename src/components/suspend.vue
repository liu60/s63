<template>
  <div>
    <div class="suspend">
      <a class="server"></a>
      <a class="weixin"></a>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {}
    }
  }
</script>
<style>
  .suspend{
    width: 159px;
    height: 532px;
    background: url("./../assets/images/suspend.png");
    position: fixed;
    top: 413px;
    right:25px;
    z-index: 3;
  }
  .server{
    width: 129px;
    height: 41px;
    box-sizing: border-box;
    position: absolute;
    top: 184px;
    left: 16px;
    cursor: pointer;
  }
  .weixin{
    width: 90px;
    height: 90px;
    position: absolute;
    top: 418px;
    left: 34px;
    cursor: pointer;
  }
</style>
