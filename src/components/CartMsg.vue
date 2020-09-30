<template lang="html">
  <div class="cart-msg">
      <span class="cart-msg__alert">
          Картина с номером <b>{{data.id}}</b> добавлена в корзину
      </span>
      <span class="cart-msg__title">
          {{data.title}}
      </span>
      <span class="cart-msg__text">{{data.body}}</span>
  </div>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style lang="scss" scoped>
    .cart-msg {
        position: fixed;
        z-index: 10;
        top: 20px;
        right: 20px;
        width: 220px;
        background: $white;
        padding: 16px;
        display: flex;
        flex-direction: column;
        box-shadow: 2px 2px 21px -4px $dark-bg;

        &__alert {
            font-size: $font-size-xs;
            font-family: $f_base;
        }

        &__title {
            font-size: $font-size-xs;
            margin: 12px 0;
        }

        &__text {
            font-size: $font-size-xxs;
            line-height: $line-height-xl;
            color: $text-reverse-color;
        }
    }
</style>
