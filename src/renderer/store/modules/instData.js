const state = {
  instItem: { // 单个仪器包含的基本信息
    ID: "",
    name: "",
    DocRefID: "",
    DocRefuuid: "",
    Address: null,
    ports: [], // 端口信息
    DescPath: null, //
    DriverPath: null, 
  },



  instGroups: [     // 仪器组
  ],

  selectedInstItem: null,   // 当前选中的仪器
}
    
const mutations = {
  // SET_DOCPATH(state, value){ state.DescPath = value; },
  // SET_DRIVERPATH(state, value){ state.driverPath = value; },    


  setInstItem(state, value){ state.instItem = value; }, // 暂时不用
  setInstGroups(state, value){ state.instGroups = value; },
  setSelectedInstItem(state, value){state.selectedInstItem = value;}, // 记录仪器选中信息

  addInstItem(state, value){state.instGroups.push(value); }, //新增一条仪器信息到仪器组里
  deleteSeletedInstItem(state, value){},  // 删除选中的仪器信息

  setPortGroups2SelectedInstItem(state, value){state.selectedInstItem.ports = value; }, // 将读取的仪器描述文件中的端口信息添加到该仪器中
  setDescPath2SelectedInstItem(state, value){state.selectedInstItem.DescPath = value; }, // 将描述文件地址添加到该仪器中
  setDriverPath2SelectedInstItem(state, value){state.selectedInstItem.DriverPath = value; }, // 将驱动文件地址添加到该仪器中    
}
    
const actions = {
  addInstItem ({commit}, value) {commit('addInstItem', value)},
  deleteSeletedInstItem ({commit}, value) {commit('deleteSeletedInstItem', value)},

  setPortGroups2SelectedInstItem ({commit}, value) {commit('setPortGroups2SelectedInstItem', value)},
  setDescPath2SelectedInstItem ({commit}, value) {commit('setDescPath2SelectedInstItem', value)},
  setDriverPath2SelectedInstItem ({commit}, value) {commit('setDriverPath2SelectedInstItem', value)},    
}
  
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
    
  
    