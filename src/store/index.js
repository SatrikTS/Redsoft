import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const url = 'https://jsonplaceholder.typicode.com/posts/'
let cartState = sessionStorage.cartState ? sessionStorage.cartState : [];

export const store = new Vuex.Store({
  state: {
      productState: '',
      cartState: []
  },
  getters: {},
  mutations: {
      SET_PROD_STATE: (state, response) => {
          state.productState = response;
          if(typeof(cartState) === 'string') {
              cartState = JSON.parse(cartState)
          }
          if(!cartState.includes(response)) {
              cartState.push(response)
              sessionStorage.setItem('cartState', JSON.stringify(cartState))
          }
      }
  },
  actions: {
      HANDLER_BUY_PRODUCT({commit},id) {
          fetch(url + '/' + id)
          .then((response) => {
              return response.json();
          })
          .then((response) => {
              commit('SET_PROD_STATE', response);
          })
          .catch((error) => {
              console.log(error);
          })
      }
  },
});
