<template lang="html">
  <div class="product" :class="{is_sell: productInfo.isSell}">
      <div class="product__wrap">
          <img :src="productInfo.img" alt="" class="product__img">
          <span class="product__caption">
              {{productInfo.caption}}
          </span>
          <div class="product__info">
              <div class="product__selling" v-if="!productInfo.status">
                  <div class="product__prices">
                      <span class="product__price product__price--old" v-if="productInfo.oldprice">
                          {{productInfo.oldprice}}
                      </span>
                      <span class="product__price product__price--real">
                          {{productInfo.price}}
                      </span>
                  </div>
                  <button v-if="isSelling" type="button" name="button" class="btn" @click="getBuyProd(productInfo.id)">Купить</button>
                  <button v-else type="button" name="button" class="btn is-active">
                      <img src="../assets/icons/icon-arrow.svg" alt="">
                      В корзине
                  </button>
              </div>
              <div class="product__issell" v-else>
                  {{productInfo.status}}
              </div>
          </div>
      </div>

  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props: ['data', 'isSellStatus'],
    data() {
        return {
            productInfo: this.data,
            isSelling: true
        }
    },
    methods: {
        ...mapActions([
            'HANDLER_BUY_PRODUCT'
        ]),
        getBuyProd(id) {
            this.isSelling = false;
            this.HANDLER_BUY_PRODUCT(id)
        }
    },
    mounted() {
        if(this.isSellStatus && this.isSellStatus) {
            this.isSellStatus.forEach((item) => {
                if(this.productInfo.id === item.id )
                this.isSelling = false
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .product {
        padding: 0 16px;
        width: 25%;
        margin: 0 0 20px;

        &__wrap {
            height: 100%;
            display: flex;
            flex-direction: column;
            border: 1px solid $border-color;
        }

        &.is_sell {
            opacity: 0.5;
            pointer-events: none;
        }

        &__img {
            width: 100%;
            height: 160px;
            object-fit: cover;
        }

        &__caption {
            font-size: $font-size-lg;
            line-height: $line-height-xl;
            color: $text-color;
            padding: 20px 24px 22px;
        }

        &__info {
            padding: 0 24px 24px;
        }

        &__selling {
            display: flex;
            justify-content: space-between;
        }

        &__issell {
            padding-top: 14px;
        }

        &__prices {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        &__price {
            font-size: $font-size-md;
            font-weight: $font-bold;

            &--old {
                font-size: $font-size-xs;
                font-weight: $font-light;
                text-decoration: line-through;
                color: $text-color-pale;
            }
        }

        .btn {
            min-width: 118px;
        }
    }
</style>
