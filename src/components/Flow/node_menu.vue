<template>
    <div class="flow-menu" ref="tool">
        <!-- workers -->
        <div>
            <span class="ef-node-pmenu" @click="worker_open = !worker_open"><i :class="{'el-icon-caret-bottom': worker_open,'el-icon-caret-right': !worker_open}"></i>&nbsp;Workers</span>
            <ul v-show="worker_open" class="node-menu-ul">
                <li v-for="(worker, idx) of workerList" class="node-menu-li" :key="worker.name" :type="worker.name">
                    <div style="font-size:10px;" @click="changeWorkerIdx(idx)">实例编号: {{worker.name}}</div> 
                    <div class="el-container" style="font-size:10px;align-items: center;margin-top: 10px;" >
                       标签
                        <div v-for="(val,key,idx) in worker.labels" :key="idx" style="margin-right: 5px;">
                            <el-tag type="error">{{ key }} : {{ val }}</el-tag>
                        </div>
                    </div>
                    
                </li>
            </ul>
        </div>
        <!-- handlers -->
        <div>
            <span class="ef-node-pmenu" @click="handler_open = !handler_open"><i :class="{'el-icon-caret-bottom': handler_open,'el-icon-caret-right': !handler_open}"></i>&nbsp;Handlers</span>
            <ul v-show="handler_open" class="ef-node-menu-ul">
                <div v-if="currWorkerIdx<=workerList.length-1&&currWorkerIdx>=0">
                    <draggable @end="end" @start="move" v-model="workerList[currWorkerIdx].handlers" :options="draggableOptions">
                            <li v-for="handler in workerList[currWorkerIdx].handlers" :key="handler.name" class="ef-node-menu-li" :type="handler.name">
                                <i class='el-icon-odometer'></i> {{handler.name}}
                            </li>
                    </draggable>
                </div>
            </ul>
        </div>
    </div>
</template>
<style>
.node-menu-ul{
    list-style: none;
    padding-left: 20px;
}
.node-menu-li:hover{
    /* 设置移动样式*/
    cursor: move;
    background-color: #F0F7FF;
    border: 1px solid #1879FF;
    border-left: 5px solid #1879FF;
    padding-left: 5px;
}
.node-menu-li{
    color: #565758;
    width: 150px;
    /* border: 1px dashed #E0E3E7; */
    margin: 5px 0 5px 0;
    padding: 5px;
    border-radius: 5px;
    padding-left: 8px;
}

</style>
<script>
    import draggable from 'vuedraggable'

    var mousePosition = {
        left: -1,
        top: -1
    }

    export default {
        data() {
            return {
                activeNames: '1',
                // draggable配置参数参考 https://www.cnblogs.com/weixin186/p/10108679.html
                draggableOptions: {
                    preventOnFilter: false,
                    sort: false,
                    disabled: false,
                    ghostClass: 'tt',
                    // 不使用H5原生的配置
                    forceFallback: true,
                    // 拖拽的时候样式
                    // fallbackClass: 'flow-node-draggable'
                },
                // 默认打开的左侧菜单的id
                defaultOpeneds: ['1', '2'],
                worker_open: true,
                handler_open: true,
                workerList: [],
                currWorkerIdx: 0,
                handler: {

                }
            }
        },
        components: {
            draggable
        },
        created() {
            /**
             * 以下是为了解决在火狐浏览器上推拽时弹出tab页到搜索问题
             * @param event
             */
            if (this.isFirefox()) {
                document.body.ondrop = function (event) {
                    // 解决火狐浏览器无法获取鼠标拖拽结束的坐标问题
                    mousePosition.left = event.layerX
                    mousePosition.top = event.clientY - 50
                    event.preventDefault();
                    event.stopPropagation();
                }
            }

            // 获取workerInfoData
            this.$store.dispatch('GetWorkerInfo').then(res=>{
                console.log('GetWorkerInfo ', res)
                res.map(worker => {
                    this.workerList.push({
                        name: worker.spec_queue,
                        labels: worker.labels,
                        handlers: worker.handlers,
                    })
                })
            }).catch(error=>{
                console.log("error", error)
            })
        },
        methods: {
            changeWorkerIdx(idx) {
                this.currWorkerIdx = idx
            }, 
            // 根据类型获取左侧句柄对象
            getHandleByType(type) {
                var handlers = this.workerList[this.currWorkerIdx].handlers
                for (let i = 0; i < handlers.length; i++) {
                    if (handlers[i].name === type) {
                        handlers[i].labelSelector = this.workerList[this.currWorkerIdx].labels
                        return handlers[i]
                    }
                }
            },
            // 拖拽开始时触发
            move(evt, a, b, c) {
                var type = evt.item.attributes.type.nodeValue
                this.handler = this.getHandleByType(type)
            },
            // 拖拽结束时触发
            end(evt, e) {
                this.$emit('addNode', evt, this.handler, mousePosition)
            },
            // 是否是火狐浏览器
            isFirefox() {
                var userAgent = navigator.userAgent
                if (userAgent.indexOf("Firefox") > -1) {
                    return true
                }
                return false
            }
        }
    }
</script>
