//keys:
const FI_type="type";
const FI_id="id";
const FI_userlabel="userLabel";
const FI_ptpId="ptpId";
const FI_ptpUserlabel="ptpUserLabel";
const FI_neId="neId";
const FI_neUserlabel="neUserLabel";
const FI_cardId="equipmentId";
const FI_cardUserlabel="equipmentUserLabel";
const FI_dir="direction";
const FI_aTPs="aEndNodes";
const FI_zTPs="zEndNodes";
const FI_SR="isSeparatedRoute";
const FI_MR="isMergedRoute";
const FI_SRES="separatedRouteElements";
const FI_SRES_main="Main";
const FI_SRES_spare="Spare";
const FI_SRES_Tx="Tx";
const FI_SRES_Rx="Rx";
const FI_protectionType="protectionType";
//values:
const FI_type_XC="XC";
const FI_type_TP="TP";
const FI_type_CONNECTION="TL";
const FI_dir_BI="BI";
const FI_dir_UNI="UNI";
const FI_protectionType_NORMAL="SIMPLE";


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
]