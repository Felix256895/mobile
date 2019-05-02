// vuex 入口
import Vue from 'vue'
import Vuex from 'vuex'                      //npm install vuex --save
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'  //控制台看修改
Vue.use(Vuex)
//调试工具（上线关闭）
const debug = process.env.NODE_ENV !== 'production' 
export default new Vuex.Store({  ///实例，相当于注册
  actions,
  getters,
  state,
  mutations,
  strict: debug,  //true 时开启
  plugins: debug ? [createLogger()] : [],
});