const state = {
  portItem: { // 单个针脚包含的基本信息
    id: "PORT_001",
    type: '',
    direction: '',
    pins:[],
    pinsText: "", // "J1-1,2,3,4"
    refPort: "", // 链接的端口信息
  },



  portGroups: [     // 端口组
    // {"name":"J10", "type":"111", "direction":"222", pins[], refPort[], "selected": "true"},
  ],

  selectedPortItem: null,   // 当前选中的仪器
    
}
    
const mutations = {
  //
  SET_ID(state, value){ state.portItem.id = value; },
  SET_MODELNAME(state, value){ state.portItem.modelName = value; },
  SET_TYPE(state, value){ state.portItem.type = value; }, 
  SET_LOCATION(state, value){ state.portItem.location = value; },
  SET_PINS(state, value){ state.portItem.pins = value; },
  SET_REFPORT(state, value){ state.portItem.refPort = value; },    
  // 

  setPortGroups(state, value){ state.portGroups = value; },
  setSelectedPortItem(state, value){state.selectedPortItem = value; },
  setportItem(state, value){ state.portItem = value; },

  addPortItem(state, value){ state.portGroups.push(value); }, // 新增一条端口信息到端口组
  delPortItem(state, value){ state.selectedPortItem = null; },  // 删除当前选中一条的端口信息
  clearPortGroups(state){ state.portGroups.splice(0); }, // 清空所有端口组

  addRefPinItem(state, value){state.selectedPortItem.pins.push(value);},  // 新增一条针脚引用到选定的端口信息
}
    
const actions = {
  addPortItem ({commit}, value) {commit('addPortItem', value)},
  delPortItem ({commit}, value) {commit('delPortItem', value)},  
  clearPortGroups ({commit}, value) {commit('clearPortGroups', value)},   

  addRefPinItem ({commit}, value) {commit('addRefPinItem', value)},  
}
  
export default {
  namespaced: true,
  state,
  mutations,
  actions
}