<template>
	<el-container>
		<el-header>
			<userHeader></userHeader>
		</el-header>
		<el-container>
			<el-aside>
				<asideMenu></asideMenu>
			</el-aside>
			<el-main>
				<router-view></router-view>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import asideMenu from '../components/Menu/asideMenu'
	import userHeader from '../components/Menu/userHeader'
	export default {
		data() {
			return {
				
			};
		},
		components:{
			asideMenu,
			userHeader
		}
	}
</script>

<style>

</style>
