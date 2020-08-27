import Vue from 'vue';
import App from './App.vue';
import VueStyledShadows from '../src/VueStyledShadows.vue';

Vue.component('VueStyledShadows', VueStyledShadows);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount('#app');
