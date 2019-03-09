<template>
	<div class="userHeader">
		<el-row type="flex" justify="space-between">
			<el-col :span="6">
				<img width="60" height="60" src="http://www.duotai.net/img/product/features/custom-style.svg" alt="">
			</el-col>
			<el-col :xl="{span:3}" :lg="{span:6}" :md="{span:10}" :sm="{span:12}" :xs="{span:18}">
				<el-menu class="el-menu-demo" mode="horizontal" router>
					<el-submenu index="1">
						<template slot="title">
							<img class="userimg" :src="welcome.avatar" width="25" height="25" alt="">
							{{welcome.name}}
						</template>
						<el-menu-item index="1-1">个人中心</el-menu-item>
						<el-menu-item index="1-2">设置</el-menu-item>
						<el-menu-item index="1-3" @click="cancellogin">退出登录</el-menu-item>
					</el-submenu>
					<el-menu-item index="3">消息中心</el-menu-item>
				</el-menu>
			</el-col>
		</el-row>		
	</div>
</template>

<script>
	import router from '../../router'
	export default {
		data() {
			return {

			};
		},
		computed: {
			welcome() {
				return JSON.parse(localStorage.getItem("user"));
			}
		},
		methods: {
			cancellogin() {
				localStorage.removeItem("user");
				router.replace("/login");
			}
		}
	}
</script>

<style scoped>
	.userimg{
		border-radius:50%;
		margin-right:10px;
	}
</style>
