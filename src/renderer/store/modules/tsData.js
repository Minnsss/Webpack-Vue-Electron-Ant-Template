const state = {
  tsItem: { // 测试站基本信息
    uuid: "",
    name: "ATS",
    description: "",
    model: "",
    version: "",
    manufacturers: "",
  },

  imgPath: null, // 图片路径
  DescPath: null, 
  equipIdfGroups: [
    // {"type":"部件号", "number":"001", "qualifier":"CETC10", "selected": false},  //设备识别信息
  ], 

  manufIdfGroups:[
    // {"type":"部件号", "number":"001", "manufacturerName":"CETC10", "selected": false},  //厂商识别信息
  ],

  selectedequipIdfGroups: [], // 选中的设备识别组
  seletcedManufIdfGroups: [], // 选中的厂商识别组

}
    
const mutations = {
  SET_UUID(state, value){ state.tsItem.uuid = value; },
  SET_NAME(state, value){ state.tsItem.name = value; },
  SET_DESCRIPTION(state, value){ state.tsItem.description = value; },
  SET_MODEL(state, value){ state.tsItem.model = value; },
  SET_VERSION(state, value){ state.tsItem.version = value; },
  SET_MANUFACTURERS(state, value){ state.tsItem.manufacturers = value; },
  SET_IMAGEPATH(state, value){ state.imgPath = value; },
  SET_DOCPATH(state, value){ state.DescPath = value; }, 
  setTsItem(state, value){ state.tsItem = value; },


  setTsEquipIdfGroups(state, value){ state.equipIdfGroups = value; }, 
  setTsManufIdfGroups(state, value){ state.manufIdfGroups = value; },  

  addTsEquipIdfItem(state, value){state.equipIdfGroups.push(value); },
  addTsManufIdfItem(state, value){state.manufIdfGroups.push(value); },

  // 不用
  selectedEquipIdfInfo(state, value){state.selectedequipIdfGroups = value;},
  selectedManufIdfInfo(state, value){state.selectedmanufIdfGroups = value;},

  // 不用
  deleteTsEquipInfo(state, value){state.equipIdfGroups.filter(value => value.key !== key); },
  deleteTsManufInfo(state, value){state.manufIdfGroups.filter(value => value.key !== key); },

  // 通过vue写过滤器，selected 没调过
  minusTsEqupIdfInfo(state, value){state.equipIdfGroups.filter( item => item.key !== key); },
}
    
const actions = {
  addTsEquipIdfItem ({commit}, value) {commit('addTsEquipIdfItem', value)},
  addTsManufIdfItem ({commit}, value) {commit('addTsManufIdfItem', value)},

  setTsEquipIdfGroups ({commit}, value) {commit('setTsEquipIdfGroups', value)},
  setTsManufIdfGroups ({commit}, value) {commit('setTsManufIdfGroups', value)},  

  // 未实现
  deleteTsEquipInfo({commit}, value) {commit('deleteTsEquipInfo', value)},
}
  
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
    
  
    