window.onload= function(){
	waterFall('wrap','box');
};
function waterFall(parent,child){
	var oParent = document.getElementById(parent);
	var oBox = getClassName(oParent,child);
	console.log(oBox);

	var oBoxW = oBox[0].offsetWidth;
	var WinW = document.documentElement.clientWidth || document.body.clientWidth;
	var num = Math.floor( WinW / oBoxW );
	/*oParent居中*/
	oParent.style.cssText = "width:"+num*oBoxW+"px;margin:auto";

	var arrBoxH = [];
	for(var i=0;oBox.length;i++){
		var oBoxH = oBox[i].offsetHeight;
		if(i<num){
			arrBoxH.push(oBoxH);
		}else{
			var minH = Math.min.apply(null,arrBoxH);
			var minHIndex = getIndex(minH,arrBoxH);
			oBox[i].style.position = 'absolute';
			oBox[i].style.left=oBox[minHIndex].offsetLeft+'px';
			oBox[i].style.top=arrBoxH[minHIndex]+'px';
			arrBoxH[minHIndex] += oBox[i].offsetHeight;
		}
	}

}	
function getClassName(parent,child){
	var arr=[];
	var allBox = parent.getElementsByTagName("*");
	for(var i=0;i<allBox.length;i++){
		if(allBox[i].className == child){
			arr.push(allBox[i]);
		}
	}
	return arr;
}

function getIndex(minH,arrHeightBox){
	for(var i in arrHeightBox){
		if(arrHeightBox[i] == minH){
			return i;
		}
	}
}
