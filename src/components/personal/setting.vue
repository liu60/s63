<template>
  <div>
    <div class="box">
      <div class="title">个人设定 <span>个人资料</span></div>
      <div class="content first">
        <el-row :gutter="20">
          <el-col :span="6">
            用户名:
          </el-col>
          <el-col :span="6">
            anna
          </el-col>
          <el-col :span="6">
            币种:
          </el-col>
          <el-col :span="6">
            anne
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            姓名:
          </el-col>
          <el-col :span="6">
            anna
          </el-col>
          <el-col :span="6">
            性别:
          </el-col>
          <el-col :span="6">
            女
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            电子邮箱:
          </el-col>
          <el-col :span="6">
            c@c.com
          </el-col>
          <el-col :span="6">
            出生日期:
          </el-col>
          <el-col :span="6">
            1995-1-1
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            联系电话:
          </el-col>
          <el-col :span="6">
            1570000000
          </el-col>
          <el-col :span="6">
            会员等级:
          </el-col>
          <el-col :span="6">
            普通会员
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            QQ/MSN:
          </el-col>
          <el-col :span="6">
            15700000000
          </el-col>
          <el-col :span="6">
            最近登录时间:
          </el-col>
          <el-col :span="6">
            2017年12月31日13:07:37
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :offset="6" :span="6">
            <el-button type="primary">确定</el-button>
          </el-col>
          <el-col :span="6">
            <el-button type="info">重置</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="box">
      <div class="title">登录密码</div>
      <div class="content">
        <el-row :gutter="20">
          <el-col :span="6">
            旧密码:
          </el-col>
          <el-col :span="6">
            <el-input type="password"></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            新密码:
          </el-col>
          <el-col :span="6">
            <el-input type="password"></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            确认密码:
          </el-col>
          <el-col :span="6">
            <el-input type="password"></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :offset="6" :span="6">
            <el-button type="primary">确定</el-button>
          </el-col>
          <el-col :span="6">
            <el-button type="info">重置</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="box">
      <div class="title">取款密码</div>
      <div class="content">
        <el-row :gutter="20">
          <el-col :span="6">
            旧密码:
          </el-col>
          <el-col :span="6">
            <el-input type="password"></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            新密码:
          </el-col>
          <el-col :span="6">
            <el-input type="password"></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            确认密码:
          </el-col>
          <el-col :span="6">
            <el-input type="password"></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :offset="6" :span="6">
            <el-button type="primary">确定</el-button>
          </el-col>
          <el-col :span="6">
            <el-button type="info">重置</el-button>
          </el-col>
        </el-row>
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
  @import "../../assets/css/setting.css";
</style>
