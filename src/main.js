import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/assets/css/base.css"
import './assets/css/mouse.css'
import router from "./router";
import store from "./store";
import "./filters";
import VueParticles from 'vue-particles'
Vue.config.productionTip = false;
Vue.use(VueParticles)
Vue.use(ElementUI);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
