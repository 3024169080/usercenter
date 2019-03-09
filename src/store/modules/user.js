import axios from '../../axios'
export default {
	namespaced:true,
	state:{
		all:[],
		page:{
			page:1,
			pagesize:10,
			name:""
		},
		total:0,
		user:{
			editStatus: false,
			enterLoading:false,
			addStatus:false,
			page: {
				page: 1,
				pagesize: 10,
				name: ""
			},
			user:{},
			addUser:{
				name:"",
				age:"",
				birth:"",
				sex:0,
				addr:""
			},
			loading: false,
			ids:"",
			pickOptions: {
				disabledDate(time) {
					return time.getTime() > Date.now();
				}
			},
		},
	},
	mutations:{
		setUsers(state,users){
			state.all=users
		},
		setTotal(state,total){
			state.total=total;
		},
		changePage(state,page){
			state.page={...state.page,...page};
		},
		delUser(state,index){
			state.all.splice(index,1);
		},
		edituser(state,user){
			state.user={...state.user,...user};
		},
		setuser(state,{id,index}){
			state.user.user=state.all.find(a=>a.id===id);
			state.user.user.index=index;
		},
		changeuser(state,val){
			state.user.user={...state.user.user,...val};
		},
		changeedituser(state,edit){
			state.user={...state.user,...edit};
		},
		editall(state,user){
			state.all.splice(user.index,1,user)
		},
		selectids(state,ids){
			state.user.ids=ids;
		},
		delchecked(state){
			state.all=state.all.filter(id=>!state.user.ids.includes(id.id))
		},
		changeadduser(state,val){
			state.user.addUser={...state.user.addUser,...val};
		},
		addUser(state,user){
			state.all.unshift(user);
			state.all.pop();
		}
	},
	actions:{
		setUsers({commit,state}){
			return new Promise((resolve,reject)=>{
				axios.get("/user/listpage",{
					params:state.page
				}).then(res=>{
					commit("setUsers",res.data.users.users)
					commit("setTotal",res.data.users.total)
					resolve();
				})
			})
		},
		delUser({commit},{id,index}){
			return new Promise((resolve,reject)=>{
				axios.get("/user/remove",{
					params:{
						id
					}
				}).then(res=>{
					commit("delUser",index);
					resolve();
				})
			})
		},
		edituser({commit,state}){
			return new Promise((resolve,reject)=>{
				axios.get("/user/edit",{
					params:state.user.user
					}).then(res=>{
						if(res.data.code==200){
							commit("editall",state.user.user)
							resolve();
						}
					})
			})
		},
		delchecked({commit,state}){
			return new Promise((resolve,reject)=>{
				axios.get("/user/batchremove",{
					params:{
						ids:state.user.ids.join(",")
					}
				}).then(res=>{
					commit("delchecked")
					resolve();
				})
			})
		},
		adduser({commit,state}){
			return new Promise((resolve,reject)=>{
				axios.get("/user/add",{
					params:state.user.addUser
				}).then(res=>{
					commit("addUser",res.data.user)
					resolve();
				})
			})
		}
	}
}