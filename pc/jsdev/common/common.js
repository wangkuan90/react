/**
 * @author wk
 * @desc public function
 */
const isPC = function(){
	var userAgentInfo = navigator.userAgent;
	console.log("浏览器信息:" + userAgentInfo);
	var Agents = ["Android", "iPhone",
		"SymbianOS", "Windows Phone",
		"iPad", "iPod"
	];
	var flag = true;
	for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
			flag = false;
			break;
		}
	}
	return flag;
}

const paramsNeed = function(){
	throw new Error("Missing parameter");
}

module.exports = {
	isPC : isPC(),
	paramsNeed: paramsNeed
}