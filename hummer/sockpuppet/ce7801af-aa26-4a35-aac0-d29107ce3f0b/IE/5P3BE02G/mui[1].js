KISSY.add("mui/minicart/minicart",function(t,a,e,i,n,r,o){var s={},c=0;return t.mix(s,{"version":"%VERSION%","init":function(i,n){if(!c){c++;var o=this;o.carttype=1,i=a.get(i),n=t.merge({},n),a.addClass(i,"tm-mCart"),o.el=i;var s=function(){i.innerHTML='<div class="tm-mcRoot"><div class="tm-mcListBox"><div class="tm-mcListInner"><div class="tm-mcList"></div></div><div class="tm-mcLoading"></div><div class="tm-mcMask"></div></div><div class="tm-mcHandler"><div class="tm-mcApart"></div><div class="tm-mcGrace"></div></div></div>',o.handlerEl=a.get("div.tm-mcHandler",i),o.listBoxEl=a.get("div.tm-mcListBox",i),o.listInnerEl=a.get("div.tm-mcListInner",i),o.listEl=a.get("div.tm-mcList",i),o.rootEl=a.get("div.tm-mcRoot",i),o.graceEl=a.get("div.tm-mcGrace",i),o.apartEl=a.get("div.tm-mcApart",i),o.renderHandler(),t.use("mui/minicart/fullext",function(){o.strectch()}),e.on(o.rootEl,"click",function(t){t.stopPropagation();for(var e=t.target;;){if(e===this)return;var i=a.attr(e,"data-tmc");if("."===i)return;if(i)return"A"===e.nodeName&&t.preventDefault(),o[i](e);e=a.parent(e)}}),r.detach("numInit",s)};r.on("numInit",s),r.numInit(),o.CartModel=r}},"login":function(a){var e=this;r.record("tmalljy.2.5?action=openmininotlogin_v102&ver="+e.carttype);var i=r.get("_mallbarItem"),n=r.get("_mallbarConf");i&&n&&i.fire(n.E.LOGIN,{"success":function(){if(r.set("_isLogin",!0),t.isFunction(a))return a();TB&&TB.Global&&TB.Global.writeLoginInfo&&(TB._isMemberInfoReady=!1,TB._isLoginStatusReady=!1,TB.Global.writeLoginInfo())}})},"cart":function(){window.open(r.getApi("bcart"),"_blank")},"add":function(e,i,n){this.addData={"params":t.clone(e),"success":i,"error":n};var o=e.anim;delete e.anim,i=i||function(){},r.set("_cached",!1),r.add({"data":e,"success":function(t){if(window.TB&&TB.Global&&TB.Global.mallbar&&!e.noAnim){var n=o.startNode,r=40,s=40;TB.Global.mallbar.driving({"e":{"target":o.startNode,"pageX":a.offset(n).left+(a.width(n)-r)/2,"pageY":a.offset(n).top-s},"type":"cart","flyer":o.img,"width":r,"height":s,"params":e,"speed":2,"callback":function(){i(t)}})}else e.noAnim&&i(t)},"error":n||i})},"invalidCache":function(){r.set("_cached",!1)},"loginThenAdd":function(){var t=this;t.login(function(){var a=t.addData;t.add(a.params,a.success,a.error)})},"renderHandler":function(){function t(){var t="";return r.get("isDouble11Pre")&&(t='<div class="tianmaobao j_tianmaobao"><a href="//chong.alipay.com/i/chong.htm" title="\u5929\u732b\u5b9d"><img src="//gtms01.alicdn.com/tps/i1/TB1p6vmGpXXXXXPXFXXYZaeLVXX-280-46.png"/></a></div>'),t}function e(){var t="",a=r.get("tmallEppCart");return a&&(t+='<a class="tmallEppCart" href="'+a+'" title="\u8fdb\u5165\u4f01\u4e1a\u91c7\u8d2d\u8d2d\u7269\u8f66">',t+='<img class="icon" src="//img.alicdn.com/tfs/TB1Ah_CKFXXXXXHXVXXXXXXXXXX-78-78.png"/>',t+="<span>\u8fdb\u5165\u4f01\u4e1a\u91c7\u8d2d\u8d2d\u7269\u8f66</span>",t+='<img class="arrow" src="//img.alicdn.com/tfs/TB1ZiDGKFXXXXccXFXXXXXXXXXX-14-22.png"/>',t+="</a>"),t}var i=this,n=r.getNum("total"),s="";r.get("_listFilled")&&!i.cartDegr&&(s+='<div class="tm-mcCashier-wrap">',s+=t(),s+=e(),s+='<div class="tm-mcTotal clearfix"><h3><span class="tm-e1">\u8d2d\u7269\u8f66</span><span class="tm-e2">\u5df2\u9009</span><strong class="tm-mcCartNumTotal">'+n+'</strong><strong class="tm-mcCheckedNum">'+(r.get("_checkedCount")||0)+'</strong><span class="tm-e2">\u4ef6</span></h3><span class="tm-mcTotalFeeWrap"><strong class="tm-mcTotalFee">'+o.toMoney(r.get("_totalFee"),r.get("_totalCurrency"))+"</strong></span></div>",s+='<div class="tm-mcCashier" data-tmc="go">',s+='<div class="tm-mcGo">\u7ed3 \u7b97<s></s></div>',s+="</div>",s+="</div>");var c=i.handlerEl;a.remove(".tm-mcCashier-wrap",c),a.append(a.create(s),c)}}),r.on("after_counterDownChange",function(t){a[t.newVal?"addClass":"removeClass"](s.el,"tm-mcCounterDown")}),r.on("after_countMaxChange",function(t){a[t.newVal?"addClass":"removeClass"](s.el,"tm-mcCountMax")}),window.MiniCartModel=r,window.TMiniCart=s,s},{"requires":["dom","event","anim","ua","mui/minicart/model","mui/minicart/util","mui/minicart/minicart.css"]});KISSY.add("mui/minicart/model",function(t,e,a,r,i,n,c){var s=function(){var e=false;var a=[];var r=new Image;window["_tmcr_"+t.now()]=r;r.onload=r.onerror=function(){e=false;i()};function i(){if(e){return}var i=a.shift();if(i){e=true;r.src="//gm.mmstat.com/"+i+(i.indexOf("?")>-1?"&":"?")+t.now()}}return function(t){if(t){a.push(t);i()}}}();KISSY.config({packages:{"sd/data_sufei":{base:"//g.alicdn.com/sd/data_sufei/1.3.6/sufei",ignorePackageNameInUri:true,charset:"utf8"}}});KISSY.use("sd/data_sufei/sufei",function(t,e){});function o(){var t=this;var e=location.hostname;var a=e.match(/\b(daily|com\.hk)\b/);var r=e.match(/\.hk\b/);var i=e.match(/\.95095/);var n=e.match(/\.liangxinyao/);var c=e.match(/\.95095\.daily\.etao\.net/);t.isDaily=a;var s=a?"daily.tmall.com.hk":"tmall.hk";var l=a?"daily.tmall.net":"tmall.com";var d=a?"daily.taobao.net":"taobao.com";var m=a?"yao.95095.daily.tmall.net":"yao.95095.com";var u=a?"liangxinyao.daily.etao.net":"liangxinyao.com";var f=a?"daily.alitrip.net":"alitrip.com";if(c){m="yao.95095.daily.etao.net"}o.superclass.constructor.call(t);t.set("_checkedMax",50);t.set("_numDanger",50);var v;if(r){v=s}else if(i){v=m}else if(n){v=u}else{v=l}t.set("host:fbuy","//{hostprefix}fbuy."+v);t.set("host:cart","//{hostprefix}cart."+l);t.set("host:buy","//{hostprefix}buy."+l);t.set("host:buyYY","//{hostprefix}buy."+m);t.set("host:buyHK","//{hostprefix}buy."+s);t.set("host:buyYYZY","//{hostprefix}buy."+u);t.set("host:buyTrip","//{hostprefix}buy."+f);t.set("api:num",(a?"//count.daily.taobao.net":"//count.taobao.com")+"/counter6");t.set("api:list","{fbuy}/cart/mini/trailMiniCart.htm");t.set("api:add","{fbuy}/cart/addCartItems.do");t.set("api:del","{fbuy}/cart/mini/delMini.do");t.set("api:update","{fbuy}/cart/mini/updateMini.do");t.set("api:check","{fbuy}/cart/mini/checkMini.do");t.set("api:sss","//{hostprefix}cart."+d+"/sss.htm");t.set("api:bag","{fbuy}/auth/buyerRemoveReward.do");t.set("api:bcart","{cart}/cart/myCart.htm");t.set("api:buyTB","//{hostprefix}buy."+d+"/auction/order/confirm_order.htm");t.set("api:buy","{buy}/order/confirmOrder.htm");t.set("api:buyHK","{buyHK}/order/confirmOrder.htm");t.set("api:buyYY","{buyYY}/order/confirm_order.htm");t.set("api:buyYYZY","{buyYYZY}/order/confirm_order.htm");t.set("api:buyTrip","{buyTrip}/order/confirmOrder.htm");t.set("api:checkLogin","{buy}/login/buy.do");t.set("api:checkLoginYY","{buyYY}/login/buy.do");t.set("api:checkLoginYYZY","{buyYYZY}/login/buy.do");t.set("api:checkLoginHK","{buyHK}/login/buy.do");t.set("api:checkLoginTrip","{buy}/login/buy.do");var h=window.TB&&TB.Global&&TB.Global.setCartNum?TB.Global.setCartNum:function(){};t.on("numChange",function(){h(this.get("_counterDown")||this.get("_countMax")?false:this.getNum("total"))})}t.extend(o,a);t.augment(o,i.Target||t.EventTarget,{DATA:{},NUM:{total:0,normal:0,invalid:0,primitive:true},TYPE:{bundle:{child:"main"},main:{parent:"bundle",child:"order"},order:{parent:"main"}},setNum:function(e,a){var r={};var i=false;if(!t.isPlainObject(e)){r[e]=a}else{r=e}var n=this.NUM;t.each(r,function(t,e){if(e in n){if(t!==n[e]){i=true}n[e]=t}});n.total=n.normal+n.invalid;if(n.total>=this.get("_numDanger")){this.set("_countMax",true)}if(n.primitive){i=true;n.primitive=false}if(i){this.fire("numChange")}this.fire("updateNum")},getNum:function(e){var a=this.NUM;if(e){return a[e]}return t.clone(a)},numInit:function(){var e=this;var a=false;var r=function(){if(a){return}a=true;var r=e.get("uid");var i="TCART_234_"+r+"_q";var n=function(a){a=a||{};e.set("__totalCount__",a[i]);var r=t.isNumber(a[i]);if(!r){e.set("_counterDown",true)}e.setNum({normal:r?e.formatNum(a[i]):0,invalid:0});e.fire("numInit")};if(r){e.xhr({api:"num",data:{keys:i},complete:n})}else{n()}};if(TB&&TB.Global&&TB.Global.loginStatusReady){TB.Global.loginStatusReady(function(a){if(a.isLogin){e.set("_isLogin",true);var i=t.later(r,5e3);TB.Global.memberInfoReady(function(t){i.cancel();var a=t.memberInfo;e.set("uid",a.cookies&&a.cookies.unb?a.cookies.unb.value:"");r()})}else{e.set("uid",a.trackId);r()}})}},dump:function(){if(window.console){window.console.log(this.getAttrVals());window.console.log(this.NUM);window.console.log(this.DATA)}},getApi:function(e){var a=this;if(-1===e.indexOf(":")){e="api:"+e}var r=a.get(e);if(r){t.each(["fbuy","buy","buyHK","cart","buyYY","buyYYZY","buyTrip"],function(t){r=r.replace("{"+t+"}",a.get("host:"+t)||"")});if("api:buyTrip"===e){r=r.replace("{hostprefix}","trip")}r=r.replace("{hostprefix}",a.get("host:prefix")||"")}return r},record:s,add:function(e){var a=this;var i=0;var s=1;e=a.mixParams(e);o(e.data);l();function o(t){t.add=r.stringify(t.add);var e=a.get("_tb_token_");if(e){t._tb_token_=e}}function l(r){if(r){o(r)}else{r=e.data}a.xhr({api:"add",data:r,success:function(t){a.set("totalSize",t.cartNum);a.setNum({normal:t.cartNum,invalid:0});e.success(t)},error:function(o){if(i>=s){return}if("CsrfCheckFail"===o.errorCode&&o.tk){i++;e.data._tb_token_=o.tk;a.set("_tb_token_",o.tk);return l()}if(!o.errorCode){o.errorCode="SERVER_BUSY";o.error="\u5ba2\u5b98\uff0c\u7f51\u7edc\u62e5\u5835\uff0c\u6dfb\u52a0\u8d2d\u7269\u8f66\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5"}if(o.errorCode==="BuyerNeedLogin"){var d={check:false};if(r.proxyURL){d.proxyURL=r.proxyURL}if(!c.show){c=new c}c.show(function(){var c=r.getParams;if(o.tk){e.data._tb_token_=o.tk;a.set("_tb_token_",o.tk)}if(t.isFunction(c)){n.when(c(),function(t){i++;return l(t)})}else{i++;return l()}},d)}else{e.error(o)}}})}},xhr:function(a){var r=this;a=t.merge({data:{},type:"get",success:function(){},error:function(){},complete:function(){},wait:function(){},needMerge:false,timeout:5},a);var i=r.getApi(a.api);var n=t.later(function(){a.wait()},360);var c=function(e){n.cancel();a.responseData=e;r.onXhrResponse(a);var i=r.get("uid");if(a.api==="num"&&!i){t.each(e,function(t,e){if(t<0){r.record("tmalljy.2.5?action=tair-error")}})}};var s=a.data;var o=r.get("_tpId");if(o){s.tpId=o}a.data=s;var l=this.get("division");if(l&&l.code){i+="?divisionCode="+l.code}if(a.api==="list"){KISSY.use("sd/data_sufei/sufei",function(t,r){new e(r({url:i,data:s,success:c,dataType:"jsonp",crossDomain:true,cache:false,timeout:a.timeout},{style:"taobao"}))});return}if("get"===a.type){e({url:i,type:"get",scriptCharset:a.scriptCharset||"gbk",data:s,dataType:"jsonp",complete:c,timeout:a.timeout})}else{r.useProxy(function(t){t.post(i,s,c,a.timeout)})}},onXhrResponse:function(e){var a=this;var i=e.responseData;if(!t.isPlainObject(i)){i={success:false}}var n=i.globalData;var c;if(n){c=n.sss;a.set("_isLogin",n.login);if(!a.get("host:prefix")&&n.hostPrefix){a.set("host:prefix",n.hostPrefix+".")}if(n.cartUrl){a.set("api:bcart",n.cartUrl)}}try{c=c||r.parse(i.sss);if(t.isPlainObject(c)&&"quantity"in c){t.getScript(a.getApi("sss")+"?quantity="+c.quantity+"&tk="+c.token+"&"+t.now())}}catch(s){}if(i.success){if(e.needMerge){a.set(n);a.merge(i.list)}if(n&&n.bundRela){a.mergeBundleRelaPromo(n)}e.success(i);if(e.needMerge){a.calculate()}}else{e.error(i)}e.complete(i)},formatNum:function(t){t-=0;return t>0?t:0},read:function(t,e,a){if(!t){return null}var r;e=e.split("/");while(r=e.shift()){if(r in t){t=t[r]}else{return a}}return t},mixParams:function(e,a){return t.merge({success:function(){},error:function(){}},a,e)},useProxy:function(e){var a=this;t.use("mui/minicart/proxy",function(t,r){r.init(a.getApi("host:fbuy")+"/cart/mini/proxy.htm",function(){});if(e){e(r)}})}});return new o},{requires:["ajax","base","json","event","promise","mui/minilogin/"]});window.MLoginTimer=0,window.MLoginShow=0,KISSY.add("mui/minilogin/index",function(o,e,n){function i(o){var e=document.createElement("a");return e.href=o,e.hostname===location.hostname}var t,a=function(o){var e=location.hostname.split(".");return e.splice(e.length-o>0?e.length-o:0,o).join(".")}(2),l=location.hostname.indexOf(".net")>=0||location.hostname.indexOf(".com.hk")>=0,c=l?"daily.taobao.net":"taobao.com",r=l?"daily.tmall.net":"tmall.com",m=l?"daily.tmall.com.hk":"tmall.hk",d="assets_css=3.0.10/login_pc.css",s="//login."+c+"/member/login.jhtml?style=miniall&newMini2=true&enup=true&from=tmall&allp="+escape(d),w=window.location.protocol,g={"check":!0,"needRedirect":!1,"sub":!1,"proxy":{"tmall":w+"//vip."+r+"/miniLoginProxy.htm","hk":w+"//www."+m+"/loginproxy.htm","yao":w+"//yao.95095.com/go/rgn/95095/loginproxy.php","etao":w+"//vip.daily.tmall.net/miniLoginProxy.htm","liangxinyao":w+"//alihealthyao.liangxinyao.com/markets/lxyao/proxy"}},h={"show":function(e,n){window.goldlog&&window.goldlog.send("//log.mmstat.com/tmallmember.9.2",{}),h.Analytics.MLstar=1*new Date;var i=this;"function"!=typeof e&&(n=e,e=null),n=o.merge(g,n);var t=new Date;t.setDate(t.getDate()-1),document.cookie="cookie2=;expires="+t.toGMTString()+";path=/;domain=.tmall.com",!1===n.check?this._show(e,n):this._check(function(t){h.Analytics.MLcheckStar=1*new Date,t?(window.MLoginShow<=1&&!o.UA.mobile&&window.TB&&TB.Global&&TB.Global.updateLoginInfo(),e&&e(),window.MLoginShow+=1):i._show(e,n)},n)},"_checkPage":function(){return window.TB&&window.TB.userInfo&&window.TB.userInfo.isLogin},"_check":function(e,n){h.Analytics.MLcheckStar=1*new Date;var i=this,t=n.checkTimeout||5,a=!1,l=o.later(function(){a||e(i._checkPage()),l&&l.cancel()},1e3*t);return n&&n.checkApi&&-1==n.checkApi.indexOf(".tmall.")&&(n.checkApi=undefined),o.io({"type":"get","url":n.checkApi?n.checkApi:"//miaoxin."+r+"/member/user_login_info2.do","success":function(o){if(h.Analytics.MLcheckEnd=1*new Date,o=o||{},1111==o.status)return a=!0,void e(i._checkPage());a=!0,e(o.login)},"error":function(){a=!0,e(i._checkPage())},"timeout":t,"dataType":"jsonp","charset":"utf-8","cache":!1,"headers":{"X-Requested-With":!1}})},"_show":function(n,l){if(h.Analytics.MLshowStar=1*new Date,window.MLoginTimer+=1,l.insert&&(window.MLoginTimer=0),!(window.MLoginTimer>1)){var r,m=s,d="",w=window.location.hostname,g="";if(o.UA.mobile)return d=window.location.href,m="//login."+c+"/member/login.jhtml?redirectURL="+encodeURIComponent(d),window.location.href=m,window.MLoginTimer=0,!1;if(l.needRedirect){var u=l.redirectUrl?l.redirectUrl:location.href.split("#")[0];m+="&full_redirect=true&tpl_redirect_url="+encodeURIComponent(u)}else r="g_tml_callbak"+(new Date).getTime(),window[r]=function(){var o=window.TB||{};t&&t.hide(),o&&o.Global&&o.Global.updateLoginInfo(),window.MLoginTimer=0,window.MLoginShow+=1,n&&n.apply(this,arguments);try{delete window[r]}catch(e){}},l.proxyURL?d+=l.proxyURL:w.indexOf(".hk")>=0?d+=l.proxy.hk:w.indexOf("95095.com")>=0?d+=l.proxy.yao:w.indexOf("95095.daily.etao.net")>=0?d+=l.proxy.etao:w.indexOf("liangxinyao.com")>=0?d+=l.proxy.liangxinyao:d+=l.proxy.tmall,d+=(d.indexOf("?")>0?"&":"?")+"callback="+r,i(d)||document.domain===a||(document.domain=a),i(d)&&document.domain===location.hostname&&(d+="&nsdomain=true"),m+="&full_redirect=false&tpl_redirect_url="+encodeURIComponent(d);if(l.sub&&(m+="&sub=true"),window.g_config&&window.g_config.moduleTimeStamp&&window.g_config.moduleTimeStamp.minilogin&&(m+="&t="+window.g_config.moduleTimeStamp.minilogin),g='<iframe class="j_minilogin_iframe" style="background: rgb(250, 250, 250);" width="350" scrolling="no" height="400" frameborder="no" src="'+m+'"></iframe>',l.insert)return void o.all(l.insert).append(g);t=new e({"width":350,"height":436,"bodyContent":g,"mask":!0,"showCat":!0,"zIndex":999999,"align":{"points":["cc","cc"]}}),t.render(),t.show();var f=o.version.indexOf("1.3")>=0,p=o.all(f?t.__attrVals.el:t.$el),y=f?".mui-stdmod-body":".mui-dialog-body",k=f?".mui-ext-close":".mui-dialog-close",x=p.all(".j_minilogin_iframe");x.parent(y).style("background-color","#FAFAFA"),h.Analytics.MLshowEnd=1*new Date;x.parent(".mui-dialog").addClass("my-minilogin-dialog"),p.all(k).on("click",function(){l.closeCallback&&l.closeCallback(),window.MLoginTimer=0,t.destroy()}),x.on("load",function(){h.Analytics.MLloaded=1*new Date,h.sendTrack()})}},"Analytics":{},"sendTrack":function(){if(window.performance&&(!window.performance||window.performance.getEntriesByType)){for(var o,e=0,n=window.performance.getEntriesByType("resource");e<n.length;e++)if("iframe"==n[e].initiatorType&&n[e].name.indexOf("https://login.taobao.com/member/login.jhtml")>=0){o=n[e];break}if(o){var i=[];for(var t in o)i.push(t+"="+("name"==t?"//login.taobao.com":o[t]));for(var t in h.Analytics)i.push(t+"="+h.Analytics[t]);i.push("MLtype=minilogin");var a=["[uhttp://login.tmall.com/track/0.2.0/]","[r10]"].join(""),l=document.cookie.match(/_nk_\=([^\;]*); /),c=l&&l[1]||"",r="//gm.mmstat.com/ued.1.1.2?type=9&id=jstracker&v=0.02&nick="+encodeURIComponent(c)+"&msg="+a+escape(i.join("&"));(new Image).src=r}}}};return h},{"requires":["mui/overlay/dialog","io","mui/minilogin/index.css"]});KISSY.add("mui/overlay/dialog",function(e,t){function i(t){var n=this;n.config=e.merge(i.Config,t);n.config.elCls=n.config.elCls||"";n.config.elCls+=n.config.skin?" mui-dialog-"+n.config.skin:"";if(n.config.mask){n.config.elCls+=" mui-dialog-hasmask"}i.superclass.constructor.call(this,n.config);var s=true;function o(){var t=n.get("el"),i=e.UA.ie<8?"style='height:expression(this.parentNode.clientHeight);'":"";t.append("<div class='mui-dialog-skin' "+i+"></div>"+(n.config.showCat?"<i class='mui-dialog-cat'></i>":""));s=false}n.on("afterRenderUI",function(){o()});if(n.get("initRender")){n.render()}}i.Config={prefixCls:"mui-",showCat:true,zIndex:99999,initRender:false};e.extend(i,t.Dialog);e.augment(i,{setBodyContent:function(e){var t=this;t.set("bodyContent",e);t.render()},setHeaderContent:function(e){var t=this;t.set("headerContent",e);t.render()},setFooterContent:function(e){var t=this;t.set("footerContent",e);t.render()}});if(e.version.match(/^1\.[123]/)){e.getScript(location.protocol+"//g.alicdn.com/mui/overlay/1.0.6/overlay.css")}return i},{requires:["overlay","mui/overlay/overlay.css","mui/button/btn.css","mui/button/btn-tb.css","mui/msg/msg.css"]});KISSY.add("mui/minicart/util",function(t,e){var r={};t.mix(r,{toMoney:function(t,r){function i(){var t=false;if(/chaoshi/.test(location.host)){t=true}if(window.g_config&&window.g_config.bizId==="chaoshi"){t=true}return t}if(i()&&e.get("#J_NavCart")&&!e.get("#J_NavCart_rmbStyle")){var a=e.create('<style id="J_NavCart_rmbStyle">.tm-mcTotal .tm-mcRmb{display:none;} .tm-mcTotalFee,.tm-mcOrder .tm-mcPrice{font-family: verdana, arial;}</style>');e.append(a,e.get("#J_NavCart"))}if(isNaN(parseFloat(t,10))){return t}if("number"!==typeof t){t=t-0}var n=100;var c="&yen";if(r){n=r.unitFactor||n;c=r.symbol||c}t=t/n;return isNaN(t)?"":c+t.toFixed(2)},toWeight:function(t){if("number"!==typeof t){t=t-0}t/=1e3;return t||0},toTxt:function(t){var r=document.createElement("div");r.innerHTML=t;return e.text(r).replace(/\s+/g,"")},showLogin:function(e){t.use("mui/minilogin/",function(t,r){if(!r.show){r=new r}r.show(e)})}});return r},{requires:["dom"]});