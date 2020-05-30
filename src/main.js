import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'large', zIndex: 3000 });
new Vue({
  render: h => h(App),
}).$mount('#app')
