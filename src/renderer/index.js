import Vue from 'vue'
// import index from './views/index.vue'
// import { Button } from 'ant-design-vue'
import Vuex from 'Vuex'
import store from './store'
import axios from 'axios'

import App from './App.vue'
import './assets/plugins/ant-components'
import './assets/styles/index.less'

//取消 Vue 所有的日志与警告
Vue.use(Vuex)
Vue.http = Vue.prototype.$http = axios
Vue.config.silent = true;
Vue.config.productionTip = false

// Vue.use(Button);

new Vue({
    el: '#app',
    store,
    render: h => h(App)
});