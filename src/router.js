import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
	routes: [
		// {
		// 	path: '/djyl/zhengzhijianshe',
		// 	name: '政治建设',
		// 	component: () => import('./views/Zhengzhijianshe.vue'),
		// 	meta:{auth:true,keepAlive: false},
		// },

	]
})

router.afterEach((to) => {
	if(to.meta.title){
		window.document.title = to.meta.title + ' -' + process.env.VUE_APP_SERVION;
	}else{
		window.document.title = '楚雄区·城市治理一图全面感知平台' + ' -' + process.env.VUE_APP_SERVION;
	}
})

export default router
