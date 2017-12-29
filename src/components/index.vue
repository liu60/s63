<template>
  <div>
    <el-carouse :interval="5000" arrow="always">
      <el-carousel-item v-for="item in imgUrl" :key="item">
        <img style="width: 100%;height: 500px" :src="'./../assets/images/index/'+item">
      </el-carousel-item>
    </el-carouse>
  </div>
</template>

<script>
  export default {
    name:'index',
    imgUrl:['banner1.jpg','banner2.jpg','banner3.jpg']
  }
</script>

<style>

</style>
