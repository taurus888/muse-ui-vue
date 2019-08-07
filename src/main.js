import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NutUI from '@nutui/nutui';
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import '@nutui/nutui/dist/nutui.css';
import 'muse-ui-message/dist/muse-ui-message.css';
import Message from 'muse-ui-message';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(Message);
//页面用了nutUi的顶部bar组件、搜索框、回到顶部
NutUI.install(Vue);
Vue.use(MuseUI);
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
