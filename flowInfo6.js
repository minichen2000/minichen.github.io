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