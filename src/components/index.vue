<template>
  <div style="margin-top: 1px">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in imgUrl" :key="item">
        <img style="width: 100%;height: 500px" :src="item">
      </el-carousel-item>
    </el-carousel>
    <div class="index-main">
      <div class="main-money">
        <div class="fr money">
          <div class="money-1 moneys">
            <div>8</div>
            <div>8</div>
          </div>
          <div class="symbol"></div>
          <div class="money-2 moneys">
            <div>8</div>
            <div>8</div>
            <div>8</div>
          </div>
          <div class="symbol"></div>
          <div class="money-3 moneys">
            <div>8</div>
            <div>8</div>
            <div>8</div>
          </div>
          <div class="symbol"></div>
          <div class="money-4 moneys">
            <div>8</div>
            <div>8</div>
            <div>8</div>
          </div>
        </div>
      </div>
      <div class="main-banner">
        <div class="main-elec pr">
          <span class="shade">
            <span>
              <i class="tiger"></i>
              <span style="color: #fff;font-size: 30px">电子游艺</span>
            </span>
            <p style="color: #fff;font-size: 22px">ELECTRONIC RECREATION</p>
          </span>
        </div>
        <div class="main-live pr">
          <span class="shade">
            <span>
              <i class="poker"></i>
              <span style="color: #fff;font-size: 30px">真人娱乐</span>
            </span>
            <p style="color: #fff;font-size: 22px">LIVE ENTERTAINMENT</p>
          </span>
        </div>
        <div class="main-sport pr">
          <span class="shade">
            <span>
              <i class="general"></i>
              <span style="color: #fff;font-size: 30px">综合游戏</span>
            </span>
            <p style="color: #fff;font-size: 22px">SPORTS BETTING</p>
          </span>
        </div>
      </div>
      <div class="TS"></div>
      <div>
        <el-carousel :interval="4000" type="card" height="291px">
          <el-carousel-item v-for="item in banerUrl" :key="item">
            <img style="width: 100%;height: 291px" :src="item">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
  import banner1 from '../assets/images/index/banner1.jpg'
  import banner2 from '../assets/images/index/banner2.jpg'
  import banner3 from '../assets/images/index/banner3.jpg'
  import bb1 from '../assets/images/index/bb1.jpg'
  import bb2 from '../assets/images/index/bb2.jpg'
  import bb3 from '../assets/images/index/bb3.jpg'
  export default {
    data (){
    	return {
        name:'index',
        imgUrl:[banner1,banner2,banner3],
        banerUrl:[bb1,bb2,bb3]
      }
    }
  }
</script>

<style>
  @import "./../assets/css/index.css";
  .el-carousel__container{
    height: 500px;
  }
  .el-carousel__indicators{
    padding-bottom: 25px;
  }
</style>
