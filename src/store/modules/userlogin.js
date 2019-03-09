import axios from '../../axios'
import router from '../../router'
export default {
	namespaced:true,
	state:{
		user:{
			username:"",
			password:"",
		},
	},
	actions:{
		ulogin({commit,state}){
			return new Promise((resolve,reject)=>{
				axios.get("/login",{
					params:state.user
				}).then(res=>{
					commit("changeuser",res.data.user)
					resolve(res.data);
				})
			})
		}
	},
	mutations:{
		changeuser(state,user){
			state.user={...state.user,...user}
			localStorage.setItem("user",JSON.stringify(state.user))
		}
	}
}