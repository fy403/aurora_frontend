const Mock = require('mockjs')

const taskSendData = Mock.mock({
    'data': {
        "code": 200,
        "message": "continue",
        "data": {
            "uuid": "d7a70ed1-933a-49e3-bd21-5671349e9388",
            "user": "admin",
            "batch_id": "ea7064b5-94e0-4fea-9a5c-57bfbbcdda81",
            "timestamp": 1674197876,
            "task_type": "graph",
            "task_responses": [
                {
                    "results": null,
                    "state": "PENDING",
                    "signatures": [
                        {
                            "id": "vgm9k2hn2",
                            "uuid": "task_11454865-31d7-4cc4-934a-8c8c33f79b26",
                            "name": "long_running_task",
                            "routing_key": "aurora_tasks",
                            "label_selector": null,
                            "eta": null,
                            "group_uuid": "",
                            "group_task_count": 0,
                            "graph_uuid": "graph_0d0779fc-7404-4c45-9a6f-dd345e864736",
                            "graph_task_count": 6,
                            "args": [
                                {
                                    "type": "int64",
                                    "value": 4
                                }
                            ],
                            "headers": null,
                            "priority": 0,
                            "immutable": false,
                            "retry_count": 0,
                            "retry_timeout": 0,
                            "on_success": null,
                            "on_error": null,
                            "chord_callback": null,
                            "broker_message_group_id": "",
                            "sqs_receipt_handle": "",
                            "stop_task_deletion_on_error": false,
                            "ignore_when_task_not_registered": false
                        }
                    ],
                    "callBack": null
                },
                {
                    "results": null,
                    "state": "PENDING",
                    "signatures": [
                        {
                            "id": "5bfp83j7m",
                            "uuid": "task_2ac8f3dd-5e75-4137-b754-83f47a9fd3cd",
                            "name": "split",
                            "routing_key": "",
                            "label_selector": null,
                            "eta": null,
                            "group_uuid": "",
                            "group_task_count": 0,
                            "graph_uuid": "graph_0d0779fc-7404-4c45-9a6f-dd345e864736",
                            "graph_task_count": 6,
                            "args": [
                                {
                                    "type": "string",
                                    "value": "231432"
                                }
                            ],
                            "headers": null,
                            "priority": 0,
                            "immutable": false,
                            "retry_count": 0,
                            "retry_timeout": 0,
                            "on_success": null,
                            "on_error": null,
                            "chord_callback": null,
                            "broker_message_group_id": "",
                            "sqs_receipt_handle": "",
                            "stop_task_deletion_on_error": false,
                            "ignore_when_task_not_registered": false
                        }
                    ],
                    "callBack": null
                },
                {
                    "results": null,
                    "state": "PENDING",
                    "signatures": [
                        {
                            "id": "nzewujfn3a",
                            "uuid": "task_d270fbf0-d16e-4e96-a644-cbe8ac41059f",
                            "name": "add",
                            "routing_key": "",
                            "label_selector": null,
                            "eta": null,
                            "group_uuid": "",
                            "group_task_count": 0,
                            "graph_uuid": "graph_0d0779fc-7404-4c45-9a6f-dd345e864736",
                            "graph_task_count": 6,
                            "args": [
                                {
                                    "type": "int64",
                                    "value": 1
                                },
                                {
                                    "type": "int64",
                                    "value": 2
                                },
                                {
                                    "type": "int64",
                                    "value": 3
                                },
                                {
                                    "type": "int64",
                                    "value": 4
                                }
                            ],
                            "headers": null,
                            "priority": 0,
                            "immutable": false,
                            "retry_count": 0,
                            "retry_timeout": 0,
                            "on_success": null,
                            "on_error": null,
                            "chord_callback": null,
                            "broker_message_group_id": "",
                            "sqs_receipt_handle": "",
                            "stop_task_deletion_on_error": false,
                            "ignore_when_task_not_registered": false
                        }
                    ],
                    "callBack": null
                },
                {
                    "results": null,
                    "state": "PENDING",
                    "signatures": [
                        {
                            "id": "fzy9chs4kx",
                            "uuid": "task_5e816648-6438-4af5-aed4-5a33b30b01f0",
                            "name": "multiply",
                            "routing_key": "",
                            "label_selector": null,
                            "eta": null,
                            "group_uuid": "",
                            "group_task_count": 0,
                            "graph_uuid": "graph_0d0779fc-7404-4c45-9a6f-dd345e864736",
                            "graph_task_count": 6,
                            "args": [
                                {
                                    "type": "int64",
                                    "value": 1
                                },
                                {
                                    "type": "int64",
                                    "value": 2
                                },
                                {
                                    "type": "int64",
                                    "value": 3333
                                }
                            ],
                            "headers": null,
                            "priority": 0,
                            "immutable": false,
                            "retry_count": 0,
                            "retry_timeout": 0,
                            "on_success": null,
                            "on_error": null,
                            "chord_callback": null,
                            "broker_message_group_id": "",
                            "sqs_receipt_handle": "",
                            "stop_task_deletion_on_error": false,
                            "ignore_when_task_not_registered": false
                        }
                    ],
                    "callBack": null
                },
                {
                    "results": null,
                    "state": "PENDING",
                    "signatures": [
                        {
                            "id": "rdvls5bouo",
                            "uuid": "task_fe4af748-bfbd-4486-8445-c7a5319052e9",
                            "name": "add",
                            "routing_key": "aurora_tasks",
                            "label_selector": null,
                            "eta": null,
                            "group_uuid": "",
                            "group_task_count": 0,
                            "graph_uuid": "graph_0d0779fc-7404-4c45-9a6f-dd345e864736",
                            "graph_task_count": 6,
                            "args": [
                                {
                                    "type": "int64",
                                    "value": 1
                                },
                                {
                                    "type": "int64",
                                    "value": 2222
                                },
                                {
                                    "type": "int64",
                                    "value": 333
                                }
                            ],
                            "headers": null,
                            "priority": 0,
                            "immutable": false,
                            "retry_count": 0,
                            "retry_timeout": 0,
                            "on_success": null,
                            "on_error": null,
                            "chord_callback": null,
                            "broker_message_group_id": "",
                            "sqs_receipt_handle": "",
                            "stop_task_deletion_on_error": false,
                            "ignore_when_task_not_registered": false
                        }
                    ],
                    "callBack": null
                },
                {
                    "results": null,
                    "state": "PENDING",
                    "signatures": [
                        {
                            "id": "tybn0eijq",
                            "uuid": "task_6e0b3a8d-e83a-41cf-b9f9-e4b2a3ba2a0f",
                            "name": "concat",
                            "routing_key": "",
                            "label_selector": null,
                            "eta": null,
                            "group_uuid": "",
                            "group_task_count": 0,
                            "graph_uuid": "graph_0d0779fc-7404-4c45-9a6f-dd345e864736",
                            "graph_task_count": 6,
                            "args": [
                                {
                                    "type": "string",
                                    "value": "1"
                                },
                                {
                                    "type": "string",
                                    "value": "23"
                                },
                                {
                                    "type": "string",
                                    "value": "dfs"
                                }
                            ],
                            "headers": null,
                            "priority": 0,
                            "immutable": false,
                            "retry_count": 0,
                            "retry_timeout": 0,
                            "on_success": null,
                            "on_error": null,
                            "chord_callback": null,
                            "broker_message_group_id": "",
                            "sqs_receipt_handle": "",
                            "stop_task_deletion_on_error": false,
                            "ignore_when_task_not_registered": false
                        }
                    ],
                    "callBack": null
                }
            ]
        }
    }
})

const taskTouchData = Mock.mock({
    'data': {
        "code": 200,
        "message": "continue",
        "data": {
            "uuid": "d7a70ed1-933a-49e3-bd21-5671349e9388",
            "user": "admin",
            "batch_id": "ea7064b5-94e0-4fea-9a5c-57bfbbcdda81",
            "timestamp": 1674197892,
            "task_type": "graph",
            "task_responses": [
                {
                    "results": null,
                    "state": "PENDING",
                    "signatures": [
                        {
                            "id": "vgm9k2hn2",
                            "uuid": "task_11454865-31d7-4cc4-934a-8c8c33f79b26",
                            "name": "long_running_task",
                            "routing_key": "aurora_tasks",
                            "label_selector": null,
                            "eta": null,
                            "group_uuid": "",
                            "group_task_count": 0,
                            "graph_uuid": "graph_0d0779fc-7404-4c45-9a6f-dd345e864736",
                            "graph_task_count": 6,
                            "args": [
                                {
                                    "type": "int64",
                                    "value": 4
                                }
                            ],
                            "headers": null,
                            "priority": 0,
                            "immutable": false,
                            "retry_count": 0,
                            "retry_timeout": 0,
                            "on_success": null,
                            "on_error": null,
                            "chord_callback": null,
                            "broker_message_group_id": "",
                            "sqs_receipt_handle": "",
                            "stop_task_deletion_on_error": false,
                            "ignore_when_task_not_registered": false
                        }
                    ],
                    "callBack": null
                },
                {
                    "results": null,
                    "state": "PENDING",
                    "signatures": [
                        {
                            "id": "5bfp83j7m",
                            "uuid": "task_2ac8f3dd-5e75-4137-b754-83f47a9fd3cd",
                            "name": "split",
                            "routing_key": "",
                            "label_selector": null,
                            "eta": null,
                            "group_uuid": "",
                            "group_task_count": 0,
                            "graph_uuid": "graph_0d0779fc-7404-4c45-9a6f-dd345e864736",
                            "graph_task_count": 6,
                            "args": [
                                {
                                    "type": "string",
                                    "value": "231432"
                                }
                            ],
                            "headers": null,
                            "priority": 0,
                            "immutable": false,
                            "retry_count": 0,
                            "retry_timeout": 0,
                            "on_success": null,
                            "on_error": null,
                            "chord_callback": null,
                            "broker_message_group_id": "",
                            "sqs_receipt_handle": "",
                            "stop_task_deletion_on_error": false,
                            "ignore_when_task_not_registered": false
                        }
                    ],
                    "callBack": null
                },
                {
                    "results": null,
                    "state": "PENDING",
                    "signatures": [
                        {
                            "id": "nzewujfn3a",
                            "uuid": "task_d270fbf0-d16e-4e96-a644-cbe8ac41059f",
                            "name": "add",
                            "routing_key": "",
                            "label_selector": null,
                            "eta": null,
                            "group_uuid": "",
                            "group_task_count": 0,
                            "graph_uuid": "graph_0d0779fc-7404-4c45-9a6f-dd345e864736",
                            "graph_task_count": 6,
                            "args": [
                                {
                                    "type": "int64",
                                    "value": 1
                                },
                                {
                                    "type": "int64",
                                    "value": 2
                                },
                                {
                                    "type": "int64",
                                    "value": 3
                                },
                                {
                                    "type": "int64",
                                    "value": 4
                                }
                            ],
                            "headers": null,
                            "priority": 0,
                            "immutable": false,
                            "retry_count": 0,
                            "retry_timeout": 0,
                            "on_success": null,
                            "on_error": null,
                            "chord_callback": null,
                            "broker_message_group_id": "",
                            "sqs_receipt_handle": "",
                            "stop_task_deletion_on_error": false,
                            "ignore_when_task_not_registered": false
                        }
                    ],
                    "callBack": null
                },
                {
                    "results": null,
                    "state": "PENDING",
                    "signatures": [
                        {
                            "id": "fzy9chs4kx",
                            "uuid": "task_5e816648-6438-4af5-aed4-5a33b30b01f0",
                            "name": "multiply",
                            "routing_key": "",
                            "label_selector": null,
                            "eta": null,
                            "group_uuid": "",
                            "group_task_count": 0,
                            "graph_uuid": "graph_0d0779fc-7404-4c45-9a6f-dd345e864736",
                            "graph_task_count": 6,
                            "args": [
                                {
                                    "type": "int64",
                                    "value": 1
                                },
                                {
                                    "type": "int64",
                                    "value": 2
                                },
                                {
                                    "type": "int64",
                                    "value": 3333
                                }
                            ],
                            "headers": null,
                            "priority": 0,
                            "immutable": false,
                            "retry_count": 0,
                            "retry_timeout": 0,
                            "on_success": null,
                            "on_error": null,
                            "chord_callback": null,
                            "broker_message_group_id": "",
                            "sqs_receipt_handle": "",
                            "stop_task_deletion_on_error": false,
                            "ignore_when_task_not_registered": false
                        }
                    ],
                    "callBack": null
                },
                {
                    "results": null,
                    "state": "PENDING",
                    "signatures": [
                        {
                            "id": "rdvls5bouo",
                            "uuid": "task_fe4af748-bfbd-4486-8445-c7a5319052e9",
                            "name": "add",
                            "routing_key": "aurora_tasks",
                            "label_selector": null,
                            "eta": null,
                            "group_uuid": "",
                            "group_task_count": 0,
                            "graph_uuid": "graph_0d0779fc-7404-4c45-9a6f-dd345e864736",
                            "graph_task_count": 6,
                            "args": [
                                {
                                    "type": "int64",
                                    "value": 1
                                },
                                {
                                    "type": "int64",
                                    "value": 2222
                                },
                                {
                                    "type": "int64",
                                    "value": 333
                                }
                            ],
                            "headers": null,
                            "priority": 0,
                            "immutable": false,
                            "retry_count": 0,
                            "retry_timeout": 0,
                            "on_success": null,
                            "on_error": null,
                            "chord_callback": null,
                            "broker_message_group_id": "",
                            "sqs_receipt_handle": "",
                            "stop_task_deletion_on_error": false,
                            "ignore_when_task_not_registered": false
                        }
                    ],
                    "callBack": null
                },
                {
                    "results": null,
                    "state": "PENDING",
                    "signatures": [
                        {
                            "id": "tybn0eijq",
                            "uuid": "task_6e0b3a8d-e83a-41cf-b9f9-e4b2a3ba2a0f",
                            "name": "concat",
                            "routing_key": "",
                            "label_selector": null,
                            "eta": null,
                            "group_uuid": "",
                            "group_task_count": 0,
                            "graph_uuid": "graph_0d0779fc-7404-4c45-9a6f-dd345e864736",
                            "graph_task_count": 6,
                            "args": [
                                {
                                    "type": "string",
                                    "value": "1"
                                },
                                {
                                    "type": "string",
                                    "value": "23"
                                },
                                {
                                    "type": "string",
                                    "value": "dfs"
                                }
                            ],
                            "headers": null,
                            "priority": 0,
                            "immutable": false,
                            "retry_count": 0,
                            "retry_timeout": 0,
                            "on_success": null,
                            "on_error": null,
                            "chord_callback": null,
                            "broker_message_group_id": "",
                            "sqs_receipt_handle": "",
                            "stop_task_deletion_on_error": false,
                            "ignore_when_task_not_registered": false
                        }
                    ],
                    "callBack": null
                }
            ]
        }
    }
})

function taskSend(res) {
    // res是一个请求对象，包含: url, type, body
    return taskSendData.data
}

function taskTouch(res) {
    return taskTouchData.data
}

export default {
    taskSend,
    taskTouch,
}