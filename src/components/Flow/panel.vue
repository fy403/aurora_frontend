<template>
    <div v-if="easyFlowVisible" style="height: calc(100vh);">
        <el-row>
            <!--顶部工具菜单-->
            <el-col :span="24">
                <div class="ef-tooltar">
                    <el-input v-model="data.name" style="width: auto;"></el-input>
                    <el-divider direction="vertical"></el-divider>
                    <el-button type="text" icon="el-icon-delete" size="large" @click="deleteElement" :disabled="!this.activeElement.type"></el-button>
                    <el-divider direction="vertical"></el-divider>
                    <el-button type="text" icon="el-icon-download" size="large" @click="downloadData"></el-button>
                    <el-divider direction="vertical"></el-divider>
                    <el-button type="text" icon="el-icon-plus" size="large" @click="zoomAdd"></el-button>
                    <el-divider direction="vertical"></el-divider>
                    <el-button type="text" icon="el-icon-minus" size="large" @click="zoomSub"></el-button>
                    <div style="float: right;margin-right: 5px">
                        <!-- <el-button type="info" plain round icon="el-icon-document" @click="dataInfo" size="mini">流程信息</el-button> -->
                        <!-- <el-button type="primary" plain round @click="dataReloadA" icon="el-icon-refresh" size="mini">切换流程A</el-button>
                        <el-button type="primary" plain round @click="dataReloadB" icon="el-icon-refresh" size="mini">切换流程B</el-button>
                        <el-button type="primary" plain round @click="dataReloadC" icon="el-icon-refresh" size="mini">切换流程C</el-button>
                        <el-button type="primary" plain round @click="dataReloadD" icon="el-icon-refresh" size="mini">自定义样式</el-button> -->
                        <!-- <el-button type="primary" plain round @click="dataReloadE" icon="el-icon-refresh" size="mini">力导图</el-button> -->
                        <el-button type="info" plain round icon="el-icon-document" @click="openHelp" size="mini">帮助</el-button>
                        <label for="upload" class="upload_file">导入</label>
                        <input type="file" style="display: none;" id="upload" @change="taskImport"/>
                        <el-button type="primary" @click="taskExport">导出</el-button>
                        <el-button type="primary" :disabled="centerResponse==null?true:false" @click="taskTouch(null)">查询任务</el-button>
                        <el-button type="primary" :loading="send_abort" @click="taskSend">提交任务</el-button>
                        <!-- <el-button type="primary" @click="taskTouch">查询任务</el-button> -->
                    </div>

                </div>
            </el-col>
        </el-row>
        <!-- 主体 -->
        <div style="display: flex;height: calc(100% - 47px);">
            <!-- 侧边菜单 -->
            <div style="width: 230px;border-right: 1px solid #dce3e8;">
                <node-menu @addNode="addNode" ref="handler"></node-menu>
            </div>
            <div id="efContainer" @click="otherClick" ref="efContainer" class="container" v-flowDrag>
                <template v-for="node in data.nodeList">
                    <flow-node
                            :id="node.id"
                            :key="node.id"
                            :node="node"
                            :activeElement="activeElement"
                            @changeNodeSite="changeNodeSite"
                            @nodeRightMenu="nodeRightMenu"
                            @clickNode="clickNode"
                    >
                    </flow-node>
                </template>
                <!-- 给画布一个默认的宽度和高度 -->
                <div style="position:absolute;top: 2000px;left: 2000px;">&nbsp;</div>
            </div>
            <!-- 右侧表单 -->
            <div v-show="activeElement.nodeId != undefined" style="width: 300px;border-left: 1px solid #dce3e8;background-color: #FBFBFB">
                <flow-node-form ref="nodeForm" @setLineLabel="setLineLabel" @repaintEverything="repaintEverything"></flow-node-form>
            </div>
        </div>
        <!-- 流程数据详情 -->
        <flow-info v-if="flowInfoVisible" ref="flowInfo" :data="data"></flow-info>
        <flow-help v-if="flowHelpVisible" ref="flowHelp"></flow-help>
    </div>

</template>

<script>
    import draggable from 'vuedraggable'
    // import { jsPlumb } from 'jsplumb'
    // 使用修改后的jsplumb
    import './jsplumb'
    import { easyFlowMixin } from '@/components/Flow/mixins'
    import flowNode from '@/components/Flow/node'
    import nodeMenu from '@/components/Flow/node_menu'
    import FlowInfo from '@/components/Flow/info'
    import FlowHelp from '@/components/Flow/help'
    import FlowNodeForm from './node_form'
    import lodash from 'lodash'
    import { getDataA } from './data_A'
    import { getDataB } from './data_B'
    import { getDataC } from './data_C'
    import { getDataD } from './data_D'
    import { getDataE } from './data_E'
    import { ForceDirected } from './force-directed'
    import { send, touch } from '@/api/task'
    import { Notification } from 'element-ui'
    import { read } from 'fs'
    export default {
        data() {
            return {
                // jsPlumb 实例
                jsPlumb: null,
                // 控制画布销毁
                easyFlowVisible: true,
                // 控制流程数据显示与隐藏
                flowInfoVisible: false,
                // 是否加载完毕标志位
                loadEasyFlowFinish: false,
                flowHelpVisible: false,
                // 数据
                data: {
                    name: '新流程',
                    nodeList: [],
                    lineList: [],
                },
                // 激活的元素、可能是节点、可能是连线
                activeElement: {
                    // 可选值 node 、line
                    type: undefined,
                    // 节点ID
                    nodeId: undefined,
                    // 连线ID
                    sourceId: undefined,
                    targetId: undefined
                },
                zoom: 0.5,
                send_abort: false,
                // 任务数据
                centerResponse: null,
                interval: 2000,
            }
        },
        // 一些基础配置移动该文件中
        mixins: [easyFlowMixin],
        components: {
            draggable, flowNode, nodeMenu, FlowInfo, FlowNodeForm, FlowHelp
        },
        directives: {
            'flowDrag': {
                bind(el, binding, vnode, oldNode) {
                    if (!binding) {
                        return
                    }
                    el.onmousedown = (e) => {
                        if (e.button == 2) {
                            // 右键不管
                            return
                        }
                        //  鼠标按下，计算当前原始距离可视区的高度
                        let disX = e.clientX
                        let disY = e.clientY
                        el.style.cursor = 'move'

                        document.onmousemove = function (e) {
                            // 移动时禁止默认事件
                            e.preventDefault()
                            const left = e.clientX - disX
                            disX = e.clientX
                            el.scrollLeft += -left

                            const top = e.clientY - disY
                            disY = e.clientY
                            el.scrollTop += -top
                        }

                        document.onmouseup = function (e) {
                            el.style.cursor = 'auto'
                            document.onmousemove = null
                            document.onmouseup = null
                        }
                    }
                }
            }
        },
        mounted() {
            this.jsPlumb = jsPlumb.getInstance()
            this.$nextTick(() => {
                // 默认加载流程A的数据、在这里可以根据具体的业务返回符合流程数据格式的数据即可
                // this.dataReload(getDataB())
                this.dataReload(this.data)
            })
        },
        methods: {
            generateTaskRequest(){
                console.log("data: ", this.data)
                var signatures = []
                var relations = []
                var error = null
                this.data.nodeList.map(node => {
                    let args = []
                    if (node.inArgs){
                        node.inArgs.map(arg => {
                            let splitValue = []
                            let type = arg.type
                            splitValue.push(arg.value)
                            if (arg.type.includes('[]')){
                                if (arg.value==null || arg.value.length==0){
                                    Notification.error({
                                        title: node.name+"的参数值不能为空",
                                        duration: 5000,
                                    })
                                    error = new Error('错误')
                                    return
                                }
                                splitValue = arg.value.split(',')
                                type = arg.type.split('[]')[1]
                            }else{
                                if(arg.value.indexOf(',') != -1) {
                                    Notification.error({
                                        title: node.name+"的参数不是数组",
                                        duration: 5000,
                                    })
                                    error = new Error('错误')
                                    return
                                }
                            }
                            if (arg.type.includes('int')){
                                splitValue.forEach(( _,idx)=>{
                                    splitValue[idx] = Number(splitValue[idx])
                                })
                            }else if (arg.type.includes('float')){
                                splitValue.forEach(( _,idx)=>{
                                    splitValue[idx] = Number(splitValue[idx])
                                })
                            }else if (arg.type.includes('bool')){
                                splitValue.forEach(( _,idx)=>{
                                    splitValue[idx] = Boolean(splitValue[idx])
                                })
                            }else{

                            }
                            splitValue.map(val=>{
                                args.push({
                                type: type,
                                value: val,
                                })
                            })
                        })
                    }
                    signatures.push({
                        id: node.id,
                        name: node.name,
                        args: args,
                        label_selector: node.label_selector,
                    })
                })

                if (error != null) {
                    return null
                }
                this.data.lineList.map(line => {
                    let src = this.getIdxById(line.from)
                    let dst = this.getIdxById(line.to)
                    if (src == -1 || dst == -1) return;
                    let relation = {}
                    relation[Number(src)] = dst
                    relations.push(relation)
                })
                var centerRequest = {
                    task_type: 'graph',
                    timestamp: Math.round(new Date().getTime()/1000),
                    signatures: signatures,
                    relations: relations,
                    timeout_duration: 5000,
                    sleep_duration: 500,
                }
                return centerRequest
            },
            getIdxById(id) {
                for(let i=0; i<this.data.nodeList.length; i++) {
                    if (this.data.nodeList[i].id === id) {
                        return i
                    }
                }
                return -1
            },
            taskImport(event){
                let file = event.target.files[0];
                let reader = new FileReader();
                reader.readAsText(file)
                reader.onload = e=> {
                    var data = JSON.parse(e.target.result)
                    if (data !== null && typeof data === 'object' && 'name' in data && 'nodeList' in data && 'lineList' in data){
                        this.$nextTick(() => {
                            this.dataReload(data)
                        })
                    }else{
                        Notification.error({
                            title: '文件格式不规范',
                            duration: 5000,
                        })
                    }
                }
            },
            taskExport(){
                this.myExport(this.data.name+'.js', JSON.stringify(this.data))
            },
            myExport(name, data) {
                var urlObject = window.URL || window.webkitURL || window;
                var myFile = new Blob([data]);
                var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a");
                save_link.href = urlObject.createObjectURL(myFile);
                save_link.download = name;
                this.fake_click(save_link);
            },
            fake_click(obj) {
                var ev = document.createEvent("MouseEvents");
                ev.initMouseEvent(
                    "click", true, false, window, 0, 0, 0, 0, 0
                    , false, false, false, false, 0, null
                );
                obj.dispatchEvent(ev);
            },
            taskSend(){
                // 校验
                if (this.data.nodeList.length == 0) {
                    this.$message({
                        message: '节点数不能为零',
                        type: 'warning'
                    });
                    return
                }
                this.initState()
                this.send_abort = true
                // 生成请求格式
                var centerRequest = this.generateTaskRequest()
                if (centerRequest == null) {
                    this.send_abort = false
                    return
                }
                // 发送请求
                console.log("SendTask: ", centerRequest)

                send(centerRequest).then(res=>{
                    if (res.message != '' && res.message != 'continue') {
                        this.$message.error(res.message)
                        this.send_abort = false
                        return
                    }
                    this.updateState(res.data)
                    if (res.message == 'continue') {
                         // 整体没结束，继续touch
                         this.centerResponse = res.data
                        this.taskTouch(res.data)
                    }
                }).catch(error=>{
                    this.$message.error(error)
                    this.send_abort = false
                })
            },
            taskTouch(centerResponse){
                if (centerResponse == null) {
                    centerResponse = this.centerResponse
                }
                var timer = setInterval(()=>{
                    // 构建touch请求
                    let signatures = []
                    let callback;
                    if (centerResponse.task_type == 'group' || centerResponse.task_type == 'graph') {
                        centerResponse.task_responses.map(response => {
                            signatures.push(...response.signatures)
                        })
                    } else {
                        signatures = centerResponse.task_responses[0].signatures
                    }

                    if (centerResponse.task_type == 'chord') {
                        callback = centerResponse.task_responses[0].callBack
                    } else {
                        callback = null
                    }

                    let centerRequest = {
                        batch_id:    centerResponse.batch_id,
                        timestamp: Math.round(new Date().getTime()/1000),
                        task_type:   centerResponse.task_type,
                        signatures: signatures,
                        callBack:   callback,
                    }
                    // 发送请求
                    console.log("touchTask: ", centerRequest)
                    touch(centerRequest).then(res=>{
                        if (res.message != '' && res.message != 'continue') {
                            clearInterval(timer)
                            Notification.error({
                                title: res.message,
                                duration: 10000,
                            })
                            return
                        }
                        if (res.message == '') {
                            this.updateState(res.data)
                            clearTimeout(timer)
                        }
                    }).catch(error=>{
                        clearInterval(timer)
                        Notification.error({
                                title: error,
                                duration: 10000,
                            })
                    })
                }, this.interval)
            },
            updateState(centerResponse) {
                console.log('updateState')
                console.log("centerResponse", centerResponse)
                this.send_abort = false
                centerResponse.task_responses.map((response, index)=>{
                    for(let i=0; i<response.signatures.length; i++) {
                        let idx = this.getIdxById(response.signatures[i].id)
                        if (idx == -1) continue;
                        let newState = 'running'
                        switch (response.state) {
                            case 'SUCCESS':
                                newState = 'success';
                                this.data.nodeList[idx].results = response.results
                                break;
                            case 'PENDING':
                            case "RETRY": 
                            case "RECEIVED":
                            case 'STARTED':
                                newState = 'running';
                                break;
                            case "FAILURE":
                                newState = 'error';
                                break;
                            default:
                                newState = 'error';
                        }
                        this.data.nodeList[idx].state = newState
                    }
                })
            },
            initState(){
                this.data.nodeList.forEach(node=>{
                    node.state='running'
                })
            },
            otherClick(event){
                console.log(event)
                if (event.target.className == 'container'){
                    this.activeElement.nodeId = undefined   
                }
            },
            // 返回唯一标识
            getUUID() {
                return Math.random().toString(36).substr(3, 10)
            },
            jsPlumbInit() {
                this.jsPlumb.ready(() => {
                    // 导入默认配置
                    this.jsPlumb.importDefaults(this.jsplumbSetting)
                    // 会使整个jsPlumb立即重绘。
                    this.jsPlumb.setSuspendDrawing(false, true);
                    // 初始化节点
                    this.loadEasyFlow()
                    // 单点击了连接线, https://www.cnblogs.com/ysx215/p/7615677.html
                    this.jsPlumb.bind('click', (conn, originalEvent) => {
                        this.activeElement.type = 'line'
                        this.activeElement.sourceId = conn.sourceId
                        this.activeElement.targetId = conn.targetId
                        this.$refs.nodeForm.lineInit({
                            from: conn.sourceId,
                            to: conn.targetId,
                            label: conn.getLabel()
                        })
                    })
                    // 连线
                    this.jsPlumb.bind("connection", (evt) => {
                        let from = evt.source.id
                        let to = evt.target.id
                        if (this.loadEasyFlowFinish) {
                            this.data.lineList.push({from: from, to: to})
                        }
                    })

                    // 删除连线回调
                    this.jsPlumb.bind("connectionDetached", (evt) => {
                        this.deleteLine(evt.sourceId, evt.targetId)
                    })

                    // 改变线的连接节点
                    this.jsPlumb.bind("connectionMoved", (evt) => {
                        this.changeLine(evt.originalSourceId, evt.originalTargetId)
                    })

                    // 连线右击
                    this.jsPlumb.bind("contextmenu", (evt) => {
                        console.log('contextmenu', evt)
                    })

                    // 连线
                    this.jsPlumb.bind("beforeDrop", (evt) => {
                        let from = evt.sourceId
                        let to = evt.targetId
                        if (from === to) {
                            this.$message.error('节点不支持连接自己')
                            return false
                        }
                        if (this.hasLine(from, to)) {
                            this.$message.error('该关系已存在,不允许重复创建')
                            return false
                        }
                        if (this.hashOppositeLine(from, to)) {
                            this.$message.error('不支持两个节点之间连线回环');
                            return false
                        }
                        this.$message.success('连接成功')
                        return true
                    })

                    // beforeDetach
                    this.jsPlumb.bind("beforeDetach", (evt) => {
                        console.log('beforeDetach', evt)
                    })
                    this.jsPlumb.setContainer(this.$refs.efContainer)
                })
            },
            // 加载流程图
            loadEasyFlow() {
                // 初始化节点
                for (var i = 0; i < this.data.nodeList.length; i++) {
                    let node = this.data.nodeList[i]
                    // 设置源点，可以拖出线连接其他节点
                    this.jsPlumb.makeSource(node.id, lodash.merge(this.jsplumbSourceOptions, {}))
                    // // 设置目标点，其他源点拖出的线可以连接该节点
                    this.jsPlumb.makeTarget(node.id, this.jsplumbTargetOptions)
                    if (!node.viewOnly) {
                        this.jsPlumb.draggable(node.id, {
                            containment: 'parent',
                            stop: function (el) {
                                // 拖拽节点结束后的对调
                                console.log('拖拽结束: ', el)
                            }
                        })
                    }
                }
                // 初始化连线
                for (var i = 0; i < this.data.lineList.length; i++) {
                    let line = this.data.lineList[i]
                    var connParam = {
                        source: line.from,
                        target: line.to,
                        label: line.label ? line.label : '',
                        connector: line.connector ? line.connector : '',
                        anchors: line.anchors ? line.anchors : undefined,
                        paintStyle: line.paintStyle ? line.paintStyle : undefined,
                    }
                    this.jsPlumb.connect(connParam, this.jsplumbConnectOptions)
                }
                this.$nextTick(function () {
                    this.loadEasyFlowFinish = true
                })
            },
            /**
             * 拖拽结束后添加新的节点
             * @param evt
             * @param handler 被添加的节点对象
             * @param mousePosition 鼠标拖拽结束的坐标
             */
            addNode(evt, handler, mousePosition) {
                var screenX = evt.originalEvent.clientX, screenY = evt.originalEvent.clientY
                let efContainer = this.$refs.efContainer
                var containerRect = efContainer.getBoundingClientRect()
                var left = screenX, top = screenY
                // 计算是否拖入到容器中
                if (left < containerRect.x || left > containerRect.width + containerRect.x || top < containerRect.y || containerRect.y > containerRect.y + containerRect.height) {
                    this.$message.error("请把节点拖入到画布中")
                    return
                }
                left = left - containerRect.x + efContainer.scrollLeft
                top = top - containerRect.y + efContainer.scrollTop
                // 居中
                left -= 85
                top -= 16
                var nodeId = this.getUUID()
                // 动态生成名字
                var origName = handler.name
                var nodeName = origName
                var index = 1
                // while (index < 10000) {
                //     var repeat = false
                //     for (var i = 0; i < this.data.nodeList.length; i++) {
                //         let node = this.data.nodeList[i]
                //         if (node.name === nodeName) {
                //             nodeName = origName + index
                //             repeat = true
                //         }
                //     }
                //     if (repeat) {
                //         index++
                //         continue
                //     }
                //     break
                // }
                this.initState()
                var node = {
                    id: nodeId,
                    name: nodeName,
                    type: 'task',
                    inArgs: handler.in_args,
                    outArgs: handler.out_args,
                    usage: handler.usage,
                    labelSelector: handler.labelSelector,
                    left: left + 'px',
                    top: top + 'px',
                    ico: 'el-icon-odometer',
                    state: 'running' // success running warning error
                }
                /**
                 * 这里可以进行业务判断、是否能够添加该节点
                 */
                this.data.nodeList.push(node)
                this.$nextTick(function () {
                    this.jsPlumb.makeSource(nodeId, this.jsplumbSourceOptions)
                    this.jsPlumb.makeTarget(nodeId, this.jsplumbTargetOptions)
                    this.jsPlumb.draggable(nodeId, {
                        containment: 'parent',
                        stop: function (el) {
                            // 拖拽节点结束后的对调
                            console.log('拖拽结束: ', el)
                        }
                    })
                })
            },
            /**
             * 删除节点
             * @param nodeId 被删除节点的ID
             */
            deleteNode(nodeId) {
                this.$confirm('确定要删除节点' + nodeId + '?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    closeOnClickModal: false
                }).then(() => {
                    /**
                     * 这里需要进行业务判断，是否可以删除
                     */
                    this.initState()
                    this.data.nodeList = this.data.nodeList.filter(function (node) {
                        if (node.id === nodeId) {
                            // 伪删除，将节点隐藏，否则会导致位置错位
                            // node.show = false
                            return false
                        }
                        return true
                    })
                    this.$nextTick(function () {
                        this.jsPlumb.removeAllEndpoints(nodeId);
                    })
                }).catch(() => {
                })
                return true
            },
            // 设置连线条件
            setLineLabel(from, to, label) {
                this.initState()
                var conn = this.jsPlumb.getConnections({
                    source: from,
                    target: to
                })[0]
                if (!label || label === '') {
                    conn.removeClass('flowLabel')
                    conn.addClass('emptyFlowLabel')
                } else {
                    conn.addClass('flowLabel')
                }
                conn.setLabel({
                    label: label,
                })
                this.data.lineList.forEach(function (line) {
                    if (line.from == from && line.to == to) {
                        line.label = label
                    }
                })

            },
            // 删除激活的元素
            deleteElement() {
                if (this.activeElement.type === 'node') {
                    this.deleteNode(this.activeElement.nodeId)
                } else if (this.activeElement.type === 'line') {
                    this.$confirm('确定删除所点击的线吗?', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.initState()
                        var conn = this.jsPlumb.getConnections({
                            source: this.activeElement.sourceId,
                            target: this.activeElement.targetId
                        })[0]
                        this.jsPlumb.deleteConnection(conn)
                    }).catch(() => {
                    })
                }
            },
            // 删除线
            deleteLine(from, to) {
                this.initState()
                this.data.lineList = this.data.lineList.filter(function (line) {
                    if (line.from == from && line.to == to) {
                        return false
                    }
                    return true
                })
            },
            // 改变连线
            changeLine(oldFrom, oldTo) {
                this.deleteLine(oldFrom, oldTo)
            },
            // 改变节点的位置
            changeNodeSite(data) {
                for (var i = 0; i < this.data.nodeList.length; i++) {
                    let node = this.data.nodeList[i]
                    if (node.id === data.nodeId) {
                        node.left = data.left
                        node.top = data.top
                    }
                }
            },
            clickNode(nodeId) {
                this.activeElement.type = 'node'
                this.activeElement.nodeId = nodeId
                this.$refs.nodeForm.nodeInit(this.data, nodeId)
            },
            // 是否具有该线
            hasLine(from, to) {
                for (var i = 0; i < this.data.lineList.length; i++) {
                    var line = this.data.lineList[i]
                    if (line.from === from && line.to === to) {
                        return true
                    }
                }
                return false
            },
            // 是否含有相反的线
            hashOppositeLine(from, to) {
                return this.hasLine(to, from)
            },
            nodeRightMenu(nodeId, evt) {
                this.menu.show = true
                this.menu.curNodeId = nodeId
                this.menu.left = evt.x + 'px'
                this.menu.top = evt.y + 'px'
            },
            repaintEverything() {
                this.jsPlumb.repaint()
            },
            // 流程数据信息
            dataInfo() {
                this.flowInfoVisible = true
                this.$nextTick(function () {
                    this.$refs.flowInfo.init()
                })
            },
            // 加载流程图
            dataReload(data) {
                this.easyFlowVisible = false
                this.data.nodeList = []
                this.data.lineList = []
                this.$nextTick(() => {
                    data = lodash.cloneDeep(data)
                    this.easyFlowVisible = true
                    this.data = data
                    this.initState()
                    this.$nextTick(() => {
                        this.jsPlumb = jsPlumb.getInstance()
                        this.$nextTick(() => {
                            this.jsPlumbInit()
                        })
                    })
                })
            },
            // 模拟载入数据dataA
            dataReloadA() {
                this.dataReload(getDataA())
            },
            // 模拟载入数据dataB
            dataReloadB() {
                this.dataReload(getDataB())
            },
            // 模拟载入数据dataC
            dataReloadC() {
                this.dataReload(getDataC())
            },
            // 模拟载入数据dataD
            dataReloadD() {
                this.dataReload(getDataD())
            },
            // 模拟加载数据dataE，自适应创建坐标
            dataReloadE() {
                let dataE = getDataE()
                let tempData = lodash.cloneDeep(dataE)
                let data = ForceDirected(tempData)
                this.dataReload(data)
                this.$message({
                    message: '力导图每次产生的布局是不一样的',
                    type: 'warning'
                });
            },
            zoomAdd() {
                if (this.zoom >= 1) {
                    return
                }
                this.zoom = this.zoom + 0.1
                this.$refs.efContainer.style.transform = `scale(${this.zoom})`
                this.jsPlumb.setZoom(this.zoom)
            },
            zoomSub() {
                if (this.zoom <= 0) {
                    return
                }
                this.zoom = this.zoom - 0.1
                this.$refs.efContainer.style.transform = `scale(${this.zoom})`
                this.jsPlumb.setZoom(this.zoom)
            },
            // 下载数据
            downloadData() {
                this.$confirm('确定要下载该流程数据吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                    closeOnClickModal: false
                }).then(() => {
                    var datastr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.data, null, '\t'));
                    var downloadAnchorNode = document.createElement('a')
                    downloadAnchorNode.setAttribute("href", datastr);
                    downloadAnchorNode.setAttribute("download", 'data.json')
                    downloadAnchorNode.click();
                    downloadAnchorNode.remove();
                    this.$message.success("正在下载中,请稍后...")
                }).catch(() => {
                })
            },
            openHelp() {
                this.flowHelpVisible = true
                this.$nextTick(function () {
                    this.$refs.flowHelp.init()
                })
            }
        }
    }
</script>

<style>
.upload_file{
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #FFF;
    border: 1px solid #DCDFE6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
}
</style>
