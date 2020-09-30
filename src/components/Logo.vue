<template lang="html">
  <a href="#" class="logo">
      <img :src="Logo" alt="">
  </a>
</template>

<script>
import Logo from '../assets/img/logo.svg';

export default {
    data() {
        return {
            Logo: Logo
        }
    }
}
</script>

<style lang="scss" scoped>
    .logo {
        width: 48px;
        height: 48px;
    }
</style>
