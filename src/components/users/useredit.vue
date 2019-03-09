<template>
	<!-- 信息编辑 -->
	<el-dialog title="信息编辑" :visible.sync="user.editStatus">
		<el-form ref="form" label-width="80px" v-if="user.user" :model="user.user">
			<el-form-item label="id">
				<el-input :value="user.user.id" :disabled="true"></el-input>
			</el-form-item>
			<el-form-item label="姓名">
				<el-input :value="user.user.name" @input="changename"></el-input>
			</el-form-item>
			<el-form-item label="年龄">
				<el-input :value="user.user.age"  @input="changeage"></el-input>
			</el-form-item>
			<el-form-item label="生日">
				<el-date-picker type="date" @input="changebirth" :value="user.user.birth" placeholder="选择日期" :picker-options="user.pickOptions" @change="dateChange" style="width: 100%;"></el-date-picker>
			</el-form-item>
			<el-form-item label="性别">
				<el-radio :value="user.user.sex" @input="changesex" :label="0">女</el-radio>
				<el-radio :value="user.user.sex" @input="changesex" :label="1">男</el-radio>
			</el-form-item>
			<el-form-item label="地址">
					<el-input :value="user.user.addr"  @input="changeaddr"></el-input>
			</el-form-item>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="editStatus">取 消</el-button>
			<el-button type="primary" @click="editenter" :loading="user.enterLoading">确 定</el-button>
		</div>
	</el-dialog>
</template>

<script>
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
			editStatus(editStatus){
				this.$store.commit("user/changeedituser",{editStatus:false})
			},
			async editenter(){
				this.$store.commit("user/changeedituser",{enterLoading:true})
				this.$store.dispatch("user/edituser")
				this.$store.commit("user/changeedituser",{editStatus:false})
				this.$store.commit("user/changeedituser",{enterLoading:false}),
				this.$message.success("编辑成功")
			},
			dateChange(){
				
			},
			changename(edit){
				this.$store.commit("user/changeuser",{name:edit})
			},
			changeage(edit){
				this.$store.commit("user/changeuser",{age:edit})
			},
			changebirth(edit){
				const t=new Date(edit);
				const birth=`${t.getFullYear()}-${(t.getMonth()+1)<10?'0'+(t.getMonth()+1):(t.getMonth()+1)}-${t.getDate()<10?'0'+t.getDate():t.getDate()}`;
				const age=new Date().getFullYear()-t.getFullYear();
				this.$store.commit("user/changeuser",{birth})
				this.$store.commit("user/changeuser",{age})
			},
			changesex(edit){
				this.$store.commit("user/changeuser",{sex:edit})
			},
			changeaddr(edit){
				this.$store.commit("user/changeuser",{addr:edit})
			},
		}
	}
</script>

<style>

</style>
