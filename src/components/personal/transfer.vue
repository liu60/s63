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
        </li>
        <li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li>
        <li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li>
        <li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li>
        <li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li>
        <li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li>
        <li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li>
        <li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li>
        <li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li>
        <li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li>
        <li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li>
        <li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li>
        <li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li>
        <li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li>
        <li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li>
        <li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li>
        <li>
          <div class="icon">SA</div>
          <!--如果使用图片. 就切换img 用一相同的类名-->
          <div class="up">SA平台</div>
          <div class="down">20.55</div>
        </li>
      </ul>
    </div>
    <div class="transfer">
      <div class="title">户内转账</div>
      <img src="" alt="">
      <el-form ref="form" :model="form" label-width="30%">
        <el-form-item label="转出">
          <el-select v-model="form.a">
            <el-option>请选择</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="转入">
          <el-select v-model="form.a">
            <el-option>请选择</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="转账金额">
          <el-input v-model="form.a"></el-input>
        </el-form-item>
        <el-form-item label="验证码">
          <el-input v-model="form.a"></el-input>
        </el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        form: {
          a: ''
        }
      }
    }
  }
</script>
<style scoped>
  @import "../../assets/css/transfer.css";
</style>
