const state = {
  interfaceItem: { // 单个端口
    id: "PORT_001",
    type: '',
    direction: '',
    refPort: [],    // 链接的端口信息
    refs: [         // 单端口链接的连接器和针脚信息
      {
        cons: "J1",
        pins:[
          {"PinID":"1a-true"},
          {"PinID":"1a-comp"},                    
        ],
      },
      {
        cons: "J2",
        pins:[
          {"PinID":"1"},
          {"PinID":"2"},       
        ],
      },            
    ]
  },

  interfaceGroups: [     // 端口组
  ],

  selectedInterfaceItem: null,   // 当前选中的仪器
    
}
    
const mutations = {
  setInterfaceGroups(state, value){ state.interfaceGroups = value; },
  clearInterfaceGroups(state){ state.interfaceGroups.splice(0); },

  setSelectedInterfaceItem(state, value){state.selectedInterfaceItem = value; },

  addInterfaceItem(state, value){ state.interfaceGroups.push(value); }, // 新增一条端口信息到端口组
  delInterfaceItem(state, value){ state.selectedInterfaceItem = null; },  // 删除当前选中一条的端口信息

  addRefPinItem(state, value){state.selectedInterfaceItem.refs.refPins.push(value);},  // 新增一条针脚引用到选定的端口信息
}
    
const actions = {
  clearInterfaceGroups ({commit}, value) {commit('clearInterfaceGroups', value)},

  addInterfaceItem ({commit}, value) {commit('addInterfaceItem', value)},
  delInterfaceItem ({commit}, value) {commit('delInterfaceItem', value)},

  addRefPinItem ({commit}, value) {commit('addRefPinItem', value)},  
}
  
export default {
  namespaced: true,
  state,
  mutations,
  actions
}