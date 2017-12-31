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
        </li><li>
        <div class="icon">SA</div>
        <!--如果使用图片. 就切换img 用一相同的类名-->
        <div class="up">SA平台</div>
        <div class="down">20.55</div>
      </li><li>
        <div class="icon">SA</div>
        <!--如果使用图片. 就切换img 用一相同的类名-->
        <div class="up">SA平台</div>
        <div class="down">20.55</div>
      </li><li>
        <div class="icon">SA</div>
        <!--如果使用图片. 就切换img 用一相同的类名-->
        <div class="up">SA平台</div>
        <div class="down">20.55</div>
      </li><li>
        <div class="icon">SA</div>
        <!--如果使用图片. 就切换img 用一相同的类名-->
        <div class="up">SA平台</div>
        <div class="down">20.55</div>
      </li><li>
        <div class="icon">SA</div>
        <!--如果使用图片. 就切换img 用一相同的类名-->
        <div class="up">SA平台</div>
        <div class="down">20.55</div>
      </li><li>
        <div class="icon">SA</div>
        <!--如果使用图片. 就切换img 用一相同的类名-->
        <div class="up">SA平台</div>
        <div class="down">20.55</div>
      </li><li>
        <div class="icon">SA</div>
        <!--如果使用图片. 就切换img 用一相同的类名-->
        <div class="up">SA平台</div>
        <div class="down">20.55</div>
      </li><li>
        <div class="icon">SA</div>
        <!--如果使用图片. 就切换img 用一相同的类名-->
        <div class="up">SA平台</div>
        <div class="down">20.55</div>
      </li><li>
        <div class="icon">SA</div>
        <!--如果使用图片. 就切换img 用一相同的类名-->
        <div class="up">SA平台</div>
        <div class="down">20.55</div>
      </li><li>
        <div class="icon">SA</div>
        <!--如果使用图片. 就切换img 用一相同的类名-->
        <div class="up">SA平台</div>
        <div class="down">20.55</div>
      </li><li>
        <div class="icon">SA</div>
        <!--如果使用图片. 就切换img 用一相同的类名-->
        <div class="up">SA平台</div>
        <div class="down">20.55</div>
      </li><li>
        <div class="icon">SA</div>
        <!--如果使用图片. 就切换img 用一相同的类名-->
        <div class="up">SA平台</div>
        <div class="down">20.55</div>
      </li><li>
        <div class="icon">SA</div>
        <!--如果使用图片. 就切换img 用一相同的类名-->
        <div class="up">SA平台</div>
        <div class="down">20.55</div>
      </li><li>
        <div class="icon">SA</div>
        <!--如果使用图片. 就切换img 用一相同的类名-->
        <div class="up">SA平台</div>
        <div class="down">20.55</div>
      </li><li>
        <div class="icon">SA</div>
        <!--如果使用图片. 就切换img 用一相同的类名-->
        <div class="up">SA平台</div>
        <div class="down">20.55</div>
      </li><li>
        <div class="icon">SA</div>
        <!--如果使用图片. 就切换img 用一相同的类名-->
        <div class="up">SA平台</div>
        <div class="down">20.55</div>
      </li>
      </ul>
    </div>
    <div class="record">
      <div class="title">
        交易记录
      </div>
      <div>
        日期由:
        <el-date-picker
          v-model="start"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
        -
        <el-date-picker
          v-model="end"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
        交易种类:
        <el-select v-model="type">
          <el-option>取款</el-option>
        </el-select>
      </div>
      <div>
        交易种类:
        <el-select v-model="type">
          <el-option>取款</el-option>
        </el-select>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="num"
          label="交易编号"
          width="180">
        </el-table-column>
        <el-table-column
          prop="type"
          label="交易种类">
        </el-table-column>
        <el-table-column
          prop="amount"
          label="金额">
        </el-table-column>
        <el-table-column
          prop="status"
          label="状态">
        </el-table-column>
        <el-table-column
          prop="other"
          label="备注">
        </el-table-column>
      </el-table>
      <el-button type="primary" @click="onSubmit">提交</el-button>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        start: '',
        end: '',
        type: '',
        tableData: [{
          date: '2016-05-02',
          num: '1234567',
          type: '线上',
          amount : 100,
          status:'成功',
          other: '成功'
        }, {
          date: '2016-05-04',
          num: '1234567',
          type: '线上',
          amount : 100,
          status:'成功',
          other: '成功'
        }, {
          date: '2016-05-01',
          num: '1234567',
          type: '线上',
          amount : 100,
          status:'成功',
          other: '成功'
        }, {
          date: '2016-05-03',
          num: '1234567',
          type: '线上',
          amount : 100,
          status:'成功',
          other: '成功'
        }]
      }
    }
  }
</script>
<style scoped>
  @import "../../assets/css/record.css";
</style>
