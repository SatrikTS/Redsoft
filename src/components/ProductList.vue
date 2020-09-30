<template lang="html">
  <div class="product-list">
      <div class="container">
          <h1>
              Картины эпохи Возрождения
          </h1>
          <div class="product-list__items">
              <Product v-for="(item, index) in productList" :data="(item)"
              :isSellStatus="getProductStatus" :key="index"/>
          </div>
      </div>
      <CartMsg v-if="productAdd" :data="productAdd"/>
  </div>
</template>

<script>
import Product from './Product'
import CartMsg from './CartMsg'

import productList from '../assets/data/productList'

export default {
    components: {
        Product,
        CartMsg
    },
    data() {
        return {
            productList: productList.productList,
            productAdd: null
        }
    },
    computed: {
        productStatus() {
            return this.$store.state.productState;
        },
        getProductStatus() {
            let sellProdStatus = sessionStorage.cartState ? sessionStorage.cartState : [];
            if(sellProdStatus.length > 0) {
                return JSON.parse(sellProdStatus);
            } else {
                return sellProdStatus;
            }

        }
    },
    watch: {
        productStatus(data) {
            this.productAdd = data
            setTimeout(() => {
                this.productAdd = null
            }, 1500)
        }
    }
}
</script>

<style lang="scss" scoped>
.product-list {
    padding: 32px 0 300px;

    &__items {
        display: flex;
        justify-content: space-between;
        width: calc(100% + 32px);
        padding: 25px 0 0;
        margin-left: -16px;
        margin-right: -16px;

        &:before,
        &:after {
          content: '';
          display: block;
        }
    }
}
</style>
