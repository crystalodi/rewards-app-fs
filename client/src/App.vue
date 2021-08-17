<template>
  <div>
    <Header/>
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
<style>
  .app-button {
    color:black;
    border:none;
    padding:7px 30px 7px 30px;
    font-size: 12px;
    border-radius: 20px;
  }
  .prize-card {
      border: 0!important;
      box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
  }
</style>

