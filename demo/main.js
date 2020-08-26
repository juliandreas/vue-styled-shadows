import Vue from 'vue';
import App from './App.vue';
import VueImgPattern from '../src/VueImgPattern.vue';

Vue.component('VueImgPattern', VueImgPattern);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount('#app');
