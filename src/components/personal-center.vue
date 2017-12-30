<template>
  <div class="main">
    <div class="header"><span>G</span>个人中心</div>
    <div class="sidebar">
      <ul>
        <router-link tag="li" :class="{current: $route.path.indexOf('save-money') >= 0}" to="save-money">存款专区</router-link>
        <router-link tag="li" :class="{current: $route.path.indexOf('load-money') >= 0}" to="load-money">取款专区</router-link>
        <router-link tag="li" :class="{current: $route.path.indexOf('transfer') >= 0}" to="transfer">户内转账</router-link>
        <router-link tag="li" :class="{current: $route.path.indexOf('save-money') >= 0}" to="">交易记录</router-link>
        <router-link tag="li" :class="{current: $route.path.indexOf('save-money') >= 0}" to="">个人设定</router-link>
      </ul>
    </div>
    <div class="box">
      <router-view/>
    </div>
  </div>
</template>
<script>
  export default{
    data () {
      return {}
    }
  }
</script>
<style scoped>
  @import "./../assets/css/personal-center.css";
</style>
