/**
 * 安全检查js lib
 * version 1.4
 * 2012.09.04 modified,add function extractNonTxScriptWorm ,extractNonTxEmbed
 */
(function(_wnd, _doc, _ln){ //全包起来，不要用这些全局function污染业务页面


	function checkNonTxDomain(level, bid) {
		/*
		level : 采样比 level>0 && level<1 level越大，上报的数据越多
		bid   : 业务 id
		*/
		var checkInfo = {
					bid : bid, 
					childUrl : _ln.href,
					parentUrl : parent.location.href
				}
			, childCheckFlag
			, parentCheckFlag
			;

		if (Math.random() > level) {
			return; 	//灰度
		}

		try {
			generateZyjJsLoadSuccess(checkInfo);
			childCheckFlag = generateNonTxDomainFromDom(_doc, 'datapt', checkInfo);
			parentCheckFlag = (parent != _wnd) ? generateNonTxDomainFromDom(parent.document, 'datapp', checkInfo) : false;
		} catch(ign) {}
	}


	function generateZyjJsLoadSuccess(checkInfo) {
		var data = [];
		packZyjUrlData(data, 'jsloadsuccess', checkInfo);
	}

	function packZyjUrlData(data, dataMark, checkInfo) {
		var version = '1.4'
			, cgi = 'http://zyjc.sec.qq.com/cr'
			, img = new Image()
			;

		data.push("childUrl::" + encodeURIComponent(checkInfo.childUrl));
		data.push("parentUrl::" + encodeURIComponent(checkInfo.parentUrl));
		img.src = cgi + "?id=" + checkInfo.bid + "&d=" + dataMark + "=v" + version + "|" + data.join('|');

		return true;
	}

	function generateNonTxDomainFromDom(dom, parentMark, checkInfo) {
		var scriptData = extractNonTxScript(dom);
		var	iframeData = extractNonTxIframe(dom);
		var	frameData = extractNonTxFrame(dom);
		var formData = extractNonTxForm(dom);
		var	embedData = extractNonTxEmbed(dom);
		var	scriptWormData = extractNonTxScriptWorm(dom);
		var hacks = scriptData.concat(iframeData, frameData, formData, embedData,scriptWormData);
			
			

		
		if (hacks.length <= 0) {
			return false;
		}
		hacks = distinctZyjArray(hacks);
		
		packZyjUrlData(hacks, parentMark, checkInfo);
	}

	function extractNonTxScriptWorm(dom) {
		var scripts = dom.getElementsByTagName("script")
			, scriptData = []
			, tempScript
			, urlList
			, url
			, nonTxList
			, mapFunc
			, resultList
			;

		for(var i = 0; i < scripts.length; i++) {
			tempScript = scripts[i];

			//urlList = extractZyjUrlFromHtml(tempScript.innerHTML);
			//scriptData = scriptData.concat(urlList);

			if(url = tempScript.src){
				scriptData.push(url);
			}
		}

		nonTxList = grepZyjList(scriptData, isAntiTxDomain); 
		mapFunc = addTagToZyjUrlCallback('script_worm');
		resultList = mapZyjList(nonTxList, mapFunc);

		return resultList;
	}
	

	

	function extractNonTxScript(dom) {

		var scripts = dom.getElementsByTagName("script")
			, scriptData = []
			, tempScript
			, urlList
			, url
			, nonTxList
			, mapFunc
			, resultList
			;

		for(var i = 0; i < scripts.length; i++) {
			tempScript = scripts[i];

			urlList = extractZyjUrlFromHtml(tempScript.innerHTML);
			scriptData = scriptData.concat(urlList);

			if(url = tempScript.src){
				scriptData.push(url);
			}
		}

		nonTxList = grepZyjList(scriptData, isAntiTxDomain); 
		mapFunc = addTagToZyjUrlCallback('script');
		resultList = mapZyjList(nonTxList, mapFunc);

		return resultList;
	}

	function extractZyjUrlFromHtml(html) {
		var regUrl = /\bhttps?:\/\/[^\"\'\s]+/ig
			, urlList = []
			;

		while(url = regUrl.exec(html)) {
			urlList.push(url);
		}

		return urlList;
	}

	function grepZyjList(testList, testFunction) {
		var grepList = [];

		for (var idx = 0; idx < testList.length; ++idx) {
			var temp = testList[idx];

			if (testFunction(temp)) {
				grepList.push(temp);
			}
		}

		return grepList;
	}

	function isAntiTxDomain(sUrl) {
		var sDomain = extractZyjDomain(sUrl)
			, regErrDom
			, regTxCom
			, regTxCn
			, regTxNet
			, regTxOther
			;

		if(!sDomain){
			return false;
		}

		//这些url白名单放在js里面其实不太合适...
		regErrDom = /^xui.ptlogin2?\.?$/i;
		regTxCom = /(\.|^)(qq|paipai|soso|wenwen|tenpay|macromedia|gtimg|qstatic|qqmail|paipaiimg|qqgames|pengyou|foxmail|qzoneapp|qzone|qplus|imqq|tqapp|tencent|3366|21mmo|taotao|imrworldwide|idqqimg|17roco|expo2010china|fangqq|tencentmind|tencity|yingkebicheng|zhangzhongxing|expovol|otaworld|gzyunxun|heyyo|himoral|himorale|myrtx|qqwinner|redian|sjkx|rtxonline|nbaso|paipai\.500wan|qqjapan|qq\.salewell)\.com$/i;
		regTxCn = /(\.|^)(qq\.com|gtimg|gtimg\.com|qlogo|foxmail\.com|gtimg\.com|url|qpic|tencent\.com|expo2010|expo|himorale\.com|nbaso\.com|qqtest\.com|qq\.ucar|rtx\.com|soso\.com|tcimage)\.cn$/i;
		regTxNet = /(\.|^)(5999|gongyi)\.net$/i;
		regTxOther = /(\.|^)(himorale\.com\.hk|tencent\.com\.hk|qq\.chinacache\.net|qq\.com\.fastcdn\.com|qq\.com\.lxdns\.com|qq\.fastcdn\.com|soso\.com\.lxdns\.com)$/i;

		if (
			regErrDom.test(sDomain)
			|| regTxCom.test(sDomain)
			|| regTxCn.test(sDomain)
			|| regTxNet.test(sDomain)
			|| regTxOther.test(sDomain)) {

			return false;
		}
		return true;
	}

	function extractZyjDomain(sUrl) {
		var regDomain = /^https?:\/\/([\w\-]+\.[\w\-.]+)/i
			, m = regDomain.exec(sUrl)
			;

		if(!m){
			return;
		}
		return m[1]; 
	}

	function addTagToZyjUrlCallback(tag) {
		return function(url) {
				return tag + "::" + encodeURIComponent(url);
			};
	}

	function mapZyjList(testList, testFunction) {
		var mapList = []
			, temp
			, mapTemp
			;

		for (var idx = 0; idx < testList.length; ++idx) {
			temp = testList[idx];
			mapTemp = testFunction(temp);
			mapList.push(mapTemp);
		}

		return mapList;
	}

	function extractNonTxIframe(dom) {
		var tagName = 'IFRAME'
			, rawFunc = function (x) { return x.src }
			, mapFunc = addTagToZyjUrlCallback('iframe')
			;

		return extractNonTxTagData(dom, tagName, rawFunc, isAntiTxDomain, mapFunc);
	}
	
	function extractNonTxEmbed(dom) {
		var tagName = 'EMBED'
			, rawFunc = function (x) { return x.src }
			, mapFunc = addTagToZyjUrlCallback('embed')
			;
		return extractNonTxTagData(dom, tagName, rawFunc, isAntiTxDomain, mapFunc);	
	}

	function extractNonTxTagData(dom, tag, rawFunc, grepFunc, mapFunc) {
		var tags = dom.getElementsByTagName(tag);
		var tagRaw = mapZyjList(tags, rawFunc);
		var	tagData = grepZyjList(tagRaw, grepFunc);
		var	tagResult = mapZyjList(tagData, mapFunc);
			
	
		return tagResult;
	}

	function extractNonTxFrame(dom) {
		//有body时frameset无效，暂时保留
		var tagName = 'FRAME'
			, rawFunc = function (x) { return x.src }
			, mapFunc = addTagToZyjUrlCallback('frame')
			;

		return extractNonTxTagData(dom, tagName, rawFunc, isAntiTxDomain, mapFunc);
	}

	function extractNonTxForm(dom) {
		var tagName = 'FORM'
			, rawFunc = function (x) { return x.action }
			, mapFunc = addTagToZyjUrlCallback('form')
			;

		return extractNonTxTagData(dom, tagName, rawFunc, isAntiTxDomain, mapFunc);
	}

	function distinctZyjArray(list) {
		var sortList = list.slice(0)
			, derivedArray = []
			;

		sortList.sort();
		derivedArray.push(sortList[0]);

		for (var i = 1; i < sortList.length; i += 1) {
			if(sortList[i]!=sortList[i-1]) {
				derivedArray.push(sortList[i]);
			}
		}
		return derivedArray;
	}

	/*******

	  首先，会请求一个cgi，获取所需的正则式。
	  若正则式不为空，则将当前页面html代码判定正则式，若匹配

	  level>0 && level<1
	  level越大，上报的数据越多

	  bid
	  business id
	  */
	function aqrjsCheckAllHtml(level1, level2, bid) {
		_wnd.aqrjs_bid = bid; //sds

		if (Math.random() < level1) {
			aqrjsSubmitAll(_wnd.aqrjs_bid, 1);
		} else if(Math.random() < level2) { // 再看匹配特征的概率 level2一般时为0
			var js = _doc.createElement("script");
			js.src = "http://zyjc.sec.qq.com/get_conf" + Math.random();
			_doc.getElementsByTagName("head")[0].appendChild(js);
		}
	}

	/*
	 * 接收回调
	 */
	function aqrjsRunReturn(str) {
		str = str.replace(/^\s+|\s+$/, "").toLowerCase();

		if ( str.length === 0 ) {
			return;
		}

		var allhtml = _doc.documentElement.innerHTML.toLowerCase();
		if(allhtml.indexOf(str) > -1) {
			aqrjsSubmitAll(_wnd.aqrjs_bid, 2);
		}
	}



	/**
	 * 用来提交数据给后台分析
	 */
	function aqrjsSubmitAll(bid, doid) {
		var t
			, submitDiv = _doc.getElementById("aqrjs_hidden_div")
			, submitForm
			;

		if(!submitDiv){
			submitDiv = _doc.createElement("div");
			submitDiv.style.cssText = 'display:none;';
			submitDiv.id = 'aqrjs_hidden_div';
			_doc.body.appendChild(submitDiv);
			submitDiv.innerHTML = 
				'<iframe name="aqrjs_hidden_frame" src="about:blank"></iframe>\
				<form method="post" target="aqrjs_hidden_frame" action="http://zyjc.sec.qq.com/upload_info">\
					<input type="hidden" name="data" />\
					<input type="hidden" name="buid" />\
					<input type="hidden" name="url" />\
					<input type="hidden" name="doid" />\
				</form>';
		}

		t = submitDiv.getElementsByTagName('form');
		if(t && t.length && (submitForm = t[0])){
			submitForm.buid.value = bid;
			submitForm.doid.value = doid;
			submitForm.url.value = _ln.href;
			submitForm.data.value = _doc.documentElement.innerHTML;

			submitForm.submit();
			submitForm.innerHTML = '';
			_doc.body.removeChild(submitForm);
		}
	}


	_wnd.checkNonTxDomain = checkNonTxDomain;

})(window, document, location);

/*  |xGv00|f88bc62abda5f371f636337e29fa4765 */