import Vue from 'vue';
import App from './App.vue';
import i18n from './services/i18n';

export default new Vue({
  el: '#root',
  render: (h) => h(App),
  i18n,
});
