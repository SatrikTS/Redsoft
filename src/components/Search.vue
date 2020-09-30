<template lang="html">
  <div class="search">
      <form class="search__form" action="" method="post">
          <input type="text" name="" value="" class="search__input" placeholder="Поиск по названию картины">
          <button type="submit" name="button" class="btn">Найти</button>
      </form>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .search {
        &__form {
            display: flex;
        }

        &__input {
            min-height: 48px;
            border: 1px solid $border-color;
            background: $primary-bg;
            outline: none;
            border-radius: 0;
            padding: 13px 16px;
            width: 294px;
            font-size: $font-size-xs;
            transition: border 0.25s ease-in-out;
            font-family: $f_base;

            &::placeholder {
                font-size: $font-size-xs;
                color: $placeholder-color;
                font-family: $f_base;
            }

            &:active {
                border-color: $border-color-active;
                color: $text-color;
            }

            &:focus {
                color: $text-color;
                border-color: $border-color-active;
            }
        }

        .btn {
            min-width: 122px;
        }
    }
</style>
