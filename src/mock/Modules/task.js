const Mock = require('mockjs')

const taskSendData = Mock.mock({
    'data': {
        code: 200,
        message: 'continue',
        data: {
            "UUID": "c71faaed-fdd9-4d01-b514-7d505217f0b5",
            "User": "admin",
            "BatchID": "d2ebc4c1-c0ae-4eb2-98ab-1eb22799e7a1",
            "Timestamp": 1674096554,
            "TaskType": "graph",
            "TaskResponses": [
                {
                    "Results": [
                        2
                    ],
                    "State": "SUCCESS",
                    "Signatures": [
                        {
                            "ID" : 0,
                            "UUID": "task_36f9709c-6413-48a5-8a87-f10448a74b58",
                            "Name": "add",
                            "RoutingKey": "spec_queue:3536901809",
                            "LabelSelector": {
                                "k1": "v1",
                                "k2": "v2"
                            },
                            "ETA": null,
                            "GroupUUID": "",
                            "GroupTaskCount": 0,
                            "Args": [
                                {
                                    "Name": "",
                                    "Type": "int64",
                                    "Value": 1
                                },
                                {
                                    "Name": "",
                                    "Type": "int64",
                                    "Value": 1
                                }
                            ],
                            "Headers": null,
                            "Priority": 0,
                            "Immutable": false,
                            "RetryCount": 0,
                            "RetryTimeout": 0,
                            "OnSuccess": null,
                            "OnError": null,
                            "ChordCallback": null,
                            "BrokerMessageGroupId": "",
                            "SQSReceiptHandle": "",
                            "StopTaskDeletionOnError": false,
                            "IgnoreWhenTaskNotRegistered": false
                        }
                    ],
                    "CallBack": null
                },
                {
                    "Results": [],
                    "State": "SUCCESS",
                    "Signatures": [
                        {
                            "ID": 1,
                            "UUID": "task_7bd9be81-3e61-4319-90d4-533b35808f47",
                            "Name": "long_running_task",
                            "RoutingKey": "aurora_tasks",
                            "LabelSelector": null,
                            "ETA": null,
                            "GroupUUID": "",
                            "GroupTaskCount": 0,
                            "Args": [
                                {
                                    "Name": "",
                                    "Type": "int64",
                                    "Value": 4
                                }
                            ],
                            "Headers": null,
                            "Priority": 0,
                            "Immutable": false,
                            "RetryCount": 0,
                            "RetryTimeout": 0,
                            "OnSuccess": null,
                            "OnError": null,
                            "ChordCallback": null,
                            "BrokerMessageGroupId": "",
                            "SQSReceiptHandle": "",
                            "StopTaskDeletionOnError": false,
                            "IgnoreWhenTaskNotRegistered": false
                        }
                    ],
                    "CallBack": null
                },
                {
                    "Results": [
                        "foobar"
                    ],
                    "State": "SUCCESS",
                    "Signatures": [
                        {
                            "UUID": "task_5a457faf-ac68-4d72-9ebf-61dcde22d4d2",
                            "Name": "concat",
                            "RoutingKey": "",
                            "LabelSelector": null,
                            "ETA": null,
                            "GroupUUID": "",
                            "GroupTaskCount": 0,
                            "Args": [
                                {
                                    "Name": "",
                                    "Type": "[]string",
                                    "Value": [
                                        "foo",
                                        "bar"
                                    ]
                                }
                            ],
                            "Headers": null,
                            "Priority": 0,
                            "Immutable": false,
                            "RetryCount": 0,
                            "RetryTimeout": 0,
                            "OnSuccess": null,
                            "OnError": null,
                            "ChordCallback": null,
                            "BrokerMessageGroupId": "",
                            "SQSReceiptHandle": "",
                            "StopTaskDeletionOnError": false,
                            "IgnoreWhenTaskNotRegistered": false
                        }
                    ],
                    "CallBack": null
                },
                {
                    "Results": [
                        [
                            "f",
                            "o",
                            "o"
                        ]
                    ],
                    "State": "SUCCESS",
                    "Signatures": [
                        {
                            "UUID": "task_393ac320-60e9-434f-b798-f6658b1d58ad",
                            "Name": "split",
                            "RoutingKey": "",
                            "LabelSelector": null,
                            "ETA": null,
                            "GroupUUID": "",
                            "GroupTaskCount": 0,
                            "Args": [
                                {
                                    "Name": "",
                                    "Type": "string",
                                    "Value": "foo"
                                }
                            ],
                            "Headers": null,
                            "Priority": 0,
                            "Immutable": false,
                            "RetryCount": 0,
                            "RetryTimeout": 0,
                            "OnSuccess": null,
                            "OnError": null,
                            "ChordCallback": null,
                            "BrokerMessageGroupId": "",
                            "SQSReceiptHandle": "",
                            "StopTaskDeletionOnError": false,
                            "IgnoreWhenTaskNotRegistered": false
                        }
                    ],
                    "CallBack": null
                },
                {
                    "Results": [
                        4
                    ],
                    "State": "SUCCESS",
                    "Signatures": [
                        {
                            "UUID": "task_dc144d89-c3fc-4e71-b0a1-84b1a1ff478d",
                            "Name": "add",
                            "RoutingKey": "spec_queue:3536901809",
                            "LabelSelector": {
                                "k1": "v1",
                                "k2": "v2"
                            },
                            "ETA": null,
                            "GroupUUID": "",
                            "GroupTaskCount": 0,
                            "Args": [
                                {
                                    "Name": "",
                                    "Type": "int64",
                                    "Value": 2
                                },
                                {
                                    "Name": "",
                                    "Type": "int64",
                                    "Value": 2
                                }
                            ],
                            "Headers": null,
                            "Priority": 0,
                            "Immutable": false,
                            "RetryCount": 0,
                            "RetryTimeout": 0,
                            "OnSuccess": null,
                            "OnError": null,
                            "ChordCallback": null,
                            "BrokerMessageGroupId": "",
                            "SQSReceiptHandle": "",
                            "StopTaskDeletionOnError": false,
                            "IgnoreWhenTaskNotRegistered": false
                        }
                    ],
                    "CallBack": null
                }
            ]
        }
    }
})

const taskTouchData = Mock.mock({
    'data': {
        code: 200,
        message: '',
        data:  {
            "UUID": "c71faaed-fdd9-4d01-b514-7d505217f0b5",
            "User": "admin",
            "BatchID": "d2ebc4c1-c0ae-4eb2-98ab-1eb22799e7a1",
            "Timestamp": 1674096554,
            "TaskType": "graph",
            "TaskResponses": [
                {
                    "Results": [
                        2
                    ],
                    "State": "SUCCESS",
                    "Signatures": [
                        {
                            "ID" : 0,
                            "UUID": "task_36f9709c-6413-48a5-8a87-f10448a74b58",
                            "Name": "add",
                            "RoutingKey": "spec_queue:3536901809",
                            "LabelSelector": {
                                "k1": "v1",
                                "k2": "v2"
                            },
                            "ETA": null,
                            "GroupUUID": "",
                            "GroupTaskCount": 0,
                            "Args": [
                                {
                                    "Name": "",
                                    "Type": "int64",
                                    "Value": 1
                                },
                                {
                                    "Name": "",
                                    "Type": "int64",
                                    "Value": 1
                                }
                            ],
                            "Headers": null,
                            "Priority": 0,
                            "Immutable": false,
                            "RetryCount": 0,
                            "RetryTimeout": 0,
                            "OnSuccess": null,
                            "OnError": null,
                            "ChordCallback": null,
                            "BrokerMessageGroupId": "",
                            "SQSReceiptHandle": "",
                            "StopTaskDeletionOnError": false,
                            "IgnoreWhenTaskNotRegistered": false
                        }
                    ],
                    "CallBack": null
                },
                {
                    "Results": [],
                    "State": "SUCCESS",
                    "Signatures": [
                        {
                            "ID": 1,
                            "UUID": "task_7bd9be81-3e61-4319-90d4-533b35808f47",
                            "Name": "long_running_task",
                            "RoutingKey": "aurora_tasks",
                            "LabelSelector": null,
                            "ETA": null,
                            "GroupUUID": "",
                            "GroupTaskCount": 0,
                            "Args": [
                                {
                                    "Name": "",
                                    "Type": "int64",
                                    "Value": 4
                                }
                            ],
                            "Headers": null,
                            "Priority": 0,
                            "Immutable": false,
                            "RetryCount": 0,
                            "RetryTimeout": 0,
                            "OnSuccess": null,
                            "OnError": null,
                            "ChordCallback": null,
                            "BrokerMessageGroupId": "",
                            "SQSReceiptHandle": "",
                            "StopTaskDeletionOnError": false,
                            "IgnoreWhenTaskNotRegistered": false
                        }
                    ],
                    "CallBack": null
                },
                {
                    "Results": [
                        "foobar"
                    ],
                    "State": "SUCCESS",
                    "Signatures": [
                        {
                            "UUID": "task_5a457faf-ac68-4d72-9ebf-61dcde22d4d2",
                            "Name": "concat",
                            "RoutingKey": "",
                            "LabelSelector": null,
                            "ETA": null,
                            "GroupUUID": "",
                            "GroupTaskCount": 0,
                            "Args": [
                                {
                                    "Name": "",
                                    "Type": "[]string",
                                    "Value": [
                                        "foo",
                                        "bar"
                                    ]
                                }
                            ],
                            "Headers": null,
                            "Priority": 0,
                            "Immutable": false,
                            "RetryCount": 0,
                            "RetryTimeout": 0,
                            "OnSuccess": null,
                            "OnError": null,
                            "ChordCallback": null,
                            "BrokerMessageGroupId": "",
                            "SQSReceiptHandle": "",
                            "StopTaskDeletionOnError": false,
                            "IgnoreWhenTaskNotRegistered": false
                        }
                    ],
                    "CallBack": null
                },
                {
                    "Results": [
                        [
                            "f",
                            "o",
                            "o"
                        ]
                    ],
                    "State": "SUCCESS",
                    "Signatures": [
                        {
                            "UUID": "task_393ac320-60e9-434f-b798-f6658b1d58ad",
                            "Name": "split",
                            "RoutingKey": "",
                            "LabelSelector": null,
                            "ETA": null,
                            "GroupUUID": "",
                            "GroupTaskCount": 0,
                            "Args": [
                                {
                                    "Name": "",
                                    "Type": "string",
                                    "Value": "foo"
                                }
                            ],
                            "Headers": null,
                            "Priority": 0,
                            "Immutable": false,
                            "RetryCount": 0,
                            "RetryTimeout": 0,
                            "OnSuccess": null,
                            "OnError": null,
                            "ChordCallback": null,
                            "BrokerMessageGroupId": "",
                            "SQSReceiptHandle": "",
                            "StopTaskDeletionOnError": false,
                            "IgnoreWhenTaskNotRegistered": false
                        }
                    ],
                    "CallBack": null
                },
                {
                    "Results": [
                        4
                    ],
                    "State": "SUCCESS",
                    "Signatures": [
                        {
                            "UUID": "task_dc144d89-c3fc-4e71-b0a1-84b1a1ff478d",
                            "Name": "add",
                            "RoutingKey": "spec_queue:3536901809",
                            "LabelSelector": {
                                "k1": "v1",
                                "k2": "v2"
                            },
                            "ETA": null,
                            "GroupUUID": "",
                            "GroupTaskCount": 0,
                            "Args": [
                                {
                                    "Name": "",
                                    "Type": "int64",
                                    "Value": 2
                                },
                                {
                                    "Name": "",
                                    "Type": "int64",
                                    "Value": 2
                                }
                            ],
                            "Headers": null,
                            "Priority": 0,
                            "Immutable": false,
                            "RetryCount": 0,
                            "RetryTimeout": 0,
                            "OnSuccess": null,
                            "OnError": null,
                            "ChordCallback": null,
                            "BrokerMessageGroupId": "",
                            "SQSReceiptHandle": "",
                            "StopTaskDeletionOnError": false,
                            "IgnoreWhenTaskNotRegistered": false
                        }
                    ],
                    "CallBack": null
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