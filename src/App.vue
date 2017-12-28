<template>
  <div id="app">
    <headers></headers>
    <router-view/>
    <footers></footers>
  </div>
</template>

<script>
  import headers from './components/header';
  import footers from './components/footer';
export default {
  name: 'app',
  components:{
    headers,footers
  }
}
</script>

<style>

</style>
