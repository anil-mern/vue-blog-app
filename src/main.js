import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routers/routes'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/build/css/mdb.css'

Vue.config.productionTip = false;

// if true, suppress all Vue logs and warnings.
Vue.config.silent = false;

// make sure to set this synchronously immediately after loading Vue
Vue.config.devtools = true;

Vue.config.errorHandler = function (err, vm, info) {
    // handle error
    // `info` is a Vue-specific error info, e.g. which lifecycle hook
    // the error was found in. Only available in 2.2.0+
    console.log('err: ', err);
    console.log('info: ', info);
};

Vue.use(BootstrapVue);
Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app')

// new Vue({
//   el: "#app",
//   render: h => h(App),
//   router
// })
