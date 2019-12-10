const FLOWINFO=flowInfo3;

const ACTIVE="active";
const STANDBY="standby";
const NORMAL="normal";

const XC_xStep=160;
const TL_xStep=160;
const XC_yStep=110;
const TL_yStep=80;

const DOT_SIZE=8;

function findItem(nodeData, valueKey, value){
	return nodeData.findIndex(item=>item[valueKey] === value);
}
function searchFlowTree(flowTree, valueKey, value, returnKey){
	var rlt, item;
  for(let idx in flowTree){
  			item=flowTree[idx];
        if(item[valueKey]==value){
        	return item[returnKey];
        }else if(item[FI_SR]){
        	rlt=searchFlowTree(item[FI_SRES][FI_SRES_main], valueKey, value, returnKey);
          if(null!=rlt){
          	return rlt;
          }
          rlt=searchFlowTree(item[FI_SRES][FI_SRES_spare], valueKey, value, returnKey);
          if(null!=rlt){
            return rlt;
          }
          rlt=searchFlowTree(item[FI_SRES][FI_SRES_Tx], valueKey, value, returnKey);
          if(null!=rlt){
            return rlt;
          }
          rlt=searchFlowTree(item[FI_SRES][FI_SRES_Rx], valueKey, value, returnKey);
          if(null!=rlt){
            return rlt;
          }
        }
  }
  return null;
}

/*
此函数扫描路由数据，把TP画到nodeData中(重点在于根据路由走向把TP画在正确的坐标上，为下一步连线准备)
此函数返回它画的最后一个点在nodeData中的index

flow: 本次要处理的路由数据(腿)
nodeData: visjs的node数据列表
x, y起点坐标
XC_xStep, TL_xStep, XC_yStep, TL_yStep：物理连接和交叉连接的x, y轴步长
*/
function drawFlowToTPData(flow, nodeData, x, y, XC_xStep, TL_xStep, XC_yStep, TL_yStep) {
  var x_now=x;
  var y_now=y;
  var i=0;
  var item;
  var leg1NodeIdx, leg2NodeIdx; //记录前序两条腿最后一个结点在nodeData里的index，为汇聚时调整两条腿长度以及计算汇聚点坐标做准备。
  for(;;){
  	item=flow[i];
    
    //TP的处理，需要画端口
    if (FI_type_TP==item[FI_type]){
    	if (0>findItem(nodeData, 'id', item[FI_id])) {//排除已经画过的端口

        //汇聚TP的处理：比较前序两条腿长度，先把腿调整成一样长；再重新计算好自己的坐标(区别了交叉汇聚与单向物理连接汇聚, x轴步长不一样)
        if(item[FI_MR]){
        	if(nodeData[leg1NodeIdx].x>nodeData[leg2NodeIdx].x){
            	nodeData[leg2NodeIdx].x=nodeData[leg1NodeIdx].x
              x_now=nodeData[leg1NodeIdx].x+(item[FI_id]==item[FI_ptpId] ? TL_xStep : XC_xStep);
          }else{
            	nodeData[leg1NodeIdx].x=nodeData[leg2NodeIdx].x
              x_now=nodeData[leg2NodeIdx].x+(item[FI_id]==item[FI_ptpId] ? TL_xStep : XC_xStep);
          }
        }
        //普通TP的处理：直接用之前准备好的x坐标即可。
				
        //画TP
        nodeData.push({tpData: item, id: item[FI_id], label: item[FI_ptpUserlabel], group: 'ctpNode', x: x_now, y: y_now});
        //准备下一个TP的x坐标(对于交叉和物理连接来说, x轴步长不一样)
        if((i+1)<flow.length && flow[i+1][FI_type]==FI_type_XC){
        	x_now+=XC_xStep;
        }else {
        	x_now+=TL_xStep;
        }
        
        //分叉TP的处理：在TP处分叉，只可能是单向物理连接分叉或者单向交叉分叉，那么开始为递归画后面两条腿做一些准备，即，要做到：短腿延续当前方向前进，不折，即y轴不变;长腿向下折一下(为了放下更多的元素)，即y轴要变。
        if(item[FI_SR]){
        	//在这里找出长短腿，决定折与不折。
        	let yStep_factor0=TL_yStep;
          let yStep_factor1=TL_yStep;
          if (item[FI_SRES][FI_SRES_Tx].length>item[FI_SRES][FI_SRES_Rx].length) {
            yStep_factor1=0;
          }else if(item[FI_SRES][FI_SRES_Tx].length<item[FI_SRES][FI_SRES_Rx].length){
            yStep_factor0=0;
          }
          //递归画腿
          leg1NodeIdx=drawFlowToTPData(item[FI_SRES][FI_SRES_Tx], nodeData, x_now, y_now-yStep_factor0, XC_xStep, TL_xStep, XC_yStep, TL_yStep);
          leg2NodeIdx=drawFlowToTPData(item[FI_SRES][FI_SRES_Rx], nodeData, x_now, y_now+yStep_factor1, XC_xStep, TL_xStep, XC_yStep, TL_yStep);
         }
       }
    }
    
    //分叉XC的处理：分叉交叉也即带保护的三点交叉，向上向下对称折，并递归画腿
    if (FI_type_XC==item[FI_type] && item[FI_SR]) {
      leg1NodeIdx=drawFlowToTPData(item[FI_SRES][FI_SRES_main], nodeData, x_now, y_now-XC_yStep, XC_xStep, TL_xStep, XC_yStep, TL_yStep);
      leg2NodeIdx=drawFlowToTPData(item[FI_SRES][FI_SRES_spare], nodeData, x_now, y_now+XC_yStep, XC_xStep, TL_xStep, XC_yStep, TL_yStep);
    }
    
    //汇聚XC的处理：与汇聚TP的处理类似：比较前序两条腿长度，先把腿调整成一样长；再重新计算下一个TP的坐标
    if (FI_type_XC==item[FI_type] && item[FI_MR]) {
    	if(nodeData[leg1NodeIdx].x>nodeData[leg2NodeIdx].x){
          nodeData[leg2NodeIdx].x=nodeData[leg1NodeIdx].x
          x_now=nodeData[leg1NodeIdx].x+XC_xStep;
       }else{
          nodeData[leg1NodeIdx].x=nodeData[leg2NodeIdx].x
          x_now=nodeData[leg2NodeIdx].x+XC_xStep;
       }
    }
    
    i++;
    if (i>=flow.length){
    	break;//画完结束
    }
  }
  return nodeData.length-1;
}
/*
	根据flowType 返回edge的background
*/
function highlightRoutingEdge(flowType){
	switch(flowType){
  	case ACTIVE:
    	return activeEdgeBackground;
    case STANDBY:
    	return standByEdgeBackground;
    default:
    	return {};
  }
}

/*
此函数扫描路由数据，把交叉和物理连接画到edgeData中(要确定箭头方向)
无返回值

flow: 本次要处理的路由数据(腿)
flowType: 本次要处理的这条路由数据(腿)在保护中是"active", "standby",还是没有保护:"normal"
fullFlow：后台提供的完整路由数据，为了查找TP
edgeData: visjs的edges数据列表
*/
function drawFlowToEdge(flow, flowType, fullFlow, edgeData){
	var i=0;
  var item;
  for(;;){
  	item=flow[i];
    
    if (FI_type_CONNECTION==item[FI_type]){//如果是物理连接，直接画点到点一条线，并规定好方向
    	let from, to, arrows;
      from=searchFlowTree(fullFlow, FI_ptpId, item[FI_aTPs][0], FI_id);
      to=searchFlowTree(fullFlow, FI_ptpId, item[FI_zTPs][0], FI_id);
      
      arrows=(item[FI_dir]==FI_dir_UNI ? 'to' : 'from, to');
      edgeData.push({
        from: from,
        to: to,
        arrows: arrows,
        shadow: {enabled: false},
        background: highlightRoutingEdge(flowType)
      });
    }else if (FI_type_XC==item[FI_type]) {//如果是交叉连接，可能是三个点，要画两条线，并规定好方向
    	let from, to, arrows, nodeIdx;
      from=item[FI_aTPs][0];
      to=item[FI_zTPs][0];
      arrows=(item[FI_dir]==FI_dir_UNI ? 'to' : 'from, to');
      edgeData.push({
        from: from,
        to: to,
        arrows: arrows,
        dashes: true,
        shadow: {enabled: false},
        background: (FI_protectionType_NORMAL==item[FI_protectionType] ? highlightRoutingEdge(flowType) : (NORMAL==flowType ? highlightRoutingEdge(ACTIVE) : highlightRoutingEdge(flowType)))
      });
      if (1<item[FI_zTPs].length){
      	to=item[FI_zTPs][1];
        edgeData.push({
          from: from,
          to: to,
          arrows: arrows,
          dashes: true,
          shadow: {enabled: false},
          background: (NORMAL==flowType ? highlightRoutingEdge(STANDBY) : highlightRoutingEdge(flowType))
        });
      }else if(1<item[FI_aTPs].length){
      	from=item[FI_aTPs][1];
        edgeData.push({
          from: from,
          to: to,
          arrows: arrows,
          dashes: true,
          shadow: {enabled: false},
          background: (NORMAL==flowType ? highlightRoutingEdge(STANDBY) : highlightRoutingEdge(flowType))
        });
      }
      //如果是分叉的交叉，递归处理两条腿
      if(item[FI_SR]){
      	drawFlowToEdge(item[FI_SRES][FI_SRES_main], (NORMAL==flowType ? ACTIVE : flowType), fullFlow, edgeData);
        drawFlowToEdge(item[FI_SRES][FI_SRES_spare], (NORMAL==flowType ? STANDBY : flowType), fullFlow, edgeData);
      }
    }else if (FI_type_TP==item[FI_type] && item[FI_SR]) {//如果是分叉TP，也要递归处理两条腿
    	drawFlowToEdge(item[FI_SRES][FI_SRES_Tx], flowType, fullFlow, edgeData);
      drawFlowToEdge(item[FI_SRES][FI_SRES_Rx], flowType, fullFlow, edgeData);
    }

    i++;
    if (i>=flow.length){
    	break;//画完结束
    }
  }
}

function findSmallest(items, idxArray, itemKey){
	let newItems=[];
  idxArray.forEach(function(item){
    newItems.push(items[item]);
  });
  let rlt=newItems[0];
  for(let i=1;i<newItems.length;i++){
  	if(newItems[i][itemKey]<rlt[itemKey]){
    	rlt=newItems[i];
    }
  }
  return rlt[itemKey];
}
function findBiggest(items, idxArray, itemKey){
	let newItems=[];
  idxArray.forEach(function(item){
    newItems.push(items[item]);
  });
  let rlt=newItems[0];
  for(let i=1;i<newItems.length;i++){
  	if(newItems[i][itemKey]>rlt[itemKey]){
    	rlt=newItems[i];
    }
  }
  return rlt[itemKey];
}
function drawOneCardAccordingToTpsPositions(tpNodeData, cardNode){
  if(!cardNode.tpList || 0==cardNode.tpList.length){
  	return;
  }else if(1==cardNode.tpList.length) {
  	cardNode.widthConstraint={
      minimum:DOT_SIZE*2,
      maximum:DOT_SIZE*2
    };
    cardNode.heightConstraint={
      minimum:DOT_SIZE*4,
      maximum:DOT_SIZE*4,
      valign: 'bottom'
    };
    cardNode.x=cardNode.tpList[0].x;
    cardNode.y=cardNode.tpList[0].y;
  }else {
  	let x_min, x_max, y_min, y_max,center_x, center_y, width, height;
  	x_min=findSmallest(tpNodeData, cardNode.tpList, "x");
    x_max=findBiggest(tpNodeData, cardNode.tpList, "x");
    y_min=findSmallest(tpNodeData, cardNode.tpList, "y");
    y_max=findBiggest(tpNodeData, cardNode.tpList, "y");
    center_x=(x_min+x_max)/2;
    center_y=(y_min+y_max)/2;
    width=Math.abs(x_max-x_min)-DOT_SIZE;
    height=Math.abs(y_max-y_min)+DOT_SIZE*8;

    cardNode.widthConstraint={
      minimum:width,
      maximum:width
    };
    cardNode.heightConstraint={
      minimum:height,
      maximum:height,
      valign: 'bottom'
    };
    cardNode.x=center_x;
    cardNode.y=center_y;
  }
}
function drawOneNEAccordingToTpsPositions(tpNodeData, neNode){
	  if(!neNode.tpList || 0==neNode.tpList.length){
  	return;
  }else if(1==neNode.tpList.length) {
  	neNode.widthConstraint={
      minimum:DOT_SIZE*2,
      maximum:DOT_SIZE*2
    };
    neNode.heightConstraint={
      minimum:DOT_SIZE*4,
      maximum:DOT_SIZE*4,
      valign: 'bottom'
    };
    neNode.x=neNode.tpList[0].x;
    neNode.y=neNode.tpList[0].y;
  }else {
  	let x_min, x_max, y_min, y_max,center_x, center_y, width, height;
  	x_min=findSmallest(tpNodeData, neNode.tpList, "x");
    x_max=findBiggest(tpNodeData, neNode.tpList, "x");
    y_min=findSmallest(tpNodeData, neNode.tpList, "y");
    y_max=findBiggest(tpNodeData, neNode.tpList, "y");
    center_x=(x_min+x_max)/2;
    center_y=(y_min+y_max)/2;
    width=Math.abs(x_max-x_min)+DOT_SIZE*6;
    height=Math.abs(y_max-y_min)+DOT_SIZE*20;

    neNode.widthConstraint={
      minimum:width,
      maximum:width
    };
    neNode.heightConstraint={
      minimum:height,
      maximum:height,
      valign: 'bottom'
    };
    neNode.x=center_x;
    neNode.y=center_y;
  }
}
function drawCardNodes(tpNodeData, cardNodeData) {
	let i=0;
  let item, cardId,cardNodeIdx;
  for(;;){
  	item=tpNodeData[i];
    cardNodeIdx=findItem(cardNodeData, FI_id, item["tpData"][FI_cardId]);
    if(0>cardNodeIdx){
    	cardNodeData.push({
      	id: item["tpData"][FI_cardId],
        label: item["tpData"][FI_cardUserlabel],
        group: "cardNode",
        x: item.x,
        y: item.y,
        tpList: [i]
      });
    }else{
    	cardNodeData[cardNodeIdx].tpList.push(i);
    }
    
    i++;
    if (i>=tpNodeData.length){
    	break;//画完结束
    }
  }
  
  i=0;
  for(;;){
  	item=cardNodeData[i];
    drawOneCardAccordingToTpsPositions(tpNodeData, item);
    
    i++;
    if (i>=cardNodeData.length){
    	break;//画完结束
    }
  }
}

function drawNENodes(tpNodeData, neNodeData) {
	let i=0;
  let item,neNodeIdx;
  for(;;){
  	item=tpNodeData[i];
    neNodeIdx=findItem(neNodeData, FI_id, item["tpData"][FI_neId]);
    if(0>neNodeIdx){
    	neNodeData.push({
      	id: item["tpData"][FI_neId],
        label: item["tpData"][FI_neUserlabel],
        group: "neNode",
        x: item.x,
        y: item.y,
        tpList: [i]
      });
    }else{
    	neNodeData[neNodeIdx].tpList.push(i);
    }
    
    i++;
    if (i>=tpNodeData.length){
    	break;//画完结束
    }
  }
  
  i=0;
  for(;;){
  	item=neNodeData[i];
    drawOneNEAccordingToTpsPositions(tpNodeData, item);
    
    i++;
    if (i>=neNodeData.length){
    	break;//画完结束
    }
  }
}

const activeEdgeBackground={
	enabled: true,
	color: "rgba(0,255,0,0.2)",
  //dashes: [20, 10],
	size: 24
};
const standByEdgeBackground={
	enabled: true,
	color: "rgba(111,111,111,0.2)",
  //dashes: [20, 10],
	size: 24
}
const physics = {
	enabled: false
}
const groups = {
	ctpNode: {
  	fixed: true,
  	shape: 'dot',
    size: DOT_SIZE,
    color: {
    	background: '#00ff00',
      border: '#111111'
    },
    font: {
    	size: 13,
      vadjust: -45
    },
    borderWidth: 1.5,
    borderWidthSelected: 1.5,
    shadow: {enabled: false},
    heightConstraint:{
    	minimum: DOT_SIZE,
      maximum: DOT_SIZE,
    	valign: "top"
    }
    //fixed:  true
  },
  cardNode: {
  	fixed: true,
  	shape: 'box',
    borderWidth: 1,
    borderWidthSelected: 1,
     color: {
    	border:"#2B7CE9",
      background: "#2B7CE933",
      highlight: {
      	border: "#2B7CE9",
        background: "#2B7CE933"
      }
  },
  font: {
    	size: 16
    },
  shadow: {enabled: false}
  },
  neNode: {
  	fixed: true,
  	shape: 'box',
    borderWidth: 1,
    borderWidthSelected: 1,
    color: {
    	border:"#55555500",
      background: "#55555533",
      highlight: {
      	border: "#55555500",
        background: "#55555533"
      }
  },
  font: {
    	size: 18,
      vadjust: -5
    },
  shapeProperties:{
  	borderDashes: true,
    borderRadius: 0
  },
  shadow: {enabled: false}
  }
}


var nodeData=[];
var edgeData=[];

var cardNodeData=[];
var neNodeData=[];

drawFlowToTPData(FLOWINFO, nodeData, -1500, 0, XC_xStep, TL_xStep, XC_yStep, TL_yStep);
drawFlowToEdge(FLOWINFO, NORMAL, FLOWINFO, edgeData);
drawCardNodes(nodeData, cardNodeData);
drawNENodes(nodeData, neNodeData);

console.log("nodeData.length="+nodeData.length);
console.log("edgeData.length="+edgeData.length);
console.log("edgeData:"+JSON.stringify(edgeData, null, 2));
console.log("cardNodeData.length="+cardNodeData.length);
console.log("cardNodeData:"+JSON.stringify(cardNodeData, null, 2));
console.log("neNodeData.length="+neNodeData.length);
console.log("neNodeData:"+JSON.stringify(neNodeData, null, 2));

const options={groups: groups, physics: physics};
const container = document.getElementById("mynetwork");
var network=new vis.Network(container, { nodes: new vis.DataSet(neNodeData.concat(cardNodeData.concat(nodeData))), edges: new vis.DataSet(edgeData) }, options);
network.on("click", function(params) {
  var nodeId=this.getNodeAt(params.pointer.DOM);
  console.log(
    "click event, getNodeAt returns: " + nodeId
  );
  console.log(
    "click event, getPositions returns: " + JSON.stringify(this.getPositions([nodeId], null, 4))
  );
});

