    <template>
        <section>
        <div class="custom-tree-container">
        <div class="block">
            <el-tree
            :data="data4"
            lazy
            show-checkbox
            node-key="id"
            @node-click="handleNodeClick"
            :expand-on-click-node="false"
            :render-content="renderContent">
            </el-tree>
        </div>
        <el-button @click="test">1111</el-button>
        </div>
    </section>
    </template>
<script>
    export default {
        data() {
            return {
                data4: [],
                parentId: '',
                areaFlag: false
            };
        },
        methods: {
        loadNode(node, resolve) {
            this.areaFlag = false;
            console.log(node);
            if (node.level !== 0) {
              this.parentId = node.data.id;
            }
            this.remoteMethod();

            setTimeout(() => {
              if (this.areaFlag) {
                resolve(this.areas);
              }
            }, 500);
          },
          test() {
            let param = {
              orgCode: -1
            };
            this.$http.post('/sum/sumOrg/findNodeByParentCode', param)
            .then(res => {
              let {code, data} = res;
               if (code === 20000) {
                 this.data4 = data;
               }
            });
          },
        sendmesg() {
    
        },
       append(data) {
        const newChild = { id: 0, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },

      renderContent(h, { node, data, store }) {
        console.log(node);
        console.log(data);
        console.log(store);
        return (
          <span class="custom-tree-node">
            <span>{data.fullName}</span>
            <span class="tree-input">
             <el-input v-model='data.remarks'></el-input>
            </span>
            <span class="tree-button">
            <el-button icon="el-icon-circle-plus-outline" size="mini" type="text" on-click={ () => this.append(data) }></el-button>
            <el-button icon="el-icon-delete" size="mini" type="text" on-click={ () => this.remove(node, data) }></el-button>
            </span>
          </span>);
      }
    }
  };
</script>
<style lang="scss">
     .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 14px;
    padding-right: 8px;
    .tree-button{
        // margin-left: 20px;
    }
    .tree-input {
        float: right;
        opacity: 1;
        .el-input{
            display: flex;
            justify-content: flex-end;
            input{
            height: 20px;
            width: 50%;
        }
        }
    }
    .tree-input:hover{
        opacity: 1;
    }
  }
</style>
