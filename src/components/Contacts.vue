<template lang="html">
  <div class="contacts">
      <a href="tel:+7 (495) 555-55-55" class="contacts__tel">
          <img src="../assets/icons/icon-phone.svg" alt="">
          +7 (495) 555-55-55
      </a>
      <span class="contacts__address">
          <img src="../assets/icons/icon-pin.svg" alt="">
          г. Москва, ул. Расплетина, 24
      </span>
  </div>
</template>

<script>

export default {
    data() {
        return {
        }
    }
}
</script>


<style lang="scss" scoped>
    .contacts {
        display: flex;
        align-items: center;

        &__tel {
            color: $text-reverse-color;
            text-decoration: none;
            display: flex;
            align-items: center;
            margin-right: 50px;
            font-size: $font-size-xs;

            img {
                margin-right: 9px;
            }
        }

        &__address {
            color: $text-reverse-color;
            text-decoration: none;
            display: flex;
            align-items: center;
            font-size: $font-size-xs;

            img {
                margin-right: 4px;
            }
        }
    }
</style>
