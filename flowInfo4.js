//keys:
const FI_type="elementType";
const FI_id="id";
const FI_userlabel="userlabel";
const FI_ptpId="physicalTpId";
const FI_ptpUserlabel="physicalTpUserLabel";
const FI_neId="neId";
const FI_neUserlabel="neUserLabel";
const FI_cardId="equipmentId";
const FI_cardUserlabel="equipmentUserLabel";
const FI_dir="direction";
const FI_aTPs="aEndTps";
const FI_zTPs="zEndTps";
const FI_SR="isSeparatedRoute";
const FI_MR="isMergedRoute";
const FI_SRES="separatedRouteElements";
const FI_SRES_main="main";
const FI_SRES_spare="spare";
const FI_SRES_Tx="Tx";
const FI_SRES_Rx="Rx";
//values:
const FI_type_XC="XC";
const FI_type_TP="TP";
const FI_type_CONNECTION="CONNECTION";
const FI_dir_BI="BI";
const FI_dir_UNI="UNI";



const flowInfo3 = [
	{
		"elementType" : "TP",
		"neId" : "5dcba04a2f801779d84b1ab9",
		"neUserLabel" : "BDBL-PSS32-ROADM-26",
		"equipmentId" : "5dcba04a2f801779d84b1ab9_5.4",
		"equipmentUserLabel" : "260SCX2-5-4",
		"id" : "5dcba04a2f801779d84b1ab9_84148736_260SCX2-5-4-C1;/odu4=1",
		"userlabel" : "260SCX2-5-4-C1;/odu4=1",
		"physicalTpId" : "5dcba04a2f801779d84b1ab9_84148736",
		"physicalTpUserLabel" : "260SCX2-5-4-C1",
		"isSeparatedRoute" : false,
		"isMergedRoute" : false,
		"separatedRouteElements" : {},
		"params" : {}
	},
	{
		"elementType" : "XC",
		"id" : "5dcba04a2f801779d84b1ab9_84148736_260SCX2-5-4-C1;/odu4=1-5dcba04a2f801779d84b1ab9_84148480_260SCX2-5-4-L1;/otu4=1/odu4=1",
		"userlabel" : "",
		"aEndTps" : ["5dcba04a2f801779d84b1ab9_84148736_260SCX2-5-4-C1;/odu4=1"],
		"zEndTps" : ["5dcba04a2f801779d84b1ab9_84148480_260SCX2-5-4-L1;/otu4=1/odu4=1"],
		"protectionType" : "normal",
		"direction" : "BI",
		"isSeparatedRoute" : false,
		"isMergedRoute" : false,
		"separatedRouteElements" : {},
		"params" : {}
	},
	{
		"elementType" : "TP",
		"neId" : "5dcba04a2f801779d84b1ab9",
		"neUserLabel" : "BDBL-PSS32-ROADM-26",
		"equipmentId" : "5dcba04a2f801779d84b1ab9_5.4",
		"equipmentUserLabel" : "260SCX2-5-4",
		"id" : "5dcba04a2f801779d84b1ab9_84148480_260SCX2-5-4-L1;/otu4=1/odu4=1",
		"userlabel" : "260SCX2-5-4-L1;/otu4=1/odu4=1",
		"physicalTpId" : "5dcba04a2f801779d84b1ab9_84148480",
		"physicalTpUserLabel" : "260SCX2-5-4-L1",
		"isSeparatedRoute" : false,
		"isMergedRoute" : false,
		"separatedRouteElements" : {},
		"params" : {}
	},
	{
		"elementType" : "CONNECTION",
		"id" : "5dcba04a2f801779d84b1ab9_84082944_5dcba04a2f801779d84b1ab9_84148480",
		"userlabel" : "BDBL-PSS32-ROADM-26/OPSA-5-3-SIG--BDBL-PSS32-ROADM-26/260SCX2-5-4-L1",
		"aEndTps" : ["5dcba04a2f801779d84b1ab9_84148480"],
		"zEndTps" : ["5dcba04a2f801779d84b1ab9_84082944"],
		"protectionType" : "normal",
		"direction" : "BI",
		"isSeparatedRoute" : false,
		"isMergedRoute" : false,
		"separatedRouteElements" : {},
		"params" : {}
	},
	{
		"elementType" : "TP",
		"neId" : "5dcba04a2f801779d84b1ab9",
		"neUserLabel" : "BDBL-PSS32-ROADM-26",
		"equipmentId" : "5dcba04a2f801779d84b1ab9_5.3",
		"equipmentUserLabel" : "OPSA-5-3",
		"id" : "5dcba04a2f801779d84b1ab9_84082944_OPSA-5-3-SIG;/frequency=/tunable-number=1",
		"userlabel" : "OPSA-5-3-SIG;/frequency=/tunable-number=1",
		"physicalTpId" : "5dcba04a2f801779d84b1ab9_84082944",
		"physicalTpUserLabel" : "OPSA-5-3-SIG",
		"isSeparatedRoute" : false,
		"isMergedRoute" : false,
		"separatedRouteElements" : {},
		"params" : {}
	},
	{
		"elementType" : "XC",
		"id" : "5dcba04a2f801779d84b1ab9_84082944_OPSA-5-3-SIG;/frequency=/tunable-number=1-5dcba04a2f801779d84b1ab9_84083200_OPSA-5-3-A;/frequency=/tunable-number=1-5dcba04a2f801779d84b1ab9_84083456_OPSA-5-3-B;/frequency=/tunable-number=1",
		"aEndTps" : ["5dcba04a2f801779d84b1ab9_84082944_OPSA-5-3-SIG;/frequency=/tunable-number=1"],
		"zEndTps" : [
			"5dcba04a2f801779d84b1ab9_84083200_OPSA-5-3-A;/frequency=/tunable-number=1",
			"5dcba04a2f801779d84b1ab9_84083456_OPSA-5-3-B;/frequency=/tunable-number=1"
		],
		"protectionType" : "OPSA",
		"direction" : "BI",
		"isSeparatedRoute" : true,
		"isMergedRoute" : false,
		//此处带保护交叉分岔
		"separatedRouteElements" : {
			"main" : [
				{
					"elementType" : "TP",
					"neId" : "5dcba04a2f801779d84b1ab9",
					"neUserLabel" : "BDBL-PSS32-ROADM-26",
					"equipmentId" : "5dcba04a2f801779d84b1ab9_5.3",
					"equipmentUserLabel" : "OPSA-5-3",
					"id" : "5dcba04a2f801779d84b1ab9_84083200_OPSA-5-3-A;/frequency=/tunable-number=1",
					"userlabel" : "OPSA-5-3-A;/frequency=/tunable-number=1",
					"physicalTpId" : "5dcba04a2f801779d84b1ab9_84083200",
					"physicalTpUserLabel" : "OPSA-5-3-A",
					"isSeparatedRoute" : false,
					"isMergedRoute" : false,
					"separatedRouteElements" : {},
					"params" : {}
				},
				{
					//简单起见直接写了个OPSA A口到对端OPSA A口的物理连接
					"elementType" : "CONNECTION",
					"id" : "5dcba04a2f801779d84b1ab9_84083200_5dcba0182f801779d84b1ab6_303694336",
					"userlabel" : "BDBL-PSS32-ROADM-26/OPSA-5-3-A--BJM1-PSS32-ROADM-25/OPSA-18-26-A",
					"aEndTps" : ["5dcba04a2f801779d84b1ab9_84083200"],
					"zEndTps" : ["5dcba0182f801779d84b1ab6_303694336"],
					"protectionType" : "normal",
					"direction" : "BI",
					"isSeparatedRoute" : false,
					"isMergedRoute" : false,
					"separatedRouteElements" : {},
					"params" : {}
				},
				{
					"elementType" : "TP",
					"neId" : "5dcba0182f801779d84b1ab6",
					"neUserLabel" : "BJM1-PSS32-ROADM-25",
					"equipmentId" : "5dcba0182f801779d84b1ab6_18.26",
					"equipmentUserLabel" : "OPSA-18-26",
					"id" : "5dcba0182f801779d84b1ab6_303694336_OPSA-18-26-A;/frequency=/tunable-number=1",
					"userlabel" : "OPSA-18-26-A/frequency=/tunable-number=1",
					"physicalTpId" : "5dcba0182f801779d84b1ab6_303694336",
					"physicalTpUserLabel" : "OPSA-18-26-A",
					"isSeparatedRoute" : false,
					"isMergedRoute" : false,
					"separatedRouteElements" : {},
					"params" : {}
				}
			],
			"spare" : [
				{
					"elementType" : "TP",
					"neId" : "5dcba04a2f801779d84b1ab9",
					"neUserLabel" : "BDBL-PSS32-ROADM-26",
					"equipmentId" : "5dcba04a2f801779d84b1ab9_5.3",
					"equipmentUserLabel" : "OPSA-5-3",
					"id" : "5dcba04a2f801779d84b1ab9_84083456_OPSA-5-3-B;/frequency=/tunable-number=1",
					"userlabel" : "OPSA-5-3-B;/frequency=/tunable-number=1",
					"physicalTpId" : "5dcba04a2f801779d84b1ab9_84083456",
					"physicalTpUserLabel" : "OPSA-5-3-B",
					"isSeparatedRoute" : false,
					"isMergedRoute" : false,
					"separatedRouteElements" : {},
					"params" : {}
				},
				{
					"elementType" : "CONNECTION",
					"id" : "5dcba04a2f801779d84b1ab9_486608384_5dcba04a2f801779d84b1ab9_84083456",
					"userlabel" : "BDBL-PSS32-ROADM-26/SFD44B-29-1-9475--BDBL-PSS32-ROADM-26/OPSA-5-3-B",
					"aEndTps" : ["5dcba04a2f801779d84b1ab9_84083456"],
					"zEndTps" : ["5dcba04a2f801779d84b1ab9_486608384"],
					"protectionType" : "normal",
					"direction" : "BI",
					"isSeparatedRoute" : false,
					"isMergedRoute" : false,
					"separatedRouteElements" : {},
					"params" : {}
				},
				{
					"elementType" : "TP",
					"neId" : "5dcba04a2f801779d84b1ab9",
					"neUserLabel" : "BDBL-PSS32-ROADM-26",
					"equipmentId" : "5dcba04a2f801779d84b1ab9_29.1",
					"equipmentUserLabel" : "SFD44B-29-1",
					"id" : "5dcba04a2f801779d84b1ab9_486608384_SFD44B-29-1-9475;/frequency=9475.000",
					"userlabel" : "SFD44B-29-1-9475/frequency=9475.000",
					"physicalTpId" : "5dcba04a2f801779d84b1ab9_486608384",
					"physicalTpUserLabel" : "SFD44B-29-1-9475",
					"isSeparatedRoute" : false,
					"isMergedRoute" : false,
					"separatedRouteElements" : {},
					"params" : {}
				},
				{
					"elementType" : "XC",
					"id" : "5dcba04a2f801779d84b1ab9_486608384_SFD44B-29-1-9475;/frequency=9475.000-5dcba04a2f801779d84b1ab9_486616320_SFD44B-29-1-OMD;/frequency=9475.000",
					"aEndTps" : ["5dcba04a2f801779d84b1ab9_486608384_SFD44B-29-1-9475;/frequency=9475.000"],
					"zEndTps" : ["5dcba04a2f801779d84b1ab9_486616320_SFD44B-29-1-OMD;/frequency=9475.000"],
					"protectionType" : "normal",
					"direction" : "BI",
					"isSeparatedRoute" : false,
					"isMergedRoute" : false,
					"separatedRouteElements" : {},
					"params" : {}
				},
				{
					"elementType" : "TP",
					"neId" : "5dcba04a2f801779d84b1ab9",
					"neUserLabel" : "BDBL-PSS32-ROADM-26",
					"equipmentId" : "5dcba04a2f801779d84b1ab9_29.1",
					"equipmentUserLabel" : "SFD44B-29-1",
					"id" : "5dcba04a2f801779d84b1ab9_486616320_SFD44B-29-1-OMD;/frequency=9475.000",
					"userlabel" : "SFD44B-29-1-OMD;/frequency=9475.000",
					"physicalTpId" : "5dcba04a2f801779d84b1ab9_486616320",
					"physicalTpUserLabel" : "SFD44B-29-1-OMD",
					"isSeparatedRoute" : true,
					"isMergedRoute" : false,
					//此处单向连接分岔
					"separatedRouteElements" : {
						"Tx" : [
							{
								"elementType" : "CONNECTION",
								"id" : "5dcba04a2f801779d84b1ab9_33817856_5dcba04a2f801779d84b1ab9_486616320",
								"userlabel" : "BDBL-PSS32-ROADM-26/SFD44B-29-1-OMD--BDBL-PSS32-ROADM-26/WR8-88AF-2-4-ADDIN2",
								"aEndTps" : ["5dcba04a2f801779d84b1ab9_486616320"],
								"zEndTps" : ["5dcba04a2f801779d84b1ab9_33817856"],
								"protectionType" : "normal",
								"direction" : "UNI",
								"isSeparatedRoute" : false,
								"isMergedRoute" : false,
								"separatedRouteElements" : {},
								"params" : {}
							},
							{
								"elementType" : "TP",
								"neId" : "5dcba04a2f801779d84b1ab9",
								"neUserLabel" : "BDBL-PSS32-ROADM-26",
								"equipmentId" : "5dcba04a2f801779d84b1ab9_2.4",
								"equipmentUserLabel" : "WR8-88AF-2-4",
								"id" : "5dcba04a2f801779d84b1ab9_33817856_WR8-88AF-2-4-ADDIN2;/frequency=9475.000",
								"userlabel" : "WR8-88AF-2-4-ADDIN2/frequency=9475.000",
								"physicalTpId" : "5dcba04a2f801779d84b1ab9_33817856",
								"physicalTpUserLabel" : "WR8-88AF-2-4-ADDIN2",
								"isSeparatedRoute" : false,
								"isMergedRoute" : false,
								"separatedRouteElements" : {},
								"params" : {}
							},
							{
								"elementType" : "XC",
								"id" : "5dcba04a2f801779d84b1ab9_33817856_WR8-88AF-2-4-ADDIN2;/frequency=9475.000-5dcba04a2f801779d84b1ab9_33816832_WR8-88AF-2-4-SIG;/frequency=9475.000",
								"aEndTps" : ["5dcba04a2f801779d84b1ab9_33817856_WR8-88AF-2-4-ADDIN2;/frequency=9475.000"],
								"zEndTps" : ["5dcba04a2f801779d84b1ab9_33816832_WR8-88AF-2-4-SIG;/frequency=9475.000"],
								"protectionType" : "normal",
								"direction" : "UNI",
								"isSeparatedRoute" : false,
								"isMergedRoute" : false,
								"separatedRouteElements" : {},
								"params" : {}
							}
						],
						"Rx" : [
							{
								"elementType" : "CONNECTION",
								"id" : "5dcba04a2f801779d84b1ab9_469828352_5dcba04a2f801779d84b1ab9_486616320",
								"userlabel" : "BDBL-PSS32-ROADM-26/ITLU-28-1-OOUT--BDBL-PSS32-ROADM-26/SFD44B-29-1-OMD",
								"aEndTps" : ["5dcba04a2f801779d84b1ab9_469828352"],
								"zEndTps" : ["5dcba04a2f801779d84b1ab9_486616320"],
								"protectionType" : "normal",
								"direction" : "UNI",
								"isSeparatedRoute" : false,
								"isMergedRoute" : false,
								"separatedRouteElements" : {},
								"params" : {}
							},
							{
								"elementType" : "TP",
								"neId" : "5dcba04a2f801779d84b1ab9",
								"neUserLabel" : "BDBL-PSS32-ROADM-26",
								"equipmentId" : "5dcba04a2f801779d84b1ab9_28.1",
								"equipmentUserLabel" : "ITLU-28-1",
								"id" : "5dcba04a2f801779d84b1ab9_469828352_ITLU-28-1-OOUT;/frequency=9475.000",
								"userlabel" : "ITLU-28-1-OOUT/frequency=9475.000",
								"physicalTpId" : "5dcba04a2f801779d84b1ab9_469828352",
								"physicalTpUserLabel" : "ITLU-28-1-OOUT",
								"isSeparatedRoute" : false,
								"isMergedRoute" : false,
								"separatedRouteElements" : {},
								"params" : {}
							},
							{
								"elementType" : "XC",
								"id" : "5dcba04a2f801779d84b1ab9_469828352_ITLU-28-1-OOUT;/frequency=9475.000-5dcba04a2f801779d84b1ab9_469827840_ITLU-28-1-SIGIN;/frequency=9475.000",
								"aEndTps" : ["5dcba04a2f801779d84b1ab9_469827840_ITLU-28-1-SIGIN;/frequency=9475.000"],
								"zEndTps" : ["5dcba04a2f801779d84b1ab9_469828352_ITLU-28-1-OOUT;/frequency=9475.000"],
								"protectionType" : "normal",
								"direction" : "UNI",
								"isSeparatedRoute" : false,
								"isMergedRoute" : false,
								"separatedRouteElements" : {},
								"params" : {}
							},
							{
								"elementType" : "TP",
								"neId" : "5dcba04a2f801779d84b1ab9",
								"neUserLabel" : "BDBL-PSS32-ROADM-26",
								"equipmentId" : "5dcba04a2f801779d84b1ab9_28.1",
								"equipmentUserLabel" : "ITLU-28-1",
								"id" : "5dcba04a2f801779d84b1ab9_469827840_ITLU-28-1-SIGIN;/frequency=9475.000",
								"userlabel" : "ITLU-28-1-SIGIN;/frequency=9475.000",
								"physicalTpId" : "5dcba04a2f801779d84b1ab9_469827840",
								"physicalTpUserLabel" : "ITLU-28-1-SIGIN",
								"isSeparatedRoute" : false,
								"isMergedRoute" : false,
								"separatedRouteElements" : {},
								"params" : {}
							},
							{
								"elementType" : "CONNECTION",
								"id" : "5dcba04a2f801779d84b1ab9_33817344_5dcba04a2f801779d84b1ab9_469827840",
								"userlabel" : "BDBL-PSS32-ROADM-26/WR8-88AF-2-4-DROPOUT--BDBL-PSS32-ROADM-26/ITLU-28-1-SIGIN",
								"aEndTps" : ["5dcba04a2f801779d84b1ab9_33817344"],
								"zEndTps" : ["5dcba04a2f801779d84b1ab9_469827840"],
								"protectionType" : "normal",
								"direction" : "UNI",
								"isSeparatedRoute" : false,
								"isMergedRoute" : false,
								"separatedRouteElements" : {},
								"params" : {}
							},
							{
								"elementType" : "TP",
								"neId" : "5dcba04a2f801779d84b1ab9",
								"neUserLabel" : "BDBL-PSS32-ROADM-26",
								"equipmentId" : "5dcba04a2f801779d84b1ab9_2.4",
								"equipmentUserLabel" : "WR8-88AF-2-4",
								"id" : "5dcba04a2f801779d84b1ab9_33817344_WR8-88AF-2-4-DROPOUT;/frequency=9475.000",
								"userlabel" : "WR8-88AF-2-4-DROPOUT/frequency=9475.000",
								"physicalTpId" : "5dcba04a2f801779d84b1ab9_33817344",
								"physicalTpUserLabel" : "WR8-88AF-2-4-DROPOUT",
								"isSeparatedRoute" : false,
								"isMergedRoute" : false,
								"separatedRouteElements" : {},
								"params" : {}
							},
							{
								"elementType" : "XC",
								"id" : "5dcba04a2f801779d84b1ab9_33817344_WR8-88AF-2-4-DROPOUT;/frequency=9475.000-5dcba04a2f801779d84b1ab9_33816832_WR8-88AF-2-4-SIG;/frequency=9475.000",
								"aEndTps" : ["5dcba04a2f801779d84b1ab9_33816832_WR8-88AF-2-4-SIG;/frequency=9475.000"],
								"zEndTps" : ["5dcba04a2f801779d84b1ab9_33817344_WR8-88AF-2-4-DROPOUT;/frequency=9475.000"],
								"protectionType" : "normal",
								"direction" : "UNI",
								"isSeparatedRoute" : false,
								"isMergedRoute" : false,
								"separatedRouteElements" : {},
								"params" : {}
							}
						]
					},
					"params" : {}
				},
				{
					"elementType" : "TP",
					"neId" : "5dcba04a2f801779d84b1ab9",
					"neUserLabel" : "BDBL-PSS32-ROADM-26",
					"equipmentId" : "5dcba04a2f801779d84b1ab9_2.4",
					"equipmentUserLabel" : "WR8-88AF-2-4",
					"id" : "5dcba04a2f801779d84b1ab9_33816832_WR8-88AF-2-4-SIG;/frequency=9475.000",
					"userlabel" : "WR8-88AF-2-4-SIG;/frequency=9475.000",
					"physicalTpId" : "5dcba04a2f801779d84b1ab9_33816832",
					"physicalTpUserLabel" : "WR8-88AF-2-4-SIG",
					"isSeparatedRoute" : false,
					"isMergedRoute" : true,
					"separatedRouteElements" : {},
					"params" : {}
				},
				//...
				//接下来单向路由已经汇合，继续往前，时间关系这里没写了
				{
					"elementType" : "CONNECTION",
					"id" : "5dcba04a2f801779d84b1ab9_33816832_5dcba0182f801779d84b1ab6_303694080",
					"userlabel" : "BDBL-PSS32-ROADM-26/WR8-88AF-2-4-SIG--BJM1-PSS32-ROADM-25/OPSA-18-26-B",
					"aEndTps" : ["5dcba04a2f801779d84b1ab9_33816832"],
					"zEndTps" : ["5dcba0182f801779d84b1ab6_303694592"],
					"protectionType" : "normal",
					"direction" : "BI",
					"isSeparatedRoute" : false,
					"isMergedRoute" : false,
					"separatedRouteElements" : {},
					"params" : {}
				},
				{
					"elementType" : "TP",
					"neId" : "5dcba0182f801779d84b1ab6",
					"neUserLabel" : "BJM1-PSS32-ROADM-25",
					"equipmentId" : "5dcba0182f801779d84b1ab6_18.26",
					"equipmentUserLabel" : "OPSA-18-26",
					"id" : "5dcba0182f801779d84b1ab6_303694592_OPSA-18-26-B;/frequency=/tunable-number=1",
					"userlabel" : "OPSA-18-26-B;/frequency=/tunable-number=1",
					"physicalTpId" : "5dcba0182f801779d84b1ab6_303694592",
					"physicalTpUserLabel" : "OPSA-18-26-B",
					"isSeparatedRoute" : false,
					"isMergedRoute" : false,
					"separatedRouteElements" : {},
					"params" : {}
				}
			]
		},
		"params" : {}
	},
	{
		"elementType" : "XC",
		"id" : "5dcba0182f801779d84b1ab6_303694080_OPSA-18-26-SIG;/frequency=/tunable-number=1-5dcba0182f801779d84b1ab6_303694336_OPSA-18-26-A;/frequency=/tunable-number=1-5dcba0182f801779d84b1ab6_303694592_OPSA-18-26-B;/frequency=/tunable-number=1",
		//此处带保护交叉路由汇合
		"aEndTps" : [
			"5dcba0182f801779d84b1ab6_303694336_OPSA-18-26-A;/frequency=/tunable-number=1",
			"5dcba0182f801779d84b1ab6_303694592_OPSA-18-26-B;/frequency=/tunable-number=1"
		],
		"zEndTps" : ["5dcba0182f801779d84b1ab6_303694080_OPSA-18-26-SIG;/frequency=/tunable-number=1"],
		"protectionType" : "OPSA",
		"direction" : "BI",
		"isSeparatedRoute" : false,
		"isMergedRoute" : true,
		"separatedRouteElements" : {},
		"params" : {}
	},
	{
		"elementType" : "TP",
		"neId" : "5dcba0182f801779d84b1ab6",
		"neUserLabel" : "BJM1-PSS32-ROADM-25",
		"equipmentId" : "5dcba0182f801779d84b1ab6_18.26",
		"equipmentUserLabel" : "OPSA-18-26",
		"id" : "5dcba0182f801779d84b1ab6_303694080_OPSA-18-26-SIG;/frequency=/tunable-number=1",
		"userlabel" : "OPSA-18-26-SIG;/frequency=/tunable-number=1",
		"physicalTpId" : "5dcba0182f801779d84b1ab6_303694080",
		"physicalTpUserLabel" : "OPSA-18-26-SIG",
		"isSeparatedRoute" : false,
		"isMergedRoute" : false,
		"separatedRouteElements" : {},
		"params" : {}
	},
	{
		"elementType" : "CONNECTION",
		"id" : "5dcba0182f801779d84b1ab6_302711040_5dcba0182f801779d84b1ab6_303694080",
		"userlabel" : "BJM1-PSS32-ROADM-25/OPSA-18-26-SIG--BJM1-PSS32-ROADM-25/260SCX2-18-11-L1",
		"aEndTps" : ["5dcba0182f801779d84b1ab6_303694080"],
		"zEndTps" : ["5dcba0182f801779d84b1ab6_302711040"],
		"protectionType" : "normal",
		"direction" : "BI",
		"isSeparatedRoute" : false,
		"isMergedRoute" : false,
		"separatedRouteElements" : {},
		"params" : {}
	},
	{
		"elementType" : "TP",
		"neId" : "5dcba0182f801779d84b1ab6",
		"neUserLabel" : "BJM1-PSS32-ROADM-25",
		"equipmentId" : "5dcba0182f801779d84b1ab6_18.11",
		"equipmentUserLabel" : "260SCX2-18-11",
		"id" : "5dcba0182f801779d84b1ab6_302711040_260SCX2-18-11-L1;/otu4=1/odu4=1",
		"userlabel" : "260SCX2-18-11-L1/otu4=1/odu4=1",
		"physicalTpId" : "5dcba0182f801779d84b1ab6_302711040",
		"physicalTpUserLabel" : "260SCX2-18-11-L1",
		"isSeparatedRoute" : false,
		"isMergedRoute" : false,
		"separatedRouteElements" : {},
		"params" : {}
	},
	{
		"elementType" : "XC",
		"id" : "5dcba0182f801779d84b1ab6_302711296_260SCX2-18-11-C1;/odu4=1-5dcba0182f801779d84b1ab6_302711040_260SCX2-18-11-L1;/otu4=1/odu4=1",
		"aEndTps" : ["5dcba0182f801779d84b1ab6_302711040_260SCX2-18-11-L1;/otu4=1/odu4=1"],
		"zEndTps" : ["5dcba0182f801779d84b1ab6_302711296_260SCX2-18-11-C1;/odu4=1"],
		"protectionType" : "normal",
		"direction" : "BI",
		"isSeparatedRoute" : false,
		"isMergedRoute" : false,
		"separatedRouteElements" : {},
		"params" : {}
	},
	{
		"elementType" : "TP",
		"neId" : "5dcba0182f801779d84b1ab6",
		"neUserLabel" : "BJM1-PSS32-ROADM-25",
		"equipmentId" : "5dcba0182f801779d84b1ab6_18.11",
		"equipmentUserLabel" : "260SCX2-18-11",
		"id" : "5dcba0182f801779d84b1ab6_302711296_260SCX2-18-11-C1;/odu4=1",
		"userlabel" : "260SCX2-18-11-C1;/odu4=1",
		"physicalTpId" : "5dcba0182f801779d84b1ab6_302711296",
		"physicalTpUserLabel" : "260SCX2-18-11-C1",
		"isSeparatedRoute" : false,
		"isMergedRoute" : false,
		"separatedRouteElements" : {},
		"params" : {}
	}
]