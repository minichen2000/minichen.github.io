const flowInfo_different_length_legs = [
    {
        "neId":"5efed95b85b17f06bcf53da3",
        "userLabel":"260SCX2-1-2-L1;/frequency=/tunable-number=1",
        "isMergedRoute":null,
        "ptpId":"5efed95b85b17f06bcf53da3_16908544",
        "ptpUserLabel":"11QPA4-1-2-L1",
        "isSeparatedRoute":null,
        "neUserLabel":"DPE-135.251.97.150",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5efed95b85b17f06bcf53da3_1.2",
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"260SCX2-1-2",
        "id":"5efed95b85b17f06bcf53da3_16908544_260SCX2-1-2-L1;/frequency=/tunable-number=1"
    },
    {
        "userLabel":"DPE-135.251.97.150/SFD44-25-1-9600--DPE-135.251.97.150/260SCX2-1-2-L1",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5efed95b85b17f06bcf53da3_419496192"
        ],
        "isSeparatedRoute":null,
        "id":"5efed95b85b17f06bcf53da3_16908544_5efed95b85b17f06bcf53da3_419496192",
        "type":"TL",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5efed95b85b17f06bcf53da3_16908544"
        ]
    },
    {
        "neId":"5efed95b85b17f06bcf53da3",
        "userLabel":"SFD44-25-1-9600;/frequency=9600.000",
        "isMergedRoute":null,
        "ptpId":"5efed95b85b17f06bcf53da3_419496192",
        "ptpUserLabel":"SFD44-25-1-9600",
        "isSeparatedRoute":null,
        "neUserLabel":"DPE-135.251.97.150",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5efed95b85b17f06bcf53da3_25.1",
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"SFD44-25-1",
        "id":"5efed95b85b17f06bcf53da3_419496192_SFD44-25-1-9600;/frequency=9600.000"
    },
    {
        "neId":"5efed95b85b17f06bcf53da3",
        "userLabel":null,
        "isMergedRoute":null,
        "protectionType":"SIMPLE",
        "aEndNodes":[
            "5efed95b85b17f06bcf53da3_419496192_SFD44-25-1-9600;/frequency=9600.000"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"DPE-135.251.97.150",
        "pgData":null,
        "type":"XC",
        "params":null,
        "equipmentId":"5efed95b85b17f06bcf53da3_25.1",
        "zEndNodes":[
            "5efed95b85b17f06bcf53da3_419507456_SFD44-25-1-OMD;/frequency=9600.000"
        ],
        "equipmentUserLabel":"SFD44-25-1",
        "id":"5efed95b85b17f06bcf53da3_419496192_SFD44-25-1-9600;/frequency=9600.000-5efed95b85b17f06bcf53da3_419507456_SFD44-25-1-OMD;/frequency=9600.000",
        "direction":"BI"
    },
    {
        "neId":"5efed95b85b17f06bcf53da3",
        "userLabel":"SFD44-25-1-OMD;/frequency=9600.000",
        "isMergedRoute":null,
        "ptpId":"5efed95b85b17f06bcf53da3_419507456",
        "ptpUserLabel":"SFD44-25-1-OMD",
        "isSeparatedRoute":null,
        "neUserLabel":"DPE-135.251.97.150",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5efed95b85b17f06bcf53da3_25.1",
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"SFD44-25-1",
        "id":"5efed95b85b17f06bcf53da3_419507456_SFD44-25-1-OMD;/frequency=9600.000"
    },
    {
        "userLabel":"DPE-135.251.97.150/OPSA-1-5-SIG--DPE-135.251.97.150/SFD44-25-1-OMD",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5efed95b85b17f06bcf53da3_17105152"
        ],
        "isSeparatedRoute":null,
        "id":"5efed95b85b17f06bcf53da3_17105152_5efed95b85b17f06bcf53da3_419507456",
        "type":"TL",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5efed95b85b17f06bcf53da3_419507456"
        ]
    },
    {
        "neId":"5efed95b85b17f06bcf53da3",
        "userLabel":"OPSA-1-5-SIG;/frequency=/oms=1",
        "isMergedRoute":null,
        "ptpId":"5efed95b85b17f06bcf53da3_17105152",
        "ptpUserLabel":"OPSA-1-5-SIG",
        "isSeparatedRoute":null,
        "neUserLabel":"DPE-135.251.97.150",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5efed95b85b17f06bcf53da3_1.5",
        "tpType":"CTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"OPSA-1-5",
        "id":"5efed95b85b17f06bcf53da3_17105152_OPSA-1-5-SIG;/frequency=/oms=1"
    },
    {
        "neId":"5efed95b85b17f06bcf53da3",
        "userLabel":null,
        "isMergedRoute":null,
        "protectionType":"OPS",
        "aEndNodes":[
            "5efed95b85b17f06bcf53da3_17105152_OPSA-1-5-SIG;/frequency=/oms=1"
        ],
        "isSeparatedRoute":true,
        "neUserLabel":"DPE-135.251.97.150",
        "pgData":{
            "_id":"5efed95b85b17f06bcf53da3_17105408_17105664",
            "neId":"5efed95b85b17f06bcf53da3",
            "type":"1+1",
            "nmlId":"5efed95b85b17f06bcf53da3_419507456_SFD44-25-1-OMD;/oms=1_5f0d6e563d56864ce3a262b4_419507456_SFD44-25-1-OMD;/oms=1",
            "userLabel":"PG_1_OMSP_OPSA-1-5",
            "nativeName":"PG_1_OMSP_OPSA-1-5",
            "layerRates":[
                "OMS",
                "PHYSICAL"
            ],
            "direction":"UNI",
            "reversionMode":"nonRevertive",
            "wtrTime":"5",
            "holdOffTime":"0",
            "tpIds":[
                "5efed95b85b17f06bcf53da3_17105408",
                "5efed95b85b17f06bcf53da3_17105664"
            ],
            "switchData":{
                "switchStatus":"ForcedSwitch",
                "tpStatus":[
                    {
                        "switchCmd":"forcedSwitchWorkToProtect",
                        "txStatus":"unknown",
                        "rxStatus":"standby"
                    },
                    {
                        "switchCmd":"noCmd",
                        "txStatus":"unknown",
                        "rxStatus":"active"
                    }
                ]
            },
            "implementState":"IMPLEMENTED",
            "params":{
                "groupId":"1",
                "eqptID":"5efed95b85b17f06bcf53da3_1.5",
                "neNativeName":"PSS-135.251.97.150",
                "protectionMode":"omsp",
                "eqptNativeName":"OPSA-1-5",
                "rowStatus":"active",
                "pgObjectType":"PTP",
                "neNumber":10017
            },
            "usage":"IDLE",
            "id":"5efed95b85b17f06bcf53da3_17105408_17105664"
        },
        "type":"XC",
        "params":null,
        "equipmentId":"5efed95b85b17f06bcf53da3_1.5",
        "zEndNodes":[
            "5efed95b85b17f06bcf53da3_17105408_OPSA-1-5-A;/frequency=/oms=1",
            "5efed95b85b17f06bcf53da3_17105664_OPSA-1-5-B;/frequency=/oms=1"
        ],
        "separatedRouteElements":{
            "Spare":[
                {
                    "neId":"5efed95b85b17f06bcf53da3",
                    "userLabel":"OPSA-1-5-B;/frequency=/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5efed95b85b17f06bcf53da3_17105664",
                    "ptpUserLabel":"OPSA-1-5-B",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.150",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5efed95b85b17f06bcf53da3_1.5",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"OPSA-1-5",
                    "id":"5efed95b85b17f06bcf53da3_17105664_OPSA-1-5-B;/frequency=/oms=1"
                },
                {
                    "userLabel":"DPE-135.251.97.150/AHPLG-2-3-LINE--DPE-135.251.97.150/OPSA-1-5-B",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5efed95b85b17f06bcf53da3_33752064"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5efed95b85b17f06bcf53da3_17105664_5efed95b85b17f06bcf53da3_33752064",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"BI",
                    "zEndNodes":[
                        "5efed95b85b17f06bcf53da3_17105664"
                    ]
                },
                {
                    "neId":"5efed95b85b17f06bcf53da3",
                    "userLabel":"AHPLG-2-3-LINE;/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5efed95b85b17f06bcf53da3_33752064",
                    "ptpUserLabel":"AHPLG-2-3-LINE",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.150",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5efed95b85b17f06bcf53da3_2.3",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"AHPLG-2-3",
                    "id":"5efed95b85b17f06bcf53da3_33752064_AHPLG-2-3-LINE;/oms=1"
                },
                {
                    "neId":"5efed95b85b17f06bcf53da3",
                    "userLabel":null,
                    "isMergedRoute":null,
                    "protectionType":"SIMPLE",
                    "aEndNodes":[
                        "5efed95b85b17f06bcf53da3_33751296_AHPLG-2-3-SIG;/oms=1"
                    ],
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.150",
                    "pgData":null,
                    "type":"XC",
                    "params":null,
                    "equipmentId":"5efed95b85b17f06bcf53da3_2.3",
                    "zEndNodes":[
                        "5efed95b85b17f06bcf53da3_33752064_AHPLG-2-3-LINE;/oms=1"
                    ],
                    "equipmentUserLabel":"AHPLG-2-3",
                    "id":"5efed95b85b17f06bcf53da3_33751296_AHPLG-2-3-SIG;/oms=1-5efed95b85b17f06bcf53da3_33752064_AHPLG-2-3-LINE;/oms=1",
                    "direction":"BI"
                },
                {
                    "neId":"5efed95b85b17f06bcf53da3",
                    "userLabel":"AHPLG-2-3-SIG;/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5efed95b85b17f06bcf53da3_33751296",
                    "ptpUserLabel":"AHPLG-2-3-SIG",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.150",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5efed95b85b17f06bcf53da3_2.3",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"AHPLG-2-3",
                    "id":"5efed95b85b17f06bcf53da3_33751296_AHPLG-2-3-SIG;/oms=1"
                },
                {
                    "userLabel":"DPE-135.251.97.150/AHPLG-2-3-SIG--DPE-135.251.97.150/AHPLG-2-2-SIG",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5efed95b85b17f06bcf53da3_33751296"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5efed95b85b17f06bcf53da3_33685760_5efed95b85b17f06bcf53da3_33751296",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"BI",
                    "zEndNodes":[
                        "5efed95b85b17f06bcf53da3_33685760"
                    ]
                },
                {
                    "neId":"5efed95b85b17f06bcf53da3",
                    "userLabel":"AHPLG-2-2-SIG;/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5efed95b85b17f06bcf53da3_33685760",
                    "ptpUserLabel":"AHPLG-2-2-SIG",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.150",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5efed95b85b17f06bcf53da3_2.2",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"AHPLG-2-2",
                    "id":"5efed95b85b17f06bcf53da3_33685760_AHPLG-2-2-SIG;/oms=1"
                },
                {
                    "neId":"5efed95b85b17f06bcf53da3",
                    "userLabel":null,
                    "isMergedRoute":null,
                    "protectionType":"SIMPLE",
                    "aEndNodes":[
                        "5efed95b85b17f06bcf53da3_33685760_AHPLG-2-2-SIG;/oms=1"
                    ],
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.150",
                    "pgData":null,
                    "type":"XC",
                    "params":null,
                    "equipmentId":"5efed95b85b17f06bcf53da3_2.2",
                    "zEndNodes":[
                        "5efed95b85b17f06bcf53da3_33686528_AHPLG-2-2-LINE;/oms=1"
                    ],
                    "equipmentUserLabel":"AHPLG-2-2",
                    "id":"5efed95b85b17f06bcf53da3_33685760_AHPLG-2-2-SIG;/oms=1-5efed95b85b17f06bcf53da3_33686528_AHPLG-2-2-LINE;/oms=1",
                    "direction":"BI"
                },
                {
                    "neId":"5efed95b85b17f06bcf53da3",
                    "userLabel":"AHPLG-2-2-LINE;/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5efed95b85b17f06bcf53da3_33686528",
                    "ptpUserLabel":"AHPLG-2-2-LINE",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.150",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5efed95b85b17f06bcf53da3_2.2",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"AHPLG-2-2",
                    "id":"5efed95b85b17f06bcf53da3_33686528_AHPLG-2-2-LINE;/oms=1"
                },
                {
                    "userLabel":"DPE-135.251.97.150/AHPLG-2-2-LINE--DPE-135.251.97.154/AHPHG-2-2-LINE",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5efed95b85b17f06bcf53da3_33686528"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5efed95b85b17f06bcf53da3_33686528_5f0d6e563d56864ce3a262b4_33686528",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"BI",
                    "zEndNodes":[
                        "5f0d6e563d56864ce3a262b4_33686528"
                    ]
                },
                {
                    "neId":"5f0d6e563d56864ce3a262b4",
                    "userLabel":"AHPHG-2-2-LINE;/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5f0d6e563d56864ce3a262b4_33686528",
                    "ptpUserLabel":"AHPHG-2-2-LINE",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.154",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5f0d6e563d56864ce3a262b4_2.2",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"AHPHG-2-2",
                    "id":"5f0d6e563d56864ce3a262b4_33686528_AHPHG-2-2-LINE;/oms=1"
                },
                {
                    "neId":"5f0d6e563d56864ce3a262b4",
                    "userLabel":null,
                    "isMergedRoute":null,
                    "protectionType":"SIMPLE",
                    "aEndNodes":[
                        "5f0d6e563d56864ce3a262b4_33685760_AHPHG-2-2-SIG;/oms=1"
                    ],
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.154",
                    "pgData":null,
                    "type":"XC",
                    "params":null,
                    "equipmentId":"5f0d6e563d56864ce3a262b4_2.2",
                    "zEndNodes":[
                        "5f0d6e563d56864ce3a262b4_33686528_AHPHG-2-2-LINE;/oms=1"
                    ],
                    "equipmentUserLabel":"AHPHG-2-2",
                    "id":"5f0d6e563d56864ce3a262b4_33685760_AHPHG-2-2-SIG;/oms=1-5f0d6e563d56864ce3a262b4_33686528_AHPHG-2-2-LINE;/oms=1",
                    "direction":"BI"
                },
                {
                    "neId":"5f0d6e563d56864ce3a262b4",
                    "userLabel":"AHPHG-2-2-SIG;/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5f0d6e563d56864ce3a262b4_33685760",
                    "ptpUserLabel":"AHPHG-2-2-SIG",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.154",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5f0d6e563d56864ce3a262b4_2.2",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"AHPHG-2-2",
                    "id":"5f0d6e563d56864ce3a262b4_33685760_AHPHG-2-2-SIG;/oms=1"
                },
                {
                    "userLabel":"DPE-135.251.97.154/AHPLG-2-3-SIG--DPE-135.251.97.154/AHPHG-2-2-SIG",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5f0d6e563d56864ce3a262b4_33751296"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5f0d6e563d56864ce3a262b4_33685760_5f0d6e563d56864ce3a262b4_33751296",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"BI",
                    "zEndNodes":[
                        "5f0d6e563d56864ce3a262b4_33685760"
                    ]
                },
                {
                    "neId":"5f0d6e563d56864ce3a262b4",
                    "userLabel":"AHPLG-2-3-SIG;/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5f0d6e563d56864ce3a262b4_33751296",
                    "ptpUserLabel":"AHPLG-2-3-SIG",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.154",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5f0d6e563d56864ce3a262b4_2.3",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"AHPLG-2-3",
                    "id":"5f0d6e563d56864ce3a262b4_33751296_AHPLG-2-3-SIG;/oms=1"
                },
                {
                    "neId":"5f0d6e563d56864ce3a262b4",
                    "userLabel":null,
                    "isMergedRoute":null,
                    "protectionType":"SIMPLE",
                    "aEndNodes":[
                        "5f0d6e563d56864ce3a262b4_33751296_AHPLG-2-3-SIG;/oms=1"
                    ],
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.154",
                    "pgData":null,
                    "type":"XC",
                    "params":null,
                    "equipmentId":"5f0d6e563d56864ce3a262b4_2.3",
                    "zEndNodes":[
                        "5f0d6e563d56864ce3a262b4_33752064_AHPLG-2-3-LINE;/oms=1"
                    ],
                    "equipmentUserLabel":"AHPLG-2-3",
                    "id":"5f0d6e563d56864ce3a262b4_33751296_AHPLG-2-3-SIG;/oms=1-5f0d6e563d56864ce3a262b4_33752064_AHPLG-2-3-LINE;/oms=1",
                    "direction":"BI"
                },
                {
                    "neId":"5f0d6e563d56864ce3a262b4",
                    "userLabel":"AHPLG-2-3-LINE;/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5f0d6e563d56864ce3a262b4_33752064",
                    "ptpUserLabel":"AHPLG-2-3-LINE",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.154",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5f0d6e563d56864ce3a262b4_2.3",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"AHPLG-2-3",
                    "id":"5f0d6e563d56864ce3a262b4_33752064_AHPLG-2-3-LINE;/oms=1"
                },
                {
                    "userLabel":"DPE-135.251.97.154/AHPLG-2-3-LINE--DPE-135.251.97.154/OPSA-1-5-B",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5f0d6e563d56864ce3a262b4_33752064"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5f0d6e563d56864ce3a262b4_17105664_5f0d6e563d56864ce3a262b4_33752064",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"BI",
                    "zEndNodes":[
                        "5f0d6e563d56864ce3a262b4_17105664"
                    ]
                },
                {
                    "neId":"5f0d6e563d56864ce3a262b4",
                    "userLabel":"OPSA-1-5-B;/frequency=/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5f0d6e563d56864ce3a262b4_17105664",
                    "ptpUserLabel":"OPSA-1-5-B",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.154",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5f0d6e563d56864ce3a262b4_1.5",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"OPSA-1-5",
                    "id":"5f0d6e563d56864ce3a262b4_17105664_OPSA-1-5-B;/frequency=/oms=1"
                }
            ],
            "Main":[
                {
                    "neId":"5efed95b85b17f06bcf53da3",
                    "userLabel":"OPSA-1-5-A;/frequency=/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5efed95b85b17f06bcf53da3_17105408",
                    "ptpUserLabel":"OPSA-1-5-A",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.150",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5efed95b85b17f06bcf53da3_1.5",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"OPSA-1-5",
                    "id":"5efed95b85b17f06bcf53da3_17105408_OPSA-1-5-A;/frequency=/oms=1"
                },
                {
                    "userLabel":"DPE-135.251.97.150/AHPLG-2-5-LINE--DPE-135.251.97.150/OPSA-1-5-A",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5efed95b85b17f06bcf53da3_33883136"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5efed95b85b17f06bcf53da3_17105408_5efed95b85b17f06bcf53da3_33883136",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"BI",
                    "zEndNodes":[
                        "5efed95b85b17f06bcf53da3_17105408"
                    ]
                },
                {
                    "neId":"5efed95b85b17f06bcf53da3",
                    "userLabel":"AHPLG-2-5-LINE;/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5efed95b85b17f06bcf53da3_33883136",
                    "ptpUserLabel":"AHPLG-2-5-LINE",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.150",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5efed95b85b17f06bcf53da3_2.5",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"AHPLG-2-5",
                    "id":"5efed95b85b17f06bcf53da3_33883136_AHPLG-2-5-LINE;/oms=1"
                },
                {
                    "neId":"5efed95b85b17f06bcf53da3",
                    "userLabel":null,
                    "isMergedRoute":null,
                    "protectionType":"SIMPLE",
                    "aEndNodes":[
                        "5efed95b85b17f06bcf53da3_33882368_AHPLG-2-5-SIG;/oms=1"
                    ],
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.150",
                    "pgData":null,
                    "type":"XC",
                    "params":null,
                    "equipmentId":"5efed95b85b17f06bcf53da3_2.5",
                    "zEndNodes":[
                        "5efed95b85b17f06bcf53da3_33883136_AHPLG-2-5-LINE;/oms=1"
                    ],
                    "equipmentUserLabel":"AHPLG-2-5",
                    "id":"5efed95b85b17f06bcf53da3_33882368_AHPLG-2-5-SIG;/oms=1-5efed95b85b17f06bcf53da3_33883136_AHPLG-2-5-LINE;/oms=1",
                    "direction":"BI"
                },
                {
                    "neId":"5efed95b85b17f06bcf53da3",
                    "userLabel":"AHPLG-2-5-SIG;/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5efed95b85b17f06bcf53da3_33882368",
                    "ptpUserLabel":"AHPLG-2-5-SIG",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.150",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5efed95b85b17f06bcf53da3_2.5",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"AHPLG-2-5",
                    "id":"5efed95b85b17f06bcf53da3_33882368_AHPLG-2-5-SIG;/oms=1"
                },
                {
                    "userLabel":"DPE-135.251.97.150/AHPLG-2-5-SIG--DPE-135.251.97.150/AHPHG-2-4-SIG",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5efed95b85b17f06bcf53da3_33882368"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5efed95b85b17f06bcf53da3_33816832_5efed95b85b17f06bcf53da3_33882368",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"BI",
                    "zEndNodes":[
                        "5efed95b85b17f06bcf53da3_33816832"
                    ]
                },
                {
                    "neId":"5efed95b85b17f06bcf53da3",
                    "userLabel":"AHPHG-2-4-SIG;/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5efed95b85b17f06bcf53da3_33816832",
                    "ptpUserLabel":"AHPHG-2-4-SIG",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.150",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5efed95b85b17f06bcf53da3_2.4",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"AHPHG-2-4",
                    "id":"5efed95b85b17f06bcf53da3_33816832_AHPHG-2-4-SIG;/oms=1"
                },
                {
                    "neId":"5efed95b85b17f06bcf53da3",
                    "userLabel":null,
                    "isMergedRoute":null,
                    "protectionType":"SIMPLE",
                    "aEndNodes":[
                        "5efed95b85b17f06bcf53da3_33816832_AHPHG-2-4-SIG;/oms=1"
                    ],
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.150",
                    "pgData":null,
                    "type":"XC",
                    "params":null,
                    "equipmentId":"5efed95b85b17f06bcf53da3_2.4",
                    "zEndNodes":[
                        "5efed95b85b17f06bcf53da3_33817600_AHPHG-2-4-LINE;/oms=1"
                    ],
                    "equipmentUserLabel":"AHPHG-2-4",
                    "id":"5efed95b85b17f06bcf53da3_33816832_AHPHG-2-4-SIG;/oms=1-5efed95b85b17f06bcf53da3_33817600_AHPHG-2-4-LINE;/oms=1",
                    "direction":"BI"
                },
                {
                    "neId":"5efed95b85b17f06bcf53da3",
                    "userLabel":"AHPHG-2-4-LINE;/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5efed95b85b17f06bcf53da3_33817600",
                    "ptpUserLabel":"AHPHG-2-4-LINE",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.150",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5efed95b85b17f06bcf53da3_2.4",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"AHPHG-2-4",
                    "id":"5efed95b85b17f06bcf53da3_33817600_AHPHG-2-4-LINE;/oms=1"
                },
                {
                    "userLabel":"DPE-135.251.97.150/AHPHG-2-4-LINE--DPE-135.251.97.157/AHPLG-1-3-LINE",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5efed95b85b17f06bcf53da3_33817600"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5efed95b85b17f06bcf53da3_33817600_5f21217508a2273e560bb007_16974848",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"BI",
                    "zEndNodes":[
                        "5f21217508a2273e560bb007_16974848"
                    ]
                },
                {
                    "neId":"5f21217508a2273e560bb007",
                    "userLabel":"AHPLG-1-3-LINE;/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5f21217508a2273e560bb007_16974848",
                    "ptpUserLabel":"AHPLG-1-3-LINE",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.157",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5f21217508a2273e560bb007_1.3",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"AHPLG-1-3",
                    "id":"5f21217508a2273e560bb007_16974848_AHPLG-1-3-LINE;/oms=1"
                },
                {
                    "neId":"5f21217508a2273e560bb007",
                    "userLabel":null,
                    "isMergedRoute":null,
                    "protectionType":"SIMPLE",
                    "aEndNodes":[
                        "5f21217508a2273e560bb007_16974080_AHPLG-1-3-SIG;/oms=1"
                    ],
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.157",
                    "pgData":null,
                    "type":"XC",
                    "params":null,
                    "equipmentId":"5f21217508a2273e560bb007_1.3",
                    "zEndNodes":[
                        "5f21217508a2273e560bb007_16974848_AHPLG-1-3-LINE;/oms=1"
                    ],
                    "equipmentUserLabel":"AHPLG-1-3",
                    "id":"5f21217508a2273e560bb007_16974080_AHPLG-1-3-SIG;/oms=1-5f21217508a2273e560bb007_16974848_AHPLG-1-3-LINE;/oms=1",
                    "direction":"BI"
                },
                {
                    "neId":"5f21217508a2273e560bb007",
                    "userLabel":"AHPLG-1-3-SIG;/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5f21217508a2273e560bb007_16974080",
                    "ptpUserLabel":"AHPLG-1-3-SIG",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.157",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5f21217508a2273e560bb007_1.3",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"AHPLG-1-3",
                    "id":"5f21217508a2273e560bb007_16974080_AHPLG-1-3-SIG;/oms=1"
                },
                {
                    "userLabel":"DPE-135.251.97.157/AHPLG-1-2-SIG--DPE-135.251.97.157/AHPLG-1-3-SIG",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5f21217508a2273e560bb007_16908544"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5f21217508a2273e560bb007_16908544_5f21217508a2273e560bb007_16974080",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"BI",
                    "zEndNodes":[
                        "5f21217508a2273e560bb007_16974080"
                    ]
                },
                {
                    "neId":"5f21217508a2273e560bb007",
                    "userLabel":"AHPLG-1-2-SIG;/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5f21217508a2273e560bb007_16908544",
                    "ptpUserLabel":"AHPLG-1-2-SIG",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.157",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5f21217508a2273e560bb007_1.2",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"AHPLG-1-2",
                    "id":"5f21217508a2273e560bb007_16908544_AHPLG-1-2-SIG;/oms=1"
                },
                {
                    "neId":"5f21217508a2273e560bb007",
                    "userLabel":null,
                    "isMergedRoute":null,
                    "protectionType":"SIMPLE",
                    "aEndNodes":[
                        "5f21217508a2273e560bb007_16908544_AHPLG-1-2-SIG;/oms=1"
                    ],
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.157",
                    "pgData":null,
                    "type":"XC",
                    "params":null,
                    "equipmentId":"5f21217508a2273e560bb007_1.2",
                    "zEndNodes":[
                        "5f21217508a2273e560bb007_16909312_AHPLG-1-2-LINE;/oms=1"
                    ],
                    "equipmentUserLabel":"AHPLG-1-2",
                    "id":"5f21217508a2273e560bb007_16908544_AHPLG-1-2-SIG;/oms=1-5f21217508a2273e560bb007_16909312_AHPLG-1-2-LINE;/oms=1",
                    "direction":"BI"
                },
                {
                    "neId":"5f21217508a2273e560bb007",
                    "userLabel":"AHPLG-1-2-LINE;/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5f21217508a2273e560bb007_16909312",
                    "ptpUserLabel":"AHPLG-1-2-LINE",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.157",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5f21217508a2273e560bb007_1.2",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"AHPLG-1-2",
                    "id":"5f21217508a2273e560bb007_16909312_AHPLG-1-2-LINE;/oms=1"
                },
                {
                    "userLabel":"DPE-135.251.97.154/AHPHG-2-4-LINE--DPE-135.251.97.157/AHPLG-1-2-LINE",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5f0d6e563d56864ce3a262b4_33817600"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5f0d6e563d56864ce3a262b4_33817600_5f21217508a2273e560bb007_16909312",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"BI",
                    "zEndNodes":[
                        "5f21217508a2273e560bb007_16909312"
                    ]
                },
                {
                    "neId":"5f0d6e563d56864ce3a262b4",
                    "userLabel":"AHPHG-2-4-LINE;/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5f0d6e563d56864ce3a262b4_33817600",
                    "ptpUserLabel":"AHPHG-2-4-LINE",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.154",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5f0d6e563d56864ce3a262b4_2.4",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"AHPHG-2-4",
                    "id":"5f0d6e563d56864ce3a262b4_33817600_AHPHG-2-4-LINE;/oms=1"
                },
                {
                    "neId":"5f0d6e563d56864ce3a262b4",
                    "userLabel":null,
                    "isMergedRoute":null,
                    "protectionType":"SIMPLE",
                    "aEndNodes":[
                        "5f0d6e563d56864ce3a262b4_33816832_AHPHG-2-4-SIG;/oms=1"
                    ],
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.154",
                    "pgData":null,
                    "type":"XC",
                    "params":null,
                    "equipmentId":"5f0d6e563d56864ce3a262b4_2.4",
                    "zEndNodes":[
                        "5f0d6e563d56864ce3a262b4_33817600_AHPHG-2-4-LINE;/oms=1"
                    ],
                    "equipmentUserLabel":"AHPHG-2-4",
                    "id":"5f0d6e563d56864ce3a262b4_33816832_AHPHG-2-4-SIG;/oms=1-5f0d6e563d56864ce3a262b4_33817600_AHPHG-2-4-LINE;/oms=1",
                    "direction":"BI"
                },
                {
                    "neId":"5f0d6e563d56864ce3a262b4",
                    "userLabel":"AHPHG-2-4-SIG;/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5f0d6e563d56864ce3a262b4_33816832",
                    "ptpUserLabel":"AHPHG-2-4-SIG",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.154",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5f0d6e563d56864ce3a262b4_2.4",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"AHPHG-2-4",
                    "id":"5f0d6e563d56864ce3a262b4_33816832_AHPHG-2-4-SIG;/oms=1"
                },
                {
                    "userLabel":"DPE-135.251.97.154/AHPHG-2-4-SIG--DPE-135.251.97.154/AHPLG-2-5-SIG",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5f0d6e563d56864ce3a262b4_33816832"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5f0d6e563d56864ce3a262b4_33816832_5f0d6e563d56864ce3a262b4_33882368",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"BI",
                    "zEndNodes":[
                        "5f0d6e563d56864ce3a262b4_33882368"
                    ]
                },
                {
                    "neId":"5f0d6e563d56864ce3a262b4",
                    "userLabel":"AHPLG-2-5-SIG;/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5f0d6e563d56864ce3a262b4_33882368",
                    "ptpUserLabel":"AHPLG-2-5-SIG",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.154",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5f0d6e563d56864ce3a262b4_2.5",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"AHPLG-2-5",
                    "id":"5f0d6e563d56864ce3a262b4_33882368_AHPLG-2-5-SIG;/oms=1"
                },
                {
                    "neId":"5f0d6e563d56864ce3a262b4",
                    "userLabel":null,
                    "isMergedRoute":null,
                    "protectionType":"SIMPLE",
                    "aEndNodes":[
                        "5f0d6e563d56864ce3a262b4_33882368_AHPLG-2-5-SIG;/oms=1"
                    ],
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.154",
                    "pgData":null,
                    "type":"XC",
                    "params":null,
                    "equipmentId":"5f0d6e563d56864ce3a262b4_2.5",
                    "zEndNodes":[
                        "5f0d6e563d56864ce3a262b4_33883136_AHPLG-2-5-LINE;/oms=1"
                    ],
                    "equipmentUserLabel":"AHPLG-2-5",
                    "id":"5f0d6e563d56864ce3a262b4_33882368_AHPLG-2-5-SIG;/oms=1-5f0d6e563d56864ce3a262b4_33883136_AHPLG-2-5-LINE;/oms=1",
                    "direction":"BI"
                },
                {
                    "neId":"5f0d6e563d56864ce3a262b4",
                    "userLabel":"AHPLG-2-5-LINE;/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5f0d6e563d56864ce3a262b4_33883136",
                    "ptpUserLabel":"AHPLG-2-5-LINE",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.154",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5f0d6e563d56864ce3a262b4_2.5",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"AHPLG-2-5",
                    "id":"5f0d6e563d56864ce3a262b4_33883136_AHPLG-2-5-LINE;/oms=1"
                },
                {
                    "userLabel":"DPE-135.251.97.154/OPSA-1-5-A--DPE-135.251.97.154/AHPLG-2-5-LINE",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5f0d6e563d56864ce3a262b4_17105408"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5f0d6e563d56864ce3a262b4_17105408_5f0d6e563d56864ce3a262b4_33883136",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"BI",
                    "zEndNodes":[
                        "5f0d6e563d56864ce3a262b4_33883136"
                    ]
                },
                {
                    "neId":"5f0d6e563d56864ce3a262b4",
                    "userLabel":"OPSA-1-5-A;/frequency=/oms=1",
                    "isMergedRoute":null,
                    "ptpId":"5f0d6e563d56864ce3a262b4_17105408",
                    "ptpUserLabel":"OPSA-1-5-A",
                    "isSeparatedRoute":null,
                    "neUserLabel":"DPE-135.251.97.154",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5f0d6e563d56864ce3a262b4_1.5",
                    "tpType":"CTP",
                    "layerRate":"OMS",
                    "equipmentUserLabel":"OPSA-1-5",
                    "id":"5f0d6e563d56864ce3a262b4_17105408_OPSA-1-5-A;/frequency=/oms=1"
                }
            ]
        },
        "equipmentUserLabel":"OPSA-1-5",
        "id":"5efed95b85b17f06bcf53da3_17105152_OPSA-1-5-SIG;/frequency=/oms=1-5efed95b85b17f06bcf53da3_17105408_OPSA-1-5-A;/frequency=/oms=1-5efed95b85b17f06bcf53da3_17105664_OPSA-1-5-B;/frequency=/oms=1",
        "direction":"BI"
    },
    {
        "neId":"5f0d6e563d56864ce3a262b4",
        "userLabel":null,
        "isMergedRoute":true,
        "protectionType":"OPS",
        "aEndNodes":[
            "5f0d6e563d56864ce3a262b4_17105152_OPSA-1-5-SIG;/frequency=/oms=1"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"DPE-135.251.97.154",
        "pgData":{
            "_id":"5f0d6e563d56864ce3a262b4_17105408_17105664",
            "neId":"5f0d6e563d56864ce3a262b4",
            "type":"1+1",
            "nmlId":"5efed95b85b17f06bcf53da3_419507456_SFD44-25-1-OMD;/oms=1_5f0d6e563d56864ce3a262b4_419507456_SFD44-25-1-OMD;/oms=1",
            "userLabel":"PG_1_OMSP_OPSA-1-5",
            "nativeName":"PG_1_OMSP_OPSA-1-5",
            "layerRates":[
                "OMS",
                "PHYSICAL"
            ],
            "direction":"UNI",
            "reversionMode":"nonRevertive",
            "wtrTime":"5",
            "holdOffTime":"0",
            "tpIds":[
                "5f0d6e563d56864ce3a262b4_17105408",
                "5f0d6e563d56864ce3a262b4_17105664"
            ],
            "switchData":{
                "switchStatus":"NoRequest",
                "tpStatus":[
                    {
                        "switchCmd":"noCmd",
                        "txStatus":"unknown",
                        "rxStatus":"standby"
                    },
                    {
                        "switchCmd":"noCmd",
                        "txStatus":"unknown",
                        "rxStatus":"active"
                    }
                ]
            },
            "implementState":"ALLOCATED",
            "params":{
                "groupId":"1",
                "eqptID":"5f0d6e563d56864ce3a262b4_1.5",
                "neNativeName":"PSS-135.251.97.154",
                "protectionMode":"omsp",
                "eqptNativeName":"OPSA-1-5",
                "rowStatus":"active",
                "pgObjectType":"PTP",
                "neNumber":10024
            },
            "usage":"IDLE",
            "id":"5f0d6e563d56864ce3a262b4_17105408_17105664"
        },
        "type":"XC",
        "params":null,
        "equipmentId":"5f0d6e563d56864ce3a262b4_1.5",
        "zEndNodes":[
            "5f0d6e563d56864ce3a262b4_17105408_OPSA-1-5-A;/frequency=/oms=1",
            "5f0d6e563d56864ce3a262b4_17105664_OPSA-1-5-B;/frequency=/oms=1"
        ],
        "equipmentUserLabel":"OPSA-1-5",
        "id":"5f0d6e563d56864ce3a262b4_17105152_OPSA-1-5-SIG;/frequency=/oms=1-5f0d6e563d56864ce3a262b4_17105408_OPSA-1-5-A;/frequency=/oms=1-5f0d6e563d56864ce3a262b4_17105664_OPSA-1-5-B;/frequency=/oms=1",
        "direction":"BI"
    },
    {
        "neId":"5f0d6e563d56864ce3a262b4",
        "userLabel":"OPSA-1-5-SIG;/frequency=/oms=1",
        "isMergedRoute":null,
        "ptpId":"5f0d6e563d56864ce3a262b4_17105152",
        "ptpUserLabel":"OPSA-1-5-SIG",
        "isSeparatedRoute":null,
        "neUserLabel":"DPE-135.251.97.154",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5f0d6e563d56864ce3a262b4_1.5",
        "tpType":"CTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"OPSA-1-5",
        "id":"5f0d6e563d56864ce3a262b4_17105152_OPSA-1-5-SIG;/frequency=/oms=1"
    },
    {
        "userLabel":"DPE-135.251.97.154/SFD44-25-1-OMD--DPE-135.251.97.154/OPSA-1-5-SIG",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5f0d6e563d56864ce3a262b4_419507456"
        ],
        "isSeparatedRoute":null,
        "id":"5f0d6e563d56864ce3a262b4_17105152_5f0d6e563d56864ce3a262b4_419507456",
        "type":"TL",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5f0d6e563d56864ce3a262b4_17105152"
        ]
    },
    {
        "neId":"5f0d6e563d56864ce3a262b4",
        "userLabel":"SFD44-25-1-OMD;/frequency=9600.000",
        "isMergedRoute":null,
        "ptpId":"5f0d6e563d56864ce3a262b4_419507456",
        "ptpUserLabel":"SFD44-25-1-OMD",
        "isSeparatedRoute":null,
        "neUserLabel":"DPE-135.251.97.154",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5f0d6e563d56864ce3a262b4_25.1",
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"SFD44-25-1",
        "id":"5f0d6e563d56864ce3a262b4_419507456_SFD44-25-1-OMD;/frequency=9600.000"
    },
    {
        "neId":"5f0d6e563d56864ce3a262b4",
        "userLabel":null,
        "isMergedRoute":null,
        "protectionType":"SIMPLE",
        "aEndNodes":[
            "5f0d6e563d56864ce3a262b4_419496192_SFD44-25-1-9600;/frequency=9600.000"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"DPE-135.251.97.154",
        "pgData":null,
        "type":"XC",
        "params":null,
        "equipmentId":"5f0d6e563d56864ce3a262b4_25.1",
        "zEndNodes":[
            "5f0d6e563d56864ce3a262b4_419507456_SFD44-25-1-OMD;/frequency=9600.000"
        ],
        "equipmentUserLabel":"SFD44-25-1",
        "id":"5f0d6e563d56864ce3a262b4_419496192_SFD44-25-1-9600;/frequency=9600.000-5f0d6e563d56864ce3a262b4_419507456_SFD44-25-1-OMD;/frequency=9600.000",
        "direction":"BI"
    },
    {
        "neId":"5f0d6e563d56864ce3a262b4",
        "userLabel":"SFD44-25-1-9600;/frequency=9600.000",
        "isMergedRoute":null,
        "ptpId":"5f0d6e563d56864ce3a262b4_419496192",
        "ptpUserLabel":"SFD44-25-1-9600",
        "isSeparatedRoute":null,
        "neUserLabel":"DPE-135.251.97.154",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5f0d6e563d56864ce3a262b4_25.1",
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"SFD44-25-1",
        "id":"5f0d6e563d56864ce3a262b4_419496192_SFD44-25-1-9600;/frequency=9600.000"
    },
    {
        "userLabel":"DPE-135.251.97.154/SFD44-25-1-9600--DPE-135.251.97.154/260SCX2-1-2-L1",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5f0d6e563d56864ce3a262b4_419496192"
        ],
        "isSeparatedRoute":null,
        "id":"5f0d6e563d56864ce3a262b4_16908544_5f0d6e563d56864ce3a262b4_419496192",
        "type":"TL",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5f0d6e563d56864ce3a262b4_16908544"
        ]
    },
    {
        "neId":"5f0d6e563d56864ce3a262b4",
        "userLabel":"260SCX2-1-2-L1;/frequency=/tunable-number=1",
        "isMergedRoute":null,
        "ptpId":"5f0d6e563d56864ce3a262b4_16908544",
        "ptpUserLabel":"260SCX2-1-2-L1",
        "isSeparatedRoute":null,
        "neUserLabel":"DPE-135.251.97.154",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5f0d6e563d56864ce3a262b4_1.2",
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"260SCX2-1-2",
        "id":"5f0d6e563d56864ce3a262b4_16908544_260SCX2-1-2-L1;/frequency=/tunable-number=1"
    }
];
const flowInfo_DB_omsp = [
    {
        "neId": "5edf786f65ce16513da6f4c5",
        "userLabel": "MUX-1-41-MUX;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5edf786f65ce16513da6f4c5_MUX-1-41-MUX",
        "ptpUserLabel": "MUX-1-41-MUX",
        "isSeparatedRoute": null,
        "neUserLabel": "DirectLink-164",
        "type": "TP",
        "params": {
            "rootAlarmState": null,
            "alarmState": "CLEARED"
        },
        "equipmentId": "5edf786f65ce16513da6f4c5_1.41",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "MUX-1-41",
        "id": "5edf786f65ce16513da6f4c5_MUX-1-41-MUX_MUX-1-41-MUX;/oms=1"
    },
    {
        "userLabel": "DirectLink-164/MUX-1-41-MUX--DirectLink-164/PORT-1-3-1-APSc",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5edf786f65ce16513da6f4c5_MUX-1-41-MUX"
        ],
        "isSeparatedRoute": null,
        "id": "5edf786f65ce16513da6f4c5_MUX-1-41-MUX_5edf786f65ce16513da6f4c5_PORT-1-3-1-APSc",
        "type": "TL",
        "params": {
            "rootAlarmState": null,
            "alarmState": "CLEARED"
        },
        "direction": "BI",
        "zEndNodes": [
            "5edf786f65ce16513da6f4c5_PORT-1-3-1-APSc"
        ]
    },
    {
        "neId": "5edf786f65ce16513da6f4c5",
        "userLabel": "PORT-1-3-1-APSc;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5edf786f65ce16513da6f4c5_PORT-1-3-1-APSc",
        "ptpUserLabel": "PORT-1-3-1-APSc",
        "isSeparatedRoute": null,
        "neUserLabel": "DirectLink-164",
        "type": "TP",
        "params": {
            "rootAlarmState": null,
            "alarmState": "CLEARED"
        },
        "equipmentId": "5edf786f65ce16513da6f4c5_1.3",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "OLP-1-3",
        "id": "5edf786f65ce16513da6f4c5_PORT-1-3-1-APSc_PORT-1-3-1-APSc;/oms=1"
    },
    {
        "neId": "5edf786f65ce16513da6f4c5",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "OPS",
        "aEndNodes": [
            "5edf786f65ce16513da6f4c5_PORT-1-3-1-APSc_PORT-1-3-1-APSc;/oms=1"
        ],
        "isSeparatedRoute": true,
        "neUserLabel": "DirectLink-164",
        "pgData": {
            "_id": "5edf786f65ce16513da6f4c5_PORT-1-3-1-APSp_PORT-1-3-1-APSs",
            "neId": "5edf786f65ce16513da6f4c5",
            "type": "1+1",
            "nmlId": "5edf781165ce16513da6f19f_MUX-1-41-MUX_MUX-1-41-MUX;/oms=1_5edf786f65ce16513da6f4c5_MUX-1-41-MUX_MUX-1-41-MUX;/oms=1",
            "userLabel": "PG_1_OLP-1-3",
            "nativeName": "PG_1_OLP-1-3",
            "layerRates": [
                "PHYSICAL",
                "OMS"
            ],
            "direction": "UNI",
            "reversionMode": "nonRevertive",
            "wtrTime": "600000",
            "holdOffTime": "5",
            "tpIds": [
                "5edf786f65ce16513da6f4c5_PORT-1-3-1-APSp",
                "5edf786f65ce16513da6f4c5_PORT-1-3-1-APSs"
            ],
            "switchData": {
                "switchStatus": "NoRequest",
                "tpStatus": [
                    {
                        "switchCmd": "noCmd",
                        "txStatus": "unknown",
                        "rxStatus": "active"
                    },
                    {
                        "switchCmd": "noCmd",
                        "txStatus": "unknown",
                        "rxStatus": "standby"
                    }
                ]
            },
            "implementState": "IMPLEMENTED",
            "netconf": {
                "state": {
                    "revertive": "false",
                    "switch-mode": "auto",
                    "wait-to-restore-time": "600000",
                    "name": "APS-1-3-1",
                    "hold-off-time": "5",
                    "force-to-port": "NONE",
                    "primary-switch-hysteresis": "1.0",
                    "relative-switch-threshold": "0.0",
                    "relative-switch-threshold-offset": "-2.0",
                    "primary-switch-threshold": "-30.0",
                    "secondary-switch-threshold": "-30.0",
                    "active-path": "PRIMARY"
                },
                "ports": {
                    "line-primary-out": {
                        "optical-power": {
                            "avg": "-16.2",
                            "min": "-16.22",
                            "max-time": "1591715015",
                            "max": "-16.18",
                            "interval": "401000000000",
                            "min-time": "1591714804",
                            "instant": "-16.21"
                        }
                    },
                    "line-secondary-out": {
                        "optical-power": {
                            "avg": "-16.2",
                            "min": "-16.22",
                            "max-time": "1591715068",
                            "max": "-16.18",
                            "interval": "401000000000",
                            "min-time": "1591714808",
                            "instant": "-16.2"
                        }
                    },
                    "common-in": {
                        "optical-power": {
                            "avg": "-12.9",
                            "min": "-12.93",
                            "max-time": "1591715046",
                            "max": "-12.87",
                            "interval": "402000000000",
                            "min-time": "1591714801",
                            "instant": "-12.9"
                        },
                        "enabled": "true"
                    },
                    "line-primary-in": {
                        "optical-power": {
                            "avg": "14.79",
                            "min": "14.77",
                            "max-time": "1591714813",
                            "max": "14.81",
                            "interval": "401000000000",
                            "min-time": "1591714801",
                            "instant": "14.79"
                        },
                        "enabled": "true"
                    },
                    "line-secondary-in": {
                        "optical-power": {
                            "avg": "-29.3",
                            "min": "-55.0",
                            "max-time": "1591715042",
                            "max": "20.05",
                            "interval": "401000000000",
                            "min-time": "1591714801",
                            "instant": "20.01"
                        },
                        "enabled": "true"
                    },
                    "common-output": {
                        "optical-power": {
                            "avg": "14.19",
                            "min": "14.18",
                            "max-time": "1591714821",
                            "max": "14.2",
                            "interval": "402000000000",
                            "min-time": "1591714807",
                            "instant": "14.19"
                        }
                    }
                }
            },
            "params": {
                "protectionMode": "OLP",
                "neNumber": 10002,
                "pgObjectType": "PTP",
                "eqptNativeName": "OLP-1-3",
                "groupId": "1",
                "rowStatus": "active",
                "eqptID": "5edf786f65ce16513da6f4c5_1.3",
                "neNativeName": "BOB-DirectLink-164"
            },
            "usage": "IDLE",
            "id": "5edf786f65ce16513da6f4c5_PORT-1-3-1-APSp_PORT-1-3-1-APSs"
        },
        "type": "XC",
        "params": null,
        "equipmentId": "5edf786f65ce16513da6f4c5_1.3",
        "zEndNodes": [
            "5edf786f65ce16513da6f4c5_PORT-1-3-1-APSp_PORT-1-3-1-APSp;/oms=1",
            "5edf786f65ce16513da6f4c5_PORT-1-3-1-APSs_PORT-1-3-1-APSs;/oms=1"
        ],
        "separatedRouteElements": {
            "Spare": [
                {
                    "neId": "5edf786f65ce16513da6f4c5",
                    "userLabel": "PORT-1-3-1-APSs;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5edf786f65ce16513da6f4c5_PORT-1-3-1-APSs",
                    "ptpUserLabel": "PORT-1-3-1-APSs",
                    "isSeparatedRoute": null,
                    "neUserLabel": "DirectLink-164",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5edf786f65ce16513da6f4c5_1.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OLP-1-3",
                    "id": "5edf786f65ce16513da6f4c5_PORT-1-3-1-APSs_PORT-1-3-1-APSs;/oms=1"
                },
                {
                    "userLabel": "DirectLink-164/PORT-1-3-1-APSs--DirectLink-164/PORT-1-4-C",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5edf786f65ce16513da6f4c5_PORT-1-3-1-APSs"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5edf786f65ce16513da6f4c5_PORT-1-3-1-APSs_5edf786f65ce16513da6f4c5_PORT-1-4-C",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5edf786f65ce16513da6f4c5_PORT-1-4-C"
                    ]
                },
                {
                    "neId": "5edf786f65ce16513da6f4c5",
                    "userLabel": "PORT-1-4-C;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5edf786f65ce16513da6f4c5_PORT-1-4-C",
                    "ptpUserLabel": "PORT-1-4-C",
                    "isSeparatedRoute": null,
                    "neUserLabel": "DirectLink-164",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5edf786f65ce16513da6f4c5_1.4",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OA-1-4",
                    "id": "5edf786f65ce16513da6f4c5_PORT-1-4-C_PORT-1-4-C;/oms=1"
                },
                {
                    "neId": "5edf786f65ce16513da6f4c5",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5edf786f65ce16513da6f4c5_PORT-1-4-L_PORT-1-4-L;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "DirectLink-164",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5edf786f65ce16513da6f4c5_1.4",
                    "zEndNodes": [
                        "5edf786f65ce16513da6f4c5_PORT-1-4-C_PORT-1-4-C;/oms=1"
                    ],
                    "equipmentUserLabel": "OA-1-4",
                    "id": "5edf786f65ce16513da6f4c5_PORT-1-4-L_PORT-1-4-L;/oms=1-5edf786f65ce16513da6f4c5_PORT-1-4-C_PORT-1-4-C;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5edf786f65ce16513da6f4c5",
                    "userLabel": "PORT-1-4-L;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5edf786f65ce16513da6f4c5_PORT-1-4-L",
                    "ptpUserLabel": "PORT-1-4-L",
                    "isSeparatedRoute": null,
                    "neUserLabel": "DirectLink-164",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5edf786f65ce16513da6f4c5_1.4",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OA-1-4",
                    "id": "5edf786f65ce16513da6f4c5_PORT-1-4-L_PORT-1-4-L;/oms=1"
                },
                {
                    "userLabel": "DirectLink-164/PORT-1-4-L--DirectLink-165/PORT-1-4-L",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5edf786f65ce16513da6f4c5_PORT-1-4-L"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5edf781165ce16513da6f19f_PORT-1-4-L_5edf786f65ce16513da6f4c5_PORT-1-4-L",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": "CLEARED",
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5edf781165ce16513da6f19f_PORT-1-4-L"
                    ]
                },
                {
                    "neId": "5edf781165ce16513da6f19f",
                    "userLabel": "PORT-1-4-L;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5edf781165ce16513da6f19f_PORT-1-4-L",
                    "ptpUserLabel": "PORT-1-4-L",
                    "isSeparatedRoute": null,
                    "neUserLabel": "DirectLink-165",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5edf781165ce16513da6f19f_1.4",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OA-1-4",
                    "id": "5edf781165ce16513da6f19f_PORT-1-4-L_PORT-1-4-L;/oms=1"
                },
                {
                    "neId": "5edf781165ce16513da6f19f",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5edf781165ce16513da6f19f_PORT-1-4-L_PORT-1-4-L;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "DirectLink-165",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5edf781165ce16513da6f19f_1.4",
                    "zEndNodes": [
                        "5edf781165ce16513da6f19f_PORT-1-4-C_PORT-1-4-C;/oms=1"
                    ],
                    "equipmentUserLabel": "OA-1-4",
                    "id": "5edf781165ce16513da6f19f_PORT-1-4-L_PORT-1-4-L;/oms=1-5edf781165ce16513da6f19f_PORT-1-4-C_PORT-1-4-C;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5edf781165ce16513da6f19f",
                    "userLabel": "PORT-1-4-C;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5edf781165ce16513da6f19f_PORT-1-4-C",
                    "ptpUserLabel": "PORT-1-4-C",
                    "isSeparatedRoute": null,
                    "neUserLabel": "DirectLink-165",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5edf781165ce16513da6f19f_1.4",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OA-1-4",
                    "id": "5edf781165ce16513da6f19f_PORT-1-4-C_PORT-1-4-C;/oms=1"
                },
                {
                    "userLabel": "DirectLink-165/PORT-1-3-1-APSs--DirectLink-165/PORT-1-4-C",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5edf781165ce16513da6f19f_PORT-1-3-1-APSs"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5edf781165ce16513da6f19f_PORT-1-3-1-APSs_5edf781165ce16513da6f19f_PORT-1-4-C",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5edf781165ce16513da6f19f_PORT-1-4-C"
                    ]
                },
                {
                    "neId": "5edf781165ce16513da6f19f",
                    "userLabel": "PORT-1-3-1-APSs;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5edf781165ce16513da6f19f_PORT-1-3-1-APSs",
                    "ptpUserLabel": "PORT-1-3-1-APSs",
                    "isSeparatedRoute": null,
                    "neUserLabel": "DirectLink-165",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5edf781165ce16513da6f19f_1.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OLP-1-3",
                    "id": "5edf781165ce16513da6f19f_PORT-1-3-1-APSs_PORT-1-3-1-APSs;/oms=1"
                }
            ],
            "Main": [
                {
                    "neId": "5edf786f65ce16513da6f4c5",
                    "userLabel": "PORT-1-3-1-APSp;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5edf786f65ce16513da6f4c5_PORT-1-3-1-APSp",
                    "ptpUserLabel": "PORT-1-3-1-APSp",
                    "isSeparatedRoute": null,
                    "neUserLabel": "DirectLink-164",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5edf786f65ce16513da6f4c5_1.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OLP-1-3",
                    "id": "5edf786f65ce16513da6f4c5_PORT-1-3-1-APSp_PORT-1-3-1-APSp;/oms=1"
                },
                {
                    "userLabel": "DirectLink-164/PORT-1-3-1-APSp--DirectLink-164/PORT-1-2-C",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5edf786f65ce16513da6f4c5_PORT-1-3-1-APSp"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5edf786f65ce16513da6f4c5_PORT-1-2-C_5edf786f65ce16513da6f4c5_PORT-1-3-1-APSp",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5edf786f65ce16513da6f4c5_PORT-1-2-C"
                    ]
                },
                {
                    "neId": "5edf786f65ce16513da6f4c5",
                    "userLabel": "PORT-1-2-C;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5edf786f65ce16513da6f4c5_PORT-1-2-C",
                    "ptpUserLabel": "PORT-1-2-C",
                    "isSeparatedRoute": null,
                    "neUserLabel": "DirectLink-164",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5edf786f65ce16513da6f4c5_1.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OA-1-2",
                    "id": "5edf786f65ce16513da6f4c5_PORT-1-2-C_PORT-1-2-C;/oms=1"
                },
                {
                    "neId": "5edf786f65ce16513da6f4c5",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5edf786f65ce16513da6f4c5_PORT-1-2-L_PORT-1-2-L;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "DirectLink-164",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5edf786f65ce16513da6f4c5_1.2",
                    "zEndNodes": [
                        "5edf786f65ce16513da6f4c5_PORT-1-2-C_PORT-1-2-C;/oms=1"
                    ],
                    "equipmentUserLabel": "OA-1-2",
                    "id": "5edf786f65ce16513da6f4c5_PORT-1-2-L_PORT-1-2-L;/oms=1-5edf786f65ce16513da6f4c5_PORT-1-2-C_PORT-1-2-C;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5edf786f65ce16513da6f4c5",
                    "userLabel": "PORT-1-2-L;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5edf786f65ce16513da6f4c5_PORT-1-2-L",
                    "ptpUserLabel": "PORT-1-2-L",
                    "isSeparatedRoute": null,
                    "neUserLabel": "DirectLink-164",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5edf786f65ce16513da6f4c5_1.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OA-1-2",
                    "id": "5edf786f65ce16513da6f4c5_PORT-1-2-L_PORT-1-2-L;/oms=1"
                },
                {
                    "userLabel": "DirectLink-164/PORT-1-2-L--DirectLink-165/PORT-1-2-L",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5edf786f65ce16513da6f4c5_PORT-1-2-L"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5edf781165ce16513da6f19f_PORT-1-2-L_5edf786f65ce16513da6f4c5_PORT-1-2-L",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": "CLEARED",
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5edf781165ce16513da6f19f_PORT-1-2-L"
                    ]
                },
                {
                    "neId": "5edf781165ce16513da6f19f",
                    "userLabel": "PORT-1-2-L;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5edf781165ce16513da6f19f_PORT-1-2-L",
                    "ptpUserLabel": "PORT-1-2-L",
                    "isSeparatedRoute": null,
                    "neUserLabel": "DirectLink-165",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5edf781165ce16513da6f19f_1.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OA-1-2",
                    "id": "5edf781165ce16513da6f19f_PORT-1-2-L_PORT-1-2-L;/oms=1"
                },
                {
                    "neId": "5edf781165ce16513da6f19f",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5edf781165ce16513da6f19f_PORT-1-2-L_PORT-1-2-L;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "DirectLink-165",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5edf781165ce16513da6f19f_1.2",
                    "zEndNodes": [
                        "5edf781165ce16513da6f19f_PORT-1-2-C_PORT-1-2-C;/oms=1"
                    ],
                    "equipmentUserLabel": "OA-1-2",
                    "id": "5edf781165ce16513da6f19f_PORT-1-2-L_PORT-1-2-L;/oms=1-5edf781165ce16513da6f19f_PORT-1-2-C_PORT-1-2-C;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5edf781165ce16513da6f19f",
                    "userLabel": "PORT-1-2-C;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5edf781165ce16513da6f19f_PORT-1-2-C",
                    "ptpUserLabel": "PORT-1-2-C",
                    "isSeparatedRoute": null,
                    "neUserLabel": "DirectLink-165",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5edf781165ce16513da6f19f_1.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OA-1-2",
                    "id": "5edf781165ce16513da6f19f_PORT-1-2-C_PORT-1-2-C;/oms=1"
                },
                {
                    "userLabel": "DirectLink-165/PORT-1-3-1-APSp--DirectLink-165/PORT-1-2-C",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5edf781165ce16513da6f19f_PORT-1-3-1-APSp"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5edf781165ce16513da6f19f_PORT-1-2-C_5edf781165ce16513da6f19f_PORT-1-3-1-APSp",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5edf781165ce16513da6f19f_PORT-1-2-C"
                    ]
                },
                {
                    "neId": "5edf781165ce16513da6f19f",
                    "userLabel": "PORT-1-3-1-APSp;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5edf781165ce16513da6f19f_PORT-1-3-1-APSp",
                    "ptpUserLabel": "PORT-1-3-1-APSp",
                    "isSeparatedRoute": null,
                    "neUserLabel": "DirectLink-165",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5edf781165ce16513da6f19f_1.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OLP-1-3",
                    "id": "5edf781165ce16513da6f19f_PORT-1-3-1-APSp_PORT-1-3-1-APSp;/oms=1"
                }
            ]
        },
        "equipmentUserLabel": "OLP-1-3",
        "id": "5edf786f65ce16513da6f4c5_PORT-1-3-1-APSc_PORT-1-3-1-APSc;/oms=1-5edf786f65ce16513da6f4c5_PORT-1-3-1-APSp_PORT-1-3-1-APSp;/oms=1-5edf786f65ce16513da6f4c5_PORT-1-3-1-APSs_PORT-1-3-1-APSs;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5edf781165ce16513da6f19f",
        "userLabel": null,
        "isMergedRoute": true,
        "protectionType": "OPS",
        "aEndNodes": [
            "5edf781165ce16513da6f19f_PORT-1-3-1-APSc_PORT-1-3-1-APSc;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "DirectLink-165",
        "pgData": {
            "_id": "5edf781165ce16513da6f19f_PORT-1-3-1-APSp_PORT-1-3-1-APSs",
            "neId": "5edf781165ce16513da6f19f",
            "type": "1+1",
            "nmlId": "5edf781165ce16513da6f19f_MUX-1-41-MUX_MUX-1-41-MUX;/oms=1_5edf786f65ce16513da6f4c5_MUX-1-41-MUX_MUX-1-41-MUX;/oms=1",
            "userLabel": "PG_1_OLP-1-3",
            "nativeName": "PG_1_OLP-1-3",
            "layerRates": [
                "PHYSICAL",
                "OMS"
            ],
            "direction": "BI",
            "reversionMode": "revertive",
            "wtrTime": "30000",
            "holdOffTime": "0",
            "tpIds": [
                "5edf781165ce16513da6f19f_PORT-1-3-1-APSp",
                "5edf781165ce16513da6f19f_PORT-1-3-1-APSs"
            ],
            "switchData": {
                "switchStatus": "NoRequest",
                "tpStatus": [
                    {
                        "switchCmd": "noCmd",
                        "txStatus": "unknown",
                        "rxStatus": "active"
                    },
                    {
                        "switchCmd": "noCmd",
                        "txStatus": "unknown",
                        "rxStatus": "standby"
                    }
                ]
            },
            "implementState": "IMPLEMENTED",
            "netconf": {
                "state": {
                    "revertive": "true",
                    "switch-mode": "force",
                    "wait-to-restore-time": "30000",
                    "name": "APS-1-3-1",
                    "hold-off-time": "0",
                    "force-to-port": "PRIMARY",
                    "primary-switch-hysteresis": "0.0",
                    "relative-switch-threshold": "0.0",
                    "relative-switch-threshold-offset": "1.0",
                    "primary-switch-threshold": "17.0",
                    "secondary-switch-threshold": "0.0",
                    "active-path": "PRIMARY"
                },
                "ports": {
                    "line-primary-out": {
                        "optical-power": {
                            "avg": "-15.99",
                            "min": "-16.01",
                            "max-time": "1591714818",
                            "max": "-15.97",
                            "interval": "401000000000",
                            "min-time": "1591715144",
                            "instant": "-15.99"
                        }
                    },
                    "line-secondary-out": {
                        "optical-power": {
                            "avg": "-15.99",
                            "min": "-16.0",
                            "max-time": "1591714810",
                            "max": "-15.97",
                            "interval": "401000000000",
                            "min-time": "1591714808",
                            "instant": "-15.98"
                        }
                    },
                    "common-in": {
                        "optical-power": {
                            "avg": "-12.69",
                            "min": "-12.71",
                            "max-time": "1591714803",
                            "max": "-12.66",
                            "interval": "401000000000",
                            "min-time": "1591714802",
                            "instant": "-12.69"
                        },
                        "enabled": "true"
                    },
                    "line-primary-in": {
                        "optical-power": {
                            "avg": "10.28",
                            "min": "10.26",
                            "max-time": "1591714817",
                            "max": "10.3",
                            "interval": "401000000000",
                            "min-time": "1591714801",
                            "instant": "10.28"
                        },
                        "enabled": "true"
                    },
                    "line-secondary-in": {
                        "optical-power": {
                            "avg": "8.8",
                            "min": "8.76",
                            "max-time": "1591714801",
                            "max": "8.83",
                            "interval": "401000000000",
                            "min-time": "1591715010",
                            "instant": "8.79"
                        },
                        "enabled": "true"
                    },
                    "common-output": {
                        "optical-power": {
                            "avg": "9.16",
                            "min": "8.17",
                            "max-time": "1591714814",
                            "max": "9.69",
                            "interval": "401000000000",
                            "min-time": "1591715002",
                            "instant": "9.68"
                        }
                    }
                }
            },
            "params": {
                "protectionMode": "OLP",
                "neNumber": 10001,
                "pgObjectType": "PTP",
                "eqptNativeName": "OLP-1-3",
                "groupId": "1",
                "rowStatus": "active",
                "eqptID": "5edf781165ce16513da6f19f_1.3",
                "neNativeName": "OTC-DirectLink21-DirectLink-165"
            },
            "usage": "IDLE",
            "id": "5edf781165ce16513da6f19f_PORT-1-3-1-APSp_PORT-1-3-1-APSs"
        },
        "type": "XC",
        "params": null,
        "equipmentId": "5edf781165ce16513da6f19f_1.3",
        "zEndNodes": [
            "5edf781165ce16513da6f19f_PORT-1-3-1-APSp_PORT-1-3-1-APSp;/oms=1",
            "5edf781165ce16513da6f19f_PORT-1-3-1-APSs_PORT-1-3-1-APSs;/oms=1"
        ],
        "equipmentUserLabel": "OLP-1-3",
        "id": "5edf781165ce16513da6f19f_PORT-1-3-1-APSc_PORT-1-3-1-APSc;/oms=1-5edf781165ce16513da6f19f_PORT-1-3-1-APSp_PORT-1-3-1-APSp;/oms=1-5edf781165ce16513da6f19f_PORT-1-3-1-APSs_PORT-1-3-1-APSs;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5edf781165ce16513da6f19f",
        "userLabel": "PORT-1-3-1-APSc;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5edf781165ce16513da6f19f_PORT-1-3-1-APSc",
        "ptpUserLabel": "PORT-1-3-1-APSc",
        "isSeparatedRoute": null,
        "neUserLabel": "DirectLink-165",
        "type": "TP",
        "params": {
            "rootAlarmState": null,
            "alarmState": "CLEARED"
        },
        "equipmentId": "5edf781165ce16513da6f19f_1.3",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "OLP-1-3",
        "id": "5edf781165ce16513da6f19f_PORT-1-3-1-APSc_PORT-1-3-1-APSc;/oms=1"
    },
    {
        "userLabel": "DirectLink-165/MUX-1-41-MUX--DirectLink-165/PORT-1-3-1-APSc",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5edf781165ce16513da6f19f_MUX-1-41-MUX"
        ],
        "isSeparatedRoute": null,
        "id": "5edf781165ce16513da6f19f_MUX-1-41-MUX_5edf781165ce16513da6f19f_PORT-1-3-1-APSc",
        "type": "TL",
        "params": {
            "rootAlarmState": null,
            "alarmState": "CLEARED"
        },
        "direction": "BI",
        "zEndNodes": [
            "5edf781165ce16513da6f19f_PORT-1-3-1-APSc"
        ]
    },
    {
        "neId": "5edf781165ce16513da6f19f",
        "userLabel": "MUX-1-41-MUX;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5edf781165ce16513da6f19f_MUX-1-41-MUX",
        "ptpUserLabel": "MUX-1-41-MUX",
        "isSeparatedRoute": null,
        "neUserLabel": "DirectLink-165",
        "type": "TP",
        "params": {
            "rootAlarmState": null,
            "alarmState": "CLEARED"
        },
        "equipmentId": "5edf781165ce16513da6f19f_1.41",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "MUX-1-41",
        "id": "5edf781165ce16513da6f19f_MUX-1-41-MUX_MUX-1-41-MUX;/oms=1"
    }
];
const flowInfo_contac_112SDX = [
    {
        "neId":"5c4812adc245544f4eac0cd5",
        "userLabel":"11QPA4-2-3-C1;/odu2=1",
        "isMergedRoute":null,
        "ptpId":"5c4812adc245544f4eac0cd5_33752320",
        "ptpUserLabel":"11QPA4-2-3-C1",
        "isSeparatedRoute":null,
        "neUserLabel":"202",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5c4812adc245544f4eac0cd5_2.3",
        "tpType":"CTP",
        "layerRate":"ODU2",
        "equipmentUserLabel":"11QPA4-2-3",
        "id":"5c4812adc245544f4eac0cd5_33752320_11QPA4-2-3-C1;/odu2=1"
    },
    {
        "neId":"5c4812adc245544f4eac0cd5",
        "userLabel":null,
        "isMergedRoute":null,
        "protectionType":"SIMPLE",
        "aEndNodes":[
            "5c4812adc245544f4eac0cd5_33752320_11QPA4-2-3-C1;/odu2=1"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"202",
        "pgData":null,
        "type":"XC",
        "params":null,
        "equipmentId":"5c4812adc245544f4eac0cd5_2.3",
        "zEndNodes":[
            "5c4812adc245544f4eac0cd5_33751296_11QPA4-2-3-L1;/otu2=1/odu2=1"
        ],
        "equipmentUserLabel":"11QPA4-2-3",
        "id":"5c4812adc245544f4eac0cd5_33752320_11QPA4-2-3-C1;/odu2=1-5c4812adc245544f4eac0cd5_33751296_11QPA4-2-3-L1;/otu2=1/odu2=1",
        "direction":"BI"
    },
    {
        "neId":"5c4812adc245544f4eac0cd5",
        "userLabel":"11QPA4-2-3-L1;/otu2=1/odu2=1",
        "isMergedRoute":null,
        "ptpId":"5c4812adc245544f4eac0cd5_33751296",
        "ptpUserLabel":"11QPA4-2-3-L1",
        "isSeparatedRoute":true,
        "neUserLabel":"202",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5c4812adc245544f4eac0cd5_2.3",
        "separatedRouteElements":{
            "Tx":[
                {
                    "userLabel":"202/11QPA4-2-3-L1--202/11QPA4-2-3-VA1",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5c4812adc245544f4eac0cd5_33751296"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5c4812adc245544f4eac0cd5_33751296_5c4812adc245544f4eac0cd5_33753344",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"UNI",
                    "zEndNodes":[
                        "5c4812adc245544f4eac0cd5_33753344"
                    ]
                },
                {
                    "neId":"5c4812adc245544f4eac0cd5",
                    "userLabel":"11QPA4-2-3-VA1;/frequency=/tunable-number=1",
                    "isMergedRoute":null,
                    "ptpId":"5c4812adc245544f4eac0cd5_33753344",
                    "ptpUserLabel":"11QPA4-2-3-VA1",
                    "isSeparatedRoute":null,
                    "neUserLabel":"202",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5c4812adc245544f4eac0cd5_2.3",
                    "tpType":"CTP",
                    "layerRate":"OCH",
                    "equipmentUserLabel":"11QPA4-2-3",
                    "id":"5c4812adc245544f4eac0cd5_33753344_11QPA4-2-3-VA1;/frequency=/tunable-number=1"
                },
                {
                    "userLabel":"202/11QPA4-2-3-VA1--202/112SDX11-2-2-C1",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5c4812adc245544f4eac0cd5_33753344"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5c4812adc245544f4eac0cd5_33686784_5c4812adc245544f4eac0cd5_33753344",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"UNI",
                    "zEndNodes":[
                        "5c4812adc245544f4eac0cd5_33686784"
                    ]
                }
            ],
            "Rx":[
                {
                    "userLabel":"202/112SDX11-2-2-C1--202/11QPA4-2-3-L1",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5c4812adc245544f4eac0cd5_33686784"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5c4812adc245544f4eac0cd5_33686784_5c4812adc245544f4eac0cd5_33751296",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"UNI",
                    "zEndNodes":[
                        "5c4812adc245544f4eac0cd5_33751296"
                    ]
                }
            ]
        },
        "tpType":"CTP",
        "layerRate":"ODU2",
        "equipmentUserLabel":"11QPA4-2-3",
        "id":"5c4812adc245544f4eac0cd5_33751296_11QPA4-2-3-L1;/otu2=1/odu2=1"
    },
    {
        "neId":"5c4812adc245544f4eac0cd5",
        "userLabel":"112SDX11-2-2-C1;/odu2=1",
        "isMergedRoute":true,
        "ptpId":"5c4812adc245544f4eac0cd5_33686784",
        "ptpUserLabel":"112SDX11-2-2-C1",
        "isSeparatedRoute":null,
        "neUserLabel":"202",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5c4812adc245544f4eac0cd5_2.2",
        "tpType":"CTP",
        "layerRate":"ODU2",
        "equipmentUserLabel":"112SDX11-2-2",
        "id":"5c4812adc245544f4eac0cd5_33686784_112SDX11-2-2-C1;/odu2=1"
    },
    {
        "neId":"5c4812adc245544f4eac0cd5",
        "userLabel":"112SDX11",
        "isMergedRoute":null,
        "protectionType":"SIMPLE",
        "aEndNodes":[
            "5c4812adc245544f4eac0cd5_33685760_112SDX11-2-2-L1;/otu4=1/odu4=1/odu2=1"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"202",
        "pgData":null,
        "type":"XC",
        "params":null,
        "equipmentId":"5c4812adc245544f4eac0cd5_2.2",
        "zEndNodes":[
            "5c4812adc245544f4eac0cd5_33686784_112SDX11-2-2-C1;/odu2=1"
        ],
        "equipmentUserLabel":"112SDX11-2-2",
        "id":"5c4812adc245544f4eac0cd5_33685760_112SDX11-2-2-L1;/otu4=1/odu4=1/odu2=1-5c4812adc245544f4eac0cd5_33686784_112SDX11-2-2-C1;/odu2=1",
        "direction":"BI"
    },
    {
        "neId":"5c4812adc245544f4eac0cd5",
        "userLabel":"112SDX11-2-2-L1;/otu4=1/odu4=1/odu2=1",
        "isMergedRoute":null,
        "ptpId":"5c4812adc245544f4eac0cd5_33685760",
        "ptpUserLabel":"112SDX11-2-2-L1",
        "isSeparatedRoute":null,
        "neUserLabel":"202",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5c4812adc245544f4eac0cd5_2.2",
        "tpType":"CTP",
        "layerRate":"ODU2",
        "equipmentUserLabel":"112SDX11-2-2",
        "id":"5c4812adc245544f4eac0cd5_33685760_112SDX11-2-2-L1;/otu4=1/odu4=1/odu2=1"
    },
    {
        "userLabel":"202/112SDX11-2-2-L1--202/SFD44-27-1-9170",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5c4812adc245544f4eac0cd5_33685760"
        ],
        "isSeparatedRoute":null,
        "id":"5c4812adc245544f4eac0cd5_33685760_5c4812adc245544f4eac0cd5_453061632",
        "type":"TL",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5c4812adc245544f4eac0cd5_453061632"
        ]
    },
    {
        "neId":"5c4812adc245544f4eac0cd5",
        "userLabel":"SFD44-27-1-9170;/frequency=9170.000",
        "isMergedRoute":null,
        "ptpId":"5c4812adc245544f4eac0cd5_453061632",
        "ptpUserLabel":"SFD44-27-1-9170",
        "isSeparatedRoute":null,
        "neUserLabel":"202",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5c4812adc245544f4eac0cd5_27.1",
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"SFD44-27-1",
        "id":"5c4812adc245544f4eac0cd5_453061632_SFD44-27-1-9170;/frequency=9170.000"
    },
    {
        "neId":"5c4812adc245544f4eac0cd5",
        "userLabel":null,
        "isMergedRoute":null,
        "protectionType":"SIMPLE",
        "aEndNodes":[
            "5c4812adc245544f4eac0cd5_453061632_SFD44-27-1-9170;/frequency=9170.000"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"202",
        "pgData":null,
        "type":"XC",
        "params":null,
        "equipmentId":"5c4812adc245544f4eac0cd5_27.1",
        "zEndNodes":[
            "5c4812adc245544f4eac0cd5_453061888_SFD44-27-1-OMD;/frequency=9170.000"
        ],
        "equipmentUserLabel":"SFD44-27-1",
        "id":"5c4812adc245544f4eac0cd5_453061632_SFD44-27-1-9170;/frequency=9170.000-5c4812adc245544f4eac0cd5_453061888_SFD44-27-1-OMD;/frequency=9170.000",
        "direction":"BI"
    },
    {
        "neId":"5c4812adc245544f4eac0cd5",
        "userLabel":"SFD44-27-1-OMD;/frequency=9170.000",
        "isMergedRoute":null,
        "ptpId":"5c4812adc245544f4eac0cd5_453061888",
        "ptpUserLabel":"SFD44-27-1-OMD",
        "isSeparatedRoute":null,
        "neUserLabel":"202",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5c4812adc245544f4eac0cd5_27.1",
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"SFD44-27-1",
        "id":"5c4812adc245544f4eac0cd5_453061888_SFD44-27-1-OMD;/frequency=9170.000"
    },
    {
        "userLabel":"202/AHPHG-2-4-SIG--202/SFD44-27-1-OMD",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5c4812adc245544f4eac0cd5_33816832"
        ],
        "isSeparatedRoute":null,
        "id":"5c4812adc245544f4eac0cd5_33816832_5c4812adc245544f4eac0cd5_453061888",
        "type":"TL",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5c4812adc245544f4eac0cd5_453061888"
        ]
    },
    {
        "neId":"5c4812adc245544f4eac0cd5",
        "userLabel":"AHPHG-2-4-SIG;/oms=1",
        "isMergedRoute":null,
        "ptpId":"5c4812adc245544f4eac0cd5_33816832",
        "ptpUserLabel":"AHPHG-2-4-SIG",
        "isSeparatedRoute":null,
        "neUserLabel":"202",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5c4812adc245544f4eac0cd5_2.4",
        "tpType":"CTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"AHPHG-2-4",
        "id":"5c4812adc245544f4eac0cd5_33816832_AHPHG-2-4-SIG;/oms=1"
    },
    {
        "neId":"5c4812adc245544f4eac0cd5",
        "userLabel":null,
        "isMergedRoute":null,
        "protectionType":"SIMPLE",
        "aEndNodes":[
            "5c4812adc245544f4eac0cd5_33816832_AHPHG-2-4-SIG;/oms=1"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"202",
        "pgData":null,
        "type":"XC",
        "params":null,
        "equipmentId":"5c4812adc245544f4eac0cd5_2.4",
        "zEndNodes":[
            "5c4812adc245544f4eac0cd5_33817600_AHPHG-2-4-LINE;/oms=1"
        ],
        "equipmentUserLabel":"AHPHG-2-4",
        "id":"5c4812adc245544f4eac0cd5_33816832_AHPHG-2-4-SIG;/oms=1-5c4812adc245544f4eac0cd5_33817600_AHPHG-2-4-LINE;/oms=1",
        "direction":"BI"
    },
    {
        "neId":"5c4812adc245544f4eac0cd5",
        "userLabel":"AHPHG-2-4-LINE;/oms=1",
        "isMergedRoute":null,
        "ptpId":"5c4812adc245544f4eac0cd5_33817600",
        "ptpUserLabel":"AHPHG-2-4-LINE",
        "isSeparatedRoute":null,
        "neUserLabel":"202",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5c4812adc245544f4eac0cd5_2.4",
        "tpType":"CTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"AHPHG-2-4",
        "id":"5c4812adc245544f4eac0cd5_33817600_AHPHG-2-4-LINE;/oms=1"
    },
    {
        "userLabel":"201/AHPHG-4-4-LINE--202/AHPHG-2-4-LINE",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5c4812a2c245544f4eac0cd4_67372032"
        ],
        "isSeparatedRoute":null,
        "id":"5c4812a2c245544f4eac0cd4_67372032_5c4812adc245544f4eac0cd5_33817600",
        "type":"TL",
        "params":{
            "rootAlarmState":"CLEARED",
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5c4812adc245544f4eac0cd5_33817600"
        ]
    },
    {
        "neId":"5c4812a2c245544f4eac0cd4",
        "userLabel":"AHPHG-4-4-LINE;/oms=1",
        "isMergedRoute":null,
        "ptpId":"5c4812a2c245544f4eac0cd4_67372032",
        "ptpUserLabel":"AHPHG-4-4-LINE",
        "isSeparatedRoute":null,
        "neUserLabel":"201",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5c4812a2c245544f4eac0cd4_4.4",
        "tpType":"CTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"AHPHG-4-4",
        "id":"5c4812a2c245544f4eac0cd4_67372032_AHPHG-4-4-LINE;/oms=1"
    },
    {
        "neId":"5c4812a2c245544f4eac0cd4",
        "userLabel":null,
        "isMergedRoute":null,
        "protectionType":"SIMPLE",
        "aEndNodes":[
            "5c4812a2c245544f4eac0cd4_67371264_AHPHG-4-4-SIG;/oms=1"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"201",
        "pgData":null,
        "type":"XC",
        "params":null,
        "equipmentId":"5c4812a2c245544f4eac0cd4_4.4",
        "zEndNodes":[
            "5c4812a2c245544f4eac0cd4_67372032_AHPHG-4-4-LINE;/oms=1"
        ],
        "equipmentUserLabel":"AHPHG-4-4",
        "id":"5c4812a2c245544f4eac0cd4_67371264_AHPHG-4-4-SIG;/oms=1-5c4812a2c245544f4eac0cd4_67372032_AHPHG-4-4-LINE;/oms=1",
        "direction":"BI"
    },
    {
        "neId":"5c4812a2c245544f4eac0cd4",
        "userLabel":"AHPHG-4-4-SIG;/oms=1",
        "isMergedRoute":null,
        "ptpId":"5c4812a2c245544f4eac0cd4_67371264",
        "ptpUserLabel":"AHPHG-4-4-SIG",
        "isSeparatedRoute":null,
        "neUserLabel":"201",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5c4812a2c245544f4eac0cd4_4.4",
        "tpType":"CTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"AHPHG-4-4",
        "id":"5c4812a2c245544f4eac0cd4_67371264_AHPHG-4-4-SIG;/oms=1"
    },
    {
        "userLabel":"201/AHPHG-4-4-SIG--201/SFD44-28-1-OMD",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5c4812a2c245544f4eac0cd4_67371264"
        ],
        "isSeparatedRoute":null,
        "id":"5c4812a2c245544f4eac0cd4_469839104_5c4812a2c245544f4eac0cd4_67371264",
        "type":"TL",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5c4812a2c245544f4eac0cd4_469839104"
        ]
    },
    {
        "neId":"5c4812a2c245544f4eac0cd4",
        "userLabel":"SFD44-28-1-OMD;/frequency=9170.000",
        "isMergedRoute":null,
        "ptpId":"5c4812a2c245544f4eac0cd4_469839104",
        "ptpUserLabel":"SFD44-28-1-OMD",
        "isSeparatedRoute":null,
        "neUserLabel":"201",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5c4812a2c245544f4eac0cd4_28.1",
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"SFD44-28-1",
        "id":"5c4812a2c245544f4eac0cd4_469839104_SFD44-28-1-OMD;/frequency=9170.000"
    },
    {
        "neId":"5c4812a2c245544f4eac0cd4",
        "userLabel":null,
        "isMergedRoute":null,
        "protectionType":"SIMPLE",
        "aEndNodes":[
            "5c4812a2c245544f4eac0cd4_469838848_SFD44-28-1-9170;/frequency=9170.000"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"201",
        "pgData":null,
        "type":"XC",
        "params":null,
        "equipmentId":"5c4812a2c245544f4eac0cd4_28.1",
        "zEndNodes":[
            "5c4812a2c245544f4eac0cd4_469839104_SFD44-28-1-OMD;/frequency=9170.000"
        ],
        "equipmentUserLabel":"SFD44-28-1",
        "id":"5c4812a2c245544f4eac0cd4_469838848_SFD44-28-1-9170;/frequency=9170.000-5c4812a2c245544f4eac0cd4_469839104_SFD44-28-1-OMD;/frequency=9170.000",
        "direction":"BI"
    },
    {
        "neId":"5c4812a2c245544f4eac0cd4",
        "userLabel":"SFD44-28-1-9170;/frequency=9170.000",
        "isMergedRoute":null,
        "ptpId":"5c4812a2c245544f4eac0cd4_469838848",
        "ptpUserLabel":"SFD44-28-1-9170",
        "isSeparatedRoute":null,
        "neUserLabel":"201",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5c4812a2c245544f4eac0cd4_28.1",
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"SFD44-28-1",
        "id":"5c4812a2c245544f4eac0cd4_469838848_SFD44-28-1-9170;/frequency=9170.000"
    },
    {
        "userLabel":"201/112SDX11-4-2-L1--201/SFD44-28-1-9170",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5c4812a2c245544f4eac0cd4_67240192"
        ],
        "isSeparatedRoute":null,
        "id":"5c4812a2c245544f4eac0cd4_469838848_5c4812a2c245544f4eac0cd4_67240192",
        "type":"TL",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5c4812a2c245544f4eac0cd4_469838848"
        ]
    },
    {
        "neId":"5c4812a2c245544f4eac0cd4",
        "userLabel":"112SDX11-4-2-L1;/otu4=1/odu4=1/odu2=1",
        "isMergedRoute":null,
        "ptpId":"5c4812a2c245544f4eac0cd4_67240192",
        "ptpUserLabel":"112SDX11-4-2-L1",
        "isSeparatedRoute":null,
        "neUserLabel":"201",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5c4812a2c245544f4eac0cd4_4.2",
        "tpType":"CTP",
        "layerRate":"ODU2",
        "equipmentUserLabel":"112SDX11-4-2",
        "id":"5c4812a2c245544f4eac0cd4_67240192_112SDX11-4-2-L1;/otu4=1/odu4=1/odu2=1"
    },
    {
        "neId":"5c4812a2c245544f4eac0cd4",
        "userLabel":"112SDX11",
        "isMergedRoute":null,
        "protectionType":"SIMPLE",
        "aEndNodes":[
            "5c4812a2c245544f4eac0cd4_67240192_112SDX11-4-2-L1;/otu4=1/odu4=1/odu2=1"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"201",
        "pgData":null,
        "type":"XC",
        "params":null,
        "equipmentId":"5c4812a2c245544f4eac0cd4_4.2",
        "zEndNodes":[
            "5c4812a2c245544f4eac0cd4_67241216_112SDX11-4-2-C1;/odu2=1"
        ],
        "equipmentUserLabel":"112SDX11-4-2",
        "id":"5c4812a2c245544f4eac0cd4_67240192_112SDX11-4-2-L1;/otu4=1/odu4=1/odu2=1-5c4812a2c245544f4eac0cd4_67241216_112SDX11-4-2-C1;/odu2=1",
        "direction":"BI"
    },
    {
        "neId":"5c4812a2c245544f4eac0cd4",
        "userLabel":"112SDX11-4-2-C1;/odu2=1",
        "isMergedRoute":null,
        "ptpId":"5c4812a2c245544f4eac0cd4_67241216",
        "ptpUserLabel":"112SDX11-4-2-C1",
        "isSeparatedRoute":true,
        "neUserLabel":"201",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5c4812a2c245544f4eac0cd4_4.2",
        "separatedRouteElements":{
            "Tx":[
                {
                    "userLabel":"201/112SDX11-4-2-C1--201/11QPA4-4-3-L1",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5c4812a2c245544f4eac0cd4_67241216"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5c4812a2c245544f4eac0cd4_67241216_5c4812a2c245544f4eac0cd4_67305728",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"UNI",
                    "zEndNodes":[
                        "5c4812a2c245544f4eac0cd4_67305728"
                    ]
                }
            ],
            "Rx":[
                {
                    "userLabel":"201/11QPA4-4-3-VA1--201/112SDX11-4-2-C1",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5c4812a2c245544f4eac0cd4_67307776"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5c4812a2c245544f4eac0cd4_67241216_5c4812a2c245544f4eac0cd4_67307776",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"UNI",
                    "zEndNodes":[
                        "5c4812a2c245544f4eac0cd4_67241216"
                    ]
                },
                {
                    "neId":"5c4812a2c245544f4eac0cd4",
                    "userLabel":"11QPA4-4-3-VA1;/frequency=/tunable-number=1",
                    "isMergedRoute":null,
                    "ptpId":"5c4812a2c245544f4eac0cd4_67307776",
                    "ptpUserLabel":"11QPA4-4-3-VA1",
                    "isSeparatedRoute":null,
                    "neUserLabel":"201",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5c4812a2c245544f4eac0cd4_4.3",
                    "tpType":"CTP",
                    "layerRate":"OCH",
                    "equipmentUserLabel":"11QPA4-4-3",
                    "id":"5c4812a2c245544f4eac0cd4_67307776_11QPA4-4-3-VA1;/frequency=/tunable-number=1"
                },
                {
                    "userLabel":"201/11QPA4-4-3-L1--201/11QPA4-4-3-VA1",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5c4812a2c245544f4eac0cd4_67305728"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5c4812a2c245544f4eac0cd4_67305728_5c4812a2c245544f4eac0cd4_67307776",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"UNI",
                    "zEndNodes":[
                        "5c4812a2c245544f4eac0cd4_67307776"
                    ]
                }
            ]
        },
        "tpType":"CTP",
        "layerRate":"ODU2",
        "equipmentUserLabel":"112SDX11-4-2",
        "id":"5c4812a2c245544f4eac0cd4_67241216_112SDX11-4-2-C1;/odu2=1"
    },
    {
        "neId":"5c4812a2c245544f4eac0cd4",
        "userLabel":"11QPA4-4-3-L1;/otu2=1/odu2=1",
        "isMergedRoute":true,
        "ptpId":"5c4812a2c245544f4eac0cd4_67305728",
        "ptpUserLabel":"11QPA4-4-3-L1",
        "isSeparatedRoute":null,
        "neUserLabel":"201",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5c4812a2c245544f4eac0cd4_4.3",
        "tpType":"CTP",
        "layerRate":"ODU2",
        "equipmentUserLabel":"11QPA4-4-3",
        "id":"5c4812a2c245544f4eac0cd4_67305728_11QPA4-4-3-L1;/otu2=1/odu2=1"
    },
    {
        "neId":"5c4812a2c245544f4eac0cd4",
        "userLabel":null,
        "isMergedRoute":null,
        "protectionType":"SIMPLE",
        "aEndNodes":[
            "5c4812a2c245544f4eac0cd4_67306752_11QPA4-4-3-C1;/odu2=1"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"201",
        "pgData":null,
        "type":"XC",
        "params":null,
        "equipmentId":"5c4812a2c245544f4eac0cd4_4.3",
        "zEndNodes":[
            "5c4812a2c245544f4eac0cd4_67305728_11QPA4-4-3-L1;/otu2=1/odu2=1"
        ],
        "equipmentUserLabel":"11QPA4-4-3",
        "id":"5c4812a2c245544f4eac0cd4_67306752_11QPA4-4-3-C1;/odu2=1-5c4812a2c245544f4eac0cd4_67305728_11QPA4-4-3-L1;/otu2=1/odu2=1",
        "direction":"BI"
    },
    {
        "neId":"5c4812a2c245544f4eac0cd4",
        "userLabel":"11QPA4-4-3-C1;/odu2=1",
        "isMergedRoute":null,
        "ptpId":"5c4812a2c245544f4eac0cd4_67306752",
        "ptpUserLabel":"11QPA4-4-3-C1",
        "isSeparatedRoute":null,
        "neUserLabel":"201",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5c4812a2c245544f4eac0cd4_4.3",
        "tpType":"CTP",
        "layerRate":"ODU2",
        "equipmentUserLabel":"11QPA4-4-3",
        "id":"5c4812a2c245544f4eac0cd4_67306752_11QPA4-4-3-C1;/odu2=1"
    }
];
const flowInfo_real_roadm = [
    {
        "neId":"5e182747b23f442532b7c1d6",
        "userLabel":"130SNX10-8-2-L1;/frequency=/tunable-number=1",
        "isMergedRoute":null,
        "ptpId":"5e182747b23f442532b7c1d6_134349056",
        "ptpUserLabel":"130SNX10-8-2-L1",
        "isSeparatedRoute":null,
        "neUserLabel":"129",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e182747b23f442532b7c1d6_8.2",
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"130SNX10-8-2",
        "id":"5e182747b23f442532b7c1d6_134349056_130SNX10-8-2-L1;/frequency=/tunable-number=1"
    },
    {
        "userLabel":"129/SFD44-51-1-9170--129/130SNX10-8-2-L1",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5e182747b23f442532b7c1d6_855714816"
        ],
        "isSeparatedRoute":null,
        "id":"5e182747b23f442532b7c1d6_134349056_5e182747b23f442532b7c1d6_855714816",
        "type":"TL",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5e182747b23f442532b7c1d6_134349056"
        ]
    },
    {
        "neId":"5e182747b23f442532b7c1d6",
        "userLabel":"SFD44-51-1-9170;/frequency=9170.000",
        "isMergedRoute":null,
        "ptpId":"5e182747b23f442532b7c1d6_855714816",
        "ptpUserLabel":"SFD44-51-1-9170",
        "isSeparatedRoute":null,
        "neUserLabel":"129",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e182747b23f442532b7c1d6_51.1",
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"SFD44-51-1",
        "id":"5e182747b23f442532b7c1d6_855714816_SFD44-51-1-9170;/frequency=9170.000"
    },
    {
        "neId":"5e182747b23f442532b7c1d6",
        "userLabel":null,
        "isMergedRoute":null,
        "protectionType":"SIMPLE",
        "aEndNodes":[
            "5e182747b23f442532b7c1d6_855714816_SFD44-51-1-9170;/frequency=9170.000"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"129",
        "pgData":null,
        "type":"XC",
        "params":null,
        "equipmentId":"5e182747b23f442532b7c1d6_51.1",
        "zEndNodes":[
            "5e182747b23f442532b7c1d6_855715072_SFD44-51-1-OMD;/frequency=9170.000"
        ],
        "equipmentUserLabel":"SFD44-51-1",
        "id":"5e182747b23f442532b7c1d6_855714816_SFD44-51-1-9170;/frequency=9170.000-5e182747b23f442532b7c1d6_855715072_SFD44-51-1-OMD;/frequency=9170.000",
        "direction":"BI"
    },
    {
        "neId":"5e182747b23f442532b7c1d6",
        "userLabel":"SFD44-51-1-OMD;/frequency=9170.000",
        "isMergedRoute":null,
        "ptpId":"5e182747b23f442532b7c1d6_855715072",
        "ptpUserLabel":"SFD44-51-1-OMD",
        "isSeparatedRoute":true,
        "neUserLabel":"129",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e182747b23f442532b7c1d6_51.1",
        "separatedRouteElements":{
            "Tx":[
                {
                    "userLabel":"129/SFD44-51-1-OMD--129/WR8-88AF-8-4-ADDIN1",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5e182747b23f442532b7c1d6_855715072"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5e182747b23f442532b7c1d6_134480896_5e182747b23f442532b7c1d6_855715072",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"UNI",
                    "zEndNodes":[
                        "5e182747b23f442532b7c1d6_134480896"
                    ]
                },
                {
                    "neId":"5e182747b23f442532b7c1d6",
                    "userLabel":"WR8-88AF-8-4-ADDIN1;/frequency=9170.000",
                    "isMergedRoute":null,
                    "ptpId":"5e182747b23f442532b7c1d6_134480896",
                    "ptpUserLabel":"WR8-88AF-8-4-ADDIN1",
                    "isSeparatedRoute":null,
                    "neUserLabel":"129",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5e182747b23f442532b7c1d6_8.4",
                    "tpType":"CTP",
                    "layerRate":"OCH",
                    "equipmentUserLabel":"WR8-88AF-8-4",
                    "id":"5e182747b23f442532b7c1d6_134480896_WR8-88AF-8-4-ADDIN1;/frequency=9170.000"
                },
                {
                    "neId":"5e182747b23f442532b7c1d6",
                    "userLabel":"TAKEOVER-1580870658882",
                    "isMergedRoute":null,
                    "protectionType":"SIMPLE",
                    "aEndNodes":[
                        "5e182747b23f442532b7c1d6_134480896_WR8-88AF-8-4-ADDIN1;/frequency=9170.000"
                    ],
                    "isSeparatedRoute":null,
                    "neUserLabel":"129",
                    "pgData":null,
                    "type":"XC",
                    "params":null,
                    "equipmentId":"5e182747b23f442532b7c1d6_8.4",
                    "zEndNodes":[
                        "5e182747b23f442532b7c1d6_134480128_WR8-88AF-8-4-SIG;/frequency=9170.000"
                    ],
                    "equipmentUserLabel":"WR8-88AF-8-4",
                    "id":"5e182747b23f442532b7c1d6_134480896_WR8-88AF-8-4-ADDIN1;/frequency=9170.000-5e182747b23f442532b7c1d6_134480128_WR8-88AF-8-4-SIG;/frequency=9170.000",
                    "direction":"UNI"
                }
            ],
            "Rx":[
                {
                    "userLabel":"129/ITLU-50-1-EOUT--129/SFD44-51-1-OMD",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5e182747b23f442532b7c1d6_838926848"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5e182747b23f442532b7c1d6_838926848_5e182747b23f442532b7c1d6_855715072",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"UNI",
                    "zEndNodes":[
                        "5e182747b23f442532b7c1d6_855715072"
                    ]
                },
                {
                    "neId":"5e182747b23f442532b7c1d6",
                    "userLabel":"ITLU-50-1-EOUT;/frequency=9170.000",
                    "isMergedRoute":null,
                    "ptpId":"5e182747b23f442532b7c1d6_838926848",
                    "ptpUserLabel":"ITLU-50-1-EOUT",
                    "isSeparatedRoute":null,
                    "neUserLabel":"129",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5e182747b23f442532b7c1d6_50.1",
                    "tpType":"CTP",
                    "layerRate":"OCH",
                    "equipmentUserLabel":"ITLU-50-1",
                    "id":"5e182747b23f442532b7c1d6_838926848_ITLU-50-1-EOUT;/frequency=9170.000"
                },
                {
                    "neId":"5e182747b23f442532b7c1d6",
                    "userLabel":null,
                    "isMergedRoute":null,
                    "protectionType":"SIMPLE",
                    "aEndNodes":[
                        "5e182747b23f442532b7c1d6_838926592_ITLU-50-1-SIGIN;/frequency=9170.000"
                    ],
                    "isSeparatedRoute":null,
                    "neUserLabel":"129",
                    "pgData":null,
                    "type":"XC",
                    "params":null,
                    "equipmentId":"5e182747b23f442532b7c1d6_50.1",
                    "zEndNodes":[
                        "5e182747b23f442532b7c1d6_838926848_ITLU-50-1-EOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel":"ITLU-50-1",
                    "id":"5e182747b23f442532b7c1d6_838926592_ITLU-50-1-SIGIN;/frequency=9170.000-5e182747b23f442532b7c1d6_838926848_ITLU-50-1-EOUT;/frequency=9170.000",
                    "direction":"UNI"
                },
                {
                    "neId":"5e182747b23f442532b7c1d6",
                    "userLabel":"ITLU-50-1-SIGIN;/frequency=9170.000",
                    "isMergedRoute":null,
                    "ptpId":"5e182747b23f442532b7c1d6_838926592",
                    "ptpUserLabel":"ITLU-50-1-SIGIN",
                    "isSeparatedRoute":null,
                    "neUserLabel":"129",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5e182747b23f442532b7c1d6_50.1",
                    "tpType":"CTP",
                    "layerRate":"OCH",
                    "equipmentUserLabel":"ITLU-50-1",
                    "id":"5e182747b23f442532b7c1d6_838926592_ITLU-50-1-SIGIN;/frequency=9170.000"
                },
                {
                    "userLabel":"129/WR8-88AF-8-4-DROPOUT--129/ITLU-50-1-SIGIN",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5e182747b23f442532b7c1d6_134480640"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5e182747b23f442532b7c1d6_134480640_5e182747b23f442532b7c1d6_838926592",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"UNI",
                    "zEndNodes":[
                        "5e182747b23f442532b7c1d6_838926592"
                    ]
                },
                {
                    "neId":"5e182747b23f442532b7c1d6",
                    "userLabel":"WR8-88AF-8-4-DROPOUT;/frequency=9170.000",
                    "isMergedRoute":null,
                    "ptpId":"5e182747b23f442532b7c1d6_134480640",
                    "ptpUserLabel":"WR8-88AF-8-4-DROPOUT",
                    "isSeparatedRoute":null,
                    "neUserLabel":"129",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5e182747b23f442532b7c1d6_8.4",
                    "tpType":"CTP",
                    "layerRate":"OCH",
                    "equipmentUserLabel":"WR8-88AF-8-4",
                    "id":"5e182747b23f442532b7c1d6_134480640_WR8-88AF-8-4-DROPOUT;/frequency=9170.000"
                },
                {
                    "neId":"5e182747b23f442532b7c1d6",
                    "userLabel":"TAKEOVER-1580870658882",
                    "isMergedRoute":null,
                    "protectionType":"SIMPLE",
                    "aEndNodes":[
                        "5e182747b23f442532b7c1d6_134480128_WR8-88AF-8-4-SIG;/frequency=9170.000"
                    ],
                    "isSeparatedRoute":null,
                    "neUserLabel":"129",
                    "pgData":null,
                    "type":"XC",
                    "params":null,
                    "equipmentId":"5e182747b23f442532b7c1d6_8.4",
                    "zEndNodes":[
                        "5e182747b23f442532b7c1d6_134480640_WR8-88AF-8-4-DROPOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel":"WR8-88AF-8-4",
                    "id":"5e182747b23f442532b7c1d6_134480640_WR8-88AF-8-4-DROPOUT;/frequency=9170.000-5e182747b23f442532b7c1d6_134480128_WR8-88AF-8-4-SIG;/frequency=9170.000",
                    "direction":"UNI"
                }
            ]
        },
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"SFD44-51-1",
        "id":"5e182747b23f442532b7c1d6_855715072_SFD44-51-1-OMD;/frequency=9170.000"
    },
    {
        "neId":"5e182747b23f442532b7c1d6",
        "userLabel":"WR8-88AF-8-4-SIG;/frequency=9170.000",
        "isMergedRoute":true,
        "ptpId":"5e182747b23f442532b7c1d6_134480128",
        "ptpUserLabel":"WR8-88AF-8-4-SIG",
        "isSeparatedRoute":null,
        "neUserLabel":"129",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e182747b23f442532b7c1d6_8.4",
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"WR8-88AF-8-4",
        "id":"5e182747b23f442532b7c1d6_134480128_WR8-88AF-8-4-SIG;/frequency=9170.000"
    },
    {
        "userLabel":"129/AHPHG-8-6-SIG--129/WR8-88AF-8-4-SIG",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5e182747b23f442532b7c1d6_134611200"
        ],
        "isSeparatedRoute":null,
        "id":"5e182747b23f442532b7c1d6_134480128_5e182747b23f442532b7c1d6_134611200",
        "type":"TL",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5e182747b23f442532b7c1d6_134480128"
        ]
    },
    {
        "neId":"5e182747b23f442532b7c1d6",
        "userLabel":"AHPHG-8-6-SIG;/oms=1",
        "isMergedRoute":null,
        "ptpId":"5e182747b23f442532b7c1d6_134611200",
        "ptpUserLabel":"AHPHG-8-6-SIG",
        "isSeparatedRoute":null,
        "neUserLabel":"129",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e182747b23f442532b7c1d6_8.6",
        "tpType":"CTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"AHPHG-8-6",
        "id":"5e182747b23f442532b7c1d6_134611200_AHPHG-8-6-SIG;/oms=1"
    },
    {
        "neId":"5e182747b23f442532b7c1d6",
        "userLabel":null,
        "isMergedRoute":null,
        "protectionType":"SIMPLE",
        "aEndNodes":[
            "5e182747b23f442532b7c1d6_134611200_AHPHG-8-6-SIG;/oms=1"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"129",
        "pgData":null,
        "type":"XC",
        "params":null,
        "equipmentId":"5e182747b23f442532b7c1d6_8.6",
        "zEndNodes":[
            "5e182747b23f442532b7c1d6_134611968_AHPHG-8-6-LINE;/oms=1"
        ],
        "equipmentUserLabel":"AHPHG-8-6",
        "id":"5e182747b23f442532b7c1d6_134611200_AHPHG-8-6-SIG;/oms=1-5e182747b23f442532b7c1d6_134611968_AHPHG-8-6-LINE;/oms=1",
        "direction":"BI"
    },
    {
        "neId":"5e182747b23f442532b7c1d6",
        "userLabel":"AHPHG-8-6-LINE;/oms=1",
        "isMergedRoute":null,
        "ptpId":"5e182747b23f442532b7c1d6_134611968",
        "ptpUserLabel":"AHPHG-8-6-LINE",
        "isSeparatedRoute":null,
        "neUserLabel":"129",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e182747b23f442532b7c1d6_8.6",
        "tpType":"CTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"AHPHG-8-6",
        "id":"5e182747b23f442532b7c1d6_134611968_AHPHG-8-6-LINE;/oms=1"
    },
    {
        "userLabel":"129/AHPHG-8-6-LINE--153/AHPHG-3-14-LINE",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5e182747b23f442532b7c1d6_134611968"
        ],
        "isSeparatedRoute":null,
        "id":"5e182747b23f442532b7c1d6_134611968_5e3a26bf16a0886b0537fadc_51250176",
        "type":"TL",
        "params":{
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5e3a26bf16a0886b0537fadc_51250176"
        ]
    },
    {
        "neId":"5e3a26bf16a0886b0537fadc",
        "userLabel":"AHPHG-3-14-LINE;/oms=1",
        "isMergedRoute":null,
        "ptpId":"5e3a26bf16a0886b0537fadc_51250176",
        "ptpUserLabel":"AHPHG-3-14-LINE",
        "isSeparatedRoute":null,
        "neUserLabel":"153",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e3a26bf16a0886b0537fadc_3.14",
        "tpType":"CTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"AHPHG-3-14",
        "id":"5e3a26bf16a0886b0537fadc_51250176_AHPHG-3-14-LINE;/oms=1"
    },
    {
        "neId":"5e3a26bf16a0886b0537fadc",
        "userLabel":null,
        "isMergedRoute":null,
        "protectionType":"SIMPLE",
        "aEndNodes":[
            "5e3a26bf16a0886b0537fadc_51249408_AHPHG-3-14-SIG;/oms=1"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"153",
        "pgData":null,
        "type":"XC",
        "params":null,
        "equipmentId":"5e3a26bf16a0886b0537fadc_3.14",
        "zEndNodes":[
            "5e3a26bf16a0886b0537fadc_51250176_AHPHG-3-14-LINE;/oms=1"
        ],
        "equipmentUserLabel":"AHPHG-3-14",
        "id":"5e3a26bf16a0886b0537fadc_51249408_AHPHG-3-14-SIG;/oms=1-5e3a26bf16a0886b0537fadc_51250176_AHPHG-3-14-LINE;/oms=1",
        "direction":"BI"
    },
    {
        "neId":"5e3a26bf16a0886b0537fadc",
        "userLabel":"AHPHG-3-14-SIG;/oms=1",
        "isMergedRoute":null,
        "ptpId":"5e3a26bf16a0886b0537fadc_51249408",
        "ptpUserLabel":"AHPHG-3-14-SIG",
        "isSeparatedRoute":null,
        "neUserLabel":"153",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e3a26bf16a0886b0537fadc_3.14",
        "tpType":"CTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"AHPHG-3-14",
        "id":"5e3a26bf16a0886b0537fadc_51249408_AHPHG-3-14-SIG;/oms=1"
    },
    {
        "userLabel":"153/AHPHG-3-14-SIG--153/WR8-88AF-3-8-SIG",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5e3a26bf16a0886b0537fadc_51249408"
        ],
        "isSeparatedRoute":null,
        "id":"5e3a26bf16a0886b0537fadc_50856192_5e3a26bf16a0886b0537fadc_51249408",
        "type":"TL",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5e3a26bf16a0886b0537fadc_50856192"
        ]
    },
    {
        "neId":"5e3a26bf16a0886b0537fadc",
        "userLabel":"WR8-88AF-3-8-SIG;/frequency=9170.000",
        "isMergedRoute":null,
        "ptpId":"5e3a26bf16a0886b0537fadc_50856192",
        "ptpUserLabel":"WR8-88AF-3-8-SIG",
        "isSeparatedRoute":true,
        "neUserLabel":"153",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e3a26bf16a0886b0537fadc_3.8",
        "separatedRouteElements":{
            "Rx":[
                {
                    "neId":"5e3a26bf16a0886b0537fadc",
                    "userLabel":"TAKEOVER-1580870658882",
                    "isMergedRoute":null,
                    "protectionType":"SIMPLE",
                    "aEndNodes":[
                        "5e3a26bf16a0886b0537fadc_50859008_WR8-88AF-3-8-MESHOUT1;/frequency=9170.000"
                    ],
                    "isSeparatedRoute":null,
                    "neUserLabel":"153",
                    "pgData":null,
                    "type":"XC",
                    "params":null,
                    "equipmentId":"5e3a26bf16a0886b0537fadc_3.8",
                    "zEndNodes":[
                        "5e3a26bf16a0886b0537fadc_50856192_WR8-88AF-3-8-SIG;/frequency=9170.000"
                    ],
                    "equipmentUserLabel":"WR8-88AF-3-8",
                    "id":"5e3a26bf16a0886b0537fadc_50859008_WR8-88AF-3-8-MESHOUT1;/frequency=9170.000-5e3a26bf16a0886b0537fadc_50856192_WR8-88AF-3-8-SIG;/frequency=9170.000",
                    "direction":"BI"
                },
                {
                    "neId":"5e3a26bf16a0886b0537fadc",
                    "userLabel":"WR8-88AF-3-8-MESHOUT1;/frequency=9170.000",
                    "isMergedRoute":null,
                    "ptpId":"5e3a26bf16a0886b0537fadc_50859008",
                    "ptpUserLabel":"WR8-88AF-3-8-MESHOUT1",
                    "isSeparatedRoute":null,
                    "neUserLabel":"153",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5e3a26bf16a0886b0537fadc_3.8",
                    "tpType":"CTP",
                    "layerRate":"OCH",
                    "equipmentUserLabel":"WR8-88AF-3-8",
                    "id":"5e3a26bf16a0886b0537fadc_50859008_WR8-88AF-3-8-MESHOUT1;/frequency=9170.000"
                },
                {
                    "userLabel":"153/WR8-88AF-3-8-MESHOUT1--153/WR8-88AF-3-10-ADDIN1",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5e3a26bf16a0886b0537fadc_50859008"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5e3a26bf16a0886b0537fadc_50859008_5e3a26bf16a0886b0537fadc_50988032",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"UNI",
                    "zEndNodes":[
                        "5e3a26bf16a0886b0537fadc_50988032"
                    ]
                },
                {
                    "neId":"5e3a26bf16a0886b0537fadc",
                    "userLabel":"WR8-88AF-3-10-ADDIN1;/frequency=9170.000",
                    "isMergedRoute":null,
                    "ptpId":"5e3a26bf16a0886b0537fadc_50988032",
                    "ptpUserLabel":"WR8-88AF-3-10-ADDIN1",
                    "isSeparatedRoute":null,
                    "neUserLabel":"153",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5e3a26bf16a0886b0537fadc_3.10",
                    "tpType":"CTP",
                    "layerRate":"OCH",
                    "equipmentUserLabel":"WR8-88AF-3-10",
                    "id":"5e3a26bf16a0886b0537fadc_50988032_WR8-88AF-3-10-ADDIN1;/frequency=9170.000"
                },
                {
                    "neId":"5e3a26bf16a0886b0537fadc",
                    "userLabel":"TAKEOVER-1580870658882",
                    "isMergedRoute":null,
                    "protectionType":"SIMPLE",
                    "aEndNodes":[
                        "5e3a26bf16a0886b0537fadc_50988032_WR8-88AF-3-10-ADDIN1;/frequency=9170.000"
                    ],
                    "isSeparatedRoute":null,
                    "neUserLabel":"153",
                    "pgData":null,
                    "type":"XC",
                    "params":null,
                    "equipmentId":"5e3a26bf16a0886b0537fadc_3.10",
                    "zEndNodes":[
                        "5e3a26bf16a0886b0537fadc_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000"
                    ],
                    "equipmentUserLabel":"WR8-88AF-3-10",
                    "id":"5e3a26bf16a0886b0537fadc_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000-5e3a26bf16a0886b0537fadc_50988032_WR8-88AF-3-10-ADDIN1;/frequency=9170.000",
                    "direction":"UNI"
                }
            ]
        },
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"WR8-88AF-3-8",
        "id":"5e3a26bf16a0886b0537fadc_50856192_WR8-88AF-3-8-SIG;/frequency=9170.000"
    },
    {
        "neId":"5e3a26bf16a0886b0537fadc",
        "userLabel":"WR8-88AF-3-10-SIG;/frequency=9170.000",
        "isMergedRoute":true,
        "ptpId":"5e3a26bf16a0886b0537fadc_50987264",
        "ptpUserLabel":"WR8-88AF-3-10-SIG",
        "isSeparatedRoute":null,
        "neUserLabel":"153",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e3a26bf16a0886b0537fadc_3.10",
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"WR8-88AF-3-10",
        "id":"5e3a26bf16a0886b0537fadc_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000"
    },
    {
        "userLabel":"153/AHPHG-3-15-SIG--153/WR8-88AF-3-10-SIG",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5e3a26bf16a0886b0537fadc_51314944"
        ],
        "isSeparatedRoute":null,
        "id":"5e3a26bf16a0886b0537fadc_50987264_5e3a26bf16a0886b0537fadc_51314944",
        "type":"TL",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5e3a26bf16a0886b0537fadc_50987264"
        ]
    },
    {
        "neId":"5e3a26bf16a0886b0537fadc",
        "userLabel":"AHPHG-3-15-SIG;/oms=1",
        "isMergedRoute":null,
        "ptpId":"5e3a26bf16a0886b0537fadc_51314944",
        "ptpUserLabel":"AHPHG-3-15-SIG",
        "isSeparatedRoute":null,
        "neUserLabel":"153",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e3a26bf16a0886b0537fadc_3.15",
        "tpType":"CTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"AHPHG-3-15",
        "id":"5e3a26bf16a0886b0537fadc_51314944_AHPHG-3-15-SIG;/oms=1"
    },
    {
        "neId":"5e3a26bf16a0886b0537fadc",
        "userLabel":null,
        "isMergedRoute":null,
        "protectionType":"SIMPLE",
        "aEndNodes":[
            "5e3a26bf16a0886b0537fadc_51314944_AHPHG-3-15-SIG;/oms=1"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"153",
        "pgData":null,
        "type":"XC",
        "params":null,
        "equipmentId":"5e3a26bf16a0886b0537fadc_3.15",
        "zEndNodes":[
            "5e3a26bf16a0886b0537fadc_51315712_AHPHG-3-15-LINE;/oms=1"
        ],
        "equipmentUserLabel":"AHPHG-3-15",
        "id":"5e3a26bf16a0886b0537fadc_51314944_AHPHG-3-15-SIG;/oms=1-5e3a26bf16a0886b0537fadc_51315712_AHPHG-3-15-LINE;/oms=1",
        "direction":"BI"
    },
    {
        "neId":"5e3a26bf16a0886b0537fadc",
        "userLabel":"AHPHG-3-15-LINE;/oms=1",
        "isMergedRoute":null,
        "ptpId":"5e3a26bf16a0886b0537fadc_51315712",
        "ptpUserLabel":"AHPHG-3-15-LINE",
        "isSeparatedRoute":null,
        "neUserLabel":"153",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e3a26bf16a0886b0537fadc_3.15",
        "tpType":"CTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"AHPHG-3-15",
        "id":"5e3a26bf16a0886b0537fadc_51315712_AHPHG-3-15-LINE;/oms=1"
    },
    {
        "userLabel":"153/AHPHG-3-15-LINE--147/AHPHG-4-14-LINE",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5e3a26bf16a0886b0537fadc_51315712"
        ],
        "isSeparatedRoute":null,
        "id":"5e37cfb90215a15d7e60f020_68027392_5e3a26bf16a0886b0537fadc_51315712",
        "type":"TL",
        "params":{
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5e37cfb90215a15d7e60f020_68027392"
        ]
    },
    {
        "neId":"5e37cfb90215a15d7e60f020",
        "userLabel":"AHPHG-4-14-LINE;/oms=1",
        "isMergedRoute":null,
        "ptpId":"5e37cfb90215a15d7e60f020_68027392",
        "ptpUserLabel":"AHPHG-4-14-LINE",
        "isSeparatedRoute":null,
        "neUserLabel":"147",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e37cfb90215a15d7e60f020_4.14",
        "tpType":"CTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"AHPHG-4-14",
        "id":"5e37cfb90215a15d7e60f020_68027392_AHPHG-4-14-LINE;/oms=1"
    },
    {
        "neId":"5e37cfb90215a15d7e60f020",
        "userLabel":null,
        "isMergedRoute":null,
        "protectionType":"SIMPLE",
        "aEndNodes":[
            "5e37cfb90215a15d7e60f020_68026624_AHPHG-4-14-SIG;/oms=1"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"147",
        "pgData":null,
        "type":"XC",
        "params":null,
        "equipmentId":"5e37cfb90215a15d7e60f020_4.14",
        "zEndNodes":[
            "5e37cfb90215a15d7e60f020_68027392_AHPHG-4-14-LINE;/oms=1"
        ],
        "equipmentUserLabel":"AHPHG-4-14",
        "id":"5e37cfb90215a15d7e60f020_68026624_AHPHG-4-14-SIG;/oms=1-5e37cfb90215a15d7e60f020_68027392_AHPHG-4-14-LINE;/oms=1",
        "direction":"BI"
    },
    {
        "neId":"5e37cfb90215a15d7e60f020",
        "userLabel":"AHPHG-4-14-SIG;/oms=1",
        "isMergedRoute":null,
        "ptpId":"5e37cfb90215a15d7e60f020_68026624",
        "ptpUserLabel":"AHPHG-4-14-SIG",
        "isSeparatedRoute":null,
        "neUserLabel":"147",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e37cfb90215a15d7e60f020_4.14",
        "tpType":"CTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"AHPHG-4-14",
        "id":"5e37cfb90215a15d7e60f020_68026624_AHPHG-4-14-SIG;/oms=1"
    },
    {
        "userLabel":"147/AHPHG-4-14-SIG--147/WR8-88AF-4-11-SIG",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5e37cfb90215a15d7e60f020_68026624"
        ],
        "isSeparatedRoute":null,
        "id":"5e37cfb90215a15d7e60f020_67830016_5e37cfb90215a15d7e60f020_68026624",
        "type":"TL",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5e37cfb90215a15d7e60f020_67830016"
        ]
    },
    {
        "neId":"5e37cfb90215a15d7e60f020",
        "userLabel":"WR8-88AF-4-11-SIG;/frequency=9170.000",
        "isMergedRoute":null,
        "ptpId":"5e37cfb90215a15d7e60f020_67830016",
        "ptpUserLabel":"WR8-88AF-4-11-SIG",
        "isSeparatedRoute":null,
        "neUserLabel":"147",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e37cfb90215a15d7e60f020_4.11",
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"WR8-88AF-4-11",
        "id":"5e37cfb90215a15d7e60f020_67830016_WR8-88AF-4-11-SIG;/frequency=9170.000"
    },
    {
        "neId":"5e37cfb90215a15d7e60f020",
        "userLabel":"TAKEOVER-1580870658882",
        "isMergedRoute":null,
        "protectionType":"SIMPLE",
        "aEndNodes":[
            "5e37cfb90215a15d7e60f020_67830016_WR8-88AF-4-11-SIG;/frequency=9170.000"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"147",
        "pgData":null,
        "type":"XC",
        "params":null,
        "equipmentId":"5e37cfb90215a15d7e60f020_4.11",
        "zEndNodes":[
            "5e37cfb90215a15d7e60f020_67830272_WR8-88AF-4-11-THRU;/frequency=9170.000"
        ],
        "equipmentUserLabel":"WR8-88AF-4-11",
        "id":"5e37cfb90215a15d7e60f020_67830016_WR8-88AF-4-11-SIG;/frequency=9170.000-5e37cfb90215a15d7e60f020_67830272_WR8-88AF-4-11-THRU;/frequency=9170.000",
        "direction":"BI"
    },
    {
        "neId":"5e37cfb90215a15d7e60f020",
        "userLabel":"WR8-88AF-4-11-THRU;/frequency=9170.000",
        "isMergedRoute":null,
        "ptpId":"5e37cfb90215a15d7e60f020_67830272",
        "ptpUserLabel":"WR8-88AF-4-11-THRU",
        "isSeparatedRoute":null,
        "neUserLabel":"147",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e37cfb90215a15d7e60f020_4.11",
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"WR8-88AF-4-11",
        "id":"5e37cfb90215a15d7e60f020_67830272_WR8-88AF-4-11-THRU;/frequency=9170.000"
    },
    {
        "userLabel":"147/WR8-88AF-4-11-THRU--147/WR8-88AF-4-9-THRU",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5e37cfb90215a15d7e60f020_67830272"
        ],
        "isSeparatedRoute":null,
        "id":"5e37cfb90215a15d7e60f020_67699200_5e37cfb90215a15d7e60f020_67830272",
        "type":"TL",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5e37cfb90215a15d7e60f020_67699200"
        ]
    },
    {
        "neId":"5e37cfb90215a15d7e60f020",
        "userLabel":"WR8-88AF-4-9-THRU;/frequency=9170.000",
        "isMergedRoute":null,
        "ptpId":"5e37cfb90215a15d7e60f020_67699200",
        "ptpUserLabel":"WR8-88AF-4-9-THRU",
        "isSeparatedRoute":null,
        "neUserLabel":"147",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e37cfb90215a15d7e60f020_4.9",
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"WR8-88AF-4-9",
        "id":"5e37cfb90215a15d7e60f020_67699200_WR8-88AF-4-9-THRU;/frequency=9170.000"
    },
    {
        "neId":"5e37cfb90215a15d7e60f020",
        "userLabel":"TAKEOVER-1580870658882",
        "isMergedRoute":null,
        "protectionType":"SIMPLE",
        "aEndNodes":[
            "5e37cfb90215a15d7e60f020_67699200_WR8-88AF-4-9-THRU;/frequency=9170.000"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"147",
        "pgData":null,
        "type":"XC",
        "params":null,
        "equipmentId":"5e37cfb90215a15d7e60f020_4.9",
        "zEndNodes":[
            "5e37cfb90215a15d7e60f020_67698944_WR8-88AF-4-9-SIG;/frequency=9170.000"
        ],
        "equipmentUserLabel":"WR8-88AF-4-9",
        "id":"5e37cfb90215a15d7e60f020_67699200_WR8-88AF-4-9-THRU;/frequency=9170.000-5e37cfb90215a15d7e60f020_67698944_WR8-88AF-4-9-SIG;/frequency=9170.000",
        "direction":"BI"
    },
    {
        "neId":"5e37cfb90215a15d7e60f020",
        "userLabel":"WR8-88AF-4-9-SIG;/frequency=9170.000",
        "isMergedRoute":null,
        "ptpId":"5e37cfb90215a15d7e60f020_67698944",
        "ptpUserLabel":"WR8-88AF-4-9-SIG",
        "isSeparatedRoute":null,
        "neUserLabel":"147",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e37cfb90215a15d7e60f020_4.9",
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"WR8-88AF-4-9",
        "id":"5e37cfb90215a15d7e60f020_67698944_WR8-88AF-4-9-SIG;/frequency=9170.000"
    },
    {
        "userLabel":"147/WR8-88AF-4-9-SIG--147/AHPHG-4-13-SIG",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5e37cfb90215a15d7e60f020_67698944"
        ],
        "isSeparatedRoute":null,
        "id":"5e37cfb90215a15d7e60f020_67698944_5e37cfb90215a15d7e60f020_67961088",
        "type":"TL",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5e37cfb90215a15d7e60f020_67961088"
        ]
    },
    {
        "neId":"5e37cfb90215a15d7e60f020",
        "userLabel":"AHPHG-4-13-SIG;/oms=1",
        "isMergedRoute":null,
        "ptpId":"5e37cfb90215a15d7e60f020_67961088",
        "ptpUserLabel":"AHPHG-4-13-SIG",
        "isSeparatedRoute":null,
        "neUserLabel":"147",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e37cfb90215a15d7e60f020_4.13",
        "tpType":"CTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"AHPHG-4-13",
        "id":"5e37cfb90215a15d7e60f020_67961088_AHPHG-4-13-SIG;/oms=1"
    },
    {
        "neId":"5e37cfb90215a15d7e60f020",
        "userLabel":null,
        "isMergedRoute":null,
        "protectionType":"SIMPLE",
        "aEndNodes":[
            "5e37cfb90215a15d7e60f020_67961088_AHPHG-4-13-SIG;/oms=1"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"147",
        "pgData":null,
        "type":"XC",
        "params":null,
        "equipmentId":"5e37cfb90215a15d7e60f020_4.13",
        "zEndNodes":[
            "5e37cfb90215a15d7e60f020_67961856_AHPHG-4-13-LINE;/oms=1"
        ],
        "equipmentUserLabel":"AHPHG-4-13",
        "id":"5e37cfb90215a15d7e60f020_67961088_AHPHG-4-13-SIG;/oms=1-5e37cfb90215a15d7e60f020_67961856_AHPHG-4-13-LINE;/oms=1",
        "direction":"BI"
    },
    {
        "neId":"5e37cfb90215a15d7e60f020",
        "userLabel":"AHPHG-4-13-LINE;/oms=1",
        "isMergedRoute":null,
        "ptpId":"5e37cfb90215a15d7e60f020_67961856",
        "ptpUserLabel":"AHPHG-4-13-LINE",
        "isSeparatedRoute":null,
        "neUserLabel":"147",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e37cfb90215a15d7e60f020_4.13",
        "tpType":"CTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"AHPHG-4-13",
        "id":"5e37cfb90215a15d7e60f020_67961856_AHPHG-4-13-LINE;/oms=1"
    },
    {
        "userLabel":"152/AHPHG-1-12-LINE--147/AHPHG-4-13-LINE",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5e3a26b716a0886b0537fada_17564672"
        ],
        "isSeparatedRoute":null,
        "id":"5e37cfb90215a15d7e60f020_67961856_5e3a26b716a0886b0537fada_17564672",
        "type":"TL",
        "params":{
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5e37cfb90215a15d7e60f020_67961856"
        ]
    },
    {
        "neId":"5e3a26b716a0886b0537fada",
        "userLabel":"AHPHG-1-12-LINE;/oms=1",
        "isMergedRoute":null,
        "ptpId":"5e3a26b716a0886b0537fada_17564672",
        "ptpUserLabel":"AHPHG-1-12-LINE",
        "isSeparatedRoute":null,
        "neUserLabel":"152",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e3a26b716a0886b0537fada_1.12",
        "tpType":"CTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"AHPHG-1-12",
        "id":"5e3a26b716a0886b0537fada_17564672_AHPHG-1-12-LINE;/oms=1"
    },
    {
        "neId":"5e3a26b716a0886b0537fada",
        "userLabel":null,
        "isMergedRoute":null,
        "protectionType":"SIMPLE",
        "aEndNodes":[
            "5e3a26b716a0886b0537fada_17563904_AHPHG-1-12-SIG;/oms=1"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"152",
        "pgData":null,
        "type":"XC",
        "params":null,
        "equipmentId":"5e3a26b716a0886b0537fada_1.12",
        "zEndNodes":[
            "5e3a26b716a0886b0537fada_17564672_AHPHG-1-12-LINE;/oms=1"
        ],
        "equipmentUserLabel":"AHPHG-1-12",
        "id":"5e3a26b716a0886b0537fada_17563904_AHPHG-1-12-SIG;/oms=1-5e3a26b716a0886b0537fada_17564672_AHPHG-1-12-LINE;/oms=1",
        "direction":"BI"
    },
    {
        "neId":"5e3a26b716a0886b0537fada",
        "userLabel":"AHPHG-1-12-SIG;/oms=1",
        "isMergedRoute":null,
        "ptpId":"5e3a26b716a0886b0537fada_17563904",
        "ptpUserLabel":"AHPHG-1-12-SIG",
        "isSeparatedRoute":null,
        "neUserLabel":"152",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e3a26b716a0886b0537fada_1.12",
        "tpType":"CTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"AHPHG-1-12",
        "id":"5e3a26b716a0886b0537fada_17563904_AHPHG-1-12-SIG;/oms=1"
    },
    {
        "userLabel":"152/WR8-88AF-1-7-SIG--152/AHPHG-1-12-SIG",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5e3a26b716a0886b0537fada_17236224"
        ],
        "isSeparatedRoute":null,
        "id":"5e3a26b716a0886b0537fada_17236224_5e3a26b716a0886b0537fada_17563904",
        "type":"TL",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5e3a26b716a0886b0537fada_17563904"
        ]
    },
    {
        "neId":"5e3a26b716a0886b0537fada",
        "userLabel":"WR8-88AF-1-7-SIG;/frequency=9170.000",
        "isMergedRoute":null,
        "ptpId":"5e3a26b716a0886b0537fada_17236224",
        "ptpUserLabel":"WR8-88AF-1-7-SIG",
        "isSeparatedRoute":true,
        "neUserLabel":"152",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e3a26b716a0886b0537fada_1.7",
        "separatedRouteElements":{
            "Rx":[
                {
                    "neId":"5e3a26b716a0886b0537fada",
                    "userLabel":"TAKEOVER-1580870658882",
                    "isMergedRoute":null,
                    "protectionType":"SIMPLE",
                    "aEndNodes":[
                        "5e3a26b716a0886b0537fada_17239040_WR8-88AF-1-7-MESHOUT1;/frequency=9170.000"
                    ],
                    "isSeparatedRoute":null,
                    "neUserLabel":"152",
                    "pgData":null,
                    "type":"XC",
                    "params":null,
                    "equipmentId":"5e3a26b716a0886b0537fada_1.7",
                    "zEndNodes":[
                        "5e3a26b716a0886b0537fada_17236224_WR8-88AF-1-7-SIG;/frequency=9170.000"
                    ],
                    "equipmentUserLabel":"WR8-88AF-1-7",
                    "id":"5e3a26b716a0886b0537fada_17239040_WR8-88AF-1-7-MESHOUT1;/frequency=9170.000-5e3a26b716a0886b0537fada_17236224_WR8-88AF-1-7-SIG;/frequency=9170.000",
                    "direction":"BI"
                },
                {
                    "neId":"5e3a26b716a0886b0537fada",
                    "userLabel":"WR8-88AF-1-7-MESHOUT1;/frequency=9170.000",
                    "isMergedRoute":null,
                    "ptpId":"5e3a26b716a0886b0537fada_17239040",
                    "ptpUserLabel":"WR8-88AF-1-7-MESHOUT1",
                    "isSeparatedRoute":null,
                    "neUserLabel":"152",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5e3a26b716a0886b0537fada_1.7",
                    "tpType":"CTP",
                    "layerRate":"OCH",
                    "equipmentUserLabel":"WR8-88AF-1-7",
                    "id":"5e3a26b716a0886b0537fada_17239040_WR8-88AF-1-7-MESHOUT1;/frequency=9170.000"
                },
                {
                    "userLabel":"152/WR8-88AF-1-7-MESHOUT1--152/WR8-88AF-1-5-ADDIN1",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5e3a26b716a0886b0537fada_17239040"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5e3a26b716a0886b0537fada_17105920_5e3a26b716a0886b0537fada_17239040",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"UNI",
                    "zEndNodes":[
                        "5e3a26b716a0886b0537fada_17105920"
                    ]
                },
                {
                    "neId":"5e3a26b716a0886b0537fada",
                    "userLabel":"WR8-88AF-1-5-ADDIN1;/frequency=9170.000",
                    "isMergedRoute":null,
                    "ptpId":"5e3a26b716a0886b0537fada_17105920",
                    "ptpUserLabel":"WR8-88AF-1-5-ADDIN1",
                    "isSeparatedRoute":null,
                    "neUserLabel":"152",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5e3a26b716a0886b0537fada_1.5",
                    "tpType":"CTP",
                    "layerRate":"OCH",
                    "equipmentUserLabel":"WR8-88AF-1-5",
                    "id":"5e3a26b716a0886b0537fada_17105920_WR8-88AF-1-5-ADDIN1;/frequency=9170.000"
                },
                {
                    "neId":"5e3a26b716a0886b0537fada",
                    "userLabel":"TAKEOVER-1580870658882",
                    "isMergedRoute":null,
                    "protectionType":"SIMPLE",
                    "aEndNodes":[
                        "5e3a26b716a0886b0537fada_17105920_WR8-88AF-1-5-ADDIN1;/frequency=9170.000"
                    ],
                    "isSeparatedRoute":null,
                    "neUserLabel":"152",
                    "pgData":null,
                    "type":"XC",
                    "params":null,
                    "equipmentId":"5e3a26b716a0886b0537fada_1.5",
                    "zEndNodes":[
                        "5e3a26b716a0886b0537fada_17105152_WR8-88AF-1-5-SIG;/frequency=9170.000"
                    ],
                    "equipmentUserLabel":"WR8-88AF-1-5",
                    "id":"5e3a26b716a0886b0537fada_17105152_WR8-88AF-1-5-SIG;/frequency=9170.000-5e3a26b716a0886b0537fada_17105920_WR8-88AF-1-5-ADDIN1;/frequency=9170.000",
                    "direction":"UNI"
                }
            ]
        },
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"WR8-88AF-1-7",
        "id":"5e3a26b716a0886b0537fada_17236224_WR8-88AF-1-7-SIG;/frequency=9170.000"
    },
    {
        "neId":"5e3a26b716a0886b0537fada",
        "userLabel":"WR8-88AF-1-5-SIG;/frequency=9170.000",
        "isMergedRoute":true,
        "ptpId":"5e3a26b716a0886b0537fada_17105152",
        "ptpUserLabel":"WR8-88AF-1-5-SIG",
        "isSeparatedRoute":null,
        "neUserLabel":"152",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e3a26b716a0886b0537fada_1.5",
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"WR8-88AF-1-5",
        "id":"5e3a26b716a0886b0537fada_17105152_WR8-88AF-1-5-SIG;/frequency=9170.000"
    },
    {
        "userLabel":"152/AHPHG-1-11-SIG--152/WR8-88AF-1-5-SIG",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5e3a26b716a0886b0537fada_17498368"
        ],
        "isSeparatedRoute":null,
        "id":"5e3a26b716a0886b0537fada_17105152_5e3a26b716a0886b0537fada_17498368",
        "type":"TL",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5e3a26b716a0886b0537fada_17105152"
        ]
    },
    {
        "neId":"5e3a26b716a0886b0537fada",
        "userLabel":"AHPHG-1-11-SIG;/oms=1",
        "isMergedRoute":null,
        "ptpId":"5e3a26b716a0886b0537fada_17498368",
        "ptpUserLabel":"AHPHG-1-11-SIG",
        "isSeparatedRoute":null,
        "neUserLabel":"152",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e3a26b716a0886b0537fada_1.11",
        "tpType":"CTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"AHPHG-1-11",
        "id":"5e3a26b716a0886b0537fada_17498368_AHPHG-1-11-SIG;/oms=1"
    },
    {
        "neId":"5e3a26b716a0886b0537fada",
        "userLabel":null,
        "isMergedRoute":null,
        "protectionType":"SIMPLE",
        "aEndNodes":[
            "5e3a26b716a0886b0537fada_17498368_AHPHG-1-11-SIG;/oms=1"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"152",
        "pgData":null,
        "type":"XC",
        "params":null,
        "equipmentId":"5e3a26b716a0886b0537fada_1.11",
        "zEndNodes":[
            "5e3a26b716a0886b0537fada_17499136_AHPHG-1-11-LINE;/oms=1"
        ],
        "equipmentUserLabel":"AHPHG-1-11",
        "id":"5e3a26b716a0886b0537fada_17498368_AHPHG-1-11-SIG;/oms=1-5e3a26b716a0886b0537fada_17499136_AHPHG-1-11-LINE;/oms=1",
        "direction":"BI"
    },
    {
        "neId":"5e3a26b716a0886b0537fada",
        "userLabel":"AHPHG-1-11-LINE;/oms=1",
        "isMergedRoute":null,
        "ptpId":"5e3a26b716a0886b0537fada_17499136",
        "ptpUserLabel":"AHPHG-1-11-LINE",
        "isSeparatedRoute":null,
        "neUserLabel":"152",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e3a26b716a0886b0537fada_1.11",
        "tpType":"CTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"AHPHG-1-11",
        "id":"5e3a26b716a0886b0537fada_17499136_AHPHG-1-11-LINE;/oms=1"
    },
    {
        "userLabel":"141/AHPHG-6-4-LINE--152/AHPHG-1-11-LINE",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5e18274eb23f442532b7c1d8_100926464"
        ],
        "isSeparatedRoute":null,
        "id":"5e18274eb23f442532b7c1d8_100926464_5e3a26b716a0886b0537fada_17499136",
        "type":"TL",
        "params":{
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5e3a26b716a0886b0537fada_17499136"
        ]
    },
    {
        "neId":"5e18274eb23f442532b7c1d8",
        "userLabel":"AHPHG-6-4-LINE;/oms=1",
        "isMergedRoute":null,
        "ptpId":"5e18274eb23f442532b7c1d8_100926464",
        "ptpUserLabel":"AHPHG-6-4-LINE",
        "isSeparatedRoute":null,
        "neUserLabel":"141",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e18274eb23f442532b7c1d8_6.4",
        "tpType":"CTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"AHPHG-6-4",
        "id":"5e18274eb23f442532b7c1d8_100926464_AHPHG-6-4-LINE;/oms=1"
    },
    {
        "neId":"5e18274eb23f442532b7c1d8",
        "userLabel":null,
        "isMergedRoute":null,
        "protectionType":"SIMPLE",
        "aEndNodes":[
            "5e18274eb23f442532b7c1d8_100925696_AHPHG-6-4-SIG;/oms=1"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"141",
        "pgData":null,
        "type":"XC",
        "params":null,
        "equipmentId":"5e18274eb23f442532b7c1d8_6.4",
        "zEndNodes":[
            "5e18274eb23f442532b7c1d8_100926464_AHPHG-6-4-LINE;/oms=1"
        ],
        "equipmentUserLabel":"AHPHG-6-4",
        "id":"5e18274eb23f442532b7c1d8_100925696_AHPHG-6-4-SIG;/oms=1-5e18274eb23f442532b7c1d8_100926464_AHPHG-6-4-LINE;/oms=1",
        "direction":"BI"
    },
    {
        "neId":"5e18274eb23f442532b7c1d8",
        "userLabel":"AHPHG-6-4-SIG;/oms=1",
        "isMergedRoute":null,
        "ptpId":"5e18274eb23f442532b7c1d8_100925696",
        "ptpUserLabel":"AHPHG-6-4-SIG",
        "isSeparatedRoute":null,
        "neUserLabel":"141",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e18274eb23f442532b7c1d8_6.4",
        "tpType":"CTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"AHPHG-6-4",
        "id":"5e18274eb23f442532b7c1d8_100925696_AHPHG-6-4-SIG;/oms=1"
    },
    {
        "userLabel":"141/AHPHG-6-4-SIG--141/WR8-88AF-6-11-SIG",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5e18274eb23f442532b7c1d8_100925696"
        ],
        "isSeparatedRoute":null,
        "id":"5e18274eb23f442532b7c1d8_100925696_5e18274eb23f442532b7c1d8_101384448",
        "type":"TL",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5e18274eb23f442532b7c1d8_101384448"
        ]
    },
    {
        "neId":"5e18274eb23f442532b7c1d8",
        "userLabel":"WR8-88AF-6-11-SIG;/frequency=9170.000",
        "isMergedRoute":null,
        "ptpId":"5e18274eb23f442532b7c1d8_101384448",
        "ptpUserLabel":"WR8-88AF-6-11-SIG",
        "isSeparatedRoute":true,
        "neUserLabel":"141",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e18274eb23f442532b7c1d8_6.11",
        "separatedRouteElements":{
            "Tx":[
                {
                    "neId":"5e18274eb23f442532b7c1d8",
                    "userLabel":"TAKEOVER-1580870658882",
                    "isMergedRoute":null,
                    "protectionType":"SIMPLE",
                    "aEndNodes":[
                        "5e18274eb23f442532b7c1d8_101384448_WR8-88AF-6-11-SIG;/frequency=9170.000"
                    ],
                    "isSeparatedRoute":null,
                    "neUserLabel":"141",
                    "pgData":null,
                    "type":"XC",
                    "params":null,
                    "equipmentId":"5e18274eb23f442532b7c1d8_6.11",
                    "zEndNodes":[
                        "5e18274eb23f442532b7c1d8_101384960_WR8-88AF-6-11-DROPOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel":"WR8-88AF-6-11",
                    "id":"5e18274eb23f442532b7c1d8_101384960_WR8-88AF-6-11-DROPOUT;/frequency=9170.000-5e18274eb23f442532b7c1d8_101384448_WR8-88AF-6-11-SIG;/frequency=9170.000",
                    "direction":"UNI"
                },
                {
                    "neId":"5e18274eb23f442532b7c1d8",
                    "userLabel":"WR8-88AF-6-11-DROPOUT;/frequency=9170.000",
                    "isMergedRoute":null,
                    "ptpId":"5e18274eb23f442532b7c1d8_101384960",
                    "ptpUserLabel":"WR8-88AF-6-11-DROPOUT",
                    "isSeparatedRoute":null,
                    "neUserLabel":"141",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5e18274eb23f442532b7c1d8_6.11",
                    "tpType":"CTP",
                    "layerRate":"OCH",
                    "equipmentUserLabel":"WR8-88AF-6-11",
                    "id":"5e18274eb23f442532b7c1d8_101384960_WR8-88AF-6-11-DROPOUT;/frequency=9170.000"
                },
                {
                    "userLabel":"141/WR8-88AF-6-11-DROPOUT--141/ITLU-51-1-SIGIN",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5e18274eb23f442532b7c1d8_101384960"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5e18274eb23f442532b7c1d8_101384960_5e18274eb23f442532b7c1d8_855703808",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"UNI",
                    "zEndNodes":[
                        "5e18274eb23f442532b7c1d8_855703808"
                    ]
                },
                {
                    "neId":"5e18274eb23f442532b7c1d8",
                    "userLabel":"ITLU-51-1-SIGIN;/frequency=9170.000",
                    "isMergedRoute":null,
                    "ptpId":"5e18274eb23f442532b7c1d8_855703808",
                    "ptpUserLabel":"ITLU-51-1-SIGIN",
                    "isSeparatedRoute":null,
                    "neUserLabel":"141",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5e18274eb23f442532b7c1d8_51.1",
                    "tpType":"CTP",
                    "layerRate":"OCH",
                    "equipmentUserLabel":"ITLU-51-1",
                    "id":"5e18274eb23f442532b7c1d8_855703808_ITLU-51-1-SIGIN;/frequency=9170.000"
                },
                {
                    "neId":"5e18274eb23f442532b7c1d8",
                    "userLabel":null,
                    "isMergedRoute":null,
                    "protectionType":"SIMPLE",
                    "aEndNodes":[
                        "5e18274eb23f442532b7c1d8_855703808_ITLU-51-1-SIGIN;/frequency=9170.000"
                    ],
                    "isSeparatedRoute":null,
                    "neUserLabel":"141",
                    "pgData":null,
                    "type":"XC",
                    "params":null,
                    "equipmentId":"5e18274eb23f442532b7c1d8_51.1",
                    "zEndNodes":[
                        "5e18274eb23f442532b7c1d8_855704064_ITLU-51-1-EOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel":"ITLU-51-1",
                    "id":"5e18274eb23f442532b7c1d8_855703808_ITLU-51-1-SIGIN;/frequency=9170.000-5e18274eb23f442532b7c1d8_855704064_ITLU-51-1-EOUT;/frequency=9170.000",
                    "direction":"UNI"
                },
                {
                    "neId":"5e18274eb23f442532b7c1d8",
                    "userLabel":"ITLU-51-1-EOUT;/frequency=9170.000",
                    "isMergedRoute":null,
                    "ptpId":"5e18274eb23f442532b7c1d8_855704064",
                    "ptpUserLabel":"ITLU-51-1-EOUT",
                    "isSeparatedRoute":null,
                    "neUserLabel":"141",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5e18274eb23f442532b7c1d8_51.1",
                    "tpType":"CTP",
                    "layerRate":"OCH",
                    "equipmentUserLabel":"ITLU-51-1",
                    "id":"5e18274eb23f442532b7c1d8_855704064_ITLU-51-1-EOUT;/frequency=9170.000"
                },
                {
                    "userLabel":"141/ITLU-51-1-EOUT--141/SFD44-52-1-OMD",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5e18274eb23f442532b7c1d8_855704064"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5e18274eb23f442532b7c1d8_855704064_5e18274eb23f442532b7c1d8_872492288",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"UNI",
                    "zEndNodes":[
                        "5e18274eb23f442532b7c1d8_872492288"
                    ]
                }
            ],
            "Rx":[
                {
                    "neId":"5e18274eb23f442532b7c1d8",
                    "userLabel":"TAKEOVER-1580870658882",
                    "isMergedRoute":null,
                    "protectionType":"SIMPLE",
                    "aEndNodes":[
                        "5e18274eb23f442532b7c1d8_101385216_WR8-88AF-6-11-ADDIN1;/frequency=9170.000"
                    ],
                    "isSeparatedRoute":null,
                    "neUserLabel":"141",
                    "pgData":null,
                    "type":"XC",
                    "params":null,
                    "equipmentId":"5e18274eb23f442532b7c1d8_6.11",
                    "zEndNodes":[
                        "5e18274eb23f442532b7c1d8_101384448_WR8-88AF-6-11-SIG;/frequency=9170.000"
                    ],
                    "equipmentUserLabel":"WR8-88AF-6-11",
                    "id":"5e18274eb23f442532b7c1d8_101385216_WR8-88AF-6-11-ADDIN1;/frequency=9170.000-5e18274eb23f442532b7c1d8_101384448_WR8-88AF-6-11-SIG;/frequency=9170.000",
                    "direction":"UNI"
                },
                {
                    "neId":"5e18274eb23f442532b7c1d8",
                    "userLabel":"WR8-88AF-6-11-ADDIN1;/frequency=9170.000",
                    "isMergedRoute":null,
                    "ptpId":"5e18274eb23f442532b7c1d8_101385216",
                    "ptpUserLabel":"WR8-88AF-6-11-ADDIN1",
                    "isSeparatedRoute":null,
                    "neUserLabel":"141",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5e18274eb23f442532b7c1d8_6.11",
                    "tpType":"CTP",
                    "layerRate":"OCH",
                    "equipmentUserLabel":"WR8-88AF-6-11",
                    "id":"5e18274eb23f442532b7c1d8_101385216_WR8-88AF-6-11-ADDIN1;/frequency=9170.000"
                },
                {
                    "userLabel":"141/SFD44-52-1-OMD--141/WR8-88AF-6-11-ADDIN1",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5e18274eb23f442532b7c1d8_872492288"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5e18274eb23f442532b7c1d8_101385216_5e18274eb23f442532b7c1d8_872492288",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "direction":"UNI",
                    "zEndNodes":[
                        "5e18274eb23f442532b7c1d8_101385216"
                    ]
                }
            ]
        },
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"WR8-88AF-6-11",
        "id":"5e18274eb23f442532b7c1d8_101384448_WR8-88AF-6-11-SIG;/frequency=9170.000"
    },
    {
        "neId":"5e18274eb23f442532b7c1d8",
        "userLabel":"SFD44-52-1-OMD;/frequency=9170.000",
        "isMergedRoute":true,
        "ptpId":"5e18274eb23f442532b7c1d8_872492288",
        "ptpUserLabel":"SFD44-52-1-OMD",
        "isSeparatedRoute":null,
        "neUserLabel":"141",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e18274eb23f442532b7c1d8_52.1",
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"SFD44-52-1",
        "id":"5e18274eb23f442532b7c1d8_872492288_SFD44-52-1-OMD;/frequency=9170.000"
    },
    {
        "neId":"5e18274eb23f442532b7c1d8",
        "userLabel":null,
        "isMergedRoute":null,
        "protectionType":"SIMPLE",
        "aEndNodes":[
            "5e18274eb23f442532b7c1d8_872492032_SFD44-52-1-9170;/frequency=9170.000"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"141",
        "pgData":null,
        "type":"XC",
        "params":null,
        "equipmentId":"5e18274eb23f442532b7c1d8_52.1",
        "zEndNodes":[
            "5e18274eb23f442532b7c1d8_872492288_SFD44-52-1-OMD;/frequency=9170.000"
        ],
        "equipmentUserLabel":"SFD44-52-1",
        "id":"5e18274eb23f442532b7c1d8_872492032_SFD44-52-1-9170;/frequency=9170.000-5e18274eb23f442532b7c1d8_872492288_SFD44-52-1-OMD;/frequency=9170.000",
        "direction":"BI"
    },
    {
        "neId":"5e18274eb23f442532b7c1d8",
        "userLabel":"SFD44-52-1-9170;/frequency=9170.000",
        "isMergedRoute":null,
        "ptpId":"5e18274eb23f442532b7c1d8_872492032",
        "ptpUserLabel":"SFD44-52-1-9170",
        "isSeparatedRoute":null,
        "neUserLabel":"141",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e18274eb23f442532b7c1d8_52.1",
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"SFD44-52-1",
        "id":"5e18274eb23f442532b7c1d8_872492032_SFD44-52-1-9170;/frequency=9170.000"
    },
    {
        "userLabel":"141/130SNX10-6-2-L1--141/SFD44-52-1-9170",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5e18274eb23f442532b7c1d8_100794624"
        ],
        "isSeparatedRoute":null,
        "id":"5e18274eb23f442532b7c1d8_100794624_5e18274eb23f442532b7c1d8_872492032",
        "type":"TL",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5e18274eb23f442532b7c1d8_872492032"
        ]
    },
    {
        "neId":"5e18274eb23f442532b7c1d8",
        "userLabel":"130SNX10-6-2-L1;/frequency=/tunable-number=1",
        "isMergedRoute":null,
        "ptpId":"5e18274eb23f442532b7c1d8_100794624",
        "ptpUserLabel":"130SNX10-6-2-L1",
        "isSeparatedRoute":null,
        "neUserLabel":"141",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5e18274eb23f442532b7c1d8_6.2",
        "tpType":"CTP",
        "layerRate":"OCH",
        "equipmentUserLabel":"130SNX10-6-2",
        "id":"5e18274eb23f442532b7c1d8_100794624_130SNX10-6-2-L1;/frequency=/tunable-number=1"
    }
];
const flowInfo_UNI_OTS = [
    {
        "neId":"5d3532a988a53b2fa33628a0",
        "userLabel":"AHPHG-3-2-LINE;/ots=1",
        "isMergedRoute":null,
        "ptpId":"5d3532a988a53b2fa33628a0_50463744",
        "ptpUserLabel":"AHPHG-3-2-LINE",
        "isSeparatedRoute":true,
        "neUserLabel":"135.251.97.141",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5d3532a988a53b2fa33628a0_3.2",
        "separatedRouteElements":{
            "Tx":[
                {
                    "userLabel":"135.251.97.141/AHPHG-3-2-LINE--135.252.222.115/AM2125B-2-11-LINEIN",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5d3532a988a53b2fa33628a0_50463744"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5d3532a988a53b2fa33628a0_50463744_5d4be6bb8780ce782e7a30cb_34275584",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":"CLEARED",
                        "alarmState":"CLEARED"
                    },
                    "direction":"UNI",
                    "zEndNodes":[
                        "5d4be6bb8780ce782e7a30cb_34275584"
                    ]
                },
                {
                    "neId":"5d4be6bb8780ce782e7a30cb",
                    "userLabel":"AM2125B-2-11-LINEIN",
                    "isMergedRoute":null,
                    "ptpId":"5d4be6bb8780ce782e7a30cb_34275584",
                    "ptpUserLabel":"AM2125B-2-11-LINEIN",
                    "isSeparatedRoute":null,
                    "neUserLabel":"135.252.222.115",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5d4be6bb8780ce782e7a30cb_2.11",
                    "tpType":"PTP",
                    "layerRate":"OTS",
                    "equipmentUserLabel":"AM2125B-2-11",
                    "id":"5d4be6bb8780ce782e7a30cb_34275584"
                }
            ],
            "Rx":[
                {
                    "userLabel":"135.252.222.115/AM2125B-2-12-LINEOUT--135.251.97.141/AHPHG-3-2-LINE",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5d4be6bb8780ce782e7a30cb_34341888"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5d3532a988a53b2fa33628a0_50463744_5d4be6bb8780ce782e7a30cb_34341888",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":"CLEARED",
                        "alarmState":"CLEARED"
                    },
                    "direction":"UNI",
                    "zEndNodes":[
                        "5d3532a988a53b2fa33628a0_50463744"
                    ]
                },
                {
                    "neId":"5d4be6bb8780ce782e7a30cb",
                    "userLabel":"AM2125B-2-12-LINEOUT",
                    "isMergedRoute":null,
                    "ptpId":"5d4be6bb8780ce782e7a30cb_34341888",
                    "ptpUserLabel":"AM2125B-2-12-LINEOUT",
                    "isSeparatedRoute":null,
                    "neUserLabel":"135.252.222.115",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5d4be6bb8780ce782e7a30cb_2.12",
                    "tpType":"PTP",
                    "layerRate":"OTS",
                    "equipmentUserLabel":"AM2125B-2-12",
                    "id":"5d4be6bb8780ce782e7a30cb_34341888"
                }
            ]
        },
        "tpType":"CTP",
        "layerRate":"OTS",
        "equipmentUserLabel":"130SNX10-3-2",
        "id":"5d3532a988a53b2fa33628a0_50463744_AHPHG-3-2-LINE;/ots=1"
    }
];
const flowInfo_alarm1 = [
    {
        "neId":"5cf4c0b717c04d4e3dbb4623",
        "userLabel":"AHPHG-2-4-LINE",
        "isMergedRoute":null,
        "ptpId":"5cf4c0b717c04d4e3dbb4623_33817600",
        "ptpUserLabel":"AHPHG-2-4-LINE",
        "isSeparatedRoute":null,
        "neUserLabel":"135.251.97.65",
        "type":"TP",
        "params":{
            "rootAlarmState":"CLEARED",
            "alarmState":"CLEARED"
        },
        "equipmentId":"5cf4c0b717c04d4e3dbb4623_2.4",
        "tpType":"PTP",
        "layerRate":"OTS",
        "equipmentUserLabel":"AHPHG-2-4",
        "id":"5cf4c0b717c04d4e3dbb4623_33817600"
    },
    {
        "userLabel":"135.251.97.65/AHPHG-2-4-LINE--135.251.97.53/AHPHG-2-4-LINE",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5cf4c0b717c04d4e3dbb4623_33817600"
        ],
        "isSeparatedRoute":null,
        "id":"5cf4c0b717c04d4e3dbb4623_33817600_5cf4c10117c04d4e3dbb4626_33817600",
        "type":"TL",
        "params":{
            "rootAlarmState":"MAJOR",
            "alarmState":"CRITICAL"
        },
        "direction":"BI",
        "zEndNodes":[
            "5cf4c10117c04d4e3dbb4626_33817600"
        ]
    },
    {
        "neId":"5cf4c10117c04d4e3dbb4626",
        "userLabel":"AHPHG-2-4-LINE",
        "isMergedRoute":null,
        "ptpId":"5cf4c10117c04d4e3dbb4626_33817600",
        "ptpUserLabel":"AHPHG-2-4-LINE",
        "isSeparatedRoute":null,
        "neUserLabel":"135.251.97.53",
        "type":"TP",
        "params":{
            "rootAlarmState":"MINOR",
            "alarmState":"MINOR"
        },
        "equipmentId":"5cf4c10117c04d4e3dbb4626_2.4",
        "tpType":"PTP",
        "layerRate":"OTS",
        "equipmentUserLabel":"AHPHG-2-4",
        "id":"5cf4c10117c04d4e3dbb4626_33817600"
    }
];
const flowInfo_24x_DSR_SNCP = [
    {
        "neId":"5d3532ba88a53b2fa33628a2",
        "userLabel":"30AN300-7-1-3;/odu2e=1",
        "isMergedRoute":null,
        "ptpId":"5d3532ba88a53b2fa33628a2_117506816",
        "ptpUserLabel":"30AN300-7-1-3",
        "isSeparatedRoute":null,
        "neUserLabel":"135.251.97.128",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5d3532ba88a53b2fa33628a2_7.1",
        "tpType":"CTP",
        "layerRate":"ODU2e",
        "equipmentUserLabel":"30AN300-7-1",
        "id":"5d3532ba88a53b2fa33628a2_117506816_30AN300-7-1-3;/odu2e=1"
    },
    {
        "neId":"5d3532ba88a53b2fa33628a2",
        "userLabel":"30AN300-7-1-3-4AN400-7-2-1",
        "isMergedRoute":null,
        "protectionType":"SNCP",
        "aEndNodes":[
            "5d3532ba88a53b2fa33628a2_117506816_30AN300-7-1-3;/odu2e=1"
        ],
        "isSeparatedRoute":true,
        "neUserLabel":"135.251.97.128",
        "pgData":{
            "_id":"5d3532ba88a53b2fa33628a2_117506816_30AN300-7-1-3;/odu2e=1_117571840_4AN400-7-2-1;/otu4=1/odu4=1/odu2e=2_117637376_4AN400-7-3-1;/otu4=1/odu4=1/odu2e=1",
            "neId":"5d3532ba88a53b2fa33628a2",
            "type":"SNCP",
            "nmlId":"5d3532a988a53b2fa33628a0_117506816_30AN300-7-1-3;/odu2e=1_5d3532ba88a53b2fa33628a2_117506816_30AN300-7-1-3;/odu2e=1",
            "userLabel":"PG_7:2_30AN300-7-1",
            "nativeName":"PG_7:2_30AN300-7-1",
            "layerRates":[
                "ODU2E"
            ],
            "direction":"UNI",
            "reversionMode":"nonRevertive",
            "wtrTime":"5",
            "holdOffTime":"0",
            "tpIds":[
                "5d3532ba88a53b2fa33628a2_117506816_30AN300-7-1-3;/odu2e=1",
                "5d3532ba88a53b2fa33628a2_117571840_4AN400-7-2-1;/otu4=1/odu4=1/odu2e=2",
                "5d3532ba88a53b2fa33628a2_117637376_4AN400-7-3-1;/otu4=1/odu4=1/odu2e=1"
            ],
            "switchData":{
                "_id":null,
                "neId":null,
                "neName":null,
                "pgId":null,
                "pgName":null,
                "event":null,
                "switchStatus":"NoRequest",
                "tpStatus":[
                    {
                        "tpId":null,
                        "switchCmd":null,
                        "txStatus":null,
                        "rxStatus":null
                    },
                    {
                        "tpId":null,
                        "switchCmd":"noCmd",
                        "txStatus":"NoDegradeFailure",
                        "rxStatus":"NoDegradeFailure"
                    },
                    {
                        "tpId":null,
                        "switchCmd":"noCmd",
                        "txStatus":"NoDegradeFailure",
                        "rxStatus":"NoDegradeFailure"
                    }
                ],
                "eventTpId":null,
                "eventTpName":null,
                "slotProgrammedType":null,
                "eventTime":null,
                "nmsTime":null,
                "additionalInfo":null,
                "isSwitched":null,
                "tag":null
            },
            "implementState":"IMPLEMENTED",
            "params":{
                "falconCard":"true",
                "xcRate":"odu2e",
                "neNumber":10018,
                "pgObjectType":"CTP",
                "groupId":"7:2",
                "xcBidirectional":"twoWaySNCP",
                "realPGId":"5d3532ba88a53b2fa33628a2_117506816_30AN300-7-1-3;/odu2e=1_VirtualPlane-7-71-1;/odu4=1/odu2e=2_VirtualPlane-7-71-1;/odu4=3/odu2e=1",
                "description":"30AN300-7-1-3-4AN400-7-2-1",
                "action":"create"
            },
            "usage":"BUSY"
        },
        "type":"XC",
        "params":null,
        "equipmentId":null,
        "zEndNodes":[
            "5d3532ba88a53b2fa33628a2_117571840_4AN400-7-2-1;/otu4=1/odu4=1/odu2e=2",
            "5d3532ba88a53b2fa33628a2_117637376_4AN400-7-3-1;/otu4=1/odu4=1/odu2e=1"
        ],
        "separatedRouteElements":{
            "Spare":[
                {
                    "neId":"5d3532ba88a53b2fa33628a2",
                    "userLabel":"4AN400-7-3-1;/otu4=1/odu4=1/odu2e=1",
                    "isMergedRoute":null,
                    "ptpId":"5d3532ba88a53b2fa33628a2_117637376",
                    "ptpUserLabel":"4AN400-7-3-1",
                    "isSeparatedRoute":null,
                    "neUserLabel":"135.251.97.128",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5d3532ba88a53b2fa33628a2_7.3",
                    "tpType":"CTP",
                    "layerRate":"ODU2e",
                    "equipmentUserLabel":"4AN400-7-3",
                    "id":"5d3532ba88a53b2fa33628a2_117637376_4AN400-7-3-1;/otu4=1/odu4=1/odu2e=1"
                },
                {
                    "userLabel":"135.251.97.128/4AN400-7-3-1--135.251.97.141/4AN400-7-3-1",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5d3532ba88a53b2fa33628a2_117637376"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5d3532a988a53b2fa33628a0_117637376_5d3532ba88a53b2fa33628a2_117637376",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":"CLEARED",
                        "alarmState":"CRITICAL"
                    },
                    "direction":"BI",
                    "zEndNodes":[
                        "5d3532a988a53b2fa33628a0_117637376"
                    ]
                },
                {
                    "neId":"5d3532a988a53b2fa33628a0",
                    "userLabel":"4AN400-7-3-1;/otu4=1/odu4=1/odu2e=1",
                    "isMergedRoute":null,
                    "ptpId":"5d3532a988a53b2fa33628a0_117637376",
                    "ptpUserLabel":"4AN400-7-3-1",
                    "isSeparatedRoute":null,
                    "neUserLabel":"135.251.97.141",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5d3532a988a53b2fa33628a0_7.3",
                    "tpType":"CTP",
                    "layerRate":"ODU2e",
                    "equipmentUserLabel":"4AN400-7-3",
                    "id":"5d3532a988a53b2fa33628a0_117637376_4AN400-7-3-1;/otu4=1/odu4=1/odu2e=1"
                }
            ],
            "Main":[
                {
                    "neId":"5d3532ba88a53b2fa33628a2",
                    "userLabel":"4AN400-7-2-1;/otu4=1/odu4=1/odu2e=2",
                    "isMergedRoute":null,
                    "ptpId":"5d3532ba88a53b2fa33628a2_117571840",
                    "ptpUserLabel":"4AN400-7-2-1",
                    "isSeparatedRoute":null,
                    "neUserLabel":"135.251.97.128",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5d3532ba88a53b2fa33628a2_7.2",
                    "tpType":"CTP",
                    "layerRate":"ODU2e",
                    "equipmentUserLabel":"4AN400-7-2",
                    "id":"5d3532ba88a53b2fa33628a2_117571840_4AN400-7-2-1;/otu4=1/odu4=1/odu2e=2"
                },
                {
                    "userLabel":"135.251.97.128/4AN400-7-2-1--135.251.97.141/4AN400-7-2-1",
                    "isMergedRoute":null,
                    "protectionType":"NORMAL",
                    "aEndNodes":[
                        "5d3532ba88a53b2fa33628a2_117571840"
                    ],
                    "isSeparatedRoute":null,
                    "id":"5d3532a988a53b2fa33628a0_117571840_5d3532ba88a53b2fa33628a2_117571840",
                    "type":"TL",
                    "params":{
                        "rootAlarmState":"CLEARED",
                        "alarmState":"CRITICAL"
                    },
                    "direction":"BI",
                    "zEndNodes":[
                        "5d3532a988a53b2fa33628a0_117571840"
                    ]
                },
                {
                    "neId":"5d3532a988a53b2fa33628a0",
                    "userLabel":"4AN400-7-2-1;/otu4=1/odu4=1",
                    "isMergedRoute":null,
                    "ptpId":"5d3532a988a53b2fa33628a0_117571840",
                    "ptpUserLabel":"4AN400-7-2-1",
                    "isSeparatedRoute":null,
                    "neUserLabel":"135.251.97.141",
                    "type":"TP",
                    "params":{
                        "rootAlarmState":null,
                        "alarmState":"CLEARED"
                    },
                    "equipmentId":"5d3532a988a53b2fa33628a0_7.2",
                    "tpType":"CTP",
                    "layerRate":"ODU4",
                    "equipmentUserLabel":"4AN400-7-2",
                    "id":"5d3532a988a53b2fa33628a0_117571840_4AN400-7-2-1;/otu4=1/odu4=1"
                }
            ]
        },
        "equipmentUserLabel":null,
        "id":"5d3532ba88a53b2fa33628a2_117506816_30AN300-7-1-3;/odu2e=1-5d3532ba88a53b2fa33628a2_117571840_4AN400-7-2-1;/otu4=1/odu4=1/odu2e=2-5d3532ba88a53b2fa33628a2_117637376_4AN400-7-3-1;/otu4=1/odu4=1/odu2e=1",
        "direction":"BI"
    },
    {
        "neId":"5d3532a988a53b2fa33628a0",
        "userLabel":"30AN300-7-1-3-4AN400-7-2-1",
        "isMergedRoute":true,
        "protectionType":"SNCP",
        "aEndNodes":[
            "5d3532a988a53b2fa33628a0_117506816_30AN300-7-1-3;/odu2e=1"
        ],
        "isSeparatedRoute":null,
        "neUserLabel":"135.251.97.141",
        "pgData":{
            "_id":"5d3532a988a53b2fa33628a0_117506816_30AN300-7-1-3;/odu2e=1_117571840_4AN400-7-2-1;/otu4=1/odu4=1/odu2e=2_117637376_4AN400-7-3-1;/otu4=1/odu4=1/odu2e=1",
            "neId":"5d3532a988a53b2fa33628a0",
            "type":"SNCP",
            "nmlId":"5d3532a988a53b2fa33628a0_117506816_30AN300-7-1-3;/odu2e=1_5d3532ba88a53b2fa33628a2_117506816_30AN300-7-1-3;/odu2e=1",
            "userLabel":"PG_7:2_30AN300-7-1",
            "nativeName":"PG_7:2_30AN300-7-1",
            "layerRates":[
                "ODU2E"
            ],
            "direction":"UNI",
            "reversionMode":"nonRevertive",
            "wtrTime":"5",
            "holdOffTime":"0",
            "tpIds":[
                "5d3532a988a53b2fa33628a0_117506816_30AN300-7-1-3;/odu2e=1",
                "5d3532a988a53b2fa33628a0_117571840_4AN400-7-2-1;/otu4=1/odu4=1/odu2e=2",
                "5d3532a988a53b2fa33628a0_117637376_4AN400-7-3-1;/otu4=1/odu4=1/odu2e=1"
            ],
            "switchData":{
                "_id":null,
                "neId":null,
                "neName":null,
                "pgId":null,
                "pgName":null,
                "event":null,
                "switchStatus":"NoRequest",
                "tpStatus":[
                    {
                        "tpId":null,
                        "switchCmd":null,
                        "txStatus":null,
                        "rxStatus":null
                    },
                    {
                        "tpId":null,
                        "switchCmd":"noCmd",
                        "txStatus":"NoDegradeFailure",
                        "rxStatus":"NoDegradeFailure"
                    },
                    {
                        "tpId":null,
                        "switchCmd":"noCmd",
                        "txStatus":"NoDegradeFailure",
                        "rxStatus":"NoDegradeFailure"
                    }
                ],
                "eventTpId":null,
                "eventTpName":null,
                "slotProgrammedType":null,
                "eventTime":null,
                "nmsTime":null,
                "additionalInfo":null,
                "isSwitched":null,
                "tag":null
            },
            "implementState":"IMPLEMENTED",
            "params":{
                "falconCard":"true",
                "xcRate":"odu2e",
                "neNumber":10017,
                "pgObjectType":"CTP",
                "groupId":"7:2",
                "xcBidirectional":"twoWaySNCP",
                "realPGId":"5d3532a988a53b2fa33628a0_117506816_30AN300-7-1-3;/odu2e=1_VirtualPlane-7-71-1;/odu4=1/odu2e=2_VirtualPlane-7-71-1;/odu4=3/odu2e=1",
                "description":"30AN300-7-1-3-4AN400-7-2-1",
                "action":"create"
            },
            "usage":"BUSY"
        },
        "type":"XC",
        "params":null,
        "equipmentId":null,
        "zEndNodes":[
            "5d3532a988a53b2fa33628a0_117571840_4AN400-7-2-1;/otu4=1/odu4=1/odu2e=2",
            "5d3532a988a53b2fa33628a0_117637376_4AN400-7-3-1;/otu4=1/odu4=1/odu2e=1"
        ],
        "equipmentUserLabel":null,
        "id":"5d3532a988a53b2fa33628a0_117506816_30AN300-7-1-3;/odu2e=1-5d3532a988a53b2fa33628a0_117571840_4AN400-7-2-1;/otu4=1/odu4=1/odu2e=2-5d3532a988a53b2fa33628a0_117637376_4AN400-7-3-1;/otu4=1/odu4=1/odu2e=1",
        "direction":"BI"
    },
    {
        "neId":"5d3532a988a53b2fa33628a0",
        "userLabel":"30AN300-7-1-3;/odu2e=1",
        "isMergedRoute":null,
        "ptpId":"5d3532a988a53b2fa33628a0_117506816",
        "ptpUserLabel":"30AN300-7-1-3",
        "isSeparatedRoute":null,
        "neUserLabel":"135.251.97.141",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5d3532a988a53b2fa33628a0_7.1",
        "tpType":"CTP",
        "layerRate":"ODU2e",
        "equipmentUserLabel":"30AN300-7-1",
        "id":"5d3532a988a53b2fa33628a0_117506816_30AN300-7-1-3;/odu2e=1"
    }
];
const flowInfo_external_TL = [
    {
        "neId":"5c481289c245544f4eac0cc9",
        "userLabel":"AHPLG-1-2-LINE",
        "isMergedRoute":null,
        "ptpId":"5c481289c245544f4eac0cc9_16909312",
        "ptpUserLabel":"AHPLG-1-2-LINE",
        "isSeparatedRoute":null,
        "neUserLabel":"ne199",
        "type":"TP",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "equipmentId":"5c481289c245544f4eac0cc9_1.2",
        "tpType":"PTP",
        "layerRate":"OTS",
        "equipmentUserLabel":"AHPLG-1-2",
        "id":"5c481289c245544f4eac0cc9_16909312"
    },
    {
        "userLabel":"ne199/AHPLG-1-2-LINE--201/AHPLG-1-4-LINE",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5c481289c245544f4eac0cc9_16909312"
        ],
        "isSeparatedRoute":null,
        "id":"5c481289c245544f4eac0cc9_16909312_5c4812a2c245544f4eac0cd4_17040384",
        "type":"TL",
        "params":{
            "rootAlarmState":null,
            "alarmState":"CLEARED"
        },
        "direction":"BI",
        "zEndNodes":[
            "5c4812a2c245544f4eac0cd4_17040384"
        ]
    },
    {
        "neId":"5c4812a2c245544f4eac0cd4",
        "userLabel":"AHPLG-1-4-LINE",
        "isMergedRoute":null,
        "ptpId":"5c4812a2c245544f4eac0cd4_17040384",
        "ptpUserLabel":"AHPLG-1-4-LINE",
        "isSeparatedRoute":null,
        "neUserLabel":"201",
        "type":"TP",
        "params":{
            "rootAlarmState":"CLEARED",
            "alarmState":"CLEARED"
        },
        "equipmentId":"5c4812a2c245544f4eac0cd4_1.4",
        "tpType":"PTP",
        "layerRate":"OTS",
        "equipmentUserLabel":"AHPLG-1-4",
        "id":"5c4812a2c245544f4eac0cd4_17040384"
    }
];
const flowInfo_internal_TL = [
    {
        "neId":"5c4812a2c245544f4eac0cd4",
        "userLabel":"AHPLG-1-4-SIG",
        "isMergedRoute":null,
        "ptpId":"5c4812a2c245544f4eac0cd4_17039616",
        "ptpUserLabel":"AHPLG-1-4-SIG",
        "isSeparatedRoute":null,
        "neUserLabel":"201",
        "type":"TP",
        "equipmentId":"5c4812a2c245544f4eac0cd4_1.4",
        "tpType":"PTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"AHPLG-1-4",
        "id":"5c4812a2c245544f4eac0cd4_17039616"
    },
    {
        "userLabel":"201/AHPLG-1-4-SIG--201/AHPLG-1-5-SIG",
        "isMergedRoute":null,
        "protectionType":"NORMAL",
        "aEndNodes":[
            "5c4812a2c245544f4eac0cd4_17039616"
        ],
        "isSeparatedRoute":null,
        "id":"5c4812a2c245544f4eac0cd4_17039616_5c4812a2c245544f4eac0cd4_17105152",
        "type":"TL",
        "direction":"BI",
        "zEndNodes":[
            "5c4812a2c245544f4eac0cd4_17105152"
        ]
    },
    {
        "neId":"5c4812a2c245544f4eac0cd4",
        "userLabel":"AHPLG-1-5-SIG",
        "isMergedRoute":null,
        "ptpId":"5c4812a2c245544f4eac0cd4_17105152",
        "ptpUserLabel":"AHPLG-1-5-SIG",
        "isSeparatedRoute":null,
        "neUserLabel":"201",
        "type":"TP",
        "equipmentId":"5c4812a2c245544f4eac0cd4_1.5",
        "tpType":"PTP",
        "layerRate":"OMS",
        "equipmentUserLabel":"AHPLG-1-5",
        "id":"5c4812a2c245544f4eac0cd4_17105152"
    }
];
const flowInfo_11QPA4_4_3_C1_CAT = [
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "11QPA4-4-3-C1;/odu2=1",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_67306752",
        "ptpUserLabel": "11QPA4-4-3-C1",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_4.3",
        "tpType": "CTP",
        "layerRate": "ODU2",
        "equipmentUserLabel": "11QPA4-4-3",
        "id": "5c4812a2c245544f4eac0cd4_67306752_11QPA4-4-3-C1;/odu2=1"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812a2c245544f4eac0cd4_67306752_11QPA4-4-3-C1;/odu2=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "XC",
        "equipmentId": "5c4812a2c245544f4eac0cd4_4.3",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_67305728_11QPA4-4-3-L1;/otu2=1/odu2=1"
        ],
        "equipmentUserLabel": "11QPA4-4-3",
        "id": "5c4812a2c245544f4eac0cd4_67306752_11QPA4-4-3-C1;/odu2=1-5c4812a2c245544f4eac0cd4_67305728_11QPA4-4-3-L1;/otu2=1/odu2=1",
        "direction": "BI"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "11QPA4-4-3-L1;/otu2=1/odu2=1",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_67305728",
        "ptpUserLabel": "11QPA4-4-3-L1",
        "isSeparatedRoute": true,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_4.3",
        "separatedRouteElements": {
            "Tx": [
                {
                    "userLabel": "201/11QPA4-4-3-L1--201/11QPA4-4-3-VA1",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812a2c245544f4eac0cd4_67305728"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812a2c245544f4eac0cd4_67305728_5c4812a2c245544f4eac0cd4_67307776",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812a2c245544f4eac0cd4_67307776"
                    ]
                },
                {
                    "neId": "5c4812a2c245544f4eac0cd4",
                    "userLabel": "11QPA4-4-3-VA1;/frequency=/tunable-number=1",
                    "isMergedRoute": null,
                    "ptpId": "5c4812a2c245544f4eac0cd4_67307776",
                    "ptpUserLabel": "11QPA4-4-3-VA1",
                    "isSeparatedRoute": null,
                    "neUserLabel": "201",
                    "type": "TP",
                    "equipmentId": "5c4812a2c245544f4eac0cd4_4.3",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "11QPA4-4-3",
                    "id": "5c4812a2c245544f4eac0cd4_67307776_11QPA4-4-3-VA1;/frequency=/tunable-number=1"
                },
                {
                    "userLabel": "201/11QPA4-4-3-VA1--201/112SDX11-4-2-C1",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812a2c245544f4eac0cd4_67307776"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812a2c245544f4eac0cd4_67241216_5c4812a2c245544f4eac0cd4_67307776",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812a2c245544f4eac0cd4_67241216"
                    ]
                }
            ],
            "Rx": [
                {
                    "userLabel": "201/112SDX11-4-2-C1--201/11QPA4-4-3-L1",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812a2c245544f4eac0cd4_67241216"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812a2c245544f4eac0cd4_67241216_5c4812a2c245544f4eac0cd4_67305728",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812a2c245544f4eac0cd4_67305728"
                    ]
                }
            ]
        },
        "tpType": "CTP",
        "layerRate": "ODU2",
        "equipmentUserLabel": "11QPA4-4-3",
        "id": "5c4812a2c245544f4eac0cd4_67305728_11QPA4-4-3-L1;/otu2=1/odu2=1"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "112SDX11-4-2-C1;/odu2=1",
        "isMergedRoute": true,
        "ptpId": "5c4812a2c245544f4eac0cd4_67241216",
        "ptpUserLabel": "112SDX11-4-2-C1",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_4.2",
        "tpType": "CTP",
        "layerRate": "ODU2",
        "equipmentUserLabel": "112SDX11-4-2",
        "id": "5c4812a2c245544f4eac0cd4_67241216_112SDX11-4-2-C1;/odu2=1"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "112SDX11",
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812a2c245544f4eac0cd4_67240192_112SDX11-4-2-L1;/otu4=1/odu4=1/odu2=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "XC",
        "equipmentId": "5c4812a2c245544f4eac0cd4_4.2",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_67241216_112SDX11-4-2-C1;/odu2=1"
        ],
        "equipmentUserLabel": "112SDX11-4-2",
        "id": "5c4812a2c245544f4eac0cd4_67240192_112SDX11-4-2-L1;/otu4=1/odu4=1/odu2=1-5c4812a2c245544f4eac0cd4_67241216_112SDX11-4-2-C1;/odu2=1",
        "direction": "BI"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "112SDX11-4-2-L1;/otu4=1/odu4=1/odu2=1",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_67240192",
        "ptpUserLabel": "112SDX11-4-2-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_4.2",
        "tpType": "CTP",
        "layerRate": "ODU2",
        "equipmentUserLabel": "112SDX11-4-2",
        "id": "5c4812a2c245544f4eac0cd4_67240192_112SDX11-4-2-L1;/otu4=1/odu4=1/odu2=1"
    },
    {
        "userLabel": "201/112SDX11-4-2-L1--201/SFD44-28-1-9170",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c4812a2c245544f4eac0cd4_67240192"
        ],
        "isSeparatedRoute": null,
        "id": "5c4812a2c245544f4eac0cd4_469838848_5c4812a2c245544f4eac0cd4_67240192",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_469838848"
        ]
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "SFD44-28-1-9170;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_469838848",
        "ptpUserLabel": "SFD44-28-1-9170",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_28.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-28-1",
        "id": "5c4812a2c245544f4eac0cd4_469838848_SFD44-28-1-9170;/frequency=9170.000"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812a2c245544f4eac0cd4_469838848_SFD44-28-1-9170;/frequency=9170.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "XC",
        "equipmentId": "5c4812a2c245544f4eac0cd4_28.1",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_469839104_SFD44-28-1-OMD;/frequency=9170.000"
        ],
        "equipmentUserLabel": "SFD44-28-1",
        "id": "5c4812a2c245544f4eac0cd4_469838848_SFD44-28-1-9170;/frequency=9170.000-5c4812a2c245544f4eac0cd4_469839104_SFD44-28-1-OMD;/frequency=9170.000",
        "direction": "BI"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "SFD44-28-1-OMD;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_469839104",
        "ptpUserLabel": "SFD44-28-1-OMD",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_28.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-28-1",
        "id": "5c4812a2c245544f4eac0cd4_469839104_SFD44-28-1-OMD;/frequency=9170.000"
    },
    {
        "userLabel": "201/AHPHG-4-4-SIG--201/SFD44-28-1-OMD",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c4812a2c245544f4eac0cd4_67371264"
        ],
        "isSeparatedRoute": null,
        "id": "5c4812a2c245544f4eac0cd4_469839104_5c4812a2c245544f4eac0cd4_67371264",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_469839104"
        ]
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "AHPHG-4-4-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_67371264",
        "ptpUserLabel": "AHPHG-4-4-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_4.4",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-4-4",
        "id": "5c4812a2c245544f4eac0cd4_67371264_AHPHG-4-4-SIG;/oms=1"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812a2c245544f4eac0cd4_67371264_AHPHG-4-4-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "XC",
        "equipmentId": "5c4812a2c245544f4eac0cd4_4.4",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_67372032_AHPHG-4-4-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPHG-4-4",
        "id": "5c4812a2c245544f4eac0cd4_67371264_AHPHG-4-4-SIG;/oms=1-5c4812a2c245544f4eac0cd4_67372032_AHPHG-4-4-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "AHPHG-4-4-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_67372032",
        "ptpUserLabel": "AHPHG-4-4-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_4.4",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-4-4",
        "id": "5c4812a2c245544f4eac0cd4_67372032_AHPHG-4-4-LINE;/oms=1"
    },
    {
        "userLabel": "201/AHPHG-4-4-LINE--202/AHPHG-2-4-LINE",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c4812a2c245544f4eac0cd4_67372032"
        ],
        "isSeparatedRoute": null,
        "id": "5c4812a2c245544f4eac0cd4_67372032_5c4812adc245544f4eac0cd5_33817600",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_33817600"
        ]
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "AHPHG-2-4-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_33817600",
        "ptpUserLabel": "AHPHG-2-4-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_2.4",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-2-4",
        "id": "5c4812adc245544f4eac0cd5_33817600_AHPHG-2-4-LINE;/oms=1"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812adc245544f4eac0cd5_33816832_AHPHG-2-4-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "XC",
        "equipmentId": "5c4812adc245544f4eac0cd5_2.4",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_33817600_AHPHG-2-4-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPHG-2-4",
        "id": "5c4812adc245544f4eac0cd5_33816832_AHPHG-2-4-SIG;/oms=1-5c4812adc245544f4eac0cd5_33817600_AHPHG-2-4-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "AHPHG-2-4-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_33816832",
        "ptpUserLabel": "AHPHG-2-4-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_2.4",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-2-4",
        "id": "5c4812adc245544f4eac0cd5_33816832_AHPHG-2-4-SIG;/oms=1"
    },
    {
        "userLabel": "202/AHPHG-2-4-SIG--202/SFD44-27-1-OMD",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c4812adc245544f4eac0cd5_33816832"
        ],
        "isSeparatedRoute": null,
        "id": "5c4812adc245544f4eac0cd5_33816832_5c4812adc245544f4eac0cd5_453061888",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_453061888"
        ]
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "SFD44-27-1-OMD;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_453061888",
        "ptpUserLabel": "SFD44-27-1-OMD",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_27.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-27-1",
        "id": "5c4812adc245544f4eac0cd5_453061888_SFD44-27-1-OMD;/frequency=9170.000"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812adc245544f4eac0cd5_453061632_SFD44-27-1-9170;/frequency=9170.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "XC",
        "equipmentId": "5c4812adc245544f4eac0cd5_27.1",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_453061888_SFD44-27-1-OMD;/frequency=9170.000"
        ],
        "equipmentUserLabel": "SFD44-27-1",
        "id": "5c4812adc245544f4eac0cd5_453061632_SFD44-27-1-9170;/frequency=9170.000-5c4812adc245544f4eac0cd5_453061888_SFD44-27-1-OMD;/frequency=9170.000",
        "direction": "BI"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "SFD44-27-1-9170;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_453061632",
        "ptpUserLabel": "SFD44-27-1-9170",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_27.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-27-1",
        "id": "5c4812adc245544f4eac0cd5_453061632_SFD44-27-1-9170;/frequency=9170.000"
    },
    {
        "userLabel": "202/112SDX11-2-2-L1--202/SFD44-27-1-9170",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c4812adc245544f4eac0cd5_33685760"
        ],
        "isSeparatedRoute": null,
        "id": "5c4812adc245544f4eac0cd5_33685760_5c4812adc245544f4eac0cd5_453061632",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_453061632"
        ]
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "112SDX11-2-2-L1;/otu4=1/odu4=1/odu2=1",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_33685760",
        "ptpUserLabel": "112SDX11-2-2-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_2.2",
        "tpType": "CTP",
        "layerRate": "ODU2",
        "equipmentUserLabel": "112SDX11-2-2",
        "id": "5c4812adc245544f4eac0cd5_33685760_112SDX11-2-2-L1;/otu4=1/odu4=1/odu2=1"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "112SDX11",
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812adc245544f4eac0cd5_33685760_112SDX11-2-2-L1;/otu4=1/odu4=1/odu2=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "XC",
        "equipmentId": "5c4812adc245544f4eac0cd5_2.2",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_33686784_112SDX11-2-2-C1;/odu2=1"
        ],
        "equipmentUserLabel": "112SDX11-2-2",
        "id": "5c4812adc245544f4eac0cd5_33685760_112SDX11-2-2-L1;/otu4=1/odu4=1/odu2=1-5c4812adc245544f4eac0cd5_33686784_112SDX11-2-2-C1;/odu2=1",
        "direction": "BI"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "112SDX11-2-2-C1;/odu2=1",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_33686784",
        "ptpUserLabel": "112SDX11-2-2-C1",
        "isSeparatedRoute": true,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_2.2",
        "separatedRouteElements": {
            "Tx": [
                {
                    "userLabel": "202/112SDX11-2-2-C1--202/11QPA4-2-3-L1",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812adc245544f4eac0cd5_33686784"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812adc245544f4eac0cd5_33686784_5c4812adc245544f4eac0cd5_33751296",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812adc245544f4eac0cd5_33751296"
                    ]
                }
            ],
            "Rx": [
                {
                    "userLabel": "202/11QPA4-2-3-VA1--202/112SDX11-2-2-C1",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812adc245544f4eac0cd5_33753344"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812adc245544f4eac0cd5_33686784_5c4812adc245544f4eac0cd5_33753344",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812adc245544f4eac0cd5_33686784"
                    ]
                },
                {
                    "neId": "5c4812adc245544f4eac0cd5",
                    "userLabel": "11QPA4-2-3-VA1;/frequency=/tunable-number=1",
                    "isMergedRoute": null,
                    "ptpId": "5c4812adc245544f4eac0cd5_33753344",
                    "ptpUserLabel": "11QPA4-2-3-VA1",
                    "isSeparatedRoute": null,
                    "neUserLabel": "202",
                    "type": "TP",
                    "equipmentId": "5c4812adc245544f4eac0cd5_2.3",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "11QPA4-2-3",
                    "id": "5c4812adc245544f4eac0cd5_33753344_11QPA4-2-3-VA1;/frequency=/tunable-number=1"
                },
                {
                    "userLabel": "202/11QPA4-2-3-L1--202/11QPA4-2-3-VA1",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812adc245544f4eac0cd5_33751296"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812adc245544f4eac0cd5_33751296_5c4812adc245544f4eac0cd5_33753344",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812adc245544f4eac0cd5_33753344"
                    ]
                }
            ]
        },
        "tpType": "CTP",
        "layerRate": "ODU2",
        "equipmentUserLabel": "112SDX11-2-2",
        "id": "5c4812adc245544f4eac0cd5_33686784_112SDX11-2-2-C1;/odu2=1"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "11QPA4-2-3-L1;/otu2=1/odu2=1",
        "isMergedRoute": true,
        "ptpId": "5c4812adc245544f4eac0cd5_33751296",
        "ptpUserLabel": "11QPA4-2-3-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_2.3",
        "tpType": "CTP",
        "layerRate": "ODU2",
        "equipmentUserLabel": "11QPA4-2-3",
        "id": "5c4812adc245544f4eac0cd5_33751296_11QPA4-2-3-L1;/otu2=1/odu2=1"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812adc245544f4eac0cd5_33752320_11QPA4-2-3-C1;/odu2=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "XC",
        "equipmentId": "5c4812adc245544f4eac0cd5_2.3",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_33751296_11QPA4-2-3-L1;/otu2=1/odu2=1"
        ],
        "equipmentUserLabel": "11QPA4-2-3",
        "id": "5c4812adc245544f4eac0cd5_33752320_11QPA4-2-3-C1;/odu2=1-5c4812adc245544f4eac0cd5_33751296_11QPA4-2-3-L1;/otu2=1/odu2=1",
        "direction": "BI"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "11QPA4-2-3-C1;/odu2=1",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_33752320",
        "ptpUserLabel": "11QPA4-2-3-C1",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_2.3",
        "tpType": "CTP",
        "layerRate": "ODU2",
        "equipmentUserLabel": "11QPA4-2-3",
        "id": "5c4812adc245544f4eac0cd5_33752320_11QPA4-2-3-C1;/odu2=1"
    }
];
const flowInfo_BDBL_5_4_C1__BJM1_18_11_C1 = [
    {
        "neId": "5dcba04a2f801779d84b1ab9",
        "userLabel": "260SCX2-5-4-C1;/odu4=1",
        "isMergedRoute": null,
        "ptpId": "5dcba04a2f801779d84b1ab9_84148736",
        "ptpUserLabel": "260SCX2-5-4-C1",
        "isSeparatedRoute": null,
        "neUserLabel": "BDBL-PSS32-ROADM-26",
        "type": "TP",
        "equipmentId": "5dcba04a2f801779d84b1ab9_5.4",
        "tpType": "CTP",
        "layerRate": "ODU4",
        "equipmentUserLabel": "260SCX2-5-4",
        "id": "5dcba04a2f801779d84b1ab9_84148736_260SCX2-5-4-C1;/odu4=1"
    },
    {
        "neId": "5dcba04a2f801779d84b1ab9",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5dcba04a2f801779d84b1ab9_84148736_260SCX2-5-4-C1;/odu4=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "BDBL-PSS32-ROADM-26",
        "type": "XC",
        "equipmentId": "5dcba04a2f801779d84b1ab9_5.4",
        "zEndNodes": [
            "5dcba04a2f801779d84b1ab9_84148480_260SCX2-5-4-L1;/otu4=1/odu4=1"
        ],
        "equipmentUserLabel": "260SCX2-5-4",
        "id": "5dcba04a2f801779d84b1ab9_84148736_260SCX2-5-4-C1;/odu4=1-5dcba04a2f801779d84b1ab9_84148480_260SCX2-5-4-L1;/otu4=1/odu4=1",
        "direction": "BI"
    },
    {
        "neId": "5dcba04a2f801779d84b1ab9",
        "userLabel": "260SCX2-5-4-L1;/otu4=1/odu4=1",
        "isMergedRoute": null,
        "ptpId": "5dcba04a2f801779d84b1ab9_84148480",
        "ptpUserLabel": "260SCX2-5-4-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "BDBL-PSS32-ROADM-26",
        "type": "TP",
        "equipmentId": "5dcba04a2f801779d84b1ab9_5.4",
        "tpType": "CTP",
        "layerRate": "ODU4",
        "equipmentUserLabel": "260SCX2-5-4",
        "id": "5dcba04a2f801779d84b1ab9_84148480_260SCX2-5-4-L1;/otu4=1/odu4=1"
    },
    {
        "userLabel": "BDBL-PSS32-ROADM-26/OPSA-5-3-SIG--BDBL-PSS32-ROADM-26/260SCX2-5-4-L1",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5dcba04a2f801779d84b1ab9_84082944"
        ],
        "isSeparatedRoute": null,
        "id": "5dcba04a2f801779d84b1ab9_84082944_5dcba04a2f801779d84b1ab9_84148480",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5dcba04a2f801779d84b1ab9_84148480"
        ]
    },
    {
        "neId": "5dcba04a2f801779d84b1ab9",
        "userLabel": "OPSA-5-3-SIG;/frequency=/tunable-number=1",
        "isMergedRoute": null,
        "ptpId": "5dcba04a2f801779d84b1ab9_84082944",
        "ptpUserLabel": "OPSA-5-3-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "BDBL-PSS32-ROADM-26",
        "type": "TP",
        "equipmentId": "5dcba04a2f801779d84b1ab9_5.3",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "OPSA-5-3",
        "id": "5dcba04a2f801779d84b1ab9_84082944_OPSA-5-3-SIG;/frequency=/tunable-number=1"
    },
    {
        "neId": "5dcba04a2f801779d84b1ab9",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "OPS",
        "aEndNodes": [
            "5dcba04a2f801779d84b1ab9_84082944_OPSA-5-3-SIG;/frequency=/tunable-number=1"
        ],
        "isSeparatedRoute": true,
        "neUserLabel": "BDBL-PSS32-ROADM-26",
        "type": "XC",
        "equipmentId": "5dcba04a2f801779d84b1ab9_5.3",
        "zEndNodes": [
            "5dcba04a2f801779d84b1ab9_84083200_OPSA-5-3-A;/frequency=/tunable-number=1",
            "5dcba04a2f801779d84b1ab9_84083456_OPSA-5-3-B;/frequency=/tunable-number=1"
        ],
        "separatedRouteElements": {
            "Spare": [
                {
                    "neId": "5dcba04a2f801779d84b1ab9",
                    "userLabel": "OPSA-5-3-B;/frequency=/tunable-number=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba04a2f801779d84b1ab9_84083456",
                    "ptpUserLabel": "OPSA-5-3-B",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BDBL-PSS32-ROADM-26",
                    "type": "TP",
                    "equipmentId": "5dcba04a2f801779d84b1ab9_5.3",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "OPSA-5-3",
                    "id": "5dcba04a2f801779d84b1ab9_84083456_OPSA-5-3-B;/frequency=/tunable-number=1"
                },
                {
                    "userLabel": "BDBL-PSS32-ROADM-26/SFD44B-29-1-9475--BDBL-PSS32-ROADM-26/OPSA-5-3-B",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba04a2f801779d84b1ab9_486608384"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba04a2f801779d84b1ab9_486608384_5dcba04a2f801779d84b1ab9_84083456",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba04a2f801779d84b1ab9_84083456"
                    ]
                },
                {
                    "neId": "5dcba04a2f801779d84b1ab9",
                    "userLabel": "SFD44B-29-1-9475;/frequency=9475.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcba04a2f801779d84b1ab9_486608384",
                    "ptpUserLabel": "SFD44B-29-1-9475",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BDBL-PSS32-ROADM-26",
                    "type": "TP",
                    "equipmentId": "5dcba04a2f801779d84b1ab9_29.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44B-29-1",
                    "id": "5dcba04a2f801779d84b1ab9_486608384_SFD44B-29-1-9475;/frequency=9475.000"
                },
                {
                    "neId": "5dcba04a2f801779d84b1ab9",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba04a2f801779d84b1ab9_486608384_SFD44B-29-1-9475;/frequency=9475.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BDBL-PSS32-ROADM-26",
                    "type": "XC",
                    "equipmentId": "5dcba04a2f801779d84b1ab9_29.1",
                    "zEndNodes": [
                        "5dcba04a2f801779d84b1ab9_486616320_SFD44B-29-1-OMD;/frequency=9475.000"
                    ],
                    "equipmentUserLabel": "SFD44B-29-1",
                    "id": "5dcba04a2f801779d84b1ab9_486608384_SFD44B-29-1-9475;/frequency=9475.000-5dcba04a2f801779d84b1ab9_486616320_SFD44B-29-1-OMD;/frequency=9475.000",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba04a2f801779d84b1ab9",
                    "userLabel": "SFD44B-29-1-OMD;/frequency=9475.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcba04a2f801779d84b1ab9_486616320",
                    "ptpUserLabel": "SFD44B-29-1-OMD",
                    "isSeparatedRoute": true,
                    "neUserLabel": "BDBL-PSS32-ROADM-26",
                    "type": "TP",
                    "equipmentId": "5dcba04a2f801779d84b1ab9_29.1",
                    "separatedRouteElements": {
                        "Tx": [
                            {
                                "userLabel": "BDBL-PSS32-ROADM-26/SFD44B-29-1-OMD--BDBL-PSS32-ROADM-26/WR8-88AF-2-4-ADDIN2",
                                "isMergedRoute": null,
                                "protectionType": "NORMAL",
                                "aEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_486616320"
                                ],
                                "isSeparatedRoute": null,
                                "id": "5dcba04a2f801779d84b1ab9_33817856_5dcba04a2f801779d84b1ab9_486616320",
                                "type": "TL",
                                "direction": "UNI",
                                "zEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_33817856"
                                ]
                            },
                            {
                                "neId": "5dcba04a2f801779d84b1ab9",
                                "userLabel": "WR8-88AF-2-4-ADDIN2;/frequency=9475.000",
                                "isMergedRoute": null,
                                "ptpId": "5dcba04a2f801779d84b1ab9_33817856",
                                "ptpUserLabel": "WR8-88AF-2-4-ADDIN2",
                                "isSeparatedRoute": null,
                                "neUserLabel": "BDBL-PSS32-ROADM-26",
                                "type": "TP",
                                "equipmentId": "5dcba04a2f801779d84b1ab9_2.4",
                                "tpType": "CTP",
                                "layerRate": "OCH",
                                "equipmentUserLabel": "WR8-88AF-2-4",
                                "id": "5dcba04a2f801779d84b1ab9_33817856_WR8-88AF-2-4-ADDIN2;/frequency=9475.000"
                            },
                            {
                                "neId": "5dcba04a2f801779d84b1ab9",
                                "userLabel": "TAKEOVER-1577443786133",
                                "isMergedRoute": null,
                                "protectionType": "SIMPLE",
                                "aEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_33817856_WR8-88AF-2-4-ADDIN2;/frequency=9475.000"
                                ],
                                "isSeparatedRoute": null,
                                "neUserLabel": "BDBL-PSS32-ROADM-26",
                                "type": "XC",
                                "equipmentId": "5dcba04a2f801779d84b1ab9_2.4",
                                "zEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_33816832_WR8-88AF-2-4-SIG;/frequency=9475.000"
                                ],
                                "equipmentUserLabel": "WR8-88AF-2-4",
                                "id": "5dcba04a2f801779d84b1ab9_33817856_WR8-88AF-2-4-ADDIN2;/frequency=9475.000-5dcba04a2f801779d84b1ab9_33816832_WR8-88AF-2-4-SIG;/frequency=9475.000",
                                "direction": "BI"
                            }
                        ],
                        "Rx": [
                            {
                                "userLabel": "BDBL-PSS32-ROADM-26/ITLU-28-1-OOUT--BDBL-PSS32-ROADM-26/SFD44B-29-1-OMD",
                                "isMergedRoute": null,
                                "protectionType": "NORMAL",
                                "aEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_469828352"
                                ],
                                "isSeparatedRoute": null,
                                "id": "5dcba04a2f801779d84b1ab9_469828352_5dcba04a2f801779d84b1ab9_486616320",
                                "type": "TL",
                                "direction": "UNI",
                                "zEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_486616320"
                                ]
                            },
                            {
                                "neId": "5dcba04a2f801779d84b1ab9",
                                "userLabel": "ITLU-28-1-OOUT;/frequency=9475.000",
                                "isMergedRoute": null,
                                "ptpId": "5dcba04a2f801779d84b1ab9_469828352",
                                "ptpUserLabel": "ITLU-28-1-OOUT",
                                "isSeparatedRoute": null,
                                "neUserLabel": "BDBL-PSS32-ROADM-26",
                                "type": "TP",
                                "equipmentId": "5dcba04a2f801779d84b1ab9_28.1",
                                "tpType": "CTP",
                                "layerRate": "OCH",
                                "equipmentUserLabel": "ITLU-28-1",
                                "id": "5dcba04a2f801779d84b1ab9_469828352_ITLU-28-1-OOUT;/frequency=9475.000"
                            },
                            {
                                "neId": "5dcba04a2f801779d84b1ab9",
                                "userLabel": null,
                                "isMergedRoute": null,
                                "protectionType": "SIMPLE",
                                "aEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_469828352_ITLU-28-1-OOUT;/frequency=9475.000"
                                ],
                                "isSeparatedRoute": null,
                                "neUserLabel": "BDBL-PSS32-ROADM-26",
                                "type": "XC",
                                "equipmentId": "5dcba04a2f801779d84b1ab9_28.1",
                                "zEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_469827840_ITLU-28-1-SIGIN;/frequency=9475.000"
                                ],
                                "equipmentUserLabel": "ITLU-28-1",
                                "id": "5dcba04a2f801779d84b1ab9_469828352_ITLU-28-1-OOUT;/frequency=9475.000-5dcba04a2f801779d84b1ab9_469827840_ITLU-28-1-SIGIN;/frequency=9475.000",
                                "direction": "UNI"
                            },
                            {
                                "neId": "5dcba04a2f801779d84b1ab9",
                                "userLabel": "ITLU-28-1-SIGIN;/frequency=9475.000",
                                "isMergedRoute": null,
                                "ptpId": "5dcba04a2f801779d84b1ab9_469827840",
                                "ptpUserLabel": "ITLU-28-1-SIGIN",
                                "isSeparatedRoute": null,
                                "neUserLabel": "BDBL-PSS32-ROADM-26",
                                "type": "TP",
                                "equipmentId": "5dcba04a2f801779d84b1ab9_28.1",
                                "tpType": "CTP",
                                "layerRate": "OCH",
                                "equipmentUserLabel": "ITLU-28-1",
                                "id": "5dcba04a2f801779d84b1ab9_469827840_ITLU-28-1-SIGIN;/frequency=9475.000"
                            },
                            {
                                "userLabel": "BDBL-PSS32-ROADM-26/WR8-88AF-2-4-DROPOUT--BDBL-PSS32-ROADM-26/ITLU-28-1-SIGIN",
                                "isMergedRoute": null,
                                "protectionType": "NORMAL",
                                "aEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_33817344"
                                ],
                                "isSeparatedRoute": null,
                                "id": "5dcba04a2f801779d84b1ab9_33817344_5dcba04a2f801779d84b1ab9_469827840",
                                "type": "TL",
                                "direction": "UNI",
                                "zEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_469827840"
                                ]
                            },
                            {
                                "neId": "5dcba04a2f801779d84b1ab9",
                                "userLabel": "WR8-88AF-2-4-DROPOUT;/frequency=9475.000",
                                "isMergedRoute": null,
                                "ptpId": "5dcba04a2f801779d84b1ab9_33817344",
                                "ptpUserLabel": "WR8-88AF-2-4-DROPOUT",
                                "isSeparatedRoute": null,
                                "neUserLabel": "BDBL-PSS32-ROADM-26",
                                "type": "TP",
                                "equipmentId": "5dcba04a2f801779d84b1ab9_2.4",
                                "tpType": "CTP",
                                "layerRate": "OCH",
                                "equipmentUserLabel": "WR8-88AF-2-4",
                                "id": "5dcba04a2f801779d84b1ab9_33817344_WR8-88AF-2-4-DROPOUT;/frequency=9475.000"
                            },
                            {
                                "neId": "5dcba04a2f801779d84b1ab9",
                                "userLabel": "TAKEOVER-1577443786133",
                                "isMergedRoute": null,
                                "protectionType": "SIMPLE",
                                "aEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_33817344_WR8-88AF-2-4-DROPOUT;/frequency=9475.000"
                                ],
                                "isSeparatedRoute": null,
                                "neUserLabel": "BDBL-PSS32-ROADM-26",
                                "type": "XC",
                                "equipmentId": "5dcba04a2f801779d84b1ab9_2.4",
                                "zEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_33816832_WR8-88AF-2-4-SIG;/frequency=9475.000"
                                ],
                                "equipmentUserLabel": "WR8-88AF-2-4",
                                "id": "5dcba04a2f801779d84b1ab9_33817344_WR8-88AF-2-4-DROPOUT;/frequency=9475.000-5dcba04a2f801779d84b1ab9_33816832_WR8-88AF-2-4-SIG;/frequency=9475.000",
                                "direction": "BI"
                            }
                        ]
                    },
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44B-29-1",
                    "id": "5dcba04a2f801779d84b1ab9_486616320_SFD44B-29-1-OMD;/frequency=9475.000"
                },
                {
                    "neId": "5dcba04a2f801779d84b1ab9",
                    "userLabel": "WR8-88AF-2-4-SIG;/frequency=9475.000",
                    "isMergedRoute": true,
                    "ptpId": "5dcba04a2f801779d84b1ab9_33816832",
                    "ptpUserLabel": "WR8-88AF-2-4-SIG",
                    "isSeparatedRoute": true,
                    "neUserLabel": "BDBL-PSS32-ROADM-26",
                    "type": "TP",
                    "equipmentId": "5dcba04a2f801779d84b1ab9_2.4",
                    "separatedRouteElements": {
                        "Tx": [
                            {
                                "userLabel": "BDBL-PSS32-ROADM-26/WR8-88AF-2-4-SIG--BDBL-PSS32-ROADM-26/AM2625A-2-2-LINEIN",
                                "isMergedRoute": null,
                                "protectionType": "NORMAL",
                                "aEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_33816832"
                                ],
                                "isSeparatedRoute": null,
                                "id": "5dcba04a2f801779d84b1ab9_33685760_5dcba04a2f801779d84b1ab9_33816832",
                                "type": "TL",
                                "direction": "UNI",
                                "zEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_33685760"
                                ]
                            },
                            {
                                "neId": "5dcba04a2f801779d84b1ab9",
                                "userLabel": "AM2625A-2-2-LINEIN;/oms=1",
                                "isMergedRoute": null,
                                "ptpId": "5dcba04a2f801779d84b1ab9_33685760",
                                "ptpUserLabel": "AM2625A-2-2-LINEIN",
                                "isSeparatedRoute": null,
                                "neUserLabel": "BDBL-PSS32-ROADM-26",
                                "type": "TP",
                                "equipmentId": "5dcba04a2f801779d84b1ab9_2.2",
                                "tpType": "CTP",
                                "layerRate": "OMS",
                                "equipmentUserLabel": "AM2625A-2-2",
                                "id": "5dcba04a2f801779d84b1ab9_33685760_AM2625A-2-2-LINEIN;/oms=1"
                            },
                            {
                                "neId": "5dcba04a2f801779d84b1ab9",
                                "userLabel": null,
                                "isMergedRoute": null,
                                "protectionType": "SIMPLE",
                                "aEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_33685760_AM2625A-2-2-LINEIN;/oms=1"
                                ],
                                "isSeparatedRoute": null,
                                "neUserLabel": "BDBL-PSS32-ROADM-26",
                                "type": "XC",
                                "equipmentId": "5dcba04a2f801779d84b1ab9_2.2",
                                "zEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_33686528_AM2625A-2-2-LINEOUT;/oms=1"
                                ],
                                "equipmentUserLabel": "AM2625A-2-2",
                                "id": "5dcba04a2f801779d84b1ab9_33685760_AM2625A-2-2-LINEIN;/oms=1-5dcba04a2f801779d84b1ab9_33686528_AM2625A-2-2-LINEOUT;/oms=1",
                                "direction": "UNI"
                            },
                            {
                                "neId": "5dcba04a2f801779d84b1ab9",
                                "userLabel": "AM2625A-2-2-LINEOUT;/oms=1",
                                "isMergedRoute": null,
                                "ptpId": "5dcba04a2f801779d84b1ab9_33686528",
                                "ptpUserLabel": "AM2625A-2-2-LINEOUT",
                                "isSeparatedRoute": null,
                                "neUserLabel": "BDBL-PSS32-ROADM-26",
                                "type": "TP",
                                "equipmentId": "5dcba04a2f801779d84b1ab9_2.2",
                                "tpType": "CTP",
                                "layerRate": "OMS",
                                "equipmentUserLabel": "AM2625A-2-2",
                                "id": "5dcba04a2f801779d84b1ab9_33686528_AM2625A-2-2-LINEOUT;/oms=1"
                            },
                            {
                                "userLabel": "BDBL-PSS32-ROADM-26/AM2625A-2-2-LINEOUT--CSHBGBD-PSS32-OA-27/AM2625A-1-2-LINEIN",
                                "isMergedRoute": null,
                                "protectionType": "NORMAL",
                                "aEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_33686528"
                                ],
                                "isSeparatedRoute": null,
                                "id": "5dcba04a2f801779d84b1ab9_33686528_5dcba9652f801779d84b1d31_16908544",
                                "type": "TL",
                                "direction": "UNI",
                                "zEndNodes": [
                                    "5dcba9652f801779d84b1d31_16908544"
                                ]
                            },
                            {
                                "neId": "5dcba9652f801779d84b1d31",
                                "userLabel": "AM2625A-1-2-LINEIN;/oms=1",
                                "isMergedRoute": null,
                                "ptpId": "5dcba9652f801779d84b1d31_16908544",
                                "ptpUserLabel": "AM2625A-1-2-LINEIN",
                                "isSeparatedRoute": null,
                                "neUserLabel": "CSHBGBD-PSS32-OA-27",
                                "type": "TP",
                                "equipmentId": "5dcba9652f801779d84b1d31_1.2",
                                "tpType": "CTP",
                                "layerRate": "OMS",
                                "equipmentUserLabel": "AM2625A-1-2",
                                "id": "5dcba9652f801779d84b1d31_16908544_AM2625A-1-2-LINEIN;/oms=1"
                            },
                            {
                                "neId": "5dcba9652f801779d84b1d31",
                                "userLabel": null,
                                "isMergedRoute": null,
                                "protectionType": "SIMPLE",
                                "aEndNodes": [
                                    "5dcba9652f801779d84b1d31_16908544_AM2625A-1-2-LINEIN;/oms=1"
                                ],
                                "isSeparatedRoute": null,
                                "neUserLabel": "CSHBGBD-PSS32-OA-27",
                                "type": "XC",
                                "equipmentId": "5dcba9652f801779d84b1d31_1.2",
                                "zEndNodes": [
                                    "5dcba9652f801779d84b1d31_16909312_AM2625A-1-2-LINEOUT;/oms=1"
                                ],
                                "equipmentUserLabel": "AM2625A-1-2",
                                "id": "5dcba9652f801779d84b1d31_16908544_AM2625A-1-2-LINEIN;/oms=1-5dcba9652f801779d84b1d31_16909312_AM2625A-1-2-LINEOUT;/oms=1",
                                "direction": "UNI"
                            },
                            {
                                "neId": "5dcba9652f801779d84b1d31",
                                "userLabel": "AM2625A-1-2-LINEOUT;/oms=1",
                                "isMergedRoute": null,
                                "ptpId": "5dcba9652f801779d84b1d31_16909312",
                                "ptpUserLabel": "AM2625A-1-2-LINEOUT",
                                "isSeparatedRoute": null,
                                "neUserLabel": "CSHBGBD-PSS32-OA-27",
                                "type": "TP",
                                "equipmentId": "5dcba9652f801779d84b1d31_1.2",
                                "tpType": "CTP",
                                "layerRate": "OMS",
                                "equipmentUserLabel": "AM2625A-1-2",
                                "id": "5dcba9652f801779d84b1d31_16909312_AM2625A-1-2-LINEOUT;/oms=1"
                            },
                            {
                                "userLabel": "CSHBGBD-PSS32-OA-27/AM2625A-1-2-LINEOUT--CSBJFT-PSS32-OA-29/AM2032A-1-2-LINEIN",
                                "isMergedRoute": null,
                                "protectionType": "NORMAL",
                                "aEndNodes": [
                                    "5dcba9652f801779d84b1d31_16909312"
                                ],
                                "isSeparatedRoute": null,
                                "id": "5dcba9652f801779d84b1d31_16909312_5dcba9a02f801779d84b1d4f_16908544",
                                "type": "TL",
                                "direction": "UNI",
                                "zEndNodes": [
                                    "5dcba9a02f801779d84b1d4f_16908544"
                                ]
                            },
                            {
                                "neId": "5dcba9a02f801779d84b1d4f",
                                "userLabel": "AM2032A-1-2-LINEIN;/oms=1",
                                "isMergedRoute": null,
                                "ptpId": "5dcba9a02f801779d84b1d4f_16908544",
                                "ptpUserLabel": "AM2032A-1-2-LINEIN",
                                "isSeparatedRoute": null,
                                "neUserLabel": "CSBJFT-PSS32-OA-29",
                                "type": "TP",
                                "equipmentId": "5dcba9a02f801779d84b1d4f_1.2",
                                "tpType": "CTP",
                                "layerRate": "OMS",
                                "equipmentUserLabel": "AM2032A-1-2",
                                "id": "5dcba9a02f801779d84b1d4f_16908544_AM2032A-1-2-LINEIN;/oms=1"
                            },
                            {
                                "neId": "5dcba9a02f801779d84b1d4f",
                                "userLabel": null,
                                "isMergedRoute": null,
                                "protectionType": "SIMPLE",
                                "aEndNodes": [
                                    "5dcba9a02f801779d84b1d4f_16908544_AM2032A-1-2-LINEIN;/oms=1"
                                ],
                                "isSeparatedRoute": null,
                                "neUserLabel": "CSBJFT-PSS32-OA-29",
                                "type": "XC",
                                "equipmentId": "5dcba9a02f801779d84b1d4f_1.2",
                                "zEndNodes": [
                                    "5dcba9a02f801779d84b1d4f_16909312_AM2032A-1-2-LINEOUT;/oms=1"
                                ],
                                "equipmentUserLabel": "AM2032A-1-2",
                                "id": "5dcba9a02f801779d84b1d4f_16908544_AM2032A-1-2-LINEIN;/oms=1-5dcba9a02f801779d84b1d4f_16909312_AM2032A-1-2-LINEOUT;/oms=1",
                                "direction": "UNI"
                            },
                            {
                                "neId": "5dcba9a02f801779d84b1d4f",
                                "userLabel": "AM2032A-1-2-LINEOUT;/oms=1",
                                "isMergedRoute": null,
                                "ptpId": "5dcba9a02f801779d84b1d4f_16909312",
                                "ptpUserLabel": "AM2032A-1-2-LINEOUT",
                                "isSeparatedRoute": null,
                                "neUserLabel": "CSBJFT-PSS32-OA-29",
                                "type": "TP",
                                "equipmentId": "5dcba9a02f801779d84b1d4f_1.2",
                                "tpType": "CTP",
                                "layerRate": "OMS",
                                "equipmentUserLabel": "AM2032A-1-2",
                                "id": "5dcba9a02f801779d84b1d4f_16909312_AM2032A-1-2-LINEOUT;/oms=1"
                            },
                            {
                                "userLabel": "CSBJFT-PSS32-OA-29/AM2032A-1-2-LINEOUT--BJYZ-PSS32-ROADM-38/AHPHG-9-2-LINE",
                                "isMergedRoute": null,
                                "protectionType": "NORMAL",
                                "aEndNodes": [
                                    "5dcba9a02f801779d84b1d4f_16909312"
                                ],
                                "isSeparatedRoute": null,
                                "id": "5dcba9a02f801779d84b1d4f_16909312_5dcbb0dd2f801779d84b1e4b_151127040",
                                "type": "TL",
                                "direction": "UNI",
                                "zEndNodes": [
                                    "5dcbb0dd2f801779d84b1e4b_151127040"
                                ]
                            }
                        ],
                        "Rx": [
                            {
                                "userLabel": "BDBL-PSS32-ROADM-26/AM2032A-2-7-LINEOUT--BDBL-PSS32-ROADM-26/WR8-88AF-2-4-SIG",
                                "isMergedRoute": null,
                                "protectionType": "NORMAL",
                                "aEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_34014208"
                                ],
                                "isSeparatedRoute": null,
                                "id": "5dcba04a2f801779d84b1ab9_33816832_5dcba04a2f801779d84b1ab9_34014208",
                                "type": "TL",
                                "direction": "UNI",
                                "zEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_33816832"
                                ]
                            },
                            {
                                "neId": "5dcba04a2f801779d84b1ab9",
                                "userLabel": "AM2032A-2-7-LINEOUT;/oms=1",
                                "isMergedRoute": null,
                                "ptpId": "5dcba04a2f801779d84b1ab9_34014208",
                                "ptpUserLabel": "AM2032A-2-7-LINEOUT",
                                "isSeparatedRoute": null,
                                "neUserLabel": "BDBL-PSS32-ROADM-26",
                                "type": "TP",
                                "equipmentId": "5dcba04a2f801779d84b1ab9_2.7",
                                "tpType": "CTP",
                                "layerRate": "OMS",
                                "equipmentUserLabel": "AM2032A-2-7",
                                "id": "5dcba04a2f801779d84b1ab9_34014208_AM2032A-2-7-LINEOUT;/oms=1"
                            },
                            {
                                "neId": "5dcba04a2f801779d84b1ab9",
                                "userLabel": null,
                                "isMergedRoute": null,
                                "protectionType": "SIMPLE",
                                "aEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_34013440_AM2032A-2-7-LINEIN;/oms=1"
                                ],
                                "isSeparatedRoute": null,
                                "neUserLabel": "BDBL-PSS32-ROADM-26",
                                "type": "XC",
                                "equipmentId": "5dcba04a2f801779d84b1ab9_2.7",
                                "zEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_34014208_AM2032A-2-7-LINEOUT;/oms=1"
                                ],
                                "equipmentUserLabel": "AM2032A-2-7",
                                "id": "5dcba04a2f801779d84b1ab9_34013440_AM2032A-2-7-LINEIN;/oms=1-5dcba04a2f801779d84b1ab9_34014208_AM2032A-2-7-LINEOUT;/oms=1",
                                "direction": "UNI"
                            },
                            {
                                "neId": "5dcba04a2f801779d84b1ab9",
                                "userLabel": "AM2032A-2-7-LINEIN;/oms=1",
                                "isMergedRoute": null,
                                "ptpId": "5dcba04a2f801779d84b1ab9_34013440",
                                "ptpUserLabel": "AM2032A-2-7-LINEIN",
                                "isSeparatedRoute": null,
                                "neUserLabel": "BDBL-PSS32-ROADM-26",
                                "type": "TP",
                                "equipmentId": "5dcba04a2f801779d84b1ab9_2.7",
                                "tpType": "CTP",
                                "layerRate": "OMS",
                                "equipmentUserLabel": "AM2032A-2-7",
                                "id": "5dcba04a2f801779d84b1ab9_34013440_AM2032A-2-7-LINEIN;/oms=1"
                            },
                            {
                                "userLabel": "CSHBGBD-PSS32-OA-27/AM2032A-1-4-LINEOUT--BDBL-PSS32-ROADM-26/AM2032A-2-7-LINEIN",
                                "isMergedRoute": null,
                                "protectionType": "NORMAL",
                                "aEndNodes": [
                                    "5dcba9652f801779d84b1d31_17040384"
                                ],
                                "isSeparatedRoute": null,
                                "id": "5dcba04a2f801779d84b1ab9_34013440_5dcba9652f801779d84b1d31_17040384",
                                "type": "TL",
                                "direction": "UNI",
                                "zEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_34013440"
                                ]
                            },
                            {
                                "neId": "5dcba9652f801779d84b1d31",
                                "userLabel": "AM2032A-1-4-LINEOUT;/oms=1",
                                "isMergedRoute": null,
                                "ptpId": "5dcba9652f801779d84b1d31_17040384",
                                "ptpUserLabel": "AM2032A-1-4-LINEOUT",
                                "isSeparatedRoute": null,
                                "neUserLabel": "CSHBGBD-PSS32-OA-27",
                                "type": "TP",
                                "equipmentId": "5dcba9652f801779d84b1d31_1.4",
                                "tpType": "CTP",
                                "layerRate": "OMS",
                                "equipmentUserLabel": "AM2032A-1-4",
                                "id": "5dcba9652f801779d84b1d31_17040384_AM2032A-1-4-LINEOUT;/oms=1"
                            },
                            {
                                "neId": "5dcba9652f801779d84b1d31",
                                "userLabel": null,
                                "isMergedRoute": null,
                                "protectionType": "SIMPLE",
                                "aEndNodes": [
                                    "5dcba9652f801779d84b1d31_17039616_AM2032A-1-4-LINEIN;/oms=1"
                                ],
                                "isSeparatedRoute": null,
                                "neUserLabel": "CSHBGBD-PSS32-OA-27",
                                "type": "XC",
                                "equipmentId": "5dcba9652f801779d84b1d31_1.4",
                                "zEndNodes": [
                                    "5dcba9652f801779d84b1d31_17040384_AM2032A-1-4-LINEOUT;/oms=1"
                                ],
                                "equipmentUserLabel": "AM2032A-1-4",
                                "id": "5dcba9652f801779d84b1d31_17039616_AM2032A-1-4-LINEIN;/oms=1-5dcba9652f801779d84b1d31_17040384_AM2032A-1-4-LINEOUT;/oms=1",
                                "direction": "UNI"
                            },
                            {
                                "neId": "5dcba9652f801779d84b1d31",
                                "userLabel": "AM2032A-1-4-LINEIN;/oms=1",
                                "isMergedRoute": null,
                                "ptpId": "5dcba9652f801779d84b1d31_17039616",
                                "ptpUserLabel": "AM2032A-1-4-LINEIN",
                                "isSeparatedRoute": null,
                                "neUserLabel": "CSHBGBD-PSS32-OA-27",
                                "type": "TP",
                                "equipmentId": "5dcba9652f801779d84b1d31_1.4",
                                "tpType": "CTP",
                                "layerRate": "OMS",
                                "equipmentUserLabel": "AM2032A-1-4",
                                "id": "5dcba9652f801779d84b1d31_17039616_AM2032A-1-4-LINEIN;/oms=1"
                            },
                            {
                                "userLabel": "CSBJFT-PSS32-OA-29/AM2625A-1-3-LINEOUT--CSHBGBD-PSS32-OA-27/AM2032A-1-4-LINEIN",
                                "isMergedRoute": null,
                                "protectionType": "NORMAL",
                                "aEndNodes": [
                                    "5dcba9a02f801779d84b1d4f_16974848"
                                ],
                                "isSeparatedRoute": null,
                                "id": "5dcba9652f801779d84b1d31_17039616_5dcba9a02f801779d84b1d4f_16974848",
                                "type": "TL",
                                "direction": "UNI",
                                "zEndNodes": [
                                    "5dcba9652f801779d84b1d31_17039616"
                                ]
                            },
                            {
                                "neId": "5dcba9a02f801779d84b1d4f",
                                "userLabel": "AM2625A-1-3-LINEOUT;/oms=1",
                                "isMergedRoute": null,
                                "ptpId": "5dcba9a02f801779d84b1d4f_16974848",
                                "ptpUserLabel": "AM2625A-1-3-LINEOUT",
                                "isSeparatedRoute": null,
                                "neUserLabel": "CSBJFT-PSS32-OA-29",
                                "type": "TP",
                                "equipmentId": "5dcba9a02f801779d84b1d4f_1.3",
                                "tpType": "CTP",
                                "layerRate": "OMS",
                                "equipmentUserLabel": "AM2625A-1-3",
                                "id": "5dcba9a02f801779d84b1d4f_16974848_AM2625A-1-3-LINEOUT;/oms=1"
                            },
                            {
                                "neId": "5dcba9a02f801779d84b1d4f",
                                "userLabel": null,
                                "isMergedRoute": null,
                                "protectionType": "SIMPLE",
                                "aEndNodes": [
                                    "5dcba9a02f801779d84b1d4f_16974080_AM2625A-1-3-LINEIN;/oms=1"
                                ],
                                "isSeparatedRoute": null,
                                "neUserLabel": "CSBJFT-PSS32-OA-29",
                                "type": "XC",
                                "equipmentId": "5dcba9a02f801779d84b1d4f_1.3",
                                "zEndNodes": [
                                    "5dcba9a02f801779d84b1d4f_16974848_AM2625A-1-3-LINEOUT;/oms=1"
                                ],
                                "equipmentUserLabel": "AM2625A-1-3",
                                "id": "5dcba9a02f801779d84b1d4f_16974080_AM2625A-1-3-LINEIN;/oms=1-5dcba9a02f801779d84b1d4f_16974848_AM2625A-1-3-LINEOUT;/oms=1",
                                "direction": "UNI"
                            },
                            {
                                "neId": "5dcba9a02f801779d84b1d4f",
                                "userLabel": "AM2625A-1-3-LINEIN;/oms=1",
                                "isMergedRoute": null,
                                "ptpId": "5dcba9a02f801779d84b1d4f_16974080",
                                "ptpUserLabel": "AM2625A-1-3-LINEIN",
                                "isSeparatedRoute": null,
                                "neUserLabel": "CSBJFT-PSS32-OA-29",
                                "type": "TP",
                                "equipmentId": "5dcba9a02f801779d84b1d4f_1.3",
                                "tpType": "CTP",
                                "layerRate": "OMS",
                                "equipmentUserLabel": "AM2625A-1-3",
                                "id": "5dcba9a02f801779d84b1d4f_16974080_AM2625A-1-3-LINEIN;/oms=1"
                            },
                            {
                                "userLabel": "BJYZ-PSS32-ROADM-38/AHPHG-9-2-LINE--CSBJFT-PSS32-OA-29/AM2625A-1-3-LINEIN",
                                "isMergedRoute": null,
                                "protectionType": "NORMAL",
                                "aEndNodes": [
                                    "5dcbb0dd2f801779d84b1e4b_151127040"
                                ],
                                "isSeparatedRoute": null,
                                "id": "5dcba9a02f801779d84b1d4f_16974080_5dcbb0dd2f801779d84b1e4b_151127040",
                                "type": "TL",
                                "direction": "UNI",
                                "zEndNodes": [
                                    "5dcba9a02f801779d84b1d4f_16974080"
                                ]
                            }
                        ]
                    },
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-2-4",
                    "id": "5dcba04a2f801779d84b1ab9_33816832_WR8-88AF-2-4-SIG;/frequency=9475.000"
                },
                {
                    "neId": "5dcbb0dd2f801779d84b1e4b",
                    "userLabel": "AHPHG-9-2-LINE;/oms=1",
                    "isMergedRoute": true,
                    "ptpId": "5dcbb0dd2f801779d84b1e4b_151127040",
                    "ptpUserLabel": "AHPHG-9-2-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJYZ-PSS32-ROADM-38",
                    "type": "TP",
                    "equipmentId": "5dcbb0dd2f801779d84b1e4b_9.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-9-2",
                    "id": "5dcbb0dd2f801779d84b1e4b_151127040_AHPHG-9-2-LINE;/oms=1"
                },
                {
                    "neId": "5dcbb0dd2f801779d84b1e4b",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb0dd2f801779d84b1e4b_151126272_AHPHG-9-2-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJYZ-PSS32-ROADM-38",
                    "type": "XC",
                    "equipmentId": "5dcbb0dd2f801779d84b1e4b_9.2",
                    "zEndNodes": [
                        "5dcbb0dd2f801779d84b1e4b_151127040_AHPHG-9-2-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-9-2",
                    "id": "5dcbb0dd2f801779d84b1e4b_151126272_AHPHG-9-2-SIG;/oms=1-5dcbb0dd2f801779d84b1e4b_151127040_AHPHG-9-2-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcbb0dd2f801779d84b1e4b",
                    "userLabel": "AHPHG-9-2-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0dd2f801779d84b1e4b_151126272",
                    "ptpUserLabel": "AHPHG-9-2-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJYZ-PSS32-ROADM-38",
                    "type": "TP",
                    "equipmentId": "5dcbb0dd2f801779d84b1e4b_9.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-9-2",
                    "id": "5dcbb0dd2f801779d84b1e4b_151126272_AHPHG-9-2-SIG;/oms=1"
                },
                {
                    "userLabel": "BJYZ-PSS32-ROADM-38/AHPHG-9-3-SIG--BJYZ-PSS32-ROADM-38/AHPHG-9-2-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb0dd2f801779d84b1e4b_151191808"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb0dd2f801779d84b1e4b_151126272_5dcbb0dd2f801779d84b1e4b_151191808",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcbb0dd2f801779d84b1e4b_151126272"
                    ]
                },
                {
                    "neId": "5dcbb0dd2f801779d84b1e4b",
                    "userLabel": "AHPHG-9-3-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0dd2f801779d84b1e4b_151191808",
                    "ptpUserLabel": "AHPHG-9-3-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJYZ-PSS32-ROADM-38",
                    "type": "TP",
                    "equipmentId": "5dcbb0dd2f801779d84b1e4b_9.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-9-3",
                    "id": "5dcbb0dd2f801779d84b1e4b_151191808_AHPHG-9-3-SIG;/oms=1"
                },
                {
                    "neId": "5dcbb0dd2f801779d84b1e4b",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb0dd2f801779d84b1e4b_151191808_AHPHG-9-3-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJYZ-PSS32-ROADM-38",
                    "type": "XC",
                    "equipmentId": "5dcbb0dd2f801779d84b1e4b_9.3",
                    "zEndNodes": [
                        "5dcbb0dd2f801779d84b1e4b_151192576_AHPHG-9-3-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-9-3",
                    "id": "5dcbb0dd2f801779d84b1e4b_151191808_AHPHG-9-3-SIG;/oms=1-5dcbb0dd2f801779d84b1e4b_151192576_AHPHG-9-3-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcbb0dd2f801779d84b1e4b",
                    "userLabel": "AHPHG-9-3-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0dd2f801779d84b1e4b_151192576",
                    "ptpUserLabel": "AHPHG-9-3-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJYZ-PSS32-ROADM-38",
                    "type": "TP",
                    "equipmentId": "5dcbb0dd2f801779d84b1e4b_9.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-9-3",
                    "id": "5dcbb0dd2f801779d84b1e4b_151192576_AHPHG-9-3-LINE;/oms=1"
                },
                {
                    "userLabel": "BJYZ-PSS32-ROADM-38/AHPHG-9-3-LINE--BJYZ-PSS32-ROADM-38/WR8-88AF-9-4-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb0dd2f801779d84b1e4b_151192576"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb0dd2f801779d84b1e4b_151192576_5dcbb0dd2f801779d84b1e4b_151257344",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcbb0dd2f801779d84b1e4b_151257344"
                    ]
                },
                {
                    "neId": "5dcbb0dd2f801779d84b1e4b",
                    "userLabel": "WR8-88AF-9-4-SIG;/frequency=9475.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0dd2f801779d84b1e4b_151257344",
                    "ptpUserLabel": "WR8-88AF-9-4-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJYZ-PSS32-ROADM-38",
                    "type": "TP",
                    "equipmentId": "5dcbb0dd2f801779d84b1e4b_9.4",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-9-4",
                    "id": "5dcbb0dd2f801779d84b1e4b_151257344_WR8-88AF-9-4-SIG;/frequency=9475.000"
                },
                {
                    "neId": "5dcbb0dd2f801779d84b1e4b",
                    "userLabel": "TAKEOVER-1577443786133",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb0dd2f801779d84b1e4b_151257344_WR8-88AF-9-4-SIG;/frequency=9475.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJYZ-PSS32-ROADM-38",
                    "type": "XC",
                    "equipmentId": "5dcbb0dd2f801779d84b1e4b_9.4",
                    "zEndNodes": [
                        "5dcbb0dd2f801779d84b1e4b_151257600_WR8-88AF-9-4-THRU;/frequency=9475.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-9-4",
                    "id": "5dcbb0dd2f801779d84b1e4b_151257344_WR8-88AF-9-4-SIG;/frequency=9475.000-5dcbb0dd2f801779d84b1e4b_151257600_WR8-88AF-9-4-THRU;/frequency=9475.000",
                    "direction": "BI"
                },
                {
                    "neId": "5dcbb0dd2f801779d84b1e4b",
                    "userLabel": "WR8-88AF-9-4-THRU;/frequency=9475.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0dd2f801779d84b1e4b_151257600",
                    "ptpUserLabel": "WR8-88AF-9-4-THRU",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJYZ-PSS32-ROADM-38",
                    "type": "TP",
                    "equipmentId": "5dcbb0dd2f801779d84b1e4b_9.4",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-9-4",
                    "id": "5dcbb0dd2f801779d84b1e4b_151257600_WR8-88AF-9-4-THRU;/frequency=9475.000"
                },
                {
                    "userLabel": "BJYZ-PSS32-ROADM-38/WR8-88AF-11-4-THRU--BJYZ-PSS32-ROADM-38/WR8-88AF-9-4-THRU",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb0dd2f801779d84b1e4b_184812032"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb0dd2f801779d84b1e4b_151257600_5dcbb0dd2f801779d84b1e4b_184812032",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcbb0dd2f801779d84b1e4b_151257600"
                    ]
                },
                {
                    "neId": "5dcbb0dd2f801779d84b1e4b",
                    "userLabel": "WR8-88AF-11-4-THRU;/frequency=9475.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0dd2f801779d84b1e4b_184812032",
                    "ptpUserLabel": "WR8-88AF-11-4-THRU",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJYZ-PSS32-ROADM-38",
                    "type": "TP",
                    "equipmentId": "5dcbb0dd2f801779d84b1e4b_11.4",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-11-4",
                    "id": "5dcbb0dd2f801779d84b1e4b_184812032_WR8-88AF-11-4-THRU;/frequency=9475.000"
                },
                {
                    "neId": "5dcbb0dd2f801779d84b1e4b",
                    "userLabel": "TAKEOVER-1577443786133",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb0dd2f801779d84b1e4b_184812032_WR8-88AF-11-4-THRU;/frequency=9475.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJYZ-PSS32-ROADM-38",
                    "type": "XC",
                    "equipmentId": "5dcbb0dd2f801779d84b1e4b_11.4",
                    "zEndNodes": [
                        "5dcbb0dd2f801779d84b1e4b_184811776_WR8-88AF-11-4-SIG;/frequency=9475.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-11-4",
                    "id": "5dcbb0dd2f801779d84b1e4b_184812032_WR8-88AF-11-4-THRU;/frequency=9475.000-5dcbb0dd2f801779d84b1e4b_184811776_WR8-88AF-11-4-SIG;/frequency=9475.000",
                    "direction": "BI"
                },
                {
                    "neId": "5dcbb0dd2f801779d84b1e4b",
                    "userLabel": "WR8-88AF-11-4-SIG;/frequency=9475.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0dd2f801779d84b1e4b_184811776",
                    "ptpUserLabel": "WR8-88AF-11-4-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJYZ-PSS32-ROADM-38",
                    "type": "TP",
                    "equipmentId": "5dcbb0dd2f801779d84b1e4b_11.4",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-11-4",
                    "id": "5dcbb0dd2f801779d84b1e4b_184811776_WR8-88AF-11-4-SIG;/frequency=9475.000"
                },
                {
                    "userLabel": "BJYZ-PSS32-ROADM-38/WR8-88AF-11-4-SIG--BJYZ-PSS32-ROADM-38/AHPHG-11-3-LINE",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb0dd2f801779d84b1e4b_184811776"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb0dd2f801779d84b1e4b_184747008_5dcbb0dd2f801779d84b1e4b_184811776",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcbb0dd2f801779d84b1e4b_184747008"
                    ]
                },
                {
                    "neId": "5dcbb0dd2f801779d84b1e4b",
                    "userLabel": "AHPHG-11-3-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0dd2f801779d84b1e4b_184747008",
                    "ptpUserLabel": "AHPHG-11-3-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJYZ-PSS32-ROADM-38",
                    "type": "TP",
                    "equipmentId": "5dcbb0dd2f801779d84b1e4b_11.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-11-3",
                    "id": "5dcbb0dd2f801779d84b1e4b_184747008_AHPHG-11-3-LINE;/oms=1"
                },
                {
                    "neId": "5dcbb0dd2f801779d84b1e4b",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb0dd2f801779d84b1e4b_184746240_AHPHG-11-3-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJYZ-PSS32-ROADM-38",
                    "type": "XC",
                    "equipmentId": "5dcbb0dd2f801779d84b1e4b_11.3",
                    "zEndNodes": [
                        "5dcbb0dd2f801779d84b1e4b_184747008_AHPHG-11-3-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-11-3",
                    "id": "5dcbb0dd2f801779d84b1e4b_184746240_AHPHG-11-3-SIG;/oms=1-5dcbb0dd2f801779d84b1e4b_184747008_AHPHG-11-3-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcbb0dd2f801779d84b1e4b",
                    "userLabel": "AHPHG-11-3-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0dd2f801779d84b1e4b_184746240",
                    "ptpUserLabel": "AHPHG-11-3-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJYZ-PSS32-ROADM-38",
                    "type": "TP",
                    "equipmentId": "5dcbb0dd2f801779d84b1e4b_11.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-11-3",
                    "id": "5dcbb0dd2f801779d84b1e4b_184746240_AHPHG-11-3-SIG;/oms=1"
                },
                {
                    "userLabel": "BJYZ-PSS32-ROADM-38/AHPHG-11-3-SIG--BJYZ-PSS32-ROADM-38/AHPHG-11-2-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb0dd2f801779d84b1e4b_184746240"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb0dd2f801779d84b1e4b_184680704_5dcbb0dd2f801779d84b1e4b_184746240",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcbb0dd2f801779d84b1e4b_184680704"
                    ]
                },
                {
                    "neId": "5dcbb0dd2f801779d84b1e4b",
                    "userLabel": "AHPHG-11-2-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0dd2f801779d84b1e4b_184680704",
                    "ptpUserLabel": "AHPHG-11-2-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJYZ-PSS32-ROADM-38",
                    "type": "TP",
                    "equipmentId": "5dcbb0dd2f801779d84b1e4b_11.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-11-2",
                    "id": "5dcbb0dd2f801779d84b1e4b_184680704_AHPHG-11-2-SIG;/oms=1"
                },
                {
                    "neId": "5dcbb0dd2f801779d84b1e4b",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb0dd2f801779d84b1e4b_184680704_AHPHG-11-2-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJYZ-PSS32-ROADM-38",
                    "type": "XC",
                    "equipmentId": "5dcbb0dd2f801779d84b1e4b_11.2",
                    "zEndNodes": [
                        "5dcbb0dd2f801779d84b1e4b_184681472_AHPHG-11-2-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-11-2",
                    "id": "5dcbb0dd2f801779d84b1e4b_184680704_AHPHG-11-2-SIG;/oms=1-5dcbb0dd2f801779d84b1e4b_184681472_AHPHG-11-2-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcbb0dd2f801779d84b1e4b",
                    "userLabel": "AHPHG-11-2-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0dd2f801779d84b1e4b_184681472",
                    "ptpUserLabel": "AHPHG-11-2-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJYZ-PSS32-ROADM-38",
                    "type": "TP",
                    "equipmentId": "5dcbb0dd2f801779d84b1e4b_11.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-11-2",
                    "id": "5dcbb0dd2f801779d84b1e4b_184681472_AHPHG-11-2-LINE;/oms=1"
                },
                {
                    "userLabel": "BJYZ-PSS32-ROADM-38/AHPHG-11-2-LINE--BJM1-PSS32-ROADM-25/AHPHG-19-2-LINE",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb0dd2f801779d84b1e4b_184681472"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_318899200_5dcbb0dd2f801779d84b1e4b_184681472",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_318899200"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-19-2-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_318899200",
                    "ptpUserLabel": "AHPHG-19-2-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_19.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-19-2",
                    "id": "5dcba0182f801779d84b1ab6_318899200_AHPHG-19-2-LINE;/oms=1"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_318898432_AHPHG-19-2-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "XC",
                    "equipmentId": "5dcba0182f801779d84b1ab6_19.2",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_318899200_AHPHG-19-2-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-19-2",
                    "id": "5dcba0182f801779d84b1ab6_318898432_AHPHG-19-2-SIG;/oms=1-5dcba0182f801779d84b1ab6_318899200_AHPHG-19-2-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-19-2-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_318898432",
                    "ptpUserLabel": "AHPHG-19-2-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_19.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-19-2",
                    "id": "5dcba0182f801779d84b1ab6_318898432_AHPHG-19-2-SIG;/oms=1"
                },
                {
                    "userLabel": "BJM1-PSS32-ROADM-25/AHPHG-19-3-SIG--BJM1-PSS32-ROADM-25/AHPHG-19-2-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_318963968"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_318898432_5dcba0182f801779d84b1ab6_318963968",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_318898432"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-19-3-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_318963968",
                    "ptpUserLabel": "AHPHG-19-3-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_19.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-19-3",
                    "id": "5dcba0182f801779d84b1ab6_318963968_AHPHG-19-3-SIG;/oms=1"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_318963968_AHPHG-19-3-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "XC",
                    "equipmentId": "5dcba0182f801779d84b1ab6_19.3",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_318964736_AHPHG-19-3-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-19-3",
                    "id": "5dcba0182f801779d84b1ab6_318963968_AHPHG-19-3-SIG;/oms=1-5dcba0182f801779d84b1ab6_318964736_AHPHG-19-3-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-19-3-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_318964736",
                    "ptpUserLabel": "AHPHG-19-3-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_19.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-19-3",
                    "id": "5dcba0182f801779d84b1ab6_318964736_AHPHG-19-3-LINE;/oms=1"
                },
                {
                    "userLabel": "BJM1-PSS32-ROADM-25/AHPHG-19-3-LINE--BJM1-PSS32-ROADM-25/WR8-88AF-19-4-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_318964736"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_318964736_5dcba0182f801779d84b1ab6_319029504",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_319029504"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "WR8-88AF-19-4-SIG;/frequency=9475.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_319029504",
                    "ptpUserLabel": "WR8-88AF-19-4-SIG",
                    "isSeparatedRoute": true,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_19.4",
                    "separatedRouteElements": {
                        "Tx": [
                            {
                                "neId": "5dcba0182f801779d84b1ab6",
                                "userLabel": "TAKEOVER-1577443786133",
                                "isMergedRoute": null,
                                "protectionType": "SIMPLE",
                                "aEndNodes": [
                                    "5dcba0182f801779d84b1ab6_319029504_WR8-88AF-19-4-SIG;/frequency=9475.000"
                                ],
                                "isSeparatedRoute": null,
                                "neUserLabel": "BJM1-PSS32-ROADM-25",
                                "type": "XC",
                                "equipmentId": "5dcba0182f801779d84b1ab6_19.4",
                                "zEndNodes": [
                                    "5dcba0182f801779d84b1ab6_319030016_WR8-88AF-19-4-DROPOUT;/frequency=9475.000"
                                ],
                                "equipmentUserLabel": "WR8-88AF-19-4",
                                "id": "5dcba0182f801779d84b1ab6_319030016_WR8-88AF-19-4-DROPOUT;/frequency=9475.000-5dcba0182f801779d84b1ab6_319029504_WR8-88AF-19-4-SIG;/frequency=9475.000",
                                "direction": "UNI"
                            },
                            {
                                "neId": "5dcba0182f801779d84b1ab6",
                                "userLabel": "WR8-88AF-19-4-DROPOUT;/frequency=9475.000",
                                "isMergedRoute": null,
                                "ptpId": "5dcba0182f801779d84b1ab6_319030016",
                                "ptpUserLabel": "WR8-88AF-19-4-DROPOUT",
                                "isSeparatedRoute": null,
                                "neUserLabel": "BJM1-PSS32-ROADM-25",
                                "type": "TP",
                                "equipmentId": "5dcba0182f801779d84b1ab6_19.4",
                                "tpType": "CTP",
                                "layerRate": "OCH",
                                "equipmentUserLabel": "WR8-88AF-19-4",
                                "id": "5dcba0182f801779d84b1ab6_319030016_WR8-88AF-19-4-DROPOUT;/frequency=9475.000"
                            },
                            {
                                "userLabel": "BJM1-PSS32-ROADM-25/WR8-88AF-19-4-DROPOUT--BJM1-PSS32-ROADM-25/ITLU-50-1-SIGIN",
                                "isMergedRoute": null,
                                "protectionType": "NORMAL",
                                "aEndNodes": [
                                    "5dcba0182f801779d84b1ab6_319030016"
                                ],
                                "isSeparatedRoute": null,
                                "id": "5dcba0182f801779d84b1ab6_319030016_5dcba0182f801779d84b1ab6_838926592",
                                "type": "TL",
                                "direction": "UNI",
                                "zEndNodes": [
                                    "5dcba0182f801779d84b1ab6_838926592"
                                ]
                            },
                            {
                                "neId": "5dcba0182f801779d84b1ab6",
                                "userLabel": "ITLU-50-1-SIGIN;/frequency=9475.000",
                                "isMergedRoute": null,
                                "ptpId": "5dcba0182f801779d84b1ab6_838926592",
                                "ptpUserLabel": "ITLU-50-1-SIGIN",
                                "isSeparatedRoute": null,
                                "neUserLabel": "BJM1-PSS32-ROADM-25",
                                "type": "TP",
                                "equipmentId": "5dcba0182f801779d84b1ab6_50.1",
                                "tpType": "CTP",
                                "layerRate": "OCH",
                                "equipmentUserLabel": "ITLU-50-1",
                                "id": "5dcba0182f801779d84b1ab6_838926592_ITLU-50-1-SIGIN;/frequency=9475.000"
                            },
                            {
                                "neId": "5dcba0182f801779d84b1ab6",
                                "userLabel": null,
                                "isMergedRoute": null,
                                "protectionType": "SIMPLE",
                                "aEndNodes": [
                                    "5dcba0182f801779d84b1ab6_838927104_ITLU-50-1-OOUT;/frequency=9475.000"
                                ],
                                "isSeparatedRoute": null,
                                "neUserLabel": "BJM1-PSS32-ROADM-25",
                                "type": "XC",
                                "equipmentId": "5dcba0182f801779d84b1ab6_50.1",
                                "zEndNodes": [
                                    "5dcba0182f801779d84b1ab6_838926592_ITLU-50-1-SIGIN;/frequency=9475.000"
                                ],
                                "equipmentUserLabel": "ITLU-50-1",
                                "id": "5dcba0182f801779d84b1ab6_838927104_ITLU-50-1-OOUT;/frequency=9475.000-5dcba0182f801779d84b1ab6_838926592_ITLU-50-1-SIGIN;/frequency=9475.000",
                                "direction": "UNI"
                            },
                            {
                                "neId": "5dcba0182f801779d84b1ab6",
                                "userLabel": "ITLU-50-1-OOUT;/frequency=9475.000",
                                "isMergedRoute": null,
                                "ptpId": "5dcba0182f801779d84b1ab6_838927104",
                                "ptpUserLabel": "ITLU-50-1-OOUT",
                                "isSeparatedRoute": null,
                                "neUserLabel": "BJM1-PSS32-ROADM-25",
                                "type": "TP",
                                "equipmentId": "5dcba0182f801779d84b1ab6_50.1",
                                "tpType": "CTP",
                                "layerRate": "OCH",
                                "equipmentUserLabel": "ITLU-50-1",
                                "id": "5dcba0182f801779d84b1ab6_838927104_ITLU-50-1-OOUT;/frequency=9475.000"
                            },
                            {
                                "userLabel": "BJM1-PSS32-ROADM-25/ITLU-50-1-OOUT--BJM1-PSS32-ROADM-25/SFD44B-51-1-OMD",
                                "isMergedRoute": null,
                                "protectionType": "NORMAL",
                                "aEndNodes": [
                                    "5dcba0182f801779d84b1ab6_838927104"
                                ],
                                "isSeparatedRoute": null,
                                "id": "5dcba0182f801779d84b1ab6_838927104_5dcba0182f801779d84b1ab6_855715072",
                                "type": "TL",
                                "direction": "UNI",
                                "zEndNodes": [
                                    "5dcba0182f801779d84b1ab6_855715072"
                                ]
                            }
                        ],
                        "Rx": [
                            {
                                "neId": "5dcba0182f801779d84b1ab6",
                                "userLabel": "TAKEOVER-1577443786133",
                                "isMergedRoute": null,
                                "protectionType": "SIMPLE",
                                "aEndNodes": [
                                    "5dcba0182f801779d84b1ab6_319030528_WR8-88AF-19-4-ADDIN2;/frequency=9475.000"
                                ],
                                "isSeparatedRoute": null,
                                "neUserLabel": "BJM1-PSS32-ROADM-25",
                                "type": "XC",
                                "equipmentId": "5dcba0182f801779d84b1ab6_19.4",
                                "zEndNodes": [
                                    "5dcba0182f801779d84b1ab6_319029504_WR8-88AF-19-4-SIG;/frequency=9475.000"
                                ],
                                "equipmentUserLabel": "WR8-88AF-19-4",
                                "id": "5dcba0182f801779d84b1ab6_319029504_WR8-88AF-19-4-SIG;/frequency=9475.000-5dcba0182f801779d84b1ab6_319030528_WR8-88AF-19-4-ADDIN2;/frequency=9475.000",
                                "direction": "UNI"
                            },
                            {
                                "neId": "5dcba0182f801779d84b1ab6",
                                "userLabel": "WR8-88AF-19-4-ADDIN2;/frequency=9475.000",
                                "isMergedRoute": null,
                                "ptpId": "5dcba0182f801779d84b1ab6_319030528",
                                "ptpUserLabel": "WR8-88AF-19-4-ADDIN2",
                                "isSeparatedRoute": null,
                                "neUserLabel": "BJM1-PSS32-ROADM-25",
                                "type": "TP",
                                "equipmentId": "5dcba0182f801779d84b1ab6_19.4",
                                "tpType": "CTP",
                                "layerRate": "OCH",
                                "equipmentUserLabel": "WR8-88AF-19-4",
                                "id": "5dcba0182f801779d84b1ab6_319030528_WR8-88AF-19-4-ADDIN2;/frequency=9475.000"
                            },
                            {
                                "userLabel": "BJM1-PSS32-ROADM-25/SFD44B-51-1-OMD--BJM1-PSS32-ROADM-25/WR8-88AF-19-4-ADDIN2",
                                "isMergedRoute": null,
                                "protectionType": "NORMAL",
                                "aEndNodes": [
                                    "5dcba0182f801779d84b1ab6_855715072"
                                ],
                                "isSeparatedRoute": null,
                                "id": "5dcba0182f801779d84b1ab6_319030528_5dcba0182f801779d84b1ab6_855715072",
                                "type": "TL",
                                "direction": "UNI",
                                "zEndNodes": [
                                    "5dcba0182f801779d84b1ab6_319030528"
                                ]
                            }
                        ]
                    },
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-19-4",
                    "id": "5dcba0182f801779d84b1ab6_319029504_WR8-88AF-19-4-SIG;/frequency=9475.000"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "SFD44B-51-1-OMD;/frequency=9475.000",
                    "isMergedRoute": true,
                    "ptpId": "5dcba0182f801779d84b1ab6_855715072",
                    "ptpUserLabel": "SFD44B-51-1-OMD",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_51.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44B-51-1",
                    "id": "5dcba0182f801779d84b1ab6_855715072_SFD44B-51-1-OMD;/frequency=9475.000"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_855707136_SFD44B-51-1-9475;/frequency=9475.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "XC",
                    "equipmentId": "5dcba0182f801779d84b1ab6_51.1",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_855715072_SFD44B-51-1-OMD;/frequency=9475.000"
                    ],
                    "equipmentUserLabel": "SFD44B-51-1",
                    "id": "5dcba0182f801779d84b1ab6_855707136_SFD44B-51-1-9475;/frequency=9475.000-5dcba0182f801779d84b1ab6_855715072_SFD44B-51-1-OMD;/frequency=9475.000",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "SFD44B-51-1-9475;/frequency=9475.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_855707136",
                    "ptpUserLabel": "SFD44B-51-1-9475",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_51.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44B-51-1",
                    "id": "5dcba0182f801779d84b1ab6_855707136_SFD44B-51-1-9475;/frequency=9475.000"
                },
                {
                    "userLabel": "BJM1-PSS32-ROADM-25/SFD44B-51-1-9475--BJM1-PSS32-ROADM-25/OPSA-18-26-B",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_855707136"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_303694592_5dcba0182f801779d84b1ab6_855707136",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_303694592"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "OPSA-18-26-B;/frequency=/tunable-number=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_303694592",
                    "ptpUserLabel": "OPSA-18-26-B",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_18.26",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "OPSA-18-26",
                    "id": "5dcba0182f801779d84b1ab6_303694592_OPSA-18-26-B;/frequency=/tunable-number=1"
                }
            ],
            "Main": [
                {
                    "neId": "5dcba04a2f801779d84b1ab9",
                    "userLabel": "OPSA-5-3-A;/frequency=/tunable-number=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba04a2f801779d84b1ab9_84083200",
                    "ptpUserLabel": "OPSA-5-3-A",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BDBL-PSS32-ROADM-26",
                    "type": "TP",
                    "equipmentId": "5dcba04a2f801779d84b1ab9_5.3",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "OPSA-5-3",
                    "id": "5dcba04a2f801779d84b1ab9_84083200_OPSA-5-3-A;/frequency=/tunable-number=1"
                },
                {
                    "userLabel": "BDBL-PSS32-ROADM-26/OPSA-5-3-A--BDBL-PSS32-ROADM-26/SFD44B-26-1-9475",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba04a2f801779d84b1ab9_84083200"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba04a2f801779d84b1ab9_436276736_5dcba04a2f801779d84b1ab9_84083200",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba04a2f801779d84b1ab9_436276736"
                    ]
                },
                {
                    "neId": "5dcba04a2f801779d84b1ab9",
                    "userLabel": "SFD44B-26-1-9475;/frequency=9475.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcba04a2f801779d84b1ab9_436276736",
                    "ptpUserLabel": "SFD44B-26-1-9475",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BDBL-PSS32-ROADM-26",
                    "type": "TP",
                    "equipmentId": "5dcba04a2f801779d84b1ab9_26.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44B-26-1",
                    "id": "5dcba04a2f801779d84b1ab9_436276736_SFD44B-26-1-9475;/frequency=9475.000"
                },
                {
                    "neId": "5dcba04a2f801779d84b1ab9",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba04a2f801779d84b1ab9_436276736_SFD44B-26-1-9475;/frequency=9475.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BDBL-PSS32-ROADM-26",
                    "type": "XC",
                    "equipmentId": "5dcba04a2f801779d84b1ab9_26.1",
                    "zEndNodes": [
                        "5dcba04a2f801779d84b1ab9_436284672_SFD44B-26-1-OMD;/frequency=9475.000"
                    ],
                    "equipmentUserLabel": "SFD44B-26-1",
                    "id": "5dcba04a2f801779d84b1ab9_436276736_SFD44B-26-1-9475;/frequency=9475.000-5dcba04a2f801779d84b1ab9_436284672_SFD44B-26-1-OMD;/frequency=9475.000",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba04a2f801779d84b1ab9",
                    "userLabel": "SFD44B-26-1-OMD;/frequency=9475.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcba04a2f801779d84b1ab9_436284672",
                    "ptpUserLabel": "SFD44B-26-1-OMD",
                    "isSeparatedRoute": true,
                    "neUserLabel": "BDBL-PSS32-ROADM-26",
                    "type": "TP",
                    "equipmentId": "5dcba04a2f801779d84b1ab9_26.1",
                    "separatedRouteElements": {
                        "Tx": [
                            {
                                "userLabel": "BDBL-PSS32-ROADM-26/SFD44B-26-1-OMD--BDBL-PSS32-ROADM-26/WR8-88AF-1-4-ADDIN2",
                                "isMergedRoute": null,
                                "protectionType": "NORMAL",
                                "aEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_436284672"
                                ],
                                "isSeparatedRoute": null,
                                "id": "5dcba04a2f801779d84b1ab9_17040640_5dcba04a2f801779d84b1ab9_436284672",
                                "type": "TL",
                                "direction": "UNI",
                                "zEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_17040640"
                                ]
                            },
                            {
                                "neId": "5dcba04a2f801779d84b1ab9",
                                "userLabel": "WR8-88AF-1-4-ADDIN2;/frequency=9475.000",
                                "isMergedRoute": null,
                                "ptpId": "5dcba04a2f801779d84b1ab9_17040640",
                                "ptpUserLabel": "WR8-88AF-1-4-ADDIN2",
                                "isSeparatedRoute": null,
                                "neUserLabel": "BDBL-PSS32-ROADM-26",
                                "type": "TP",
                                "equipmentId": "5dcba04a2f801779d84b1ab9_1.4",
                                "tpType": "CTP",
                                "layerRate": "OCH",
                                "equipmentUserLabel": "WR8-88AF-1-4",
                                "id": "5dcba04a2f801779d84b1ab9_17040640_WR8-88AF-1-4-ADDIN2;/frequency=9475.000"
                            },
                            {
                                "neId": "5dcba04a2f801779d84b1ab9",
                                "userLabel": "TAKEOVER-1577443786133",
                                "isMergedRoute": null,
                                "protectionType": "SIMPLE",
                                "aEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_17040640_WR8-88AF-1-4-ADDIN2;/frequency=9475.000"
                                ],
                                "isSeparatedRoute": null,
                                "neUserLabel": "BDBL-PSS32-ROADM-26",
                                "type": "XC",
                                "equipmentId": "5dcba04a2f801779d84b1ab9_1.4",
                                "zEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_17039616_WR8-88AF-1-4-SIG;/frequency=9475.000"
                                ],
                                "equipmentUserLabel": "WR8-88AF-1-4",
                                "id": "5dcba04a2f801779d84b1ab9_17040640_WR8-88AF-1-4-ADDIN2;/frequency=9475.000-5dcba04a2f801779d84b1ab9_17039616_WR8-88AF-1-4-SIG;/frequency=9475.000",
                                "direction": "BI"
                            }
                        ],
                        "Rx": [
                            {
                                "userLabel": "BDBL-PSS32-ROADM-26/ITLU-25-1-OOUT--BDBL-PSS32-ROADM-26/SFD44B-26-1-OMD",
                                "isMergedRoute": null,
                                "protectionType": "NORMAL",
                                "aEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_419496704"
                                ],
                                "isSeparatedRoute": null,
                                "id": "5dcba04a2f801779d84b1ab9_419496704_5dcba04a2f801779d84b1ab9_436284672",
                                "type": "TL",
                                "direction": "UNI",
                                "zEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_436284672"
                                ]
                            },
                            {
                                "neId": "5dcba04a2f801779d84b1ab9",
                                "userLabel": "ITLU-25-1-OOUT;/frequency=9475.000",
                                "isMergedRoute": null,
                                "ptpId": "5dcba04a2f801779d84b1ab9_419496704",
                                "ptpUserLabel": "ITLU-25-1-OOUT",
                                "isSeparatedRoute": null,
                                "neUserLabel": "BDBL-PSS32-ROADM-26",
                                "type": "TP",
                                "equipmentId": "5dcba04a2f801779d84b1ab9_25.1",
                                "tpType": "CTP",
                                "layerRate": "OCH",
                                "equipmentUserLabel": "ITLU-25-1",
                                "id": "5dcba04a2f801779d84b1ab9_419496704_ITLU-25-1-OOUT;/frequency=9475.000"
                            },
                            {
                                "neId": "5dcba04a2f801779d84b1ab9",
                                "userLabel": null,
                                "isMergedRoute": null,
                                "protectionType": "SIMPLE",
                                "aEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_419496704_ITLU-25-1-OOUT;/frequency=9475.000"
                                ],
                                "isSeparatedRoute": null,
                                "neUserLabel": "BDBL-PSS32-ROADM-26",
                                "type": "XC",
                                "equipmentId": "5dcba04a2f801779d84b1ab9_25.1",
                                "zEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_419496192_ITLU-25-1-SIGIN;/frequency=9475.000"
                                ],
                                "equipmentUserLabel": "ITLU-25-1",
                                "id": "5dcba04a2f801779d84b1ab9_419496704_ITLU-25-1-OOUT;/frequency=9475.000-5dcba04a2f801779d84b1ab9_419496192_ITLU-25-1-SIGIN;/frequency=9475.000",
                                "direction": "UNI"
                            },
                            {
                                "neId": "5dcba04a2f801779d84b1ab9",
                                "userLabel": "ITLU-25-1-SIGIN;/frequency=9475.000",
                                "isMergedRoute": null,
                                "ptpId": "5dcba04a2f801779d84b1ab9_419496192",
                                "ptpUserLabel": "ITLU-25-1-SIGIN",
                                "isSeparatedRoute": null,
                                "neUserLabel": "BDBL-PSS32-ROADM-26",
                                "type": "TP",
                                "equipmentId": "5dcba04a2f801779d84b1ab9_25.1",
                                "tpType": "CTP",
                                "layerRate": "OCH",
                                "equipmentUserLabel": "ITLU-25-1",
                                "id": "5dcba04a2f801779d84b1ab9_419496192_ITLU-25-1-SIGIN;/frequency=9475.000"
                            },
                            {
                                "userLabel": "BDBL-PSS32-ROADM-26/WR8-88AF-1-4-DROPOUT--BDBL-PSS32-ROADM-26/ITLU-25-1-SIGIN",
                                "isMergedRoute": null,
                                "protectionType": "NORMAL",
                                "aEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_17040128"
                                ],
                                "isSeparatedRoute": null,
                                "id": "5dcba04a2f801779d84b1ab9_17040128_5dcba04a2f801779d84b1ab9_419496192",
                                "type": "TL",
                                "direction": "UNI",
                                "zEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_419496192"
                                ]
                            },
                            {
                                "neId": "5dcba04a2f801779d84b1ab9",
                                "userLabel": "WR8-88AF-1-4-DROPOUT;/frequency=9475.000",
                                "isMergedRoute": null,
                                "ptpId": "5dcba04a2f801779d84b1ab9_17040128",
                                "ptpUserLabel": "WR8-88AF-1-4-DROPOUT",
                                "isSeparatedRoute": null,
                                "neUserLabel": "BDBL-PSS32-ROADM-26",
                                "type": "TP",
                                "equipmentId": "5dcba04a2f801779d84b1ab9_1.4",
                                "tpType": "CTP",
                                "layerRate": "OCH",
                                "equipmentUserLabel": "WR8-88AF-1-4",
                                "id": "5dcba04a2f801779d84b1ab9_17040128_WR8-88AF-1-4-DROPOUT;/frequency=9475.000"
                            },
                            {
                                "neId": "5dcba04a2f801779d84b1ab9",
                                "userLabel": "TAKEOVER-1577443786133",
                                "isMergedRoute": null,
                                "protectionType": "SIMPLE",
                                "aEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_17040128_WR8-88AF-1-4-DROPOUT;/frequency=9475.000"
                                ],
                                "isSeparatedRoute": null,
                                "neUserLabel": "BDBL-PSS32-ROADM-26",
                                "type": "XC",
                                "equipmentId": "5dcba04a2f801779d84b1ab9_1.4",
                                "zEndNodes": [
                                    "5dcba04a2f801779d84b1ab9_17039616_WR8-88AF-1-4-SIG;/frequency=9475.000"
                                ],
                                "equipmentUserLabel": "WR8-88AF-1-4",
                                "id": "5dcba04a2f801779d84b1ab9_17040128_WR8-88AF-1-4-DROPOUT;/frequency=9475.000-5dcba04a2f801779d84b1ab9_17039616_WR8-88AF-1-4-SIG;/frequency=9475.000",
                                "direction": "BI"
                            }
                        ]
                    },
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44B-26-1",
                    "id": "5dcba04a2f801779d84b1ab9_436284672_SFD44B-26-1-OMD;/frequency=9475.000"
                },
                {
                    "neId": "5dcba04a2f801779d84b1ab9",
                    "userLabel": "WR8-88AF-1-4-SIG;/frequency=9475.000",
                    "isMergedRoute": true,
                    "ptpId": "5dcba04a2f801779d84b1ab9_17039616",
                    "ptpUserLabel": "WR8-88AF-1-4-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BDBL-PSS32-ROADM-26",
                    "type": "TP",
                    "equipmentId": "5dcba04a2f801779d84b1ab9_1.4",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-1-4",
                    "id": "5dcba04a2f801779d84b1ab9_17039616_WR8-88AF-1-4-SIG;/frequency=9475.000"
                },
                {
                    "userLabel": "BDBL-PSS32-ROADM-26/WR8-88AF-1-4-SIG--BDBL-PSS32-ROADM-26/AHPHG-1-3-LINE",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba04a2f801779d84b1ab9_17039616"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba04a2f801779d84b1ab9_16974848_5dcba04a2f801779d84b1ab9_17039616",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba04a2f801779d84b1ab9_16974848"
                    ]
                },
                {
                    "neId": "5dcba04a2f801779d84b1ab9",
                    "userLabel": "AHPHG-1-3-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba04a2f801779d84b1ab9_16974848",
                    "ptpUserLabel": "AHPHG-1-3-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BDBL-PSS32-ROADM-26",
                    "type": "TP",
                    "equipmentId": "5dcba04a2f801779d84b1ab9_1.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5dcba04a2f801779d84b1ab9_16974848_AHPHG-1-3-LINE;/oms=1"
                },
                {
                    "neId": "5dcba04a2f801779d84b1ab9",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba04a2f801779d84b1ab9_16974080_AHPHG-1-3-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BDBL-PSS32-ROADM-26",
                    "type": "XC",
                    "equipmentId": "5dcba04a2f801779d84b1ab9_1.3",
                    "zEndNodes": [
                        "5dcba04a2f801779d84b1ab9_16974848_AHPHG-1-3-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5dcba04a2f801779d84b1ab9_16974080_AHPHG-1-3-SIG;/oms=1-5dcba04a2f801779d84b1ab9_16974848_AHPHG-1-3-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba04a2f801779d84b1ab9",
                    "userLabel": "AHPHG-1-3-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba04a2f801779d84b1ab9_16974080",
                    "ptpUserLabel": "AHPHG-1-3-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BDBL-PSS32-ROADM-26",
                    "type": "TP",
                    "equipmentId": "5dcba04a2f801779d84b1ab9_1.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5dcba04a2f801779d84b1ab9_16974080_AHPHG-1-3-SIG;/oms=1"
                },
                {
                    "userLabel": "BDBL-PSS32-ROADM-26/AHPHG-1-3-SIG--BDBL-PSS32-ROADM-26/AHPHG-1-2-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba04a2f801779d84b1ab9_16974080"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba04a2f801779d84b1ab9_16908544_5dcba04a2f801779d84b1ab9_16974080",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba04a2f801779d84b1ab9_16908544"
                    ]
                },
                {
                    "neId": "5dcba04a2f801779d84b1ab9",
                    "userLabel": "AHPHG-1-2-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba04a2f801779d84b1ab9_16908544",
                    "ptpUserLabel": "AHPHG-1-2-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BDBL-PSS32-ROADM-26",
                    "type": "TP",
                    "equipmentId": "5dcba04a2f801779d84b1ab9_1.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5dcba04a2f801779d84b1ab9_16908544_AHPHG-1-2-SIG;/oms=1"
                },
                {
                    "neId": "5dcba04a2f801779d84b1ab9",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba04a2f801779d84b1ab9_16908544_AHPHG-1-2-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BDBL-PSS32-ROADM-26",
                    "type": "XC",
                    "equipmentId": "5dcba04a2f801779d84b1ab9_1.2",
                    "zEndNodes": [
                        "5dcba04a2f801779d84b1ab9_16909312_AHPHG-1-2-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5dcba04a2f801779d84b1ab9_16908544_AHPHG-1-2-SIG;/oms=1-5dcba04a2f801779d84b1ab9_16909312_AHPHG-1-2-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba04a2f801779d84b1ab9",
                    "userLabel": "AHPHG-1-2-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba04a2f801779d84b1ab9_16909312",
                    "ptpUserLabel": "AHPHG-1-2-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BDBL-PSS32-ROADM-26",
                    "type": "TP",
                    "equipmentId": "5dcba04a2f801779d84b1ab9_1.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5dcba04a2f801779d84b1ab9_16909312_AHPHG-1-2-LINE;/oms=1"
                },
                {
                    "userLabel": "BDBL-PSS32-ROADM-26/AHPHG-1-2-LINE--CSHBZZ-PSS32-OA-28/AHPHG-1-2-LINE",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba04a2f801779d84b1ab9_16909312"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba04a2f801779d84b1ab9_16909312_5dcba9812f801779d84b1d40_16909312",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba9812f801779d84b1d40_16909312"
                    ]
                },
                {
                    "neId": "5dcba9812f801779d84b1d40",
                    "userLabel": "AHPHG-1-2-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba9812f801779d84b1d40_16909312",
                    "ptpUserLabel": "AHPHG-1-2-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "CSHBZZ-PSS32-OA-28",
                    "type": "TP",
                    "equipmentId": "5dcba9812f801779d84b1d40_1.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5dcba9812f801779d84b1d40_16909312_AHPHG-1-2-LINE;/oms=1"
                },
                {
                    "neId": "5dcba9812f801779d84b1d40",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba9812f801779d84b1d40_16908544_AHPHG-1-2-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "CSHBZZ-PSS32-OA-28",
                    "type": "XC",
                    "equipmentId": "5dcba9812f801779d84b1d40_1.2",
                    "zEndNodes": [
                        "5dcba9812f801779d84b1d40_16909312_AHPHG-1-2-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5dcba9812f801779d84b1d40_16908544_AHPHG-1-2-SIG;/oms=1-5dcba9812f801779d84b1d40_16909312_AHPHG-1-2-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba9812f801779d84b1d40",
                    "userLabel": "AHPHG-1-2-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba9812f801779d84b1d40_16908544",
                    "ptpUserLabel": "AHPHG-1-2-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "CSHBZZ-PSS32-OA-28",
                    "type": "TP",
                    "equipmentId": "5dcba9812f801779d84b1d40_1.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5dcba9812f801779d84b1d40_16908544_AHPHG-1-2-SIG;/oms=1"
                },
                {
                    "userLabel": "CSHBZZ-PSS32-OA-28/AHPHG-1-2-SIG--CSHBZZ-PSS32-OA-28/AHPHG-1-3-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba9812f801779d84b1d40_16908544"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba9812f801779d84b1d40_16908544_5dcba9812f801779d84b1d40_16974080",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba9812f801779d84b1d40_16974080"
                    ]
                },
                {
                    "neId": "5dcba9812f801779d84b1d40",
                    "userLabel": "AHPHG-1-3-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba9812f801779d84b1d40_16974080",
                    "ptpUserLabel": "AHPHG-1-3-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "CSHBZZ-PSS32-OA-28",
                    "type": "TP",
                    "equipmentId": "5dcba9812f801779d84b1d40_1.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5dcba9812f801779d84b1d40_16974080_AHPHG-1-3-SIG;/oms=1"
                },
                {
                    "neId": "5dcba9812f801779d84b1d40",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba9812f801779d84b1d40_16974080_AHPHG-1-3-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "CSHBZZ-PSS32-OA-28",
                    "type": "XC",
                    "equipmentId": "5dcba9812f801779d84b1d40_1.3",
                    "zEndNodes": [
                        "5dcba9812f801779d84b1d40_16974848_AHPHG-1-3-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5dcba9812f801779d84b1d40_16974080_AHPHG-1-3-SIG;/oms=1-5dcba9812f801779d84b1d40_16974848_AHPHG-1-3-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba9812f801779d84b1d40",
                    "userLabel": "AHPHG-1-3-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba9812f801779d84b1d40_16974848",
                    "ptpUserLabel": "AHPHG-1-3-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "CSHBZZ-PSS32-OA-28",
                    "type": "TP",
                    "equipmentId": "5dcba9812f801779d84b1d40_1.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5dcba9812f801779d84b1d40_16974848_AHPHG-1-3-LINE;/oms=1"
                },
                {
                    "userLabel": "CSBJSHQ-PSS32-OA-30/AHPHG-1-2-LINE--CSHBZZ-PSS32-OA-28/AHPHG-1-3-LINE",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba9c42f801779d84b1d5e_16909312"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba9812f801779d84b1d40_16974848_5dcba9c42f801779d84b1d5e_16909312",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba9812f801779d84b1d40_16974848"
                    ]
                },
                {
                    "neId": "5dcba9c42f801779d84b1d5e",
                    "userLabel": "AHPHG-1-2-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba9c42f801779d84b1d5e_16909312",
                    "ptpUserLabel": "AHPHG-1-2-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "CSBJSHQ-PSS32-OA-30",
                    "type": "TP",
                    "equipmentId": "5dcba9c42f801779d84b1d5e_1.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5dcba9c42f801779d84b1d5e_16909312_AHPHG-1-2-LINE;/oms=1"
                },
                {
                    "neId": "5dcba9c42f801779d84b1d5e",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba9c42f801779d84b1d5e_16908544_AHPHG-1-2-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "CSBJSHQ-PSS32-OA-30",
                    "type": "XC",
                    "equipmentId": "5dcba9c42f801779d84b1d5e_1.2",
                    "zEndNodes": [
                        "5dcba9c42f801779d84b1d5e_16909312_AHPHG-1-2-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5dcba9c42f801779d84b1d5e_16908544_AHPHG-1-2-SIG;/oms=1-5dcba9c42f801779d84b1d5e_16909312_AHPHG-1-2-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba9c42f801779d84b1d5e",
                    "userLabel": "AHPHG-1-2-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba9c42f801779d84b1d5e_16908544",
                    "ptpUserLabel": "AHPHG-1-2-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "CSBJSHQ-PSS32-OA-30",
                    "type": "TP",
                    "equipmentId": "5dcba9c42f801779d84b1d5e_1.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5dcba9c42f801779d84b1d5e_16908544_AHPHG-1-2-SIG;/oms=1"
                },
                {
                    "userLabel": "CSBJSHQ-PSS32-OA-30/AHPHG-1-3-SIG--CSBJSHQ-PSS32-OA-30/AHPHG-1-2-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba9c42f801779d84b1d5e_16974080"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba9c42f801779d84b1d5e_16908544_5dcba9c42f801779d84b1d5e_16974080",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba9c42f801779d84b1d5e_16908544"
                    ]
                },
                {
                    "neId": "5dcba9c42f801779d84b1d5e",
                    "userLabel": "AHPHG-1-3-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba9c42f801779d84b1d5e_16974080",
                    "ptpUserLabel": "AHPHG-1-3-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "CSBJSHQ-PSS32-OA-30",
                    "type": "TP",
                    "equipmentId": "5dcba9c42f801779d84b1d5e_1.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5dcba9c42f801779d84b1d5e_16974080_AHPHG-1-3-SIG;/oms=1"
                },
                {
                    "neId": "5dcba9c42f801779d84b1d5e",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba9c42f801779d84b1d5e_16974080_AHPHG-1-3-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "CSBJSHQ-PSS32-OA-30",
                    "type": "XC",
                    "equipmentId": "5dcba9c42f801779d84b1d5e_1.3",
                    "zEndNodes": [
                        "5dcba9c42f801779d84b1d5e_16974848_AHPHG-1-3-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5dcba9c42f801779d84b1d5e_16974080_AHPHG-1-3-SIG;/oms=1-5dcba9c42f801779d84b1d5e_16974848_AHPHG-1-3-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba9c42f801779d84b1d5e",
                    "userLabel": "AHPHG-1-3-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba9c42f801779d84b1d5e_16974848",
                    "ptpUserLabel": "AHPHG-1-3-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "CSBJSHQ-PSS32-OA-30",
                    "type": "TP",
                    "equipmentId": "5dcba9c42f801779d84b1d5e_1.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5dcba9c42f801779d84b1d5e_16974848_AHPHG-1-3-LINE;/oms=1"
                },
                {
                    "userLabel": "CSBJSHQ-PSS32-OA-30/AHPHG-1-3-LINE--BJM1-PSS32-ROADM-25/AHPHG-18-2-LINE",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba9c42f801779d84b1d5e_16974848"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_302121984_5dcba9c42f801779d84b1d5e_16974848",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_302121984"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-18-2-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_302121984",
                    "ptpUserLabel": "AHPHG-18-2-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_18.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-18-2",
                    "id": "5dcba0182f801779d84b1ab6_302121984_AHPHG-18-2-LINE;/oms=1"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_302121216_AHPHG-18-2-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "XC",
                    "equipmentId": "5dcba0182f801779d84b1ab6_18.2",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_302121984_AHPHG-18-2-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-18-2",
                    "id": "5dcba0182f801779d84b1ab6_302121216_AHPHG-18-2-SIG;/oms=1-5dcba0182f801779d84b1ab6_302121984_AHPHG-18-2-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-18-2-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_302121216",
                    "ptpUserLabel": "AHPHG-18-2-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_18.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-18-2",
                    "id": "5dcba0182f801779d84b1ab6_302121216_AHPHG-18-2-SIG;/oms=1"
                },
                {
                    "userLabel": "BJM1-PSS32-ROADM-25/AHPHG-18-3-SIG--BJM1-PSS32-ROADM-25/AHPHG-18-2-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_302186752"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_302121216_5dcba0182f801779d84b1ab6_302186752",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_302121216"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-18-3-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_302186752",
                    "ptpUserLabel": "AHPHG-18-3-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_18.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-18-3",
                    "id": "5dcba0182f801779d84b1ab6_302186752_AHPHG-18-3-SIG;/oms=1"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_302186752_AHPHG-18-3-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "XC",
                    "equipmentId": "5dcba0182f801779d84b1ab6_18.3",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_302187520_AHPHG-18-3-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-18-3",
                    "id": "5dcba0182f801779d84b1ab6_302186752_AHPHG-18-3-SIG;/oms=1-5dcba0182f801779d84b1ab6_302187520_AHPHG-18-3-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-18-3-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_302187520",
                    "ptpUserLabel": "AHPHG-18-3-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_18.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-18-3",
                    "id": "5dcba0182f801779d84b1ab6_302187520_AHPHG-18-3-LINE;/oms=1"
                },
                {
                    "userLabel": "BJM1-PSS32-ROADM-25/WR8-88AF-18-4-SIG--BJM1-PSS32-ROADM-25/AHPHG-18-3-LINE",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_302252288"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_302187520_5dcba0182f801779d84b1ab6_302252288",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_302187520"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "WR8-88AF-18-4-SIG;/frequency=9475.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_302252288",
                    "ptpUserLabel": "WR8-88AF-18-4-SIG",
                    "isSeparatedRoute": true,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_18.4",
                    "separatedRouteElements": {
                        "Tx": [
                            {
                                "neId": "5dcba0182f801779d84b1ab6",
                                "userLabel": "TAKEOVER-1577443786133",
                                "isMergedRoute": null,
                                "protectionType": "SIMPLE",
                                "aEndNodes": [
                                    "5dcba0182f801779d84b1ab6_302252288_WR8-88AF-18-4-SIG;/frequency=9475.000"
                                ],
                                "isSeparatedRoute": null,
                                "neUserLabel": "BJM1-PSS32-ROADM-25",
                                "type": "XC",
                                "equipmentId": "5dcba0182f801779d84b1ab6_18.4",
                                "zEndNodes": [
                                    "5dcba0182f801779d84b1ab6_302252800_WR8-88AF-18-4-DROPOUT;/frequency=9475.000"
                                ],
                                "equipmentUserLabel": "WR8-88AF-18-4",
                                "id": "5dcba0182f801779d84b1ab6_302252800_WR8-88AF-18-4-DROPOUT;/frequency=9475.000-5dcba0182f801779d84b1ab6_302252288_WR8-88AF-18-4-SIG;/frequency=9475.000",
                                "direction": "UNI"
                            },
                            {
                                "neId": "5dcba0182f801779d84b1ab6",
                                "userLabel": "WR8-88AF-18-4-DROPOUT;/frequency=9475.000",
                                "isMergedRoute": null,
                                "ptpId": "5dcba0182f801779d84b1ab6_302252800",
                                "ptpUserLabel": "WR8-88AF-18-4-DROPOUT",
                                "isSeparatedRoute": null,
                                "neUserLabel": "BJM1-PSS32-ROADM-25",
                                "type": "TP",
                                "equipmentId": "5dcba0182f801779d84b1ab6_18.4",
                                "tpType": "CTP",
                                "layerRate": "OCH",
                                "equipmentUserLabel": "WR8-88AF-18-4",
                                "id": "5dcba0182f801779d84b1ab6_302252800_WR8-88AF-18-4-DROPOUT;/frequency=9475.000"
                            },
                            {
                                "userLabel": "BJM1-PSS32-ROADM-25/WR8-88AF-18-4-DROPOUT--BJM1-PSS32-ROADM-25/ITLU-47-1-SIGIN",
                                "isMergedRoute": null,
                                "protectionType": "NORMAL",
                                "aEndNodes": [
                                    "5dcba0182f801779d84b1ab6_302252800"
                                ],
                                "isSeparatedRoute": null,
                                "id": "5dcba0182f801779d84b1ab6_302252800_5dcba0182f801779d84b1ab6_788594944",
                                "type": "TL",
                                "direction": "UNI",
                                "zEndNodes": [
                                    "5dcba0182f801779d84b1ab6_788594944"
                                ]
                            },
                            {
                                "neId": "5dcba0182f801779d84b1ab6",
                                "userLabel": "ITLU-47-1-SIGIN;/frequency=9475.000",
                                "isMergedRoute": null,
                                "ptpId": "5dcba0182f801779d84b1ab6_788594944",
                                "ptpUserLabel": "ITLU-47-1-SIGIN",
                                "isSeparatedRoute": null,
                                "neUserLabel": "BJM1-PSS32-ROADM-25",
                                "type": "TP",
                                "equipmentId": "5dcba0182f801779d84b1ab6_47.1",
                                "tpType": "CTP",
                                "layerRate": "OCH",
                                "equipmentUserLabel": "ITLU-47-1",
                                "id": "5dcba0182f801779d84b1ab6_788594944_ITLU-47-1-SIGIN;/frequency=9475.000"
                            },
                            {
                                "neId": "5dcba0182f801779d84b1ab6",
                                "userLabel": null,
                                "isMergedRoute": null,
                                "protectionType": "SIMPLE",
                                "aEndNodes": [
                                    "5dcba0182f801779d84b1ab6_788595456_ITLU-47-1-OOUT;/frequency=9475.000"
                                ],
                                "isSeparatedRoute": null,
                                "neUserLabel": "BJM1-PSS32-ROADM-25",
                                "type": "XC",
                                "equipmentId": "5dcba0182f801779d84b1ab6_47.1",
                                "zEndNodes": [
                                    "5dcba0182f801779d84b1ab6_788594944_ITLU-47-1-SIGIN;/frequency=9475.000"
                                ],
                                "equipmentUserLabel": "ITLU-47-1",
                                "id": "5dcba0182f801779d84b1ab6_788595456_ITLU-47-1-OOUT;/frequency=9475.000-5dcba0182f801779d84b1ab6_788594944_ITLU-47-1-SIGIN;/frequency=9475.000",
                                "direction": "UNI"
                            },
                            {
                                "neId": "5dcba0182f801779d84b1ab6",
                                "userLabel": "ITLU-47-1-OOUT;/frequency=9475.000",
                                "isMergedRoute": null,
                                "ptpId": "5dcba0182f801779d84b1ab6_788595456",
                                "ptpUserLabel": "ITLU-47-1-OOUT",
                                "isSeparatedRoute": null,
                                "neUserLabel": "BJM1-PSS32-ROADM-25",
                                "type": "TP",
                                "equipmentId": "5dcba0182f801779d84b1ab6_47.1",
                                "tpType": "CTP",
                                "layerRate": "OCH",
                                "equipmentUserLabel": "ITLU-47-1",
                                "id": "5dcba0182f801779d84b1ab6_788595456_ITLU-47-1-OOUT;/frequency=9475.000"
                            },
                            {
                                "userLabel": "BJM1-PSS32-ROADM-25/ITLU-47-1-OOUT--BJM1-PSS32-ROADM-25/SFD44B-48-1-OMD",
                                "isMergedRoute": null,
                                "protectionType": "NORMAL",
                                "aEndNodes": [
                                    "5dcba0182f801779d84b1ab6_788595456"
                                ],
                                "isSeparatedRoute": null,
                                "id": "5dcba0182f801779d84b1ab6_788595456_5dcba0182f801779d84b1ab6_805383424",
                                "type": "TL",
                                "direction": "UNI",
                                "zEndNodes": [
                                    "5dcba0182f801779d84b1ab6_805383424"
                                ]
                            }
                        ],
                        "Rx": [
                            {
                                "neId": "5dcba0182f801779d84b1ab6",
                                "userLabel": "TAKEOVER-1577443786133",
                                "isMergedRoute": null,
                                "protectionType": "SIMPLE",
                                "aEndNodes": [
                                    "5dcba0182f801779d84b1ab6_302253312_WR8-88AF-18-4-ADDIN2;/frequency=9475.000"
                                ],
                                "isSeparatedRoute": null,
                                "neUserLabel": "BJM1-PSS32-ROADM-25",
                                "type": "XC",
                                "equipmentId": "5dcba0182f801779d84b1ab6_18.4",
                                "zEndNodes": [
                                    "5dcba0182f801779d84b1ab6_302252288_WR8-88AF-18-4-SIG;/frequency=9475.000"
                                ],
                                "equipmentUserLabel": "WR8-88AF-18-4",
                                "id": "5dcba0182f801779d84b1ab6_302253312_WR8-88AF-18-4-ADDIN2;/frequency=9475.000-5dcba0182f801779d84b1ab6_302252288_WR8-88AF-18-4-SIG;/frequency=9475.000",
                                "direction": "UNI"
                            },
                            {
                                "neId": "5dcba0182f801779d84b1ab6",
                                "userLabel": "WR8-88AF-18-4-ADDIN2;/frequency=9475.000",
                                "isMergedRoute": null,
                                "ptpId": "5dcba0182f801779d84b1ab6_302253312",
                                "ptpUserLabel": "WR8-88AF-18-4-ADDIN2",
                                "isSeparatedRoute": null,
                                "neUserLabel": "BJM1-PSS32-ROADM-25",
                                "type": "TP",
                                "equipmentId": "5dcba0182f801779d84b1ab6_18.4",
                                "tpType": "CTP",
                                "layerRate": "OCH",
                                "equipmentUserLabel": "WR8-88AF-18-4",
                                "id": "5dcba0182f801779d84b1ab6_302253312_WR8-88AF-18-4-ADDIN2;/frequency=9475.000"
                            },
                            {
                                "userLabel": "BJM1-PSS32-ROADM-25/SFD44B-48-1-OMD--BJM1-PSS32-ROADM-25/WR8-88AF-18-4-ADDIN2",
                                "isMergedRoute": null,
                                "protectionType": "NORMAL",
                                "aEndNodes": [
                                    "5dcba0182f801779d84b1ab6_805383424"
                                ],
                                "isSeparatedRoute": null,
                                "id": "5dcba0182f801779d84b1ab6_302253312_5dcba0182f801779d84b1ab6_805383424",
                                "type": "TL",
                                "direction": "UNI",
                                "zEndNodes": [
                                    "5dcba0182f801779d84b1ab6_302253312"
                                ]
                            }
                        ]
                    },
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-18-4",
                    "id": "5dcba0182f801779d84b1ab6_302252288_WR8-88AF-18-4-SIG;/frequency=9475.000"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "SFD44B-48-1-OMD;/frequency=9475.000",
                    "isMergedRoute": true,
                    "ptpId": "5dcba0182f801779d84b1ab6_805383424",
                    "ptpUserLabel": "SFD44B-48-1-OMD",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_48.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44B-48-1",
                    "id": "5dcba0182f801779d84b1ab6_805383424_SFD44B-48-1-OMD;/frequency=9475.000"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_805375488_SFD44B-48-1-9475;/frequency=9475.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "XC",
                    "equipmentId": "5dcba0182f801779d84b1ab6_48.1",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_805383424_SFD44B-48-1-OMD;/frequency=9475.000"
                    ],
                    "equipmentUserLabel": "SFD44B-48-1",
                    "id": "5dcba0182f801779d84b1ab6_805375488_SFD44B-48-1-9475;/frequency=9475.000-5dcba0182f801779d84b1ab6_805383424_SFD44B-48-1-OMD;/frequency=9475.000",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "SFD44B-48-1-9475;/frequency=9475.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_805375488",
                    "ptpUserLabel": "SFD44B-48-1-9475",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_48.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44B-48-1",
                    "id": "5dcba0182f801779d84b1ab6_805375488_SFD44B-48-1-9475;/frequency=9475.000"
                },
                {
                    "userLabel": "BJM1-PSS32-ROADM-25/OPSA-18-26-A--BJM1-PSS32-ROADM-25/SFD44B-48-1-9475",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_303694336"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_303694336_5dcba0182f801779d84b1ab6_805375488",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_805375488"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "OPSA-18-26-A;/frequency=/tunable-number=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_303694336",
                    "ptpUserLabel": "OPSA-18-26-A",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_18.26",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "OPSA-18-26",
                    "id": "5dcba0182f801779d84b1ab6_303694336_OPSA-18-26-A;/frequency=/tunable-number=1"
                }
            ]
        },
        "equipmentUserLabel": "OPSA-5-3",
        "id": "5dcba04a2f801779d84b1ab9_84082944_OPSA-5-3-SIG;/frequency=/tunable-number=1-5dcba04a2f801779d84b1ab9_84083200_OPSA-5-3-A;/frequency=/tunable-number=1-5dcba04a2f801779d84b1ab9_84083456_OPSA-5-3-B;/frequency=/tunable-number=1",
        "direction": "BI"
    },
    {
        "neId": "5dcba0182f801779d84b1ab6",
        "userLabel": null,
        "isMergedRoute": true,
        "protectionType": "OPS",
        "aEndNodes": [
            "5dcba0182f801779d84b1ab6_303694080_OPSA-18-26-SIG;/frequency=/tunable-number=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "BJM1-PSS32-ROADM-25",
        "type": "XC",
        "equipmentId": "5dcba0182f801779d84b1ab6_18.26",
        "zEndNodes": [
            "5dcba0182f801779d84b1ab6_303694336_OPSA-18-26-A;/frequency=/tunable-number=1",
            "5dcba0182f801779d84b1ab6_303694592_OPSA-18-26-B;/frequency=/tunable-number=1"
        ],
        "equipmentUserLabel": "OPSA-18-26",
        "id": "5dcba0182f801779d84b1ab6_303694080_OPSA-18-26-SIG;/frequency=/tunable-number=1-5dcba0182f801779d84b1ab6_303694336_OPSA-18-26-A;/frequency=/tunable-number=1-5dcba0182f801779d84b1ab6_303694592_OPSA-18-26-B;/frequency=/tunable-number=1",
        "direction": "BI"
    },
    {
        "neId": "5dcba0182f801779d84b1ab6",
        "userLabel": "OPSA-18-26-SIG;/frequency=/tunable-number=1",
        "isMergedRoute": null,
        "ptpId": "5dcba0182f801779d84b1ab6_303694080",
        "ptpUserLabel": "OPSA-18-26-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "BJM1-PSS32-ROADM-25",
        "type": "TP",
        "equipmentId": "5dcba0182f801779d84b1ab6_18.26",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "OPSA-18-26",
        "id": "5dcba0182f801779d84b1ab6_303694080_OPSA-18-26-SIG;/frequency=/tunable-number=1"
    },
    {
        "userLabel": "BJM1-PSS32-ROADM-25/OPSA-18-26-SIG--BJM1-PSS32-ROADM-25/260SCX2-18-11-L1",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5dcba0182f801779d84b1ab6_303694080"
        ],
        "isSeparatedRoute": null,
        "id": "5dcba0182f801779d84b1ab6_302711040_5dcba0182f801779d84b1ab6_303694080",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5dcba0182f801779d84b1ab6_302711040"
        ]
    },
    {
        "neId": "5dcba0182f801779d84b1ab6",
        "userLabel": "260SCX2-18-11-L1;/otu4=1/odu4=1",
        "isMergedRoute": null,
        "ptpId": "5dcba0182f801779d84b1ab6_302711040",
        "ptpUserLabel": "260SCX2-18-11-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "BJM1-PSS32-ROADM-25",
        "type": "TP",
        "equipmentId": "5dcba0182f801779d84b1ab6_18.11",
        "tpType": "CTP",
        "layerRate": "ODU4",
        "equipmentUserLabel": "260SCX2-18-11",
        "id": "5dcba0182f801779d84b1ab6_302711040_260SCX2-18-11-L1;/otu4=1/odu4=1"
    },
    {
        "neId": "5dcba0182f801779d84b1ab6",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5dcba0182f801779d84b1ab6_302711296_260SCX2-18-11-C1;/odu4=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "BJM1-PSS32-ROADM-25",
        "type": "XC",
        "equipmentId": "5dcba0182f801779d84b1ab6_18.11",
        "zEndNodes": [
            "5dcba0182f801779d84b1ab6_302711040_260SCX2-18-11-L1;/otu4=1/odu4=1"
        ],
        "equipmentUserLabel": "260SCX2-18-11",
        "id": "5dcba0182f801779d84b1ab6_302711296_260SCX2-18-11-C1;/odu4=1-5dcba0182f801779d84b1ab6_302711040_260SCX2-18-11-L1;/otu4=1/odu4=1",
        "direction": "BI"
    },
    {
        "neId": "5dcba0182f801779d84b1ab6",
        "userLabel": "260SCX2-18-11-C1;/odu4=1",
        "isMergedRoute": null,
        "ptpId": "5dcba0182f801779d84b1ab6_302711296",
        "ptpUserLabel": "260SCX2-18-11-C1",
        "isSeparatedRoute": null,
        "neUserLabel": "BJM1-PSS32-ROADM-25",
        "type": "TP",
        "equipmentId": "5dcba0182f801779d84b1ab6_18.11",
        "tpType": "CTP",
        "layerRate": "ODU4",
        "equipmentUserLabel": "260SCX2-18-11",
        "id": "5dcba0182f801779d84b1ab6_302711296_260SCX2-18-11-C1;/odu4=1"
    }
];
const flowInfo_IQY_PBS_2_16_C1__IQY_RSJT_2_12_C1 = [
    {
        "neId": "5dcbb15a2f801779d84b1fe7",
        "userLabel": "260SCX2-2-16-C1;/odu4=1",
        "isMergedRoute": null,
        "ptpId": "5dcbb15a2f801779d84b1fe7_34603520",
        "ptpUserLabel": "260SCX2-2-16-C1",
        "isSeparatedRoute": null,
        "neUserLabel": "IQY-PBS-ROADM-45",
        "type": "TP",
        "equipmentId": "5dcbb15a2f801779d84b1fe7_2.16",
        "tpType": "CTP",
        "layerRate": "ODU4",
        "equipmentUserLabel": "260SCX2-2-16",
        "id": "5dcbb15a2f801779d84b1fe7_34603520_260SCX2-2-16-C1;/odu4=1"
    },
    {
        "neId": "5dcbb15a2f801779d84b1fe7",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5dcbb15a2f801779d84b1fe7_34603520_260SCX2-2-16-C1;/odu4=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "IQY-PBS-ROADM-45",
        "type": "XC",
        "equipmentId": "5dcbb15a2f801779d84b1fe7_2.16",
        "zEndNodes": [
            "5dcbb15a2f801779d84b1fe7_34603264_260SCX2-2-16-L1;/otu4=1/odu4=1"
        ],
        "equipmentUserLabel": "260SCX2-2-16",
        "id": "5dcbb15a2f801779d84b1fe7_34603520_260SCX2-2-16-C1;/odu4=1-5dcbb15a2f801779d84b1fe7_34603264_260SCX2-2-16-L1;/otu4=1/odu4=1",
        "direction": "BI"
    },
    {
        "neId": "5dcbb15a2f801779d84b1fe7",
        "userLabel": "260SCX2-2-16-L1;/otu4=1/odu4=1",
        "isMergedRoute": null,
        "ptpId": "5dcbb15a2f801779d84b1fe7_34603264",
        "ptpUserLabel": "260SCX2-2-16-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "IQY-PBS-ROADM-45",
        "type": "TP",
        "equipmentId": "5dcbb15a2f801779d84b1fe7_2.16",
        "tpType": "CTP",
        "layerRate": "ODU4",
        "equipmentUserLabel": "260SCX2-2-16",
        "id": "5dcbb15a2f801779d84b1fe7_34603264_260SCX2-2-16-L1;/otu4=1/odu4=1"
    },
    {
        "userLabel": "IQY-PBS-ROADM-45/260SCX2-2-16-L1--IQY-PBS-ROADM-45/SFD44B-26-1-9475",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5dcbb15a2f801779d84b1fe7_34603264"
        ],
        "isSeparatedRoute": null,
        "id": "5dcbb15a2f801779d84b1fe7_34603264_5dcbb15a2f801779d84b1fe7_436276736",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5dcbb15a2f801779d84b1fe7_436276736"
        ]
    },
    {
        "neId": "5dcbb15a2f801779d84b1fe7",
        "userLabel": "SFD44B-26-1-9475;/frequency=9475.000",
        "isMergedRoute": null,
        "ptpId": "5dcbb15a2f801779d84b1fe7_436276736",
        "ptpUserLabel": "SFD44B-26-1-9475",
        "isSeparatedRoute": null,
        "neUserLabel": "IQY-PBS-ROADM-45",
        "type": "TP",
        "equipmentId": "5dcbb15a2f801779d84b1fe7_26.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44B-26-1",
        "id": "5dcbb15a2f801779d84b1fe7_436276736_SFD44B-26-1-9475;/frequency=9475.000"
    },
    {
        "neId": "5dcbb15a2f801779d84b1fe7",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5dcbb15a2f801779d84b1fe7_436276736_SFD44B-26-1-9475;/frequency=9475.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "IQY-PBS-ROADM-45",
        "type": "XC",
        "equipmentId": "5dcbb15a2f801779d84b1fe7_26.1",
        "zEndNodes": [
            "5dcbb15a2f801779d84b1fe7_436284672_SFD44B-26-1-OMD;/frequency=9475.000"
        ],
        "equipmentUserLabel": "SFD44B-26-1",
        "id": "5dcbb15a2f801779d84b1fe7_436276736_SFD44B-26-1-9475;/frequency=9475.000-5dcbb15a2f801779d84b1fe7_436284672_SFD44B-26-1-OMD;/frequency=9475.000",
        "direction": "BI"
    },
    {
        "neId": "5dcbb15a2f801779d84b1fe7",
        "userLabel": "SFD44B-26-1-OMD;/frequency=9475.000",
        "isMergedRoute": null,
        "ptpId": "5dcbb15a2f801779d84b1fe7_436284672",
        "ptpUserLabel": "SFD44B-26-1-OMD",
        "isSeparatedRoute": true,
        "neUserLabel": "IQY-PBS-ROADM-45",
        "type": "TP",
        "equipmentId": "5dcbb15a2f801779d84b1fe7_26.1",
        "separatedRouteElements": {
            "Tx": [
                {
                    "userLabel": "IQY-PBS-ROADM-45/SFD44B-26-1-OMD--IQY-PBS-ROADM-45/WR8-88AF-1-6-ADDIN2",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_436284672"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb15a2f801779d84b1fe7_17171712_5dcbb15a2f801779d84b1fe7_436284672",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_17171712"
                    ]
                },
                {
                    "neId": "5dcbb15a2f801779d84b1fe7",
                    "userLabel": "WR8-88AF-1-6-ADDIN2;/frequency=9475.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb15a2f801779d84b1fe7_17171712",
                    "ptpUserLabel": "WR8-88AF-1-6-ADDIN2",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-PBS-ROADM-45",
                    "type": "TP",
                    "equipmentId": "5dcbb15a2f801779d84b1fe7_1.6",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-1-6",
                    "id": "5dcbb15a2f801779d84b1fe7_17171712_WR8-88AF-1-6-ADDIN2;/frequency=9475.000"
                },
                {
                    "neId": "5dcbb15a2f801779d84b1fe7",
                    "userLabel": "TAKEOVER-1577443792701",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_17171712_WR8-88AF-1-6-ADDIN2;/frequency=9475.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-PBS-ROADM-45",
                    "type": "XC",
                    "equipmentId": "5dcbb15a2f801779d84b1fe7_1.6",
                    "zEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_17170688_WR8-88AF-1-6-SIG;/frequency=9475.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-1-6",
                    "id": "5dcbb15a2f801779d84b1fe7_17171712_WR8-88AF-1-6-ADDIN2;/frequency=9475.000-5dcbb15a2f801779d84b1fe7_17170688_WR8-88AF-1-6-SIG;/frequency=9475.000",
                    "direction": "BI"
                }
            ],
            "Rx": [
                {
                    "userLabel": "IQY-PBS-ROADM-45/ITLU-25-1-OOUT--IQY-PBS-ROADM-45/SFD44B-26-1-OMD",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_419496704"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb15a2f801779d84b1fe7_419496704_5dcbb15a2f801779d84b1fe7_436284672",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_436284672"
                    ]
                },
                {
                    "neId": "5dcbb15a2f801779d84b1fe7",
                    "userLabel": "ITLU-25-1-OOUT;/frequency=9475.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb15a2f801779d84b1fe7_419496704",
                    "ptpUserLabel": "ITLU-25-1-OOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-PBS-ROADM-45",
                    "type": "TP",
                    "equipmentId": "5dcbb15a2f801779d84b1fe7_25.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-25-1",
                    "id": "5dcbb15a2f801779d84b1fe7_419496704_ITLU-25-1-OOUT;/frequency=9475.000"
                },
                {
                    "neId": "5dcbb15a2f801779d84b1fe7",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_419496704_ITLU-25-1-OOUT;/frequency=9475.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-PBS-ROADM-45",
                    "type": "XC",
                    "equipmentId": "5dcbb15a2f801779d84b1fe7_25.1",
                    "zEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_419496192_ITLU-25-1-SIGIN;/frequency=9475.000"
                    ],
                    "equipmentUserLabel": "ITLU-25-1",
                    "id": "5dcbb15a2f801779d84b1fe7_419496704_ITLU-25-1-OOUT;/frequency=9475.000-5dcbb15a2f801779d84b1fe7_419496192_ITLU-25-1-SIGIN;/frequency=9475.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5dcbb15a2f801779d84b1fe7",
                    "userLabel": "ITLU-25-1-SIGIN;/frequency=9475.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb15a2f801779d84b1fe7_419496192",
                    "ptpUserLabel": "ITLU-25-1-SIGIN",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-PBS-ROADM-45",
                    "type": "TP",
                    "equipmentId": "5dcbb15a2f801779d84b1fe7_25.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-25-1",
                    "id": "5dcbb15a2f801779d84b1fe7_419496192_ITLU-25-1-SIGIN;/frequency=9475.000"
                },
                {
                    "userLabel": "IQY-PBS-ROADM-45/WR8-88AF-1-6-DROPOUT--IQY-PBS-ROADM-45/ITLU-25-1-SIGIN",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_17171200"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb15a2f801779d84b1fe7_17171200_5dcbb15a2f801779d84b1fe7_419496192",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_419496192"
                    ]
                },
                {
                    "neId": "5dcbb15a2f801779d84b1fe7",
                    "userLabel": "WR8-88AF-1-6-DROPOUT;/frequency=9475.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb15a2f801779d84b1fe7_17171200",
                    "ptpUserLabel": "WR8-88AF-1-6-DROPOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-PBS-ROADM-45",
                    "type": "TP",
                    "equipmentId": "5dcbb15a2f801779d84b1fe7_1.6",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-1-6",
                    "id": "5dcbb15a2f801779d84b1fe7_17171200_WR8-88AF-1-6-DROPOUT;/frequency=9475.000"
                },
                {
                    "neId": "5dcbb15a2f801779d84b1fe7",
                    "userLabel": "TAKEOVER-1577443792701",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_17171200_WR8-88AF-1-6-DROPOUT;/frequency=9475.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-PBS-ROADM-45",
                    "type": "XC",
                    "equipmentId": "5dcbb15a2f801779d84b1fe7_1.6",
                    "zEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_17170688_WR8-88AF-1-6-SIG;/frequency=9475.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-1-6",
                    "id": "5dcbb15a2f801779d84b1fe7_17171200_WR8-88AF-1-6-DROPOUT;/frequency=9475.000-5dcbb15a2f801779d84b1fe7_17170688_WR8-88AF-1-6-SIG;/frequency=9475.000",
                    "direction": "BI"
                }
            ]
        },
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44B-26-1",
        "id": "5dcbb15a2f801779d84b1fe7_436284672_SFD44B-26-1-OMD;/frequency=9475.000"
    },
    {
        "neId": "5dcbb15a2f801779d84b1fe7",
        "userLabel": "WR8-88AF-1-6-SIG;/frequency=9475.000",
        "isMergedRoute": true,
        "ptpId": "5dcbb15a2f801779d84b1fe7_17170688",
        "ptpUserLabel": "WR8-88AF-1-6-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "IQY-PBS-ROADM-45",
        "type": "TP",
        "equipmentId": "5dcbb15a2f801779d84b1fe7_1.6",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "WR8-88AF-1-6",
        "id": "5dcbb15a2f801779d84b1fe7_17170688_WR8-88AF-1-6-SIG;/frequency=9475.000"
    },
    {
        "userLabel": "IQY-PBS-ROADM-45/WR8-88AF-1-6-SIG--IQY-PBS-ROADM-45/OPSA-1-8-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5dcbb15a2f801779d84b1fe7_17170688"
        ],
        "isSeparatedRoute": null,
        "id": "5dcbb15a2f801779d84b1fe7_17170688_5dcbb15a2f801779d84b1fe7_17301760",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5dcbb15a2f801779d84b1fe7_17301760"
        ]
    },
    {
        "neId": "5dcbb15a2f801779d84b1fe7",
        "userLabel": "OPSA-1-8-SIG;/frequency=/oms=1",
        "isMergedRoute": null,
        "ptpId": "5dcbb15a2f801779d84b1fe7_17301760",
        "ptpUserLabel": "OPSA-1-8-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "IQY-PBS-ROADM-45",
        "type": "TP",
        "equipmentId": "5dcbb15a2f801779d84b1fe7_1.8",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "OPSA-1-8",
        "id": "5dcbb15a2f801779d84b1fe7_17301760_OPSA-1-8-SIG;/frequency=/oms=1"
    },
    {
        "neId": "5dcbb15a2f801779d84b1fe7",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "OPS",
        "aEndNodes": [
            "5dcbb15a2f801779d84b1fe7_17301760_OPSA-1-8-SIG;/frequency=/oms=1"
        ],
        "isSeparatedRoute": true,
        "neUserLabel": "IQY-PBS-ROADM-45",
        "type": "XC",
        "equipmentId": "5dcbb15a2f801779d84b1fe7_1.8",
        "zEndNodes": [
            "5dcbb15a2f801779d84b1fe7_17302016_OPSA-1-8-A;/frequency=/oms=1",
            "5dcbb15a2f801779d84b1fe7_17302272_OPSA-1-8-B;/frequency=/oms=1"
        ],
        "separatedRouteElements": {
            "Spare": [
                {
                    "neId": "5dcbb15a2f801779d84b1fe7",
                    "userLabel": "OPSA-1-8-B;/frequency=/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb15a2f801779d84b1fe7_17302272",
                    "ptpUserLabel": "OPSA-1-8-B",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-PBS-ROADM-45",
                    "type": "TP",
                    "equipmentId": "5dcbb15a2f801779d84b1fe7_1.8",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OPSA-1-8",
                    "id": "5dcbb15a2f801779d84b1fe7_17302272_OPSA-1-8-B;/frequency=/oms=1"
                },
                {
                    "userLabel": "IQY-PBS-ROADM-45/AHPHG-1-5-LINE--IQY-PBS-ROADM-45/OPSA-1-8-B",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_17105920"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb15a2f801779d84b1fe7_17105920_5dcbb15a2f801779d84b1fe7_17302272",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_17302272"
                    ]
                },
                {
                    "neId": "5dcbb15a2f801779d84b1fe7",
                    "userLabel": "AHPHG-1-5-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb15a2f801779d84b1fe7_17105920",
                    "ptpUserLabel": "AHPHG-1-5-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-PBS-ROADM-45",
                    "type": "TP",
                    "equipmentId": "5dcbb15a2f801779d84b1fe7_1.5",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-5",
                    "id": "5dcbb15a2f801779d84b1fe7_17105920_AHPHG-1-5-LINE;/oms=1"
                },
                {
                    "neId": "5dcbb15a2f801779d84b1fe7",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_17105152_AHPHG-1-5-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-PBS-ROADM-45",
                    "type": "XC",
                    "equipmentId": "5dcbb15a2f801779d84b1fe7_1.5",
                    "zEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_17105920_AHPHG-1-5-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-1-5",
                    "id": "5dcbb15a2f801779d84b1fe7_17105152_AHPHG-1-5-SIG;/oms=1-5dcbb15a2f801779d84b1fe7_17105920_AHPHG-1-5-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcbb15a2f801779d84b1fe7",
                    "userLabel": "AHPHG-1-5-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb15a2f801779d84b1fe7_17105152",
                    "ptpUserLabel": "AHPHG-1-5-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-PBS-ROADM-45",
                    "type": "TP",
                    "equipmentId": "5dcbb15a2f801779d84b1fe7_1.5",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-5",
                    "id": "5dcbb15a2f801779d84b1fe7_17105152_AHPHG-1-5-SIG;/oms=1"
                },
                {
                    "userLabel": "IQY-PBS-ROADM-45/AHPHG-1-4-SIG--IQY-PBS-ROADM-45/AHPHG-1-5-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_17039616"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb15a2f801779d84b1fe7_17039616_5dcbb15a2f801779d84b1fe7_17105152",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_17105152"
                    ]
                },
                {
                    "neId": "5dcbb15a2f801779d84b1fe7",
                    "userLabel": "AHPHG-1-4-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb15a2f801779d84b1fe7_17039616",
                    "ptpUserLabel": "AHPHG-1-4-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-PBS-ROADM-45",
                    "type": "TP",
                    "equipmentId": "5dcbb15a2f801779d84b1fe7_1.4",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-4",
                    "id": "5dcbb15a2f801779d84b1fe7_17039616_AHPHG-1-4-SIG;/oms=1"
                },
                {
                    "neId": "5dcbb15a2f801779d84b1fe7",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_17039616_AHPHG-1-4-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-PBS-ROADM-45",
                    "type": "XC",
                    "equipmentId": "5dcbb15a2f801779d84b1fe7_1.4",
                    "zEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_17040384_AHPHG-1-4-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-1-4",
                    "id": "5dcbb15a2f801779d84b1fe7_17039616_AHPHG-1-4-SIG;/oms=1-5dcbb15a2f801779d84b1fe7_17040384_AHPHG-1-4-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcbb15a2f801779d84b1fe7",
                    "userLabel": "AHPHG-1-4-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb15a2f801779d84b1fe7_17040384",
                    "ptpUserLabel": "AHPHG-1-4-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-PBS-ROADM-45",
                    "type": "TP",
                    "equipmentId": "5dcbb15a2f801779d84b1fe7_1.4",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-4",
                    "id": "5dcbb15a2f801779d84b1fe7_17040384_AHPHG-1-4-LINE;/oms=1"
                },
                {
                    "userLabel": "IQY-PBS-ROADM-45/AHPHG-1-4-LINE--BJM1-PSS32-ROADM-25/AHPHG-16-4-LINE",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_17040384"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_268698624_5dcbb15a2f801779d84b1fe7_17040384",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_268698624"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-16-4-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_268698624",
                    "ptpUserLabel": "AHPHG-16-4-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_16.4",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-16-4",
                    "id": "5dcba0182f801779d84b1ab6_268698624_AHPHG-16-4-LINE;/oms=1"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_268697856_AHPHG-16-4-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "XC",
                    "equipmentId": "5dcba0182f801779d84b1ab6_16.4",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_268698624_AHPHG-16-4-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-16-4",
                    "id": "5dcba0182f801779d84b1ab6_268697856_AHPHG-16-4-SIG;/oms=1-5dcba0182f801779d84b1ab6_268698624_AHPHG-16-4-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-16-4-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_268697856",
                    "ptpUserLabel": "AHPHG-16-4-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_16.4",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-16-4",
                    "id": "5dcba0182f801779d84b1ab6_268697856_AHPHG-16-4-SIG;/oms=1"
                },
                {
                    "userLabel": "BJM1-PSS32-ROADM-25/AHPHG-16-4-SIG--BJM1-PSS32-ROADM-25/AHPHG-16-5-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_268697856"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_268697856_5dcba0182f801779d84b1ab6_268763392",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_268763392"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-16-5-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_268763392",
                    "ptpUserLabel": "AHPHG-16-5-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_16.5",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-16-5",
                    "id": "5dcba0182f801779d84b1ab6_268763392_AHPHG-16-5-SIG;/oms=1"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_268763392_AHPHG-16-5-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "XC",
                    "equipmentId": "5dcba0182f801779d84b1ab6_16.5",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_268764160_AHPHG-16-5-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-16-5",
                    "id": "5dcba0182f801779d84b1ab6_268763392_AHPHG-16-5-SIG;/oms=1-5dcba0182f801779d84b1ab6_268764160_AHPHG-16-5-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-16-5-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_268764160",
                    "ptpUserLabel": "AHPHG-16-5-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_16.5",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-16-5",
                    "id": "5dcba0182f801779d84b1ab6_268764160_AHPHG-16-5-LINE;/oms=1"
                },
                {
                    "userLabel": "BJM1-PSS32-ROADM-25/AHPHG-16-5-LINE--BJM1-PSS32-ROADM-25/OPSA-16-8-B",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_268764160"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_268764160_5dcba0182f801779d84b1ab6_268960512",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_268960512"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "OPSA-16-8-B;/frequency=/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_268960512",
                    "ptpUserLabel": "OPSA-16-8-B",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_16.8",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OPSA-16-8",
                    "id": "5dcba0182f801779d84b1ab6_268960512_OPSA-16-8-B;/frequency=/oms=1"
                }
            ],
            "Main": [
                {
                    "neId": "5dcbb15a2f801779d84b1fe7",
                    "userLabel": "OPSA-1-8-A;/frequency=/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb15a2f801779d84b1fe7_17302016",
                    "ptpUserLabel": "OPSA-1-8-A",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-PBS-ROADM-45",
                    "type": "TP",
                    "equipmentId": "5dcbb15a2f801779d84b1fe7_1.8",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OPSA-1-8",
                    "id": "5dcbb15a2f801779d84b1fe7_17302016_OPSA-1-8-A;/frequency=/oms=1"
                },
                {
                    "userLabel": "IQY-PBS-ROADM-45/AHPHG-1-3-LINE--IQY-PBS-ROADM-45/OPSA-1-8-A",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_16974848"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb15a2f801779d84b1fe7_16974848_5dcbb15a2f801779d84b1fe7_17302016",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_17302016"
                    ]
                },
                {
                    "neId": "5dcbb15a2f801779d84b1fe7",
                    "userLabel": "AHPHG-1-3-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb15a2f801779d84b1fe7_16974848",
                    "ptpUserLabel": "AHPHG-1-3-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-PBS-ROADM-45",
                    "type": "TP",
                    "equipmentId": "5dcbb15a2f801779d84b1fe7_1.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5dcbb15a2f801779d84b1fe7_16974848_AHPHG-1-3-LINE;/oms=1"
                },
                {
                    "neId": "5dcbb15a2f801779d84b1fe7",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_16974080_AHPHG-1-3-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-PBS-ROADM-45",
                    "type": "XC",
                    "equipmentId": "5dcbb15a2f801779d84b1fe7_1.3",
                    "zEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_16974848_AHPHG-1-3-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5dcbb15a2f801779d84b1fe7_16974080_AHPHG-1-3-SIG;/oms=1-5dcbb15a2f801779d84b1fe7_16974848_AHPHG-1-3-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcbb15a2f801779d84b1fe7",
                    "userLabel": "AHPHG-1-3-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb15a2f801779d84b1fe7_16974080",
                    "ptpUserLabel": "AHPHG-1-3-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-PBS-ROADM-45",
                    "type": "TP",
                    "equipmentId": "5dcbb15a2f801779d84b1fe7_1.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5dcbb15a2f801779d84b1fe7_16974080_AHPHG-1-3-SIG;/oms=1"
                },
                {
                    "userLabel": "IQY-PBS-ROADM-45/AHPHG-1-3-SIG--IQY-PBS-ROADM-45/AHPHG-1-2-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_16974080"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb15a2f801779d84b1fe7_16908544_5dcbb15a2f801779d84b1fe7_16974080",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_16908544"
                    ]
                },
                {
                    "neId": "5dcbb15a2f801779d84b1fe7",
                    "userLabel": "AHPHG-1-2-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb15a2f801779d84b1fe7_16908544",
                    "ptpUserLabel": "AHPHG-1-2-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-PBS-ROADM-45",
                    "type": "TP",
                    "equipmentId": "5dcbb15a2f801779d84b1fe7_1.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5dcbb15a2f801779d84b1fe7_16908544_AHPHG-1-2-SIG;/oms=1"
                },
                {
                    "neId": "5dcbb15a2f801779d84b1fe7",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_16908544_AHPHG-1-2-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-PBS-ROADM-45",
                    "type": "XC",
                    "equipmentId": "5dcbb15a2f801779d84b1fe7_1.2",
                    "zEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_16909312_AHPHG-1-2-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5dcbb15a2f801779d84b1fe7_16908544_AHPHG-1-2-SIG;/oms=1-5dcbb15a2f801779d84b1fe7_16909312_AHPHG-1-2-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcbb15a2f801779d84b1fe7",
                    "userLabel": "AHPHG-1-2-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb15a2f801779d84b1fe7_16909312",
                    "ptpUserLabel": "AHPHG-1-2-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-PBS-ROADM-45",
                    "type": "TP",
                    "equipmentId": "5dcbb15a2f801779d84b1fe7_1.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5dcbb15a2f801779d84b1fe7_16909312_AHPHG-1-2-LINE;/oms=1"
                },
                {
                    "userLabel": "IQY-PBS-ROADM-45/AHPHG-1-2-LINE--BJM1-PSS32-ROADM-25/AHPHG-16-2-LINE",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb15a2f801779d84b1fe7_16909312"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_268567552_5dcbb15a2f801779d84b1fe7_16909312",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_268567552"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-16-2-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_268567552",
                    "ptpUserLabel": "AHPHG-16-2-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_16.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-16-2",
                    "id": "5dcba0182f801779d84b1ab6_268567552_AHPHG-16-2-LINE;/oms=1"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_268566784_AHPHG-16-2-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "XC",
                    "equipmentId": "5dcba0182f801779d84b1ab6_16.2",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_268567552_AHPHG-16-2-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-16-2",
                    "id": "5dcba0182f801779d84b1ab6_268566784_AHPHG-16-2-SIG;/oms=1-5dcba0182f801779d84b1ab6_268567552_AHPHG-16-2-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-16-2-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_268566784",
                    "ptpUserLabel": "AHPHG-16-2-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_16.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-16-2",
                    "id": "5dcba0182f801779d84b1ab6_268566784_AHPHG-16-2-SIG;/oms=1"
                },
                {
                    "userLabel": "BJM1-PSS32-ROADM-25/AHPHG-16-3-SIG--BJM1-PSS32-ROADM-25/AHPHG-16-2-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_268632320"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_268566784_5dcba0182f801779d84b1ab6_268632320",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_268566784"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-16-3-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_268632320",
                    "ptpUserLabel": "AHPHG-16-3-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_16.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-16-3",
                    "id": "5dcba0182f801779d84b1ab6_268632320_AHPHG-16-3-SIG;/oms=1"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_268632320_AHPHG-16-3-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "XC",
                    "equipmentId": "5dcba0182f801779d84b1ab6_16.3",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_268633088_AHPHG-16-3-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-16-3",
                    "id": "5dcba0182f801779d84b1ab6_268632320_AHPHG-16-3-SIG;/oms=1-5dcba0182f801779d84b1ab6_268633088_AHPHG-16-3-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-16-3-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_268633088",
                    "ptpUserLabel": "AHPHG-16-3-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_16.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-16-3",
                    "id": "5dcba0182f801779d84b1ab6_268633088_AHPHG-16-3-LINE;/oms=1"
                },
                {
                    "userLabel": "BJM1-PSS32-ROADM-25/AHPHG-16-3-LINE--BJM1-PSS32-ROADM-25/OPSA-16-8-A",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_268633088"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_268633088_5dcba0182f801779d84b1ab6_268960256",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_268960256"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "OPSA-16-8-A;/frequency=/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_268960256",
                    "ptpUserLabel": "OPSA-16-8-A",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_16.8",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OPSA-16-8",
                    "id": "5dcba0182f801779d84b1ab6_268960256_OPSA-16-8-A;/frequency=/oms=1"
                }
            ]
        },
        "equipmentUserLabel": "OPSA-1-8",
        "id": "5dcbb15a2f801779d84b1fe7_17301760_OPSA-1-8-SIG;/frequency=/oms=1-5dcbb15a2f801779d84b1fe7_17302016_OPSA-1-8-A;/frequency=/oms=1-5dcbb15a2f801779d84b1fe7_17302272_OPSA-1-8-B;/frequency=/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5dcba0182f801779d84b1ab6",
        "userLabel": null,
        "isMergedRoute": true,
        "protectionType": "OPS",
        "aEndNodes": [
            "5dcba0182f801779d84b1ab6_268960000_OPSA-16-8-SIG;/frequency=/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "BJM1-PSS32-ROADM-25",
        "type": "XC",
        "equipmentId": "5dcba0182f801779d84b1ab6_16.8",
        "zEndNodes": [
            "5dcba0182f801779d84b1ab6_268960256_OPSA-16-8-A;/frequency=/oms=1",
            "5dcba0182f801779d84b1ab6_268960512_OPSA-16-8-B;/frequency=/oms=1"
        ],
        "equipmentUserLabel": "OPSA-16-8",
        "id": "5dcba0182f801779d84b1ab6_268960000_OPSA-16-8-SIG;/frequency=/oms=1-5dcba0182f801779d84b1ab6_268960256_OPSA-16-8-A;/frequency=/oms=1-5dcba0182f801779d84b1ab6_268960512_OPSA-16-8-B;/frequency=/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5dcba0182f801779d84b1ab6",
        "userLabel": "OPSA-16-8-SIG;/frequency=/oms=1",
        "isMergedRoute": null,
        "ptpId": "5dcba0182f801779d84b1ab6_268960000",
        "ptpUserLabel": "OPSA-16-8-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "BJM1-PSS32-ROADM-25",
        "type": "TP",
        "equipmentId": "5dcba0182f801779d84b1ab6_16.8",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "OPSA-16-8",
        "id": "5dcba0182f801779d84b1ab6_268960000_OPSA-16-8-SIG;/frequency=/oms=1"
    },
    {
        "userLabel": "BJM1-PSS32-ROADM-25/OPSA-16-8-SIG--BJM1-PSS32-ROADM-25/WR8-88AF-16-6-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5dcba0182f801779d84b1ab6_268960000"
        ],
        "isSeparatedRoute": null,
        "id": "5dcba0182f801779d84b1ab6_268828928_5dcba0182f801779d84b1ab6_268960000",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5dcba0182f801779d84b1ab6_268828928"
        ]
    },
    {
        "neId": "5dcba0182f801779d84b1ab6",
        "userLabel": "WR8-88AF-16-6-SIG;/frequency=9475.000",
        "isMergedRoute": null,
        "ptpId": "5dcba0182f801779d84b1ab6_268828928",
        "ptpUserLabel": "WR8-88AF-16-6-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "BJM1-PSS32-ROADM-25",
        "type": "TP",
        "equipmentId": "5dcba0182f801779d84b1ab6_16.6",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "WR8-88AF-16-6",
        "id": "5dcba0182f801779d84b1ab6_268828928_WR8-88AF-16-6-SIG;/frequency=9475.000"
    },
    {
        "neId": "5dcba0182f801779d84b1ab6",
        "userLabel": "TAKEOVER-1577443792701",
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5dcba0182f801779d84b1ab6_268829184_WR8-88AF-16-6-THRU;/frequency=9475.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "BJM1-PSS32-ROADM-25",
        "type": "XC",
        "equipmentId": "5dcba0182f801779d84b1ab6_16.6",
        "zEndNodes": [
            "5dcba0182f801779d84b1ab6_268828928_WR8-88AF-16-6-SIG;/frequency=9475.000"
        ],
        "equipmentUserLabel": "WR8-88AF-16-6",
        "id": "5dcba0182f801779d84b1ab6_268829184_WR8-88AF-16-6-THRU;/frequency=9475.000-5dcba0182f801779d84b1ab6_268828928_WR8-88AF-16-6-SIG;/frequency=9475.000",
        "direction": "BI"
    },
    {
        "neId": "5dcba0182f801779d84b1ab6",
        "userLabel": "WR8-88AF-16-6-THRU;/frequency=9475.000",
        "isMergedRoute": null,
        "ptpId": "5dcba0182f801779d84b1ab6_268829184",
        "ptpUserLabel": "WR8-88AF-16-6-THRU",
        "isSeparatedRoute": null,
        "neUserLabel": "BJM1-PSS32-ROADM-25",
        "type": "TP",
        "equipmentId": "5dcba0182f801779d84b1ab6_16.6",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "WR8-88AF-16-6",
        "id": "5dcba0182f801779d84b1ab6_268829184_WR8-88AF-16-6-THRU;/frequency=9475.000"
    },
    {
        "userLabel": "BJM1-PSS32-ROADM-25/WR8-88AF-16-6-THRU--BJM1-PSS32-ROADM-25/WR8-88AF-15-6-THRU",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5dcba0182f801779d84b1ab6_268829184"
        ],
        "isSeparatedRoute": null,
        "id": "5dcba0182f801779d84b1ab6_252051968_5dcba0182f801779d84b1ab6_268829184",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5dcba0182f801779d84b1ab6_252051968"
        ]
    },
    {
        "neId": "5dcba0182f801779d84b1ab6",
        "userLabel": "WR8-88AF-15-6-THRU;/frequency=9475.000",
        "isMergedRoute": null,
        "ptpId": "5dcba0182f801779d84b1ab6_252051968",
        "ptpUserLabel": "WR8-88AF-15-6-THRU",
        "isSeparatedRoute": null,
        "neUserLabel": "BJM1-PSS32-ROADM-25",
        "type": "TP",
        "equipmentId": "5dcba0182f801779d84b1ab6_15.6",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "WR8-88AF-15-6",
        "id": "5dcba0182f801779d84b1ab6_252051968_WR8-88AF-15-6-THRU;/frequency=9475.000"
    },
    {
        "neId": "5dcba0182f801779d84b1ab6",
        "userLabel": "TAKEOVER-1577443792701",
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5dcba0182f801779d84b1ab6_252051712_WR8-88AF-15-6-SIG;/frequency=9475.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "BJM1-PSS32-ROADM-25",
        "type": "XC",
        "equipmentId": "5dcba0182f801779d84b1ab6_15.6",
        "zEndNodes": [
            "5dcba0182f801779d84b1ab6_252051968_WR8-88AF-15-6-THRU;/frequency=9475.000"
        ],
        "equipmentUserLabel": "WR8-88AF-15-6",
        "id": "5dcba0182f801779d84b1ab6_252051712_WR8-88AF-15-6-SIG;/frequency=9475.000-5dcba0182f801779d84b1ab6_252051968_WR8-88AF-15-6-THRU;/frequency=9475.000",
        "direction": "BI"
    },
    {
        "neId": "5dcba0182f801779d84b1ab6",
        "userLabel": "WR8-88AF-15-6-SIG;/frequency=9475.000",
        "isMergedRoute": null,
        "ptpId": "5dcba0182f801779d84b1ab6_252051712",
        "ptpUserLabel": "WR8-88AF-15-6-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "BJM1-PSS32-ROADM-25",
        "type": "TP",
        "equipmentId": "5dcba0182f801779d84b1ab6_15.6",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "WR8-88AF-15-6",
        "id": "5dcba0182f801779d84b1ab6_252051712_WR8-88AF-15-6-SIG;/frequency=9475.000"
    },
    {
        "userLabel": "BJM1-PSS32-ROADM-25/OPSA-15-8-SIG--BJM1-PSS32-ROADM-25/WR8-88AF-15-6-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5dcba0182f801779d84b1ab6_252182784"
        ],
        "isSeparatedRoute": null,
        "id": "5dcba0182f801779d84b1ab6_252051712_5dcba0182f801779d84b1ab6_252182784",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5dcba0182f801779d84b1ab6_252051712"
        ]
    },
    {
        "neId": "5dcba0182f801779d84b1ab6",
        "userLabel": "OPSA-15-8-SIG;/frequency=/oms=1",
        "isMergedRoute": null,
        "ptpId": "5dcba0182f801779d84b1ab6_252182784",
        "ptpUserLabel": "OPSA-15-8-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "BJM1-PSS32-ROADM-25",
        "type": "TP",
        "equipmentId": "5dcba0182f801779d84b1ab6_15.8",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "OPSA-15-8",
        "id": "5dcba0182f801779d84b1ab6_252182784_OPSA-15-8-SIG;/frequency=/oms=1"
    },
    {
        "neId": "5dcba0182f801779d84b1ab6",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "OPS",
        "aEndNodes": [
            "5dcba0182f801779d84b1ab6_252182784_OPSA-15-8-SIG;/frequency=/oms=1"
        ],
        "isSeparatedRoute": true,
        "neUserLabel": "BJM1-PSS32-ROADM-25",
        "type": "XC",
        "equipmentId": "5dcba0182f801779d84b1ab6_15.8",
        "zEndNodes": [
            "5dcba0182f801779d84b1ab6_252183040_OPSA-15-8-A;/frequency=/oms=1",
            "5dcba0182f801779d84b1ab6_252183296_OPSA-15-8-B;/frequency=/oms=1"
        ],
        "separatedRouteElements": {
            "Spare": [
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "OPSA-15-8-B;/frequency=/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_252183296",
                    "ptpUserLabel": "OPSA-15-8-B",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_15.8",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OPSA-15-8",
                    "id": "5dcba0182f801779d84b1ab6_252183296_OPSA-15-8-B;/frequency=/oms=1"
                },
                {
                    "userLabel": "BJM1-PSS32-ROADM-25/AHPHG-15-5-LINE--BJM1-PSS32-ROADM-25/OPSA-15-8-B",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_251986944"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_251986944_5dcba0182f801779d84b1ab6_252183296",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_252183296"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-15-5-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_251986944",
                    "ptpUserLabel": "AHPHG-15-5-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_15.5",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-15-5",
                    "id": "5dcba0182f801779d84b1ab6_251986944_AHPHG-15-5-LINE;/oms=1"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_251986176_AHPHG-15-5-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "XC",
                    "equipmentId": "5dcba0182f801779d84b1ab6_15.5",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_251986944_AHPHG-15-5-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-15-5",
                    "id": "5dcba0182f801779d84b1ab6_251986176_AHPHG-15-5-SIG;/oms=1-5dcba0182f801779d84b1ab6_251986944_AHPHG-15-5-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-15-5-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_251986176",
                    "ptpUserLabel": "AHPHG-15-5-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_15.5",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-15-5",
                    "id": "5dcba0182f801779d84b1ab6_251986176_AHPHG-15-5-SIG;/oms=1"
                },
                {
                    "userLabel": "BJM1-PSS32-ROADM-25/AHPHG-15-4-SIG--BJM1-PSS32-ROADM-25/AHPHG-15-5-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_251920640"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_251920640_5dcba0182f801779d84b1ab6_251986176",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_251986176"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-15-4-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_251920640",
                    "ptpUserLabel": "AHPHG-15-4-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_15.4",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-15-4",
                    "id": "5dcba0182f801779d84b1ab6_251920640_AHPHG-15-4-SIG;/oms=1"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_251920640_AHPHG-15-4-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "XC",
                    "equipmentId": "5dcba0182f801779d84b1ab6_15.4",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_251921408_AHPHG-15-4-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-15-4",
                    "id": "5dcba0182f801779d84b1ab6_251920640_AHPHG-15-4-SIG;/oms=1-5dcba0182f801779d84b1ab6_251921408_AHPHG-15-4-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-15-4-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_251921408",
                    "ptpUserLabel": "AHPHG-15-4-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_15.4",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-15-4",
                    "id": "5dcba0182f801779d84b1ab6_251921408_AHPHG-15-4-LINE;/oms=1"
                },
                {
                    "userLabel": "IQY-RSJT-ROADM-46/AHPHG-2-4-LINE--BJM1-PSS32-ROADM-25/AHPHG-15-4-LINE",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb16e2f801779d84b207e_33817600"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_251921408_5dcbb16e2f801779d84b207e_33817600",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_251921408"
                    ]
                },
                {
                    "neId": "5dcbb16e2f801779d84b207e",
                    "userLabel": "AHPHG-2-4-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb16e2f801779d84b207e_33817600",
                    "ptpUserLabel": "AHPHG-2-4-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-RSJT-ROADM-46",
                    "type": "TP",
                    "equipmentId": "5dcbb16e2f801779d84b207e_2.4",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-2-4",
                    "id": "5dcbb16e2f801779d84b207e_33817600_AHPHG-2-4-LINE;/oms=1"
                },
                {
                    "neId": "5dcbb16e2f801779d84b207e",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb16e2f801779d84b207e_33816832_AHPHG-2-4-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-RSJT-ROADM-46",
                    "type": "XC",
                    "equipmentId": "5dcbb16e2f801779d84b207e_2.4",
                    "zEndNodes": [
                        "5dcbb16e2f801779d84b207e_33817600_AHPHG-2-4-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-2-4",
                    "id": "5dcbb16e2f801779d84b207e_33816832_AHPHG-2-4-SIG;/oms=1-5dcbb16e2f801779d84b207e_33817600_AHPHG-2-4-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcbb16e2f801779d84b207e",
                    "userLabel": "AHPHG-2-4-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb16e2f801779d84b207e_33816832",
                    "ptpUserLabel": "AHPHG-2-4-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-RSJT-ROADM-46",
                    "type": "TP",
                    "equipmentId": "5dcbb16e2f801779d84b207e_2.4",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-2-4",
                    "id": "5dcbb16e2f801779d84b207e_33816832_AHPHG-2-4-SIG;/oms=1"
                },
                {
                    "userLabel": "IQY-RSJT-ROADM-46/AHPHG-2-5-SIG--IQY-RSJT-ROADM-46/AHPHG-2-4-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb16e2f801779d84b207e_33882368"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb16e2f801779d84b207e_33816832_5dcbb16e2f801779d84b207e_33882368",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcbb16e2f801779d84b207e_33816832"
                    ]
                },
                {
                    "neId": "5dcbb16e2f801779d84b207e",
                    "userLabel": "AHPHG-2-5-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb16e2f801779d84b207e_33882368",
                    "ptpUserLabel": "AHPHG-2-5-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-RSJT-ROADM-46",
                    "type": "TP",
                    "equipmentId": "5dcbb16e2f801779d84b207e_2.5",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-2-5",
                    "id": "5dcbb16e2f801779d84b207e_33882368_AHPHG-2-5-SIG;/oms=1"
                },
                {
                    "neId": "5dcbb16e2f801779d84b207e",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb16e2f801779d84b207e_33882368_AHPHG-2-5-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-RSJT-ROADM-46",
                    "type": "XC",
                    "equipmentId": "5dcbb16e2f801779d84b207e_2.5",
                    "zEndNodes": [
                        "5dcbb16e2f801779d84b207e_33883136_AHPHG-2-5-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-2-5",
                    "id": "5dcbb16e2f801779d84b207e_33882368_AHPHG-2-5-SIG;/oms=1-5dcbb16e2f801779d84b207e_33883136_AHPHG-2-5-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcbb16e2f801779d84b207e",
                    "userLabel": "AHPHG-2-5-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb16e2f801779d84b207e_33883136",
                    "ptpUserLabel": "AHPHG-2-5-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-RSJT-ROADM-46",
                    "type": "TP",
                    "equipmentId": "5dcbb16e2f801779d84b207e_2.5",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-2-5",
                    "id": "5dcbb16e2f801779d84b207e_33883136_AHPHG-2-5-LINE;/oms=1"
                },
                {
                    "userLabel": "IQY-RSJT-ROADM-46/AHPHG-2-5-LINE--IQY-RSJT-ROADM-46/OPSA-2-8-B",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb16e2f801779d84b207e_33883136"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb16e2f801779d84b207e_33883136_5dcbb16e2f801779d84b207e_34079488",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcbb16e2f801779d84b207e_34079488"
                    ]
                },
                {
                    "neId": "5dcbb16e2f801779d84b207e",
                    "userLabel": "OPSA-2-8-B;/frequency=/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb16e2f801779d84b207e_34079488",
                    "ptpUserLabel": "OPSA-2-8-B",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-RSJT-ROADM-46",
                    "type": "TP",
                    "equipmentId": "5dcbb16e2f801779d84b207e_2.8",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OPSA-2-8",
                    "id": "5dcbb16e2f801779d84b207e_34079488_OPSA-2-8-B;/frequency=/oms=1"
                }
            ],
            "Main": [
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "OPSA-15-8-A;/frequency=/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_252183040",
                    "ptpUserLabel": "OPSA-15-8-A",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_15.8",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OPSA-15-8",
                    "id": "5dcba0182f801779d84b1ab6_252183040_OPSA-15-8-A;/frequency=/oms=1"
                },
                {
                    "userLabel": "BJM1-PSS32-ROADM-25/AHPHG-15-3-LINE--BJM1-PSS32-ROADM-25/OPSA-15-8-A",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_251855872"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_251855872_5dcba0182f801779d84b1ab6_252183040",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_252183040"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-15-3-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_251855872",
                    "ptpUserLabel": "AHPHG-15-3-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_15.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-15-3",
                    "id": "5dcba0182f801779d84b1ab6_251855872_AHPHG-15-3-LINE;/oms=1"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_251855104_AHPHG-15-3-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "XC",
                    "equipmentId": "5dcba0182f801779d84b1ab6_15.3",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_251855872_AHPHG-15-3-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-15-3",
                    "id": "5dcba0182f801779d84b1ab6_251855104_AHPHG-15-3-SIG;/oms=1-5dcba0182f801779d84b1ab6_251855872_AHPHG-15-3-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-15-3-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_251855104",
                    "ptpUserLabel": "AHPHG-15-3-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_15.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-15-3",
                    "id": "5dcba0182f801779d84b1ab6_251855104_AHPHG-15-3-SIG;/oms=1"
                },
                {
                    "userLabel": "BJM1-PSS32-ROADM-25/AHPHG-15-3-SIG--BJM1-PSS32-ROADM-25/AHPHG-15-2-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_251855104"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_251789568_5dcba0182f801779d84b1ab6_251855104",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_251789568"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-15-2-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_251789568",
                    "ptpUserLabel": "AHPHG-15-2-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_15.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-15-2",
                    "id": "5dcba0182f801779d84b1ab6_251789568_AHPHG-15-2-SIG;/oms=1"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_251789568_AHPHG-15-2-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "XC",
                    "equipmentId": "5dcba0182f801779d84b1ab6_15.2",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_251790336_AHPHG-15-2-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-15-2",
                    "id": "5dcba0182f801779d84b1ab6_251789568_AHPHG-15-2-SIG;/oms=1-5dcba0182f801779d84b1ab6_251790336_AHPHG-15-2-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-15-2-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_251790336",
                    "ptpUserLabel": "AHPHG-15-2-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_15.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-15-2",
                    "id": "5dcba0182f801779d84b1ab6_251790336_AHPHG-15-2-LINE;/oms=1"
                },
                {
                    "userLabel": "IQY-RSJT-ROADM-46/AHPHG-2-2-LINE--BJM1-PSS32-ROADM-25/AHPHG-15-2-LINE",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb16e2f801779d84b207e_33686528"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_251790336_5dcbb16e2f801779d84b207e_33686528",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_251790336"
                    ]
                },
                {
                    "neId": "5dcbb16e2f801779d84b207e",
                    "userLabel": "AHPHG-2-2-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb16e2f801779d84b207e_33686528",
                    "ptpUserLabel": "AHPHG-2-2-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-RSJT-ROADM-46",
                    "type": "TP",
                    "equipmentId": "5dcbb16e2f801779d84b207e_2.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-2-2",
                    "id": "5dcbb16e2f801779d84b207e_33686528_AHPHG-2-2-LINE;/oms=1"
                },
                {
                    "neId": "5dcbb16e2f801779d84b207e",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb16e2f801779d84b207e_33685760_AHPHG-2-2-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-RSJT-ROADM-46",
                    "type": "XC",
                    "equipmentId": "5dcbb16e2f801779d84b207e_2.2",
                    "zEndNodes": [
                        "5dcbb16e2f801779d84b207e_33686528_AHPHG-2-2-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-2-2",
                    "id": "5dcbb16e2f801779d84b207e_33685760_AHPHG-2-2-SIG;/oms=1-5dcbb16e2f801779d84b207e_33686528_AHPHG-2-2-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcbb16e2f801779d84b207e",
                    "userLabel": "AHPHG-2-2-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb16e2f801779d84b207e_33685760",
                    "ptpUserLabel": "AHPHG-2-2-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-RSJT-ROADM-46",
                    "type": "TP",
                    "equipmentId": "5dcbb16e2f801779d84b207e_2.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-2-2",
                    "id": "5dcbb16e2f801779d84b207e_33685760_AHPHG-2-2-SIG;/oms=1"
                },
                {
                    "userLabel": "IQY-RSJT-ROADM-46/AHPHG-2-3-SIG--IQY-RSJT-ROADM-46/AHPHG-2-2-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb16e2f801779d84b207e_33751296"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb16e2f801779d84b207e_33685760_5dcbb16e2f801779d84b207e_33751296",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcbb16e2f801779d84b207e_33685760"
                    ]
                },
                {
                    "neId": "5dcbb16e2f801779d84b207e",
                    "userLabel": "AHPHG-2-3-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb16e2f801779d84b207e_33751296",
                    "ptpUserLabel": "AHPHG-2-3-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-RSJT-ROADM-46",
                    "type": "TP",
                    "equipmentId": "5dcbb16e2f801779d84b207e_2.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-2-3",
                    "id": "5dcbb16e2f801779d84b207e_33751296_AHPHG-2-3-SIG;/oms=1"
                },
                {
                    "neId": "5dcbb16e2f801779d84b207e",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb16e2f801779d84b207e_33751296_AHPHG-2-3-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-RSJT-ROADM-46",
                    "type": "XC",
                    "equipmentId": "5dcbb16e2f801779d84b207e_2.3",
                    "zEndNodes": [
                        "5dcbb16e2f801779d84b207e_33752064_AHPHG-2-3-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-2-3",
                    "id": "5dcbb16e2f801779d84b207e_33751296_AHPHG-2-3-SIG;/oms=1-5dcbb16e2f801779d84b207e_33752064_AHPHG-2-3-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcbb16e2f801779d84b207e",
                    "userLabel": "AHPHG-2-3-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb16e2f801779d84b207e_33752064",
                    "ptpUserLabel": "AHPHG-2-3-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-RSJT-ROADM-46",
                    "type": "TP",
                    "equipmentId": "5dcbb16e2f801779d84b207e_2.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-2-3",
                    "id": "5dcbb16e2f801779d84b207e_33752064_AHPHG-2-3-LINE;/oms=1"
                },
                {
                    "userLabel": "IQY-RSJT-ROADM-46/AHPHG-2-3-LINE--IQY-RSJT-ROADM-46/OPSA-2-8-A",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb16e2f801779d84b207e_33752064"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb16e2f801779d84b207e_33752064_5dcbb16e2f801779d84b207e_34079232",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcbb16e2f801779d84b207e_34079232"
                    ]
                },
                {
                    "neId": "5dcbb16e2f801779d84b207e",
                    "userLabel": "OPSA-2-8-A;/frequency=/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb16e2f801779d84b207e_34079232",
                    "ptpUserLabel": "OPSA-2-8-A",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-RSJT-ROADM-46",
                    "type": "TP",
                    "equipmentId": "5dcbb16e2f801779d84b207e_2.8",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OPSA-2-8",
                    "id": "5dcbb16e2f801779d84b207e_34079232_OPSA-2-8-A;/frequency=/oms=1"
                }
            ]
        },
        "equipmentUserLabel": "OPSA-15-8",
        "id": "5dcba0182f801779d84b1ab6_252182784_OPSA-15-8-SIG;/frequency=/oms=1-5dcba0182f801779d84b1ab6_252183040_OPSA-15-8-A;/frequency=/oms=1-5dcba0182f801779d84b1ab6_252183296_OPSA-15-8-B;/frequency=/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5dcbb16e2f801779d84b207e",
        "userLabel": null,
        "isMergedRoute": true,
        "protectionType": "OPS",
        "aEndNodes": [
            "5dcbb16e2f801779d84b207e_34078976_OPSA-2-8-SIG;/frequency=/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "IQY-RSJT-ROADM-46",
        "type": "XC",
        "equipmentId": "5dcbb16e2f801779d84b207e_2.8",
        "zEndNodes": [
            "5dcbb16e2f801779d84b207e_34079232_OPSA-2-8-A;/frequency=/oms=1",
            "5dcbb16e2f801779d84b207e_34079488_OPSA-2-8-B;/frequency=/oms=1"
        ],
        "equipmentUserLabel": "OPSA-2-8",
        "id": "5dcbb16e2f801779d84b207e_34078976_OPSA-2-8-SIG;/frequency=/oms=1-5dcbb16e2f801779d84b207e_34079232_OPSA-2-8-A;/frequency=/oms=1-5dcbb16e2f801779d84b207e_34079488_OPSA-2-8-B;/frequency=/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5dcbb16e2f801779d84b207e",
        "userLabel": "OPSA-2-8-SIG;/frequency=/oms=1",
        "isMergedRoute": null,
        "ptpId": "5dcbb16e2f801779d84b207e_34078976",
        "ptpUserLabel": "OPSA-2-8-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "IQY-RSJT-ROADM-46",
        "type": "TP",
        "equipmentId": "5dcbb16e2f801779d84b207e_2.8",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "OPSA-2-8",
        "id": "5dcbb16e2f801779d84b207e_34078976_OPSA-2-8-SIG;/frequency=/oms=1"
    },
    {
        "userLabel": "IQY-RSJT-ROADM-46/WR8-88AF-2-6-SIG--IQY-RSJT-ROADM-46/OPSA-2-8-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5dcbb16e2f801779d84b207e_33947904"
        ],
        "isSeparatedRoute": null,
        "id": "5dcbb16e2f801779d84b207e_33947904_5dcbb16e2f801779d84b207e_34078976",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5dcbb16e2f801779d84b207e_34078976"
        ]
    },
    {
        "neId": "5dcbb16e2f801779d84b207e",
        "userLabel": "WR8-88AF-2-6-SIG;/frequency=9475.000",
        "isMergedRoute": null,
        "ptpId": "5dcbb16e2f801779d84b207e_33947904",
        "ptpUserLabel": "WR8-88AF-2-6-SIG",
        "isSeparatedRoute": true,
        "neUserLabel": "IQY-RSJT-ROADM-46",
        "type": "TP",
        "equipmentId": "5dcbb16e2f801779d84b207e_2.6",
        "separatedRouteElements": {
            "Tx": [
                {
                    "neId": "5dcbb16e2f801779d84b207e",
                    "userLabel": "TAKEOVER-1577443792701",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb16e2f801779d84b207e_33947904_WR8-88AF-2-6-SIG;/frequency=9475.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-RSJT-ROADM-46",
                    "type": "XC",
                    "equipmentId": "5dcbb16e2f801779d84b207e_2.6",
                    "zEndNodes": [
                        "5dcbb16e2f801779d84b207e_33948928_WR8-88AF-2-6-ADDIN2;/frequency=9475.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-2-6",
                    "id": "5dcbb16e2f801779d84b207e_33947904_WR8-88AF-2-6-SIG;/frequency=9475.000-5dcbb16e2f801779d84b207e_33948928_WR8-88AF-2-6-ADDIN2;/frequency=9475.000",
                    "direction": "BI"
                },
                {
                    "neId": "5dcbb16e2f801779d84b207e",
                    "userLabel": "WR8-88AF-2-6-ADDIN2;/frequency=9475.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb16e2f801779d84b207e_33948928",
                    "ptpUserLabel": "WR8-88AF-2-6-ADDIN2",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-RSJT-ROADM-46",
                    "type": "TP",
                    "equipmentId": "5dcbb16e2f801779d84b207e_2.6",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-2-6",
                    "id": "5dcbb16e2f801779d84b207e_33948928_WR8-88AF-2-6-ADDIN2;/frequency=9475.000"
                },
                {
                    "userLabel": "IQY-RSJT-ROADM-46/SFD44B-29-1-OMD--IQY-RSJT-ROADM-46/WR8-88AF-2-6-ADDIN2",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb16e2f801779d84b207e_486616320"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb16e2f801779d84b207e_33948928_5dcbb16e2f801779d84b207e_486616320",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5dcbb16e2f801779d84b207e_33948928"
                    ]
                }
            ],
            "Rx": [
                {
                    "neId": "5dcbb16e2f801779d84b207e",
                    "userLabel": "TAKEOVER-1577443792701",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb16e2f801779d84b207e_33948416_WR8-88AF-2-6-DROPOUT;/frequency=9475.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-RSJT-ROADM-46",
                    "type": "XC",
                    "equipmentId": "5dcbb16e2f801779d84b207e_2.6",
                    "zEndNodes": [
                        "5dcbb16e2f801779d84b207e_33947904_WR8-88AF-2-6-SIG;/frequency=9475.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-2-6",
                    "id": "5dcbb16e2f801779d84b207e_33948416_WR8-88AF-2-6-DROPOUT;/frequency=9475.000-5dcbb16e2f801779d84b207e_33947904_WR8-88AF-2-6-SIG;/frequency=9475.000",
                    "direction": "BI"
                },
                {
                    "neId": "5dcbb16e2f801779d84b207e",
                    "userLabel": "WR8-88AF-2-6-DROPOUT;/frequency=9475.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb16e2f801779d84b207e_33948416",
                    "ptpUserLabel": "WR8-88AF-2-6-DROPOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-RSJT-ROADM-46",
                    "type": "TP",
                    "equipmentId": "5dcbb16e2f801779d84b207e_2.6",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-2-6",
                    "id": "5dcbb16e2f801779d84b207e_33948416_WR8-88AF-2-6-DROPOUT;/frequency=9475.000"
                },
                {
                    "userLabel": "IQY-RSJT-ROADM-46/WR8-88AF-2-6-DROPOUT--IQY-RSJT-ROADM-46/ITLU-28-1-SIGIN",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb16e2f801779d84b207e_33948416"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb16e2f801779d84b207e_33948416_5dcbb16e2f801779d84b207e_469827840",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5dcbb16e2f801779d84b207e_469827840"
                    ]
                },
                {
                    "neId": "5dcbb16e2f801779d84b207e",
                    "userLabel": "ITLU-28-1-SIGIN;/frequency=9475.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb16e2f801779d84b207e_469827840",
                    "ptpUserLabel": "ITLU-28-1-SIGIN",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-RSJT-ROADM-46",
                    "type": "TP",
                    "equipmentId": "5dcbb16e2f801779d84b207e_28.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-28-1",
                    "id": "5dcbb16e2f801779d84b207e_469827840_ITLU-28-1-SIGIN;/frequency=9475.000"
                },
                {
                    "neId": "5dcbb16e2f801779d84b207e",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb16e2f801779d84b207e_469828352_ITLU-28-1-OOUT;/frequency=9475.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-RSJT-ROADM-46",
                    "type": "XC",
                    "equipmentId": "5dcbb16e2f801779d84b207e_28.1",
                    "zEndNodes": [
                        "5dcbb16e2f801779d84b207e_469827840_ITLU-28-1-SIGIN;/frequency=9475.000"
                    ],
                    "equipmentUserLabel": "ITLU-28-1",
                    "id": "5dcbb16e2f801779d84b207e_469828352_ITLU-28-1-OOUT;/frequency=9475.000-5dcbb16e2f801779d84b207e_469827840_ITLU-28-1-SIGIN;/frequency=9475.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5dcbb16e2f801779d84b207e",
                    "userLabel": "ITLU-28-1-OOUT;/frequency=9475.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb16e2f801779d84b207e_469828352",
                    "ptpUserLabel": "ITLU-28-1-OOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "IQY-RSJT-ROADM-46",
                    "type": "TP",
                    "equipmentId": "5dcbb16e2f801779d84b207e_28.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-28-1",
                    "id": "5dcbb16e2f801779d84b207e_469828352_ITLU-28-1-OOUT;/frequency=9475.000"
                },
                {
                    "userLabel": "IQY-RSJT-ROADM-46/ITLU-28-1-OOUT--IQY-RSJT-ROADM-46/SFD44B-29-1-OMD",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb16e2f801779d84b207e_469828352"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb16e2f801779d84b207e_469828352_5dcbb16e2f801779d84b207e_486616320",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5dcbb16e2f801779d84b207e_486616320"
                    ]
                }
            ]
        },
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "WR8-88AF-2-6",
        "id": "5dcbb16e2f801779d84b207e_33947904_WR8-88AF-2-6-SIG;/frequency=9475.000"
    },
    {
        "neId": "5dcbb16e2f801779d84b207e",
        "userLabel": "SFD44B-29-1-OMD;/frequency=9475.000",
        "isMergedRoute": true,
        "ptpId": "5dcbb16e2f801779d84b207e_486616320",
        "ptpUserLabel": "SFD44B-29-1-OMD",
        "isSeparatedRoute": null,
        "neUserLabel": "IQY-RSJT-ROADM-46",
        "type": "TP",
        "equipmentId": "5dcbb16e2f801779d84b207e_29.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44B-29-1",
        "id": "5dcbb16e2f801779d84b207e_486616320_SFD44B-29-1-OMD;/frequency=9475.000"
    },
    {
        "neId": "5dcbb16e2f801779d84b207e",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5dcbb16e2f801779d84b207e_486608384_SFD44B-29-1-9475;/frequency=9475.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "IQY-RSJT-ROADM-46",
        "type": "XC",
        "equipmentId": "5dcbb16e2f801779d84b207e_29.1",
        "zEndNodes": [
            "5dcbb16e2f801779d84b207e_486616320_SFD44B-29-1-OMD;/frequency=9475.000"
        ],
        "equipmentUserLabel": "SFD44B-29-1",
        "id": "5dcbb16e2f801779d84b207e_486608384_SFD44B-29-1-9475;/frequency=9475.000-5dcbb16e2f801779d84b207e_486616320_SFD44B-29-1-OMD;/frequency=9475.000",
        "direction": "BI"
    },
    {
        "neId": "5dcbb16e2f801779d84b207e",
        "userLabel": "SFD44B-29-1-9475;/frequency=9475.000",
        "isMergedRoute": null,
        "ptpId": "5dcbb16e2f801779d84b207e_486608384",
        "ptpUserLabel": "SFD44B-29-1-9475",
        "isSeparatedRoute": null,
        "neUserLabel": "IQY-RSJT-ROADM-46",
        "type": "TP",
        "equipmentId": "5dcbb16e2f801779d84b207e_29.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44B-29-1",
        "id": "5dcbb16e2f801779d84b207e_486608384_SFD44B-29-1-9475;/frequency=9475.000"
    },
    {
        "userLabel": "IQY-RSJT-ROADM-46/SFD44B-29-1-9475--IQY-RSJT-ROADM-46/260SCX2-2-12-L1",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5dcbb16e2f801779d84b207e_486608384"
        ],
        "isSeparatedRoute": null,
        "id": "5dcbb16e2f801779d84b207e_34341120_5dcbb16e2f801779d84b207e_486608384",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5dcbb16e2f801779d84b207e_34341120"
        ]
    },
    {
        "neId": "5dcbb16e2f801779d84b207e",
        "userLabel": "260SCX2-2-12-L1;/otu4=1/odu4=1",
        "isMergedRoute": null,
        "ptpId": "5dcbb16e2f801779d84b207e_34341120",
        "ptpUserLabel": "260SCX2-2-12-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "IQY-RSJT-ROADM-46",
        "type": "TP",
        "equipmentId": "5dcbb16e2f801779d84b207e_2.12",
        "tpType": "CTP",
        "layerRate": "ODU4",
        "equipmentUserLabel": "260SCX2-2-12",
        "id": "5dcbb16e2f801779d84b207e_34341120_260SCX2-2-12-L1;/otu4=1/odu4=1"
    },
    {
        "neId": "5dcbb16e2f801779d84b207e",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5dcbb16e2f801779d84b207e_34341376_260SCX2-2-12-C1;/odu4=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "IQY-RSJT-ROADM-46",
        "type": "XC",
        "equipmentId": "5dcbb16e2f801779d84b207e_2.12",
        "zEndNodes": [
            "5dcbb16e2f801779d84b207e_34341120_260SCX2-2-12-L1;/otu4=1/odu4=1"
        ],
        "equipmentUserLabel": "260SCX2-2-12",
        "id": "5dcbb16e2f801779d84b207e_34341376_260SCX2-2-12-C1;/odu4=1-5dcbb16e2f801779d84b207e_34341120_260SCX2-2-12-L1;/otu4=1/odu4=1",
        "direction": "BI"
    },
    {
        "neId": "5dcbb16e2f801779d84b207e",
        "userLabel": "260SCX2-2-12-C1;/odu4=1",
        "isMergedRoute": null,
        "ptpId": "5dcbb16e2f801779d84b207e_34341376",
        "ptpUserLabel": "260SCX2-2-12-C1",
        "isSeparatedRoute": null,
        "neUserLabel": "IQY-RSJT-ROADM-46",
        "type": "TP",
        "equipmentId": "5dcbb16e2f801779d84b207e_2.12",
        "tpType": "CTP",
        "layerRate": "ODU4",
        "equipmentUserLabel": "260SCX2-2-12",
        "id": "5dcbb16e2f801779d84b207e_34341376_260SCX2-2-12-C1;/odu4=1"
    }
];

const flowInfo_147_130SNX10_3_2_C1_OTS_Fiber = [
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPHG-4-15-LINE",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68092928",
        "ptpUserLabel": "AHPHG-4-15-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.15",
        "tpType": "PTP",
        "layerRate": "OTS",
        "equipmentUserLabel": "AHPHG-4-15",
        "id": "5e16faf5a855d35c02adf802_68092928"
    },
    {
        "userLabel": "135.252.222.129/AHPHG-4-15-LINE--135.252.222.147/AHPHG-3-16-LINE",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68092928"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_51381248_5e16faf5a855d35c02adf802_68092928",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51381248"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPHG-3-16-LINE",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51381248",
        "ptpUserLabel": "AHPHG-3-16-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.16",
        "tpType": "PTP",
        "layerRate": "OTS",
        "equipmentUserLabel": "AHPHG-3-16",
        "id": "5e16faeaa855d35c02adf800_51381248"
    }
];
const flowInfo_147_130SNX10_3_2_C1_OTS = [
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPHG-4-15-LINE;/ots=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68092928",
        "ptpUserLabel": "AHPHG-4-15-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.15",
        "tpType": "CTP",
        "layerRate": "OTS",
        "equipmentUserLabel": "AHPHG-4-15",
        "id": "5e16faf5a855d35c02adf802_68092928_AHPHG-4-15-LINE;/ots=1"
    },
    {
        "userLabel": "135.252.222.129/AHPHG-4-15-LINE--135.252.222.147/AHPHG-3-16-LINE",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68092928"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_51381248_5e16faf5a855d35c02adf802_68092928",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51381248"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPHG-3-16-LINE",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51381248",
        "ptpUserLabel": "AHPHG-3-16-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.16",
        "tpType": "PTP",
        "layerRate": "OTS",
        "equipmentUserLabel": "AHPHG-3-16",
        "id": "5e16faeaa855d35c02adf800_51381248"
    }
];
const flowInfo_147_130SNX10_3_2_C1_OS_Fiber = [
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "SFD44-25-1-9170",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_419507200",
        "ptpUserLabel": "SFD44-25-1-9170",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_25.1",
        "tpType": "PTP",
        "layerRate": "OS",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5e16faeaa855d35c02adf800_419507200"
    },
    {
        "userLabel": "135.252.222.147/SFD44-25-1-9170--135.252.222.147/130SNX10-3-2-L1",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_419507200"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_419507200_5e16faeaa855d35c02adf800_50462976",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_50462976"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "130SNX10-3-2-L1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_50462976",
        "ptpUserLabel": "130SNX10-3-2-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.2",
        "tpType": "PTP",
        "layerRate": "OS",
        "equipmentUserLabel": "130SNX10-3-2",
        "id": "5e16faeaa855d35c02adf800_50462976"
    }
];
const flowInfo_147_130SNX10_3_2_C1_OMS_Fiber = [
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "SFD44-25-1-OMD",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_419507456",
        "ptpUserLabel": "SFD44-25-1-OMD",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_25.1",
        "tpType": "PTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5e16faeaa855d35c02adf800_419507456"
    },
    {
        "userLabel": "135.252.222.147/SFD44-25-1-OMD--135.252.222.147/WR8-88AF-3-10-ADDIN1",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_419507456"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_419507456_5e16faeaa855d35c02adf800_50988032",
        "type": "TL",
        "direction": "UNI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_50988032"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "WR8-88AF-3-10-ADDIN1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_50988032",
        "ptpUserLabel": "WR8-88AF-3-10-ADDIN1",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.10",
        "tpType": "PTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "WR8-88AF-3-10",
        "id": "5e16faeaa855d35c02adf800_50988032"
    }
];
const flowInfo_147_130SNX10_3_2_C1_OMS = [
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "WR8-88AF-4-10-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_67764480",
        "ptpUserLabel": "WR8-88AF-4-10-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.10",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "WR8-88AF-4-10",
        "id": "5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/oms=1"
    },
    {
        "userLabel": "135.252.222.129/WR8-88AF-4-10-SIG--135.252.222.129/AHPLG-4-14-LINE",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_67764480"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faf5a855d35c02adf802_67764480_5e16faf5a855d35c02adf802_68027392",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68027392"
        ]
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPLG-4-14-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68027392",
        "ptpUserLabel": "AHPLG-4-14-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-4-14",
        "id": "5e16faf5a855d35c02adf802_68027392_AHPLG-4-14-LINE;/oms=1"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68026624_AHPLG-4-14-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "XC",
        "equipmentId": "5e16faf5a855d35c02adf802_4.14",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68027392_AHPLG-4-14-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-4-14",
        "id": "5e16faf5a855d35c02adf802_68026624_AHPLG-4-14-SIG;/oms=1-5e16faf5a855d35c02adf802_68027392_AHPLG-4-14-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPLG-4-14-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68026624",
        "ptpUserLabel": "AHPLG-4-14-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-4-14",
        "id": "5e16faf5a855d35c02adf802_68026624_AHPLG-4-14-SIG;/oms=1"
    },
    {
        "userLabel": "135.252.222.129/AHPHG-4-15-SIG--135.252.222.129/AHPLG-4-14-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68092160"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faf5a855d35c02adf802_68026624_5e16faf5a855d35c02adf802_68092160",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68026624"
        ]
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPHG-4-15-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68092160",
        "ptpUserLabel": "AHPHG-4-15-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.15",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-4-15",
        "id": "5e16faf5a855d35c02adf802_68092160_AHPHG-4-15-SIG;/oms=1"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68092160_AHPHG-4-15-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "XC",
        "equipmentId": "5e16faf5a855d35c02adf802_4.15",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68092928_AHPHG-4-15-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPHG-4-15",
        "id": "5e16faf5a855d35c02adf802_68092160_AHPHG-4-15-SIG;/oms=1-5e16faf5a855d35c02adf802_68092928_AHPHG-4-15-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPHG-4-15-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68092928",
        "ptpUserLabel": "AHPHG-4-15-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.15",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-4-15",
        "id": "5e16faf5a855d35c02adf802_68092928_AHPHG-4-15-LINE;/oms=1"
    },
    {
        "userLabel": "135.252.222.129/AHPHG-4-15-LINE--135.252.222.147/AHPHG-3-16-LINE",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68092928"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_51381248_5e16faf5a855d35c02adf802_68092928",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51381248"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPHG-3-16-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51381248",
        "ptpUserLabel": "AHPHG-3-16-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.16",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-3-16",
        "id": "5e16faeaa855d35c02adf800_51381248_AHPHG-3-16-LINE;/oms=1"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51380480_AHPHG-3-16-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "XC",
        "equipmentId": "5e16faeaa855d35c02adf800_3.16",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51381248_AHPHG-3-16-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPHG-3-16",
        "id": "5e16faeaa855d35c02adf800_51380480_AHPHG-3-16-SIG;/oms=1-5e16faeaa855d35c02adf800_51381248_AHPHG-3-16-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPHG-3-16-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51380480",
        "ptpUserLabel": "AHPHG-3-16-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.16",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-3-16",
        "id": "5e16faeaa855d35c02adf800_51380480_AHPHG-3-16-SIG;/oms=1"
    },
    {
        "userLabel": "135.252.222.147/AHPLG-3-14-SIG--135.252.222.147/AHPHG-3-16-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51249408"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_51249408_5e16faeaa855d35c02adf800_51380480",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51380480"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPLG-3-14-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51249408",
        "ptpUserLabel": "AHPLG-3-14-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-3-14",
        "id": "5e16faeaa855d35c02adf800_51249408_AHPLG-3-14-SIG;/oms=1"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51249408_AHPLG-3-14-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "XC",
        "equipmentId": "5e16faeaa855d35c02adf800_3.14",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51250176_AHPLG-3-14-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-3-14",
        "id": "5e16faeaa855d35c02adf800_51249408_AHPLG-3-14-SIG;/oms=1-5e16faeaa855d35c02adf800_51250176_AHPLG-3-14-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPLG-3-14-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51250176",
        "ptpUserLabel": "AHPLG-3-14-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-3-14",
        "id": "5e16faeaa855d35c02adf800_51250176_AHPLG-3-14-LINE;/oms=1"
    },
    {
        "userLabel": "135.252.222.147/AHPLG-3-14-LINE--135.252.222.147/WR8-88AF-3-10-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51250176"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_50987264_5e16faeaa855d35c02adf800_51250176",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_50987264"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "WR8-88AF-3-10-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_50987264",
        "ptpUserLabel": "WR8-88AF-3-10-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.10",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "WR8-88AF-3-10",
        "id": "5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/oms=1"
    }
];
const flowInfo_147_130SNX10_3_2_C1_OCH = [
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "130SNX10-4-6-L1;/frequency=/tunable-number=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_67502336",
        "ptpUserLabel": "130SNX10-4-6-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.6",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "130SNX10-4-6",
        "id": "5e16faf5a855d35c02adf802_67502336_130SNX10-4-6-L1;/frequency=/tunable-number=1"
    },
    {
        "userLabel": "135.252.222.129/130SNX10-4-6-L1--135.252.222.129/SFD44-42-1-9170",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_67502336"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faf5a855d35c02adf802_67502336_5e16faf5a855d35c02adf802_704719872",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_704719872"
        ]
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "SFD44-42-1-9170;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_704719872",
        "ptpUserLabel": "SFD44-42-1-9170",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_42.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-42-1",
        "id": "5e16faf5a855d35c02adf802_704719872_SFD44-42-1-9170;/frequency=9170.000"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_704719872_SFD44-42-1-9170;/frequency=9170.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "XC",
        "equipmentId": "5e16faf5a855d35c02adf802_42.1",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_704720128_SFD44-42-1-OMD;/frequency=9170.000"
        ],
        "equipmentUserLabel": "SFD44-42-1",
        "id": "5e16faf5a855d35c02adf802_704719872_SFD44-42-1-9170;/frequency=9170.000-5e16faf5a855d35c02adf802_704720128_SFD44-42-1-OMD;/frequency=9170.000",
        "direction": "BI"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "SFD44-42-1-OMD;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_704720128",
        "ptpUserLabel": "SFD44-42-1-OMD",
        "isSeparatedRoute": true,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_42.1",
        "separatedRouteElements": {
            "Tx": [
                {
                    "userLabel": "135.252.222.129/SFD44-42-1-OMD--135.252.222.129/WR8-88AF-4-10-ADDIN1",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_704720128"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faf5a855d35c02adf802_67765248_5e16faf5a855d35c02adf802_704720128",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_67765248"
                    ]
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "WR8-88AF-4-10-ADDIN1;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faf5a855d35c02adf802_67765248",
                    "ptpUserLabel": "WR8-88AF-4-10-ADDIN1",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "TP",
                    "equipmentId": "5e16faf5a855d35c02adf802_4.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-4-10",
                    "id": "5e16faf5a855d35c02adf802_67765248_WR8-88AF-4-10-ADDIN1;/frequency=9170.000"
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "TAKEOVER-1578564765781",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_67765248_WR8-88AF-4-10-ADDIN1;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "XC",
                    "equipmentId": "5e16faf5a855d35c02adf802_4.10",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-4-10",
                    "id": "5e16faf5a855d35c02adf802_67765248_WR8-88AF-4-10-ADDIN1;/frequency=9170.000-5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000",
                    "direction": "UNI"
                }
            ],
            "Rx": [
                {
                    "userLabel": "135.252.222.129/ITLU-44-1-EOUT--135.252.222.129/SFD44-42-1-OMD",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_738263552"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faf5a855d35c02adf802_704720128_5e16faf5a855d35c02adf802_738263552",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_704720128"
                    ]
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "ITLU-44-1-EOUT;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faf5a855d35c02adf802_738263552",
                    "ptpUserLabel": "ITLU-44-1-EOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "TP",
                    "equipmentId": "5e16faf5a855d35c02adf802_44.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-44-1",
                    "id": "5e16faf5a855d35c02adf802_738263552_ITLU-44-1-EOUT;/frequency=9170.000"
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_738263296_ITLU-44-1-SIGIN;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "XC",
                    "equipmentId": "5e16faf5a855d35c02adf802_44.1",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_738263552_ITLU-44-1-EOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "ITLU-44-1",
                    "id": "5e16faf5a855d35c02adf802_738263296_ITLU-44-1-SIGIN;/frequency=9170.000-5e16faf5a855d35c02adf802_738263552_ITLU-44-1-EOUT;/frequency=9170.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "ITLU-44-1-SIGIN;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faf5a855d35c02adf802_738263296",
                    "ptpUserLabel": "ITLU-44-1-SIGIN",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "TP",
                    "equipmentId": "5e16faf5a855d35c02adf802_44.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-44-1",
                    "id": "5e16faf5a855d35c02adf802_738263296_ITLU-44-1-SIGIN;/frequency=9170.000"
                },
                {
                    "userLabel": "135.252.222.129/WR8-88AF-4-10-DROPOUT--135.252.222.129/ITLU-44-1-SIGIN",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_67764992"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faf5a855d35c02adf802_67764992_5e16faf5a855d35c02adf802_738263296",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_738263296"
                    ]
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "WR8-88AF-4-10-DROPOUT;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faf5a855d35c02adf802_67764992",
                    "ptpUserLabel": "WR8-88AF-4-10-DROPOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "TP",
                    "equipmentId": "5e16faf5a855d35c02adf802_4.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-4-10",
                    "id": "5e16faf5a855d35c02adf802_67764992_WR8-88AF-4-10-DROPOUT;/frequency=9170.000"
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "TAKEOVER-1578564765781",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "XC",
                    "equipmentId": "5e16faf5a855d35c02adf802_4.10",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_67764992_WR8-88AF-4-10-DROPOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-4-10",
                    "id": "5e16faf5a855d35c02adf802_67764992_WR8-88AF-4-10-DROPOUT;/frequency=9170.000-5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000",
                    "direction": "UNI"
                }
            ]
        },
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-42-1",
        "id": "5e16faf5a855d35c02adf802_704720128_SFD44-42-1-OMD;/frequency=9170.000"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "WR8-88AF-4-10-SIG;/frequency=9170.000",
        "isMergedRoute": true,
        "ptpId": "5e16faf5a855d35c02adf802_67764480",
        "ptpUserLabel": "WR8-88AF-4-10-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.10",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "WR8-88AF-4-10",
        "id": "5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000"
    },
    {
        "userLabel": "135.252.222.129/WR8-88AF-4-10-SIG--135.252.222.129/AHPLG-4-14-LINE",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_67764480"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faf5a855d35c02adf802_67764480_5e16faf5a855d35c02adf802_68027392",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68027392"
        ]
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPLG-4-14-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68027392",
        "ptpUserLabel": "AHPLG-4-14-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-4-14",
        "id": "5e16faf5a855d35c02adf802_68027392_AHPLG-4-14-LINE;/oms=1"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68026624_AHPLG-4-14-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "XC",
        "equipmentId": "5e16faf5a855d35c02adf802_4.14",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68027392_AHPLG-4-14-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-4-14",
        "id": "5e16faf5a855d35c02adf802_68026624_AHPLG-4-14-SIG;/oms=1-5e16faf5a855d35c02adf802_68027392_AHPLG-4-14-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPLG-4-14-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68026624",
        "ptpUserLabel": "AHPLG-4-14-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-4-14",
        "id": "5e16faf5a855d35c02adf802_68026624_AHPLG-4-14-SIG;/oms=1"
    },
    {
        "userLabel": "135.252.222.129/AHPHG-4-15-SIG--135.252.222.129/AHPLG-4-14-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68092160"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faf5a855d35c02adf802_68026624_5e16faf5a855d35c02adf802_68092160",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68026624"
        ]
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPHG-4-15-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68092160",
        "ptpUserLabel": "AHPHG-4-15-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.15",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-4-15",
        "id": "5e16faf5a855d35c02adf802_68092160_AHPHG-4-15-SIG;/oms=1"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68092160_AHPHG-4-15-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "XC",
        "equipmentId": "5e16faf5a855d35c02adf802_4.15",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68092928_AHPHG-4-15-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPHG-4-15",
        "id": "5e16faf5a855d35c02adf802_68092160_AHPHG-4-15-SIG;/oms=1-5e16faf5a855d35c02adf802_68092928_AHPHG-4-15-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPHG-4-15-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68092928",
        "ptpUserLabel": "AHPHG-4-15-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.15",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-4-15",
        "id": "5e16faf5a855d35c02adf802_68092928_AHPHG-4-15-LINE;/oms=1"
    },
    {
        "userLabel": "135.252.222.129/AHPHG-4-15-LINE--135.252.222.147/AHPHG-3-16-LINE",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68092928"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_51381248_5e16faf5a855d35c02adf802_68092928",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51381248"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPHG-3-16-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51381248",
        "ptpUserLabel": "AHPHG-3-16-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.16",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-3-16",
        "id": "5e16faeaa855d35c02adf800_51381248_AHPHG-3-16-LINE;/oms=1"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51380480_AHPHG-3-16-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "XC",
        "equipmentId": "5e16faeaa855d35c02adf800_3.16",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51381248_AHPHG-3-16-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPHG-3-16",
        "id": "5e16faeaa855d35c02adf800_51380480_AHPHG-3-16-SIG;/oms=1-5e16faeaa855d35c02adf800_51381248_AHPHG-3-16-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPHG-3-16-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51380480",
        "ptpUserLabel": "AHPHG-3-16-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.16",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-3-16",
        "id": "5e16faeaa855d35c02adf800_51380480_AHPHG-3-16-SIG;/oms=1"
    },
    {
        "userLabel": "135.252.222.147/AHPLG-3-14-SIG--135.252.222.147/AHPHG-3-16-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51249408"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_51249408_5e16faeaa855d35c02adf800_51380480",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51380480"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPLG-3-14-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51249408",
        "ptpUserLabel": "AHPLG-3-14-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-3-14",
        "id": "5e16faeaa855d35c02adf800_51249408_AHPLG-3-14-SIG;/oms=1"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51249408_AHPLG-3-14-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "XC",
        "equipmentId": "5e16faeaa855d35c02adf800_3.14",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51250176_AHPLG-3-14-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-3-14",
        "id": "5e16faeaa855d35c02adf800_51249408_AHPLG-3-14-SIG;/oms=1-5e16faeaa855d35c02adf800_51250176_AHPLG-3-14-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPLG-3-14-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51250176",
        "ptpUserLabel": "AHPLG-3-14-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-3-14",
        "id": "5e16faeaa855d35c02adf800_51250176_AHPLG-3-14-LINE;/oms=1"
    },
    {
        "userLabel": "135.252.222.147/AHPLG-3-14-LINE--135.252.222.147/WR8-88AF-3-10-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51250176"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_50987264_5e16faeaa855d35c02adf800_51250176",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_50987264"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "WR8-88AF-3-10-SIG;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_50987264",
        "ptpUserLabel": "WR8-88AF-3-10-SIG",
        "isSeparatedRoute": true,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.10",
        "separatedRouteElements": {
            "Tx": [
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "TAKEOVER-1578564765781",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "XC",
                    "equipmentId": "5e16faeaa855d35c02adf800_3.10",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_50987776_WR8-88AF-3-10-DROPOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-3-10",
                    "id": "5e16faeaa855d35c02adf800_50987776_WR8-88AF-3-10-DROPOUT;/frequency=9170.000-5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "WR8-88AF-3-10-DROPOUT;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faeaa855d35c02adf800_50987776",
                    "ptpUserLabel": "WR8-88AF-3-10-DROPOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "TP",
                    "equipmentId": "5e16faeaa855d35c02adf800_3.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-3-10",
                    "id": "5e16faeaa855d35c02adf800_50987776_WR8-88AF-3-10-DROPOUT;/frequency=9170.000"
                },
                {
                    "userLabel": "135.252.222.147/WR8-88AF-3-10-DROPOUT--135.252.222.147/ITLU-27-1-SIGIN",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_50987776"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faeaa855d35c02adf800_453050624_5e16faeaa855d35c02adf800_50987776",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_453050624"
                    ]
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "ITLU-27-1-SIGIN;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faeaa855d35c02adf800_453050624",
                    "ptpUserLabel": "ITLU-27-1-SIGIN",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "TP",
                    "equipmentId": "5e16faeaa855d35c02adf800_27.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-27-1",
                    "id": "5e16faeaa855d35c02adf800_453050624_ITLU-27-1-SIGIN;/frequency=9170.000"
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_453050624_ITLU-27-1-SIGIN;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "XC",
                    "equipmentId": "5e16faeaa855d35c02adf800_27.1",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_453050880_ITLU-27-1-EOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "ITLU-27-1",
                    "id": "5e16faeaa855d35c02adf800_453050624_ITLU-27-1-SIGIN;/frequency=9170.000-5e16faeaa855d35c02adf800_453050880_ITLU-27-1-EOUT;/frequency=9170.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "ITLU-27-1-EOUT;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faeaa855d35c02adf800_453050880",
                    "ptpUserLabel": "ITLU-27-1-EOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "TP",
                    "equipmentId": "5e16faeaa855d35c02adf800_27.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-27-1",
                    "id": "5e16faeaa855d35c02adf800_453050880_ITLU-27-1-EOUT;/frequency=9170.000"
                },
                {
                    "userLabel": "135.252.222.147/ITLU-27-1-EOUT--135.252.222.147/SFD44-25-1-OMD",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_453050880"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faeaa855d35c02adf800_419507456_5e16faeaa855d35c02adf800_453050880",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_419507456"
                    ]
                }
            ],
            "Rx": [
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "TAKEOVER-1578564765781",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_50988032_WR8-88AF-3-10-ADDIN1;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "XC",
                    "equipmentId": "5e16faeaa855d35c02adf800_3.10",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-3-10",
                    "id": "5e16faeaa855d35c02adf800_50988032_WR8-88AF-3-10-ADDIN1;/frequency=9170.000-5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "WR8-88AF-3-10-ADDIN1;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faeaa855d35c02adf800_50988032",
                    "ptpUserLabel": "WR8-88AF-3-10-ADDIN1",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "TP",
                    "equipmentId": "5e16faeaa855d35c02adf800_3.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-3-10",
                    "id": "5e16faeaa855d35c02adf800_50988032_WR8-88AF-3-10-ADDIN1;/frequency=9170.000"
                },
                {
                    "userLabel": "135.252.222.147/SFD44-25-1-OMD--135.252.222.147/WR8-88AF-3-10-ADDIN1",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_419507456"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faeaa855d35c02adf800_419507456_5e16faeaa855d35c02adf800_50988032",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_50988032"
                    ]
                }
            ]
        },
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "WR8-88AF-3-10",
        "id": "5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "SFD44-25-1-OMD;/frequency=9170.000",
        "isMergedRoute": true,
        "ptpId": "5e16faeaa855d35c02adf800_419507456",
        "ptpUserLabel": "SFD44-25-1-OMD",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_25.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5e16faeaa855d35c02adf800_419507456_SFD44-25-1-OMD;/frequency=9170.000"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_419507200_SFD44-25-1-9170;/frequency=9170.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "XC",
        "equipmentId": "5e16faeaa855d35c02adf800_25.1",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_419507456_SFD44-25-1-OMD;/frequency=9170.000"
        ],
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5e16faeaa855d35c02adf800_419507200_SFD44-25-1-9170;/frequency=9170.000-5e16faeaa855d35c02adf800_419507456_SFD44-25-1-OMD;/frequency=9170.000",
        "direction": "BI"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "SFD44-25-1-9170;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_419507200",
        "ptpUserLabel": "SFD44-25-1-9170",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_25.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5e16faeaa855d35c02adf800_419507200_SFD44-25-1-9170;/frequency=9170.000"
    },
    {
        "userLabel": "135.252.222.147/SFD44-25-1-9170--135.252.222.147/130SNX10-3-2-L1",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_419507200"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_419507200_5e16faeaa855d35c02adf800_50462976",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_50462976"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "130SNX10-3-2-L1;/frequency=/tunable-number=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_50462976",
        "ptpUserLabel": "130SNX10-3-2-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.2",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "130SNX10-3-2",
        "id": "5e16faeaa855d35c02adf800_50462976_130SNX10-3-2-L1;/frequency=/tunable-number=1"
    }
];
const flowInfo_147_130SNX10_3_2_C1_OTU = [
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "130SNX10-4-6-L1;/otu4=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_67502336",
        "ptpUserLabel": "130SNX10-4-6-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.6",
        "tpType": "CTP",
        "layerRate": "OTU4",
        "equipmentUserLabel": "130SNX10-4-6",
        "id": "5e16faf5a855d35c02adf802_67502336_130SNX10-4-6-L1;/otu4=1"
    },
    {
        "userLabel": "135.252.222.129/130SNX10-4-6-L1--135.252.222.129/SFD44-42-1-9170",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_67502336"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faf5a855d35c02adf802_67502336_5e16faf5a855d35c02adf802_704719872",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_704719872"
        ]
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "SFD44-42-1-9170;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_704719872",
        "ptpUserLabel": "SFD44-42-1-9170",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_42.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-42-1",
        "id": "5e16faf5a855d35c02adf802_704719872_SFD44-42-1-9170;/frequency=9170.000"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_704719872_SFD44-42-1-9170;/frequency=9170.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "XC",
        "equipmentId": "5e16faf5a855d35c02adf802_42.1",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_704720128_SFD44-42-1-OMD;/frequency=9170.000"
        ],
        "equipmentUserLabel": "SFD44-42-1",
        "id": "5e16faf5a855d35c02adf802_704719872_SFD44-42-1-9170;/frequency=9170.000-5e16faf5a855d35c02adf802_704720128_SFD44-42-1-OMD;/frequency=9170.000",
        "direction": "BI"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "SFD44-42-1-OMD;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_704720128",
        "ptpUserLabel": "SFD44-42-1-OMD",
        "isSeparatedRoute": true,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_42.1",
        "separatedRouteElements": {
            "Tx": [
                {
                    "userLabel": "135.252.222.129/SFD44-42-1-OMD--135.252.222.129/WR8-88AF-4-10-ADDIN1",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_704720128"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faf5a855d35c02adf802_67765248_5e16faf5a855d35c02adf802_704720128",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_67765248"
                    ]
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "WR8-88AF-4-10-ADDIN1;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faf5a855d35c02adf802_67765248",
                    "ptpUserLabel": "WR8-88AF-4-10-ADDIN1",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "TP",
                    "equipmentId": "5e16faf5a855d35c02adf802_4.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-4-10",
                    "id": "5e16faf5a855d35c02adf802_67765248_WR8-88AF-4-10-ADDIN1;/frequency=9170.000"
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "TAKEOVER-1578564765781",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_67765248_WR8-88AF-4-10-ADDIN1;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "XC",
                    "equipmentId": "5e16faf5a855d35c02adf802_4.10",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-4-10",
                    "id": "5e16faf5a855d35c02adf802_67765248_WR8-88AF-4-10-ADDIN1;/frequency=9170.000-5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000",
                    "direction": "UNI"
                }
            ],
            "Rx": [
                {
                    "userLabel": "135.252.222.129/ITLU-44-1-EOUT--135.252.222.129/SFD44-42-1-OMD",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_738263552"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faf5a855d35c02adf802_704720128_5e16faf5a855d35c02adf802_738263552",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_704720128"
                    ]
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "ITLU-44-1-EOUT;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faf5a855d35c02adf802_738263552",
                    "ptpUserLabel": "ITLU-44-1-EOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "TP",
                    "equipmentId": "5e16faf5a855d35c02adf802_44.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-44-1",
                    "id": "5e16faf5a855d35c02adf802_738263552_ITLU-44-1-EOUT;/frequency=9170.000"
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_738263296_ITLU-44-1-SIGIN;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "XC",
                    "equipmentId": "5e16faf5a855d35c02adf802_44.1",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_738263552_ITLU-44-1-EOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "ITLU-44-1",
                    "id": "5e16faf5a855d35c02adf802_738263296_ITLU-44-1-SIGIN;/frequency=9170.000-5e16faf5a855d35c02adf802_738263552_ITLU-44-1-EOUT;/frequency=9170.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "ITLU-44-1-SIGIN;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faf5a855d35c02adf802_738263296",
                    "ptpUserLabel": "ITLU-44-1-SIGIN",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "TP",
                    "equipmentId": "5e16faf5a855d35c02adf802_44.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-44-1",
                    "id": "5e16faf5a855d35c02adf802_738263296_ITLU-44-1-SIGIN;/frequency=9170.000"
                },
                {
                    "userLabel": "135.252.222.129/WR8-88AF-4-10-DROPOUT--135.252.222.129/ITLU-44-1-SIGIN",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_67764992"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faf5a855d35c02adf802_67764992_5e16faf5a855d35c02adf802_738263296",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_738263296"
                    ]
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "WR8-88AF-4-10-DROPOUT;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faf5a855d35c02adf802_67764992",
                    "ptpUserLabel": "WR8-88AF-4-10-DROPOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "TP",
                    "equipmentId": "5e16faf5a855d35c02adf802_4.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-4-10",
                    "id": "5e16faf5a855d35c02adf802_67764992_WR8-88AF-4-10-DROPOUT;/frequency=9170.000"
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "TAKEOVER-1578564765781",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "XC",
                    "equipmentId": "5e16faf5a855d35c02adf802_4.10",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_67764992_WR8-88AF-4-10-DROPOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-4-10",
                    "id": "5e16faf5a855d35c02adf802_67764992_WR8-88AF-4-10-DROPOUT;/frequency=9170.000-5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000",
                    "direction": "UNI"
                }
            ]
        },
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-42-1",
        "id": "5e16faf5a855d35c02adf802_704720128_SFD44-42-1-OMD;/frequency=9170.000"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "WR8-88AF-4-10-SIG;/frequency=9170.000",
        "isMergedRoute": true,
        "ptpId": "5e16faf5a855d35c02adf802_67764480",
        "ptpUserLabel": "WR8-88AF-4-10-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.10",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "WR8-88AF-4-10",
        "id": "5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000"
    },
    {
        "userLabel": "135.252.222.129/WR8-88AF-4-10-SIG--135.252.222.129/AHPLG-4-14-LINE",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_67764480"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faf5a855d35c02adf802_67764480_5e16faf5a855d35c02adf802_68027392",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68027392"
        ]
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPLG-4-14-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68027392",
        "ptpUserLabel": "AHPLG-4-14-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-4-14",
        "id": "5e16faf5a855d35c02adf802_68027392_AHPLG-4-14-LINE;/oms=1"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68026624_AHPLG-4-14-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "XC",
        "equipmentId": "5e16faf5a855d35c02adf802_4.14",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68027392_AHPLG-4-14-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-4-14",
        "id": "5e16faf5a855d35c02adf802_68026624_AHPLG-4-14-SIG;/oms=1-5e16faf5a855d35c02adf802_68027392_AHPLG-4-14-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPLG-4-14-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68026624",
        "ptpUserLabel": "AHPLG-4-14-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-4-14",
        "id": "5e16faf5a855d35c02adf802_68026624_AHPLG-4-14-SIG;/oms=1"
    },
    {
        "userLabel": "135.252.222.129/AHPHG-4-15-SIG--135.252.222.129/AHPLG-4-14-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68092160"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faf5a855d35c02adf802_68026624_5e16faf5a855d35c02adf802_68092160",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68026624"
        ]
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPHG-4-15-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68092160",
        "ptpUserLabel": "AHPHG-4-15-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.15",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-4-15",
        "id": "5e16faf5a855d35c02adf802_68092160_AHPHG-4-15-SIG;/oms=1"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68092160_AHPHG-4-15-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "XC",
        "equipmentId": "5e16faf5a855d35c02adf802_4.15",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68092928_AHPHG-4-15-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPHG-4-15",
        "id": "5e16faf5a855d35c02adf802_68092160_AHPHG-4-15-SIG;/oms=1-5e16faf5a855d35c02adf802_68092928_AHPHG-4-15-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPHG-4-15-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68092928",
        "ptpUserLabel": "AHPHG-4-15-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.15",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-4-15",
        "id": "5e16faf5a855d35c02adf802_68092928_AHPHG-4-15-LINE;/oms=1"
    },
    {
        "userLabel": "135.252.222.129/AHPHG-4-15-LINE--135.252.222.147/AHPHG-3-16-LINE",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68092928"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_51381248_5e16faf5a855d35c02adf802_68092928",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51381248"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPHG-3-16-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51381248",
        "ptpUserLabel": "AHPHG-3-16-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.16",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-3-16",
        "id": "5e16faeaa855d35c02adf800_51381248_AHPHG-3-16-LINE;/oms=1"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51380480_AHPHG-3-16-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "XC",
        "equipmentId": "5e16faeaa855d35c02adf800_3.16",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51381248_AHPHG-3-16-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPHG-3-16",
        "id": "5e16faeaa855d35c02adf800_51380480_AHPHG-3-16-SIG;/oms=1-5e16faeaa855d35c02adf800_51381248_AHPHG-3-16-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPHG-3-16-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51380480",
        "ptpUserLabel": "AHPHG-3-16-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.16",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-3-16",
        "id": "5e16faeaa855d35c02adf800_51380480_AHPHG-3-16-SIG;/oms=1"
    },
    {
        "userLabel": "135.252.222.147/AHPLG-3-14-SIG--135.252.222.147/AHPHG-3-16-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51249408"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_51249408_5e16faeaa855d35c02adf800_51380480",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51380480"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPLG-3-14-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51249408",
        "ptpUserLabel": "AHPLG-3-14-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-3-14",
        "id": "5e16faeaa855d35c02adf800_51249408_AHPLG-3-14-SIG;/oms=1"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51249408_AHPLG-3-14-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "XC",
        "equipmentId": "5e16faeaa855d35c02adf800_3.14",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51250176_AHPLG-3-14-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-3-14",
        "id": "5e16faeaa855d35c02adf800_51249408_AHPLG-3-14-SIG;/oms=1-5e16faeaa855d35c02adf800_51250176_AHPLG-3-14-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPLG-3-14-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51250176",
        "ptpUserLabel": "AHPLG-3-14-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-3-14",
        "id": "5e16faeaa855d35c02adf800_51250176_AHPLG-3-14-LINE;/oms=1"
    },
    {
        "userLabel": "135.252.222.147/AHPLG-3-14-LINE--135.252.222.147/WR8-88AF-3-10-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51250176"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_50987264_5e16faeaa855d35c02adf800_51250176",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_50987264"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "WR8-88AF-3-10-SIG;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_50987264",
        "ptpUserLabel": "WR8-88AF-3-10-SIG",
        "isSeparatedRoute": true,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.10",
        "separatedRouteElements": {
            "Tx": [
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "TAKEOVER-1578564765781",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "XC",
                    "equipmentId": "5e16faeaa855d35c02adf800_3.10",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_50987776_WR8-88AF-3-10-DROPOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-3-10",
                    "id": "5e16faeaa855d35c02adf800_50987776_WR8-88AF-3-10-DROPOUT;/frequency=9170.000-5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "WR8-88AF-3-10-DROPOUT;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faeaa855d35c02adf800_50987776",
                    "ptpUserLabel": "WR8-88AF-3-10-DROPOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "TP",
                    "equipmentId": "5e16faeaa855d35c02adf800_3.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-3-10",
                    "id": "5e16faeaa855d35c02adf800_50987776_WR8-88AF-3-10-DROPOUT;/frequency=9170.000"
                },
                {
                    "userLabel": "135.252.222.147/WR8-88AF-3-10-DROPOUT--135.252.222.147/ITLU-27-1-SIGIN",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_50987776"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faeaa855d35c02adf800_453050624_5e16faeaa855d35c02adf800_50987776",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_453050624"
                    ]
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "ITLU-27-1-SIGIN;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faeaa855d35c02adf800_453050624",
                    "ptpUserLabel": "ITLU-27-1-SIGIN",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "TP",
                    "equipmentId": "5e16faeaa855d35c02adf800_27.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-27-1",
                    "id": "5e16faeaa855d35c02adf800_453050624_ITLU-27-1-SIGIN;/frequency=9170.000"
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_453050624_ITLU-27-1-SIGIN;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "XC",
                    "equipmentId": "5e16faeaa855d35c02adf800_27.1",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_453050880_ITLU-27-1-EOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "ITLU-27-1",
                    "id": "5e16faeaa855d35c02adf800_453050624_ITLU-27-1-SIGIN;/frequency=9170.000-5e16faeaa855d35c02adf800_453050880_ITLU-27-1-EOUT;/frequency=9170.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "ITLU-27-1-EOUT;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faeaa855d35c02adf800_453050880",
                    "ptpUserLabel": "ITLU-27-1-EOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "TP",
                    "equipmentId": "5e16faeaa855d35c02adf800_27.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-27-1",
                    "id": "5e16faeaa855d35c02adf800_453050880_ITLU-27-1-EOUT;/frequency=9170.000"
                },
                {
                    "userLabel": "135.252.222.147/ITLU-27-1-EOUT--135.252.222.147/SFD44-25-1-OMD",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_453050880"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faeaa855d35c02adf800_419507456_5e16faeaa855d35c02adf800_453050880",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_419507456"
                    ]
                }
            ],
            "Rx": [
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "TAKEOVER-1578564765781",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_50988032_WR8-88AF-3-10-ADDIN1;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "XC",
                    "equipmentId": "5e16faeaa855d35c02adf800_3.10",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-3-10",
                    "id": "5e16faeaa855d35c02adf800_50988032_WR8-88AF-3-10-ADDIN1;/frequency=9170.000-5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "WR8-88AF-3-10-ADDIN1;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faeaa855d35c02adf800_50988032",
                    "ptpUserLabel": "WR8-88AF-3-10-ADDIN1",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "TP",
                    "equipmentId": "5e16faeaa855d35c02adf800_3.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-3-10",
                    "id": "5e16faeaa855d35c02adf800_50988032_WR8-88AF-3-10-ADDIN1;/frequency=9170.000"
                },
                {
                    "userLabel": "135.252.222.147/SFD44-25-1-OMD--135.252.222.147/WR8-88AF-3-10-ADDIN1",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_419507456"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faeaa855d35c02adf800_419507456_5e16faeaa855d35c02adf800_50988032",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_50988032"
                    ]
                }
            ]
        },
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "WR8-88AF-3-10",
        "id": "5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "SFD44-25-1-OMD;/frequency=9170.000",
        "isMergedRoute": true,
        "ptpId": "5e16faeaa855d35c02adf800_419507456",
        "ptpUserLabel": "SFD44-25-1-OMD",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_25.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5e16faeaa855d35c02adf800_419507456_SFD44-25-1-OMD;/frequency=9170.000"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_419507200_SFD44-25-1-9170;/frequency=9170.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "XC",
        "equipmentId": "5e16faeaa855d35c02adf800_25.1",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_419507456_SFD44-25-1-OMD;/frequency=9170.000"
        ],
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5e16faeaa855d35c02adf800_419507200_SFD44-25-1-9170;/frequency=9170.000-5e16faeaa855d35c02adf800_419507456_SFD44-25-1-OMD;/frequency=9170.000",
        "direction": "BI"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "SFD44-25-1-9170;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_419507200",
        "ptpUserLabel": "SFD44-25-1-9170",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_25.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5e16faeaa855d35c02adf800_419507200_SFD44-25-1-9170;/frequency=9170.000"
    },
    {
        "userLabel": "135.252.222.147/SFD44-25-1-9170--135.252.222.147/130SNX10-3-2-L1",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_419507200"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_419507200_5e16faeaa855d35c02adf800_50462976",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_50462976"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "130SNX10-3-2-L1;/otu4=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_50462976",
        "ptpUserLabel": "130SNX10-3-2-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.2",
        "tpType": "CTP",
        "layerRate": "OTU4",
        "equipmentUserLabel": "130SNX10-3-2",
        "id": "5e16faeaa855d35c02adf800_50462976_130SNX10-3-2-L1;/otu4=1"
    }
];
const flowInfo_147_130SNX10_3_2_C1_LODU = [
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "130SNX10-4-6-L1;/otu4=1/odu4=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_67502336",
        "ptpUserLabel": "130SNX10-4-6-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.6",
        "tpType": "CTP",
        "layerRate": "ODU4",
        "equipmentUserLabel": "130SNX10-4-6",
        "id": "5e16faf5a855d35c02adf802_67502336_130SNX10-4-6-L1;/otu4=1/odu4=1"
    },
    {
        "userLabel": "135.252.222.129/130SNX10-4-6-L1--135.252.222.129/SFD44-42-1-9170",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_67502336"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faf5a855d35c02adf802_67502336_5e16faf5a855d35c02adf802_704719872",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_704719872"
        ]
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "SFD44-42-1-9170;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_704719872",
        "ptpUserLabel": "SFD44-42-1-9170",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_42.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-42-1",
        "id": "5e16faf5a855d35c02adf802_704719872_SFD44-42-1-9170;/frequency=9170.000"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_704719872_SFD44-42-1-9170;/frequency=9170.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "XC",
        "equipmentId": "5e16faf5a855d35c02adf802_42.1",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_704720128_SFD44-42-1-OMD;/frequency=9170.000"
        ],
        "equipmentUserLabel": "SFD44-42-1",
        "id": "5e16faf5a855d35c02adf802_704719872_SFD44-42-1-9170;/frequency=9170.000-5e16faf5a855d35c02adf802_704720128_SFD44-42-1-OMD;/frequency=9170.000",
        "direction": "BI"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "SFD44-42-1-OMD;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_704720128",
        "ptpUserLabel": "SFD44-42-1-OMD",
        "isSeparatedRoute": true,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_42.1",
        "separatedRouteElements": {
            "Tx": [
                {
                    "userLabel": "135.252.222.129/SFD44-42-1-OMD--135.252.222.129/WR8-88AF-4-10-ADDIN1",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_704720128"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faf5a855d35c02adf802_67765248_5e16faf5a855d35c02adf802_704720128",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_67765248"
                    ]
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "WR8-88AF-4-10-ADDIN1;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faf5a855d35c02adf802_67765248",
                    "ptpUserLabel": "WR8-88AF-4-10-ADDIN1",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "TP",
                    "equipmentId": "5e16faf5a855d35c02adf802_4.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-4-10",
                    "id": "5e16faf5a855d35c02adf802_67765248_WR8-88AF-4-10-ADDIN1;/frequency=9170.000"
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "TAKEOVER-1578564765781",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_67765248_WR8-88AF-4-10-ADDIN1;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "XC",
                    "equipmentId": "5e16faf5a855d35c02adf802_4.10",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-4-10",
                    "id": "5e16faf5a855d35c02adf802_67765248_WR8-88AF-4-10-ADDIN1;/frequency=9170.000-5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000",
                    "direction": "UNI"
                }
            ],
            "Rx": [
                {
                    "userLabel": "135.252.222.129/ITLU-44-1-EOUT--135.252.222.129/SFD44-42-1-OMD",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_738263552"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faf5a855d35c02adf802_704720128_5e16faf5a855d35c02adf802_738263552",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_704720128"
                    ]
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "ITLU-44-1-EOUT;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faf5a855d35c02adf802_738263552",
                    "ptpUserLabel": "ITLU-44-1-EOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "TP",
                    "equipmentId": "5e16faf5a855d35c02adf802_44.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-44-1",
                    "id": "5e16faf5a855d35c02adf802_738263552_ITLU-44-1-EOUT;/frequency=9170.000"
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_738263296_ITLU-44-1-SIGIN;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "XC",
                    "equipmentId": "5e16faf5a855d35c02adf802_44.1",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_738263552_ITLU-44-1-EOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "ITLU-44-1",
                    "id": "5e16faf5a855d35c02adf802_738263296_ITLU-44-1-SIGIN;/frequency=9170.000-5e16faf5a855d35c02adf802_738263552_ITLU-44-1-EOUT;/frequency=9170.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "ITLU-44-1-SIGIN;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faf5a855d35c02adf802_738263296",
                    "ptpUserLabel": "ITLU-44-1-SIGIN",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "TP",
                    "equipmentId": "5e16faf5a855d35c02adf802_44.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-44-1",
                    "id": "5e16faf5a855d35c02adf802_738263296_ITLU-44-1-SIGIN;/frequency=9170.000"
                },
                {
                    "userLabel": "135.252.222.129/WR8-88AF-4-10-DROPOUT--135.252.222.129/ITLU-44-1-SIGIN",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_67764992"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faf5a855d35c02adf802_67764992_5e16faf5a855d35c02adf802_738263296",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_738263296"
                    ]
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "WR8-88AF-4-10-DROPOUT;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faf5a855d35c02adf802_67764992",
                    "ptpUserLabel": "WR8-88AF-4-10-DROPOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "TP",
                    "equipmentId": "5e16faf5a855d35c02adf802_4.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-4-10",
                    "id": "5e16faf5a855d35c02adf802_67764992_WR8-88AF-4-10-DROPOUT;/frequency=9170.000"
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "TAKEOVER-1578564765781",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "XC",
                    "equipmentId": "5e16faf5a855d35c02adf802_4.10",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_67764992_WR8-88AF-4-10-DROPOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-4-10",
                    "id": "5e16faf5a855d35c02adf802_67764992_WR8-88AF-4-10-DROPOUT;/frequency=9170.000-5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000",
                    "direction": "UNI"
                }
            ]
        },
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-42-1",
        "id": "5e16faf5a855d35c02adf802_704720128_SFD44-42-1-OMD;/frequency=9170.000"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "WR8-88AF-4-10-SIG;/frequency=9170.000",
        "isMergedRoute": true,
        "ptpId": "5e16faf5a855d35c02adf802_67764480",
        "ptpUserLabel": "WR8-88AF-4-10-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.10",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "WR8-88AF-4-10",
        "id": "5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000"
    },
    {
        "userLabel": "135.252.222.129/WR8-88AF-4-10-SIG--135.252.222.129/AHPLG-4-14-LINE",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_67764480"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faf5a855d35c02adf802_67764480_5e16faf5a855d35c02adf802_68027392",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68027392"
        ]
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPLG-4-14-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68027392",
        "ptpUserLabel": "AHPLG-4-14-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-4-14",
        "id": "5e16faf5a855d35c02adf802_68027392_AHPLG-4-14-LINE;/oms=1"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68026624_AHPLG-4-14-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "XC",
        "equipmentId": "5e16faf5a855d35c02adf802_4.14",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68027392_AHPLG-4-14-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-4-14",
        "id": "5e16faf5a855d35c02adf802_68026624_AHPLG-4-14-SIG;/oms=1-5e16faf5a855d35c02adf802_68027392_AHPLG-4-14-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPLG-4-14-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68026624",
        "ptpUserLabel": "AHPLG-4-14-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-4-14",
        "id": "5e16faf5a855d35c02adf802_68026624_AHPLG-4-14-SIG;/oms=1"
    },
    {
        "userLabel": "135.252.222.129/AHPHG-4-15-SIG--135.252.222.129/AHPLG-4-14-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68092160"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faf5a855d35c02adf802_68026624_5e16faf5a855d35c02adf802_68092160",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68026624"
        ]
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPHG-4-15-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68092160",
        "ptpUserLabel": "AHPHG-4-15-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.15",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-4-15",
        "id": "5e16faf5a855d35c02adf802_68092160_AHPHG-4-15-SIG;/oms=1"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68092160_AHPHG-4-15-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "XC",
        "equipmentId": "5e16faf5a855d35c02adf802_4.15",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68092928_AHPHG-4-15-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPHG-4-15",
        "id": "5e16faf5a855d35c02adf802_68092160_AHPHG-4-15-SIG;/oms=1-5e16faf5a855d35c02adf802_68092928_AHPHG-4-15-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPHG-4-15-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68092928",
        "ptpUserLabel": "AHPHG-4-15-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.15",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-4-15",
        "id": "5e16faf5a855d35c02adf802_68092928_AHPHG-4-15-LINE;/oms=1"
    },
    {
        "userLabel": "135.252.222.129/AHPHG-4-15-LINE--135.252.222.147/AHPHG-3-16-LINE",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68092928"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_51381248_5e16faf5a855d35c02adf802_68092928",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51381248"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPHG-3-16-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51381248",
        "ptpUserLabel": "AHPHG-3-16-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.16",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-3-16",
        "id": "5e16faeaa855d35c02adf800_51381248_AHPHG-3-16-LINE;/oms=1"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51380480_AHPHG-3-16-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "XC",
        "equipmentId": "5e16faeaa855d35c02adf800_3.16",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51381248_AHPHG-3-16-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPHG-3-16",
        "id": "5e16faeaa855d35c02adf800_51380480_AHPHG-3-16-SIG;/oms=1-5e16faeaa855d35c02adf800_51381248_AHPHG-3-16-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPHG-3-16-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51380480",
        "ptpUserLabel": "AHPHG-3-16-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.16",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-3-16",
        "id": "5e16faeaa855d35c02adf800_51380480_AHPHG-3-16-SIG;/oms=1"
    },
    {
        "userLabel": "135.252.222.147/AHPLG-3-14-SIG--135.252.222.147/AHPHG-3-16-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51249408"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_51249408_5e16faeaa855d35c02adf800_51380480",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51380480"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPLG-3-14-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51249408",
        "ptpUserLabel": "AHPLG-3-14-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-3-14",
        "id": "5e16faeaa855d35c02adf800_51249408_AHPLG-3-14-SIG;/oms=1"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51249408_AHPLG-3-14-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "XC",
        "equipmentId": "5e16faeaa855d35c02adf800_3.14",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51250176_AHPLG-3-14-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-3-14",
        "id": "5e16faeaa855d35c02adf800_51249408_AHPLG-3-14-SIG;/oms=1-5e16faeaa855d35c02adf800_51250176_AHPLG-3-14-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPLG-3-14-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51250176",
        "ptpUserLabel": "AHPLG-3-14-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-3-14",
        "id": "5e16faeaa855d35c02adf800_51250176_AHPLG-3-14-LINE;/oms=1"
    },
    {
        "userLabel": "135.252.222.147/AHPLG-3-14-LINE--135.252.222.147/WR8-88AF-3-10-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51250176"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_50987264_5e16faeaa855d35c02adf800_51250176",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_50987264"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "WR8-88AF-3-10-SIG;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_50987264",
        "ptpUserLabel": "WR8-88AF-3-10-SIG",
        "isSeparatedRoute": true,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.10",
        "separatedRouteElements": {
            "Tx": [
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "TAKEOVER-1578564765781",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "XC",
                    "equipmentId": "5e16faeaa855d35c02adf800_3.10",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_50987776_WR8-88AF-3-10-DROPOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-3-10",
                    "id": "5e16faeaa855d35c02adf800_50987776_WR8-88AF-3-10-DROPOUT;/frequency=9170.000-5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "WR8-88AF-3-10-DROPOUT;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faeaa855d35c02adf800_50987776",
                    "ptpUserLabel": "WR8-88AF-3-10-DROPOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "TP",
                    "equipmentId": "5e16faeaa855d35c02adf800_3.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-3-10",
                    "id": "5e16faeaa855d35c02adf800_50987776_WR8-88AF-3-10-DROPOUT;/frequency=9170.000"
                },
                {
                    "userLabel": "135.252.222.147/WR8-88AF-3-10-DROPOUT--135.252.222.147/ITLU-27-1-SIGIN",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_50987776"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faeaa855d35c02adf800_453050624_5e16faeaa855d35c02adf800_50987776",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_453050624"
                    ]
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "ITLU-27-1-SIGIN;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faeaa855d35c02adf800_453050624",
                    "ptpUserLabel": "ITLU-27-1-SIGIN",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "TP",
                    "equipmentId": "5e16faeaa855d35c02adf800_27.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-27-1",
                    "id": "5e16faeaa855d35c02adf800_453050624_ITLU-27-1-SIGIN;/frequency=9170.000"
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_453050624_ITLU-27-1-SIGIN;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "XC",
                    "equipmentId": "5e16faeaa855d35c02adf800_27.1",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_453050880_ITLU-27-1-EOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "ITLU-27-1",
                    "id": "5e16faeaa855d35c02adf800_453050624_ITLU-27-1-SIGIN;/frequency=9170.000-5e16faeaa855d35c02adf800_453050880_ITLU-27-1-EOUT;/frequency=9170.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "ITLU-27-1-EOUT;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faeaa855d35c02adf800_453050880",
                    "ptpUserLabel": "ITLU-27-1-EOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "TP",
                    "equipmentId": "5e16faeaa855d35c02adf800_27.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-27-1",
                    "id": "5e16faeaa855d35c02adf800_453050880_ITLU-27-1-EOUT;/frequency=9170.000"
                },
                {
                    "userLabel": "135.252.222.147/ITLU-27-1-EOUT--135.252.222.147/SFD44-25-1-OMD",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_453050880"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faeaa855d35c02adf800_419507456_5e16faeaa855d35c02adf800_453050880",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_419507456"
                    ]
                }
            ],
            "Rx": [
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "TAKEOVER-1578564765781",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_50988032_WR8-88AF-3-10-ADDIN1;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "XC",
                    "equipmentId": "5e16faeaa855d35c02adf800_3.10",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-3-10",
                    "id": "5e16faeaa855d35c02adf800_50988032_WR8-88AF-3-10-ADDIN1;/frequency=9170.000-5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "WR8-88AF-3-10-ADDIN1;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faeaa855d35c02adf800_50988032",
                    "ptpUserLabel": "WR8-88AF-3-10-ADDIN1",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "TP",
                    "equipmentId": "5e16faeaa855d35c02adf800_3.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-3-10",
                    "id": "5e16faeaa855d35c02adf800_50988032_WR8-88AF-3-10-ADDIN1;/frequency=9170.000"
                },
                {
                    "userLabel": "135.252.222.147/SFD44-25-1-OMD--135.252.222.147/WR8-88AF-3-10-ADDIN1",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_419507456"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faeaa855d35c02adf800_419507456_5e16faeaa855d35c02adf800_50988032",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_50988032"
                    ]
                }
            ]
        },
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "WR8-88AF-3-10",
        "id": "5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "SFD44-25-1-OMD;/frequency=9170.000",
        "isMergedRoute": true,
        "ptpId": "5e16faeaa855d35c02adf800_419507456",
        "ptpUserLabel": "SFD44-25-1-OMD",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_25.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5e16faeaa855d35c02adf800_419507456_SFD44-25-1-OMD;/frequency=9170.000"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_419507200_SFD44-25-1-9170;/frequency=9170.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "XC",
        "equipmentId": "5e16faeaa855d35c02adf800_25.1",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_419507456_SFD44-25-1-OMD;/frequency=9170.000"
        ],
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5e16faeaa855d35c02adf800_419507200_SFD44-25-1-9170;/frequency=9170.000-5e16faeaa855d35c02adf800_419507456_SFD44-25-1-OMD;/frequency=9170.000",
        "direction": "BI"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "SFD44-25-1-9170;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_419507200",
        "ptpUserLabel": "SFD44-25-1-9170",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_25.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5e16faeaa855d35c02adf800_419507200_SFD44-25-1-9170;/frequency=9170.000"
    },
    {
        "userLabel": "135.252.222.147/SFD44-25-1-9170--135.252.222.147/130SNX10-3-2-L1",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_419507200"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_419507200_5e16faeaa855d35c02adf800_50462976",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_50462976"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "130SNX10-3-2-L1;/otu4=1/odu4=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_50462976",
        "ptpUserLabel": "130SNX10-3-2-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.2",
        "tpType": "CTP",
        "layerRate": "ODU4",
        "equipmentUserLabel": "130SNX10-3-2",
        "id": "5e16faeaa855d35c02adf800_50462976_130SNX10-3-2-L1;/otu4=1/odu4=1"
    }
];
const flowInfo_147_130SNX10_3_2_C1_CODU = [
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "130SNX10-4-6-C1;/odu2=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_67502592",
        "ptpUserLabel": "130SNX10-4-6-C1",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.6",
        "tpType": "CTP",
        "layerRate": "ODU2",
        "equipmentUserLabel": "130SNX10-4-6",
        "id": "5e16faf5a855d35c02adf802_67502592_130SNX10-4-6-C1;/odu2=1"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_67502592_130SNX10-4-6-C1;/odu2=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "XC",
        "equipmentId": "5e16faf5a855d35c02adf802_4.6",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_67502336_130SNX10-4-6-L1;/otu4=1/odu4=1/odu2=1"
        ],
        "equipmentUserLabel": "130SNX10-4-6",
        "id": "5e16faf5a855d35c02adf802_67502592_130SNX10-4-6-C1;/odu2=1-5e16faf5a855d35c02adf802_67502336_130SNX10-4-6-L1;/otu4=1/odu4=1/odu2=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "130SNX10-4-6-L1;/otu4=1/odu4=1/odu2=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_67502336",
        "ptpUserLabel": "130SNX10-4-6-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.6",
        "tpType": "CTP",
        "layerRate": "ODU2",
        "equipmentUserLabel": "130SNX10-4-6",
        "id": "5e16faf5a855d35c02adf802_67502336_130SNX10-4-6-L1;/otu4=1/odu4=1/odu2=1"
    },
    {
        "userLabel": "135.252.222.129/130SNX10-4-6-L1--135.252.222.129/SFD44-42-1-9170",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_67502336"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faf5a855d35c02adf802_67502336_5e16faf5a855d35c02adf802_704719872",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_704719872"
        ]
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "SFD44-42-1-9170;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_704719872",
        "ptpUserLabel": "SFD44-42-1-9170",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_42.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-42-1",
        "id": "5e16faf5a855d35c02adf802_704719872_SFD44-42-1-9170;/frequency=9170.000"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_704719872_SFD44-42-1-9170;/frequency=9170.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "XC",
        "equipmentId": "5e16faf5a855d35c02adf802_42.1",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_704720128_SFD44-42-1-OMD;/frequency=9170.000"
        ],
        "equipmentUserLabel": "SFD44-42-1",
        "id": "5e16faf5a855d35c02adf802_704719872_SFD44-42-1-9170;/frequency=9170.000-5e16faf5a855d35c02adf802_704720128_SFD44-42-1-OMD;/frequency=9170.000",
        "direction": "BI"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "SFD44-42-1-OMD;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_704720128",
        "ptpUserLabel": "SFD44-42-1-OMD",
        "isSeparatedRoute": true,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_42.1",
        "separatedRouteElements": {
            "Tx": [
                {
                    "userLabel": "135.252.222.129/SFD44-42-1-OMD--135.252.222.129/WR8-88AF-4-10-ADDIN1",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_704720128"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faf5a855d35c02adf802_67765248_5e16faf5a855d35c02adf802_704720128",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_67765248"
                    ]
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "WR8-88AF-4-10-ADDIN1;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faf5a855d35c02adf802_67765248",
                    "ptpUserLabel": "WR8-88AF-4-10-ADDIN1",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "TP",
                    "equipmentId": "5e16faf5a855d35c02adf802_4.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-4-10",
                    "id": "5e16faf5a855d35c02adf802_67765248_WR8-88AF-4-10-ADDIN1;/frequency=9170.000"
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "TAKEOVER-1578564765781",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_67765248_WR8-88AF-4-10-ADDIN1;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "XC",
                    "equipmentId": "5e16faf5a855d35c02adf802_4.10",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-4-10",
                    "id": "5e16faf5a855d35c02adf802_67765248_WR8-88AF-4-10-ADDIN1;/frequency=9170.000-5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000",
                    "direction": "UNI"
                }
            ],
            "Rx": [
                {
                    "userLabel": "135.252.222.129/ITLU-44-1-EOUT--135.252.222.129/SFD44-42-1-OMD",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_738263552"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faf5a855d35c02adf802_704720128_5e16faf5a855d35c02adf802_738263552",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_704720128"
                    ]
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "ITLU-44-1-EOUT;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faf5a855d35c02adf802_738263552",
                    "ptpUserLabel": "ITLU-44-1-EOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "TP",
                    "equipmentId": "5e16faf5a855d35c02adf802_44.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-44-1",
                    "id": "5e16faf5a855d35c02adf802_738263552_ITLU-44-1-EOUT;/frequency=9170.000"
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_738263296_ITLU-44-1-SIGIN;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "XC",
                    "equipmentId": "5e16faf5a855d35c02adf802_44.1",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_738263552_ITLU-44-1-EOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "ITLU-44-1",
                    "id": "5e16faf5a855d35c02adf802_738263296_ITLU-44-1-SIGIN;/frequency=9170.000-5e16faf5a855d35c02adf802_738263552_ITLU-44-1-EOUT;/frequency=9170.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "ITLU-44-1-SIGIN;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faf5a855d35c02adf802_738263296",
                    "ptpUserLabel": "ITLU-44-1-SIGIN",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "TP",
                    "equipmentId": "5e16faf5a855d35c02adf802_44.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-44-1",
                    "id": "5e16faf5a855d35c02adf802_738263296_ITLU-44-1-SIGIN;/frequency=9170.000"
                },
                {
                    "userLabel": "135.252.222.129/WR8-88AF-4-10-DROPOUT--135.252.222.129/ITLU-44-1-SIGIN",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_67764992"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faf5a855d35c02adf802_67764992_5e16faf5a855d35c02adf802_738263296",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_738263296"
                    ]
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "WR8-88AF-4-10-DROPOUT;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faf5a855d35c02adf802_67764992",
                    "ptpUserLabel": "WR8-88AF-4-10-DROPOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "TP",
                    "equipmentId": "5e16faf5a855d35c02adf802_4.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-4-10",
                    "id": "5e16faf5a855d35c02adf802_67764992_WR8-88AF-4-10-DROPOUT;/frequency=9170.000"
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "TAKEOVER-1578564765781",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "XC",
                    "equipmentId": "5e16faf5a855d35c02adf802_4.10",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_67764992_WR8-88AF-4-10-DROPOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-4-10",
                    "id": "5e16faf5a855d35c02adf802_67764992_WR8-88AF-4-10-DROPOUT;/frequency=9170.000-5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000",
                    "direction": "UNI"
                }
            ]
        },
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-42-1",
        "id": "5e16faf5a855d35c02adf802_704720128_SFD44-42-1-OMD;/frequency=9170.000"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "WR8-88AF-4-10-SIG;/frequency=9170.000",
        "isMergedRoute": true,
        "ptpId": "5e16faf5a855d35c02adf802_67764480",
        "ptpUserLabel": "WR8-88AF-4-10-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.10",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "WR8-88AF-4-10",
        "id": "5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000"
    },
    {
        "userLabel": "135.252.222.129/WR8-88AF-4-10-SIG--135.252.222.129/AHPLG-4-14-LINE",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_67764480"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faf5a855d35c02adf802_67764480_5e16faf5a855d35c02adf802_68027392",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68027392"
        ]
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPLG-4-14-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68027392",
        "ptpUserLabel": "AHPLG-4-14-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-4-14",
        "id": "5e16faf5a855d35c02adf802_68027392_AHPLG-4-14-LINE;/oms=1"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68026624_AHPLG-4-14-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "XC",
        "equipmentId": "5e16faf5a855d35c02adf802_4.14",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68027392_AHPLG-4-14-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-4-14",
        "id": "5e16faf5a855d35c02adf802_68026624_AHPLG-4-14-SIG;/oms=1-5e16faf5a855d35c02adf802_68027392_AHPLG-4-14-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPLG-4-14-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68026624",
        "ptpUserLabel": "AHPLG-4-14-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-4-14",
        "id": "5e16faf5a855d35c02adf802_68026624_AHPLG-4-14-SIG;/oms=1"
    },
    {
        "userLabel": "135.252.222.129/AHPHG-4-15-SIG--135.252.222.129/AHPLG-4-14-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68092160"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faf5a855d35c02adf802_68026624_5e16faf5a855d35c02adf802_68092160",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68026624"
        ]
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPHG-4-15-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68092160",
        "ptpUserLabel": "AHPHG-4-15-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.15",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-4-15",
        "id": "5e16faf5a855d35c02adf802_68092160_AHPHG-4-15-SIG;/oms=1"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68092160_AHPHG-4-15-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "XC",
        "equipmentId": "5e16faf5a855d35c02adf802_4.15",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68092928_AHPHG-4-15-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPHG-4-15",
        "id": "5e16faf5a855d35c02adf802_68092160_AHPHG-4-15-SIG;/oms=1-5e16faf5a855d35c02adf802_68092928_AHPHG-4-15-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPHG-4-15-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68092928",
        "ptpUserLabel": "AHPHG-4-15-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.15",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-4-15",
        "id": "5e16faf5a855d35c02adf802_68092928_AHPHG-4-15-LINE;/oms=1"
    },
    {
        "userLabel": "135.252.222.129/AHPHG-4-15-LINE--135.252.222.147/AHPHG-3-16-LINE",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68092928"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_51381248_5e16faf5a855d35c02adf802_68092928",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51381248"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPHG-3-16-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51381248",
        "ptpUserLabel": "AHPHG-3-16-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.16",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-3-16",
        "id": "5e16faeaa855d35c02adf800_51381248_AHPHG-3-16-LINE;/oms=1"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51380480_AHPHG-3-16-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "XC",
        "equipmentId": "5e16faeaa855d35c02adf800_3.16",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51381248_AHPHG-3-16-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPHG-3-16",
        "id": "5e16faeaa855d35c02adf800_51380480_AHPHG-3-16-SIG;/oms=1-5e16faeaa855d35c02adf800_51381248_AHPHG-3-16-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPHG-3-16-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51380480",
        "ptpUserLabel": "AHPHG-3-16-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.16",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-3-16",
        "id": "5e16faeaa855d35c02adf800_51380480_AHPHG-3-16-SIG;/oms=1"
    },
    {
        "userLabel": "135.252.222.147/AHPLG-3-14-SIG--135.252.222.147/AHPHG-3-16-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51249408"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_51249408_5e16faeaa855d35c02adf800_51380480",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51380480"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPLG-3-14-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51249408",
        "ptpUserLabel": "AHPLG-3-14-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-3-14",
        "id": "5e16faeaa855d35c02adf800_51249408_AHPLG-3-14-SIG;/oms=1"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51249408_AHPLG-3-14-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "XC",
        "equipmentId": "5e16faeaa855d35c02adf800_3.14",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51250176_AHPLG-3-14-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-3-14",
        "id": "5e16faeaa855d35c02adf800_51249408_AHPLG-3-14-SIG;/oms=1-5e16faeaa855d35c02adf800_51250176_AHPLG-3-14-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPLG-3-14-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51250176",
        "ptpUserLabel": "AHPLG-3-14-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-3-14",
        "id": "5e16faeaa855d35c02adf800_51250176_AHPLG-3-14-LINE;/oms=1"
    },
    {
        "userLabel": "135.252.222.147/AHPLG-3-14-LINE--135.252.222.147/WR8-88AF-3-10-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51250176"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_50987264_5e16faeaa855d35c02adf800_51250176",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_50987264"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "WR8-88AF-3-10-SIG;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_50987264",
        "ptpUserLabel": "WR8-88AF-3-10-SIG",
        "isSeparatedRoute": true,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.10",
        "separatedRouteElements": {
            "Tx": [
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "TAKEOVER-1578564765781",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "XC",
                    "equipmentId": "5e16faeaa855d35c02adf800_3.10",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_50987776_WR8-88AF-3-10-DROPOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-3-10",
                    "id": "5e16faeaa855d35c02adf800_50987776_WR8-88AF-3-10-DROPOUT;/frequency=9170.000-5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "WR8-88AF-3-10-DROPOUT;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faeaa855d35c02adf800_50987776",
                    "ptpUserLabel": "WR8-88AF-3-10-DROPOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "TP",
                    "equipmentId": "5e16faeaa855d35c02adf800_3.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-3-10",
                    "id": "5e16faeaa855d35c02adf800_50987776_WR8-88AF-3-10-DROPOUT;/frequency=9170.000"
                },
                {
                    "userLabel": "135.252.222.147/WR8-88AF-3-10-DROPOUT--135.252.222.147/ITLU-27-1-SIGIN",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_50987776"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faeaa855d35c02adf800_453050624_5e16faeaa855d35c02adf800_50987776",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_453050624"
                    ]
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "ITLU-27-1-SIGIN;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faeaa855d35c02adf800_453050624",
                    "ptpUserLabel": "ITLU-27-1-SIGIN",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "TP",
                    "equipmentId": "5e16faeaa855d35c02adf800_27.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-27-1",
                    "id": "5e16faeaa855d35c02adf800_453050624_ITLU-27-1-SIGIN;/frequency=9170.000"
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_453050624_ITLU-27-1-SIGIN;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "XC",
                    "equipmentId": "5e16faeaa855d35c02adf800_27.1",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_453050880_ITLU-27-1-EOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "ITLU-27-1",
                    "id": "5e16faeaa855d35c02adf800_453050624_ITLU-27-1-SIGIN;/frequency=9170.000-5e16faeaa855d35c02adf800_453050880_ITLU-27-1-EOUT;/frequency=9170.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "ITLU-27-1-EOUT;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faeaa855d35c02adf800_453050880",
                    "ptpUserLabel": "ITLU-27-1-EOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "TP",
                    "equipmentId": "5e16faeaa855d35c02adf800_27.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-27-1",
                    "id": "5e16faeaa855d35c02adf800_453050880_ITLU-27-1-EOUT;/frequency=9170.000"
                },
                {
                    "userLabel": "135.252.222.147/ITLU-27-1-EOUT--135.252.222.147/SFD44-25-1-OMD",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_453050880"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faeaa855d35c02adf800_419507456_5e16faeaa855d35c02adf800_453050880",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_419507456"
                    ]
                }
            ],
            "Rx": [
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "TAKEOVER-1578564765781",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_50988032_WR8-88AF-3-10-ADDIN1;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "XC",
                    "equipmentId": "5e16faeaa855d35c02adf800_3.10",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-3-10",
                    "id": "5e16faeaa855d35c02adf800_50988032_WR8-88AF-3-10-ADDIN1;/frequency=9170.000-5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "WR8-88AF-3-10-ADDIN1;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faeaa855d35c02adf800_50988032",
                    "ptpUserLabel": "WR8-88AF-3-10-ADDIN1",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "TP",
                    "equipmentId": "5e16faeaa855d35c02adf800_3.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-3-10",
                    "id": "5e16faeaa855d35c02adf800_50988032_WR8-88AF-3-10-ADDIN1;/frequency=9170.000"
                },
                {
                    "userLabel": "135.252.222.147/SFD44-25-1-OMD--135.252.222.147/WR8-88AF-3-10-ADDIN1",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_419507456"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faeaa855d35c02adf800_419507456_5e16faeaa855d35c02adf800_50988032",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_50988032"
                    ]
                }
            ]
        },
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "WR8-88AF-3-10",
        "id": "5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "SFD44-25-1-OMD;/frequency=9170.000",
        "isMergedRoute": true,
        "ptpId": "5e16faeaa855d35c02adf800_419507456",
        "ptpUserLabel": "SFD44-25-1-OMD",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_25.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5e16faeaa855d35c02adf800_419507456_SFD44-25-1-OMD;/frequency=9170.000"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_419507200_SFD44-25-1-9170;/frequency=9170.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "XC",
        "equipmentId": "5e16faeaa855d35c02adf800_25.1",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_419507456_SFD44-25-1-OMD;/frequency=9170.000"
        ],
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5e16faeaa855d35c02adf800_419507200_SFD44-25-1-9170;/frequency=9170.000-5e16faeaa855d35c02adf800_419507456_SFD44-25-1-OMD;/frequency=9170.000",
        "direction": "BI"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "SFD44-25-1-9170;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_419507200",
        "ptpUserLabel": "SFD44-25-1-9170",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_25.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5e16faeaa855d35c02adf800_419507200_SFD44-25-1-9170;/frequency=9170.000"
    },
    {
        "userLabel": "135.252.222.147/SFD44-25-1-9170--135.252.222.147/130SNX10-3-2-L1",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_419507200"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_419507200_5e16faeaa855d35c02adf800_50462976",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_50462976"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "130SNX10-3-2-L1;/otu4=1/odu4=1/odu2=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_50462976",
        "ptpUserLabel": "130SNX10-3-2-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.2",
        "tpType": "CTP",
        "layerRate": "ODU2",
        "equipmentUserLabel": "130SNX10-3-2",
        "id": "5e16faeaa855d35c02adf800_50462976_130SNX10-3-2-L1;/otu4=1/odu4=1/odu2=1"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_50463232_130SNX10-3-2-C1;/odu2=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "XC",
        "equipmentId": "5e16faeaa855d35c02adf800_3.2",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_50462976_130SNX10-3-2-L1;/otu4=1/odu4=1/odu2=1"
        ],
        "equipmentUserLabel": "130SNX10-3-2",
        "id": "5e16faeaa855d35c02adf800_50463232_130SNX10-3-2-C1;/odu2=1-5e16faeaa855d35c02adf800_50462976_130SNX10-3-2-L1;/otu4=1/odu4=1/odu2=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "130SNX10-3-2-C1;/odu2=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_50463232",
        "ptpUserLabel": "130SNX10-3-2-C1",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.2",
        "tpType": "CTP",
        "layerRate": "ODU2",
        "equipmentUserLabel": "130SNX10-3-2",
        "id": "5e16faeaa855d35c02adf800_50463232_130SNX10-3-2-C1;/odu2=1"
    }
];
const flowInfo_147_130SNX10_3_2_C1_DSR = [
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "130SNX10-4-6-C1;/odu2=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_67502592",
        "ptpUserLabel": "130SNX10-4-6-C1",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.6",
        "tpType": "CTP",
        "layerRate": "ODU2",
        "equipmentUserLabel": "130SNX10-4-6",
        "id": "5e16faf5a855d35c02adf802_67502592_130SNX10-4-6-C1;/odu2=1"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_67502592_130SNX10-4-6-C1;/odu2=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "XC",
        "equipmentId": "5e16faf5a855d35c02adf802_4.6",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_67502336_130SNX10-4-6-L1;/otu4=1/odu4=1/odu2=1"
        ],
        "equipmentUserLabel": "130SNX10-4-6",
        "id": "5e16faf5a855d35c02adf802_67502592_130SNX10-4-6-C1;/odu2=1-5e16faf5a855d35c02adf802_67502336_130SNX10-4-6-L1;/otu4=1/odu4=1/odu2=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "130SNX10-4-6-L1;/otu4=1/odu4=1/odu2=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_67502336",
        "ptpUserLabel": "130SNX10-4-6-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.6",
        "tpType": "CTP",
        "layerRate": "ODU2",
        "equipmentUserLabel": "130SNX10-4-6",
        "id": "5e16faf5a855d35c02adf802_67502336_130SNX10-4-6-L1;/otu4=1/odu4=1/odu2=1"
    },
    {
        "userLabel": "135.252.222.129/130SNX10-4-6-L1--135.252.222.129/SFD44-42-1-9170",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_67502336"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faf5a855d35c02adf802_67502336_5e16faf5a855d35c02adf802_704719872",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_704719872"
        ]
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "SFD44-42-1-9170;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_704719872",
        "ptpUserLabel": "SFD44-42-1-9170",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_42.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-42-1",
        "id": "5e16faf5a855d35c02adf802_704719872_SFD44-42-1-9170;/frequency=9170.000"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_704719872_SFD44-42-1-9170;/frequency=9170.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "XC",
        "equipmentId": "5e16faf5a855d35c02adf802_42.1",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_704720128_SFD44-42-1-OMD;/frequency=9170.000"
        ],
        "equipmentUserLabel": "SFD44-42-1",
        "id": "5e16faf5a855d35c02adf802_704719872_SFD44-42-1-9170;/frequency=9170.000-5e16faf5a855d35c02adf802_704720128_SFD44-42-1-OMD;/frequency=9170.000",
        "direction": "BI"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "SFD44-42-1-OMD;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_704720128",
        "ptpUserLabel": "SFD44-42-1-OMD",
        "isSeparatedRoute": true,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_42.1",
        "separatedRouteElements": {
            "Tx": [
                {
                    "userLabel": "135.252.222.129/SFD44-42-1-OMD--135.252.222.129/WR8-88AF-4-10-ADDIN1",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_704720128"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faf5a855d35c02adf802_67765248_5e16faf5a855d35c02adf802_704720128",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_67765248"
                    ]
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "WR8-88AF-4-10-ADDIN1;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faf5a855d35c02adf802_67765248",
                    "ptpUserLabel": "WR8-88AF-4-10-ADDIN1",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "TP",
                    "equipmentId": "5e16faf5a855d35c02adf802_4.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-4-10",
                    "id": "5e16faf5a855d35c02adf802_67765248_WR8-88AF-4-10-ADDIN1;/frequency=9170.000"
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "TAKEOVER-1578564765781",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_67765248_WR8-88AF-4-10-ADDIN1;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "XC",
                    "equipmentId": "5e16faf5a855d35c02adf802_4.10",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-4-10",
                    "id": "5e16faf5a855d35c02adf802_67765248_WR8-88AF-4-10-ADDIN1;/frequency=9170.000-5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000",
                    "direction": "UNI"
                }
            ],
            "Rx": [
                {
                    "userLabel": "135.252.222.129/ITLU-44-1-EOUT--135.252.222.129/SFD44-42-1-OMD",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_738263552"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faf5a855d35c02adf802_704720128_5e16faf5a855d35c02adf802_738263552",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_704720128"
                    ]
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "ITLU-44-1-EOUT;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faf5a855d35c02adf802_738263552",
                    "ptpUserLabel": "ITLU-44-1-EOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "TP",
                    "equipmentId": "5e16faf5a855d35c02adf802_44.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-44-1",
                    "id": "5e16faf5a855d35c02adf802_738263552_ITLU-44-1-EOUT;/frequency=9170.000"
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_738263296_ITLU-44-1-SIGIN;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "XC",
                    "equipmentId": "5e16faf5a855d35c02adf802_44.1",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_738263552_ITLU-44-1-EOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "ITLU-44-1",
                    "id": "5e16faf5a855d35c02adf802_738263296_ITLU-44-1-SIGIN;/frequency=9170.000-5e16faf5a855d35c02adf802_738263552_ITLU-44-1-EOUT;/frequency=9170.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "ITLU-44-1-SIGIN;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faf5a855d35c02adf802_738263296",
                    "ptpUserLabel": "ITLU-44-1-SIGIN",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "TP",
                    "equipmentId": "5e16faf5a855d35c02adf802_44.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-44-1",
                    "id": "5e16faf5a855d35c02adf802_738263296_ITLU-44-1-SIGIN;/frequency=9170.000"
                },
                {
                    "userLabel": "135.252.222.129/WR8-88AF-4-10-DROPOUT--135.252.222.129/ITLU-44-1-SIGIN",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_67764992"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faf5a855d35c02adf802_67764992_5e16faf5a855d35c02adf802_738263296",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_738263296"
                    ]
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "WR8-88AF-4-10-DROPOUT;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faf5a855d35c02adf802_67764992",
                    "ptpUserLabel": "WR8-88AF-4-10-DROPOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "TP",
                    "equipmentId": "5e16faf5a855d35c02adf802_4.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-4-10",
                    "id": "5e16faf5a855d35c02adf802_67764992_WR8-88AF-4-10-DROPOUT;/frequency=9170.000"
                },
                {
                    "neId": "5e16faf5a855d35c02adf802",
                    "userLabel": "TAKEOVER-1578564765781",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.129",
                    "type": "XC",
                    "equipmentId": "5e16faf5a855d35c02adf802_4.10",
                    "zEndNodes": [
                        "5e16faf5a855d35c02adf802_67764992_WR8-88AF-4-10-DROPOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-4-10",
                    "id": "5e16faf5a855d35c02adf802_67764992_WR8-88AF-4-10-DROPOUT;/frequency=9170.000-5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000",
                    "direction": "UNI"
                }
            ]
        },
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-42-1",
        "id": "5e16faf5a855d35c02adf802_704720128_SFD44-42-1-OMD;/frequency=9170.000"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "WR8-88AF-4-10-SIG;/frequency=9170.000",
        "isMergedRoute": true,
        "ptpId": "5e16faf5a855d35c02adf802_67764480",
        "ptpUserLabel": "WR8-88AF-4-10-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.10",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "WR8-88AF-4-10",
        "id": "5e16faf5a855d35c02adf802_67764480_WR8-88AF-4-10-SIG;/frequency=9170.000"
    },
    {
        "userLabel": "135.252.222.129/WR8-88AF-4-10-SIG--135.252.222.129/AHPLG-4-14-LINE",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_67764480"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faf5a855d35c02adf802_67764480_5e16faf5a855d35c02adf802_68027392",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68027392"
        ]
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPLG-4-14-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68027392",
        "ptpUserLabel": "AHPLG-4-14-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-4-14",
        "id": "5e16faf5a855d35c02adf802_68027392_AHPLG-4-14-LINE;/oms=1"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68026624_AHPLG-4-14-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "XC",
        "equipmentId": "5e16faf5a855d35c02adf802_4.14",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68027392_AHPLG-4-14-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-4-14",
        "id": "5e16faf5a855d35c02adf802_68026624_AHPLG-4-14-SIG;/oms=1-5e16faf5a855d35c02adf802_68027392_AHPLG-4-14-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPLG-4-14-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68026624",
        "ptpUserLabel": "AHPLG-4-14-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-4-14",
        "id": "5e16faf5a855d35c02adf802_68026624_AHPLG-4-14-SIG;/oms=1"
    },
    {
        "userLabel": "135.252.222.129/AHPHG-4-15-SIG--135.252.222.129/AHPLG-4-14-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68092160"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faf5a855d35c02adf802_68026624_5e16faf5a855d35c02adf802_68092160",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68026624"
        ]
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPHG-4-15-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68092160",
        "ptpUserLabel": "AHPHG-4-15-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.15",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-4-15",
        "id": "5e16faf5a855d35c02adf802_68092160_AHPHG-4-15-SIG;/oms=1"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68092160_AHPHG-4-15-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "XC",
        "equipmentId": "5e16faf5a855d35c02adf802_4.15",
        "zEndNodes": [
            "5e16faf5a855d35c02adf802_68092928_AHPHG-4-15-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPHG-4-15",
        "id": "5e16faf5a855d35c02adf802_68092160_AHPHG-4-15-SIG;/oms=1-5e16faf5a855d35c02adf802_68092928_AHPHG-4-15-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faf5a855d35c02adf802",
        "userLabel": "AHPHG-4-15-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faf5a855d35c02adf802_68092928",
        "ptpUserLabel": "AHPHG-4-15-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.129",
        "type": "TP",
        "equipmentId": "5e16faf5a855d35c02adf802_4.15",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-4-15",
        "id": "5e16faf5a855d35c02adf802_68092928_AHPHG-4-15-LINE;/oms=1"
    },
    {
        "userLabel": "135.252.222.129/AHPHG-4-15-LINE--135.252.222.147/AHPHG-3-16-LINE",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faf5a855d35c02adf802_68092928"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_51381248_5e16faf5a855d35c02adf802_68092928",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51381248"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPHG-3-16-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51381248",
        "ptpUserLabel": "AHPHG-3-16-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.16",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-3-16",
        "id": "5e16faeaa855d35c02adf800_51381248_AHPHG-3-16-LINE;/oms=1"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51380480_AHPHG-3-16-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "XC",
        "equipmentId": "5e16faeaa855d35c02adf800_3.16",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51381248_AHPHG-3-16-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPHG-3-16",
        "id": "5e16faeaa855d35c02adf800_51380480_AHPHG-3-16-SIG;/oms=1-5e16faeaa855d35c02adf800_51381248_AHPHG-3-16-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPHG-3-16-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51380480",
        "ptpUserLabel": "AHPHG-3-16-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.16",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-3-16",
        "id": "5e16faeaa855d35c02adf800_51380480_AHPHG-3-16-SIG;/oms=1"
    },
    {
        "userLabel": "135.252.222.147/AHPLG-3-14-SIG--135.252.222.147/AHPHG-3-16-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51249408"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_51249408_5e16faeaa855d35c02adf800_51380480",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51380480"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPLG-3-14-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51249408",
        "ptpUserLabel": "AHPLG-3-14-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-3-14",
        "id": "5e16faeaa855d35c02adf800_51249408_AHPLG-3-14-SIG;/oms=1"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51249408_AHPLG-3-14-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "XC",
        "equipmentId": "5e16faeaa855d35c02adf800_3.14",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_51250176_AHPLG-3-14-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-3-14",
        "id": "5e16faeaa855d35c02adf800_51249408_AHPLG-3-14-SIG;/oms=1-5e16faeaa855d35c02adf800_51250176_AHPLG-3-14-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "AHPLG-3-14-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_51250176",
        "ptpUserLabel": "AHPLG-3-14-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.14",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-3-14",
        "id": "5e16faeaa855d35c02adf800_51250176_AHPLG-3-14-LINE;/oms=1"
    },
    {
        "userLabel": "135.252.222.147/AHPLG-3-14-LINE--135.252.222.147/WR8-88AF-3-10-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_51250176"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_50987264_5e16faeaa855d35c02adf800_51250176",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_50987264"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "WR8-88AF-3-10-SIG;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_50987264",
        "ptpUserLabel": "WR8-88AF-3-10-SIG",
        "isSeparatedRoute": true,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.10",
        "separatedRouteElements": {
            "Tx": [
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "TAKEOVER-1578564765781",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "XC",
                    "equipmentId": "5e16faeaa855d35c02adf800_3.10",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_50987776_WR8-88AF-3-10-DROPOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-3-10",
                    "id": "5e16faeaa855d35c02adf800_50987776_WR8-88AF-3-10-DROPOUT;/frequency=9170.000-5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "WR8-88AF-3-10-DROPOUT;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faeaa855d35c02adf800_50987776",
                    "ptpUserLabel": "WR8-88AF-3-10-DROPOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "TP",
                    "equipmentId": "5e16faeaa855d35c02adf800_3.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-3-10",
                    "id": "5e16faeaa855d35c02adf800_50987776_WR8-88AF-3-10-DROPOUT;/frequency=9170.000"
                },
                {
                    "userLabel": "135.252.222.147/WR8-88AF-3-10-DROPOUT--135.252.222.147/ITLU-27-1-SIGIN",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_50987776"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faeaa855d35c02adf800_453050624_5e16faeaa855d35c02adf800_50987776",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_453050624"
                    ]
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "ITLU-27-1-SIGIN;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faeaa855d35c02adf800_453050624",
                    "ptpUserLabel": "ITLU-27-1-SIGIN",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "TP",
                    "equipmentId": "5e16faeaa855d35c02adf800_27.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-27-1",
                    "id": "5e16faeaa855d35c02adf800_453050624_ITLU-27-1-SIGIN;/frequency=9170.000"
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_453050624_ITLU-27-1-SIGIN;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "XC",
                    "equipmentId": "5e16faeaa855d35c02adf800_27.1",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_453050880_ITLU-27-1-EOUT;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "ITLU-27-1",
                    "id": "5e16faeaa855d35c02adf800_453050624_ITLU-27-1-SIGIN;/frequency=9170.000-5e16faeaa855d35c02adf800_453050880_ITLU-27-1-EOUT;/frequency=9170.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "ITLU-27-1-EOUT;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faeaa855d35c02adf800_453050880",
                    "ptpUserLabel": "ITLU-27-1-EOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "TP",
                    "equipmentId": "5e16faeaa855d35c02adf800_27.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-27-1",
                    "id": "5e16faeaa855d35c02adf800_453050880_ITLU-27-1-EOUT;/frequency=9170.000"
                },
                {
                    "userLabel": "135.252.222.147/ITLU-27-1-EOUT--135.252.222.147/SFD44-25-1-OMD",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_453050880"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faeaa855d35c02adf800_419507456_5e16faeaa855d35c02adf800_453050880",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_419507456"
                    ]
                }
            ],
            "Rx": [
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "TAKEOVER-1578564765781",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_50988032_WR8-88AF-3-10-ADDIN1;/frequency=9170.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "XC",
                    "equipmentId": "5e16faeaa855d35c02adf800_3.10",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-3-10",
                    "id": "5e16faeaa855d35c02adf800_50988032_WR8-88AF-3-10-ADDIN1;/frequency=9170.000-5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5e16faeaa855d35c02adf800",
                    "userLabel": "WR8-88AF-3-10-ADDIN1;/frequency=9170.000",
                    "isMergedRoute": null,
                    "ptpId": "5e16faeaa855d35c02adf800_50988032",
                    "ptpUserLabel": "WR8-88AF-3-10-ADDIN1",
                    "isSeparatedRoute": null,
                    "neUserLabel": "135.252.222.147",
                    "type": "TP",
                    "equipmentId": "5e16faeaa855d35c02adf800_3.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-3-10",
                    "id": "5e16faeaa855d35c02adf800_50988032_WR8-88AF-3-10-ADDIN1;/frequency=9170.000"
                },
                {
                    "userLabel": "135.252.222.147/SFD44-25-1-OMD--135.252.222.147/WR8-88AF-3-10-ADDIN1",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e16faeaa855d35c02adf800_419507456"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e16faeaa855d35c02adf800_419507456_5e16faeaa855d35c02adf800_50988032",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5e16faeaa855d35c02adf800_50988032"
                    ]
                }
            ]
        },
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "WR8-88AF-3-10",
        "id": "5e16faeaa855d35c02adf800_50987264_WR8-88AF-3-10-SIG;/frequency=9170.000"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "SFD44-25-1-OMD;/frequency=9170.000",
        "isMergedRoute": true,
        "ptpId": "5e16faeaa855d35c02adf800_419507456",
        "ptpUserLabel": "SFD44-25-1-OMD",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_25.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5e16faeaa855d35c02adf800_419507456_SFD44-25-1-OMD;/frequency=9170.000"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_419507200_SFD44-25-1-9170;/frequency=9170.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "XC",
        "equipmentId": "5e16faeaa855d35c02adf800_25.1",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_419507456_SFD44-25-1-OMD;/frequency=9170.000"
        ],
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5e16faeaa855d35c02adf800_419507200_SFD44-25-1-9170;/frequency=9170.000-5e16faeaa855d35c02adf800_419507456_SFD44-25-1-OMD;/frequency=9170.000",
        "direction": "BI"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "SFD44-25-1-9170;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_419507200",
        "ptpUserLabel": "SFD44-25-1-9170",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_25.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5e16faeaa855d35c02adf800_419507200_SFD44-25-1-9170;/frequency=9170.000"
    },
    {
        "userLabel": "135.252.222.147/SFD44-25-1-9170--135.252.222.147/130SNX10-3-2-L1",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_419507200"
        ],
        "isSeparatedRoute": null,
        "id": "5e16faeaa855d35c02adf800_419507200_5e16faeaa855d35c02adf800_50462976",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_50462976"
        ]
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "130SNX10-3-2-L1;/otu4=1/odu4=1/odu2=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_50462976",
        "ptpUserLabel": "130SNX10-3-2-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.2",
        "tpType": "CTP",
        "layerRate": "ODU2",
        "equipmentUserLabel": "130SNX10-3-2",
        "id": "5e16faeaa855d35c02adf800_50462976_130SNX10-3-2-L1;/otu4=1/odu4=1/odu2=1"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e16faeaa855d35c02adf800_50463232_130SNX10-3-2-C1;/odu2=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "XC",
        "equipmentId": "5e16faeaa855d35c02adf800_3.2",
        "zEndNodes": [
            "5e16faeaa855d35c02adf800_50462976_130SNX10-3-2-L1;/otu4=1/odu4=1/odu2=1"
        ],
        "equipmentUserLabel": "130SNX10-3-2",
        "id": "5e16faeaa855d35c02adf800_50463232_130SNX10-3-2-C1;/odu2=1-5e16faeaa855d35c02adf800_50462976_130SNX10-3-2-L1;/otu4=1/odu4=1/odu2=1",
        "direction": "BI"
    },
    {
        "neId": "5e16faeaa855d35c02adf800",
        "userLabel": "130SNX10-3-2-C1;/odu2=1",
        "isMergedRoute": null,
        "ptpId": "5e16faeaa855d35c02adf800_50463232",
        "ptpUserLabel": "130SNX10-3-2-C1",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.147",
        "type": "TP",
        "equipmentId": "5e16faeaa855d35c02adf800_3.2",
        "tpType": "CTP",
        "layerRate": "ODU2",
        "equipmentUserLabel": "130SNX10-3-2",
        "id": "5e16faeaa855d35c02adf800_50463232_130SNX10-3-2-C1;/odu2=1"
    }
];
const flowInfo1 = [
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "11QPA4-1-8-C4;/odu2=1",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_17303552",
        "ptpUserLabel": "11QPA4-1-8-C4",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_1.8",
        "tpType": "CTP",
        "layerRate": "ODU2",
        "equipmentUserLabel": "11QPA4-1-8",
        "id": "5c4812a2c245544f4eac0cd4_17303552_11QPA4-1-8-C4;/odu2=1"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812a2c245544f4eac0cd4_17303552_11QPA4-1-8-C4;/odu2=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "XC",
        "equipmentId": "5c4812a2c245544f4eac0cd4_1.8",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_17302528_11QPA4-1-8-L4;/otu2=1/odu2=1"
        ],
        "equipmentUserLabel": "11QPA4-1-8",
        "id": "5c4812a2c245544f4eac0cd4_17303552_11QPA4-1-8-C4;/odu2=1-5c4812a2c245544f4eac0cd4_17302528_11QPA4-1-8-L4;/otu2=1/odu2=1",
        "direction": "BI"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "11QPA4-1-8-L4;/otu2=1/odu2=1",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_17302528",
        "ptpUserLabel": "11QPA4-1-8-L4",
        "isSeparatedRoute": true,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_1.8",
        "separatedRouteElements": {
            "Tx": [
                {
                    "userLabel": "201/11QPA4-1-8-L4--201/11QPA4-1-8-VA4",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812a2c245544f4eac0cd4_17302528"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812a2c245544f4eac0cd4_17302528_5c4812a2c245544f4eac0cd4_17304576",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812a2c245544f4eac0cd4_17304576"
                    ]
                },
                {
                    "neId": "5c4812a2c245544f4eac0cd4",
                    "userLabel": "11QPA4-1-8-VA4;/frequency=/tunable-number=1",
                    "isMergedRoute": null,
                    "ptpId": "5c4812a2c245544f4eac0cd4_17304576",
                    "ptpUserLabel": "11QPA4-1-8-VA4",
                    "isSeparatedRoute": null,
                    "neUserLabel": "201",
                    "type": "TP",
                    "equipmentId": "5c4812a2c245544f4eac0cd4_1.8",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "11QPA4-1-8",
                    "id": "5c4812a2c245544f4eac0cd4_17304576_11QPA4-1-8-VA4;/frequency=/tunable-number=1"
                },
                {
                    "userLabel": "201/11QPA4-1-8-VA4--201/SFD44-25-1-9440",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812a2c245544f4eac0cd4_17304576"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812a2c245544f4eac0cd4_17304576_5c4812a2c245544f4eac0cd4_419500288",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812a2c245544f4eac0cd4_419500288"
                    ]
                }
            ],
            "Rx": [
                {
                    "userLabel": "201/SFD44-25-1-9440--201/11QPA4-1-8-L4",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812a2c245544f4eac0cd4_419500288"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812a2c245544f4eac0cd4_17302528_5c4812a2c245544f4eac0cd4_419500288",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812a2c245544f4eac0cd4_17302528"
                    ]
                }
            ]
        },
        "tpType": "CTP",
        "layerRate": "ODU2",
        "equipmentUserLabel": "11QPA4-1-8",
        "id": "5c4812a2c245544f4eac0cd4_17302528_11QPA4-1-8-L4;/otu2=1/odu2=1"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "SFD44-25-1-9440;/frequency=9440.000",
        "isMergedRoute": true,
        "ptpId": "5c4812a2c245544f4eac0cd4_419500288",
        "ptpUserLabel": "SFD44-25-1-9440",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_25.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5c4812a2c245544f4eac0cd4_419500288_SFD44-25-1-9440;/frequency=9440.000"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812a2c245544f4eac0cd4_419500288_SFD44-25-1-9440;/frequency=9440.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "XC",
        "equipmentId": "5c4812a2c245544f4eac0cd4_25.1",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_419507456_SFD44-25-1-OMD;/frequency=9440.000"
        ],
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5c4812a2c245544f4eac0cd4_419500288_SFD44-25-1-9440;/frequency=9440.000-5c4812a2c245544f4eac0cd4_419507456_SFD44-25-1-OMD;/frequency=9440.000",
        "direction": "BI"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "SFD44-25-1-OMD;/frequency=9440.000",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_419507456",
        "ptpUserLabel": "SFD44-25-1-OMD",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_25.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5c4812a2c245544f4eac0cd4_419507456_SFD44-25-1-OMD;/frequency=9440.000"
    },
    {
        "userLabel": "201/AHPLG-1-5-LINE--201/SFD44-25-1-OMD",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c4812a2c245544f4eac0cd4_17105920"
        ],
        "isSeparatedRoute": null,
        "id": "5c4812a2c245544f4eac0cd4_17105920_5c4812a2c245544f4eac0cd4_419507456",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_419507456"
        ]
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "AHPLG-1-5-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_17105920",
        "ptpUserLabel": "AHPLG-1-5-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_1.5",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-5",
        "id": "5c4812a2c245544f4eac0cd4_17105920_AHPLG-1-5-LINE;/oms=1"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812a2c245544f4eac0cd4_17105152_AHPLG-1-5-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "XC",
        "equipmentId": "5c4812a2c245544f4eac0cd4_1.5",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_17105920_AHPLG-1-5-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-1-5",
        "id": "5c4812a2c245544f4eac0cd4_17105152_AHPLG-1-5-SIG;/oms=1-5c4812a2c245544f4eac0cd4_17105920_AHPLG-1-5-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "AHPLG-1-5-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_17105152",
        "ptpUserLabel": "AHPLG-1-5-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_1.5",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-5",
        "id": "5c4812a2c245544f4eac0cd4_17105152_AHPLG-1-5-SIG;/oms=1"
    },
    {
        "userLabel": "201/AHPLG-1-4-SIG--201/AHPLG-1-5-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c4812a2c245544f4eac0cd4_17039616"
        ],
        "isSeparatedRoute": null,
        "id": "5c4812a2c245544f4eac0cd4_17039616_5c4812a2c245544f4eac0cd4_17105152",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_17105152"
        ]
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "AHPLG-1-4-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_17039616",
        "ptpUserLabel": "AHPLG-1-4-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_1.4",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-4",
        "id": "5c4812a2c245544f4eac0cd4_17039616_AHPLG-1-4-SIG;/oms=1"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812a2c245544f4eac0cd4_17039616_AHPLG-1-4-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "XC",
        "equipmentId": "5c4812a2c245544f4eac0cd4_1.4",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_17040384_AHPLG-1-4-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-1-4",
        "id": "5c4812a2c245544f4eac0cd4_17039616_AHPLG-1-4-SIG;/oms=1-5c4812a2c245544f4eac0cd4_17040384_AHPLG-1-4-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "AHPLG-1-4-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_17040384",
        "ptpUserLabel": "AHPLG-1-4-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_1.4",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-4",
        "id": "5c4812a2c245544f4eac0cd4_17040384_AHPLG-1-4-LINE;/oms=1"
    },
    {
        "userLabel": "ne199/AHPLG-1-2-LINE--201/AHPLG-1-4-LINE",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c481289c245544f4eac0cc9_16909312"
        ],
        "isSeparatedRoute": null,
        "id": "5c481289c245544f4eac0cc9_16909312_5c4812a2c245544f4eac0cd4_17040384",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_17040384"
        ]
    },
    {
        "neId": "5c481289c245544f4eac0cc9",
        "userLabel": "AHPLG-1-2-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c481289c245544f4eac0cc9_16909312",
        "ptpUserLabel": "AHPLG-1-2-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "ne199",
        "type": "TP",
        "equipmentId": "5c481289c245544f4eac0cc9_1.2",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-2",
        "id": "5c481289c245544f4eac0cc9_16909312_AHPLG-1-2-LINE;/oms=1"
    },
    {
        "neId": "5c481289c245544f4eac0cc9",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c481289c245544f4eac0cc9_16908544_AHPLG-1-2-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "ne199",
        "type": "XC",
        "equipmentId": "5c481289c245544f4eac0cc9_1.2",
        "zEndNodes": [
            "5c481289c245544f4eac0cc9_16909312_AHPLG-1-2-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-1-2",
        "id": "5c481289c245544f4eac0cc9_16908544_AHPLG-1-2-SIG;/oms=1-5c481289c245544f4eac0cc9_16909312_AHPLG-1-2-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5c481289c245544f4eac0cc9",
        "userLabel": "AHPLG-1-2-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c481289c245544f4eac0cc9_16908544",
        "ptpUserLabel": "AHPLG-1-2-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "ne199",
        "type": "TP",
        "equipmentId": "5c481289c245544f4eac0cc9_1.2",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-2",
        "id": "5c481289c245544f4eac0cc9_16908544_AHPLG-1-2-SIG;/oms=1"
    },
    {
        "userLabel": "ne199/AHPLG-1-2-SIG--ne199/AHPLG-1-5-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c481289c245544f4eac0cc9_16908544"
        ],
        "isSeparatedRoute": null,
        "id": "5c481289c245544f4eac0cc9_16908544_5c481289c245544f4eac0cc9_17105152",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c481289c245544f4eac0cc9_17105152"
        ]
    },
    {
        "neId": "5c481289c245544f4eac0cc9",
        "userLabel": "AHPLG-1-5-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c481289c245544f4eac0cc9_17105152",
        "ptpUserLabel": "AHPLG-1-5-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "ne199",
        "type": "TP",
        "equipmentId": "5c481289c245544f4eac0cc9_1.5",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-5",
        "id": "5c481289c245544f4eac0cc9_17105152_AHPLG-1-5-SIG;/oms=1"
    },
    {
        "neId": "5c481289c245544f4eac0cc9",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c481289c245544f4eac0cc9_17105152_AHPLG-1-5-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "ne199",
        "type": "XC",
        "equipmentId": "5c481289c245544f4eac0cc9_1.5",
        "zEndNodes": [
            "5c481289c245544f4eac0cc9_17105920_AHPLG-1-5-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-1-5",
        "id": "5c481289c245544f4eac0cc9_17105152_AHPLG-1-5-SIG;/oms=1-5c481289c245544f4eac0cc9_17105920_AHPLG-1-5-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5c481289c245544f4eac0cc9",
        "userLabel": "AHPLG-1-5-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c481289c245544f4eac0cc9_17105920",
        "ptpUserLabel": "AHPLG-1-5-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "ne199",
        "type": "TP",
        "equipmentId": "5c481289c245544f4eac0cc9_1.5",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-5",
        "id": "5c481289c245544f4eac0cc9_17105920_AHPLG-1-5-LINE;/oms=1"
    },
    {
        "userLabel": "ne199/AHPLG-1-5-LINE--202/AHPLG-1-13-LINE",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c481289c245544f4eac0cc9_17105920"
        ],
        "isSeparatedRoute": null,
        "id": "5c481289c245544f4eac0cc9_17105920_5c4812adc245544f4eac0cd5_17630208",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_17630208"
        ]
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "AHPLG-1-13-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_17630208",
        "ptpUserLabel": "AHPLG-1-13-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.13",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-13",
        "id": "5c4812adc245544f4eac0cd5_17630208_AHPLG-1-13-LINE;/oms=1"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812adc245544f4eac0cd5_17629440_AHPLG-1-13-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "XC",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.13",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_17630208_AHPLG-1-13-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-1-13",
        "id": "5c4812adc245544f4eac0cd5_17629440_AHPLG-1-13-SIG;/oms=1-5c4812adc245544f4eac0cd5_17630208_AHPLG-1-13-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "AHPLG-1-13-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_17629440",
        "ptpUserLabel": "AHPLG-1-13-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.13",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-13",
        "id": "5c4812adc245544f4eac0cd5_17629440_AHPLG-1-13-SIG;/oms=1"
    },
    {
        "userLabel": "202/AHPLG-1-3-SIG--202/AHPLG-1-13-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c4812adc245544f4eac0cd5_16974080"
        ],
        "isSeparatedRoute": null,
        "id": "5c4812adc245544f4eac0cd5_16974080_5c4812adc245544f4eac0cd5_17629440",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_17629440"
        ]
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "AHPLG-1-3-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_16974080",
        "ptpUserLabel": "AHPLG-1-3-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.3",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-3",
        "id": "5c4812adc245544f4eac0cd5_16974080_AHPLG-1-3-SIG;/oms=1"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812adc245544f4eac0cd5_16974080_AHPLG-1-3-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "XC",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.3",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_16974848_AHPLG-1-3-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-1-3",
        "id": "5c4812adc245544f4eac0cd5_16974080_AHPLG-1-3-SIG;/oms=1-5c4812adc245544f4eac0cd5_16974848_AHPLG-1-3-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "AHPLG-1-3-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_16974848",
        "ptpUserLabel": "AHPLG-1-3-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.3",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-3",
        "id": "5c4812adc245544f4eac0cd5_16974848_AHPLG-1-3-LINE;/oms=1"
    },
    {
        "userLabel": "202/AHPLG-1-3-LINE--202/SFD44-25-1-OMD",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c4812adc245544f4eac0cd5_16974848"
        ],
        "isSeparatedRoute": null,
        "id": "5c4812adc245544f4eac0cd5_16974848_5c4812adc245544f4eac0cd5_419507456",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_419507456"
        ]
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "SFD44-25-1-OMD;/frequency=9440.000",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_419507456",
        "ptpUserLabel": "SFD44-25-1-OMD",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_25.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5c4812adc245544f4eac0cd5_419507456_SFD44-25-1-OMD;/frequency=9440.000"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812adc245544f4eac0cd5_419500288_SFD44-25-1-9440;/frequency=9440.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "XC",
        "equipmentId": "5c4812adc245544f4eac0cd5_25.1",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_419507456_SFD44-25-1-OMD;/frequency=9440.000"
        ],
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5c4812adc245544f4eac0cd5_419500288_SFD44-25-1-9440;/frequency=9440.000-5c4812adc245544f4eac0cd5_419507456_SFD44-25-1-OMD;/frequency=9440.000",
        "direction": "BI"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "SFD44-25-1-9440;/frequency=9440.000",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_419500288",
        "ptpUserLabel": "SFD44-25-1-9440",
        "isSeparatedRoute": true,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_25.1",
        "separatedRouteElements": {
            "Tx": [
                {
                    "userLabel": "202/SFD44-25-1-9440--202/11QPA4-1-10-L4",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812adc245544f4eac0cd5_419500288"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812adc245544f4eac0cd5_17433600_5c4812adc245544f4eac0cd5_419500288",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812adc245544f4eac0cd5_17433600"
                    ]
                }
            ],
            "Rx": [
                {
                    "userLabel": "202/11QPA4-1-10-VA4--202/SFD44-25-1-9440",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812adc245544f4eac0cd5_17435648"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812adc245544f4eac0cd5_17435648_5c4812adc245544f4eac0cd5_419500288",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812adc245544f4eac0cd5_419500288"
                    ]
                },
                {
                    "neId": "5c4812adc245544f4eac0cd5",
                    "userLabel": "11QPA4-1-10-VA4;/frequency=/tunable-number=1",
                    "isMergedRoute": null,
                    "ptpId": "5c4812adc245544f4eac0cd5_17435648",
                    "ptpUserLabel": "11QPA4-1-10-VA4",
                    "isSeparatedRoute": null,
                    "neUserLabel": "202",
                    "type": "TP",
                    "equipmentId": "5c4812adc245544f4eac0cd5_1.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "11QPA4-1-10",
                    "id": "5c4812adc245544f4eac0cd5_17435648_11QPA4-1-10-VA4;/frequency=/tunable-number=1"
                },
                {
                    "userLabel": "202/11QPA4-1-10-L4--202/11QPA4-1-10-VA4",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812adc245544f4eac0cd5_17433600"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812adc245544f4eac0cd5_17433600_5c4812adc245544f4eac0cd5_17435648",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812adc245544f4eac0cd5_17435648"
                    ]
                }
            ]
        },
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5c4812adc245544f4eac0cd5_419500288_SFD44-25-1-9440;/frequency=9440.000"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "11QPA4-1-10-L4;/otu2=1/odu2=1",
        "isMergedRoute": true,
        "ptpId": "5c4812adc245544f4eac0cd5_17433600",
        "ptpUserLabel": "11QPA4-1-10-L4",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.10",
        "tpType": "CTP",
        "layerRate": "ODU2",
        "equipmentUserLabel": "11QPA4-1-10",
        "id": "5c4812adc245544f4eac0cd5_17433600_11QPA4-1-10-L4;/otu2=1/odu2=1"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812adc245544f4eac0cd5_17434624_11QPA4-1-10-C4;/odu2=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "XC",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.10",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_17433600_11QPA4-1-10-L4;/otu2=1/odu2=1"
        ],
        "equipmentUserLabel": "11QPA4-1-10",
        "id": "5c4812adc245544f4eac0cd5_17434624_11QPA4-1-10-C4;/odu2=1-5c4812adc245544f4eac0cd5_17433600_11QPA4-1-10-L4;/otu2=1/odu2=1",
        "direction": "BI"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "11QPA4-1-10-C4;/odu2=1",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_17434624",
        "ptpUserLabel": "11QPA4-1-10-C4",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.10",
        "tpType": "CTP",
        "layerRate": "ODU2",
        "equipmentUserLabel": "11QPA4-1-10",
        "id": "5c4812adc245544f4eac0cd5_17434624_11QPA4-1-10-C4;/odu2=1"
    }
];
const flowInfo2 = [
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "11QPA4-1-8-L4;/otu2=1/odu2=1",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_17302528",
        "ptpUserLabel": "11QPA4-1-8-L4",
        "isSeparatedRoute": true,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_1.8",
        "separatedRouteElements": {
            "Tx": [
                {
                    "userLabel": "201/11QPA4-1-8-L4--201/11QPA4-1-8-VA4",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812a2c245544f4eac0cd4_17302528"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812a2c245544f4eac0cd4_17302528_5c4812a2c245544f4eac0cd4_17304576",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812a2c245544f4eac0cd4_17304576"
                    ]
                },
                {
                    "neId": "5c4812a2c245544f4eac0cd4",
                    "userLabel": "11QPA4-1-8-VA4;/frequency=/tunable-number=1",
                    "isMergedRoute": null,
                    "ptpId": "5c4812a2c245544f4eac0cd4_17304576",
                    "ptpUserLabel": "11QPA4-1-8-VA4",
                    "isSeparatedRoute": null,
                    "neUserLabel": "201",
                    "type": "TP",
                    "equipmentId": "5c4812a2c245544f4eac0cd4_1.8",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "11QPA4-1-8",
                    "id": "5c4812a2c245544f4eac0cd4_17304576_11QPA4-1-8-VA4;/frequency=/tunable-number=1"
                },
                {
                    "userLabel": "201/11QPA4-1-8-VA4--201/SFD44-25-1-9440",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812a2c245544f4eac0cd4_17304576"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812a2c245544f4eac0cd4_17304576_5c4812a2c245544f4eac0cd4_419500288",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812a2c245544f4eac0cd4_419500288"
                    ]
                }
            ],
            "Rx": [
                {
                    "userLabel": "201/SFD44-25-1-9440--201/11QPA4-1-8-L4",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812a2c245544f4eac0cd4_419500288"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812a2c245544f4eac0cd4_17302528_5c4812a2c245544f4eac0cd4_419500288",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812a2c245544f4eac0cd4_17302528"
                    ]
                }
            ]
        },
        "tpType": "CTP",
        "layerRate": "ODU2",
        "equipmentUserLabel": "11QPA4-1-8",
        "id": "5c4812a2c245544f4eac0cd4_17302528_11QPA4-1-8-L4;/otu2=1/odu2=1"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "SFD44-25-1-9440;/frequency=9440.000",
        "isMergedRoute": true,
        "ptpId": "5c4812a2c245544f4eac0cd4_419500288",
        "ptpUserLabel": "SFD44-25-1-9440",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_25.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5c4812a2c245544f4eac0cd4_419500288_SFD44-25-1-9440;/frequency=9440.000"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812a2c245544f4eac0cd4_419500288_SFD44-25-1-9440;/frequency=9440.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "XC",
        "equipmentId": "5c4812a2c245544f4eac0cd4_25.1",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_419507456_SFD44-25-1-OMD;/frequency=9440.000"
        ],
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5c4812a2c245544f4eac0cd4_419500288_SFD44-25-1-9440;/frequency=9440.000-5c4812a2c245544f4eac0cd4_419507456_SFD44-25-1-OMD;/frequency=9440.000",
        "direction": "BI"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "SFD44-25-1-OMD;/frequency=9440.000",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_419507456",
        "ptpUserLabel": "SFD44-25-1-OMD",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_25.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5c4812a2c245544f4eac0cd4_419507456_SFD44-25-1-OMD;/frequency=9440.000"
    },
    {
        "userLabel": "201/AHPLG-1-5-LINE--201/SFD44-25-1-OMD",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c4812a2c245544f4eac0cd4_17105920"
        ],
        "isSeparatedRoute": null,
        "id": "5c4812a2c245544f4eac0cd4_17105920_5c4812a2c245544f4eac0cd4_419507456",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_419507456"
        ]
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "AHPLG-1-5-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_17105920",
        "ptpUserLabel": "AHPLG-1-5-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_1.5",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-5",
        "id": "5c4812a2c245544f4eac0cd4_17105920_AHPLG-1-5-LINE;/oms=1"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812a2c245544f4eac0cd4_17105152_AHPLG-1-5-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "XC",
        "equipmentId": "5c4812a2c245544f4eac0cd4_1.5",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_17105920_AHPLG-1-5-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-1-5",
        "id": "5c4812a2c245544f4eac0cd4_17105152_AHPLG-1-5-SIG;/oms=1-5c4812a2c245544f4eac0cd4_17105920_AHPLG-1-5-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "AHPLG-1-5-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_17105152",
        "ptpUserLabel": "AHPLG-1-5-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_1.5",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-5",
        "id": "5c4812a2c245544f4eac0cd4_17105152_AHPLG-1-5-SIG;/oms=1"
    },
    {
        "userLabel": "201/AHPLG-1-4-SIG--201/AHPLG-1-5-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c4812a2c245544f4eac0cd4_17039616"
        ],
        "isSeparatedRoute": null,
        "id": "5c4812a2c245544f4eac0cd4_17039616_5c4812a2c245544f4eac0cd4_17105152",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_17105152"
        ]
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "AHPLG-1-4-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_17039616",
        "ptpUserLabel": "AHPLG-1-4-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_1.4",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-4",
        "id": "5c4812a2c245544f4eac0cd4_17039616_AHPLG-1-4-SIG;/oms=1"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812a2c245544f4eac0cd4_17039616_AHPLG-1-4-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "XC",
        "equipmentId": "5c4812a2c245544f4eac0cd4_1.4",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_17040384_AHPLG-1-4-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-1-4",
        "id": "5c4812a2c245544f4eac0cd4_17039616_AHPLG-1-4-SIG;/oms=1-5c4812a2c245544f4eac0cd4_17040384_AHPLG-1-4-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "AHPLG-1-4-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_17040384",
        "ptpUserLabel": "AHPLG-1-4-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_1.4",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-4",
        "id": "5c4812a2c245544f4eac0cd4_17040384_AHPLG-1-4-LINE;/oms=1"
    },
    {
        "userLabel": "ne199/AHPLG-1-2-LINE--201/AHPLG-1-4-LINE",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c481289c245544f4eac0cc9_16909312"
        ],
        "isSeparatedRoute": null,
        "id": "5c481289c245544f4eac0cc9_16909312_5c4812a2c245544f4eac0cd4_17040384",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_17040384"
        ]
    },
    {
        "neId": "5c481289c245544f4eac0cc9",
        "userLabel": "AHPLG-1-2-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c481289c245544f4eac0cc9_16909312",
        "ptpUserLabel": "AHPLG-1-2-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "ne199",
        "type": "TP",
        "equipmentId": "5c481289c245544f4eac0cc9_1.2",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-2",
        "id": "5c481289c245544f4eac0cc9_16909312_AHPLG-1-2-LINE;/oms=1"
    },
    {
        "neId": "5c481289c245544f4eac0cc9",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c481289c245544f4eac0cc9_16908544_AHPLG-1-2-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "ne199",
        "type": "XC",
        "equipmentId": "5c481289c245544f4eac0cc9_1.2",
        "zEndNodes": [
            "5c481289c245544f4eac0cc9_16909312_AHPLG-1-2-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-1-2",
        "id": "5c481289c245544f4eac0cc9_16908544_AHPLG-1-2-SIG;/oms=1-5c481289c245544f4eac0cc9_16909312_AHPLG-1-2-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5c481289c245544f4eac0cc9",
        "userLabel": "AHPLG-1-2-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c481289c245544f4eac0cc9_16908544",
        "ptpUserLabel": "AHPLG-1-2-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "ne199",
        "type": "TP",
        "equipmentId": "5c481289c245544f4eac0cc9_1.2",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-2",
        "id": "5c481289c245544f4eac0cc9_16908544_AHPLG-1-2-SIG;/oms=1"
    },
    {
        "userLabel": "ne199/AHPLG-1-2-SIG--ne199/AHPLG-1-5-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c481289c245544f4eac0cc9_16908544"
        ],
        "isSeparatedRoute": null,
        "id": "5c481289c245544f4eac0cc9_16908544_5c481289c245544f4eac0cc9_17105152",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c481289c245544f4eac0cc9_17105152"
        ]
    },
    {
        "neId": "5c481289c245544f4eac0cc9",
        "userLabel": "AHPLG-1-5-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c481289c245544f4eac0cc9_17105152",
        "ptpUserLabel": "AHPLG-1-5-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "ne199",
        "type": "TP",
        "equipmentId": "5c481289c245544f4eac0cc9_1.5",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-5",
        "id": "5c481289c245544f4eac0cc9_17105152_AHPLG-1-5-SIG;/oms=1"
    },
    {
        "neId": "5c481289c245544f4eac0cc9",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c481289c245544f4eac0cc9_17105152_AHPLG-1-5-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "ne199",
        "type": "XC",
        "equipmentId": "5c481289c245544f4eac0cc9_1.5",
        "zEndNodes": [
            "5c481289c245544f4eac0cc9_17105920_AHPLG-1-5-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-1-5",
        "id": "5c481289c245544f4eac0cc9_17105152_AHPLG-1-5-SIG;/oms=1-5c481289c245544f4eac0cc9_17105920_AHPLG-1-5-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5c481289c245544f4eac0cc9",
        "userLabel": "AHPLG-1-5-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c481289c245544f4eac0cc9_17105920",
        "ptpUserLabel": "AHPLG-1-5-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "ne199",
        "type": "TP",
        "equipmentId": "5c481289c245544f4eac0cc9_1.5",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-5",
        "id": "5c481289c245544f4eac0cc9_17105920_AHPLG-1-5-LINE;/oms=1"
    },
    {
        "userLabel": "ne199/AHPLG-1-5-LINE--202/AHPLG-1-13-LINE",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c481289c245544f4eac0cc9_17105920"
        ],
        "isSeparatedRoute": null,
        "id": "5c481289c245544f4eac0cc9_17105920_5c4812adc245544f4eac0cd5_17630208",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_17630208"
        ]
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "AHPLG-1-13-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_17630208",
        "ptpUserLabel": "AHPLG-1-13-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.13",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-13",
        "id": "5c4812adc245544f4eac0cd5_17630208_AHPLG-1-13-LINE;/oms=1"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812adc245544f4eac0cd5_17629440_AHPLG-1-13-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "XC",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.13",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_17630208_AHPLG-1-13-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-1-13",
        "id": "5c4812adc245544f4eac0cd5_17629440_AHPLG-1-13-SIG;/oms=1-5c4812adc245544f4eac0cd5_17630208_AHPLG-1-13-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "AHPLG-1-13-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_17629440",
        "ptpUserLabel": "AHPLG-1-13-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.13",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-13",
        "id": "5c4812adc245544f4eac0cd5_17629440_AHPLG-1-13-SIG;/oms=1"
    },
    {
        "userLabel": "202/AHPLG-1-3-SIG--202/AHPLG-1-13-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c4812adc245544f4eac0cd5_16974080"
        ],
        "isSeparatedRoute": null,
        "id": "5c4812adc245544f4eac0cd5_16974080_5c4812adc245544f4eac0cd5_17629440",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_17629440"
        ]
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "AHPLG-1-3-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_16974080",
        "ptpUserLabel": "AHPLG-1-3-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.3",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-3",
        "id": "5c4812adc245544f4eac0cd5_16974080_AHPLG-1-3-SIG;/oms=1"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812adc245544f4eac0cd5_16974080_AHPLG-1-3-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "XC",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.3",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_16974848_AHPLG-1-3-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-1-3",
        "id": "5c4812adc245544f4eac0cd5_16974080_AHPLG-1-3-SIG;/oms=1-5c4812adc245544f4eac0cd5_16974848_AHPLG-1-3-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "AHPLG-1-3-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_16974848",
        "ptpUserLabel": "AHPLG-1-3-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.3",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-3",
        "id": "5c4812adc245544f4eac0cd5_16974848_AHPLG-1-3-LINE;/oms=1"
    },
    {
        "userLabel": "202/AHPLG-1-3-LINE--202/SFD44-25-1-OMD",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c4812adc245544f4eac0cd5_16974848"
        ],
        "isSeparatedRoute": null,
        "id": "5c4812adc245544f4eac0cd5_16974848_5c4812adc245544f4eac0cd5_419507456",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_419507456"
        ]
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "SFD44-25-1-OMD;/frequency=9440.000",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_419507456",
        "ptpUserLabel": "SFD44-25-1-OMD",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_25.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5c4812adc245544f4eac0cd5_419507456_SFD44-25-1-OMD;/frequency=9440.000"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812adc245544f4eac0cd5_419500288_SFD44-25-1-9440;/frequency=9440.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "XC",
        "equipmentId": "5c4812adc245544f4eac0cd5_25.1",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_419507456_SFD44-25-1-OMD;/frequency=9440.000"
        ],
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5c4812adc245544f4eac0cd5_419500288_SFD44-25-1-9440;/frequency=9440.000-5c4812adc245544f4eac0cd5_419507456_SFD44-25-1-OMD;/frequency=9440.000",
        "direction": "BI"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "SFD44-25-1-9440;/frequency=9440.000",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_419500288",
        "ptpUserLabel": "SFD44-25-1-9440",
        "isSeparatedRoute": true,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_25.1",
        "separatedRouteElements": {
            "Tx": [
                {
                    "userLabel": "202/SFD44-25-1-9440--202/11QPA4-1-10-L4",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812adc245544f4eac0cd5_419500288"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812adc245544f4eac0cd5_17433600_5c4812adc245544f4eac0cd5_419500288",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812adc245544f4eac0cd5_17433600"
                    ]
                }
            ],
            "Rx": [
                {
                    "userLabel": "202/11QPA4-1-10-VA4--202/SFD44-25-1-9440",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812adc245544f4eac0cd5_17435648"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812adc245544f4eac0cd5_17435648_5c4812adc245544f4eac0cd5_419500288",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812adc245544f4eac0cd5_419500288"
                    ]
                },
                {
                    "neId": "5c4812adc245544f4eac0cd5",
                    "userLabel": "11QPA4-1-10-VA4;/frequency=/tunable-number=1",
                    "isMergedRoute": null,
                    "ptpId": "5c4812adc245544f4eac0cd5_17435648",
                    "ptpUserLabel": "11QPA4-1-10-VA4",
                    "isSeparatedRoute": null,
                    "neUserLabel": "202",
                    "type": "TP",
                    "equipmentId": "5c4812adc245544f4eac0cd5_1.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "11QPA4-1-10",
                    "id": "5c4812adc245544f4eac0cd5_17435648_11QPA4-1-10-VA4;/frequency=/tunable-number=1"
                },
                {
                    "userLabel": "202/11QPA4-1-10-L4--202/11QPA4-1-10-VA4",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812adc245544f4eac0cd5_17433600"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812adc245544f4eac0cd5_17433600_5c4812adc245544f4eac0cd5_17435648",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812adc245544f4eac0cd5_17435648"
                    ]
                }
            ]
        },
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5c4812adc245544f4eac0cd5_419500288_SFD44-25-1-9440;/frequency=9440.000"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "11QPA4-1-10-L4;/otu2=1/odu2=1",
        "isMergedRoute": true,
        "ptpId": "5c4812adc245544f4eac0cd5_17433600",
        "ptpUserLabel": "11QPA4-1-10-L4",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.10",
        "tpType": "CTP",
        "layerRate": "ODU2",
        "equipmentUserLabel": "11QPA4-1-10",
        "id": "5c4812adc245544f4eac0cd5_17433600_11QPA4-1-10-L4;/otu2=1/odu2=1"
    }
];
const flowInfo3 = [
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "11QPA4-1-8-L4;/frequency=/tunable-number=1",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_17302528",
        "ptpUserLabel": "11QPA4-1-8-L4",
        "isSeparatedRoute": true,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_1.8",
        "separatedRouteElements": {
            "Tx": [
                {
                    "userLabel": "201/11QPA4-1-8-L4--201/11QPA4-1-8-VA4",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812a2c245544f4eac0cd4_17302528"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812a2c245544f4eac0cd4_17302528_5c4812a2c245544f4eac0cd4_17304576",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812a2c245544f4eac0cd4_17304576"
                    ]
                },
                {
                    "neId": "5c4812a2c245544f4eac0cd4",
                    "userLabel": "11QPA4-1-8-VA4;/frequency=/tunable-number=1",
                    "isMergedRoute": null,
                    "ptpId": "5c4812a2c245544f4eac0cd4_17304576",
                    "ptpUserLabel": "11QPA4-1-8-VA4",
                    "isSeparatedRoute": null,
                    "neUserLabel": "201",
                    "type": "TP",
                    "equipmentId": "5c4812a2c245544f4eac0cd4_1.8",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "11QPA4-1-8",
                    "id": "5c4812a2c245544f4eac0cd4_17304576_11QPA4-1-8-VA4;/frequency=/tunable-number=1"
                },
                {
                    "userLabel": "201/11QPA4-1-8-VA4--201/SFD44-25-1-9440",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812a2c245544f4eac0cd4_17304576"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812a2c245544f4eac0cd4_17304576_5c4812a2c245544f4eac0cd4_419500288",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812a2c245544f4eac0cd4_419500288"
                    ]
                }
            ],
            "Rx": [
                {
                    "userLabel": "201/SFD44-25-1-9440--201/11QPA4-1-8-L4",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812a2c245544f4eac0cd4_419500288"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812a2c245544f4eac0cd4_17302528_5c4812a2c245544f4eac0cd4_419500288",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812a2c245544f4eac0cd4_17302528"
                    ]
                }
            ]
        },
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "11QPA4-1-8",
        "id": "5c4812a2c245544f4eac0cd4_17302528_11QPA4-1-8-L4;/frequency=/tunable-number=1"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "SFD44-25-1-9440;/frequency=9440.000",
        "isMergedRoute": true,
        "ptpId": "5c4812a2c245544f4eac0cd4_419500288",
        "ptpUserLabel": "SFD44-25-1-9440",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_25.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5c4812a2c245544f4eac0cd4_419500288_SFD44-25-1-9440;/frequency=9440.000"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812a2c245544f4eac0cd4_419500288_SFD44-25-1-9440;/frequency=9440.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "XC",
        "equipmentId": "5c4812a2c245544f4eac0cd4_25.1",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_419507456_SFD44-25-1-OMD;/frequency=9440.000"
        ],
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5c4812a2c245544f4eac0cd4_419500288_SFD44-25-1-9440;/frequency=9440.000-5c4812a2c245544f4eac0cd4_419507456_SFD44-25-1-OMD;/frequency=9440.000",
        "direction": "BI"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "SFD44-25-1-OMD;/frequency=9440.000",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_419507456",
        "ptpUserLabel": "SFD44-25-1-OMD",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_25.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5c4812a2c245544f4eac0cd4_419507456_SFD44-25-1-OMD;/frequency=9440.000"
    },
    {
        "userLabel": "201/AHPLG-1-5-LINE--201/SFD44-25-1-OMD",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c4812a2c245544f4eac0cd4_17105920"
        ],
        "isSeparatedRoute": null,
        "id": "5c4812a2c245544f4eac0cd4_17105920_5c4812a2c245544f4eac0cd4_419507456",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_419507456"
        ]
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "AHPLG-1-5-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_17105920",
        "ptpUserLabel": "AHPLG-1-5-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_1.5",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-5",
        "id": "5c4812a2c245544f4eac0cd4_17105920_AHPLG-1-5-LINE;/oms=1"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812a2c245544f4eac0cd4_17105152_AHPLG-1-5-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "XC",
        "equipmentId": "5c4812a2c245544f4eac0cd4_1.5",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_17105920_AHPLG-1-5-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-1-5",
        "id": "5c4812a2c245544f4eac0cd4_17105152_AHPLG-1-5-SIG;/oms=1-5c4812a2c245544f4eac0cd4_17105920_AHPLG-1-5-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "AHPLG-1-5-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_17105152",
        "ptpUserLabel": "AHPLG-1-5-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_1.5",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-5",
        "id": "5c4812a2c245544f4eac0cd4_17105152_AHPLG-1-5-SIG;/oms=1"
    },
    {
        "userLabel": "201/AHPLG-1-4-SIG--201/AHPLG-1-5-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c4812a2c245544f4eac0cd4_17039616"
        ],
        "isSeparatedRoute": null,
        "id": "5c4812a2c245544f4eac0cd4_17039616_5c4812a2c245544f4eac0cd4_17105152",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_17105152"
        ]
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "AHPLG-1-4-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_17039616",
        "ptpUserLabel": "AHPLG-1-4-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_1.4",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-4",
        "id": "5c4812a2c245544f4eac0cd4_17039616_AHPLG-1-4-SIG;/oms=1"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812a2c245544f4eac0cd4_17039616_AHPLG-1-4-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "XC",
        "equipmentId": "5c4812a2c245544f4eac0cd4_1.4",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_17040384_AHPLG-1-4-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-1-4",
        "id": "5c4812a2c245544f4eac0cd4_17039616_AHPLG-1-4-SIG;/oms=1-5c4812a2c245544f4eac0cd4_17040384_AHPLG-1-4-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5c4812a2c245544f4eac0cd4",
        "userLabel": "AHPLG-1-4-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812a2c245544f4eac0cd4_17040384",
        "ptpUserLabel": "AHPLG-1-4-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "201",
        "type": "TP",
        "equipmentId": "5c4812a2c245544f4eac0cd4_1.4",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-4",
        "id": "5c4812a2c245544f4eac0cd4_17040384_AHPLG-1-4-LINE;/oms=1"
    },
    {
        "userLabel": "ne199/AHPLG-1-2-LINE--201/AHPLG-1-4-LINE",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c481289c245544f4eac0cc9_16909312"
        ],
        "isSeparatedRoute": null,
        "id": "5c481289c245544f4eac0cc9_16909312_5c4812a2c245544f4eac0cd4_17040384",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c4812a2c245544f4eac0cd4_17040384"
        ]
    },
    {
        "neId": "5c481289c245544f4eac0cc9",
        "userLabel": "AHPLG-1-2-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c481289c245544f4eac0cc9_16909312",
        "ptpUserLabel": "AHPLG-1-2-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "ne199",
        "type": "TP",
        "equipmentId": "5c481289c245544f4eac0cc9_1.2",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-2",
        "id": "5c481289c245544f4eac0cc9_16909312_AHPLG-1-2-LINE;/oms=1"
    },
    {
        "neId": "5c481289c245544f4eac0cc9",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c481289c245544f4eac0cc9_16908544_AHPLG-1-2-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "ne199",
        "type": "XC",
        "equipmentId": "5c481289c245544f4eac0cc9_1.2",
        "zEndNodes": [
            "5c481289c245544f4eac0cc9_16909312_AHPLG-1-2-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-1-2",
        "id": "5c481289c245544f4eac0cc9_16908544_AHPLG-1-2-SIG;/oms=1-5c481289c245544f4eac0cc9_16909312_AHPLG-1-2-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5c481289c245544f4eac0cc9",
        "userLabel": "AHPLG-1-2-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c481289c245544f4eac0cc9_16908544",
        "ptpUserLabel": "AHPLG-1-2-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "ne199",
        "type": "TP",
        "equipmentId": "5c481289c245544f4eac0cc9_1.2",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-2",
        "id": "5c481289c245544f4eac0cc9_16908544_AHPLG-1-2-SIG;/oms=1"
    },
    {
        "userLabel": "ne199/AHPLG-1-2-SIG--ne199/AHPLG-1-5-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c481289c245544f4eac0cc9_16908544"
        ],
        "isSeparatedRoute": null,
        "id": "5c481289c245544f4eac0cc9_16908544_5c481289c245544f4eac0cc9_17105152",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c481289c245544f4eac0cc9_17105152"
        ]
    },
    {
        "neId": "5c481289c245544f4eac0cc9",
        "userLabel": "AHPLG-1-5-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c481289c245544f4eac0cc9_17105152",
        "ptpUserLabel": "AHPLG-1-5-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "ne199",
        "type": "TP",
        "equipmentId": "5c481289c245544f4eac0cc9_1.5",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-5",
        "id": "5c481289c245544f4eac0cc9_17105152_AHPLG-1-5-SIG;/oms=1"
    },
    {
        "neId": "5c481289c245544f4eac0cc9",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c481289c245544f4eac0cc9_17105152_AHPLG-1-5-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "ne199",
        "type": "XC",
        "equipmentId": "5c481289c245544f4eac0cc9_1.5",
        "zEndNodes": [
            "5c481289c245544f4eac0cc9_17105920_AHPLG-1-5-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-1-5",
        "id": "5c481289c245544f4eac0cc9_17105152_AHPLG-1-5-SIG;/oms=1-5c481289c245544f4eac0cc9_17105920_AHPLG-1-5-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5c481289c245544f4eac0cc9",
        "userLabel": "AHPLG-1-5-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c481289c245544f4eac0cc9_17105920",
        "ptpUserLabel": "AHPLG-1-5-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "ne199",
        "type": "TP",
        "equipmentId": "5c481289c245544f4eac0cc9_1.5",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-5",
        "id": "5c481289c245544f4eac0cc9_17105920_AHPLG-1-5-LINE;/oms=1"
    },
    {
        "userLabel": "ne199/AHPLG-1-5-LINE--202/AHPLG-1-13-LINE",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c481289c245544f4eac0cc9_17105920"
        ],
        "isSeparatedRoute": null,
        "id": "5c481289c245544f4eac0cc9_17105920_5c4812adc245544f4eac0cd5_17630208",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_17630208"
        ]
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "AHPLG-1-13-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_17630208",
        "ptpUserLabel": "AHPLG-1-13-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.13",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-13",
        "id": "5c4812adc245544f4eac0cd5_17630208_AHPLG-1-13-LINE;/oms=1"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812adc245544f4eac0cd5_17629440_AHPLG-1-13-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "XC",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.13",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_17630208_AHPLG-1-13-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-1-13",
        "id": "5c4812adc245544f4eac0cd5_17629440_AHPLG-1-13-SIG;/oms=1-5c4812adc245544f4eac0cd5_17630208_AHPLG-1-13-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "AHPLG-1-13-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_17629440",
        "ptpUserLabel": "AHPLG-1-13-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.13",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-13",
        "id": "5c4812adc245544f4eac0cd5_17629440_AHPLG-1-13-SIG;/oms=1"
    },
    {
        "userLabel": "202/AHPLG-1-3-SIG--202/AHPLG-1-13-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c4812adc245544f4eac0cd5_16974080"
        ],
        "isSeparatedRoute": null,
        "id": "5c4812adc245544f4eac0cd5_16974080_5c4812adc245544f4eac0cd5_17629440",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_17629440"
        ]
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "AHPLG-1-3-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_16974080",
        "ptpUserLabel": "AHPLG-1-3-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.3",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-3",
        "id": "5c4812adc245544f4eac0cd5_16974080_AHPLG-1-3-SIG;/oms=1"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812adc245544f4eac0cd5_16974080_AHPLG-1-3-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "XC",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.3",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_16974848_AHPLG-1-3-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPLG-1-3",
        "id": "5c4812adc245544f4eac0cd5_16974080_AHPLG-1-3-SIG;/oms=1-5c4812adc245544f4eac0cd5_16974848_AHPLG-1-3-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "AHPLG-1-3-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_16974848",
        "ptpUserLabel": "AHPLG-1-3-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.3",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPLG-1-3",
        "id": "5c4812adc245544f4eac0cd5_16974848_AHPLG-1-3-LINE;/oms=1"
    },
    {
        "userLabel": "202/AHPLG-1-3-LINE--202/WR8-88AF-1-4-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c4812adc245544f4eac0cd5_16974848"
        ],
        "isSeparatedRoute": null,
        "id": "5c4812adc245544f4eac0cd5_16974848_5c4812adc245544f4eac0cd5_17039616",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_17039616"
        ]
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "WR8-88AF-1-4-SIG;/frequency=9440.000",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_17039616",
        "ptpUserLabel": "WR8-88AF-1-4-SIG",
        "isSeparatedRoute": true,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.4",
        "separatedRouteElements": {
            "Tx": [
                {
                    "neId": "5c4812adc245544f4eac0cd5",
                    "userLabel": "TAKEOVER-1571373685800",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5c4812adc245544f4eac0cd5_17039616_WR8-88AF-1-4-SIG;/frequency=9440.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "202",
                    "type": "XC",
                    "equipmentId": "5c4812adc245544f4eac0cd5_1.4",
                    "zEndNodes": [
                        "5c4812adc245544f4eac0cd5_17040384_WR8-88AF-1-4-ADDIN1;/frequency=9440.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-1-4",
                    "id": "5c4812adc245544f4eac0cd5_17039616_WR8-88AF-1-4-SIG;/frequency=9440.000-5c4812adc245544f4eac0cd5_17040384_WR8-88AF-1-4-ADDIN1;/frequency=9440.000",
                    "direction": "BI"
                },
                {
                    "neId": "5c4812adc245544f4eac0cd5",
                    "userLabel": "WR8-88AF-1-4-ADDIN1;/frequency=9440.000",
                    "isMergedRoute": null,
                    "ptpId": "5c4812adc245544f4eac0cd5_17040384",
                    "ptpUserLabel": "WR8-88AF-1-4-ADDIN1",
                    "isSeparatedRoute": null,
                    "neUserLabel": "202",
                    "type": "TP",
                    "equipmentId": "5c4812adc245544f4eac0cd5_1.4",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-1-4",
                    "id": "5c4812adc245544f4eac0cd5_17040384_WR8-88AF-1-4-ADDIN1;/frequency=9440.000"
                },
                {
                    "userLabel": "202/SFD44-25-1-OMD--202/WR8-88AF-1-4-ADDIN1",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812adc245544f4eac0cd5_419507456"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812adc245544f4eac0cd5_17040384_5c4812adc245544f4eac0cd5_419507456",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812adc245544f4eac0cd5_17040384"
                    ]
                }
            ],
            "Rx": [
                {
                    "neId": "5c4812adc245544f4eac0cd5",
                    "userLabel": "TAKEOVER-1571373685800",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5c4812adc245544f4eac0cd5_17040128_WR8-88AF-1-4-DROPOUT;/frequency=9440.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "202",
                    "type": "XC",
                    "equipmentId": "5c4812adc245544f4eac0cd5_1.4",
                    "zEndNodes": [
                        "5c4812adc245544f4eac0cd5_17039616_WR8-88AF-1-4-SIG;/frequency=9440.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-1-4",
                    "id": "5c4812adc245544f4eac0cd5_17040128_WR8-88AF-1-4-DROPOUT;/frequency=9440.000-5c4812adc245544f4eac0cd5_17039616_WR8-88AF-1-4-SIG;/frequency=9440.000",
                    "direction": "BI"
                },
                {
                    "neId": "5c4812adc245544f4eac0cd5",
                    "userLabel": "WR8-88AF-1-4-DROPOUT;/frequency=9440.000",
                    "isMergedRoute": null,
                    "ptpId": "5c4812adc245544f4eac0cd5_17040128",
                    "ptpUserLabel": "WR8-88AF-1-4-DROPOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "202",
                    "type": "TP",
                    "equipmentId": "5c4812adc245544f4eac0cd5_1.4",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-1-4",
                    "id": "5c4812adc245544f4eac0cd5_17040128_WR8-88AF-1-4-DROPOUT;/frequency=9440.000"
                },
                {
                    "userLabel": "202/WR8-88AF-1-4-DROPOUT--202/ITLU-26-1-SIGIN",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812adc245544f4eac0cd5_17040128"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812adc245544f4eac0cd5_17040128_5c4812adc245544f4eac0cd5_436273408",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812adc245544f4eac0cd5_436273408"
                    ]
                },
                {
                    "neId": "5c4812adc245544f4eac0cd5",
                    "userLabel": "ITLU-26-1-SIGIN;/frequency=9440.000",
                    "isMergedRoute": null,
                    "ptpId": "5c4812adc245544f4eac0cd5_436273408",
                    "ptpUserLabel": "ITLU-26-1-SIGIN",
                    "isSeparatedRoute": null,
                    "neUserLabel": "202",
                    "type": "TP",
                    "equipmentId": "5c4812adc245544f4eac0cd5_26.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-26-1",
                    "id": "5c4812adc245544f4eac0cd5_436273408_ITLU-26-1-SIGIN;/frequency=9440.000"
                },
                {
                    "neId": "5c4812adc245544f4eac0cd5",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5c4812adc245544f4eac0cd5_436273408_ITLU-26-1-SIGIN;/frequency=9440.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "202",
                    "type": "XC",
                    "equipmentId": "5c4812adc245544f4eac0cd5_26.1",
                    "zEndNodes": [
                        "5c4812adc245544f4eac0cd5_436273664_ITLU-26-1-EOUT;/frequency=9440.000"
                    ],
                    "equipmentUserLabel": "ITLU-26-1",
                    "id": "5c4812adc245544f4eac0cd5_436273408_ITLU-26-1-SIGIN;/frequency=9440.000-5c4812adc245544f4eac0cd5_436273664_ITLU-26-1-EOUT;/frequency=9440.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5c4812adc245544f4eac0cd5",
                    "userLabel": "ITLU-26-1-EOUT;/frequency=9440.000",
                    "isMergedRoute": null,
                    "ptpId": "5c4812adc245544f4eac0cd5_436273664",
                    "ptpUserLabel": "ITLU-26-1-EOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "202",
                    "type": "TP",
                    "equipmentId": "5c4812adc245544f4eac0cd5_26.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-26-1",
                    "id": "5c4812adc245544f4eac0cd5_436273664_ITLU-26-1-EOUT;/frequency=9440.000"
                },
                {
                    "userLabel": "202/ITLU-26-1-EOUT--202/SFD44-25-1-OMD",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812adc245544f4eac0cd5_436273664"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812adc245544f4eac0cd5_419507456_5c4812adc245544f4eac0cd5_436273664",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812adc245544f4eac0cd5_419507456"
                    ]
                }
            ]
        },
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "WR8-88AF-1-4",
        "id": "5c4812adc245544f4eac0cd5_17039616_WR8-88AF-1-4-SIG;/frequency=9440.000"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "SFD44-25-1-OMD;/frequency=9440.000",
        "isMergedRoute": true,
        "ptpId": "5c4812adc245544f4eac0cd5_419507456",
        "ptpUserLabel": "SFD44-25-1-OMD",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_25.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5c4812adc245544f4eac0cd5_419507456_SFD44-25-1-OMD;/frequency=9440.000"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c4812adc245544f4eac0cd5_419500288_SFD44-25-1-9440;/frequency=9440.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "XC",
        "equipmentId": "5c4812adc245544f4eac0cd5_25.1",
        "zEndNodes": [
            "5c4812adc245544f4eac0cd5_419507456_SFD44-25-1-OMD;/frequency=9440.000"
        ],
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5c4812adc245544f4eac0cd5_419500288_SFD44-25-1-9440;/frequency=9440.000-5c4812adc245544f4eac0cd5_419507456_SFD44-25-1-OMD;/frequency=9440.000",
        "direction": "BI"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "SFD44-25-1-9440;/frequency=9440.000",
        "isMergedRoute": null,
        "ptpId": "5c4812adc245544f4eac0cd5_419500288",
        "ptpUserLabel": "SFD44-25-1-9440",
        "isSeparatedRoute": true,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_25.1",
        "separatedRouteElements": {
            "Tx": [
                {
                    "userLabel": "202/SFD44-25-1-9440--202/11QPA4-1-10-L4",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812adc245544f4eac0cd5_419500288"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812adc245544f4eac0cd5_17433600_5c4812adc245544f4eac0cd5_419500288",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812adc245544f4eac0cd5_17433600"
                    ]
                }
            ],
            "Rx": [
                {
                    "userLabel": "202/11QPA4-1-10-VA4--202/SFD44-25-1-9440",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812adc245544f4eac0cd5_17435648"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812adc245544f4eac0cd5_17435648_5c4812adc245544f4eac0cd5_419500288",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812adc245544f4eac0cd5_419500288"
                    ]
                },
                {
                    "neId": "5c4812adc245544f4eac0cd5",
                    "userLabel": "11QPA4-1-10-VA4;/frequency=/tunable-number=1",
                    "isMergedRoute": null,
                    "ptpId": "5c4812adc245544f4eac0cd5_17435648",
                    "ptpUserLabel": "11QPA4-1-10-VA4",
                    "isSeparatedRoute": null,
                    "neUserLabel": "202",
                    "type": "TP",
                    "equipmentId": "5c4812adc245544f4eac0cd5_1.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "11QPA4-1-10",
                    "id": "5c4812adc245544f4eac0cd5_17435648_11QPA4-1-10-VA4;/frequency=/tunable-number=1"
                },
                {
                    "userLabel": "202/11QPA4-1-10-L4--202/11QPA4-1-10-VA4",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5c4812adc245544f4eac0cd5_17433600"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5c4812adc245544f4eac0cd5_17433600_5c4812adc245544f4eac0cd5_17435648",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5c4812adc245544f4eac0cd5_17435648"
                    ]
                }
            ]
        },
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5c4812adc245544f4eac0cd5_419500288_SFD44-25-1-9440;/frequency=9440.000"
    },
    {
        "neId": "5c4812adc245544f4eac0cd5",
        "userLabel": "11QPA4-1-10-L4;/frequency=/tunable-number=1",
        "isMergedRoute": true,
        "ptpId": "5c4812adc245544f4eac0cd5_17433600",
        "ptpUserLabel": "11QPA4-1-10-L4",
        "isSeparatedRoute": null,
        "neUserLabel": "202",
        "type": "TP",
        "equipmentId": "5c4812adc245544f4eac0cd5_1.10",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "11QPA4-1-10",
        "id": "5c4812adc245544f4eac0cd5_17433600_11QPA4-1-10-L4;/frequency=/tunable-number=1"
    }
];
const flowInfo4 = [
    {
        "neId": "5c63d2abc24554163c8592e6",
        "userLabel": "260SCX2-2-2-L1;/frequency=/tunable-number=1",
        "isMergedRoute": null,
        "ptpId": "5c63d2abc24554163c8592e6_33685760",
        "ptpUserLabel": "260SCX2-2-2-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "ne149",
        "type": "TP",
        "equipmentId": "5c63d2abc24554163c8592e6_2.2",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "260SCX2-2-2",
        "id": "5c63d2abc24554163c8592e6_33685760_260SCX2-2-2-L1;/frequency=/tunable-number=1"
    },
    {
        "userLabel": "ne149/260SCX2-2-2-L1--ne149/SFD44-26-1-9170",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c63d2abc24554163c8592e6_33685760"
        ],
        "isSeparatedRoute": null,
        "id": "5c63d2abc24554163c8592e6_33685760_5c63d2abc24554163c8592e6_436284416",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c63d2abc24554163c8592e6_436284416"
        ]
    },
    {
        "neId": "5c63d2abc24554163c8592e6",
        "userLabel": "SFD44-26-1-9170;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5c63d2abc24554163c8592e6_436284416",
        "ptpUserLabel": "SFD44-26-1-9170",
        "isSeparatedRoute": null,
        "neUserLabel": "ne149",
        "type": "TP",
        "equipmentId": "5c63d2abc24554163c8592e6_26.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-26-1",
        "id": "5c63d2abc24554163c8592e6_436284416_SFD44-26-1-9170;/frequency=9170.000"
    },
    {
        "neId": "5c63d2abc24554163c8592e6",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c63d2abc24554163c8592e6_436284416_SFD44-26-1-9170;/frequency=9170.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "ne149",
        "type": "XC",
        "equipmentId": "5c63d2abc24554163c8592e6_26.1",
        "zEndNodes": [
            "5c63d2abc24554163c8592e6_436284672_SFD44-26-1-OMD;/frequency=9170.000"
        ],
        "equipmentUserLabel": "SFD44-26-1",
        "id": "5c63d2abc24554163c8592e6_436284416_SFD44-26-1-9170;/frequency=9170.000-5c63d2abc24554163c8592e6_436284672_SFD44-26-1-OMD;/frequency=9170.000",
        "direction": "BI"
    },
    {
        "neId": "5c63d2abc24554163c8592e6",
        "userLabel": "SFD44-26-1-OMD;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5c63d2abc24554163c8592e6_436284672",
        "ptpUserLabel": "SFD44-26-1-OMD",
        "isSeparatedRoute": null,
        "neUserLabel": "ne149",
        "type": "TP",
        "equipmentId": "5c63d2abc24554163c8592e6_26.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-26-1",
        "id": "5c63d2abc24554163c8592e6_436284672_SFD44-26-1-OMD;/frequency=9170.000"
    },
    {
        "userLabel": "ne149/SFD44-26-1-OMD--ne149/AHPHG-2-4-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c63d2abc24554163c8592e6_436284672"
        ],
        "isSeparatedRoute": null,
        "id": "5c63d2abc24554163c8592e6_33816832_5c63d2abc24554163c8592e6_436284672",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c63d2abc24554163c8592e6_33816832"
        ]
    },
    {
        "neId": "5c63d2abc24554163c8592e6",
        "userLabel": "AHPHG-2-4-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c63d2abc24554163c8592e6_33816832",
        "ptpUserLabel": "AHPHG-2-4-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "ne149",
        "type": "TP",
        "equipmentId": "5c63d2abc24554163c8592e6_2.4",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-2-4",
        "id": "5c63d2abc24554163c8592e6_33816832_AHPHG-2-4-SIG;/oms=1"
    },
    {
        "neId": "5c63d2abc24554163c8592e6",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c63d2abc24554163c8592e6_33816832_AHPHG-2-4-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "ne149",
        "type": "XC",
        "equipmentId": "5c63d2abc24554163c8592e6_2.4",
        "zEndNodes": [
            "5c63d2abc24554163c8592e6_33817600_AHPHG-2-4-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPHG-2-4",
        "id": "5c63d2abc24554163c8592e6_33816832_AHPHG-2-4-SIG;/oms=1-5c63d2abc24554163c8592e6_33817600_AHPHG-2-4-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5c63d2abc24554163c8592e6",
        "userLabel": "AHPHG-2-4-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c63d2abc24554163c8592e6_33817600",
        "ptpUserLabel": "AHPHG-2-4-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "ne149",
        "type": "TP",
        "equipmentId": "5c63d2abc24554163c8592e6_2.4",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-2-4",
        "id": "5c63d2abc24554163c8592e6_33817600_AHPHG-2-4-LINE;/oms=1"
    },
    {
        "userLabel": "ne149/AHPHG-2-4-LINE--ne148/AHPHG-2-4-LINE",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c63d2abc24554163c8592e6_33817600"
        ],
        "isSeparatedRoute": null,
        "id": "5c63d2a9c24554163c8592e5_33817600_5c63d2abc24554163c8592e6_33817600",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c63d2a9c24554163c8592e5_33817600"
        ]
    },
    {
        "neId": "5c63d2a9c24554163c8592e5",
        "userLabel": "AHPHG-2-4-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c63d2a9c24554163c8592e5_33817600",
        "ptpUserLabel": "AHPHG-2-4-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "ne148",
        "type": "TP",
        "equipmentId": "5c63d2a9c24554163c8592e5_2.4",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-2-4",
        "id": "5c63d2a9c24554163c8592e5_33817600_AHPHG-2-4-LINE;/oms=1"
    },
    {
        "neId": "5c63d2a9c24554163c8592e5",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c63d2a9c24554163c8592e5_33816832_AHPHG-2-4-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "ne148",
        "type": "XC",
        "equipmentId": "5c63d2a9c24554163c8592e5_2.4",
        "zEndNodes": [
            "5c63d2a9c24554163c8592e5_33817600_AHPHG-2-4-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPHG-2-4",
        "id": "5c63d2a9c24554163c8592e5_33816832_AHPHG-2-4-SIG;/oms=1-5c63d2a9c24554163c8592e5_33817600_AHPHG-2-4-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5c63d2a9c24554163c8592e5",
        "userLabel": "AHPHG-2-4-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5c63d2a9c24554163c8592e5_33816832",
        "ptpUserLabel": "AHPHG-2-4-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "ne148",
        "type": "TP",
        "equipmentId": "5c63d2a9c24554163c8592e5_2.4",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-2-4",
        "id": "5c63d2a9c24554163c8592e5_33816832_AHPHG-2-4-SIG;/oms=1"
    },
    {
        "userLabel": "ne148/AHPHG-2-4-SIG--ne148/SFD44-26-1-OMD",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c63d2a9c24554163c8592e5_33816832"
        ],
        "isSeparatedRoute": null,
        "id": "5c63d2a9c24554163c8592e5_33816832_5c63d2a9c24554163c8592e5_436284672",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c63d2a9c24554163c8592e5_436284672"
        ]
    },
    {
        "neId": "5c63d2a9c24554163c8592e5",
        "userLabel": "SFD44-26-1-OMD;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5c63d2a9c24554163c8592e5_436284672",
        "ptpUserLabel": "SFD44-26-1-OMD",
        "isSeparatedRoute": null,
        "neUserLabel": "ne148",
        "type": "TP",
        "equipmentId": "5c63d2a9c24554163c8592e5_26.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-26-1",
        "id": "5c63d2a9c24554163c8592e5_436284672_SFD44-26-1-OMD;/frequency=9170.000"
    },
    {
        "neId": "5c63d2a9c24554163c8592e5",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5c63d2a9c24554163c8592e5_436284416_SFD44-26-1-9170;/frequency=9170.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "ne148",
        "type": "XC",
        "equipmentId": "5c63d2a9c24554163c8592e5_26.1",
        "zEndNodes": [
            "5c63d2a9c24554163c8592e5_436284672_SFD44-26-1-OMD;/frequency=9170.000"
        ],
        "equipmentUserLabel": "SFD44-26-1",
        "id": "5c63d2a9c24554163c8592e5_436284416_SFD44-26-1-9170;/frequency=9170.000-5c63d2a9c24554163c8592e5_436284672_SFD44-26-1-OMD;/frequency=9170.000",
        "direction": "BI"
    },
    {
        "neId": "5c63d2a9c24554163c8592e5",
        "userLabel": "SFD44-26-1-9170;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5c63d2a9c24554163c8592e5_436284416",
        "ptpUserLabel": "SFD44-26-1-9170",
        "isSeparatedRoute": null,
        "neUserLabel": "ne148",
        "type": "TP",
        "equipmentId": "5c63d2a9c24554163c8592e5_26.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-26-1",
        "id": "5c63d2a9c24554163c8592e5_436284416_SFD44-26-1-9170;/frequency=9170.000"
    },
    {
        "userLabel": "ne148/260SCX2-2-2-L1--ne148/SFD44-26-1-9170",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5c63d2a9c24554163c8592e5_33685760"
        ],
        "isSeparatedRoute": null,
        "id": "5c63d2a9c24554163c8592e5_33685760_5c63d2a9c24554163c8592e5_436284416",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5c63d2a9c24554163c8592e5_436284416"
        ]
    },
    {
        "neId": "5c63d2a9c24554163c8592e5",
        "userLabel": "260SCX2-2-2-L1;/frequency=/tunable-number=1",
        "isMergedRoute": null,
        "ptpId": "5c63d2a9c24554163c8592e5_33685760",
        "ptpUserLabel": "260SCX2-2-2-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "ne148",
        "type": "TP",
        "equipmentId": "5c63d2a9c24554163c8592e5_2.2",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "260SCX2-2-2",
        "id": "5c63d2a9c24554163c8592e5_33685760_260SCX2-2-2-L1;/frequency=/tunable-number=1"
    }
];
const flowInfo5 = [
    {
        "neId": "5dcba0182f801779d84b1ab6",
        "userLabel": "260SCX2-20-2-L1;/frequency=/tunable-number=1",
        "isMergedRoute": null,
        "ptpId": "5dcba0182f801779d84b1ab6_335675648",
        "ptpUserLabel": "260SCX2-20-2-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "BJM1-PSS32-ROADM-25",
        "type": "TP",
        "equipmentId": "5dcba0182f801779d84b1ab6_20.2",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "260SCX2-20-2",
        "id": "5dcba0182f801779d84b1ab6_335675648_260SCX2-20-2-L1;/frequency=/tunable-number=1"
    },
    {
        "userLabel": "BJM1-PSS32-ROADM-25/SFD44-25-1-9530--BJM1-PSS32-ROADM-25/260SCX2-20-2-L1",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5dcba0182f801779d84b1ab6_419497984"
        ],
        "isSeparatedRoute": null,
        "id": "5dcba0182f801779d84b1ab6_335675648_5dcba0182f801779d84b1ab6_419497984",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5dcba0182f801779d84b1ab6_335675648"
        ]
    },
    {
        "neId": "5dcba0182f801779d84b1ab6",
        "userLabel": "SFD44-25-1-9530;/frequency=9530.000",
        "isMergedRoute": null,
        "ptpId": "5dcba0182f801779d84b1ab6_419497984",
        "ptpUserLabel": "SFD44-25-1-9530",
        "isSeparatedRoute": null,
        "neUserLabel": "BJM1-PSS32-ROADM-25",
        "type": "TP",
        "equipmentId": "5dcba0182f801779d84b1ab6_25.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5dcba0182f801779d84b1ab6_419497984_SFD44-25-1-9530;/frequency=9530.000"
    },
    {
        "neId": "5dcba0182f801779d84b1ab6",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5dcba0182f801779d84b1ab6_419497984_SFD44-25-1-9530;/frequency=9530.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "BJM1-PSS32-ROADM-25",
        "type": "XC",
        "equipmentId": "5dcba0182f801779d84b1ab6_25.1",
        "zEndNodes": [
            "5dcba0182f801779d84b1ab6_419507456_SFD44-25-1-OMD;/frequency=9530.000"
        ],
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5dcba0182f801779d84b1ab6_419497984_SFD44-25-1-9530;/frequency=9530.000-5dcba0182f801779d84b1ab6_419507456_SFD44-25-1-OMD;/frequency=9530.000",
        "direction": "BI"
    },
    {
        "neId": "5dcba0182f801779d84b1ab6",
        "userLabel": "SFD44-25-1-OMD;/frequency=9530.000",
        "isMergedRoute": null,
        "ptpId": "5dcba0182f801779d84b1ab6_419507456",
        "ptpUserLabel": "SFD44-25-1-OMD",
        "isSeparatedRoute": true,
        "neUserLabel": "BJM1-PSS32-ROADM-25",
        "type": "TP",
        "equipmentId": "5dcba0182f801779d84b1ab6_25.1",
        "separatedRouteElements": {
            "Tx": [
                {
                    "userLabel": "BJM1-PSS32-ROADM-25/SFD44-25-1-OMD--BJM1-PSS32-ROADM-25/WR8-88AF-1-6-ADDIN1",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_419507456"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_17171456_5dcba0182f801779d84b1ab6_419507456",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_17171456"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "WR8-88AF-1-6-ADDIN1;/frequency=9530.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_17171456",
                    "ptpUserLabel": "WR8-88AF-1-6-ADDIN1",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_1.6",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-1-6",
                    "id": "5dcba0182f801779d84b1ab6_17171456_WR8-88AF-1-6-ADDIN1;/frequency=9530.000"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "TAKEOVER-1577443805916",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_17171456_WR8-88AF-1-6-ADDIN1;/frequency=9530.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "XC",
                    "equipmentId": "5dcba0182f801779d84b1ab6_1.6",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_17170688_WR8-88AF-1-6-SIG;/frequency=9530.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-1-6",
                    "id": "5dcba0182f801779d84b1ab6_17171456_WR8-88AF-1-6-ADDIN1;/frequency=9530.000-5dcba0182f801779d84b1ab6_17170688_WR8-88AF-1-6-SIG;/frequency=9530.000",
                    "direction": "UNI"
                }
            ],
            "Rx": [
                {
                    "userLabel": "BJM1-PSS32-ROADM-25/ITLU-27-1-EOUT--BJM1-PSS32-ROADM-25/SFD44-25-1-OMD",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_453050880"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_419507456_5dcba0182f801779d84b1ab6_453050880",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_419507456"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "ITLU-27-1-EOUT;/frequency=9530.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_453050880",
                    "ptpUserLabel": "ITLU-27-1-EOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_27.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-27-1",
                    "id": "5dcba0182f801779d84b1ab6_453050880_ITLU-27-1-EOUT;/frequency=9530.000"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_453050880_ITLU-27-1-EOUT;/frequency=9530.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "XC",
                    "equipmentId": "5dcba0182f801779d84b1ab6_27.1",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_453050624_ITLU-27-1-SIGIN;/frequency=9530.000"
                    ],
                    "equipmentUserLabel": "ITLU-27-1",
                    "id": "5dcba0182f801779d84b1ab6_453050880_ITLU-27-1-EOUT;/frequency=9530.000-5dcba0182f801779d84b1ab6_453050624_ITLU-27-1-SIGIN;/frequency=9530.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "ITLU-27-1-SIGIN;/frequency=9530.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_453050624",
                    "ptpUserLabel": "ITLU-27-1-SIGIN",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_27.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-27-1",
                    "id": "5dcba0182f801779d84b1ab6_453050624_ITLU-27-1-SIGIN;/frequency=9530.000"
                },
                {
                    "userLabel": "BJM1-PSS32-ROADM-25/WR8-88AF-1-6-DROPOUT--BJM1-PSS32-ROADM-25/ITLU-27-1-SIGIN",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_17171200"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_17171200_5dcba0182f801779d84b1ab6_453050624",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_453050624"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "WR8-88AF-1-6-DROPOUT;/frequency=9530.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_17171200",
                    "ptpUserLabel": "WR8-88AF-1-6-DROPOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_1.6",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-1-6",
                    "id": "5dcba0182f801779d84b1ab6_17171200_WR8-88AF-1-6-DROPOUT;/frequency=9530.000"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "TAKEOVER-1577443805916",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_17170688_WR8-88AF-1-6-SIG;/frequency=9530.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "XC",
                    "equipmentId": "5dcba0182f801779d84b1ab6_1.6",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_17171200_WR8-88AF-1-6-DROPOUT;/frequency=9530.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-1-6",
                    "id": "5dcba0182f801779d84b1ab6_17171200_WR8-88AF-1-6-DROPOUT;/frequency=9530.000-5dcba0182f801779d84b1ab6_17170688_WR8-88AF-1-6-SIG;/frequency=9530.000",
                    "direction": "UNI"
                }
            ]
        },
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-25-1",
        "id": "5dcba0182f801779d84b1ab6_419507456_SFD44-25-1-OMD;/frequency=9530.000"
    },
    {
        "neId": "5dcba0182f801779d84b1ab6",
        "userLabel": "WR8-88AF-1-6-SIG;/frequency=9530.000",
        "isMergedRoute": true,
        "ptpId": "5dcba0182f801779d84b1ab6_17170688",
        "ptpUserLabel": "WR8-88AF-1-6-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "BJM1-PSS32-ROADM-25",
        "type": "TP",
        "equipmentId": "5dcba0182f801779d84b1ab6_1.6",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "WR8-88AF-1-6",
        "id": "5dcba0182f801779d84b1ab6_17170688_WR8-88AF-1-6-SIG;/frequency=9530.000"
    },
    {
        "userLabel": "BJM1-PSS32-ROADM-25/WR8-88AF-1-6-SIG--BJM1-PSS32-ROADM-25/OPSA-1-17-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5dcba0182f801779d84b1ab6_17170688"
        ],
        "isSeparatedRoute": null,
        "id": "5dcba0182f801779d84b1ab6_17170688_5dcba0182f801779d84b1ab6_17891584",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5dcba0182f801779d84b1ab6_17891584"
        ]
    },
    {
        "neId": "5dcba0182f801779d84b1ab6",
        "userLabel": "OPSA-1-17-SIG;/frequency=/oms=1",
        "isMergedRoute": null,
        "ptpId": "5dcba0182f801779d84b1ab6_17891584",
        "ptpUserLabel": "OPSA-1-17-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "BJM1-PSS32-ROADM-25",
        "type": "TP",
        "equipmentId": "5dcba0182f801779d84b1ab6_1.17",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "OPSA-1-17",
        "id": "5dcba0182f801779d84b1ab6_17891584_OPSA-1-17-SIG;/frequency=/oms=1"
    },
    {
        "neId": "5dcba0182f801779d84b1ab6",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "OPS",
        "aEndNodes": [
            "5dcba0182f801779d84b1ab6_17891584_OPSA-1-17-SIG;/frequency=/oms=1"
        ],
        "isSeparatedRoute": true,
        "neUserLabel": "BJM1-PSS32-ROADM-25",
        "type": "XC",
        "equipmentId": "5dcba0182f801779d84b1ab6_1.17",
        "zEndNodes": [
            "5dcba0182f801779d84b1ab6_17891840_OPSA-1-17-A;/frequency=/oms=1",
            "5dcba0182f801779d84b1ab6_17892096_OPSA-1-17-B;/frequency=/oms=1"
        ],
        "separatedRouteElements": {
            "Spare": [
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "OPSA-1-17-B;/frequency=/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_17892096",
                    "ptpUserLabel": "OPSA-1-17-B",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_1.17",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OPSA-1-17",
                    "id": "5dcba0182f801779d84b1ab6_17892096_OPSA-1-17-B;/frequency=/oms=1"
                },
                {
                    "userLabel": "BJM1-PSS32-ROADM-25/AHPHG-1-5-LINE--BJM1-PSS32-ROADM-25/OPSA-1-17-B",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_17105920"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_17105920_5dcba0182f801779d84b1ab6_17892096",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_17892096"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-1-5-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_17105920",
                    "ptpUserLabel": "AHPHG-1-5-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_1.5",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-5",
                    "id": "5dcba0182f801779d84b1ab6_17105920_AHPHG-1-5-LINE;/oms=1"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_17105152_AHPHG-1-5-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "XC",
                    "equipmentId": "5dcba0182f801779d84b1ab6_1.5",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_17105920_AHPHG-1-5-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-1-5",
                    "id": "5dcba0182f801779d84b1ab6_17105152_AHPHG-1-5-SIG;/oms=1-5dcba0182f801779d84b1ab6_17105920_AHPHG-1-5-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-1-5-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_17105152",
                    "ptpUserLabel": "AHPHG-1-5-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_1.5",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-5",
                    "id": "5dcba0182f801779d84b1ab6_17105152_AHPHG-1-5-SIG;/oms=1"
                },
                {
                    "userLabel": "BJM1-PSS32-ROADM-25/AHPHG-1-4-SIG--BJM1-PSS32-ROADM-25/AHPHG-1-5-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_17039616"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_17039616_5dcba0182f801779d84b1ab6_17105152",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_17105152"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-1-4-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_17039616",
                    "ptpUserLabel": "AHPHG-1-4-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_1.4",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-4",
                    "id": "5dcba0182f801779d84b1ab6_17039616_AHPHG-1-4-SIG;/oms=1"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_17039616_AHPHG-1-4-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "XC",
                    "equipmentId": "5dcba0182f801779d84b1ab6_1.4",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_17040384_AHPHG-1-4-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-1-4",
                    "id": "5dcba0182f801779d84b1ab6_17039616_AHPHG-1-4-SIG;/oms=1-5dcba0182f801779d84b1ab6_17040384_AHPHG-1-4-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-1-4-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_17040384",
                    "ptpUserLabel": "AHPHG-1-4-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_1.4",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-4",
                    "id": "5dcba0182f801779d84b1ab6_17040384_AHPHG-1-4-LINE;/oms=1"
                },
                {
                    "userLabel": "BJM1-PSS32-ROADM-25/AHPHG-1-4-LINE--BJST01-PSS32-ROADM37/AHPHG-4-4-LINE",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_17040384"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_17040384_5dcbb0c22f801779d84b1e49_67372032",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcbb0c22f801779d84b1e49_67372032"
                    ]
                },
                {
                    "neId": "5dcbb0c22f801779d84b1e49",
                    "userLabel": "AHPHG-4-4-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0c22f801779d84b1e49_67372032",
                    "ptpUserLabel": "AHPHG-4-4-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJST01-PSS32-ROADM37",
                    "type": "TP",
                    "equipmentId": "5dcbb0c22f801779d84b1e49_4.4",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-4-4",
                    "id": "5dcbb0c22f801779d84b1e49_67372032_AHPHG-4-4-LINE;/oms=1"
                },
                {
                    "neId": "5dcbb0c22f801779d84b1e49",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb0c22f801779d84b1e49_67371264_AHPHG-4-4-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJST01-PSS32-ROADM37",
                    "type": "XC",
                    "equipmentId": "5dcbb0c22f801779d84b1e49_4.4",
                    "zEndNodes": [
                        "5dcbb0c22f801779d84b1e49_67372032_AHPHG-4-4-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-4-4",
                    "id": "5dcbb0c22f801779d84b1e49_67371264_AHPHG-4-4-SIG;/oms=1-5dcbb0c22f801779d84b1e49_67372032_AHPHG-4-4-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcbb0c22f801779d84b1e49",
                    "userLabel": "AHPHG-4-4-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0c22f801779d84b1e49_67371264",
                    "ptpUserLabel": "AHPHG-4-4-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJST01-PSS32-ROADM37",
                    "type": "TP",
                    "equipmentId": "5dcbb0c22f801779d84b1e49_4.4",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-4-4",
                    "id": "5dcbb0c22f801779d84b1e49_67371264_AHPHG-4-4-SIG;/oms=1"
                },
                {
                    "userLabel": "BJST01-PSS32-ROADM37/AHPHG-4-4-SIG--BJST01-PSS32-ROADM37/AHPHG-4-5-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb0c22f801779d84b1e49_67371264"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb0c22f801779d84b1e49_67371264_5dcbb0c22f801779d84b1e49_67436800",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcbb0c22f801779d84b1e49_67436800"
                    ]
                },
                {
                    "neId": "5dcbb0c22f801779d84b1e49",
                    "userLabel": "AHPHG-4-5-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0c22f801779d84b1e49_67436800",
                    "ptpUserLabel": "AHPHG-4-5-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJST01-PSS32-ROADM37",
                    "type": "TP",
                    "equipmentId": "5dcbb0c22f801779d84b1e49_4.5",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-4-5",
                    "id": "5dcbb0c22f801779d84b1e49_67436800_AHPHG-4-5-SIG;/oms=1"
                },
                {
                    "neId": "5dcbb0c22f801779d84b1e49",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb0c22f801779d84b1e49_67436800_AHPHG-4-5-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJST01-PSS32-ROADM37",
                    "type": "XC",
                    "equipmentId": "5dcbb0c22f801779d84b1e49_4.5",
                    "zEndNodes": [
                        "5dcbb0c22f801779d84b1e49_67437568_AHPHG-4-5-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-4-5",
                    "id": "5dcbb0c22f801779d84b1e49_67436800_AHPHG-4-5-SIG;/oms=1-5dcbb0c22f801779d84b1e49_67437568_AHPHG-4-5-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcbb0c22f801779d84b1e49",
                    "userLabel": "AHPHG-4-5-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0c22f801779d84b1e49_67437568",
                    "ptpUserLabel": "AHPHG-4-5-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJST01-PSS32-ROADM37",
                    "type": "TP",
                    "equipmentId": "5dcbb0c22f801779d84b1e49_4.5",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-4-5",
                    "id": "5dcbb0c22f801779d84b1e49_67437568_AHPHG-4-5-LINE;/oms=1"
                },
                {
                    "userLabel": "BJST01-PSS32-ROADM37/OPSA-4-17-B--BJST01-PSS32-ROADM37/AHPHG-4-5-LINE",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb0c22f801779d84b1e49_68223744"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb0c22f801779d84b1e49_67437568_5dcbb0c22f801779d84b1e49_68223744",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcbb0c22f801779d84b1e49_67437568"
                    ]
                },
                {
                    "neId": "5dcbb0c22f801779d84b1e49",
                    "userLabel": "OPSA-4-17-B;/frequency=/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0c22f801779d84b1e49_68223744",
                    "ptpUserLabel": "OPSA-4-17-B",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJST01-PSS32-ROADM37",
                    "type": "TP",
                    "equipmentId": "5dcbb0c22f801779d84b1e49_4.17",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OPSA-4-17",
                    "id": "5dcbb0c22f801779d84b1e49_68223744_OPSA-4-17-B;/frequency=/oms=1"
                }
            ],
            "Main": [
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "OPSA-1-17-A;/frequency=/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_17891840",
                    "ptpUserLabel": "OPSA-1-17-A",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_1.17",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OPSA-1-17",
                    "id": "5dcba0182f801779d84b1ab6_17891840_OPSA-1-17-A;/frequency=/oms=1"
                },
                {
                    "userLabel": "BJM1-PSS32-ROADM-25/AHPHG-1-3-LINE--BJM1-PSS32-ROADM-25/OPSA-1-17-A",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_16974848"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_16974848_5dcba0182f801779d84b1ab6_17891840",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_17891840"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-1-3-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_16974848",
                    "ptpUserLabel": "AHPHG-1-3-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_1.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5dcba0182f801779d84b1ab6_16974848_AHPHG-1-3-LINE;/oms=1"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_16974080_AHPHG-1-3-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "XC",
                    "equipmentId": "5dcba0182f801779d84b1ab6_1.3",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_16974848_AHPHG-1-3-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5dcba0182f801779d84b1ab6_16974080_AHPHG-1-3-SIG;/oms=1-5dcba0182f801779d84b1ab6_16974848_AHPHG-1-3-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-1-3-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_16974080",
                    "ptpUserLabel": "AHPHG-1-3-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_1.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5dcba0182f801779d84b1ab6_16974080_AHPHG-1-3-SIG;/oms=1"
                },
                {
                    "userLabel": "BJM1-PSS32-ROADM-25/AHPHG-1-3-SIG--BJM1-PSS32-ROADM-25/AHPHG-1-2-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_16974080"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_16908544_5dcba0182f801779d84b1ab6_16974080",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_16908544"
                    ]
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-1-2-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_16908544",
                    "ptpUserLabel": "AHPHG-1-2-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_1.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5dcba0182f801779d84b1ab6_16908544_AHPHG-1-2-SIG;/oms=1"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_16908544_AHPHG-1-2-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "XC",
                    "equipmentId": "5dcba0182f801779d84b1ab6_1.2",
                    "zEndNodes": [
                        "5dcba0182f801779d84b1ab6_16909312_AHPHG-1-2-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5dcba0182f801779d84b1ab6_16908544_AHPHG-1-2-SIG;/oms=1-5dcba0182f801779d84b1ab6_16909312_AHPHG-1-2-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcba0182f801779d84b1ab6",
                    "userLabel": "AHPHG-1-2-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcba0182f801779d84b1ab6_16909312",
                    "ptpUserLabel": "AHPHG-1-2-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJM1-PSS32-ROADM-25",
                    "type": "TP",
                    "equipmentId": "5dcba0182f801779d84b1ab6_1.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5dcba0182f801779d84b1ab6_16909312_AHPHG-1-2-LINE;/oms=1"
                },
                {
                    "userLabel": "BJM1-PSS32-ROADM-25/AHPHG-1-2-LINE--BJST01-PSS32-ROADM37/AHPHG-4-2-LINE",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcba0182f801779d84b1ab6_16909312"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcba0182f801779d84b1ab6_16909312_5dcbb0c22f801779d84b1e49_67240960",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcbb0c22f801779d84b1e49_67240960"
                    ]
                },
                {
                    "neId": "5dcbb0c22f801779d84b1e49",
                    "userLabel": "AHPHG-4-2-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0c22f801779d84b1e49_67240960",
                    "ptpUserLabel": "AHPHG-4-2-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJST01-PSS32-ROADM37",
                    "type": "TP",
                    "equipmentId": "5dcbb0c22f801779d84b1e49_4.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-4-2",
                    "id": "5dcbb0c22f801779d84b1e49_67240960_AHPHG-4-2-LINE;/oms=1"
                },
                {
                    "neId": "5dcbb0c22f801779d84b1e49",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb0c22f801779d84b1e49_67240192_AHPHG-4-2-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJST01-PSS32-ROADM37",
                    "type": "XC",
                    "equipmentId": "5dcbb0c22f801779d84b1e49_4.2",
                    "zEndNodes": [
                        "5dcbb0c22f801779d84b1e49_67240960_AHPHG-4-2-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-4-2",
                    "id": "5dcbb0c22f801779d84b1e49_67240192_AHPHG-4-2-SIG;/oms=1-5dcbb0c22f801779d84b1e49_67240960_AHPHG-4-2-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcbb0c22f801779d84b1e49",
                    "userLabel": "AHPHG-4-2-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0c22f801779d84b1e49_67240192",
                    "ptpUserLabel": "AHPHG-4-2-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJST01-PSS32-ROADM37",
                    "type": "TP",
                    "equipmentId": "5dcbb0c22f801779d84b1e49_4.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-4-2",
                    "id": "5dcbb0c22f801779d84b1e49_67240192_AHPHG-4-2-SIG;/oms=1"
                },
                {
                    "userLabel": "BJST01-PSS32-ROADM37/AHPHG-4-2-SIG--BJST01-PSS32-ROADM37/AHPHG-4-3-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb0c22f801779d84b1e49_67240192"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb0c22f801779d84b1e49_67240192_5dcbb0c22f801779d84b1e49_67305728",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcbb0c22f801779d84b1e49_67305728"
                    ]
                },
                {
                    "neId": "5dcbb0c22f801779d84b1e49",
                    "userLabel": "AHPHG-4-3-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0c22f801779d84b1e49_67305728",
                    "ptpUserLabel": "AHPHG-4-3-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJST01-PSS32-ROADM37",
                    "type": "TP",
                    "equipmentId": "5dcbb0c22f801779d84b1e49_4.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-4-3",
                    "id": "5dcbb0c22f801779d84b1e49_67305728_AHPHG-4-3-SIG;/oms=1"
                },
                {
                    "neId": "5dcbb0c22f801779d84b1e49",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb0c22f801779d84b1e49_67305728_AHPHG-4-3-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJST01-PSS32-ROADM37",
                    "type": "XC",
                    "equipmentId": "5dcbb0c22f801779d84b1e49_4.3",
                    "zEndNodes": [
                        "5dcbb0c22f801779d84b1e49_67306496_AHPHG-4-3-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-4-3",
                    "id": "5dcbb0c22f801779d84b1e49_67305728_AHPHG-4-3-SIG;/oms=1-5dcbb0c22f801779d84b1e49_67306496_AHPHG-4-3-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5dcbb0c22f801779d84b1e49",
                    "userLabel": "AHPHG-4-3-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0c22f801779d84b1e49_67306496",
                    "ptpUserLabel": "AHPHG-4-3-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJST01-PSS32-ROADM37",
                    "type": "TP",
                    "equipmentId": "5dcbb0c22f801779d84b1e49_4.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-4-3",
                    "id": "5dcbb0c22f801779d84b1e49_67306496_AHPHG-4-3-LINE;/oms=1"
                },
                {
                    "userLabel": "BJST01-PSS32-ROADM37/OPSA-4-17-A--BJST01-PSS32-ROADM37/AHPHG-4-3-LINE",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb0c22f801779d84b1e49_68223488"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb0c22f801779d84b1e49_67306496_5dcbb0c22f801779d84b1e49_68223488",
                    "type": "TL",
                    "direction": "BI",
                    "zEndNodes": [
                        "5dcbb0c22f801779d84b1e49_67306496"
                    ]
                },
                {
                    "neId": "5dcbb0c22f801779d84b1e49",
                    "userLabel": "OPSA-4-17-A;/frequency=/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0c22f801779d84b1e49_68223488",
                    "ptpUserLabel": "OPSA-4-17-A",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJST01-PSS32-ROADM37",
                    "type": "TP",
                    "equipmentId": "5dcbb0c22f801779d84b1e49_4.17",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "OPSA-4-17",
                    "id": "5dcbb0c22f801779d84b1e49_68223488_OPSA-4-17-A;/frequency=/oms=1"
                }
            ]
        },
        "equipmentUserLabel": "OPSA-1-17",
        "id": "5dcba0182f801779d84b1ab6_17891584_OPSA-1-17-SIG;/frequency=/oms=1-5dcba0182f801779d84b1ab6_17891840_OPSA-1-17-A;/frequency=/oms=1-5dcba0182f801779d84b1ab6_17892096_OPSA-1-17-B;/frequency=/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5dcbb0c22f801779d84b1e49",
        "userLabel": null,
        "isMergedRoute": true,
        "protectionType": "OPS",
        "aEndNodes": [
            "5dcbb0c22f801779d84b1e49_68223232_OPSA-4-17-SIG;/frequency=/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "BJST01-PSS32-ROADM37",
        "type": "XC",
        "equipmentId": "5dcbb0c22f801779d84b1e49_4.17",
        "zEndNodes": [
            "5dcbb0c22f801779d84b1e49_68223488_OPSA-4-17-A;/frequency=/oms=1",
            "5dcbb0c22f801779d84b1e49_68223744_OPSA-4-17-B;/frequency=/oms=1"
        ],
        "equipmentUserLabel": "OPSA-4-17",
        "id": "5dcbb0c22f801779d84b1e49_68223232_OPSA-4-17-SIG;/frequency=/oms=1-5dcbb0c22f801779d84b1e49_68223488_OPSA-4-17-A;/frequency=/oms=1-5dcbb0c22f801779d84b1e49_68223744_OPSA-4-17-B;/frequency=/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5dcbb0c22f801779d84b1e49",
        "userLabel": "OPSA-4-17-SIG;/frequency=/oms=1",
        "isMergedRoute": null,
        "ptpId": "5dcbb0c22f801779d84b1e49_68223232",
        "ptpUserLabel": "OPSA-4-17-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "BJST01-PSS32-ROADM37",
        "type": "TP",
        "equipmentId": "5dcbb0c22f801779d84b1e49_4.17",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "OPSA-4-17",
        "id": "5dcbb0c22f801779d84b1e49_68223232_OPSA-4-17-SIG;/frequency=/oms=1"
    },
    {
        "userLabel": "BJST01-PSS32-ROADM37/WR8-88AF-4-6-SIG--BJST01-PSS32-ROADM37/OPSA-4-17-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5dcbb0c22f801779d84b1e49_67502336"
        ],
        "isSeparatedRoute": null,
        "id": "5dcbb0c22f801779d84b1e49_67502336_5dcbb0c22f801779d84b1e49_68223232",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5dcbb0c22f801779d84b1e49_68223232"
        ]
    },
    {
        "neId": "5dcbb0c22f801779d84b1e49",
        "userLabel": "WR8-88AF-4-6-SIG;/frequency=9530.000",
        "isMergedRoute": null,
        "ptpId": "5dcbb0c22f801779d84b1e49_67502336",
        "ptpUserLabel": "WR8-88AF-4-6-SIG",
        "isSeparatedRoute": true,
        "neUserLabel": "BJST01-PSS32-ROADM37",
        "type": "TP",
        "equipmentId": "5dcbb0c22f801779d84b1e49_4.6",
        "separatedRouteElements": {
            "Tx": [
                {
                    "neId": "5dcbb0c22f801779d84b1e49",
                    "userLabel": "TAKEOVER-1577446162751",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb0c22f801779d84b1e49_67502336_WR8-88AF-4-6-SIG;/frequency=9530.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJST01-PSS32-ROADM37",
                    "type": "XC",
                    "equipmentId": "5dcbb0c22f801779d84b1e49_4.6",
                    "zEndNodes": [
                        "5dcbb0c22f801779d84b1e49_67502848_WR8-88AF-4-6-DROPOUT;/frequency=9530.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-4-6",
                    "id": "5dcbb0c22f801779d84b1e49_67502848_WR8-88AF-4-6-DROPOUT;/frequency=9530.000-5dcbb0c22f801779d84b1e49_67502336_WR8-88AF-4-6-SIG;/frequency=9530.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5dcbb0c22f801779d84b1e49",
                    "userLabel": "WR8-88AF-4-6-DROPOUT;/frequency=9530.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0c22f801779d84b1e49_67502848",
                    "ptpUserLabel": "WR8-88AF-4-6-DROPOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJST01-PSS32-ROADM37",
                    "type": "TP",
                    "equipmentId": "5dcbb0c22f801779d84b1e49_4.6",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-4-6",
                    "id": "5dcbb0c22f801779d84b1e49_67502848_WR8-88AF-4-6-DROPOUT;/frequency=9530.000"
                },
                {
                    "userLabel": "BJST01-PSS32-ROADM37/WR8-88AF-4-6-DROPOUT--BJST01-PSS32-ROADM37/ITLU-28-1-SIGIN",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb0c22f801779d84b1e49_67502848"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb0c22f801779d84b1e49_469827840_5dcbb0c22f801779d84b1e49_67502848",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5dcbb0c22f801779d84b1e49_469827840"
                    ]
                },
                {
                    "neId": "5dcbb0c22f801779d84b1e49",
                    "userLabel": "ITLU-28-1-SIGIN;/frequency=9530.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0c22f801779d84b1e49_469827840",
                    "ptpUserLabel": "ITLU-28-1-SIGIN",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJST01-PSS32-ROADM37",
                    "type": "TP",
                    "equipmentId": "5dcbb0c22f801779d84b1e49_28.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-28-1",
                    "id": "5dcbb0c22f801779d84b1e49_469827840_ITLU-28-1-SIGIN;/frequency=9530.000"
                },
                {
                    "neId": "5dcbb0c22f801779d84b1e49",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb0c22f801779d84b1e49_469828096_ITLU-28-1-EOUT;/frequency=9530.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJST01-PSS32-ROADM37",
                    "type": "XC",
                    "equipmentId": "5dcbb0c22f801779d84b1e49_28.1",
                    "zEndNodes": [
                        "5dcbb0c22f801779d84b1e49_469827840_ITLU-28-1-SIGIN;/frequency=9530.000"
                    ],
                    "equipmentUserLabel": "ITLU-28-1",
                    "id": "5dcbb0c22f801779d84b1e49_469828096_ITLU-28-1-EOUT;/frequency=9530.000-5dcbb0c22f801779d84b1e49_469827840_ITLU-28-1-SIGIN;/frequency=9530.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5dcbb0c22f801779d84b1e49",
                    "userLabel": "ITLU-28-1-EOUT;/frequency=9530.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0c22f801779d84b1e49_469828096",
                    "ptpUserLabel": "ITLU-28-1-EOUT",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJST01-PSS32-ROADM37",
                    "type": "TP",
                    "equipmentId": "5dcbb0c22f801779d84b1e49_28.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "ITLU-28-1",
                    "id": "5dcbb0c22f801779d84b1e49_469828096_ITLU-28-1-EOUT;/frequency=9530.000"
                },
                {
                    "userLabel": "BJST01-PSS32-ROADM37/ITLU-28-1-EOUT--BJST01-PSS32-ROADM37/SFD44-26-1-OMD",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb0c22f801779d84b1e49_469828096"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb0c22f801779d84b1e49_436284672_5dcbb0c22f801779d84b1e49_469828096",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5dcbb0c22f801779d84b1e49_436284672"
                    ]
                }
            ],
            "Rx": [
                {
                    "neId": "5dcbb0c22f801779d84b1e49",
                    "userLabel": "TAKEOVER-1577446162751",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5dcbb0c22f801779d84b1e49_67503104_WR8-88AF-4-6-ADDIN1;/frequency=9530.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJST01-PSS32-ROADM37",
                    "type": "XC",
                    "equipmentId": "5dcbb0c22f801779d84b1e49_4.6",
                    "zEndNodes": [
                        "5dcbb0c22f801779d84b1e49_67502336_WR8-88AF-4-6-SIG;/frequency=9530.000"
                    ],
                    "equipmentUserLabel": "WR8-88AF-4-6",
                    "id": "5dcbb0c22f801779d84b1e49_67503104_WR8-88AF-4-6-ADDIN1;/frequency=9530.000-5dcbb0c22f801779d84b1e49_67502336_WR8-88AF-4-6-SIG;/frequency=9530.000",
                    "direction": "UNI"
                },
                {
                    "neId": "5dcbb0c22f801779d84b1e49",
                    "userLabel": "WR8-88AF-4-6-ADDIN1;/frequency=9530.000",
                    "isMergedRoute": null,
                    "ptpId": "5dcbb0c22f801779d84b1e49_67503104",
                    "ptpUserLabel": "WR8-88AF-4-6-ADDIN1",
                    "isSeparatedRoute": null,
                    "neUserLabel": "BJST01-PSS32-ROADM37",
                    "type": "TP",
                    "equipmentId": "5dcbb0c22f801779d84b1e49_4.6",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "WR8-88AF-4-6",
                    "id": "5dcbb0c22f801779d84b1e49_67503104_WR8-88AF-4-6-ADDIN1;/frequency=9530.000"
                },
                {
                    "userLabel": "BJST01-PSS32-ROADM37/SFD44-26-1-OMD--BJST01-PSS32-ROADM37/WR8-88AF-4-6-ADDIN1",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5dcbb0c22f801779d84b1e49_436284672"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5dcbb0c22f801779d84b1e49_436284672_5dcbb0c22f801779d84b1e49_67503104",
                    "type": "TL",
                    "direction": "UNI",
                    "zEndNodes": [
                        "5dcbb0c22f801779d84b1e49_67503104"
                    ]
                }
            ]
        },
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "WR8-88AF-4-6",
        "id": "5dcbb0c22f801779d84b1e49_67502336_WR8-88AF-4-6-SIG;/frequency=9530.000"
    },
    {
        "neId": "5dcbb0c22f801779d84b1e49",
        "userLabel": "SFD44-26-1-OMD;/frequency=9530.000",
        "isMergedRoute": true,
        "ptpId": "5dcbb0c22f801779d84b1e49_436284672",
        "ptpUserLabel": "SFD44-26-1-OMD",
        "isSeparatedRoute": null,
        "neUserLabel": "BJST01-PSS32-ROADM37",
        "type": "TP",
        "equipmentId": "5dcbb0c22f801779d84b1e49_26.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-26-1",
        "id": "5dcbb0c22f801779d84b1e49_436284672_SFD44-26-1-OMD;/frequency=9530.000"
    },
    {
        "neId": "5dcbb0c22f801779d84b1e49",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5dcbb0c22f801779d84b1e49_436275200_SFD44-26-1-9530;/frequency=9530.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "BJST01-PSS32-ROADM37",
        "type": "XC",
        "equipmentId": "5dcbb0c22f801779d84b1e49_26.1",
        "zEndNodes": [
            "5dcbb0c22f801779d84b1e49_436284672_SFD44-26-1-OMD;/frequency=9530.000"
        ],
        "equipmentUserLabel": "SFD44-26-1",
        "id": "5dcbb0c22f801779d84b1e49_436275200_SFD44-26-1-9530;/frequency=9530.000-5dcbb0c22f801779d84b1e49_436284672_SFD44-26-1-OMD;/frequency=9530.000",
        "direction": "BI"
    },
    {
        "neId": "5dcbb0c22f801779d84b1e49",
        "userLabel": "SFD44-26-1-9530;/frequency=9530.000",
        "isMergedRoute": null,
        "ptpId": "5dcbb0c22f801779d84b1e49_436275200",
        "ptpUserLabel": "SFD44-26-1-9530",
        "isSeparatedRoute": null,
        "neUserLabel": "BJST01-PSS32-ROADM37",
        "type": "TP",
        "equipmentId": "5dcbb0c22f801779d84b1e49_26.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-26-1",
        "id": "5dcbb0c22f801779d84b1e49_436275200_SFD44-26-1-9530;/frequency=9530.000"
    },
    {
        "userLabel": "BJST01-PSS32-ROADM37/SFD44-26-1-9530--BJST01-PSS32-ROADM37/260SCX2-5-2-L1",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5dcbb0c22f801779d84b1e49_436275200"
        ],
        "isSeparatedRoute": null,
        "id": "5dcbb0c22f801779d84b1e49_436275200_5dcbb0c22f801779d84b1e49_84017408",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5dcbb0c22f801779d84b1e49_84017408"
        ]
    },
    {
        "neId": "5dcbb0c22f801779d84b1e49",
        "userLabel": "260SCX2-5-2-L1;/frequency=/tunable-number=1",
        "isMergedRoute": null,
        "ptpId": "5dcbb0c22f801779d84b1e49_84017408",
        "ptpUserLabel": "260SCX2-5-2-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "BJST01-PSS32-ROADM37",
        "type": "TP",
        "equipmentId": "5dcbb0c22f801779d84b1e49_5.2",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "260SCX2-5-2",
        "id": "5dcbb0c22f801779d84b1e49_84017408_260SCX2-5-2-L1;/frequency=/tunable-number=1"
    }
];
const flowInfo6 = [
    {
        "neId": "5e0dba24c0348a5d5c29c612",
        "userLabel": "260SCX2-2-2-L1;/frequency=/tunable-number=1",
        "isMergedRoute": null,
        "ptpId": "5e0dba24c0348a5d5c29c612_33685760",
        "ptpUserLabel": "260SCX2-2-2-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.149",
        "type": "TP",
        "equipmentId": "5e0dba24c0348a5d5c29c612_2.2",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "260SCX2-2-2",
        "id": "5e0dba24c0348a5d5c29c612_33685760_260SCX2-2-2-L1;/frequency=/tunable-number=1"
    },
    {
        "userLabel": "135.252.222.149/260SCX2-2-2-L1--135.252.222.149/SFD44-26-1-9170",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e0dba24c0348a5d5c29c612_33685760"
        ],
        "isSeparatedRoute": null,
        "id": "5e0dba24c0348a5d5c29c612_33685760_5e0dba24c0348a5d5c29c612_436284416",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e0dba24c0348a5d5c29c612_436284416"
        ]
    },
    {
        "neId": "5e0dba24c0348a5d5c29c612",
        "userLabel": "SFD44-26-1-9170;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e0dba24c0348a5d5c29c612_436284416",
        "ptpUserLabel": "SFD44-26-1-9170",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.149",
        "type": "TP",
        "equipmentId": "5e0dba24c0348a5d5c29c612_26.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-26-1",
        "id": "5e0dba24c0348a5d5c29c612_436284416_SFD44-26-1-9170;/frequency=9170.000"
    },
    {
        "neId": "5e0dba24c0348a5d5c29c612",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e0dba24c0348a5d5c29c612_436284416_SFD44-26-1-9170;/frequency=9170.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.149",
        "type": "XC",
        "equipmentId": "5e0dba24c0348a5d5c29c612_26.1",
        "zEndNodes": [
            "5e0dba24c0348a5d5c29c612_436284672_SFD44-26-1-OMD;/frequency=9170.000"
        ],
        "equipmentUserLabel": "SFD44-26-1",
        "id": "5e0dba24c0348a5d5c29c612_436284416_SFD44-26-1-9170;/frequency=9170.000-5e0dba24c0348a5d5c29c612_436284672_SFD44-26-1-OMD;/frequency=9170.000",
        "direction": "BI"
    },
    {
        "neId": "5e0dba24c0348a5d5c29c612",
        "userLabel": "SFD44-26-1-OMD;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e0dba24c0348a5d5c29c612_436284672",
        "ptpUserLabel": "SFD44-26-1-OMD",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.149",
        "type": "TP",
        "equipmentId": "5e0dba24c0348a5d5c29c612_26.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-26-1",
        "id": "5e0dba24c0348a5d5c29c612_436284672_SFD44-26-1-OMD;/frequency=9170.000"
    },
    {
        "userLabel": "135.252.222.149/SFD44-26-1-OMD--135.252.222.149/AHPHG-2-4-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e0dba24c0348a5d5c29c612_436284672"
        ],
        "isSeparatedRoute": null,
        "id": "5e0dba24c0348a5d5c29c612_33816832_5e0dba24c0348a5d5c29c612_436284672",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e0dba24c0348a5d5c29c612_33816832"
        ]
    },
    {
        "neId": "5e0dba24c0348a5d5c29c612",
        "userLabel": "AHPHG-2-4-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e0dba24c0348a5d5c29c612_33816832",
        "ptpUserLabel": "AHPHG-2-4-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.149",
        "type": "TP",
        "equipmentId": "5e0dba24c0348a5d5c29c612_2.4",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-2-4",
        "id": "5e0dba24c0348a5d5c29c612_33816832_AHPHG-2-4-SIG;/oms=1"
    },
    {
        "neId": "5e0dba24c0348a5d5c29c612",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e0dba24c0348a5d5c29c612_33816832_AHPHG-2-4-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.149",
        "type": "XC",
        "equipmentId": "5e0dba24c0348a5d5c29c612_2.4",
        "zEndNodes": [
            "5e0dba24c0348a5d5c29c612_33817600_AHPHG-2-4-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPHG-2-4",
        "id": "5e0dba24c0348a5d5c29c612_33816832_AHPHG-2-4-SIG;/oms=1-5e0dba24c0348a5d5c29c612_33817600_AHPHG-2-4-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e0dba24c0348a5d5c29c612",
        "userLabel": "AHPHG-2-4-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e0dba24c0348a5d5c29c612_33817600",
        "ptpUserLabel": "AHPHG-2-4-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.149",
        "type": "TP",
        "equipmentId": "5e0dba24c0348a5d5c29c612_2.4",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-2-4",
        "id": "5e0dba24c0348a5d5c29c612_33817600_AHPHG-2-4-LINE;/oms=1"
    },
    {
        "userLabel": "135.252.222.149/AHPHG-2-4-LINE--135.252.222.148/AHPHG-2-4-LINE",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e0dba24c0348a5d5c29c612_33817600"
        ],
        "isSeparatedRoute": null,
        "id": "5e0dba17c0348a5d5c29c610_33817600_5e0dba24c0348a5d5c29c612_33817600",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e0dba17c0348a5d5c29c610_33817600"
        ]
    },
    {
        "neId": "5e0dba17c0348a5d5c29c610",
        "userLabel": "AHPHG-2-4-LINE;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e0dba17c0348a5d5c29c610_33817600",
        "ptpUserLabel": "AHPHG-2-4-LINE",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.148",
        "type": "TP",
        "equipmentId": "5e0dba17c0348a5d5c29c610_2.4",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-2-4",
        "id": "5e0dba17c0348a5d5c29c610_33817600_AHPHG-2-4-LINE;/oms=1"
    },
    {
        "neId": "5e0dba17c0348a5d5c29c610",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e0dba17c0348a5d5c29c610_33816832_AHPHG-2-4-SIG;/oms=1"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.148",
        "type": "XC",
        "equipmentId": "5e0dba17c0348a5d5c29c610_2.4",
        "zEndNodes": [
            "5e0dba17c0348a5d5c29c610_33817600_AHPHG-2-4-LINE;/oms=1"
        ],
        "equipmentUserLabel": "AHPHG-2-4",
        "id": "5e0dba17c0348a5d5c29c610_33816832_AHPHG-2-4-SIG;/oms=1-5e0dba17c0348a5d5c29c610_33817600_AHPHG-2-4-LINE;/oms=1",
        "direction": "BI"
    },
    {
        "neId": "5e0dba17c0348a5d5c29c610",
        "userLabel": "AHPHG-2-4-SIG;/oms=1",
        "isMergedRoute": null,
        "ptpId": "5e0dba17c0348a5d5c29c610_33816832",
        "ptpUserLabel": "AHPHG-2-4-SIG",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.148",
        "type": "TP",
        "equipmentId": "5e0dba17c0348a5d5c29c610_2.4",
        "tpType": "CTP",
        "layerRate": "OMS",
        "equipmentUserLabel": "AHPHG-2-4",
        "id": "5e0dba17c0348a5d5c29c610_33816832_AHPHG-2-4-SIG;/oms=1"
    },
    {
        "userLabel": "135.252.222.148/SFD44-26-1-OMD--135.252.222.148/AHPHG-2-4-SIG",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e0dba17c0348a5d5c29c610_436284672"
        ],
        "isSeparatedRoute": null,
        "id": "5e0dba17c0348a5d5c29c610_33816832_5e0dba17c0348a5d5c29c610_436284672",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e0dba17c0348a5d5c29c610_33816832"
        ]
    },
    {
        "neId": "5e0dba17c0348a5d5c29c610",
        "userLabel": "SFD44-26-1-OMD;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e0dba17c0348a5d5c29c610_436284672",
        "ptpUserLabel": "SFD44-26-1-OMD",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.148",
        "type": "TP",
        "equipmentId": "5e0dba17c0348a5d5c29c610_26.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-26-1",
        "id": "5e0dba17c0348a5d5c29c610_436284672_SFD44-26-1-OMD;/frequency=9170.000"
    },
    {
        "neId": "5e0dba17c0348a5d5c29c610",
        "userLabel": null,
        "isMergedRoute": null,
        "protectionType": "SIMPLE",
        "aEndNodes": [
            "5e0dba17c0348a5d5c29c610_436284416_SFD44-26-1-9170;/frequency=9170.000"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.148",
        "type": "XC",
        "equipmentId": "5e0dba17c0348a5d5c29c610_26.1",
        "zEndNodes": [
            "5e0dba17c0348a5d5c29c610_436284672_SFD44-26-1-OMD;/frequency=9170.000"
        ],
        "equipmentUserLabel": "SFD44-26-1",
        "id": "5e0dba17c0348a5d5c29c610_436284416_SFD44-26-1-9170;/frequency=9170.000-5e0dba17c0348a5d5c29c610_436284672_SFD44-26-1-OMD;/frequency=9170.000",
        "direction": "BI"
    },
    {
        "neId": "5e0dba17c0348a5d5c29c610",
        "userLabel": "SFD44-26-1-9170;/frequency=9170.000",
        "isMergedRoute": null,
        "ptpId": "5e0dba17c0348a5d5c29c610_436284416",
        "ptpUserLabel": "SFD44-26-1-9170",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.148",
        "type": "TP",
        "equipmentId": "5e0dba17c0348a5d5c29c610_26.1",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "SFD44-26-1",
        "id": "5e0dba17c0348a5d5c29c610_436284416_SFD44-26-1-9170;/frequency=9170.000"
    },
    {
        "userLabel": "135.252.222.148/260SCX2-2-2-L1--135.252.222.148/SFD44-26-1-9170",
        "isMergedRoute": null,
        "protectionType": "NORMAL",
        "aEndNodes": [
            "5e0dba17c0348a5d5c29c610_33685760"
        ],
        "isSeparatedRoute": null,
        "id": "5e0dba17c0348a5d5c29c610_33685760_5e0dba17c0348a5d5c29c610_436284416",
        "type": "TL",
        "direction": "BI",
        "zEndNodes": [
            "5e0dba17c0348a5d5c29c610_436284416"
        ]
    },
    {
        "neId": "5e0dba17c0348a5d5c29c610",
        "userLabel": "260SCX2-2-2-L1;/frequency=/tunable-number=1",
        "isMergedRoute": null,
        "ptpId": "5e0dba17c0348a5d5c29c610_33685760",
        "ptpUserLabel": "260SCX2-2-2-L1",
        "isSeparatedRoute": null,
        "neUserLabel": "135.252.222.148",
        "type": "TP",
        "equipmentId": "5e0dba17c0348a5d5c29c610_2.2",
        "tpType": "CTP",
        "layerRate": "OCH",
        "equipmentUserLabel": "260SCX2-2-2",
        "id": "5e0dba17c0348a5d5c29c610_33685760_260SCX2-2-2-L1;/frequency=/tunable-number=1"
    }
]
const ycable=[
    {
        "neId": "5e8c26c137f34e197290f59f",
        "userLabel": "PHONY_START_TP",
        "isMergedRoute": null,
        "ptpId": "PHONY_START_TP",
        "ptpUserLabel": "PHONY_START_TP",
        "isSeparatedRoute": null,
        "neUserLabel": "龙南",
        "type": "TP",
        "params": {
            "rootAlarmState": null,
            "alarmState": "CLEARED"
        },
        "equipmentId": null,
        "tpType": "PTP",
        "layerRate": null,
        "equipmentUserLabel": null,
        "id": "PHONY_START_TP"
    },
    {
        "neId": "5e8c26c137f34e197290f59f",
        "userLabel": "PHONY_START_XC",
        "isMergedRoute": null,
        "protectionType": "SNCP",
        "aEndNodes": [
            "PHONY_START_TP"
        ],
        "isSeparatedRoute": true,
        "neUserLabel": "龙南",
        "pgData": null,
        "type": "XC",
        "params": null,
        "equipmentId": null,
        "zEndNodes": [
            "5e8c26c137f34e197290f59f_50791424_43STX4-3-7-C3;/odu2=1",
            "5e8c275f37f34e197290f76d_17564672_43STX4-1-12-C3;/odu2=1"
        ],
        "separatedRouteElements": {
            "Spare": [
                {
                    "neId": "5e8c275f37f34e197290f76d",
                    "userLabel": "43STX4-1-12-C3;/odu2=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c275f37f34e197290f76d_17564672",
                    "ptpUserLabel": "43STX4-1-12-C3",
                    "isSeparatedRoute": null,
                    "neUserLabel": "沪闵",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c275f37f34e197290f76d_1.12",
                    "tpType": "CTP",
                    "layerRate": "ODU2",
                    "equipmentUserLabel": "43STX4-1-12",
                    "id": "5e8c275f37f34e197290f76d_17564672_43STX4-1-12-C3;/odu2=1"
                },
                {
                    "neId": "5e8c275f37f34e197290f76d",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c275f37f34e197290f76d_17564672_43STX4-1-12-C3;/odu2=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "沪闵",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c275f37f34e197290f76d_1.12",
                    "zEndNodes": [
                        "5e8c275f37f34e197290f76d_17563904_43STX4-1-12-L1;/otu3=1/odu3=1/odu2=3"
                    ],
                    "equipmentUserLabel": "43STX4-1-12",
                    "id": "5e8c275f37f34e197290f76d_17564672_43STX4-1-12-C3;/odu2=1-5e8c275f37f34e197290f76d_17563904_43STX4-1-12-L1;/otu3=1/odu3=1/odu2=3",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c275f37f34e197290f76d",
                    "userLabel": "43STX4-1-12-L1;/otu3=1/odu3=1/odu2=3",
                    "isMergedRoute": null,
                    "ptpId": "5e8c275f37f34e197290f76d_17563904",
                    "ptpUserLabel": "43STX4-1-12-L1",
                    "isSeparatedRoute": null,
                    "neUserLabel": "沪闵",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c275f37f34e197290f76d_1.12",
                    "tpType": "CTP",
                    "layerRate": "ODU2",
                    "equipmentUserLabel": "43STX4-1-12",
                    "id": "5e8c275f37f34e197290f76d_17563904_43STX4-1-12-L1;/otu3=1/odu3=1/odu2=3"
                },
                {
                    "userLabel": "沪闵/43STX4-1-12-L1--沪闵/SFD44-25-1-9560",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c275f37f34e197290f76d_17563904"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c275f37f34e197290f76d_17563904_5e8c275f37f34e197290f76d_419497216",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c275f37f34e197290f76d_419497216"
                    ]
                },
                {
                    "neId": "5e8c275f37f34e197290f76d",
                    "userLabel": "SFD44-25-1-9560;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c275f37f34e197290f76d_419497216",
                    "ptpUserLabel": "SFD44-25-1-9560",
                    "isSeparatedRoute": null,
                    "neUserLabel": "沪闵",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c275f37f34e197290f76d_25.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44-25-1",
                    "id": "5e8c275f37f34e197290f76d_419497216_SFD44-25-1-9560;/frequency=9560.000"
                },
                {
                    "neId": "5e8c275f37f34e197290f76d",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c275f37f34e197290f76d_419497216_SFD44-25-1-9560;/frequency=9560.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "沪闵",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c275f37f34e197290f76d_25.1",
                    "zEndNodes": [
                        "5e8c275f37f34e197290f76d_419507456_SFD44-25-1-OMD;/frequency=9560.000"
                    ],
                    "equipmentUserLabel": "SFD44-25-1",
                    "id": "5e8c275f37f34e197290f76d_419497216_SFD44-25-1-9560;/frequency=9560.000-5e8c275f37f34e197290f76d_419507456_SFD44-25-1-OMD;/frequency=9560.000",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c275f37f34e197290f76d",
                    "userLabel": "SFD44-25-1-OMD;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c275f37f34e197290f76d_419507456",
                    "ptpUserLabel": "SFD44-25-1-OMD",
                    "isSeparatedRoute": null,
                    "neUserLabel": "沪闵",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c275f37f34e197290f76d_25.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44-25-1",
                    "id": "5e8c275f37f34e197290f76d_419507456_SFD44-25-1-OMD;/frequency=9560.000"
                },
                {
                    "userLabel": "沪闵/AHPHG-1-2-SIG--沪闵/SFD44-25-1-OMD",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c275f37f34e197290f76d_16908544"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c275f37f34e197290f76d_16908544_5e8c275f37f34e197290f76d_419507456",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c275f37f34e197290f76d_419507456"
                    ]
                },
                {
                    "neId": "5e8c275f37f34e197290f76d",
                    "userLabel": "AHPHG-1-2-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c275f37f34e197290f76d_16908544",
                    "ptpUserLabel": "AHPHG-1-2-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "沪闵",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c275f37f34e197290f76d_1.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5e8c275f37f34e197290f76d_16908544_AHPHG-1-2-SIG;/oms=1"
                },
                {
                    "neId": "5e8c275f37f34e197290f76d",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c275f37f34e197290f76d_16908544_AHPHG-1-2-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "沪闵",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c275f37f34e197290f76d_1.2",
                    "zEndNodes": [
                        "5e8c275f37f34e197290f76d_16909312_AHPHG-1-2-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5e8c275f37f34e197290f76d_16908544_AHPHG-1-2-SIG;/oms=1-5e8c275f37f34e197290f76d_16909312_AHPHG-1-2-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c275f37f34e197290f76d",
                    "userLabel": "AHPHG-1-2-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c275f37f34e197290f76d_16909312",
                    "ptpUserLabel": "AHPHG-1-2-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "沪闵",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c275f37f34e197290f76d_1.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5e8c275f37f34e197290f76d_16909312_AHPHG-1-2-LINE;/oms=1"
                },
                {
                    "userLabel": "沪闵/AHPHG-1-2-LINE--龙南/AHPHG-3-2-LINE",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c275f37f34e197290f76d_16909312"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c26c137f34e197290f59f_50463744_5e8c275f37f34e197290f76d_16909312",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c26c137f34e197290f59f_50463744"
                    ]
                },
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": "AHPHG-3-2-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26c137f34e197290f59f_50463744",
                    "ptpUserLabel": "AHPHG-3-2-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26c137f34e197290f59f_3.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-3-2",
                    "id": "5e8c26c137f34e197290f59f_50463744_AHPHG-3-2-LINE;/oms=1"
                },
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c26c137f34e197290f59f_50462976_AHPHG-3-2-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c26c137f34e197290f59f_3.2",
                    "zEndNodes": [
                        "5e8c26c137f34e197290f59f_50463744_AHPHG-3-2-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-3-2",
                    "id": "5e8c26c137f34e197290f59f_50462976_AHPHG-3-2-SIG;/oms=1-5e8c26c137f34e197290f59f_50463744_AHPHG-3-2-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": "AHPHG-3-2-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26c137f34e197290f59f_50462976",
                    "ptpUserLabel": "AHPHG-3-2-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26c137f34e197290f59f_3.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-3-2",
                    "id": "5e8c26c137f34e197290f59f_50462976_AHPHG-3-2-SIG;/oms=1"
                },
                {
                    "userLabel": "龙南/AHPHG-3-2-SIG--龙南/CWR8-3-10-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c26c137f34e197290f59f_50462976"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c26c137f34e197290f59f_50462976_5e8c26c137f34e197290f59f_50987264",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c26c137f34e197290f59f_50987264"
                    ]
                },
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": "CWR8-3-10-SIG;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26c137f34e197290f59f_50987264",
                    "ptpUserLabel": "CWR8-3-10-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26c137f34e197290f59f_3.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "CWR8-3-10",
                    "id": "5e8c26c137f34e197290f59f_50987264_CWR8-3-10-SIG;/frequency=9560.000"
                },
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": "TAKEOVER-1586248113561",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c26c137f34e197290f59f_50987776_CWR8-3-10-OMD;/frequency=9560.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c26c137f34e197290f59f_3.10",
                    "zEndNodes": [
                        "5e8c26c137f34e197290f59f_50987264_CWR8-3-10-SIG;/frequency=9560.000"
                    ],
                    "equipmentUserLabel": "CWR8-3-10",
                    "id": "5e8c26c137f34e197290f59f_50987776_CWR8-3-10-OMD;/frequency=9560.000-5e8c26c137f34e197290f59f_50987264_CWR8-3-10-SIG;/frequency=9560.000",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": "CWR8-3-10-OMD;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26c137f34e197290f59f_50987776",
                    "ptpUserLabel": "CWR8-3-10-OMD",
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26c137f34e197290f59f_3.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "CWR8-3-10",
                    "id": "5e8c26c137f34e197290f59f_50987776_CWR8-3-10-OMD;/frequency=9560.000"
                },
                {
                    "userLabel": "龙南/CWR8-3-10-OMD--龙南/SFD44-27-1-OMD",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c26c137f34e197290f59f_50987776"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c26c137f34e197290f59f_453061888_5e8c26c137f34e197290f59f_50987776",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c26c137f34e197290f59f_453061888"
                    ]
                },
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": "SFD44-27-1-OMD;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26c137f34e197290f59f_453061888",
                    "ptpUserLabel": "SFD44-27-1-OMD",
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26c137f34e197290f59f_27.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44-27-1",
                    "id": "5e8c26c137f34e197290f59f_453061888_SFD44-27-1-OMD;/frequency=9560.000"
                },
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c26c137f34e197290f59f_453051648_SFD44-27-1-9560;/frequency=9560.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c26c137f34e197290f59f_27.1",
                    "zEndNodes": [
                        "5e8c26c137f34e197290f59f_453061888_SFD44-27-1-OMD;/frequency=9560.000"
                    ],
                    "equipmentUserLabel": "SFD44-27-1",
                    "id": "5e8c26c137f34e197290f59f_453051648_SFD44-27-1-9560;/frequency=9560.000-5e8c26c137f34e197290f59f_453061888_SFD44-27-1-OMD;/frequency=9560.000",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": "SFD44-27-1-9560;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26c137f34e197290f59f_453051648",
                    "ptpUserLabel": "SFD44-27-1-9560",
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26c137f34e197290f59f_27.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44-27-1",
                    "id": "5e8c26c137f34e197290f59f_453051648_SFD44-27-1-9560;/frequency=9560.000"
                },
                {
                    "userLabel": "龙南/43STX4-3-4-L1--龙南/SFD44-27-1-9560",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c26c137f34e197290f59f_50594048"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c26c137f34e197290f59f_453051648_5e8c26c137f34e197290f59f_50594048",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c26c137f34e197290f59f_453051648"
                    ]
                },
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": "43STX4-3-4-L1;/otu3=1/odu3=1/odu2=3",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26c137f34e197290f59f_50594048",
                    "ptpUserLabel": "43STX4-3-4-L1",
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26c137f34e197290f59f_3.4",
                    "tpType": "CTP",
                    "layerRate": "ODU2",
                    "equipmentUserLabel": "43STX4-3-4",
                    "id": "5e8c26c137f34e197290f59f_50594048_43STX4-3-4-L1;/otu3=1/odu3=1/odu2=3"
                },
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c26c137f34e197290f59f_50594816_43STX4-3-4-C3;/odu2=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c26c137f34e197290f59f_3.4",
                    "zEndNodes": [
                        "5e8c26c137f34e197290f59f_50594048_43STX4-3-4-L1;/otu3=1/odu3=1/odu2=3"
                    ],
                    "equipmentUserLabel": "43STX4-3-4",
                    "id": "5e8c26c137f34e197290f59f_50594816_43STX4-3-4-C3;/odu2=1-5e8c26c137f34e197290f59f_50594048_43STX4-3-4-L1;/otu3=1/odu3=1/odu2=3",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": "43STX4-3-4-C3;/odu2=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26c137f34e197290f59f_50594816",
                    "ptpUserLabel": "43STX4-3-4-C3",
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26c137f34e197290f59f_3.4",
                    "tpType": "CTP",
                    "layerRate": "ODU2",
                    "equipmentUserLabel": "43STX4-3-4",
                    "id": "5e8c26c137f34e197290f59f_50594816_43STX4-3-4-C3;/odu2=1"
                }
            ],
            "Main": [
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": "43STX4-3-7-C3;/odu2=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26c137f34e197290f59f_50791424",
                    "ptpUserLabel": "43STX4-3-7-C3",
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26c137f34e197290f59f_3.7",
                    "tpType": "CTP",
                    "layerRate": "ODU2",
                    "equipmentUserLabel": "43STX4-3-7",
                    "id": "5e8c26c137f34e197290f59f_50791424_43STX4-3-7-C3;/odu2=1"
                },
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c26c137f34e197290f59f_50791424_43STX4-3-7-C3;/odu2=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c26c137f34e197290f59f_3.7",
                    "zEndNodes": [
                        "5e8c26c137f34e197290f59f_50790656_43STX4-3-7-L1;/otu3=1/odu3=1/odu2=3"
                    ],
                    "equipmentUserLabel": "43STX4-3-7",
                    "id": "5e8c26c137f34e197290f59f_50791424_43STX4-3-7-C3;/odu2=1-5e8c26c137f34e197290f59f_50790656_43STX4-3-7-L1;/otu3=1/odu3=1/odu2=3",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": "43STX4-3-7-L1;/otu3=1/odu3=1/odu2=3",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26c137f34e197290f59f_50790656",
                    "ptpUserLabel": "43STX4-3-7-L1",
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26c137f34e197290f59f_3.7",
                    "tpType": "CTP",
                    "layerRate": "ODU2",
                    "equipmentUserLabel": "43STX4-3-7",
                    "id": "5e8c26c137f34e197290f59f_50790656_43STX4-3-7-L1;/otu3=1/odu3=1/odu2=3"
                },
                {
                    "userLabel": "龙南/43STX4-3-7-L1--龙南/SFD44-25-1-9560",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c26c137f34e197290f59f_50790656"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c26c137f34e197290f59f_419497216_5e8c26c137f34e197290f59f_50790656",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c26c137f34e197290f59f_419497216"
                    ]
                },
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": "SFD44-25-1-9560;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26c137f34e197290f59f_419497216",
                    "ptpUserLabel": "SFD44-25-1-9560",
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26c137f34e197290f59f_25.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44-25-1",
                    "id": "5e8c26c137f34e197290f59f_419497216_SFD44-25-1-9560;/frequency=9560.000"
                },
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c26c137f34e197290f59f_419497216_SFD44-25-1-9560;/frequency=9560.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c26c137f34e197290f59f_25.1",
                    "zEndNodes": [
                        "5e8c26c137f34e197290f59f_419507456_SFD44-25-1-OMD;/frequency=9560.000"
                    ],
                    "equipmentUserLabel": "SFD44-25-1",
                    "id": "5e8c26c137f34e197290f59f_419497216_SFD44-25-1-9560;/frequency=9560.000-5e8c26c137f34e197290f59f_419507456_SFD44-25-1-OMD;/frequency=9560.000",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": "SFD44-25-1-OMD;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26c137f34e197290f59f_419507456",
                    "ptpUserLabel": "SFD44-25-1-OMD",
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26c137f34e197290f59f_25.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44-25-1",
                    "id": "5e8c26c137f34e197290f59f_419507456_SFD44-25-1-OMD;/frequency=9560.000"
                },
                {
                    "userLabel": "龙南/CWR8-2-10-OMD--龙南/SFD44-25-1-OMD",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c26c137f34e197290f59f_34210560"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c26c137f34e197290f59f_34210560_5e8c26c137f34e197290f59f_419507456",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c26c137f34e197290f59f_419507456"
                    ]
                },
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": "CWR8-2-10-OMD;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26c137f34e197290f59f_34210560",
                    "ptpUserLabel": "CWR8-2-10-OMD",
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26c137f34e197290f59f_2.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "CWR8-2-10",
                    "id": "5e8c26c137f34e197290f59f_34210560_CWR8-2-10-OMD;/frequency=9560.000"
                },
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": "TAKEOVER-1586248113541",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c26c137f34e197290f59f_34210560_CWR8-2-10-OMD;/frequency=9560.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c26c137f34e197290f59f_2.10",
                    "zEndNodes": [
                        "5e8c26c137f34e197290f59f_34210048_CWR8-2-10-SIG;/frequency=9560.000"
                    ],
                    "equipmentUserLabel": "CWR8-2-10",
                    "id": "5e8c26c137f34e197290f59f_34210560_CWR8-2-10-OMD;/frequency=9560.000-5e8c26c137f34e197290f59f_34210048_CWR8-2-10-SIG;/frequency=9560.000",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": "CWR8-2-10-SIG;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26c137f34e197290f59f_34210048",
                    "ptpUserLabel": "CWR8-2-10-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26c137f34e197290f59f_2.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "CWR8-2-10",
                    "id": "5e8c26c137f34e197290f59f_34210048_CWR8-2-10-SIG;/frequency=9560.000"
                },
                {
                    "userLabel": "龙南/CWR8-2-10-SIG--龙南/AHPHG-2-2-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c26c137f34e197290f59f_34210048"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c26c137f34e197290f59f_33685760_5e8c26c137f34e197290f59f_34210048",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c26c137f34e197290f59f_33685760"
                    ]
                },
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": "AHPHG-2-2-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26c137f34e197290f59f_33685760",
                    "ptpUserLabel": "AHPHG-2-2-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26c137f34e197290f59f_2.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-2-2",
                    "id": "5e8c26c137f34e197290f59f_33685760_AHPHG-2-2-SIG;/oms=1"
                },
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c26c137f34e197290f59f_33685760_AHPHG-2-2-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c26c137f34e197290f59f_2.2",
                    "zEndNodes": [
                        "5e8c26c137f34e197290f59f_33686528_AHPHG-2-2-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-2-2",
                    "id": "5e8c26c137f34e197290f59f_33685760_AHPHG-2-2-SIG;/oms=1-5e8c26c137f34e197290f59f_33686528_AHPHG-2-2-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c26c137f34e197290f59f",
                    "userLabel": "AHPHG-2-2-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26c137f34e197290f59f_33686528",
                    "ptpUserLabel": "AHPHG-2-2-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "龙南",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26c137f34e197290f59f_2.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-2-2",
                    "id": "5e8c26c137f34e197290f59f_33686528_AHPHG-2-2-LINE;/oms=1"
                },
                {
                    "userLabel": "临空/AHPHG-2-2-LINE--龙南/AHPHG-2-2-LINE",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c26a637f34e197290f59d_33686528"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c26a637f34e197290f59d_33686528_5e8c26c137f34e197290f59f_33686528",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c26c137f34e197290f59f_33686528"
                    ]
                },
                {
                    "neId": "5e8c26a637f34e197290f59d",
                    "userLabel": "AHPHG-2-2-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26a637f34e197290f59d_33686528",
                    "ptpUserLabel": "AHPHG-2-2-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "临空",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26a637f34e197290f59d_2.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-2-2",
                    "id": "5e8c26a637f34e197290f59d_33686528_AHPHG-2-2-LINE;/oms=1"
                },
                {
                    "neId": "5e8c26a637f34e197290f59d",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c26a637f34e197290f59d_33685760_AHPHG-2-2-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "临空",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c26a637f34e197290f59d_2.2",
                    "zEndNodes": [
                        "5e8c26a637f34e197290f59d_33686528_AHPHG-2-2-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-2-2",
                    "id": "5e8c26a637f34e197290f59d_33685760_AHPHG-2-2-SIG;/oms=1-5e8c26a637f34e197290f59d_33686528_AHPHG-2-2-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c26a637f34e197290f59d",
                    "userLabel": "AHPHG-2-2-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26a637f34e197290f59d_33685760",
                    "ptpUserLabel": "AHPHG-2-2-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "临空",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26a637f34e197290f59d_2.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-2-2",
                    "id": "5e8c26a637f34e197290f59d_33685760_AHPHG-2-2-SIG;/oms=1"
                },
                {
                    "userLabel": "临空/CWR8-2-10-SIG--临空/AHPHG-2-2-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c26a637f34e197290f59d_34210048"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c26a637f34e197290f59d_33685760_5e8c26a637f34e197290f59d_34210048",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c26a637f34e197290f59d_33685760"
                    ]
                },
                {
                    "neId": "5e8c26a637f34e197290f59d",
                    "userLabel": "CWR8-2-10-SIG;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26a637f34e197290f59d_34210048",
                    "ptpUserLabel": "CWR8-2-10-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "临空",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26a637f34e197290f59d_2.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "CWR8-2-10",
                    "id": "5e8c26a637f34e197290f59d_34210048_CWR8-2-10-SIG;/frequency=9560.000"
                },
                {
                    "neId": "5e8c26a637f34e197290f59d",
                    "userLabel": "TAKEOVER-1586248113541",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c26a637f34e197290f59d_34212608_CWR8-2-10-CLS8;/frequency=9560.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "临空",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c26a637f34e197290f59d_2.10",
                    "zEndNodes": [
                        "5e8c26a637f34e197290f59d_34210048_CWR8-2-10-SIG;/frequency=9560.000"
                    ],
                    "equipmentUserLabel": "CWR8-2-10",
                    "id": "5e8c26a637f34e197290f59d_34212608_CWR8-2-10-CLS8;/frequency=9560.000-5e8c26a637f34e197290f59d_34210048_CWR8-2-10-SIG;/frequency=9560.000",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c26a637f34e197290f59d",
                    "userLabel": "CWR8-2-10-CLS8;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26a637f34e197290f59d_34212608",
                    "ptpUserLabel": "CWR8-2-10-CLS8",
                    "isSeparatedRoute": null,
                    "neUserLabel": "临空",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26a637f34e197290f59d_2.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "CWR8-2-10",
                    "id": "5e8c26a637f34e197290f59d_34212608_CWR8-2-10-CLS8;/frequency=9560.000"
                },
                {
                    "userLabel": "临空/CWR8-2-10-CLS8--临空/CWR8-3-10-CLS7",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c26a637f34e197290f59d_34212608"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c26a637f34e197290f59d_34212608_5e8c26a637f34e197290f59d_50989568",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c26a637f34e197290f59d_50989568"
                    ]
                },
                {
                    "neId": "5e8c26a637f34e197290f59d",
                    "userLabel": "CWR8-3-10-CLS7;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26a637f34e197290f59d_50989568",
                    "ptpUserLabel": "CWR8-3-10-CLS7",
                    "isSeparatedRoute": null,
                    "neUserLabel": "临空",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26a637f34e197290f59d_3.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "CWR8-3-10",
                    "id": "5e8c26a637f34e197290f59d_50989568_CWR8-3-10-CLS7;/frequency=9560.000"
                },
                {
                    "neId": "5e8c26a637f34e197290f59d",
                    "userLabel": "TAKEOVER-1586248113541",
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c26a637f34e197290f59d_50987264_CWR8-3-10-SIG;/frequency=9560.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "临空",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c26a637f34e197290f59d_3.10",
                    "zEndNodes": [
                        "5e8c26a637f34e197290f59d_50989568_CWR8-3-10-CLS7;/frequency=9560.000"
                    ],
                    "equipmentUserLabel": "CWR8-3-10",
                    "id": "5e8c26a637f34e197290f59d_50987264_CWR8-3-10-SIG;/frequency=9560.000-5e8c26a637f34e197290f59d_50989568_CWR8-3-10-CLS7;/frequency=9560.000",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c26a637f34e197290f59d",
                    "userLabel": "CWR8-3-10-SIG;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26a637f34e197290f59d_50987264",
                    "ptpUserLabel": "CWR8-3-10-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "临空",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26a637f34e197290f59d_3.10",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "CWR8-3-10",
                    "id": "5e8c26a637f34e197290f59d_50987264_CWR8-3-10-SIG;/frequency=9560.000"
                },
                {
                    "userLabel": "临空/CWR8-3-10-SIG--临空/AHPHG-3-2-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c26a637f34e197290f59d_50987264"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c26a637f34e197290f59d_50462976_5e8c26a637f34e197290f59d_50987264",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c26a637f34e197290f59d_50462976"
                    ]
                },
                {
                    "neId": "5e8c26a637f34e197290f59d",
                    "userLabel": "AHPHG-3-2-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26a637f34e197290f59d_50462976",
                    "ptpUserLabel": "AHPHG-3-2-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "临空",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26a637f34e197290f59d_3.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-3-2",
                    "id": "5e8c26a637f34e197290f59d_50462976_AHPHG-3-2-SIG;/oms=1"
                },
                {
                    "neId": "5e8c26a637f34e197290f59d",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c26a637f34e197290f59d_50462976_AHPHG-3-2-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "临空",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c26a637f34e197290f59d_3.2",
                    "zEndNodes": [
                        "5e8c26a637f34e197290f59d_50463744_AHPHG-3-2-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-3-2",
                    "id": "5e8c26a637f34e197290f59d_50462976_AHPHG-3-2-SIG;/oms=1-5e8c26a637f34e197290f59d_50463744_AHPHG-3-2-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c26a637f34e197290f59d",
                    "userLabel": "AHPHG-3-2-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c26a637f34e197290f59d_50463744",
                    "ptpUserLabel": "AHPHG-3-2-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "临空",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c26a637f34e197290f59d_3.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-3-2",
                    "id": "5e8c26a637f34e197290f59d_50463744_AHPHG-3-2-LINE;/oms=1"
                },
                {
                    "userLabel": "临空/AHPHG-3-2-LINE--水城/AHPHG-1-3-LINE",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c26a637f34e197290f59d_50463744"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c26a637f34e197290f59d_50463744_5e8c274037f34e197290f726_16974848",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c274037f34e197290f726_16974848"
                    ]
                },
                {
                    "neId": "5e8c274037f34e197290f726",
                    "userLabel": "AHPHG-1-3-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c274037f34e197290f726_16974848",
                    "ptpUserLabel": "AHPHG-1-3-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "水城",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c274037f34e197290f726_1.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5e8c274037f34e197290f726_16974848_AHPHG-1-3-LINE;/oms=1"
                },
                {
                    "neId": "5e8c274037f34e197290f726",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c274037f34e197290f726_16974080_AHPHG-1-3-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "水城",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c274037f34e197290f726_1.3",
                    "zEndNodes": [
                        "5e8c274037f34e197290f726_16974848_AHPHG-1-3-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5e8c274037f34e197290f726_16974080_AHPHG-1-3-SIG;/oms=1-5e8c274037f34e197290f726_16974848_AHPHG-1-3-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c274037f34e197290f726",
                    "userLabel": "AHPHG-1-3-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c274037f34e197290f726_16974080",
                    "ptpUserLabel": "AHPHG-1-3-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "水城",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c274037f34e197290f726_1.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5e8c274037f34e197290f726_16974080_AHPHG-1-3-SIG;/oms=1"
                },
                {
                    "userLabel": "水城/SFD44-26-1-OMD--水城/AHPHG-1-3-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c274037f34e197290f726_436284672"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c274037f34e197290f726_16974080_5e8c274037f34e197290f726_436284672",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c274037f34e197290f726_16974080"
                    ]
                },
                {
                    "neId": "5e8c274037f34e197290f726",
                    "userLabel": "SFD44-26-1-OMD;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c274037f34e197290f726_436284672",
                    "ptpUserLabel": "SFD44-26-1-OMD",
                    "isSeparatedRoute": null,
                    "neUserLabel": "水城",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c274037f34e197290f726_26.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44-26-1",
                    "id": "5e8c274037f34e197290f726_436284672_SFD44-26-1-OMD;/frequency=9560.000"
                },
                {
                    "neId": "5e8c274037f34e197290f726",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c274037f34e197290f726_436274432_SFD44-26-1-9560;/frequency=9560.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "水城",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c274037f34e197290f726_26.1",
                    "zEndNodes": [
                        "5e8c274037f34e197290f726_436284672_SFD44-26-1-OMD;/frequency=9560.000"
                    ],
                    "equipmentUserLabel": "SFD44-26-1",
                    "id": "5e8c274037f34e197290f726_436274432_SFD44-26-1-9560;/frequency=9560.000-5e8c274037f34e197290f726_436284672_SFD44-26-1-OMD;/frequency=9560.000",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c274037f34e197290f726",
                    "userLabel": "SFD44-26-1-9560;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c274037f34e197290f726_436274432",
                    "ptpUserLabel": "SFD44-26-1-9560",
                    "isSeparatedRoute": null,
                    "neUserLabel": "水城",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c274037f34e197290f726_26.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44-26-1",
                    "id": "5e8c274037f34e197290f726_436274432_SFD44-26-1-9560;/frequency=9560.000"
                },
                {
                    "userLabel": "水城/SFD44-26-1-9560--水城/SFD44-25-1-9560",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c274037f34e197290f726_436274432"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c274037f34e197290f726_419497216_5e8c274037f34e197290f726_436274432",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c274037f34e197290f726_419497216"
                    ]
                },
                {
                    "neId": "5e8c274037f34e197290f726",
                    "userLabel": "SFD44-25-1-9560;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c274037f34e197290f726_419497216",
                    "ptpUserLabel": "SFD44-25-1-9560",
                    "isSeparatedRoute": null,
                    "neUserLabel": "水城",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c274037f34e197290f726_25.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44-25-1",
                    "id": "5e8c274037f34e197290f726_419497216_SFD44-25-1-9560;/frequency=9560.000"
                },
                {
                    "neId": "5e8c274037f34e197290f726",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c274037f34e197290f726_419497216_SFD44-25-1-9560;/frequency=9560.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "水城",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c274037f34e197290f726_25.1",
                    "zEndNodes": [
                        "5e8c274037f34e197290f726_419507456_SFD44-25-1-OMD;/frequency=9560.000"
                    ],
                    "equipmentUserLabel": "SFD44-25-1",
                    "id": "5e8c274037f34e197290f726_419497216_SFD44-25-1-9560;/frequency=9560.000-5e8c274037f34e197290f726_419507456_SFD44-25-1-OMD;/frequency=9560.000",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c274037f34e197290f726",
                    "userLabel": "SFD44-25-1-OMD;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c274037f34e197290f726_419507456",
                    "ptpUserLabel": "SFD44-25-1-OMD",
                    "isSeparatedRoute": null,
                    "neUserLabel": "水城",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c274037f34e197290f726_25.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44-25-1",
                    "id": "5e8c274037f34e197290f726_419507456_SFD44-25-1-OMD;/frequency=9560.000"
                },
                {
                    "userLabel": "水城/AHPHG-1-2-SIG--水城/SFD44-25-1-OMD",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c274037f34e197290f726_16908544"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c274037f34e197290f726_16908544_5e8c274037f34e197290f726_419507456",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c274037f34e197290f726_419507456"
                    ]
                },
                {
                    "neId": "5e8c274037f34e197290f726",
                    "userLabel": "AHPHG-1-2-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c274037f34e197290f726_16908544",
                    "ptpUserLabel": "AHPHG-1-2-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "水城",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c274037f34e197290f726_1.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5e8c274037f34e197290f726_16908544_AHPHG-1-2-SIG;/oms=1"
                },
                {
                    "neId": "5e8c274037f34e197290f726",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c274037f34e197290f726_16908544_AHPHG-1-2-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "水城",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c274037f34e197290f726_1.2",
                    "zEndNodes": [
                        "5e8c274037f34e197290f726_16909312_AHPHG-1-2-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5e8c274037f34e197290f726_16908544_AHPHG-1-2-SIG;/oms=1-5e8c274037f34e197290f726_16909312_AHPHG-1-2-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c274037f34e197290f726",
                    "userLabel": "AHPHG-1-2-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c274037f34e197290f726_16909312",
                    "ptpUserLabel": "AHPHG-1-2-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "水城",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c274037f34e197290f726_1.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5e8c274037f34e197290f726_16909312_AHPHG-1-2-LINE;/oms=1"
                },
                {
                    "userLabel": "建国/AHPHG-1-3-LINE--水城/AHPHG-1-2-LINE",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c274e37f34e197290f749_16974848"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c274037f34e197290f726_16909312_5e8c274e37f34e197290f749_16974848",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c274037f34e197290f726_16909312"
                    ]
                },
                {
                    "neId": "5e8c274e37f34e197290f749",
                    "userLabel": "AHPHG-1-3-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c274e37f34e197290f749_16974848",
                    "ptpUserLabel": "AHPHG-1-3-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "建国",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c274e37f34e197290f749_1.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5e8c274e37f34e197290f749_16974848_AHPHG-1-3-LINE;/oms=1"
                },
                {
                    "neId": "5e8c274e37f34e197290f749",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c274e37f34e197290f749_16974080_AHPHG-1-3-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "建国",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c274e37f34e197290f749_1.3",
                    "zEndNodes": [
                        "5e8c274e37f34e197290f749_16974848_AHPHG-1-3-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5e8c274e37f34e197290f749_16974080_AHPHG-1-3-SIG;/oms=1-5e8c274e37f34e197290f749_16974848_AHPHG-1-3-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c274e37f34e197290f749",
                    "userLabel": "AHPHG-1-3-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c274e37f34e197290f749_16974080",
                    "ptpUserLabel": "AHPHG-1-3-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "建国",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c274e37f34e197290f749_1.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5e8c274e37f34e197290f749_16974080_AHPHG-1-3-SIG;/oms=1"
                },
                {
                    "userLabel": "建国/SFD44-26-1-OMD--建国/AHPHG-1-3-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c274e37f34e197290f749_436284672"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c274e37f34e197290f749_16974080_5e8c274e37f34e197290f749_436284672",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c274e37f34e197290f749_16974080"
                    ]
                },
                {
                    "neId": "5e8c274e37f34e197290f749",
                    "userLabel": "SFD44-26-1-OMD;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c274e37f34e197290f749_436284672",
                    "ptpUserLabel": "SFD44-26-1-OMD",
                    "isSeparatedRoute": null,
                    "neUserLabel": "建国",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c274e37f34e197290f749_26.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44-26-1",
                    "id": "5e8c274e37f34e197290f749_436284672_SFD44-26-1-OMD;/frequency=9560.000"
                },
                {
                    "neId": "5e8c274e37f34e197290f749",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c274e37f34e197290f749_436274432_SFD44-26-1-9560;/frequency=9560.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "建国",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c274e37f34e197290f749_26.1",
                    "zEndNodes": [
                        "5e8c274e37f34e197290f749_436284672_SFD44-26-1-OMD;/frequency=9560.000"
                    ],
                    "equipmentUserLabel": "SFD44-26-1",
                    "id": "5e8c274e37f34e197290f749_436274432_SFD44-26-1-9560;/frequency=9560.000-5e8c274e37f34e197290f749_436284672_SFD44-26-1-OMD;/frequency=9560.000",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c274e37f34e197290f749",
                    "userLabel": "SFD44-26-1-9560;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c274e37f34e197290f749_436274432",
                    "ptpUserLabel": "SFD44-26-1-9560",
                    "isSeparatedRoute": null,
                    "neUserLabel": "建国",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c274e37f34e197290f749_26.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44-26-1",
                    "id": "5e8c274e37f34e197290f749_436274432_SFD44-26-1-9560;/frequency=9560.000"
                },
                {
                    "userLabel": "建国/SFD44-26-1-9560--建国/SFD44-25-1-9560",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c274e37f34e197290f749_436274432"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c274e37f34e197290f749_419497216_5e8c274e37f34e197290f749_436274432",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c274e37f34e197290f749_419497216"
                    ]
                },
                {
                    "neId": "5e8c274e37f34e197290f749",
                    "userLabel": "SFD44-25-1-9560;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c274e37f34e197290f749_419497216",
                    "ptpUserLabel": "SFD44-25-1-9560",
                    "isSeparatedRoute": null,
                    "neUserLabel": "建国",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c274e37f34e197290f749_25.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44-25-1",
                    "id": "5e8c274e37f34e197290f749_419497216_SFD44-25-1-9560;/frequency=9560.000"
                },
                {
                    "neId": "5e8c274e37f34e197290f749",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c274e37f34e197290f749_419497216_SFD44-25-1-9560;/frequency=9560.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "建国",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c274e37f34e197290f749_25.1",
                    "zEndNodes": [
                        "5e8c274e37f34e197290f749_419507456_SFD44-25-1-OMD;/frequency=9560.000"
                    ],
                    "equipmentUserLabel": "SFD44-25-1",
                    "id": "5e8c274e37f34e197290f749_419497216_SFD44-25-1-9560;/frequency=9560.000-5e8c274e37f34e197290f749_419507456_SFD44-25-1-OMD;/frequency=9560.000",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c274e37f34e197290f749",
                    "userLabel": "SFD44-25-1-OMD;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c274e37f34e197290f749_419507456",
                    "ptpUserLabel": "SFD44-25-1-OMD",
                    "isSeparatedRoute": null,
                    "neUserLabel": "建国",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c274e37f34e197290f749_25.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44-25-1",
                    "id": "5e8c274e37f34e197290f749_419507456_SFD44-25-1-OMD;/frequency=9560.000"
                },
                {
                    "userLabel": "建国/AHPHG-1-2-SIG--建国/SFD44-25-1-OMD",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c274e37f34e197290f749_16908544"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c274e37f34e197290f749_16908544_5e8c274e37f34e197290f749_419507456",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c274e37f34e197290f749_419507456"
                    ]
                },
                {
                    "neId": "5e8c274e37f34e197290f749",
                    "userLabel": "AHPHG-1-2-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c274e37f34e197290f749_16908544",
                    "ptpUserLabel": "AHPHG-1-2-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "建国",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c274e37f34e197290f749_1.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5e8c274e37f34e197290f749_16908544_AHPHG-1-2-SIG;/oms=1"
                },
                {
                    "neId": "5e8c274e37f34e197290f749",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c274e37f34e197290f749_16908544_AHPHG-1-2-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "建国",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c274e37f34e197290f749_1.2",
                    "zEndNodes": [
                        "5e8c274e37f34e197290f749_16909312_AHPHG-1-2-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5e8c274e37f34e197290f749_16908544_AHPHG-1-2-SIG;/oms=1-5e8c274e37f34e197290f749_16909312_AHPHG-1-2-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c274e37f34e197290f749",
                    "userLabel": "AHPHG-1-2-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c274e37f34e197290f749_16909312",
                    "ptpUserLabel": "AHPHG-1-2-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "建国",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c274e37f34e197290f749_1.2",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-2",
                    "id": "5e8c274e37f34e197290f749_16909312_AHPHG-1-2-LINE;/oms=1"
                },
                {
                    "userLabel": "建国/AHPHG-1-2-LINE--沪闵/AHPHG-1-3-LINE",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c274e37f34e197290f749_16909312"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c274e37f34e197290f749_16909312_5e8c275f37f34e197290f76d_16974848",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c275f37f34e197290f76d_16974848"
                    ]
                },
                {
                    "neId": "5e8c275f37f34e197290f76d",
                    "userLabel": "AHPHG-1-3-LINE;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c275f37f34e197290f76d_16974848",
                    "ptpUserLabel": "AHPHG-1-3-LINE",
                    "isSeparatedRoute": null,
                    "neUserLabel": "沪闵",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c275f37f34e197290f76d_1.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5e8c275f37f34e197290f76d_16974848_AHPHG-1-3-LINE;/oms=1"
                },
                {
                    "neId": "5e8c275f37f34e197290f76d",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c275f37f34e197290f76d_16974080_AHPHG-1-3-SIG;/oms=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "沪闵",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c275f37f34e197290f76d_1.3",
                    "zEndNodes": [
                        "5e8c275f37f34e197290f76d_16974848_AHPHG-1-3-LINE;/oms=1"
                    ],
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5e8c275f37f34e197290f76d_16974080_AHPHG-1-3-SIG;/oms=1-5e8c275f37f34e197290f76d_16974848_AHPHG-1-3-LINE;/oms=1",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c275f37f34e197290f76d",
                    "userLabel": "AHPHG-1-3-SIG;/oms=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c275f37f34e197290f76d_16974080",
                    "ptpUserLabel": "AHPHG-1-3-SIG",
                    "isSeparatedRoute": null,
                    "neUserLabel": "沪闵",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c275f37f34e197290f76d_1.3",
                    "tpType": "CTP",
                    "layerRate": "OMS",
                    "equipmentUserLabel": "AHPHG-1-3",
                    "id": "5e8c275f37f34e197290f76d_16974080_AHPHG-1-3-SIG;/oms=1"
                },
                {
                    "userLabel": "沪闵/SFD44-26-1-OMD--沪闵/AHPHG-1-3-SIG",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c275f37f34e197290f76d_436284672"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c275f37f34e197290f76d_16974080_5e8c275f37f34e197290f76d_436284672",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c275f37f34e197290f76d_16974080"
                    ]
                },
                {
                    "neId": "5e8c275f37f34e197290f76d",
                    "userLabel": "SFD44-26-1-OMD;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c275f37f34e197290f76d_436284672",
                    "ptpUserLabel": "SFD44-26-1-OMD",
                    "isSeparatedRoute": null,
                    "neUserLabel": "沪闵",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c275f37f34e197290f76d_26.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44-26-1",
                    "id": "5e8c275f37f34e197290f76d_436284672_SFD44-26-1-OMD;/frequency=9560.000"
                },
                {
                    "neId": "5e8c275f37f34e197290f76d",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c275f37f34e197290f76d_436274432_SFD44-26-1-9560;/frequency=9560.000"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "沪闵",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c275f37f34e197290f76d_26.1",
                    "zEndNodes": [
                        "5e8c275f37f34e197290f76d_436284672_SFD44-26-1-OMD;/frequency=9560.000"
                    ],
                    "equipmentUserLabel": "SFD44-26-1",
                    "id": "5e8c275f37f34e197290f76d_436274432_SFD44-26-1-9560;/frequency=9560.000-5e8c275f37f34e197290f76d_436284672_SFD44-26-1-OMD;/frequency=9560.000",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c275f37f34e197290f76d",
                    "userLabel": "SFD44-26-1-9560;/frequency=9560.000",
                    "isMergedRoute": null,
                    "ptpId": "5e8c275f37f34e197290f76d_436274432",
                    "ptpUserLabel": "SFD44-26-1-9560",
                    "isSeparatedRoute": null,
                    "neUserLabel": "沪闵",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c275f37f34e197290f76d_26.1",
                    "tpType": "CTP",
                    "layerRate": "OCH",
                    "equipmentUserLabel": "SFD44-26-1",
                    "id": "5e8c275f37f34e197290f76d_436274432_SFD44-26-1-9560;/frequency=9560.000"
                },
                {
                    "userLabel": "沪闵/SFD44-26-1-9560--沪闵/43STX4-1-15-L1",
                    "isMergedRoute": null,
                    "protectionType": "NORMAL",
                    "aEndNodes": [
                        "5e8c275f37f34e197290f76d_436274432"
                    ],
                    "isSeparatedRoute": null,
                    "id": "5e8c275f37f34e197290f76d_17760512_5e8c275f37f34e197290f76d_436274432",
                    "type": "TL",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "direction": "BI",
                    "zEndNodes": [
                        "5e8c275f37f34e197290f76d_17760512"
                    ]
                },
                {
                    "neId": "5e8c275f37f34e197290f76d",
                    "userLabel": "43STX4-1-15-L1;/otu3=1/odu3=1/odu2=3",
                    "isMergedRoute": null,
                    "ptpId": "5e8c275f37f34e197290f76d_17760512",
                    "ptpUserLabel": "43STX4-1-15-L1",
                    "isSeparatedRoute": null,
                    "neUserLabel": "沪闵",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c275f37f34e197290f76d_1.15",
                    "tpType": "CTP",
                    "layerRate": "ODU2",
                    "equipmentUserLabel": "43STX4-1-15",
                    "id": "5e8c275f37f34e197290f76d_17760512_43STX4-1-15-L1;/otu3=1/odu3=1/odu2=3"
                },
                {
                    "neId": "5e8c275f37f34e197290f76d",
                    "userLabel": null,
                    "isMergedRoute": null,
                    "protectionType": "SIMPLE",
                    "aEndNodes": [
                        "5e8c275f37f34e197290f76d_17761280_43STX4-1-15-C3;/odu2=1"
                    ],
                    "isSeparatedRoute": null,
                    "neUserLabel": "沪闵",
                    "pgData": null,
                    "type": "XC",
                    "params": null,
                    "equipmentId": "5e8c275f37f34e197290f76d_1.15",
                    "zEndNodes": [
                        "5e8c275f37f34e197290f76d_17760512_43STX4-1-15-L1;/otu3=1/odu3=1/odu2=3"
                    ],
                    "equipmentUserLabel": "43STX4-1-15",
                    "id": "5e8c275f37f34e197290f76d_17761280_43STX4-1-15-C3;/odu2=1-5e8c275f37f34e197290f76d_17760512_43STX4-1-15-L1;/otu3=1/odu3=1/odu2=3",
                    "direction": "BI"
                },
                {
                    "neId": "5e8c275f37f34e197290f76d",
                    "userLabel": "43STX4-1-15-C3;/odu2=1",
                    "isMergedRoute": null,
                    "ptpId": "5e8c275f37f34e197290f76d_17761280",
                    "ptpUserLabel": "43STX4-1-15-C3",
                    "isSeparatedRoute": null,
                    "neUserLabel": "沪闵",
                    "type": "TP",
                    "params": {
                        "rootAlarmState": null,
                        "alarmState": "CLEARED"
                    },
                    "equipmentId": "5e8c275f37f34e197290f76d_1.15",
                    "tpType": "CTP",
                    "layerRate": "ODU2",
                    "equipmentUserLabel": "43STX4-1-15",
                    "id": "5e8c275f37f34e197290f76d_17761280_43STX4-1-15-C3;/odu2=1"
                }
            ]
        },
        "equipmentUserLabel": null,
        "id": "PHONY_START_XC",
        "direction": null
    },
    {
        "neId": "5e8c275f37f34e197290f76d",
        "userLabel": "PHONY_END_XC",
        "isMergedRoute": true,
        "protectionType": "SNCP",
        "aEndNodes": [
            "PHONY_END_TP"
        ],
        "isSeparatedRoute": null,
        "neUserLabel": "沪闵",
        "pgData": null,
        "type": "XC",
        "params": null,
        "equipmentId": null,
        "zEndNodes": [
            "5e8c275f37f34e197290f76d_17761280_43STX4-1-15-C3;/odu2=1",
            "5e8c26c137f34e197290f59f_50594816_43STX4-3-4-C3;/odu2=1"
        ],
        "equipmentUserLabel": null,
        "id": "PHONY_END_XC",
        "direction": null
    },
    {
        "neId": "5e8c275f37f34e197290f76d",
        "userLabel": "PHONY_END_TP",
        "isMergedRoute": null,
        "ptpId": "PHONY_END_TP",
        "ptpUserLabel": "PHONY_END_TP",
        "isSeparatedRoute": null,
        "neUserLabel": "沪闵",
        "type": "TP",
        "params": {
            "rootAlarmState": null,
            "alarmState": "CLEARED"
        },
        "equipmentId": null,
        "tpType": "PTP",
        "layerRate": null,
        "equipmentUserLabel": null,
        "id": "PHONY_END_TP"
    }
]