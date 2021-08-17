<template>
  <div>
    <Header/>
    <div class="container">
      <router-view :prizes="prizes" @updatePrizeQuantity="updatePrize"></router-view>
    </div>
    <Footer/>
  </div>
</template>

<script>

import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"

export default {
  name: 'App',
  data() {
    return {
      prizes: []
    }
  },
  components: {
    Header,
    Footer
  },
  created () {
    this.getPrizes();
  },
  methods: {
    getPrizes() {
      // this.prizes = prizes;
    },
    updatePrize(prizeId) {
      console.log(prizeId);
      // this.prizes.forEach(prize => {
      //   if (prize.id === prizeId) {
      //     prize.quantity = prize.quantity - 1;
      //   }
      // })
    }
  },
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

