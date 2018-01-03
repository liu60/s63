<template>
  <div>
    <div class="elec-more-banner"></div>
    <div class="gonggao">
      <div class="gonggao-main">
        <i class="gonggao-img"></i>
        <p class="fl">平台公告：请各会员留意：防止被骗，本公司官方网址只有 www.s63.com。</p>
      </div>
    </div>
    <div class="elec-more-main">
      <div class="elec-more-main-mid">
        <div class="elec-more-game pr">
          <div class="tryGame">
            <a>试玩游戏</a>
            <a>进入游戏</a>
          </div>
        </div>
        <div class="elec-more-game pr">
          <div class="tryGame">
            <a>试玩游戏</a>
            <a>进入游戏</a>
          </div>
        </div>
        <div class="elec-more-game pr">
          <div class="tryGame">
            <a>试玩游戏</a>
            <a>进入游戏</a>
          </div>
        </div>
        <div class="elec-more-game pr">
          <div class="tryGame">
            <a>试玩游戏</a>
            <a>进入游戏</a>
          </div>
        </div>
        <div class="elec-more-game pr">
          <div class="tryGame">
            <a>试玩游戏</a>
            <a>进入游戏</a>
          </div>
        </div>
        <div class="elec-more-game pr">
          <div class="tryGame">
            <a>试玩游戏</a>
            <a>进入游戏</a>
          </div>
        </div>
        <div class="elec-more-game pr">
          <div class="tryGame">
            <a>试玩游戏</a>
            <a>进入游戏</a>
          </div>
        </div>
        <div class="elec-more-game pr">
          <div class="tryGame">
            <a>试玩游戏</a>
            <a>进入游戏</a>
          </div>
        </div>
        <div class="elec-more-game pr">
          <div class="tryGame">
            <a>试玩游戏</a>
            <a>进入游戏</a>
          </div>
        </div>
        <div class="elec-more-game pr">
          <div class="tryGame">
            <a>试玩游戏</a>
            <a>进入游戏</a>
          </div>
        </div>
        <div class="elec-more-game pr">
          <div class="tryGame">
            <a>试玩游戏</a>
            <a>进入游戏</a>
          </div>
        </div>
        <div class="elec-more-game pr">
          <div class="tryGame">
            <a>试玩游戏</a>
            <a>进入游戏</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        name:'elecMore'
      }
    }
  }
</script>
<style scoped>
  .elec-more-banner{
    width: 100%;
    height: 350px;
    background: url("../assets/images/elec-more-banner.jpg") no-repeat center;
  }
  .gonggao {
    width: 100%;
    height: 35px;
    background: rgba(0,0,0,.5);
    position: absolute;
    top: 416px;
    z-index: 2;
  }
  .gonggao-main{
    width: 1200px;
    height: 35px;
    line-height: 35px;
    margin: 0 auto;
    color: #fff;
  }
  .gonggao-img{
    float: left;
    width: 31px;
    height: 32px;
    background: url("./../assets/images/fairy.png") -13px -199px;
  }
  .gonggao p{
    margin-left: 10px;
  }
  .elec-more-main{
    width: 100%;
    height: 1000px;
    background: url("./../assets/images/elec-more-bg.jpg") no-repeat;
    padding-top: 40px;
  }
  .elec-more-main-mid{
    width: 1200px;
    margin: 0 auto;
    overflow: auto;
    padding-top: 10px;
    padding-left: 3px;
    background: #636363;
    box-sizing: border-box;
  }
  .elec-more-game{
    display: inline-block;
    width: 287px;
    height: 296px;
    background: url("./../assets/images/elec-more.jpg");
    margin: 0 4px 5px;
    overflow: hidden;
  }
  .tryGame{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 100%;
    background: rgba(0,0,0,.7);
    transition: all .2s linear;
    padding: 50px;
    box-sizing: border-box;
  }
  .elec-more-game:hover .tryGame{
    top: 0;
  }
  .tryGame a{
    display: block;
    color: #850404;
    padding: 10px;
    background: #fac40f;
    text-align: center;
    margin-top: 30px;
    box-shadow: 4px 3px 3px -1px #977609;
    border-radius: 5px;
    cursor: pointer;
  }
</style>
