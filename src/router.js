import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from './views/Index'
import Menu from './views/Menu'
// import login from './views/login'
const router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [		
		{
			path:"/login",
			component:()=> import("./views/login"),
		},
    {
      path: '/',
      component: Menu,
			meta:{
				auth:true
			},
			children:[
				{
					path:'',
					component:Index,
				},
				{
					path:"page1"
				}
			]
    }
  ]
})

router.beforeEach((to, from, next) => {
	if(to.matched.some(route=>route.meta.auth)){
		if(localStorage.getItem("user")){
			next();
		}else{
			next("/login")
		}
	}else{
		next();
	}
})
export default router;
