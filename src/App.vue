<template>
  <div id="app">
        <Header/>
        <main class="main">
            <ProductList/>
        </main>
        <Footer/>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import ProductList from './components/ProductList.vue'

export default {
  name: 'App',
  components: {
    Header,
    ProductList,
    Footer
  }
}
</script>

<style lang="scss">
  .main {
      min-height: calc(100vh - 192px)
  }
</style>
