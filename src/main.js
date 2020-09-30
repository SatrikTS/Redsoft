import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import {store} from './store';

new Vue({
    store,
  render: h => h(App),
}).$mount('#app')

import './assets/scss/fonts.scss'
import './assets/scss/custom.scss'
import './assets/scss/variables.scss';
import './assets/scss/preloader.scss';
