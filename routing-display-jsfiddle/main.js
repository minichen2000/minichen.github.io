const XC_xStep=100;
const TL_xStep=180;
const XC_yStep=110;
const TL_yStep=60;


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

        //如果是一个汇聚TP，那么比较前序两条腿长度，先把腿调整成一样长；再重新计算好自己的坐标(区别了交叉汇聚与单向物理连接汇聚, x轴步长不一样)
        if(item[FI_MR]){
        	if(nodeData[leg1NodeIdx].x>nodeData[leg2NodeIdx].x){
            	nodeData[leg2NodeIdx].x=nodeData[leg1NodeIdx].x
              x_now=nodeData[leg1NodeIdx].x+(item[FI_id]==item[FI_ptpId] ? TL_xStep : XC_xStep);
          }else{
            	nodeData[leg1NodeIdx].x=nodeData[leg2NodeIdx].x
              x_now=nodeData[leg2NodeIdx].x+(item[FI_id]==item[FI_ptpId] ? TL_xStep : XC_xStep);
          }
        }
        //如果不是汇聚点，直接用之前准备好的x坐标即可。
				
        //画TP
        nodeData.push({id: item[FI_id], label: item[FI_ptpUserlabel], group: 'ctpNode', x: x_now, y: y_now});
        //准备下一个TP的x坐标(对于交叉和物理连接来说, x轴步长不一样)
        if((i+1)<flow.length && flow[i+1][FI_type]==FI_type_XC){
        	x_now+=XC_xStep;
        }else {
        	x_now+=TL_xStep;
        }
        
        //如果是一个分叉点(在TP处分叉，只可能是单向物理连接分叉)，那么开始为递归画后面两条腿做一些准备。
        if(item[FI_SR]){
        	//在这里要做到：短腿延续当前方向前进，不折;长腿要折一下(为了放下更多的元素)，也即y轴要变。
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
    
    //分叉交叉的处理：递归画腿
    if (FI_type_XC==item[FI_type] && item[FI_SR]) {
      leg1NodeIdx=drawFlowToTPData(item[FI_SRES][FI_SRES_main], nodeData, x_now, y_now-XC_yStep, XC_xStep, TL_xStep, XC_yStep, TL_yStep);
      leg2NodeIdx=drawFlowToTPData(item[FI_SRES][FI_SRES_spare], nodeData, x_now, y_now+XC_yStep, XC_xStep, TL_xStep, XC_yStep, TL_yStep);
    }
    
    //汇聚交叉的处理：与汇聚TP的处理类似：比较前序两条腿长度，先把腿调整成一样长；再重新计算下一个TP的坐标
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
此函数扫描路由数据，把交叉和物理连接画到edgeData中(要确定箭头方向)
无返回值

flow: 本次要处理的路由数据(腿)
fullFlow：后台提供的完整路由数据，为了查找TP
edgeData: visjs的edges数据列表
*/
function drawFlowToEdge(flow, fullFlow, edgeData){
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
        shadow: {enabled: true}
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
        color: {color: 'green'},
        shadow: {enabled: true}
      });
      if (1<item[FI_zTPs].length){
      	to=item[FI_zTPs][1];
        edgeData.push({
          from: from,
          to: to,
          arrows: arrows,
          dashes: true,
        	color: {color: 'green'},
          shadow: {enabled: true}
        });
      }else if(1<item[FI_aTPs].length){
      	from=item[FI_aTPs][1];
        edgeData.push({
          from: from,
          to: to,
          arrows: arrows,
          dashes: true,
        	color: {color: 'green'},
          shadow: {enabled: true}
        });
      }
      //如果是分叉的交叉，递归处理两条腿
      if(item[FI_SR]){
      	drawFlowToEdge(item[FI_SRES][FI_SRES_main], fullFlow, edgeData);
        drawFlowToEdge(item[FI_SRES][FI_SRES_spare], fullFlow, edgeData);
      }
    }else if (FI_type_TP==item[FI_type] && item[FI_SR]) {//如果是分叉TP，也要递归处理两条腿
    	drawFlowToEdge(item[FI_SRES][FI_SRES_Tx], fullFlow, edgeData);
      drawFlowToEdge(item[FI_SRES][FI_SRES_Rx], fullFlow, edgeData);
    }

    i++;
    if (i>=flow.length){
    	break;//画完结束
    }
  }
}

const physics = {
	enabled: false
}
const groups = {
	ctpNode: {
  	shape: 'dot',
    size: 12,
    color: {
    	background: '#00ff00',
      border: '#111111'
    },
    font: {
    	size: 10,
      background: '#eeeeee'
    },
    borderWidth: 1.5,
    shadow: {enabled: true}
    //fixed:  true
  },
  ptpNode: {
  	shape: 'dot',
    size: 12,
    color: {
    	background: '#0000FF',
      border: '#111111'
    },
    borderWidth: 1.5,
    shadow: {enabled: true},
    fixed: true
  }
}


var nodeData=[];
var edgeData=[];
drawFlowToTPData(flowInfo3, nodeData, -1500, 0, XC_xStep, TL_xStep, XC_yStep, TL_yStep);
drawFlowToEdge(flowInfo3, flowInfo3, edgeData);

console.log("nodeData.length="+nodeData.length);
console.log("edgeData.length="+edgeData.length);
console.log("edgeData:"+JSON.stringify(edgeData, null, 2));

const options={groups: groups, physics: physics};
const container = document.getElementById("mynetwork");
var network=new vis.Network(container, { nodes: new vis.DataSet(nodeData), edges: new vis.DataSet(edgeData) }, options);
network.on("click", function(params) {
  var nodeId=this.getNodeAt(params.pointer.DOM);
  console.log(
    "click event, getNodeAt returns: " + nodeId
  );
  console.log(
    "click event, getPositions returns: " + JSON.stringify(this.getPositions([nodeId], null, 4))
  );
});

