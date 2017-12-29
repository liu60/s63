<template>
  <div>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in imgUrl" :key="item">
        <img style="width: 100%;height: 500px" :src="item">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import banner1 from '../assets/images/index/banner1.jpg'
  import banner2 from '../assets/images/index/banner2.jpg'
  import banner3 from '../assets/images/index/banner3.jpg'
  export default {
    data (){
    	return {
        name:'index',
        imgUrl:[banner1,banner2,banner3]
      }
    }
  }
</script>

<style>

</style>
