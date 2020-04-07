import Vue from 'vue'
import index from './views/index.vue'
// import { Button } from 'ant-design-vue'
import './assets/plugins/ant-components'
//取消 Vue 所有的日志与警告
Vue.config.silent = true;
Vue.config.productionTip = false

// Vue.use(Button);

new Vue({
    el: '#app',
    render: h => h(index)
});