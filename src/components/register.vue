<template>
  <div class="reg-bg">
    <div class="reg-main">
      <div class="reg-top">
        <i></i>
        <span>会员注册</span>
      </div>
      <div class="reg">
        <h3>账户信息</h3>
        <div style="padding-left: 130px">
          <el-form ref="form" label-width="30%">
            <el-form-item label="币种:">
              <el-select>
                <el-option value="">人民币</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="用户名:">
              <el-input style="width: 30%"></el-input>
              <div class="read">核实</div>
            </el-form-item>
            <el-form-item label="登录密码:">
              <el-input type="password" style="width: 30%"></el-input>
            </el-form-item>
            <el-form-item label="确认确认密码:">
              <el-input type="password" style="width: 30%"></el-input>
            </el-form-item>
            <el-form-item label="电子邮箱:">
              <el-input style="width: 30%"></el-input>
              <div class="read">核实</div>
            </el-form-item>
            <el-form-item label="国家地区:">
              <el-select>
                <el-option value=""></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="联系电话:">
              <el-input style="width: 30%"></el-input>
            </el-form-item>
            <el-form-item label="推广代码:">
              <el-input style="width: 30%"></el-input>
            </el-form-item>
            <el-form-item label="验证码:">
              <el-input style="width: 18%"></el-input>
              <div style="display: inline-block;margin-left: 10px">1234</div>
            </el-form-item>
            <el-button style="margin-left: 370px" type="primary">提交</el-button>
            <div style="margin-top: 10px;margin-left: 160px;color: #ff0000">
              <input type="checkbox">
              本人已年满十八岁，在此网站所有活动并没有抵触所在国家所管辖的法律
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data (){
      return {
        name:'reg',
      }
    }
  }
</script>
<style>
  .reg-bg{
    width: 100%;
    height: 900px;
    background: url("./../assets/images/reg-bg.jpg") no-repeat;
    background-size: cover;
    padding-top: 20px;
    box-sizing: border-box;
  }
  .reg-main{
    width: 1200px;
    margin: 0 auto;
    padding: 25px;
    box-sizing: border-box;
    background: #fff;
  }
  .reg-top{
    color: #0088ff;
    border-bottom: 1px solid #b0b0b0;
  }
  .reg-top i{
    display: inline-block;
    width: 52px;
    height: 52px;
    background: url("./../assets/images/fairy.png") -59px -7px;
  }
  .reg-top span{
    font-size: 30px;
    vertical-align: 14px;
  }
  .reg{
    margin-top: 20px;
  }
  .reg h3{
    color: #0088ff;
    margin-left: 250px;
  }
  .read{
    display: inline-block;
    width: 55px;
    height: 40px;
    background: #20a7ed;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
  }
</style>
