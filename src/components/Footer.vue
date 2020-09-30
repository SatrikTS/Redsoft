<template lang="html">
  <footer class="footer">
        <div class="container">
            <div class="footer__wrap">
                <Logo/>
                <Menu/>
                <Contacts/>
            </div>
        </div>
  </footer>
</template>

<script>
import Logo from './Logo.vue'
import Menu from './Menu.vue'
import Contacts from './Contacts.vue'


export default {
    components: {
        Logo,
        Menu,
        Contacts
    }
}
</script>

<style lang="scss" scoped>
    .footer {
        padding: 24px 0;
        background: $secondary-bg;

        &__wrap {
            display: flex;
            align-items: center;
        }
    }
</style>
