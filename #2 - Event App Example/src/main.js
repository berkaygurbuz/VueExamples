import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseIcon from "./components/BaseIcon.vue";
import 'nprogress/nprogress.css';
import Vuelidate from 'vuelidate';
import DateFilter from './filters/date';

Vue.filter('date',DateFilter);

Vue.use(Vuelidate);

Vue.component('BaseIcon',BaseIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
