<template>
  <div>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in imgUrl" :key="item">
        <img style="width: 100%;" :src="item">
      </el-carousel-item>
    </el-carousel>
    <div class="gonggao">
      <div class="gonggao-main">
        <i class="gonggao-img"></i>
        <p class="fl">平台公告：请各会员留意：防止被骗，本公司官方网址只有 www.s63.com。</p>
      </div>
    </div>
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
            <div class="jg">
                <router-link tag="span" to="/elec">进入游戏</router-link>
              </div>
          </span>
        </div>
        <div class="main-live pr">
          <span class="shade">
            <span>
              <i class="poker"></i>
              <span style="color: #fff;font-size: 30px">真人娱乐</span>
            </span>
            <p style="color: #fff;font-size: 22px">LIVE ENTERTAINMENT</p>
            <div class="jg">
                <router-link tag="span" to="/live">进入游戏</router-link>
              </div>
          </span>
        </div>
        <div class="main-sport pr">
          <span class="shade">
            <span>
              <i class="general"></i>
              <span style="color: #fff;font-size: 30px">综合游戏</span>
            </span>
            <p style="color: #fff;font-size: 22px">SPORTS BETTING</p>
            <div class="jg">
                <router-link tag="span" to="/general">进入游戏</router-link>
              </div>
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
    <div class="bottom-game">
      <div class="bottom-game-main">
        <div class="bottom-game-main-left pr">
          <div class="text-sa">
            <p class="text1">SA电子</p>
            <div class="mask"></div>
            <div class="circle1" @mouseenter="changeAD(0)"></div>
          </div>
          <div class="text-pt">
            <p class="text2">PT电子</p>
            <div class="mask"></div>
            <div class="circle2" @mouseenter="changeAD(1)"></div>
          </div>
          <div class="text-mg">
            <p class="text3">MG电子</p>
            <div class="mask"></div>
            <div class="circle3" @mouseenter="changeAD(2)"></div>
          </div>
          <div class="text-ag">
            <p class="text4">AG电子</p>
            <div class="mask"></div>
            <div class="circle4" @mouseenter="changeAD(3)"></div>
          </div>
        </div>
        <div class="bottom-game-main-right pr">
          <div :class="{show: showIndex === 0, hide: showIndex !== 0}">
            <div class="ple"></div>
            <div class="fr fr-main">
              <div class="fr-main-top">
                <h1 class="fl">阿里纳斯推荐平台</h1>
                <p style="margin: 10px 0 0 20px" class="fl">SA  GAME CASINO</p>
              </div>
              <div class="fr-main-bottom">
                <p class="">SA平台是欧美最流行的电子游艺平台之一，提供超过百款游戏，</p>
                <p> 以丰富玩法、视觉及声光效果提供顶级娱乐享受, </p>
                <p>只为你提供极致的游戏体验...</p>
                <div class="fr-main-bottom-img">
                  <img src="./../assets/images/index/bottom-game-banner1.jpg">
                  <img src="./../assets/images/index/bottom-game-banner2.jpg">
                  <img src="./../assets/images/index/bottom-game-banner3.jpg">
                </div>
                <div class="more-game"><router-link to="elecMore">更多游戏</router-link></div>
              </div>
            </div>
          </div>
          <div :class="{show: showIndex === 1, hide: showIndex !== 1}">
            <div class="ple1"></div>
            <div class="fr fr-main">
              <div class="fr-main-top">
                <h1 class="fl">阿里纳斯推荐平台</h1>
                <p style="margin: 10px 0 0 20px" class="fl">PT  GAME CASINO</p>
              </div>
              <div class="fr-main-bottom">
                <p class="">PT平台是欧美最流行的电子游艺平台之一，提供超过百款游戏，</p>
                <p> 以丰富玩法、视觉及声光效果提供顶级娱乐享受, </p>
                <p>只为你提供极致的游戏体验...</p>
                <div class="fr-main-bottom-img">
                  <img src="./../assets/images/index/bottom-game-banner1.jpg">
                  <img src="./../assets/images/index/bottom-game-banner2.jpg">
                  <img src="./../assets/images/index/bottom-game-banner3.jpg">
                </div>
                <div class="more-game"><router-link to="elecMore">更多游戏</router-link></div>
              </div>
            </div>
          </div>
          <div :class="{show: showIndex === 2, hide: showIndex !== 2}">
            <div class="ple2"></div>
            <div class="fr fr-main">
              <div class="fr-main-top">
                <h1 class="fl">阿里纳斯推荐平台</h1>
                <p style="margin: 10px 0 0 20px" class="fl">MG  GAME CASINO</p>
              </div>
              <div class="fr-main-bottom">
                <p class="">MG平台是欧美最流行的电子游艺平台之一，提供超过百款游戏，</p>
                <p> 以丰富玩法、视觉及声光效果提供顶级娱乐享受, </p>
                <p>只为你提供极致的游戏体验...</p>
                <div class="fr-main-bottom-img">
                  <img src="./../assets/images/index/bottom-game-banner1.jpg">
                  <img src="./../assets/images/index/bottom-game-banner2.jpg">
                  <img src="./../assets/images/index/bottom-game-banner3.jpg">
                </div>
                <div class="more-game"><router-link to="elecMore">更多游戏</router-link></div>
              </div>
            </div>
          </div>
          <div :class="{show: showIndex === 3, hide: showIndex !== 3}">
            <div class="ple3"></div>
            <div class="fr fr-main">
              <div class="fr-main-top">
                <h1 class="fl">阿里纳斯推荐平台</h1>
                <p style="margin: 10px 0 0 20px" class="fl">AG  GAME CASINO</p>
              </div>
              <div class="fr-main-bottom">
                <p class="">AG平台是欧美最流行的电子游艺平台之一，提供超过百款游戏，</p>
                <p> 以丰富玩法、视觉及声光效果提供顶级娱乐享受, </p>
                <p>只为你提供极致的游戏体验...</p>
                <div class="fr-main-bottom-img">
                  <img src="./../assets/images/index/bottom-game-banner1.jpg">
                  <img src="./../assets/images/index/bottom-game-banner2.jpg">
                  <img src="./../assets/images/index/bottom-game-banner3.jpg">
                </div>
                <div class="more-game"><router-link to="elecMore">更多游戏</router-link></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
        banerUrl:[bb1,bb2,bb3],
        showIndex: 0
      }
    },
    methods: {
      changeAD: function(i){
        this.showIndex = i
      }
    }
  }
</script>

<style scoped>
  @import "./../assets/css/index.css";
</style>
