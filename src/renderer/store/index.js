import Vue from 'vue'
import Vuex from 'vuex'
import tsData from './modules/tsData'
import instData from './modules/instData'
import conData from './modules/conData'
import portData from './modules/portData'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tsData,
    instData,
    conData,
    portData
  }
})
