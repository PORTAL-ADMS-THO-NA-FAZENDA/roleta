import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/HOME/Home.vue'

import NotFound from './components/NotFound';



Vue.use(VueRouter);

const router = new VueRouter({
  mode:"history",
  routes:[
    { path:'/',component:Home },

   { path:'*',component:NotFound }
    
  ]
});


Vue.config.productionTip = false





new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
