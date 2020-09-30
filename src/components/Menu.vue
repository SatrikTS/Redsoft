<template lang="html">
    <nav class="menu">
        <ul class="menu__list">
            <li class="menu__item" v-for="item in menuList" :key="item.name">
              <a :href="item.link" class="menu__link">{{item.name}}</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            menuList: [
                {
                    name: 'Каталог',
                    link: '#'
                },
                {
                    name: 'Доставка',
                    link: '#'
                },
                {
                    name: 'Оплата',
                    link: '#'
                },
                {
                    name: 'Контакты',
                    link: '#'
                },
                {
                    name: 'О галерее',
                    link: '#'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.menu {
    flex: 1;


    &__list {
        display: flex;
        align-items: center;
        list-style: none;
        padding-left: 48px;
        margin: 0;
    }

    &__item {
        margin-right: 47px;

        &:last-child {
            margin-right: 0;
        }
    }

    &__link {
        text-decoration: none;
        color: $text-reverse-color;
        font-size: $font-size-xs;
        font-family: $f_base2;
    }
}
</style>
