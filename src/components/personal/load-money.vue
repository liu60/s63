<template>
  <div>
    <div class="tips">
      <div class="title">
        取款注意事项:
      </div>
      <ul>
        <li>-银行账户持有人姓名必须与注册时的姓名一致，否则无法申请取款。</li>
        <li>-每次最低100元人民币，每天最高上限为20万元人民币。</li>
        <li>-只需达到存款额的1倍有效投注额即可申请取款。</li>
        <li>-所有取款均不收取任何手续费。</li>
        <li>-本公司并不提供付款予第三者服务。</li>
      </ul>
      <div class="title">
        24小时提款，无限次:
      </div>
      <ul>
        <li>-为方便会员在本网站进行投注，活动期间每日取款不限次数，活动规则如下：</li>
        <li>-会员取款全天候24小时均可申请，并在10分钟内到账。</li>
        <li>-24小时不限次数，想提就提！</li>
      </ul>
    </div>
    <el-form ref="form" :model="form" label-width="30%">
      <el-form-item label="主账户余额">
        <el-input v-model="form.a"></el-input>
      </el-form-item>
      <el-form-item label="取款金额">
        <el-input v-model="form.a"></el-input>
      </el-form-item>
      <el-form-item label="银行账户号码">
        <el-input v-model="form.a"></el-input>
      </el-form-item>
      <el-form-item label="确认银行账户号码">
        <el-input v-model="form.a"></el-input>
      </el-form-item>
      <el-form-item label="银行账户名">
        <el-input v-model="form.a"></el-input>
      </el-form-item>
      <el-form-item label="银行名称">
        <el-select v-model="form.a">
          <el-option value="">工商银行</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="省份">
        <el-input v-model="form.a"></el-input>
      </el-form-item>
      <el-form-item label="城市">
        <el-input v-model="form.a"></el-input>
      </el-form-item>
      <el-form-item label="取款密码">
        <el-input v-model="form.a"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.a"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
    <div class="red">温馨提示：S63娱乐城为会员提供短信通知服务，取款受理成功后会以短信方式通知您，在取款申请备注栏填写“短信提醒服务”即可享受！</div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        form: {
          a: '',
          b: '',
          c: '',
          d: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit(){
      }
    }
  }
</script>
<style scoped>
  @import "../../assets/css/load-money.css";
  .el-input{
    width: 60%;
  }
  .el-textarea{
    width: 60%;
  }
</style>
