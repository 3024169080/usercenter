<template>
	<el-form :inline="true">
  <el-form-item>
    <el-input placeholder="输入查询数据" :value="user.page.name" @input="changeName"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="searchUser">查询</el-button>
  </el-form-item>
	<el-form-item>
		<el-button type="success" @click="adduser">新增用户</el-button>
	</el-form-item>
	<el-form-item>
		<el-button type="danger" @click="delchecked" :disabled="!user.ids.length">删除多选</el-button>
	</el-form-item>
</el-form>
</template>

<script>
	import bus from '../../bus'
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			user(){
				return this.$store.state.user.user;
			}
		},
		methods:{
			changeName(name){
				this.$store.commit("user/changePage",{name})
			},
			searchUser(){
				bus.$emit("setUsers")
			},
			delchecked(){
				this.$store.dispatch("user/delchecked")
			},
			adduser(){
				this.$store.commit("user/edituser",{addStatus:true})
			}
		}
	}
</script>

<style>

</style>
