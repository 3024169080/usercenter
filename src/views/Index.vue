<template>
  <div>
		<searchUser></searchUser>
		<usersTable></usersTable>
		<userPage></userPage>
		<useredit></useredit>
		<addUser></addUser>
	</div>
</template>
	
<script>
	import usersTable from '../components/users/usersTable'
	import userPage from '../components/users/userPage'
	import searchUser from '../components/users/searchUser'
	import useredit from '../components/users/useredit'
	import addUser from "../components/users/addUser"
export default {
	components:{
		usersTable,
		userPage,
		searchUser,
		useredit,
		addUser
	}
}
</script>

<style>

</style>
