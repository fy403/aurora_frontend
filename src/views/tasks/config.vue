<template>
    <div class="app-container">
        <div style="width: 400px;margin-bottom: 20px;text-align: left;">
            <el-input style="width: 300px;" placeholder="请输入内容" prefix-icon="el-icon-search"
                v-model="search_input"></el-input>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
        <div style="margin-bottom: 30px;">
            <el-row>
                <el-button type="primary" plain>创建配置</el-button>
                <el-button type="warning" plain>删除配置</el-button>
            </el-row>
        </div>

        <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange"
            ref="topicTable">
            <el-table-column type="selection" width="55" align="center">
            </el-table-column>
            <el-table-column prop="id" label="ID" width="200" align="center">
            </el-table-column>
            <el-table-column type="expand" prop="cmd" label="启动命令" width="100px" align="center">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="Windows 启动命令">
                            <el-tag> {{ props.row.winCmd }} </el-tag>
                        </el-form-item>
                        <el-form-item label="Linux/Mac 启动命令">
                            <el-tag> {{ props.row.linuxCmd }} </el-tag>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="名称"  align="center">
            </el-table-column>
            <el-table-column prop="detail" label="细节"  align="center" width="500px">
            </el-table-column>
            <el-table-column prop="subscribe" label="订阅数"  align="center">
            </el-table-column>
            <el-table-column prop="timestamp" label="更新时间"  align="center">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="150">
                <template slot-scope="scope">
                    <el-button @click="checkClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="primary" size="mini" @click="editClick(scope.row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog title="worker实例" :visible.sync="dialogTableVisible">
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="活动名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="挂载句柄">
                    <el-link @click="changeSelectorVisible">查看<i class="el-icon-view el-icon--right"></i> </el-link>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">立即创建</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>

        <!-- <el-dialog title="句柄选择" :visible.sync="selectorVisible">
            <selector style="width: 100%;height: auto;"></selector>
        </el-dialog> -->

    </div>
</template>

<script>
import Selector from '@/components/Selector';
export default {
    components: {
        Selector,
    },
    methods: {
        handleClickSearch(row) {
            console.log(row)
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleChange(val) {
            console.log(val);
        },
        checkClick(row) {
            this.dialogTableVisible = true
            console.log(row);
        },
        editClick(row) {
            this.dialogTableVisible = true
            console.log(row)
        },
        onSubmit() {
            console.log('submit!');
        },
        changeSelectorVisible() {
            this.selectorVisible = true
        },
    },

    data() {
        return {
            multipleSelection: [],
            activeNames: ['1'],
            selectorVisible: false,
            dialogTableVisible: false,
            search_input: '',
            tableData: [{
                id: "4324-3243-2344-5299-2394",
                name: 'Image Recognition',
                detail: '专为图像识别定义的worker实例配置',
                subscribe: 3,
                timestamp: 1393423942,
                winCmd: 'aurora.exe worker --id 4324-3243-2344-5299-2394',
                linuxCmd: 'aurora worker --id 4324-3243-2344-5299-2394',
            },{
                id: "4324-3243-2344-5299-2395",
                name: 'Common Worker',
                detail: '通用定义的worker实例配置',
                subscribe: 5,
                timestamp: 1393423943,
                winCmd: 'aurora.exe worker --id 4324-3243-2344-5299-2395',
                linuxCmd: 'aurora worker --id 4324-3243-2344-5299-2395',
            }],
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    }
}
</script>

<style>
.form {
    z-index: 9;
    position: fixed;
    width: 630rpx;
    border-radius: 16rpx;
    padding: 20px 20px 20px 20px;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
}
</style>