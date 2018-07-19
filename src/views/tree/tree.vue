<template>
  <div class="expand">
    <div>
        <el-button @click="test">测试数据</el-button>
        <el-tree 
        ref="expandMenuList" class="expand-tree"
        v-if="isLoadingTree"
        :data="setTree"
        node-key="id"
        highlight-current
        show-checkbox
        :expand-on-click-node="false"
        :render-content="renderContent"
        :default-checked-keys="efaultCheckedKeys"
        :default-expanded-keys="defaultExpandKeys"
        @node-click="handleNodeClick"
        @check-change="handleCheckChange">
        </el-tree>
      </div>
  </div>
</template>
<script>
import TreeRender from './tree_render';
import { treedata } from '@/mock/data/user.js';
import { recursive, recurrootnode } from './recursive.js';
// import api from './api';

  export default{
    name: 'tree',
    data() {
      return {
        isLoadingTree: false, // 是否加载节点树
        setTree: [], // 节点树数据
        defaultExpandKeys: [], // 默认展开节点列表
        efaultCheckedKeys: ['000001991', '001984681016'] // 默认选中的节点列表
      };
    },
    mounted() {
      this.initExpand();
      this.getlist();
      this.setTree = treedata;
    },
    methods: {
      test() {
        console.log(this.setTree);
        console.log(recurrootnode(this.setTree[0]));
      },
      handclick(n, d) {
        console.log(n, d);
      },
      handlechange(v) {
        console.log(v);
      },
      handleCheckChange(data, checked, indeterminate) {
        // console.log(data, checked, indeterminate);
        recursive(data, checked);
      },
      getlist(e) {
        let param = {orgCode: e === undefined ? -1 : e};
        this.$http.post('/sum/sumOrg/findNodeByParentCode', param)
        .then(res => {
          let {code, data} = res;
          if (code === 20000) {
            this.area = data;
          }
        })
        .catch(rej => {

        });
      },
      initExpand() {
        this.setTree.map((a) => {
          this.defaultExpandKeys.push(a);
        });
        this.isLoadingTree = true;
      },
      handleNodeClick(d, n, s) { // 点击节点
        // console.log(d, n, s);
        d.leaf = false;// 放弃编辑状态
      },
      renderContent(h, {node, data}) { // 加载节点
        let that = this;
        return h(TreeRender, {
          props: {
            DATA: data,
            NODE: node
          },
          on: {
            nodeAdd: (s, d, n) => that.handleAdd(s, d, n),
            nodeEdit: (s, d, n) => that.handleEdit(s, d, n),
            nodeDel: (s, d, n) => that.handleDelete(s, d, n),
            handlechange: (v) => that.handlechange(v),
            nodeclick: (n, d) => that.handclick(n, d)
          }
        });
      },
      // handleAddTop() {
      //   this.setTree.push({
      //     id: ++this.maxexpandId,
      //     name: '新增节点',
      //     pid: '',
      //     isEdit: false,
      //     children: []
      //   });
      // },
      handleAdd(s, d, n) { // 增加节点
        console.log(d);
        if (n.nodeLevel >= 6) {
          this.$message.error('最多只支持五级！');
          return false;
        }
        // 添加数据
        if (d.childNodes.length === 0) {
          alert(1);
          this.$set(d, 'childNodes', []);
        }
        // const newchild = {

        // }
        // d.childNodes.push({
        //    id: `${++this.maxexpandId}`,
        //     orgCode: ++this.maxexpandId,
        //     fullName: '新增节点',
        //     childNodes: []
        // });
        // 展开节点
        if (!n.expanded) {
          n.expanded = true;
        }
      },
      handleEdit(s, d, n) { // 编辑节点
        console.log(s, d, n);
      },
      handleDelete(s, d, n) { // 删除节点
        console.log(d);
        let that = this;
        // 有子级不删除
        if (d.childNodes && d.childNodes.length !== 0) {
          this.$message.error('此节点有子级，不可删除！');
          return false;
        } else {
          // 新增节点直接删除，否则要询问是否删除
          let delNode = () => {
            let list = n.parent.childNodes; // 节点同级数据
            let _index = list.findIndex(c => c.data.orgCode === d.orgCode);
            let k = list.splice(_index, 1);
            console.log(k);
            this.$message.success('删除成功！');
          };
          let isDel = () => {
            that.$confirm('是否删除此节点？', '提示', {
              confirmButtonText: '确认',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              delNode();
            }).catch(() => {
              return false;
            });
          };
          // 判断是否新增
          d.id > this.non_maxexpandId ? delNode() : isDel();
        }
      }
    }

  };
</script>

<style>
.expand{
  width:100%;
  height:100%;
  overflow:hidden;
}
.expand>div{
  height:85%;
  padding-top:20px;
  width:50%;
  margin:20px auto;
  max-width:400px;
  overflow-y:auto;
}
.expand>div::-webkit-scrollbar-track{
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  border-radius:5px;
}
.expand>div::-webkit-scrollbar-thumb{
  background-color:rgba(50, 65, 87, 0.5);
  outline:1px solid slategrey;
  border-radius:5px;
}
.expand>div::-webkit-scrollbar{
  width:10px;
}
.expand-tree{
  border:none;
  margin-top:10px;
}
.expand-tree .el-tree-node.is-current,
.expand-tree .el-tree-node:hover{
  overflow:hidden;
}
.el-tree {
  width: 800px;
}
.expand-tree .is-current>.el-tree-node__content .tree-btn,
.expand-tree .el-tree-node__content:hover .tree-btn{
  display:inline-block;
}
.expand-tree .is-current>.el-tree-node__content .tree-label{
  font-weight:600;
  white-space:normal;
}
</style>
