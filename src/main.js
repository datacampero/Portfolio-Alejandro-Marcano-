import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import i18n from '@/plugins/i18n';
import FlagIcon from 'vue-flag-icon'
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'
import VueParticles from 'vue-particles'
import Carousel3d from 'vue-carousel-3d'
import ToggleSwitch from 'vuejs-toggle-switch'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueParticlesBg from "particles-bg-vue";

Vue.use(VueParticlesBg);
Vue.use(VueSweetalert2);
Vue.use(ToggleSwitch)
Vue.use(Carousel3d);
Vue.use(VueGlide);
Vue.use(FlagIcon);
Vue.use(VueParticles);
Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app')
