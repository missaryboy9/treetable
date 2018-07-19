<template>
	<span class="tree-expand">
		<span v-show="!DATA.editable" 
		:class="[DATA.id.number ? 'tree-new tree-label' : 'tree-label']">
			<span>{{DATA.menuName}}</span>
		</span>
		<span class="tree-btn" v-show="!DATA.editable">
			<el-checkbox-group v-model="data">
    			<el-checkbox v-for="data in DATA.apis" :label="data.priname" :key="data.id" @click="handclickchange(NODE, DATA)" @change="handleCheckAllChange">{{data.priname}}</el-checkbox>
           </el-checkbox-group>
		</span>
	</span>
</template>

<script>
	export default {
		name: 'treeExpand',
		props: ['NODE', 'DATA'],
		data() {
			return {
				data: []
			};
		},
		methods: {
			handclickchange(n, d) {
				this.$emit('nodeclick', n, d);
			},
			handleCheckAllChange(v, d) {
				this.$emit('handlechange', v, d);
			},
			nodeAdd(s, d, n) {  // 新增
			this.$emit('nodeAdd', s, d, n);
			},
			nodeEdit(s, d, n) { // 编辑
				console.log(s, n, d);
				d.leaf = true;
				this.$nextTick(() => {
					this.$refs['treeInput' + d.orgCode].$refs.input.focus();
				});
				this.$emit('nodeEdit', s, d, n);
			},
			nodeDel(s, d, n) { // 删除
				this.$emit('nodeDel', s, d, n);
			},
			nodeEditPass(s, d, n) { // 编辑完成
				d.leaf = false;
			},
			nodeEditFocus() {
				alert(1); // 阻止点击节点的事件冒泡
			}
		}
	};
</script>

<style>
	.tree-expand{
		overflow:hidden;
	}
	.tree-expand .tree-label.tree-new{
		font-weight:900;
	}
	.tree-expand .tree-label{
		font-size:0.9em;
	}
	.tree-expand .tree-label .edit{
		width:80%;
	}
	.tree-expand .tree-btn{
		display:none;
		float:right;
		margin:0 20px 0 20px;
	}
	.tree-expand .tree-btn i{
		color:#8492a6;
		font-size:0.9em;
		margin-right:3px;
	}
</style>
