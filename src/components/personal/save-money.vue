<template>
  <div>
    <div class="platform">
      <div class="title">
        总资产：100.00 &nbsp; 货币：RMB
        <div class="fr"><i class="el-icon-refresh"></i>刷新</div>
      </div>
      <ul class="list">
        <li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li><li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li><li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li><li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li><li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li><li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li><li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li><li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li><li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li><li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li><li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li><li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li><li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li><li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li><li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li><li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li><li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li>
      </ul>
    </div>
    <div class="pay">
      <div class="title">
        请选择存款方式
      </div>
      <div class="type">
        线上支付(自动秒冲)
        <img src="" alt="">
        <img src="" alt="">
        <div class="submit" @click="$router.push('online')">立即支付</div>
      </div><div class="type">
        银行转账(无需网银)
        <img src="" alt="">
        <img src="" alt="">
      <div class="submit" @click="$router.push('bank')">立即支付</div>
      </div><div class="type">
        第三方支付
        <img src="" alt="">
        <img src="" alt="">
      <div class="submit" @click="$router.push('third')">立即支付</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {}
    }
  }
</script>
<style scoped>
  @import "../../assets/css/save-money.css";
</style>
