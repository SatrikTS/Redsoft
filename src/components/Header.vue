<template lang="html">
  <header class="header">
        <div class="container">
            <div class="header__wrap">
                <Logo/>
                <Menu/>
                <Search/>
            </div>
        </div>
  </header>
</template>

<script>
import Logo from './Logo.vue'
import Menu from './Menu.vue'
import Search from './Search.vue'

export default {
    components: {
        Logo,
        Menu,
        Search
    }
}
</script>

<style lang="scss" scoped>
    .header {
        padding: 23px 0 24px;
        border-bottom: 1px solid $border-color;

        &__wrap {
            display: flex;
            align-items: center;
        }
    }
</style>
