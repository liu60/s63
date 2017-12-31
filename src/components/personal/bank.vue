<template>
  <div>
    <div class="title">
      请正确填妥一下[转账表格]中的每一项，您提交后，我们将即时为您处理。
    </div>
    <el-form ref="form" :model="form" label-width="30%">
      <el-form-item label="金额">
        <el-input v-model="form.a"></el-input>
      </el-form-item>
      <el-form-item label="存款方式">
        <el-input v-model="form.a"></el-input>
      </el-form-item>
      <el-form-item label="存到S63娱乐城银行账号">
        <el-input v-model="form.a"></el-input>
      </el-form-item>
      <el-form-item label="付款人银行名称">
        <el-select v-model="form.a">
          <el-option>工商银行</el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="存款时间">
        <el-date-picker
          v-model="form.b"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="付款人银行 省 市 支行">
        <el-input v-model="form.a"></el-input>
      </el-form-item>
      <el-form-item label="备注">
        <el-input type="textarea" v-model="form.a"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
    <div class="tips">
      *温馨提示：若您使用招行或民生存款，请在备注中填写您存款时使用的银行卡户名
    </div>
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
    }
  }
</script>
<style scoped>
  @import "../../assets/css/bank.css";
</style>
