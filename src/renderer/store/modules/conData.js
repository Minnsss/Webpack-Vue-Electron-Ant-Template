const state = {
  conBscInfo: { // 单个针脚包含的基本信息
    id: "001",
    modelName: null,
    type: null,
    location: "Front",
    pins:[
      // {"PinID": "1"},
    ], 
  },



  conGroups: [     // 连接器组
    // {"id":"J10", "modelName":"111", "type":"222", "location":"Front", "pins":[], "selected": false},
  ],

  selectedConItem: null // 选中的连接器
    
}
    
const mutations = {
  /* 不用 */
  SET_ID(state, value){ state.conBscInfo.id = value; },
  SET_MODELNAME(state, value){ state.conBscInfo.modelName = value; },
  SET_TYPE(state, value){ state.conBscInfo.type = value; }, 
  SET_LOCATION(state, value){ state.conBscInfo.location = value; },
  SET_PINS(state, value){ state.conBscInfo.pins = value; }, 
  setConBscInfo(state, value){ state.conBscInfo = value; },
  /* *** */ 


  // value: {'keylabel': 'key', 
  // 'idlabel':'id', 
  // 'valuelabel':'value'}
  setSelectedEdiTableCellValue(state, value){
    state.selectedConItem.pins[`${value.key}` - 1].PinID = value.value; 
  }, // 提交单元格更改   
  setConGroups(state, value){ state.conGroups = value; }, // 设置连接器组的所有信息
  setSelectedConItem(state, value){ state.selectedConItem = value ;}, // 设置选中的一条连接器信息

  addConItem(state, value){state.conGroups.push(value); },  // 添加一条连接器信息到连接器组里
  addPinItem2SelectedConItem(state, value){state.selectedConItem.pins.push(value); }, // 添加一条针脚至选中的连接器
  addBatchPinItem2SeletedConItem(state, value){state.selectedConItem.pins.push(value); }, // 添加批量针脚至选中的连接器
  
  setPinGroups2SelectedConItem(state, value){state.selectedConItem.pins = value; },  // 设置仪器连接器列表到选中的连接器

  deleteSeletedConItem(state, value){
    state.conGroups = state.conGroups.filter((item, index) => {
    if(item.ID != value.ID){
      return item
    }
  })}, // 从连接器组中删除选中的连接器
  clearConGroups(state, value) {state.selectedConItem = ""; }, // 清空连接器组 
  clearPinGroups2SelectedConItem(state, value){state.selectedConItem.pins = ""; }  // 清空选中连接器的所有针脚

}
    
const actions = {
  addConBscInfo ({commit}, value) {commit('addConBscInfo', value)},  

  addConItem ({commit}, value) {commit('addConItem', value)},    
  addPinItem2SelectedConItem ({commit}, value) {commit('addPinItem2SelectedConItem', value)},
  addBatchPinItem2SeletedConItem({commit}, value) {commit('addBatchPinItem2SeletedConItem', value)},

  setSelectedEdiTableCellValue ({commit}, value) {commit('setSelectedEdiTableCellValue', value)},
  setConGroups ({commit}, value) {commit('setConGroups', value)},
  setSelectedConItem({commit}, value) {commit('setSelectedConItem', value)},
  setPinGroups2SelectedConItem({commit}, value) {commit('setPinGroups2SelectedConItem', value)},

  deleteSeletedConItem({commit}, value) {commit('deleteSeletedConItem', value)},

  clearConGroups({commit}, value) {commit('clearConGroups', value)},
  clearPinGroups2SelectedConItem({commit}, value) {commit('clearPinGroups2SelectedConItem', value)},
}
  
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
    
  
    