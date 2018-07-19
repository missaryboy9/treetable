// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import i18n from './i18n';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Mock from './mock';
import store from './vuex/store';
import ajax from './common/js/ajax';
import {
  njaRouter
} from 'nja-core';
import baxios from './common/axios';
// import util from './common/util.js';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Mock.bootstrap();
Vue.use(ajax);
Vue.use(baxios);
// 引入工具
// Vue.prototype.$utilHelper = util;
Vue.use(njaRouter, {
  router,
  store,
  storeKey: 'routers'
});
// 标题
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title;
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
});
