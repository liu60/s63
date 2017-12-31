<template>
  <div>
    <div class="title">
      选择支付方式：
    </div>
    <div class="content">
      <el-radio-group v-model="type">
        <el-radio :label="0">QQ钱包</el-radio>
        <el-radio :label="1">微信钱包</el-radio>
        <el-radio :label="2">支付宝</el-radio>
        <el-radio :label="3">京东钱包</el-radio>
      </el-radio-group>
    </div>
    <div v-if="type === 2">
      <div class="title">
        存款-支付宝
      </div>
      <div class="money">
        <p>请正确填妥一下[转账表格]中的每一项,您提交后,我们将即时为您处理</p>
        <el-row :gutter="20">
          <el-col :span="6" class="left">金额:</el-col>
          <el-col :span="6">
            <el-input>
              <template slot="append">RMB</template>
            </el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6" class="left">存款方式:</el-col>
          <el-col :span="6">支付宝</el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" class="left">存到沙龙娱乐城支付宝账号:汤XX-XXXXXXXX3757</el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6" class="left">存款时间:</el-col>
          <el-col :span="6">
            <el-date-picker
              v-model="date"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6" class="left">支付宝账号:</el-col>
          <el-col :span="6">
            <el-input></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6" class="left">支付宝昵称:</el-col>
          <el-col :span="6">
            <el-input></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6" class="left">备注:</el-col>
          <el-col :span="6">
            <el-input type="textarea" v-model="other"></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="tips">
          <el-col :offset="4">
            *为了便于快速存款 建议会员存款金额不要存整数(存款63元, 99元)。
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6" :offset="6">
            <el-button type="primary">提交</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
    <div v-else>
      <div class="title">
        请填写存款金额：
      </div>
      <div class="money">
        <el-row :gutter="20">
          <el-col :span="6" class="left">存款方式:</el-col>
          <el-col :span="6">QQ钱包</el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6" class="left">金额:</el-col>
          <el-col :span="6">
            <el-input>
              <template slot="append">RMB</template>
            </el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6" :offset="6">
            <el-button type="primary">提交</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        type: '',
        date: '',
        other: ''
      }
    }
  }
</script>
<style scoped>
  @import "../../assets/css/third.css";
</style>
