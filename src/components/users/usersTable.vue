<template>
	<el-table :data="users" v-loading="loading" @selection-change="selectionChange">
		<el-table-column type="selection">
		</el-table-column>
		<el-table-column type="index">
		</el-table-column>
		<el-table-column prop="name" label="姓名">
		</el-table-column>
		<el-table-column :formatter="formSex" prop="sex" label="性别">
		</el-table-column>
		<el-table-column prop="age" label="年龄">
		</el-table-column>
		<el-table-column prop="birth" label="生日">
		</el-table-column>
		<el-table-column prop="addr" label="地址">
		</el-table-column>
		<el-table-column fixed="right" label="操作" width="160">
			<template slot-scope="scope">
				<el-button type="info" size="mini" @click="edituser(scope.row.id,scope.$index)">编辑</el-button>
				<el-button type="danger" size="mini" @click="delUser(scope.row.id,scope.$index)">删除</el-button>
			</template>
		</el-table-column>
	</el-table>
</template>

<script>
	import index from '../../store/index'
	import bus from '../../bus'
	export default {
		data() {
			return {
				loading:false
			};
		},
		computed:{
			users(){
				return this.$store.state.user.all;
			}
		},
		created(){
			this.setUsers();
			bus.$on("setUsers",this.setUsers)
		},
		methods:{
			async setUsers(){
				this.loading=true;
				try{
					await this.$store.dispatch("user/setUsers")
					this.loading=false;
				}catch(err){
					console.log(err)
				}
			},
			formSex(row, column, cellValue){
				return cellValue==1?'男':'女';
			},
			delUser(id,index){
				this.$confirm("确认删除此条数据吗？",'提示',{
					confirmButtonText:'确认',
					cancelButtonText:'取消'
				}).then(()=>{
					this.$store.dispatch("user/delUser",{id,index})
					this.$message.success("删除成功")
				}).catch(()=>{
					this.$message.info("删除失败")
				})
			},
			edituser(id,index){
				this.$store.commit("user/setuser",{id,index})
				this.$store.commit("user/edituser",{editStatus:true})
			},
			selectionChange(select){
				const ids=select.map(ids=>ids.id);
				this.$store.commit("user/selectids",ids);
			}
		}
	}
</script>

<style>

</style>
