<template>
  <div>
    <header>
      <h1>Rewards</h1>
    </header>
      <router-view></router-view>
    <footer>
      <p>Terms and Conditions | Privacy Policy</p>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>
<style lang="scss">
  header {
    background: $primaryblue;
    text-align: center;
    color: $white;
    padding: 3.75rem;
    h1 {
      font-weight: 700;
    }
  }

  footer {
    background: $footerbg;
    text-align: center;
    color: $white;
    padding: 2.5rem;
  }

  .container {
    max-width: 1100px;
    margin: auto;
    padding: 0 .5rem;
    overflow: hidden;
  }
</style>

