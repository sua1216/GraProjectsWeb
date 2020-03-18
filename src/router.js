import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
	routes: [
		// {
		// 	path: '/',
		// 	name: '首页',
		// 	component: () => import('./views/HeadNav.vue'),
		// 	// meta:{auth:true,keepAlive: false},
		// },

	]
})

router.afterEach((to) => {
	if(to.meta.title){
		window.document.title = to.meta.title + ' -' + process.env.VUE_APP_SERVION;
	}else{
		window.document.title = '爱阮家民宿在线订购网站' + ' -' + process.env.VUE_APP_SERVION;
	}
})

export default router
