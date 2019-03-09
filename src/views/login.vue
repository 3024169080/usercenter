<template>
	<div class="login">
		<h3>后台管理系统</h3>
		<el-form  label-width="65px">
			<el-form-item label="用户名" width="20px">
				<el-input placeholder="zhangsan" @input="username"></el-input>
			</el-form-item>
			<el-form-item label="密码">
				<el-input placeholder="123456" @input="password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click='userlogin' :loading="loading">登录</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				loading:false
			};
		},
		computed:{
			user(){
				return this.$store.state.userlogin.user;
			}
		},
		methods:{
			username(un){
				this.$store.commit('userlogin/changeuser',{username:un});
			},
			password(pwd){
				this.$store.commit('userlogin/changeuser',{password:pwd});
			},
			async userlogin(){
				try{
					this.loading=true;
					await this.$store.dispatch("userlogin/ulogin").then(res=>{
						if(res.code==200){
							this.$message.success(res.msg)
							this.$router.replace("/")
						}else{
							this.$message.error(res.msg)
						}
					})
					this.loading=false;
					
				}catch(err){
					console.log(err)
				}
			}
		}
	}
</script>

<style scoped>
	.login h3{
		text-align:center;
		font-size: 25px;
	}
	.login{
		padding:30px;
		margin: 0 auto;
		margin-top: 200px;
		width: 300px;
		height:300px;
		background: #f5f5f5;
		border-radius:30px;
	}
	.el-form{
		margin: 0 auto;
		margin-top: 50px;
	}
</style>
