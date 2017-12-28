<template>
  <div class="s63-head">
    <div class="head-nav-top">
      <div class="nav-top-bg">
        <div class="fl">本地时间:  {{dateFilter(time)}}</div>
        <ul v-if="visibled" class="head-login fr">
          <li>
            用户名:
            <input type="text" class="login-input">
          </li>
          <li>
            密码:
            <input type="password" class="login-input">
          </li>
          <li>
            验证码:
            <input type="text" class="login-input" maxlength="4">
            <div :value="code" class="yzm" id="code" @click="createCode()"></div>
          </li>
          <li>
            <button class="login-btn">登录</button>
            <a style="color: #fff" href="#">联系客服</a>
          </li>
        </ul>
        <ul v-if="visible" class="head-login fr">
          <li>首页</li>
          <li>老虎机</li>
          <li>真人娱乐</li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
    <div class="head-nav-bottom"></div>
  </div>
</template>

<script>
  export default {
    data (){
      return {
        time:'',
        visible:false,
        visibled:true,
        code:''
      }
    },
    mounted(){
      this.createCode();
      this.dateFilter(this.time);
      this.time = (new Date)*1;
      window.setInterval(()=>this.time += 1000,1000);
    },
    methods:{
      dateFilter(time){
        var date = new Date(time);
        return date.getFullYear() + '-' + ((date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + "   " + (date.getHours()) + ':' + (date.getMinutes())
      },
      createCode(){
        var codeLength = 4;
        var checkCode = document.getElementById('code');
        var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R','S','T','U','V','W','X','Y','Z');
        for (var i = 0;i < codeLength;i++){
          var charNum = Math.floor(Math.random()*52);
          this.code += codeChars[charNum];
        }
        if(checkCode){
          checkCode.className = 'yzm';
          checkCode.innerHTML = code;
        }
      }
    },
  }
</script>

<style>
  @import "./../assets/css/header.css";
</style>
