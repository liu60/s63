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
            <div class="yzm" id="code" @click="createCode()">{{code}}</div>
          </li>
          <li>
            <button class="login-btn">登录</button>
            <button class="reg-btn">
              <router-link tag="small" to="/reg">立即开户</router-link>
            </button>
            <a style="color: #fff" href="#">联系客服</a>
          </li>
        </ul>
        <ul v-if="visible" class="head-login fr">
          <li>
            会员:
            <span>anne</span>
            <b>|</b>
          </li>
          <li>
            货币:
            <span>RMB</span>
            <b>|</b>
          </li>
          <li>
            主账户余额:
            <span>100.00</span>
            <b>|</b>
          </li>
          <li>
            积分:
            <span>3</span>
            <b>|</b>
          </li>
          <li>
            <router-link style="color: #fff" to="/personal-center/save-money">个人账户</router-link>
            <button class="logout-btn">退出</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="head-nav-bottom">
      <img src="./../assets/images/S63_logo.png" class="s63-logo">
      <ul class="nav-bottom-right fr">
        <li><router-link to="/index">首页</router-link></li>
        <li><router-link to="/live">真人娱乐</router-link></li>
        <li><router-link to="/elec">老虎机</router-link></li>
        <li><router-link to="/byg">捕鱼馆</router-link></li>
        <li><router-link to="/general">综合游戏</router-link></li>
        <li><router-link to="/favourable">优惠活动</router-link></li>
        <li><router-link to="/dlzx">代理加盟</router-link></li>
        <li><router-link to="">代言动态</router-link></li>
        <li><router-link to="">SA-API</router-link></li>
      </ul>
    </div>
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
        function template(time) {
            return time < 10 ? '0' + time : time
        }
        return date.getFullYear() + '-' + template(date.getMonth() + 1) + '-' + template(date.getDate())
          + "   " + template(date.getHours()) + ':' + template(date.getMinutes()) + ':' + template(date.getSeconds())
      },
      createCode(){
        this.code = '';
        var codeLength = 4;
        var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R','S','T','U','V','W','X','Y','Z');
        for (var i = 0;i < codeLength;i++){
          var charNum = Math.floor(Math.random()*52);
          this.code += codeChars[charNum];
        }
      }
    },
  }
</script>

<style>
  @import "./../assets/css/header.css";
</style>
