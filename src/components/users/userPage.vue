<template>
	<el-pagination
  background
  layout="total,sizes,prev, pager, next,jumper"
	@current-change="currentChange"
	@size-change="sizeChange"
	:page-sizes=[10,20,30]
  :total="total">
</el-pagination>
</template>

<script>
	import bus from '../../bus'
	export default {
		data() {
			return {
				
			};
		},
		computed:{
			total(){
				return this.$store.state.user.total;
			}
		},
		methods:{
			currentChange(current){
				this.$store.commit("user/changePage",{page:current})
				bus.$emit("setUsers")
			},
			sizeChange(size){
				this.$store.commit("user/changePage",{pagesize:size})
				bus.$emit("setUsers")
			}
		}
	}
</script>

<style>

</style>
