// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'              //支持es6
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'          //  vuex 导出

import 'lib-flexible/flexible.js'    //淘宝js px2rem
import './common/stylus/index.styl'; //自定义

// 引入vue-amap
import AMap from 'vue-amap';
Vue.use(AMap);
 
// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德的key
  key: 'YOUR_KEY',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
