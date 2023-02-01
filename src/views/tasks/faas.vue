<template>
    <div class="app-container">
        <div style="width: 400px;margin-bottom: 20px;text-align: left;">
            <el-input style="width: 300px;" placeholder="请输入内容" prefix-icon="el-icon-search"
                v-model="search_input"></el-input>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>
        <div style="margin-bottom: 30px;">
            <el-row>
                <el-button type="success" :loading="loading.create" @click="createFS" plain>创建</el-button>
                <el-button type="primary" :loading="loading.up" @click="deployFS" plain>部署</el-button>
                <el-button type="warning" :loading="loading.del" @click="delFS" plain>删除</el-button>
            </el-row>
        </div>

        <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange"
            ref="topicTable">
            <el-table-column type="selection" width="55" align="center">
            </el-table-column>
            <el-table-column fixed prop="driver" label="驱动" align="center" width="150px">
            </el-table-column>
            <el-table-column prop="name" label="名称" align="center" width="150px">
            </el-table-column>
            <el-table-column prop="lang" label="语言" align="center" width="150px">
            </el-table-column>
            <!-- <el-table-column prop="status" label="状态">
            </el-table-column> -->

            <el-table-column prop="status" label="状态" width="100" align="center">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.status == 'UP' ? 'success' : 'primary'" disable-transitions>{{
                        scope.row.status
                    }}</el-tag>
                </template>
            </el-table-column>

            <el-table-column  prop="url" label="调用URL" align="center">
                <template slot-scope="scope">
                    {{ scope.row.url }}
                    <el-button @click="onlineClick(scope.row)" type="text" size="small">测试</el-button>
                </template>
            </el-table-column>

            <el-table-column prop="timestamp" label="时间戳" align="center">
            </el-table-column>

            <el-table-column fixed="right" label="操作" width="150">
                <template slot-scope="scope">
                    <el-button @click="checkClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="primary" size="mini" @click="editClick(scope.row)">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 创建弹窗 -->
        <el-dialog title="创建句柄" :visible.sync="dialogTableVisible.createFSWin">
            <el-form ref="form" :model="form.createFSWin" label-width="100px">
                <el-form-item label="句柄名称">
                    <el-input v-model="form.createFSWin.name"></el-input>
                </el-form-item>
                <el-form-item label="驱动和语言">
                    <el-cascader v-model="driverAndLang" placeholder="试试搜索: go" :options="options"
                        filterable></el-cascader>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" :loading="loading.createFS" @click="createFSOnSubmit">立即创建</el-button>
                    <!-- <el-button>取消</el-button> -->
                </el-form-item>
            </el-form>
        </el-dialog>
        <!-- 编辑弹窗 -->
        <el-dialog title="句柄实例" :visible.sync="dialogTableVisible.editWin">
            <el-form ref="form" :model="form.editWin" label-width="80px">
                <el-form-item label="名称">
                    <el-input v-model="form.editWin.name" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="定义">
                    <el-link @click="changeSelectorVisible('ctn')">查看<i class="el-icon-view el-icon--right"></i>
                    </el-link>
                </el-form-item>
                <el-form-item label="依赖">
                    <el-link @click="changeSelectorVisible('dpt')">查看<i class="el-icon-view el-icon--right"></i>
                    </el-link>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" :loading="loading.editFS" @click="EditFSOnSubmit">更新</el-button>
                    <!-- <el-button>取消</el-button> -->
                </el-form-item>
            </el-form>
        </el-dialog>
        <!-- 编辑器 -->
        <el-dialog title="句柄内容编辑器" :visible.sync="codeEditorVisible.content" >
            <code-editor v-model="form.editWin.content" :copy_code="true" :languages="codeLang" width="100%"
                height="500px" :display_language="false"></code-editor>
        </el-dialog>

        <el-dialog title="句柄依赖编辑器" :visible.sync="codeEditorVisible.dependencies" >
            <code-editor v-model="form.editWin.dependencies" :copy_code="true" :languages="codeLang" width="100%"
                height="500px" :display_language="false"></code-editor>
        </el-dialog>

    </div>
</template>

<script>
import CodeEditor from 'simple-code-editor';
import { Base64 } from 'js-base64'
// import { string2byte } from '@/utils/byte2string'
import { Notification } from 'element-ui';
import { list, langs, create, up, write, del } from '@/api/faas';
export default {
    components: {
        CodeEditor,
    },
    created() {
        this.initData()
    },
    data() {
        return {
            search_input: '',

            loading: {
                create: false,
                up: false,
                del: false,
                createFS: false,
                editFS: false,
            },
            dialogTableVisible: {
                createFSWin: false,
                editWin: false,
            },

            codeEditorVisible: {
                content: false,
                dependencies: false,
            },
            codeLang: [],
            codeLangsMap: [['go', 'golang-http'], ['go', 'golang-middleware'], ['go', 'go'], ['python', 'python'], ['python', 'python3'], ['javascript', "node"]],
            driverAndLang: [],
            multipleSelection: [],
            tableData: [],
            form: {
                createFSWin: {
                    name: '',
                    driver: '',
                    lang: '',
                },
                editWin: {
                    uuid: '',
                    driver: '',
                    name: '',
                    lang: '',
                    content: '',
                    dependencies: '',
                },
            },
            options: [],
        }
    },
    watch: {
        driverAndLang: {
            handler: function (oldV, newV) {
                if (oldV.length > 0) {
                    this.form.createFSWin.driver = oldV[0];
                }
                if (oldV.length > 1) {
                    this.form.createFSWin.lang = oldV[1];
                }
                console.log(this.form);
            },
        },
        form: {
            handler: function (oldV, newV) {
                if (this.form.editWin.lang.length > 0) {
                    for (let i = 0; i < this.codeLangsMap.length; i++) {
                        if (this.codeLangsMap[i][1] == oldV.editWin.lang) {
                            this.$nextTick(()=>{
                                this.codeLang = [this.codeLangsMap[i]]
                            })
                            return
                        }
                    }
                }
            },
            deep: true,
            immediate: true,
        }
    },
    computed: {
    },
    methods: {
        createFS() {
            this.loading.createFS = false
            this.dialogTableVisible.createFSWin = true
        },
        createFSOnSubmit() {
            // 数据校验
            if (this.form.createFSWin.driver == '' ||
                this.form.createFSWin.lang == '' ||
                this.form.createFSWin.name == '') {

                Notification.error({
                    title: "提交数据不能为空值",
                    duration: 5000,
                })
                return
            }
            this.loading.createFS = true
            create(this.form.createFSWin).then(res => {
                if (res.message == '') {
                    this.dialogTableVisible.createFSWin = false
                    this.initData()
                    // 复原
                    this.driverAndLang = []
                    this.form.createFSWin = {
                        name: '',
                        driver: '',
                        lang: '',
                    }
                } else {
                    Notification.error({
                        title: res.message,
                        duration: 5000,
                    })
                }
            }).catch(err => {
                Notification.error({
                    title: err,
                    duration: 5000,
                })
            }).finally(() => {
                this.loading.createFS = false
            })
        },

        deployFS() {
            this.loading.up = true
            var requests = []
            this.multipleSelection.map(instance => {
                var data = {
                    driver: instance.driver,
                    name: instance.name,
                    uuid: instance.uuid,
                }
                requests.push(up(data))
            })
            Promise.all(requests).then(results => {
                results.map(res => {
                    if (res.message != '') {
                        Notification.error({
                            title: "实例部署失败：" + res.message,
                            duration: 5000,
                        })
                    } else {
                        this.initData()
                    }
                })
            }).catch(err => {
                Notification.error({
                    title: err,
                    duration: 5000,
                })
            }).finally(() => {
                this.loading.up = false
            })
        },
        delFS() {
            this.loading.del = true
            this.multipleSelection.map(instance => {
                var data = {
                    driver: instance.driver,
                    name: instance.name,
                    uuid: instance.uuid,
                }
                del(data).then(res => {
                    if (res.message != '') {
                        Notification.error({
                            title: "实例：" + data.name + " 删除失败：" + res.message,
                            duration: 5000,
                        })
                    } else {
                        this.initData()
                    }
                }).catch(err => {
                    Notification.error({
                        title: err,
                        duration: 5000,
                    })
                })
            })
            this.loading.del = false
        },
        EditFSOnSubmit() {
            // 数据校验
            if (this.form.editWin.uuid == '' ||
                this.form.editWin.content == '' ||
                this.form.editWin.dependencies == '') {

                Notification.error({
                    title: "提交数据不能为空值",
                    duration: 5000,
                })
                return
            }
            this.loading.editFS = true
            var data = this.form.editWin
            data.content = Base64.encode(data.content)
            data.dependencies = Base64.encode(data.dependencies)
            write(data).then(res => {
                if (res.message == '') {
                    this.dialogTableVisible.editWin = false
                    this.initData()
                } else {
                    Notification.error({
                        title: res.message,
                        duration: 5000,
                    })
                }
            }).catch(err => {
                Notification.error({
                    title: err,
                    duration: 5000,
                })
            }).finally(() => {
                this.loading.editFS = false
            })
        },
        checkClick(row) {
            // this.dialogTableVisible.editWin = true
            // console.log(row);
            this.editClick(row)
        },
        editClick(row) {
            this.loading.editFS = false
            this.dialogTableVisible.editWin = true
            this.form.editWin.uuid = row.uuid
            this.form.editWin.driver = row.driver
            this.form.editWin.name = row.name
            this.form.editWin.lang = row.lang
            this.form.editWin.content = row.content
            this.form.editWin.dependencies = row.dependencies
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
            console.log(this.multipleSelection)
        },
        initData() {
            list().then(res => {
                if (res.message == '') {
                    res.data.forEach(item => {
                        item.content = Base64.decode(item.content)
                        item.dependencies = Base64.decode(item.dependencies)
                    });
                    this.tableData = res.data
                } else {
                    Notification.error({
                        title: res.message,
                        duration: 5000,
                    })
                }
            }).catch(err => {
                Notification.error({
                    title: err,
                    duration: 5000,
                })
            })

            langs().then(res => {
                if (res.message == '') {
                    this.options = []
                    // 数据加工
                    let data = res.data
                    for (let faas in data) {
                        let option = {
                            value: '',
                            label: '',
                            children: [],
                        }
                        option.label = faas
                        option.value = faas
                        for (let langIdx in data[faas]) {
                            option.children.push({
                                value: data[faas][langIdx],
                                label: data[faas][langIdx],
                            })
                        }
                        this.options.push(option)
                    }
                } else {
                    Notification.error({
                        title: res.message,
                        duration: 5000,
                    })
                }
            }).catch(err => {
                Notification.error({
                    title: err,
                    duration: 5000,
                })
            })
        },
        changeSelectorVisible(type) {
            if (type == 'ctn') {
                this.codeEditorVisible.content = true
            } else {
                this.codeEditorVisible.dependencies = true
            }
        },
    },

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