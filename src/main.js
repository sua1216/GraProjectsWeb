import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import iView from 'iview';

import echarts from 'echarts'
import echartsWordcloud from 'echarts-wordcloud'
import {tool} from '@/assets/common/js/common.js'
import Tooltips from '@/components/common/Tooltips/Tooltips.js'
import api from '@/mock/chongXiong.js'
import qs from 'qs';



api();
//axios请求前置地址
window.baseURL = 'http://example.com';
// window.apiURL = 'http://47.97.11.193:88/dsj_sy_show/api/';
// window.apiURL = 'api/';
window.apiURL = 'http://sy.bddeve.xbcx.com.cn/dsj_sy_show/api/';

//设置post的默认格式为form-data
axios.defaults.headers.post.Accept = 'application/json, text/javascript, */*; q=0.01';
axios.defaults.headers.post['X-Requested-With'] = 'xmlhttprequest';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
axios.interceptors.request.use((config) => {
	config.data = qs.stringify(config.data, {arrayFormat: 'brackets'});
	return config;
});

Vue.use(Tooltips);
Vue.use(iView);
Vue.prototype.$tool = tool;
Vue.prototype.axios = axios;
Vue.prototype.$echarts = echarts;
Vue.prototype.$echartsWordcloud = echartsWordcloud;
Vue.config.productionTip = false
//应用场景的大小


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
