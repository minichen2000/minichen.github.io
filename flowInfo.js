const flowInfo_147_130SNX10_3_2_C1_WR8 = [
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