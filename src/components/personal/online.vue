<template>
  <div>
    <div class="title">
      选择您将使用的银行：
    </div>
    <div class="content">
      <div class="icon">某某银行</div>
      <div class="icon">某某银行</div>
      <div class="icon">某某银行</div>
      <div class="icon">某某银行</div>
      <div class="icon">某某银行</div>
      <div class="icon">某某银行</div>
      <div class="icon">某某银行</div>
      <div class="icon">某某银行</div>
      <div class="icon">某某银行</div>
      <div class="icon">某某银行</div>
      <div class="icon">某某银行</div>
    </div>
    <div class="title">
      请填写存款金额：
    </div>
    <div class="money">
      <el-row :gutter="20">
        <el-col :span="6" class="left">存款账户:</el-col>
        <el-col :span="6">anne</el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6" class="left">存款金额:</el-col>
        <el-col :span="6">
          <el-input></el-input>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6" :offset="6">
          <el-button type="primary">提交</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="tips">
      *单笔最低存款100元，最高2万元。（如存款高于2万元，请分多笔支付）
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
  @import "../../assets/css/online.css";
</style>
