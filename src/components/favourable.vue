<template>
  <div class="favourable-bg">
    <div class="favourable-main">
      <div class="favourable-main-top">
        <i></i>
        <p>优惠活动</p>
      </div>
      <div class="favourable-main-bottom">
        <ul class="favourable-main-left">
          <li :class="{current: index === 0}" @click="index = 0">全部优惠</li>
          <li :class="{current: index === 1}" @click="index = 1">特别优惠</li>
          <li :class="{current: index === 2}" @click="index = 2">真人娱乐</li>
          <li :class="{current: index === 3}" @click="index = 3">老虎机</li>
          <li :class="{current: index === 4}" @click="index = 4">体育</li>
        </ul>
        <ul class="favourable-main-right">
          <li v-if="index === 0 || index === 1">
            <img @click="show1 = !show1" src="../assets/images/favourable/favourable-1.jpg" width="100%">
            <img :class="{hide: !show1}" src="../assets/images/favourable/favourable-1.jpg" width="100%">
            <img :class="{hide: !show1}" src="../assets/images/favourable/favourable-1.jpg" width="100%">
            <div class="favourable-text">
              <span style="color: #0088ff;font-size: 20px">迎新喜送第一桶金</span>
              <span class="fr" style="font-size: 20px">更多信息</span>
            </div>
          </li>
          <li v-if="index === 0 || index === 2">
            <img src="../assets/images/favourable/favourable-2.jpg" width="100%">
            <div class="favourable-text">
              <span style="color: #0088ff;font-size: 20px">老虎机洗码龙虎榜</span>
              <span class="fr" style="font-size: 20px">更多信息</span>
            </div>
          </li>
          <li v-if="index === 0 || index === 3">
            <img src="../assets/images/favourable/favourable-3.jpg" width="100%">
            <div class="favourable-text">
              <span style="color: #0088ff;font-size: 20px">空战时代，百元护航</span>
              <span class="fr" style="font-size: 20px">更多信息</span>
            </div>
          </li>
          <li v-if="index === 0 || index === 4">
            <img src="../assets/images/favourable/favourable-4.jpg" width="100%">
            <div class="favourable-text">
              <span style="color: #0088ff;font-size: 20px">豪礼双响炮 100%存送再享周回馈</span>
              <span class="fr" style="font-size: 20px">更多信息</span>
            </div>
          </li>
          <li v-if="index === 0 || index === 4">
            <img src="../assets/images/favourable/favourable-5.jpg" width="100%">
            <div class="favourable-text">
              <span style="color: #0088ff;font-size: 20px">S63娱乐城老虎机救援金</span>
              <span class="fr" style="font-size: 20px">更多信息</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        name:'favourable',
        index: 0,
        show1: false
      }
    }
  }
</script>
<style scoped>
  .favourable-bg{
    background: url("../assets/images/favourable/favourable-bg.jpg") no-repeat center;
    width: 100%;
    min-height: 1659px;
    padding-top: 20px;
    box-sizing: border-box;
    background-size: cover;
  }
  .favourable-main{
    width: 1200px;
    margin: 0 auto;
    padding: 10px;
    box-sizing: border-box;
    background: #fff;
  }
  .favourable-main-top {
    border-bottom: 1px solid #b0b0b0;
    margin: 0 10px;
    padding:5px;
    box-sizing: border-box;
  }
  .favourable-main-top i{
    display: inline-block;
    width: 52px;
    height: 52px;
    background: url("../assets/images/fairy.png") -5px -300px;
  }
  .favourable-main-top p{
    display: inline-block;
    color: #0088ff;
    font-size: 32px;
    box-sizing: border-box;
    vertical-align: 15px;
    margin-left: 10px;
  }
  .favourable-main-bottom{
    min-height: 300px;
    box-sizing: border-box;
    padding-left: 20px;
  }
  .favourable-main-left{
    display: inline-block;
    box-sizing: border-box;
    vertical-align: top;
    margin: 15px 30px;
  }
  .favourable-main-left li{
    width: 150px;
    height: 40px;
    text-align: center;
    box-sizing: border-box;
    margin: 15px 0;
    padding: 9px;
    background: #eeeeee;
    border-radius: 50px;
  }
  .favourable-main-left li:hover,
  .favourable-main-left .current{
    background: #0088ff;
    color: #fff;
    cursor: pointer;
  }
  .hide{
    display: none;
  }
  .favourable-main-right{
    display: inline-block;
    box-sizing: border-box;
    margin-top: 15px;
    padding-left: 55px;
    border-left: 1px solid #c9c9c9;
  }
  .favourable-main-right li{
    width: 788px;
    box-sizing: border-box;
    margin: 20px 0;
    cursor: pointer;
  }
</style>
