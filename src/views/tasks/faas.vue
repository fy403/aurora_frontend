<template>
    <div class="app-container">
        <div style="width: 400px;margin-bottom: 20px;text-align: left;">
            <el-input style="width: 300px;" placeholder="请输入内容" prefix-icon="el-icon-search"
                v-model="search_input"></el-input>
            <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </div>

        <el-table :data="tableData" border style="width: 100%"
            ref="topicTable">
            <el-table-column fixed prop="driver" label="驱动" align="center" width="150px">
            </el-table-column>
            <el-table-column prop="function_name" label="函数名称" align="center" width="150px">
                <template slot-scope="scope">
                    <el-tag>{{ scope.row.function_name }}</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="function_id" label="函数ID" align="center">
            </el-table-column>
            <el-table-column prop="description" label="描述" align="center">
            </el-table-column>
            <el-table-column prop="timestamp" label="时间戳" align="center"  width="150px">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { Notification } from 'element-ui';
import { list } from '@/api/faas';
export default {
    components: {
    },
    created() {
        this.initData()
    },
    data() {
        return {
            search_input: '',
            tableData: [],
        }
    },
    watch: {
    },
    computed: {
    },
    methods: {
        initData() {
            list().then(res => {
                if (res.message == '') {
                    this.tableData = res.data
                } else {
                    Notification.error({
                        title: 'some error happened: '+res.message,
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