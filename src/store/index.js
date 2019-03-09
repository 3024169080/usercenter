import Vue from 'vue'
import Vuex from 'vuex'
// import axios from '../axios'
Vue.use(Vuex)
import user from './modules/user'
import userlogin from './modules/userlogin'
export default new Vuex.Store({
	state:{
		
	},
	mutations:{
		
	},
	axtions:{
		
	},
	modules:{
		user,
		userlogin
	}
})