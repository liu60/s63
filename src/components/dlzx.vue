<template>
  <div class="dlzx-bg">
    <div class="dlzx-main">
      <div class="text-1 text">
        <h3>佣金代理方案中</h3>
        <p>代理商充值金额可以换取等值平台额度，不需要承担任何客户游戏输赢情况，</p>
        <p>只要您的客户进行投注，你都可以获取客户有效投注额1%的洗码佣金。</p>
        <p>此运营模式可以获得稳定的无风险差额收益。</p>
        <p>佣金计算详情:</p>
        <p>公司每周一结算代理商下线产生的有效投注额，并返回1%洗码佣金至代理账户，</p>
        <p>代理商可以自行根据需要返回0.1%至1%的洗码佣金给予下线</p>
        <p style="margin-top: 10px">佣金代理合作举例:</p>
        <p>例如代理周一结算输赢数为<span>-100000</span>洗码量为<span>1000000</span>计算公式如下:</p>
        <p>代理下线会员输<span>-100000</span>全数交给公司</p>
        <p>洗码量1000000乘以1%佣金比率=10000洗码佣金</p>
        <p>这10000的洗码佣金代理可以自行分配给下线会员</p>
      </div>
      <div class="text-2 text">
        <h3>占成方案</h3>
        <p>占成代理可根据个人情况选择1至8占成代理与本公司</p>
        <p>共同担负您的客户游戏输赢以及洗码佣金</p>
        <p>此运营模式需要有一定的资金条件和承担部分经营风险</p>
        <p>长期合作有丰厚的利润回报，共同承担风险一起分享盈利</p>
        <p>占成代理计算详情</p>
        <p>占成代理商充值金额为占成合作计划中部分的保证金</p>
        <p>可换取更高额度的平台额度与公司共赴下线游戏输赢情况</p>
        <p>占成代理合作举例</p>
        <p>例如6成代理周一结算输赢-100000洗码量为1000000计算公式如下</p>
        <p>代理下线会员输-100000乘以60%代理占成=60000占成代理盈利金额</p>
        <p>洗码量 ( 1000000乘以1%洗码比率 ) 乘以40%公司占成=4000洗码佣金</p>
        <p>占成代理总盈利为 : <span>60000加4000=64000</span></p>
      </div>
      <div class="text-3 text">
        <table class="zcbl" border="1" cellpadding="10">
          <tr>
            <td>占成比例</td>
            <td>充值金额</td>
            <td>获得可用额度</td>
          </tr>
          <tr>
            <td>代理商占8成，公司②成</td>
            <td>2000</td>
            <td>10000</td>
          </tr>
          <tr>
            <td>代理商占7成，公司③成</td>
            <td>3000</td>
            <td>10000</td>
          </tr>
          <tr>
            <td>代理商占6成，公司④成</td>
            <td>4000</td>
            <td>10000</td>
          </tr>
          <tr>
            <td>代理商占5成，公司⑤成</td>
            <td>5000</td>
            <td>10000</td>
          </tr>
          <tr>
            <td>代理商占4成，公司⑥成</td>
            <td>6000</td>
            <td>10000</td>
          </tr>
          <tr>
            <td>代理商占3成，公司⑦成</td>
            <td>7000</td>
            <td>10000</td>
          </tr>
          <tr>
            <td>代理商占2成，公司⑧成</td>
            <td>8000</td>
            <td>10000</td>
          </tr>
          <tr>
            <td>代理商占1成，公司⑨成</td>
            <td>9000</td>
            <td>10000</td>
          </tr>
          <tr>
            <td>代理商占0成，公司⑩成</td>
            <td>10000</td>
            <td>10000</td>
          </tr>
        </table>
        <div style="margin-left: 249px;margin-top:15px;">
          <h3>实际且灵活的合作模式，高占成  高洗码</h3>
          <p>专业代理团队全天候在线辅助管理，让您更容易掌握您的业务，</p>
          <p>藉此您可以自由地操作一门网上娱乐场生意，以发展您辉煌博彩事业！</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        name:'dlzx',
      }
    }
  }
</script>
<style scoped>
  .dlzx-bg{
    width: 100%;
    height: 2137px;
    background: url("./../assets/images/dl-bg.jpg") no-repeat center;
    overflow: hidden;
  }
  .dlzx-main{
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    padding-top: 717px;
  }
  .dlzx-main .text{
    width: 100%;
    height: 365px;
    padding-top: 10px;
  }
  .text-2{
    text-align: right;
  }
  .text p{
    color: #fff;
    font-size: 18px;
  }
  .text h3{
    color: #ffbc00;
  }
  .text span{
    color: #ffc218;
  }
  .zcbl{
    color: #fff;
    border: 1px solid #61441a;
    width: 700px;
    margin: 0 auto 0;
  }
  .zcbl td{
    padding: 5px 40px;
    text-align: center;
    height: 40px;
  }
</style>
